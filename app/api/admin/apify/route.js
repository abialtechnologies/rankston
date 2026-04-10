/**
 * /api/admin/apify — Fetch trending SEO/marketing news
 *
 * GET: Returns latest news articles from Apify API
 * Falls back to sample data if API key not set
 *
 * Set APIFY_API_KEY in .env.local
 */

import { NextResponse } from 'next/server';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  return auth?.startsWith('Bearer ') && auth.length > 20;
}

// Fallback sample data when Apify is not configured
const SAMPLE_NEWS = [
  { title: 'Google March 2026 Core Update Rolling Out', source: 'Search Engine Journal', date: '2026-04-08', url: 'https://searchenginejournal.com' },
  { title: 'How AI Overview Is Changing SEO Strategy', source: 'Moz Blog', date: '2026-04-07', url: 'https://moz.com/blog' },
  { title: 'Top PPC Strategies for Local Businesses in 2026', source: 'WordStream', date: '2026-04-06', url: 'https://wordstream.com' },
  { title: 'Social Media Marketing Trends Q2 2026', source: 'HubSpot', date: '2026-04-05', url: 'https://hubspot.com/blog' },
  { title: 'Web Core Vitals: New Metrics Coming in 2026', source: 'Google Developers', date: '2026-04-04', url: 'https://developers.google.com' },
  { title: 'Content Marketing ROI: What the Data Says', source: 'Content Marketing Institute', date: '2026-04-03', url: 'https://contentmarketinginstitute.com' },
  { title: 'Local SEO: Google Business Profile 2026 Updates', source: 'BrightLocal', date: '2026-04-02', url: 'https://brightlocal.com' },
  { title: 'ChatGPT Search vs Google: Impact on SEO', source: 'Search Engine Land', date: '2026-04-01', url: 'https://searchengineland.com' },
];

export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.APIFY_API_KEY;

  // If no API key, return sample data
  if (!apiKey) {
    return NextResponse.json({
      articles: SAMPLE_NEWS,
      source: 'sample',
      message: 'Using sample data. Set APIFY_API_KEY in .env.local for live news.',
    });
  }

  try {
    // Call Apify API
    const res = await fetch(
      `https://api.apify.com/v2/acts/apify~google-search-scraper/run-sync-get-dataset-items?token=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          queries: 'latest SEO news\ndigital marketing trends 2026\nGoogle algorithm update',
          maxPagesPerQuery: 1,
          resultsPerPage: 10,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Apify API error: ${res.status}`);
    }

    const data = await res.json();
    const articles = (data || [])
      .slice(0, 20)
      .map((item) => ({
        title: item.title || 'Untitled',
        source: item.displayedUrl || item.url || '',
        date: new Date().toISOString().split('T')[0],
        url: item.url || '#',
      }));

    return NextResponse.json({ articles, source: 'apify' });
  } catch (err) {
    // Fallback to sample on error
    return NextResponse.json({
      articles: SAMPLE_NEWS,
      source: 'sample',
      message: `Apify error: ${err.message}. Showing sample data.`,
    });
  }
}
