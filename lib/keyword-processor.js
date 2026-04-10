/**
 * lib/keyword-processor.js — Quality Control Layer
 *
 * Processes 75k+ raw keywords into actionable tiers:
 * - Tier A: Top priority, immediate page creation (20-50 keywords)
 * - Tier B: Future pages, after Phase 1 indexing
 * - Tier C: Archive/ignore
 *
 * Pipeline:
 * 1. Remove duplicates & junk
 * 2. Enhanced scoring (volume + intent + competition + lead potential)
 * 3. Tier assignment
 * 4. Smart clustering (intent + service + problem based)
 * 5. Page generation lock (only approved Tier A)
 */

import { getSupabaseServerClient } from './supabase.js';

/* ══════════════════════════════════════════════
   STEP 1: CLEANUP — Remove junk, dupes, low-value
   ══════════════════════════════════════════════ */
export async function cleanupKeywords() {
  const supabase = getSupabaseServerClient();
  const stats = { deleted: 0, deduped: 0, filtered: 0 };

  // 1a. Delete zero-volume, useless keywords
  const { count: c1 } = await supabase
    .from('seo_keywords')
    .delete({ count: 'exact' })
    .or('search_volume.eq.0,keyword.ilike.%what is%,keyword.ilike.%wikipedia%,keyword.ilike.%reddit%,keyword.ilike.%youtube%,keyword.ilike.%meaning of%,keyword.ilike.%definition%');
  stats.deleted += c1 || 0;

  // 1b. Delete keywords that are too long (spammy)
  const { data: longKws } = await supabase
    .from('seo_keywords')
    .select('id, keyword')
    .limit(10000);

  if (longKws) {
    const tooLong = longKws.filter((k) => k.keyword.split(' ').length > 8);
    if (tooLong.length > 0) {
      await supabase.from('seo_keywords').delete().in('id', tooLong.map((k) => k.id));
      stats.deleted += tooLong.length;
    }
  }

  // 1c. Delete pure informational with very low volume
  const { count: c3 } = await supabase
    .from('seo_keywords')
    .delete({ count: 'exact' })
    .eq('intent', 'informational')
    .lt('search_volume', 20);
  stats.filtered += c3 || 0;

  return stats;
}

/* ══════════════════════════════════════════════
   STEP 2: ENHANCED SCORING — Lead-focused
   ══════════════════════════════════════════════ */
export function calculateLeadScore(keyword, volume, difficulty, cpc, intent) {
  const kw = keyword.toLowerCase();

  // ── Volume Weight (0-30 points)
  let volumeScore = 0;
  if (volume >= 1000) volumeScore = 30;
  else if (volume >= 500) volumeScore = 25;
  else if (volume >= 200) volumeScore = 20;
  else if (volume >= 100) volumeScore = 15;
  else if (volume >= 50) volumeScore = 10;
  else if (volume >= 20) volumeScore = 5;

  // ── Intent Weight (0-35 points)
  let intentScore = 0;
  const highBuyIntent = ['hire', 'cost', 'price', 'quote', 'near me', 'affordable', 'services', 'company', 'agency', 'consultation', 'rates', 'packages'];
  const mediumBuyIntent = ['best', 'top', 'professional', 'expert', 'management', 'provider', 'firm', 'specialist'];
  const lowBuyIntent = ['review', 'comparison', 'vs', 'alternative'];

  if (highBuyIntent.some((p) => kw.includes(p))) intentScore = 35;
  else if (mediumBuyIntent.some((p) => kw.includes(p))) intentScore = 25;
  else if (lowBuyIntent.some((p) => kw.includes(p))) intentScore = 15;
  else if (intent === 'transactional') intentScore = 20;
  else if (intent === 'commercial') intentScore = 12;
  else intentScore = 3;

  // ── Competition Penalty (0 to -20 points)
  let competitionPenalty = 0;
  if (difficulty > 80) competitionPenalty = -20;
  else if (difficulty > 60) competitionPenalty = -12;
  else if (difficulty > 40) competitionPenalty = -6;
  else if (difficulty > 20) competitionPenalty = -2;

  // ── CPC/Lead Potential Bonus (0-15 points)
  let cpcBonus = 0;
  if (cpc >= 10) cpcBonus = 15;
  else if (cpc >= 5) cpcBonus = 12;
  else if (cpc >= 2) cpcBonus = 8;
  else if (cpc >= 1) cpcBonus = 4;

  // ── Location Specificity Bonus (0-10 points)
  let locationBonus = 0;
  if (/\bin\s+[A-Z]/.test(keyword)) locationBonus = 5;
  if (/\b(near me|in my area)\b/i.test(kw)) locationBonus = 10;

  const totalScore = Math.max(0, volumeScore + intentScore + competitionPenalty + cpcBonus + locationBonus);
  return Math.round(totalScore * 100) / 100;
}

/* ══════════════════════════════════════════════
   STEP 3: TIER ASSIGNMENT
   ══════════════════════════════════════════════ */
export function assignTier(leadScore, volume, intent) {
  // Tier A: Lead magnets — highest conversion potential
  if (leadScore >= 50 && volume >= 50 && (intent === 'transactional' || intent === 'commercial')) {
    return 'A';
  }

  // Tier B: Good potential but needs Phase 2
  if (leadScore >= 25 && volume >= 20) {
    return 'B';
  }

  // Tier C: Archive
  return 'C';
}

/* ══════════════════════════════════════════════
   STEP 4: SMART CLUSTERING (intent + service + problem)
   ══════════════════════════════════════════════ */
