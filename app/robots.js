/**
 * robots.js — Next.js Metadata API
 * Auto-generates /robots.txt at build time
 *
 * Phased sitemap deployment — controlled by SITEMAP_PHASE env var:
 *   Phase 1 (default): Services + States only (666 pages)
 *   Phase 2: + Content (blog + industry, ~200 pages)
 *   Phase 3: + Cities (4,850 pages)
 *   Phase 4: + Segments (8,300 pages) — full site
 */
export default function robots() {
  const phase = parseInt(process.env.SITEMAP_PHASE || '1', 10);

  // Build sitemap list based on current phase
  const sitemaps = [
    'https://rankston.com/sitemap.xml',           // Always — static + service main pages
    'https://rankston.com/sitemap-services.xml',   // Always — sub-services, niches, resources
    'https://rankston.com/sitemap-states.xml',     // Always — 500 state hub pages
  ];

  if (phase >= 2) {
    sitemaps.push('https://rankston.com/sitemap-content.xml');   // Blog + industry pages
  }
  if (phase >= 3) {
    sitemaps.push('https://rankston.com/sitemap-cities.xml');    // 4,850 city pages
  }
  if (phase >= 4) {
    sitemaps.push('https://rankston.com/sitemap-segments.xml');  // 8,300 segment pages
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
        ],
      },
      // Allow Google's AI crawler (important for GEO/AIO indexing)
      {
        userAgent: 'GoogleOther',
        allow: '/',
      },
      // Allow Perplexity, Claude, ChatGPT crawlers for AI citation
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
    ],
    sitemap: sitemaps,
    host: 'https://rankston.com',
  };
}
