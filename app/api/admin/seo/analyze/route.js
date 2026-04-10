/**
 * /api/admin/seo/analyze — Run Analysis on Stored Keywords
 *
 * POST: { service?: string } — re-analyze intent, scores, clusters
 * FREE — no DataForSEO API calls
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { getSupabaseServerClient } from '../../../../../lib/supabase.js';
import {
  detectIntent,
  calculateOpportunityScore,
  suggestPageType,
  clusterKeywords,
} from '../../../../../lib/dataforseo.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { service } = await request.json().catch(() => ({}));
    const supabase = getSupabaseServerClient();

    // Fetch keywords to analyze
    let query = supabase.from('seo_keywords').select('*');
    if (service) query = query.eq('service', service);

    const { data: keywords, error } = await query;
    if (error) throw new Error(error.message);
    if (!keywords?.length) {
      return NextResponse.json({ message: 'No keywords to analyze', updated: 0 });
    }

    // Re-analyze each keyword
    let updated = 0;
    for (const kw of keywords) {
      const intent = detectIntent(kw.keyword);
      const score = calculateOpportunityScore(kw.search_volume, kw.keyword_difficulty, intent);
      const pageType = suggestPageType(kw.keyword, intent, kw.search_volume);

      if (intent !== kw.intent || score !== kw.opportunity_score || pageType !== kw.page_type) {
        await supabase
          .from('seo_keywords')
          .update({ intent, opportunity_score: score, page_type: pageType })
          .eq('id', kw.id);
        updated++;
      }
    }

    // Cluster keywords by service
    const services = [...new Set(keywords.map((k) => k.service))];
    let clustersCreated = 0;

    for (const svc of services) {
      const svcKeywords = keywords.filter((k) => k.service === svc);
      const clusters = clusterKeywords(svcKeywords.map((k) => ({
        keyword: k.keyword,
        searchVolume: k.search_volume,
      })));

      // Store clusters (clear old ones first)
      await supabase.from('seo_clusters').delete().eq('service', svc);

      for (const cluster of clusters.filter((c) => c.keywords.length > 1)) {
        const kwInCluster = svcKeywords.filter((k) =>
          cluster.keywords.some((ck) => ck.keyword === k.keyword)
        );
        const avgVol = Math.round(kwInCluster.reduce((s, k) => s + k.search_volume, 0) / kwInCluster.length);
        const avgKd = Math.round(kwInCluster.reduce((s, k) => s + k.keyword_difficulty, 0) / kwInCluster.length * 10) / 10;

        // Determine best page type from majority
        const pageTypes = kwInCluster.map((k) => k.page_type);
        const typeCount = {};
        pageTypes.forEach((t) => { typeCount[t] = (typeCount[t] || 0) + 1; });
        const bestType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'blog';

        const { data: newCluster } = await supabase
          .from('seo_clusters')
          .insert({
            name: cluster.mainKeyword,
            service: svc,
            main_keyword: cluster.mainKeyword,
            keyword_count: cluster.keywords.length,
            avg_volume: avgVol,
            avg_difficulty: avgKd,
            recommended_page_type: bestType,
          })
          .select()
          .single();

        if (newCluster) {
          // Update keywords with cluster_id
          const clusterKwNames = cluster.keywords.map((k) => k.keyword);
          await supabase
            .from('seo_keywords')
            .update({ cluster_id: newCluster.id })
            .in('keyword', clusterKwNames)
            .eq('service', svc);

          clustersCreated++;
        }
      }
    }

    return NextResponse.json({
      message: 'Analysis complete',
      keywordsUpdated: updated,
      clustersCreated,
      totalKeywords: keywords.length,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
