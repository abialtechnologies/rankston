/**
 * /api/admin/seo/fetch — Trigger Keyword Fetch from DataForSEO
 *
 * POST: { service: string, location?: string }
 * Fetches 1000+ keywords, analyzes intent, scores, stores in Supabase
 * Cost: ~$0.05 per fetch
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { getSupabaseServerClient } from '../../../../../lib/supabase.js';
import {
  getKeywordSuggestions,
  detectIntent,
  calculateOpportunityScore,
  suggestPageType,
  US_LOCATIONS,
  SERVICE_SEEDS,
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
    const { service, location = 'United States' } = await request.json();

    if (!service || !SERVICE_SEEDS[service]) {
      return NextResponse.json({
        error: 'Invalid service',
        validServices: Object.keys(SERVICE_SEEDS),
      }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    const locationCode = US_LOCATIONS[location] || 2840;

    // Create fetch job
    const { data: job } = await supabase
      .from('seo_fetch_jobs')
      .insert({ service, location, status: 'running' })
      .select()
      .single();

    const seeds = SERVICE_SEEDS[service];
    const allKeywords = [];
    let totalCost = 0;

    // Fetch keywords for each seed (~$0.05 per seed)
    for (const seed of seeds) {
      try {
        const results = await getKeywordSuggestions(seed, locationCode);
        totalCost += 0.05;

        for (const kw of results) {
          const intent = detectIntent(kw.keyword);
          const score = calculateOpportunityScore(kw.searchVolume, kw.keywordDifficulty, intent);
          const pageType = suggestPageType(kw.keyword, intent, kw.searchVolume);

          allKeywords.push({
            keyword: kw.keyword,
            service,
            location,
            search_volume: kw.searchVolume,
            keyword_difficulty: kw.keywordDifficulty,
            cpc: kw.cpc,
            competition: kw.competition,
            intent,
            opportunity_score: score,
            page_type: pageType,
          });
        }
      } catch (err) {
        console.error(`Error fetching seed "${seed}":`, err.message);
      }
    }

    // Deduplicate by keyword
    const seen = new Set();
    const unique = allKeywords.filter((kw) => {
      const key = `${kw.keyword}|${kw.location}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Upsert to Supabase (in batches of 500)
    let inserted = 0;
    for (let i = 0; i < unique.length; i += 500) {
      const batch = unique.slice(i, i + 500);
      const { error } = await supabase
        .from('seo_keywords')
        .upsert(batch, {
          onConflict: 'keyword,service,location',
          ignoreDuplicates: false,
        });

      if (!error) inserted += batch.length;
    }

    // Update job status
    await supabase
      .from('seo_fetch_jobs')
      .update({
        status: 'completed',
        keywords_count: inserted,
        cost: totalCost,
        completed_at: new Date().toISOString(),
      })
      .eq('id', job.id);

    return NextResponse.json({
      message: `Fetched ${inserted} keywords for "${service}" in "${location}"`,
      keywords: inserted,
      seeds: seeds.length,
      estimatedCost: `$${totalCost.toFixed(2)}`,
      jobId: job.id,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
