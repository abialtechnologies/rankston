/**
 * sitemap.js — Sitemap Index
 *
 * Returns a sitemap INDEX referencing all sub-sitemaps.
 * Google crawls sitemaps in priority order — services first, then states,
 * then cities, then segments (long-tail last).
 *
 * Sub-sitemaps:
 *   /sitemap-services.xml  — 166  pages (service + niche + resource) — Priority 1
 *   /sitemap-states.xml    — 500  pages (state hubs)                 — Priority 2
 *   /sitemap-cities.xml    — 4850 pages (city pages)                 — Priority 3
 *   /sitemap-content.xml   — ~200 pages (blog + industry)            — Priority 4
 *   /sitemap-segments.xml  — 8300 pages (long-tail sub-pages)        — Priority 5
 *
 * This phased ordering tells Google to discover and index the most important
 * pages first — preventing the 14,000 segment pages from diluting crawl budget
 * on high-value service and state pages.
 */

import services from '../data/services.json';

const BASE = 'https://rankston.com';

export default function sitemap() {
  const now = new Date();

  // ── Static pages (home, blog, about, contact) ──
  const staticPages = [
    { url: `${BASE}`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/blog`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // ── Service main pages — highest priority programmatic pages ──
  const servicePages = services.map((svc) => ({
    url: `${BASE}/${svc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.95,
  }));

  // The rest of the URLs are in separate sitemaps for crawl budget control:
  // /sitemap-services.xml → sub-services, niches, resources
  // /sitemap-states.xml   → 500 state pages
  // /sitemap-cities.xml   → 4,850 city pages
  // /sitemap-content.xml  → blog + industry pages
  // /sitemap-segments.xml → 8,300 segment sub-pages (lowest priority)

  return [
    ...staticPages,
    ...servicePages,
  ];
}
