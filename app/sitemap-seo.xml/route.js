import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase.js';

export async function GET() {
  const supabase = getSupabaseServerClient();

  // ONLY fetch Phase 1 approved & published pages
  const { data: pages } = await supabase
    .from('seo_pages')
    .select('slug, updated_at')
    .eq('published', true)
    .eq('phase', 1);

  if (!pages) {
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'text/xml' },
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://rankston.com/solutions/${page.slug}</loc>
    <lastmod>${new Date(page.updated_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