export function smartCluster(keywords) {
  const clusters = new Map();

  for (const kw of keywords) {
    const key = getClusterKey(kw.keyword, kw.service);

    if (!clusters.has(key)) {
      clusters.set(key, {
        name: key,
        service: kw.service,
        type: getClusterType(kw.keyword),
        keywords: [],
        totalVolume: 0,
        avgScore: 0,
        bestKeyword: null,
      });
    }

    const cluster = clusters.get(key);
    cluster.keywords.push(kw);
    cluster.totalVolume += kw.search_volume || 0;

    if (!cluster.bestKeyword || (kw.lead_score || 0) > (cluster.bestKeyword.lead_score || 0)) {
      cluster.bestKeyword = kw;
    }
  }

  // Calculate avg score and filter small clusters
  for (const [key, cluster] of clusters) {
    if (cluster.keywords.length > 0) {
      cluster.avgScore = cluster.keywords.reduce((s, k) => s + (k.lead_score || 0), 0) / cluster.keywords.length;
    }
    if (cluster.keywords.length < 2) {
      clusters.delete(key);
    }
  }

  return [...clusters.values()].sort((a, b) => b.avgScore - a.avgScore);
}

function getClusterKey(keyword, service) {
  const kw = keyword.toLowerCase();

  // Remove location suffixes for clustering
  const base = kw
    .replace(/\s+in\s+[\w\s,]+$/i, '')
    .replace(/\s+near\s+me$/i, '')
    .replace(/\s+(for|of)\s+[\w\s]+$/i, '')
    .trim();

  // Normalize modifiers
  const normalized = base
    .replace(/^(best|top|affordable|cheap|professional|expert|local|trusted)\s+/i, '')
    .replace(/\s+(company|agency|firm|provider|consultant|specialist|expert)s?$/i, ' services')
    .trim();

  return `${service}::${normalized}`;
}

function getClusterType(keyword) {
  const kw = keyword.toLowerCase();
  if (/cost|price|pricing|rates|quote|packages/i.test(kw)) return 'pricing';
  if (/how|guide|tips|tutorial|learn/i.test(kw)) return 'educational';
  if (/best|top|review|comparison|vs/i.test(kw)) return 'comparison';
  if (/near me|in \w+|local/i.test(kw)) return 'location';
  if (/for (small|business|startup|enterprise)/i.test(kw)) return 'audience';
  return 'service';
}

/* ══════════════════════════════════════════════
   MASTER PROCESSOR — Run the full quality pipeline
   ══════════════════════════════════════════════ */
export async function processKeywords() {
  const supabase = getSupabaseServerClient();

  // Step 1: Cleanup
  const cleanupStats = await cleanupKeywords();

  // Step 2 & 3: Score and tier ALL remaining keywords
  const { data: allKeywords, error } = await supabase
    .from('seo_keywords')
    .select('*')
    .limit(50000);

  if (error) throw new Error(error.message);

  let tierCounts = { A: 0, B: 0, C: 0 };
  const batches = [];

  for (const kw of allKeywords || []) {
    const leadScore = calculateLeadScore(
      kw.keyword, kw.search_volume, kw.keyword_difficulty, kw.cpc, kw.intent
    );
    const tier = assignTier(leadScore, kw.search_volume, kw.intent);
    tierCounts[tier]++;

    batches.push({
      id: kw.id,
      lead_score: leadScore,
      tier,
      phase: tier === 'A' ? 1 : tier === 'B' ? 2 : 3,
    });
  }

  // Update in batches of 500
  for (let i = 0; i < batches.length; i += 500) {
    const batch = batches.slice(i, i + 500);
    for (const item of batch) {
      await supabase
        .from('seo_keywords')
        .update({
          lead_score: item.lead_score,
          tier: item.tier,
          phase: item.phase,
        })
        .eq('id', item.id);
    }
  }

  // Step 4: Smart clustering on Tier A + B only
  const tierAB = (allKeywords || []).filter((kw) => {
    const ls = calculateLeadScore(kw.keyword, kw.search_volume, kw.keyword_difficulty, kw.cpc, kw.intent);
    return assignTier(ls, kw.search_volume, kw.intent) !== 'C';
  });

  const clusters = smartCluster(tierAB.map((kw) => ({
    ...kw,
    lead_score: calculateLeadScore(kw.keyword, kw.search_volume, kw.keyword_difficulty, kw.cpc, kw.intent),
  })));

  // Save clusters to DB
  await supabase.from('seo_clusters').delete().gte('id', 0);

  let clustersSaved = 0;
  for (const cluster of clusters.slice(0, 200)) { // Top 200 clusters
    const { data: saved } = await supabase
      .from('seo_clusters')
      .insert({
        name: cluster.bestKeyword?.keyword || cluster.name,
        service: cluster.service,
        main_keyword: cluster.bestKeyword?.keyword || '',
        keyword_count: cluster.keywords.length,
        avg_volume: Math.round(cluster.totalVolume / cluster.keywords.length),
        avg_difficulty: Math.round(cluster.keywords.reduce((s, k) => s + (k.keyword_difficulty || 0), 0) / cluster.keywords.length),
        recommended_page_type: cluster.type === 'location' ? 'city_page' : 'service_page',
      })
      .select()
      .single();

    if (saved) {
      // Link keywords to cluster
      const kwIds = cluster.keywords.map((k) => k.id);
      await supabase
        .from('seo_keywords')
        .update({ cluster_id: saved.id })
        .in('id', kwIds);
      clustersSaved++;
    }
  }

  return {
    cleanup: cleanupStats,
    processed: allKeywords?.length || 0,
    tiers: tierCounts,
    clusters: clustersSaved,
    tierAKeywords: tierCounts.A,
    recommendation: `Phase 1: Create pages for ${Math.min(tierCounts.A, 50)} Tier A keywords first.`,
  };
}
