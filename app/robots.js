/**
 * robots.js — Smart Phased Indexing Strategy
 *
 * PHASE SYSTEM (set SITEMAP_PHASE env var on Vercel):
 *
 *  Phase 1 (default): Services + States = 666 pages
 *    → Build domain authority first with high-quality pages
 *    → Wait until 500+ pages indexed before moving to Phase 2
 *
 *  Phase 2: + Content (blog + industry) = ~866 pages
 *    → Add topical authority once Phase 1 is indexing well
 *    → Wait until 750+ pages indexed before moving to Phase 3
 *
 *  Phase 3: + Cities = 5,716 pages
 *    → Unlock city pages only after Google trusts the domain
 *    → Wait until 3,000+ pages indexed before moving to Phase 4
 *
 *  Phase 4: + UK pages + Segments = Full site ~14,000+
 *    → Final scale-up after proven domain authority
 *
 * WHY PHASED?
 *  Google has a "crawl budget" per domain. New/low-authority sites
 *  that attempt to push 14,000 pages at once get "Discovered – not indexed"
 *  because Google doesn't trust them enough to crawl all pages.
 *  Phased indexing = send strong trust signals first, scale later.
 */
export default function robots() {
  const phase = parseInt(process.env.SITEMAP_PHASE || '1', 10);

  const sitemaps = [
    'https://rankston.com/sitemap.xml',           // Static + UK pages (controlled separately)
    'https://rankston.com/sitemap-services.xml',  // 10 service pages + niches
    'https://rankston.com/sitemap-states.xml',    // 500 USA state hub pages
  ];

  if (phase >= 2) {
    sitemaps.push('https://rankston.com/sitemap-content.xml'); // Blog + industry pages
  }
  if (phase >= 3) {
    sitemaps.push('https://rankston.com/sitemap-cities.xml');  // 4,850 USA city pages
  }
  if (phase >= 4) {
    sitemaps.push('https://rankston.com/sitemap-segments.xml'); // 8,300 long-tail pages
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          // Block URL params that create duplicate content
          '/*?*',
        ],
      },
      // Google's AI crawler — allow for GEO/AIO indexing
      { userAgent: 'GoogleOther', allow: '/' },
      // AI citation crawlers
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Claude-Web',    allow: '/' },
      { userAgent: 'GPTBot',        allow: '/' },
    ],
    sitemap: sitemaps,
    host: 'https://rankston.com',
  };
}
