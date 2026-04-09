/**
 * sitemap-services.xml
 * Covers: service main pages + sub-service cluster pages + niche pages + resource pages
 * Count: ~10 + 20 + 120 + 16 = ~166 pages (high priority, index first)
 */
import services from '../../data/services.json';
import categories from '../../data/service-categories.json';
import { NICHES } from '../../data/niche-content-generator.js';
import { RESOURCE_PAGES } from '../../data/resource-pages.js';

const BASE = 'https://rankston.com';

export async function GET() {
  const now = new Date().toISOString();

  const urls = [];

  // Service main pages (priority 0.9)
  for (const svc of services) {
    urls.push({ loc: `${BASE}/${svc.slug}`, priority: '0.9', changefreq: 'monthly' });
  }

  // Sub-service cluster pages (priority 0.85)
  for (const [svcSlug, subs] of Object.entries(categories)) {
    for (const subSlug of Object.keys(subs)) {
      urls.push({ loc: `${BASE}/${svcSlug}/${subSlug}`, priority: '0.85', changefreq: 'monthly' });
    }
  }

  // Niche pages — /service/for/niche (priority 0.85)
  for (const svc of services) {
    for (const niche of NICHES) {
      urls.push({ loc: `${BASE}/${svc.slug}/for/${niche.slug}`, priority: '0.85', changefreq: 'monthly' });
    }
  }

  // Resource pages (priority 0.8)
  for (const page of RESOURCE_PAGES) {
    urls.push({ loc: `${BASE}/resources/${page.slug}`, priority: '0.8', changefreq: 'monthly' });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
