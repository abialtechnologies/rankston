/**
 * sitemap-states.xml
 * Covers: all 500 state hub pages (10 services × 50 states)
 * Priority 0.85 — state pages are strong ranking hubs
 */
import services from '../../data/services.json';
import locations from '../../data/locations.json';

const BASE = 'https://rankston.com';

export async function GET() {
  const now = new Date().toISOString();

  const urls = [];
  for (const svc of services) {
    for (const stateData of locations) {
      urls.push({
        loc: `${BASE}/${svc.slug}/${stateData.stateSlug}`,
        priority: '0.85',
        changefreq: 'monthly',
      });
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
