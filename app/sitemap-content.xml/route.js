/**
 * sitemap-content.xml
 * Covers: blog posts + industry pages (content-focused pages)
 * Priority 0.7–0.75
 */
import blogPosts from '../../data/blog-posts.json';
import { getAllBlogPosts } from '../../data/blog-generator.js';
import industriesData from '../../data/service-industries.json';
import seoIndustries from '../../data/industries/seo-services.js';
import gmbIndustries from '../../data/industries/gmb-optimization.js';
import ppcIndustries from '../../data/industries/ppc-advertising.js';
import webDevIndustries from '../../data/industries/web-development.js';

const BASE = 'https://rankston.com';

export async function GET() {
  const allPosts = getAllBlogPosts(blogPosts);
  const urls = [];

  // Blog posts
  for (const post of allPosts) {
    urls.push({
      loc: `${BASE}/blog/${post.slug}`,
      lastmod: new Date(post.publishedAt).toISOString(),
      priority: '0.75',
      changefreq: 'yearly',
    });
  }

  // Industry pages
  const jsIndustryMap = {
    'seo-services':     seoIndustries.industries.map(i => i.slug),
    'gmb-optimization': gmbIndustries.industries.map(i => i.slug),
    'ppc-advertising':  ppcIndustries.industries.map(i => i.slug),
    'web-development':  webDevIndustries.industries.map(i => i.slug),
  };

  for (const [serviceSlug, data] of Object.entries(industriesData)) {
    const jsonSlugs = data.industries.map(i => i.slug);
    const jsSlugs   = jsIndustryMap[serviceSlug] || [];
    const allSlugs  = [...new Set([...jsonSlugs, ...jsSlugs])];

    for (const slug of allSlugs) {
      urls.push({
        loc: `${BASE}/${serviceSlug}/industry/${slug}`,
        lastmod: new Date().toISOString(),
        priority: '0.7',
        changefreq: 'monthly',
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
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
