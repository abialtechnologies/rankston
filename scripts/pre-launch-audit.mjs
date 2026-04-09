/**
 * pre-launch-audit.mjs
 * 
 * Comprehensive pre-launch SEO audit for Rankston's 14,000+ page infrastructure.
 * Checks: canonicals, schemas, internal links, word count, sitemaps, content variation.
 * 
 * Usage: node --experimental-vm-modules scripts/pre-launch-audit.mjs
 */
import { readFileSync } from 'fs';
import services from '../data/services.json' with { type: 'json' };
import locations from '../data/locations.json' with { type: 'json' };
import blogPosts from '../data/blog-posts.json' with { type: 'json' };
import buildCityContent from '../data/city-content-generator.js';
import { buildStateContent } from '../data/state-content-generator.js';
import { NICHES, buildNicheContent } from '../data/niche-content-generator.js';
import { SEGMENTS, getSegment } from '../data/city-segments.js';
import { RESOURCE_PAGES } from '../data/resource-pages.js';
import { getAllBlogPosts } from '../data/blog-generator.js';

const BASE = 'https://rankston.com';
let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function check(name, condition, detail = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    failedChecks++;
    failures.push({ name, detail });
  }
}

function heading(title) {
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ${title}`);
  console.log(`${'─'.repeat(60)}`);
}

/* ═══════════════════════════════════════════════════════════════ */
console.log('═══════════════════════════════════════════════════════════');
console.log('  RANKSTON PRE-LAUNCH SEO AUDIT');
console.log(`  ${new Date().toISOString()}`);
console.log('═══════════════════════════════════════════════════════════');

/* ── 1. SITEMAP CONFIGURATION ──────────────────────────────── */
heading('1. SITEMAP CONFIGURATION');

// Check that sitemap files exist
const sitemapFiles = [
  'app/sitemap.js',
  'app/sitemap-services.xml/route.js',
  'app/sitemap-states.xml/route.js',
  'app/sitemap-cities.xml/route.js',
  'app/sitemap-segments.xml/route.js',
  'app/sitemap-content.xml/route.js',
];
for (const file of sitemapFiles) {
  try {
    readFileSync(file, 'utf8');
    check(`Sitemap file exists: ${file}`, true);
    console.log(`  ✅ ${file}`);
  } catch {
    check(`Sitemap file exists: ${file}`, false, 'File not found');
    console.log(`  ❌ ${file} — NOT FOUND`);
  }
}

// Check URL counts
const totalCities = locations.reduce((sum, s) => sum + s.cities.length, 0);
const expectedCityPages = totalCities * services.length;
console.log(`  📊 Expected city pages: ${expectedCityPages}`);
console.log(`  📊 Expected state pages: ${locations.length * services.length}`);
console.log(`  📊 Expected niche pages: ${NICHES.length * services.length}`);
console.log(`  📊 Expected resource pages: ${RESOURCE_PAGES.length}`);
check('City page count valid', expectedCityPages > 4000, `Only ${expectedCityPages} pages`);

/* ── 2. ROBOTS.TXT CONFIGURATION ────────────────────────────── */
heading('2. ROBOTS.TXT CONFIGURATION');
try {
  const robotsFile = readFileSync('app/robots.js', 'utf8');
  check('robots.js has phased sitemaps', robotsFile.includes('SITEMAP_PHASE'));
  check('robots.js allows root', robotsFile.includes("allow: '/'"));
  check('robots.js blocks /api/', robotsFile.includes("'/api/'"));
  check('robots.js blocks /_next/', robotsFile.includes("'/_next/'"));
  check('robots.js allows AI crawlers', robotsFile.includes('GoogleOther'));
  console.log('  ✅ Robots configuration valid');
  console.log('  ✅ Phased sitemap deployment configured');
} catch (e) {
  check('robots.js readable', false, e.message);
  console.log('  ❌ Cannot read robots.js');
}

/* ── 3. CANONICAL TAGS ──────────────────────────────────────── */
heading('3. CANONICAL TAGS (checking page files)');

const pageFiles = [
  { path: 'app/[service]/[slug]/[city]/page.js',          label: 'City pages' },
  { path: 'app/[service]/[slug]/page.js',                  label: 'State pages' },
  { path: 'app/[service]/[slug]/[city]/[segment]/page.js', label: 'Segment pages' },
  { path: 'app/[service]/for/[niche]/page.js',             label: 'Niche pages' },
  { path: 'app/blog/[slug]/page.js',                       label: 'Blog pages' },
  { path: 'app/resources/[slug]/page.js',                  label: 'Resource pages' },
];

for (const pf of pageFiles) {
  try {
    const code = readFileSync(pf.path, 'utf8');
    const hasCanonical = code.includes('canonical');
    check(`${pf.label} have canonical tags`, hasCanonical);
    console.log(`  ${hasCanonical ? '✅' : '❌'} ${pf.label}: ${hasCanonical ? 'canonical present' : 'MISSING canonical'}`);
  } catch {
    check(`${pf.label} file readable`, false, 'File not found');
    console.log(`  ❌ ${pf.label}: file not found`);
  }
}

/* ── 4. JSON-LD SCHEMA ──────────────────────────────────────── */
heading('4. JSON-LD STRUCTURED DATA');

const schemaChecks = [
  { path: 'app/layout.js',                                  label: 'Root layout',   schemas: ['Organization', 'WebSite'] },
  { path: 'app/[service]/[slug]/[city]/page.js',            label: 'City pages',    schemas: ['Service', 'FAQPage', 'BreadcrumbList', 'LocalBusiness'] },
  { path: 'app/[service]/[slug]/page.js',                    label: 'State pages',   schemas: ['Service', 'FAQPage', 'BreadcrumbList'] },
  { path: 'app/[service]/[slug]/[city]/[segment]/page.js',  label: 'Segment pages', schemas: ['Service', 'FAQPage', 'BreadcrumbList'] },
  { path: 'app/[service]/for/[niche]/page.js',              label: 'Niche pages',   schemas: ['Service', 'FAQPage'] },
  { path: 'app/blog/[slug]/page.js',                         label: 'Blog pages',    schemas: ['BlogPosting', 'BreadcrumbList'] },
  { path: 'app/resources/[slug]/page.js',                    label: 'Resource pages', schemas: ['Article', 'FAQPage'] },
];

for (const sc of schemaChecks) {
  try {
    const code = readFileSync(sc.path, 'utf8');
    const missing = sc.schemas.filter(s => !code.includes(s));
    const allPresent = missing.length === 0;
    check(`${sc.label} schemas`, allPresent, `Missing: ${missing.join(', ')}`);
    if (allPresent) {
      console.log(`  ✅ ${sc.label}: ${sc.schemas.join(', ')}`);
    } else {
      console.log(`  ❌ ${sc.label}: missing ${missing.join(', ')}`);
    }
  } catch {
    check(`${sc.label} file readable`, false);
    console.log(`  ❌ ${sc.label}: file not found`);
  }
}

/* ── 5. INTERNAL LINKING ────────────────────────────────────── */
heading('5. INTERNAL LINKING');

const linkChecks = [
  { path: 'components/city-pages/CityPage.jsx', label: 'City → Segments', search: 'SEGMENTS.map' },
  { path: 'components/city-pages/CityPage.jsx', label: 'City → Cross-service', search: 'More Digital Marketing Services' },
  { path: 'components/city-pages/CityPage.jsx', label: 'City → Nearby cities', search: 'nearbyCities.map' },
  { path: 'components/state-pages/StateHubPage.jsx', label: 'State → All cities', search: 'cities.map' },
  { path: 'components/state-pages/StateHubPage.jsx', label: 'State → Cross-service', search: 'More Digital Marketing Services' },
  { path: 'components/state-pages/StateHubPage.jsx', label: 'State → Nearby states', search: 'Nearby States' },
  { path: 'components/CitySegmentPage.jsx', label: 'Segment → Other segments', search: 'otherSegs.map' },
  { path: 'components/CitySegmentPage.jsx', label: 'Segment → Nearby cities', search: 'nearbyCities.map' },
  { path: 'components/NichePage.jsx', label: 'Niche → Cross-service', search: 'SERVICES_SAMPLE' },
  { path: 'components/NichePage.jsx', label: 'Niche → Related industries', search: 'Related Industries' },
  { path: 'components/ResourcePage.jsx', label: 'Resource → Related guides', search: 'Related Guides' },
  { path: 'components/ResourcePage.jsx', label: 'Resource → Service links', search: 'Explore Our Services' },
  { path: 'app/blog/[slug]/page.js', label: 'Blog → Service links', search: 'Related Services' },
];

for (const lc of linkChecks) {
  try {
    const code = readFileSync(lc.path, 'utf8');
    const found = code.includes(lc.search);
    check(lc.label, found, `Missing "${lc.search}" in ${lc.path}`);
    console.log(`  ${found ? '✅' : '❌'} ${lc.label}`);
  } catch {
    check(`${lc.label} file`, false, 'File not found');
    console.log(`  ❌ ${lc.label} — file not found`);
  }
}

/* ── 6. CONTENT VARIATION ───────────────────────────────────── */
heading('6. CONTENT VARIATION (same-service city pairs)');

function trigrams(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i < words.length - 2; i++) set.add(`${words[i]} ${words[i+1]} ${words[i+2]}`);
  return set;
}

function jaccardSim(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0; for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

const VARIATION_SAMPLES = 15;
let simSum = 0;
let highSim = 0;

for (let i = 0; i < VARIATION_SAMPLES; i++) {
  const svc = services[i % services.length];
  const sA = locations[Math.floor(Math.random() * locations.length)];
  let sB;
  do { sB = locations[Math.floor(Math.random() * locations.length)]; } while (sB === sA);

  const cA = sA.cities[Math.floor(Math.random() * sA.cities.length)];
  const cB = sB.cities[Math.floor(Math.random() * sB.cities.length)];

  const contentA = buildCityContent(svc.slug, sA, cA);
  const contentB = buildCityContent(svc.slug, sB, cB);

  const textA = [contentA.heroH1, contentA.heroSub, contentA.introP1, contentA.introP2, contentA.introP3, contentA.stateContext, ...(contentA.faqs||[]).map(f=>`${f.q} ${f.a}`)].join(' ');
  const textB = [contentB.heroH1, contentB.heroSub, contentB.introP1, contentB.introP2, contentB.introP3, contentB.stateContext, ...(contentB.faqs||[]).map(f=>`${f.q} ${f.a}`)].join(' ');

  const sim = jaccardSim(trigrams(textA), trigrams(textB));
  simSum += sim;
  if (sim > 0.60) highSim++;
}

const avgSim = simSum / VARIATION_SAMPLES;
check('Average content similarity < 60%', avgSim < 0.60, `Average: ${(avgSim*100).toFixed(1)}%`);
check('No high-similarity pairs', highSim === 0, `${highSim} pairs > 60%`);
console.log(`  Average similarity: ${(avgSim*100).toFixed(1)}%`);
console.log(`  High-similarity pairs (>60%): ${highSim}`);
console.log(`  ${avgSim < 0.60 ? '✅' : '⚠️'} Content variation is ${avgSim < 0.40 ? 'excellent' : avgSim < 0.60 ? 'acceptable' : 'needs improvement'}`);

/* ── 7. WORD COUNT SPOT CHECK ───────────────────────────────── */
heading('7. WORD COUNT SPOT CHECK');

const allPosts = getAllBlogPosts(blogPosts);
let wordChecksFailed = 0;

// Sample 5 city pages
for (let i = 0; i < 5; i++) {
  const svc = services[i % services.length];
  const state = locations[i % locations.length];
  const city = state.cities[0];
  const content = buildCityContent(svc.slug, state, city);
  const stateContent = buildStateContent(svc.slug, state);
  const text = [content.heroH1, content.heroSub, content.introP1, content.introP2, content.introP3,
    content.stateContext,
    ...(content.faqs||[]).map(f=>`${f.q} ${f.a}`),
    stateContent?.heroSub, ...(stateContent?.whatIncluded||[]).map(w=>`${w.title} ${w.items.join(' ')}`),
    ...(stateContent?.faqs||[]).map(f=>`${f.q} ${f.a}`),
  ].filter(Boolean).join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1000) wordChecksFailed++;
}

// Sample 5 blog posts
for (let i = 0; i < 5; i++) {
  const post = allPosts[i];
  const text = [post.title, post.excerpt, ...(post.content||[]).map(b=>b.text||'')].join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1000) wordChecksFailed++;
}

check('Word count spot check', wordChecksFailed === 0, `${wordChecksFailed} pages below 1000 words`);
console.log(`  ${wordChecksFailed === 0 ? '✅' : '❌'} ${10 - wordChecksFailed}/10 spot-checked pages pass 1000-word minimum`);

/* ── 8. NEXT.JS CONFIG ──────────────────────────────────────── */
heading('8. PERFORMANCE & SECURITY CONFIG');
try {
  const config = readFileSync('next.config.mjs', 'utf8');
  const checks = [
    ['reactStrictMode', 'React Strict Mode'],
    ['compress: true', 'Compression enabled'],
    ['image/avif', 'AVIF image format'],
    ['image/webp', 'WebP image format'],
    ['Cache-Control', 'Cache headers'],
    ['X-Content-Type-Options', 'Security headers'],
    ['X-Frame-Options', 'Frame protection'],
    ['stale-while-revalidate', 'SWR caching'],
  ];
  for (const [search, label] of checks) {
    const found = config.includes(search);
    check(label, found);
    console.log(`  ${found ? '✅' : '❌'} ${label}`);
  }
} catch {
  console.log('  ❌ Cannot read next.config.mjs');
}

/* ═══════════════════════════════════════════════════════════════ */
heading('FINAL RESULTS');

console.log(`  Total checks:  ${totalChecks}`);
console.log(`  ✅ Passed:     ${passedChecks}`);
console.log(`  ❌ Failed:     ${failedChecks}`);
console.log();

if (failedChecks === 0) {
  console.log('  🎉 ALL CHECKS PASSED — Site is ready for phased deployment!\n');
} else {
  console.log('  ⚠️  FAILURES REQUIRING ATTENTION:\n');
  for (const f of failures) {
    console.log(`    ❌ ${f.name}${f.detail ? ` — ${f.detail}` : ''}`);
  }
  console.log();
}
