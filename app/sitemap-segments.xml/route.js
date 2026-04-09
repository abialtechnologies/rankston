/**
 * sitemap-segments.xml
 * Covers: city segment sub-pages (/service/state/city/segment)
 * Only top cities to keep this sitemap <50,000 URLs
 * Count: 10 × 166 × 5 = 8,300 pages
 * Priority 0.7 — long-tail, index after main pages
 */
import services from '../../data/services.json';
import locations from '../../data/locations.json';
import { SEGMENTS, TOP_CITIES_FOR_SEGMENTS } from '../../data/city-segments.js';

const BASE = 'https://rankston.com';

export async function GET() {
  const now = new Date().toISOString();

  const urls = [];
  for (const svc of services) {
    for (const stateData of locations) {
      for (const cityData of stateData.cities) {
        if (!TOP_CITIES_FOR_SEGMENTS.includes(cityData.citySlug)) continue;
        for (const seg of SEGMENTS) {
          urls.push({
            loc: `${BASE}/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}/${seg.slug}`,
            priority: '0.7',
            changefreq: 'monthly',
          });
        }
      }
    }
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
