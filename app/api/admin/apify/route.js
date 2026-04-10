/**
 * /api/admin/apify — Daily News Fetcher (1 credit/day)
 *
 * GET: Returns cached news articles
 * - Fetches from Apify ONLY once per day at 6:00 AM PKT (01:00 UTC)
 * - Caches results in data/news-cache.json
 * - All other requests serve cached data (zero credits)
 *
 * Set APIFY_API_KEY in .env.local
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../auth/route.js';
import fs from 'fs';
import path from 'path';

const CACHE_PATH = path.join(process.cwd(), 'data', 'news-cache.json');

/* ── Auth ── */
function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

/* ── Cache helpers ── */
function readCache() {
  try {
    if (fs.existsSync(CACHE_PATH)) {
      return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
    }
  } catch { /* ignore */ }
  return null;
}

function writeCache(articles) {
  const data = {
    articles,
    fetchedAt: new Date().toISOString(),
    fetchDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  };
  const dir = path.dirname(CACHE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  return data;
}

/**
 * Check if we should fetch fresh news.
 * Only fetch if:
 * 1. No cache exists, OR
 * 2. Cache is from a previous day AND current hour >= 1 UTC (6 AM PKT)
 */
function shouldFetchToday(cache) {
  if (!cache || !cache.fetchDate) return true;

  const now = new Date();
  const todayUTC = now.toISOString().split('T')[0];
  const currentHourUTC = now.getUTCHours();

  // Already fetched today? Don't fetch again
  if (cache.fetchDate === todayUTC) return false;

  // It's a new day — only fetch if it's past 1:00 UTC (6:00 AM PKT)
  return currentHourUTC >= 1;
}

/* ── API Route ── */
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.APIFY_API_KEY;
  const cache = readCache();

  // No API key configured
  if (!apiKey) {
    return NextResponse.json({
      articles: cache?.articles || [],
      source: 'cache',
      message: 'APIFY_API_KEY not set. Add it to .env.local for live news.',
      lastFetched: cache?.fetchedAt || null,
    });
  }

  // Check if we need a fresh fetch today
  if (!shouldFetchToday(cache)) {
    // Serve cached data — zero credits used
    return NextResponse.json({
      articles: cache.articles,
      source: 'cache',
      message: `Cached from ${new Date(cache.fetchedAt).toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}. Next fetch: tomorrow 6:00 AM PKT.`,
      lastFetched: cache.fetchedAt,
    });
  }

  // Time to fetch! (1 credit)
  try {
    const res = await fetch(
      `https://api.apify.com/v2/acts/apify~google-search-scraper/run-sync-get-dataset-items?token=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          queries: [
            // ── Local Business Marketing (target audience: plumber, HVAC, contractor etc.)
            'how plumbers can get more customers digital marketing 2026',
            'HVAC contractor local SEO marketing tips 2026',
            'local business marketing guide electrician plumber roofer 2026',
            'Google Business Profile tips for local service businesses 2026',
            'how contractors get leads online local SEO 2026',

            // ── Top Marketing Agency Blogs
            'site:searchenginejournal.com local SEO small business 2026',
            'site:moz.com/blog local SEO guide 2026',
            'site:semrush.com/blog local business marketing 2026',
            'site:ahrefs.com/blog digital marketing strategy 2026',

            // ── Medium: Marketing Agency Articles
            'site:medium.com marketing agency SEO strategy 2026',
            'site:medium.com local business digital marketing tips 2026',
          ].join('\n'),
          maxPagesPerQuery: 1,
          resultsPerPage: 10,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Apify API error: ${res.status}`);
    }

    const data = await res.json();

    // Each item in data = one query result, articles are in item.organicResults
    const articles = [];
    for (const item of data || []) {
      const results = item.organicResults || item.results || [];
      for (const r of results) {
        if (!r.title || !r.url) continue;
        articles.push({
          title: r.title,
          source: r.displayedUrl || r.url || '',
          date: new Date().toISOString().split('T')[0],
          url: r.url,
          snippet: r.description || '',
        });
      }
    }

    // Deduplicate by URL and limit to 30
    const seen = new Set();
    const unique = articles.filter((a) => {
      if (seen.has(a.url)) return false;
      seen.add(a.url);
      return true;
    }).slice(0, 30);

    // Save to cache
    const cached = writeCache(unique);

    return NextResponse.json({
      articles: unique,
      source: 'apify',
      message: `Fresh news fetched at ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}. Next fetch: tomorrow 6:00 AM PKT.`,
      lastFetched: cached.fetchedAt,
    });
  } catch (err) {
    // On error, serve stale cache if available
    if (cache?.articles?.length) {
      return NextResponse.json({
        articles: cache.articles,
        source: 'cache',
        message: `Apify error: ${err.message}. Showing cached data from ${cache.fetchedAt}.`,
        lastFetched: cache.fetchedAt,
      });
    }

    return NextResponse.json({
      articles: [],
      source: 'error',
      message: `Apify error: ${err.message}. No cached data available.`,
    });
  }
}
