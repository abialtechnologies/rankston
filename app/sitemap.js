/**
 * sitemap.js — Smart Phased Sitemap
 *
 * Controls WHAT Google sees based on SITEMAP_PHASE env var:
 *
 *  Phase 1 (default): Static + Service main pages only (14 pages)
 *    → This sitemap serves as the "root" — always includes high-trust pages
 *
 *  Phase 2+: UK Region pages added (150 pages)
 *    → Only after USA state pages are being indexed
 *
 *  Phase 3+: UK City pages added (1,260 pages)
 *    → Only after UK regions are indexing well
 *
 * USA pages are handled by dedicated sub-sitemaps (sitemap-states.xml, sitemap-cities.xml)
 * which are themselves gated by phase in robots.js.
 *
 * CURRENT STATUS: Set SITEMAP_PHASE=1 in Vercel env vars
 */

import services     from '../data/services.json';
import ukLocations  from '../data/uk-locations.json';
import fs           from 'fs';
import path         from 'path';

const BASE          = 'https://rankston.com';
const SEO_PAGES_DIR = path.join(process.cwd(), 'data', 'seo-automation', 'pages');

export default function sitemap() {
  const now   = new Date();
  const phase = parseInt(process.env.SITEMAP_PHASE || '1', 10);

  // ── Always: Static pages (4) ──────────────────────────
  const staticPages = [
    { url: `${BASE}`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/blog`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // ── Always: Service main pages (10) ───────────────────
  const servicePages = services.map((svc) => ({
    url:             `${BASE}/${svc.slug}`,
    lastModified:    now,
    changeFrequency: 'monthly',
    priority:        0.95,
  }));

  // ── Phase 2+: UK Region pages (15 regions × 10 = 150) ─
  const ukRegionPages = [];
  if (phase >= 2) {
    ukLocations.forEach((region) => {
      services.forEach((svc) => {
        ukRegionPages.push({
          url:             `${BASE}/${svc.slug}/${region.stateSlug}`,
          lastModified:    now,
          changeFrequency: 'monthly',
          priority:        0.90,
        });
      });
    });
  }

  // ── Phase 3+: UK City pages (126 cities × 10 = 1,260) ─
  const ukCityPages = [];
  if (phase >= 3) {
    ukLocations.forEach((region) => {
      (region.cities || []).forEach((cityData) => {
        services.forEach((svc) => {
          ukCityPages.push({
            url:             `${BASE}/${svc.slug}/${region.stateSlug}/${cityData.citySlug}`,
            lastModified:    now,
            changeFrequency: 'monthly',
            priority:        0.85,
          });
        });
      });
    });
  }

  // ── Phase 2+: Auto-generated SEO location pages ───────
  const seoLocationPages = [];
  if (phase >= 2 && fs.existsSync(SEO_PAGES_DIR)) {
    const files = fs.readdirSync(SEO_PAGES_DIR).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      try {
        const page = JSON.parse(fs.readFileSync(path.join(SEO_PAGES_DIR, file), 'utf-8'));
        seoLocationPages.push({
          url:             page.seo?.canonical || `${BASE}/${page.clusterSlug}`,
          lastModified:    page.generatedAt ? new Date(page.generatedAt) : now,
          changeFrequency: 'monthly',
          priority:        0.80,
        });
      } catch { /* skip malformed */ }
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...ukRegionPages,
    ...ukCityPages,
    ...seoLocationPages,
  ];
}
