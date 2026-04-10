/**
 * lib/dataforseo.js — DataForSEO API Client
 *
 * Budget-conscious: batches keywords to minimize API calls.
 * Uses search_volume/live endpoint (~$0.05 per 700 keywords).
 */

const DATAFORSEO_BASE = 'https://api.dataforseo.com/v3';

function getAuth() {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) throw new Error('DataForSEO credentials not set');
  return 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
}

async function apiCall(endpoint, body, method = 'POST') {
  const res = await fetch(`${DATAFORSEO_BASE}${endpoint}`, {
    method,
    headers: {
      'Authorization': getAuth(),
      'Content-Type': 'application/json',
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`DataForSEO error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  if (data.status_code !== 20000) {
    throw new Error(data.status_message || 'Unknown DataForSEO error');
  }

  return data;
}

/**
 * Get keyword suggestions for a seed keyword + location.
 * Returns up to 1000 related keywords with volume, KD, CPC.
 * Cost: ~$0.05 per call
 */
export async function getKeywordSuggestions(seedKeyword, locationCode = 2840, languageCode = 'en') {
  const data = await apiCall('/dataforseo_labs/google/keyword_suggestions/live', [{
    keyword: seedKeyword,
    location_code: locationCode,
    language_code: languageCode,
    include_seed_keyword: true,
    limit: 1000,
  }]);

  const results = data.tasks?.[0]?.result?.[0]?.items || [];

  return results.map((item) => ({
    keyword: item.keyword,
    searchVolume: item.keyword_info?.search_volume || 0,
    keywordDifficulty: item.keyword_properties?.keyword_difficulty || 0,
    cpc: item.keyword_info?.cpc || 0,
    competition: item.keyword_info?.competition || 0,
    competitionLevel: item.keyword_info?.competition_level || 'UNKNOWN',
    monthlySearches: item.keyword_info?.monthly_searches || [],
  }));
}

/**
 * Get search volume for a batch of keywords.
 * Up to 700 keywords per request.
 * Cost: ~$0.05 per call
 */
export async function getSearchVolume(keywords, locationCode = 2840, languageCode = 'en') {
  // Batch into chunks of 700
  const chunks = [];
  for (let i = 0; i < keywords.length; i += 700) {
    chunks.push(keywords.slice(i, i + 700));
  }

  const allResults = [];

  for (const chunk of chunks) {
    const data = await apiCall('/keywords_data/google_ads/search_volume/live', [{
      keywords: chunk,
      location_code: locationCode,
      language_code: languageCode,
    }]);

    const results = data.tasks?.[0]?.result || [];
    for (const item of results) {
      allResults.push({
        keyword: item.keyword,
        searchVolume: item.search_volume || 0,
        cpc: item.cpc || 0,
        competition: item.competition || 0,
        competitionLevel: item.competition_level || 'UNKNOWN',
        monthlySearches: item.monthly_searches || [],
      });
    }
  }

  return allResults;
}

/**
 * Detect keyword intent based on word patterns.
 * FREE — no API call needed.
 */
export function detectIntent(keyword) {
  const kw = keyword.toLowerCase();

  // Transactional patterns
  const transactional = [
    'buy', 'hire', 'near me', 'service', 'services', 'cost', 'price', 'pricing',
    'quote', 'estimate', 'book', 'order', 'get', 'find', 'call', 'contact',
    'affordable', 'cheap', 'deal', 'discount', 'free quote', 'consultation',
    'company', 'companies', 'contractor', 'agency', 'firm', 'pro ', 'professional',
  ];

  // Commercial investigation
  const commercial = [
    'best', 'top', 'review', 'reviews', 'comparison', 'vs', 'versus',
    'alternative', 'recommended', 'rated', 'ranking', 'compare',
    'worth', 'should i', 'which', 'pros and cons',
  ];

  // Informational
  const informational = [
    'how to', 'how do', 'what is', 'what are', 'guide', 'tips', 'tutorial',
    'why', 'when', 'where', 'learn', 'example', 'examples', 'ideas',
    'meaning', 'definition', 'explain', 'difference', 'benefits',
    'steps', 'process', 'template', 'checklist',
  ];

  if (transactional.some((p) => kw.includes(p))) return 'transactional';
  if (commercial.some((p) => kw.includes(p))) return 'commercial';
  if (informational.some((p) => kw.includes(p))) return 'informational';

  // Default: check for location indicators (transactional)
  if (/\b(in|for|near)\s+[a-z]+/.test(kw)) return 'transactional';

  return 'informational';
}

/**
 * Calculate opportunity score.
 * Higher = better opportunity.
 * FREE — no API call.
 */
export function calculateOpportunityScore(volume, difficulty, intent) {
  const intentMultiplier = {
    transactional: 3.0,
    commercial: 2.0,
    informational: 1.0,
  };

  const multiplier = intentMultiplier[intent] || 1.0;
  return Math.round(((volume * multiplier) / (difficulty + 1)) * 100) / 100;
}

/**
 * Suggest page type based on intent and volume.
 * FREE — no API call.
 */
export function suggestPageType(keyword, intent, volume) {
  if (intent === 'transactional' && volume > 100) return 'service_page';
  if (intent === 'commercial' && volume > 50) return 'service_page';
  if (intent === 'informational') return 'blog';

  // Location-specific keywords → city landing page
  const cityPattern = /\b(in|for|near)\s+([\w\s]+)$/i;
  if (cityPattern.test(keyword)) return 'city_page';

  return 'blog';
}

/**
 * Cluster keywords by word similarity.
 * Groups keywords that share 2+ common words.
 * FREE — no API call.
 */
export function clusterKeywords(keywords) {
  const stopWords = new Set(['the', 'a', 'an', 'in', 'for', 'of', 'to', 'and', 'or', 'is', 'are', 'how', 'what', 'your', 'my', 'do', 'does']);

  function getSignificantWords(kw) {
    return kw.toLowerCase().split(/\s+/).filter((w) => w.length > 2 && !stopWords.has(w));
  }

  function similarity(words1, words2) {
    const set2 = new Set(words2);
    const common = words1.filter((w) => set2.has(w));
    return common.length;
  }

  const clusters = [];
  const assigned = new Set();

  // Sort by volume (highest first)
  const sorted = [...keywords].sort((a, b) => (b.searchVolume || 0) - (a.searchVolume || 0));

  for (const kw of sorted) {
    if (assigned.has(kw.keyword)) continue;

    const words = getSignificantWords(kw.keyword);
    const cluster = {
      mainKeyword: kw.keyword,
      keywords: [kw],
      totalVolume: kw.searchVolume || 0,
    };

    // Find similar keywords
    for (const other of sorted) {
      if (assigned.has(other.keyword) || other.keyword === kw.keyword) continue;
      const otherWords = getSignificantWords(other.keyword);
      if (similarity(words, otherWords) >= 2) {
        cluster.keywords.push(other);
        cluster.totalVolume += other.searchVolume || 0;
        assigned.add(other.keyword);
      }
    }

    assigned.add(kw.keyword);
    clusters.push(cluster);
  }

  return clusters;
}

/** US location codes for major cities */
export const US_LOCATIONS = {
  'United States': 2840,
  'New York': 1023191,
  'Los Angeles': 1013962,
  'Chicago': 1016367,
  'Houston': 1026339,
  'Phoenix': 1024429,
  'Dallas': 1026339,
  'San Antonio': 1025277,
  'San Diego': 1014221,
  'Austin': 1026135,
  'Columbus': 1014895,
};

/** Seed keywords per service */
export const SERVICE_SEEDS = {
  'SEO': ['seo services', 'seo agency', 'seo company', 'search engine optimization'],
  'PPC': ['ppc management', 'google ads agency', 'ppc company', 'pay per click advertising'],
  'GMB': ['google business profile', 'gmb optimization', 'google my business management'],
  'Social Media': ['social media marketing', 'social media management', 'social media agency'],
  'Web Development': ['web design company', 'website development', 'web design agency'],
  'AI Automation': ['ai marketing automation', 'ai for business', 'marketing automation agency'],
  'Content Marketing': ['content marketing agency', 'content creation services', 'blog writing service'],
  'Local SEO': ['local seo services', 'local seo company', 'local search optimization'],
};
