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
import fs from 'fs';
import path from 'path';

const BASE = 'https://rankston.com';
const SEO_PAGES_DIR = path.join(process.cwd(), 'data', 'seo-automation', 'pages');

export default function sitemap() {
  const now = new Date();

  // ── Static pages ──
  const staticPages = [
    { url: `${BASE}`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/blog`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // ── Service main pages ──
  const servicePages = services.map((svc) => ({
    url: `${BASE}/${svc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.95,
  }));

  // ── Auto-generated SEO location pages ──
  const seoLocationPages = [];
  if (fs.existsSync(SEO_PAGES_DIR)) {
    const files = fs.readdirSync(SEO_PAGES_DIR).filter(f => f.endsWith('.json'));
    for (const file of files) {
      try {
        const page = JSON.parse(fs.readFileSync(path.join(SEO_PAGES_DIR, file), 'utf-8'));
        seoLocationPages.push({
          url: page.seo?.canonical || `${BASE}/${page.clusterSlug}`,
          lastModified: page.generatedAt ? new Date(page.generatedAt) : now,
          changeFrequency: 'monthly',
          priority: 0.85,
        });
      } catch { /* skip malformed */ }
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...seoLocationPages,
  ];
}

