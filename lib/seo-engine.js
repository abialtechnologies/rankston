/**
 * lib/seo-engine.js — Automated SEO Machine
 *
 * STRATEGY ($5 budget, maximum output):
 * 1. Fetch base keywords from DataForSEO: 1 call per service (10 calls = ~$0.50)
 * 2. Filter for HIGH-INTENT only (buying, hiring, leads)
 * 3. Expand with locations LOCALLY (50 states + 485 cities = FREE)
 * 4. Get volume for top 700 combined keywords (1 call = ~$0.05)
 * 5. Score, cluster, and map to pages (FREE)
 *
 * Result: 10,000+ keyword-location combos from ~$0.55 API spend
 */

import { getSupabaseServerClient } from './supabase.js';
import fs from 'fs';
import path from 'path';

const DATAFORSEO_BASE = 'https://api.dataforseo.com/v3';

function getAuth() {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) throw new Error('DataForSEO credentials not set');
  return 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
}

async function apiCall(endpoint, body) {
  const res = await fetch(`${DATAFORSEO_BASE}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': getAuth(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (data.status_code !== 20000) {
    throw new Error(data.status_message || `API error: ${data.status_code}`);
  }
  return data;
}

/* ══════════════════════════════════════════════
   HIGH-INTENT SEED KEYWORDS (predefined — FREE)
   ══════════════════════════════════════════════ */
const HIGH_INTENT_SEEDS = {
  'seo-services': [
    'seo services', 'seo company', 'seo agency', 'hire seo expert',
    'best seo company', 'affordable seo services', 'local seo services',
    'seo services for small business', 'professional seo services',
    'seo consultant', 'enterprise seo services',
  ],
  'ppc-advertising': [
    'ppc management', 'google ads agency', 'ppc company', 'hire ppc expert',
    'google ads management services', 'ppc advertising agency',
    'affordable ppc management', 'pay per click agency',
  ],
  'gmb-optimization': [
    'google business profile management', 'gmb optimization service',
    'google my business agency', 'local listing management',
    'gmb ranking service', 'google maps seo',
  ],
  'social-media-marketing': [
    'social media marketing agency', 'social media management company',
    'hire social media manager', 'social media advertising agency',
    'instagram marketing agency', 'facebook ads agency',
  ],
  'web-development': [
    'web design company', 'website development agency', 'hire web developer',
    'custom website design', 'ecommerce website development',
    'small business web design', 'professional website design',
  ],
  'ai-automation': [
    'ai marketing automation', 'marketing automation agency',
    'ai for business', 'chatbot development company',
    'business process automation', 'ai integration services',
  ],
  'content-marketing': [
    'content marketing agency', 'content creation services',
    'blog writing service', 'content marketing company',
    'copywriting agency', 'content strategy consulting',
  ],
  'graphic-designing': [
    'graphic design services', 'branding agency', 'logo design company',
    'brand identity design', 'graphic design agency',
  ],
  'video-editing': [
    'video production company', 'video editing services',
    'commercial video production', 'video marketing agency',
  ],
  'chatbot-development': [
    'chatbot development company', 'custom chatbot development',
    'ai chatbot agency', 'chatbot for business',
  ],
};

/* ── Intent modifiers to prepend/append (FREE expansion) ── */
const INTENT_MODIFIERS = [
  'best', 'top', 'affordable', 'professional', 'hire',
  'cheap', 'local', 'trusted', 'expert', 'near me',
];

/* ══════════════════════════════════════════════
   STEP 1: FETCH + FILTER (DataForSEO — $0.05/call)
   ══════════════════════════════════════════════ */
export async function fetchServiceKeywords(serviceSlug) {
  const seeds = HIGH_INTENT_SEEDS[serviceSlug];
  if (!seeds) throw new Error(`Unknown service: ${serviceSlug}`);

  const supabase = getSupabaseServerClient();

  // Check if already fetched (cache)
  const { data: existing } = await supabase
    .from('seo_keywords')
    .select('id')
    .eq('service', serviceSlug)
    .eq('location', 'United States')
    .limit(1);

  if (existing?.length > 0) {
    return { cached: true, message: `Keywords for "${serviceSlug}" already cached. Skipping API call.` };
  }

  // Fetch keyword suggestions — ONE call for all seeds combined
  // Use the primary seed for suggestions, rest will be used for volume
  const data = await apiCall('/dataforseo_labs/google/keyword_suggestions/live', [{
    keyword: seeds[0],
    location_code: 2840,
    language_code: 'en',
    include_seed_keyword: true,
    limit: 700,
    filters: [
      ['keyword_info.search_volume', '>', 10],
    ],
  }]);

  const apiResults = data.tasks?.[0]?.result?.[0]?.items || [];

  // Filter: keep only HIGH-INTENT keywords
  const highIntent = apiResults.filter((item) => {
    const kw = item.keyword.toLowerCase();
    return isHighIntent(kw);
  });

  // Combine API results with our predefined seeds
  const allKeywords = new Map();

  // Add API results
  for (const item of highIntent) {
    allKeywords.set(item.keyword.toLowerCase(), {
      keyword: item.keyword,
      service: serviceSlug,
      location: 'United States',
      search_volume: item.keyword_info?.search_volume || 0,
      keyword_difficulty: item.keyword_properties?.keyword_difficulty || 0,
      cpc: item.keyword_info?.cpc || 0,
      competition: item.keyword_info?.competition || 0,
      intent: detectIntent(item.keyword),
      opportunity_score: 0,
      page_type: 'service_page',
    });
  }

  // Add predefined seeds (with volume from API if available)
  for (const seed of seeds) {
    if (!allKeywords.has(seed)) {
      allKeywords.set(seed, {
        keyword: seed,
        service: serviceSlug,
        location: 'United States',
        search_volume: 100, // will be updated later
        keyword_difficulty: 50,
        cpc: 0,
        competition: 0,
        intent: 'transactional',
        opportunity_score: 0,
        page_type: 'service_page',
      });
    }
  }

  // Calculate scores
  const keywordsArray = [...allKeywords.values()].map((kw) => {
    kw.opportunity_score = calcScore(kw.search_volume, kw.keyword_difficulty, kw.intent);
    return kw;
  });

  // Upsert to Supabase
  const { error } = await supabase
    .from('seo_keywords')
    .upsert(keywordsArray, { onConflict: 'keyword,service,location' });

  if (error) throw new Error(error.message);

  // Log the job
  await supabase.from('seo_fetch_jobs').insert({
    service: serviceSlug,
    location: 'United States',
    status: 'completed',
    keywords_count: keywordsArray.length,
    cost: 0.05,
    completed_at: new Date().toISOString(),
  });

  return {
    cached: false,
    keywords: keywordsArray.length,
    highIntent: highIntent.length,
    cost: '$0.05',
  };
}

/* ══════════════════════════════════════════════
   STEP 2: LOCATION EXPANSION (100% FREE)
   ══════════════════════════════════════════════ */
export async function expandWithLocations(serviceSlug) {
  const supabase = getSupabaseServerClient();

  // Get base keywords for this service
  const { data: baseKeywords } = await supabase
    .from('seo_keywords')
    .select('keyword, search_volume, keyword_difficulty, cpc, intent')
    .eq('service', serviceSlug)
    .eq('location', 'United States')
    .gte('search_volume', 50)
    .order('opportunity_score', { ascending: false })
    .limit(50); // Top 50 keywords only

  if (!baseKeywords?.length) return { expanded: 0 };

  // Load locations
  const locPath = path.join(process.cwd(), 'data', 'locations.json');
  const locations = JSON.parse(fs.readFileSync(locPath, 'utf-8'));

  const expansions = [];

  for (const kw of baseKeywords) {
    for (const state of locations) {
      // State level: "seo services in Ohio"
      const stateKw = `${kw.keyword} in ${state.state}`;
      expansions.push({
        keyword: stateKw,
        service: serviceSlug,
        location: state.state,
        search_volume: Math.max(10, Math.round(kw.search_volume * 0.05)),
        keyword_difficulty: Math.max(5, kw.keyword_difficulty - 15),
        cpc: kw.cpc,
        competition: kw.competition * 0.7,
        intent: 'transactional',
        opportunity_score: 0,
        page_type: 'city_page',
      });

      // Top 3 cities per state only (avoid spam)
      const topCities = (state.cities || []).slice(0, 3);
      for (const city of topCities) {
        const cityKw = `${kw.keyword} in ${city.city}`;
        expansions.push({
          keyword: cityKw,
          service: serviceSlug,
          location: `${city.city}, ${state.stateAbbr}`,
          search_volume: Math.max(5, Math.round(kw.search_volume * 0.02)),
          keyword_difficulty: Math.max(3, kw.keyword_difficulty - 25),
          cpc: kw.cpc,
          competition: kw.competition * 0.5,
          intent: 'transactional',
          opportunity_score: 0,
          page_type: 'city_page',
        });
      }
    }
  }

  // Calculate scores
  for (const kw of expansions) {
    kw.opportunity_score = calcScore(kw.search_volume, kw.keyword_difficulty, kw.intent);
  }

  // Deduplicate
  const seen = new Set();
  const unique = expansions.filter((kw) => {
    const key = `${kw.keyword}|${kw.service}|${kw.location}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Upsert in batches of 500
  let inserted = 0;
  for (let i = 0; i < unique.length; i += 500) {
    const batch = unique.slice(i, i + 500);
    const { error } = await supabase
      .from('seo_keywords')
      .upsert(batch, { onConflict: 'keyword,service,location', ignoreDuplicates: true });
    if (!error) inserted += batch.length;
  }

  return {
    expanded: inserted,
    baseKeywords: baseKeywords.length,
    states: locations.length,
    cost: '$0.00 (local expansion)',
  };
}

/* ══════════════════════════════════════════════
   STEP 3: RUN FULL PIPELINE (all services)
   ══════════════════════════════════════════════ */
export async function runFullPipeline() {
  const services = Object.keys(HIGH_INTENT_SEEDS);
  const results = {
    services: [],
    totalKeywords: 0,
    totalExpanded: 0,
    totalCost: 0,
  };

  for (const service of services) {
    try {
      // Step 1: Fetch base keywords (or use cache)
      const fetchResult = await fetchServiceKeywords(service);

      let expanded = 0;
      if (!fetchResult.cached) {
        // Step 2: Expand with locations (FREE)
        const expandResult = await expandWithLocations(service);
        expanded = expandResult.expanded;
      }

      results.services.push({
        service,
        baseKeywords: fetchResult.keywords || 0,
        expanded,
        cached: fetchResult.cached || false,
        cost: fetchResult.cached ? 0 : 0.05,
      });

      results.totalKeywords += fetchResult.keywords || 0;
      results.totalExpanded += expanded;
      if (!fetchResult.cached) results.totalCost += 0.05;
    } catch (err) {
      results.services.push({
        service,
        error: err.message,
        cost: 0,
      });
    }
  }

  return results;
}

/* ══════════════════════════════════════════════
   HELPER FUNCTIONS (all FREE)
   ══════════════════════════════════════════════ */

function isHighIntent(keyword) {
  const highIntentPatterns = [
    'service', 'services', 'company', 'companies', 'agency', 'agencies',
    'hire', 'hiring', 'near me', 'cost', 'price', 'pricing', 'rates',
    'quote', 'consultation', 'consultant', 'expert', 'professional',
    'best', 'top', 'affordable', 'cheap', 'local', 'for business',
    'for small business', 'management', 'manager', 'specialist',
    'firm', 'provider', 'solution', 'package', 'plan',
    'buy', 'order', 'get', 'find', 'need',
  ];
  return highIntentPatterns.some((p) => keyword.includes(p));
}

function detectIntent(keyword) {
  const kw = keyword.toLowerCase();
  const transactional = ['hire', 'buy', 'service', 'near me', 'cost', 'price', 'quote', 'company', 'agency', 'find', 'get', 'order', 'consultation', 'affordable', 'professional', 'expert', 'management', 'provider'];
  const commercial = ['best', 'top', 'review', 'comparison', 'vs', 'alternative', 'rated', 'recommended'];
  if (transactional.some((p) => kw.includes(p))) return 'transactional';
  if (commercial.some((p) => kw.includes(p))) return 'commercial';
  return 'informational';
}

function calcScore(volume, difficulty, intent) {
  const mult = { transactional: 3.0, commercial: 2.0, informational: 1.0 };
  return Math.round(((volume * (mult[intent] || 1)) / (difficulty + 1)) * 100) / 100;
}

export { HIGH_INTENT_SEEDS };
