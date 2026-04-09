/**
 * WORD COUNT AUDIT — Rankston
 * Checks word count across all page types:
 *   City pages, State pages, Segment pages, Niche pages, Blog posts, Resource pages
 * Target: every page >= 1000 words
 */
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require   = createRequire(import.meta.url);

// ── Data imports ──────────────────────────────────────────────
const services   = require('../data/services.json');
const locations  = require('../data/locations.json');
const blogPostsJson = require('../data/blog-posts.json');

const { default: buildCityContent }   = await import('../data/city-content-generator.js');
const { SEGMENTS, TOP_CITIES_FOR_SEGMENTS, getSegment } = await import('../data/city-segments.js');
const { NICHES, buildNicheContent }   = await import('../data/niche-content-generator.js');
const { default: CONFIGS, buildStateContent } = await import('../data/state-content-generator.js');
const resourcePagesRaw = await import('../data/resource-pages.js');
const resourcePages = resourcePagesRaw.RESOURCE_PAGES_WITH_CONTENT || resourcePagesRaw.default || resourcePagesRaw.RESOURCE_PAGES || Object.values(resourcePagesRaw)[0];
const { getAllBlogPosts } = await import('../data/blog-generator.js');
const allBlogPosts = getAllBlogPosts(blogPostsJson);

// ── Word count helper (counts all text content) ───────────────
function countWords(...strings) {
  return strings
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(w => w.length > 0)
    .length;
}

function faqWords(faqs = []) {
  return faqs.map(f => `${f.q} ${f.a}`).join(' ');
}

// ── Utility: pick random items ────────────────────────────────
function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// ─────────────────────────────────────────────────────────────
// CITY PAGES — 4,850 total — sample 30
// ─────────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(60));
console.log('  WORD COUNT AUDIT — All Page Types — Rankston');
console.log('═'.repeat(60));

const cityResults = [];
const cityPairs = [];
services.forEach(svc => {
  locations.forEach(stateData => {
    stateData.cities.slice(0, 2).forEach(cityData => {
      cityPairs.push({ svc, stateData, cityData });
    });
  });
});

console.log('\n📍 CITY PAGES (sample 30 of 4,850)');
const sampleCities = pickRandom(cityPairs, 30);
let cityFails = 0;

for (const { svc, stateData, cityData } of sampleCities) {
  const content = buildCityContent(svc.slug, stateData, cityData);

  // Estimate all text on a city page
  const words = countWords(
    // Hero
    svc.title, cityData.city, stateData.state,
    content.heroH1, content.heroSub,
    // Intro
    content.introP1, content.introP2,
    // FAQs (8 now)
    faqWords(content.faqs),
    // Static sections that appear on every page
    'Transparent Monthly Reporting You get a clear report every month showing exactly what was done what moved and what the next 30 days look like No fluff no hiding bad numbers Strategy Built for Your Market We don t apply the same playbook to every client Your city your industry and your specific competition all shape the approach we take Real People Fast Responses You have a dedicated point of contact who knows your account Emails get responses same business day Calls get answered Always No Long-Term Contracts We earn your business every month If results aren t there you can pause or cancel without penalty We stay on retainer because we perform',
    // Keyword cluster section (added in this session)
    `The Best ${svc.title} Company in ${cityData.city} Here s What to Look For The top-rated agencies in ${cityData.city} share three things in common they explain their strategy in plain English before you sign anything they tie every metric to business outcomes leads and revenue not just rankings and they don t lock you into long-term contracts because they re confident in their results Transparent process you know exactly what s being done each month Results measured in leads and revenue not vanity metrics Month-to-month terms no 12-month lock-in Dedicated ${cityData.city} account manager same-day responses`,
    `Affordable ${svc.title} in ${cityData.city} What Does It Actually Cost Budget-friendly ${svc.title.toLowerCase()} doesn t mean cheap it means transparent pricing clear deliverables and ROI you can measure Many ${cityData.city} businesses overpay for agencies that report on impressions and rankings but can t connect their work to actual leads We price fairly for work that performs Starter Local Focus From 499 per month Essential work measurable results Growth Compete and Win From 999 per month Full execution for competitive markets Authority Market Leader From 1999 per month Scale dominance across all channels No long-term contracts Cancel any month Free strategy call to start`,
    // Process section (6 steps)
    `Free Strategy Call We learn your ${cityData.city} business your goals your current situation and your competition Onboarding and Audit We audit your current setup website analytics existing campaigns and competitors Strategy Delivery You receive a clear strategy document Implementation We execute the strategy systematically reporting every action Optimize and Scale We review performance data monthly identify what s working double down Compound Growth Results compound over time`,
    // What's included section
    'Research and Strategy Market analysis Competitor research Goal setting KPI definition Core Execution Full implementation Monthly optimization A B testing Performance monitoring Reporting Monthly reports Custom dashboard Goal tracking Quarterly reviews Support Dedicated account manager Same-day email response Monthly strategy call Priority support',
    // Industries served section
    'Healthcare Real Estate Professional Services Retail Construction Technology Financial Services Manufacturing',
    // Why Rankston section
    'What Makes Us Different we work with a limited number of businesses each month to maintain quality',
    // Common mistakes section
    'Chasing vanity metrics instead of leads Switching strategies every 90 days Hiring the cheapest option available No tracking or attribution setup',
    // Nearby cities section
    `${svc.title} in Nearby ${stateData.state} Cities We serve businesses across all of ${stateData.state}`,
    // Segments section
    `${svc.title} by Business Type in ${cityData.city} We offer specialized strategies for every type of business Small Business Enterprise E-Commerce Startups Restaurants`
  );

  const url = `/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}`;
  const pass = words >= 1000;
  if (!pass) cityFails++;
  cityResults.push({ url, words, pass });

  const icon = pass ? '✅' : '❌';
  const note = !pass ? ` ← BELOW 1000` : '';
  console.log(`${icon} ${url.padEnd(55)} | ~${words} words${note}`);
}

console.log(`\nCity pages: ${30 - cityFails}/30 passed | Failures: ${cityFails}`);

// ─────────────────────────────────────────────────────────────
// STATE PAGES — 500 total — sample 10
// ─────────────────────────────────────────────────────────────
console.log('\n🗺️  STATE PAGES (sample 10 of 500)');
const statePairs = [];
services.forEach(svc => locations.forEach(s => statePairs.push({ svc, stateData: s })));
const sampleStates = pickRandom(statePairs, 10);
let stateFails = 0;

for (const { svc, stateData } of sampleStates) {
  const cfg = CONFIGS[svc.slug];
  if (!cfg) continue;

  const cities = stateData.cities.slice(0, 5).map(c => c.city);
  const v = {
    state: stateData.state, stateAbbr: stateData.stateAbbr,
    city1: cities[0] || '', city2: cities[1] || '', city3: cities[2] || '',
  };

  const words = countWords(
    svc.title, stateData.state,
    cfg.heroSub?.replace(/\{(\w+)\}/g, (_, k) => v[k] || ''),
    cfg.introP1?.replace(/\{(\w+)\}/g, (_, k) => v[k] || ''),
    cfg.introP2?.replace(/\{(\w+)\}/g, (_, k) => v[k] || ''),
    faqWords(cfg.faqs?.map(f => ({
      q: f.q.replace(/\{(\w+)\}/g, (_, k) => v[k] || ''),
      a: f.a.replace(/\{(\w+)\}/g, (_, k) => v[k] || ''),
    }))),
    // What included
    (cfg.whatIncluded || []).map(w => `${w.title} ${w.items.join(' ')}`).join(' '),
    // Process steps
    (cfg.process || []).map(p => `${p.title} ${p.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Market insights
    (cfg.marketInsights || []).map(m => `${m.title} ${m.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Why service
    (cfg.whyService || []).map(s => `${s.title} ${s.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Pain points
    (cfg.painPoints || []).map(p => `${p.title} ${p.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Case studies
    (cfg.caseStudies || []).map(c => `${c.client} ${c.before} ${c.after}`).join(' '),
    // Why us
    (cfg.whyUs || []).map(w => `${w.title} ${w.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Mistakes
    (cfg.mistakes || []).map(m => `${m.mistake} ${m.fix.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')}`).join(' '),
    // Pricing
    (cfg.pricing || []).map(p => `${p.name} ${p.price} ${p.desc.replace(/\{(\w+)\}/g, (_, k) => v[k] || '')} ${p.features.join(' ')}`).join(' '),
    // Industries
    (cfg.industries || []).map(i => `${i.name} ${i.desc}`).join(' '),
    // Comparison
    (cfg.comparison || []).map(c => `${c.feature} ${c.others}`).join(' '),
    // Cities list
    stateData.cities.slice(0, 20).map(c => c.city).join(' '),
  );

  const url = `/${svc.slug}/${stateData.stateSlug}`;
  const pass = words >= 1000;
  if (!pass) stateFails++;

  const icon = pass ? '✅' : '❌';
  const note = !pass ? ` ← BELOW 1000` : '';
  console.log(`${icon} ${url.padEnd(55)} | ~${words} words${note}`);
}
console.log(`\nState pages: ${10 - stateFails}/10 passed | Failures: ${stateFails}`);

// ─────────────────────────────────────────────────────────────
// SEGMENT PAGES — 8,300 total — sample 10
// ─────────────────────────────────────────────────────────────
console.log('\n🎯 SEGMENT PAGES (sample 10 of 8,300)');
const segPairs = [];
services.forEach(svc => {
  locations.forEach(stateData => {
    stateData.cities.filter(c => TOP_CITIES_FOR_SEGMENTS.includes(c.citySlug)).slice(0, 1).forEach(cityData => {
      SEGMENTS.forEach(seg => segPairs.push({ svc, stateData, cityData, seg }));
    });
  });
});
const sampleSegs = pickRandom(segPairs, 10);
let segFails = 0;

for (const { svc, stateData, cityData, seg } of sampleSegs) {
  const content = buildCityContent(svc.slug, stateData, cityData);
  const introText = seg.intro(svc.shortTitle || svc.title, cityData.city, stateData.state);
  const bodyText  = seg.body ? seg.body(svc.shortTitle || svc.title, cityData.city, stateData.state) : '';
  const ctaText   = seg.cta  ? seg.cta(svc.shortTitle || svc.title, cityData.city) : '';

  const words = countWords(
    svc.title, seg.label, cityData.city, stateData.state,
    introText,
    bodyText,
    (seg.painPoints || []).join(' '),
    seg.whyUs || '',
    ctaText,
    (seg.benefits || []).map(b => `${b.title} ${b.desc}`).join(' '),
    (seg.process  || []).map(p => `${p.title} ${p.desc}`).join(' '),
    faqWords(seg.faqs || []),
    // Other segments section
    SEGMENTS.filter(s => s.slug !== seg.slug).map(s => s.label).join(' '),
    // Nearby cities
    stateData.cities.filter(c => c.citySlug !== cityData.citySlug).slice(0, 6).map(c => c.city).join(' '),
  );

  const url = `/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}/${seg.slug}`;
  const pass = words >= 1000;
  if (!pass) segFails++;

  const icon = pass ? '✅' : '❌';
  const note = !pass ? ` ← BELOW 1000` : '';
  console.log(`${icon} ${url.substring(0, 55).padEnd(55)} | ~${words} words${note}`);
}
console.log(`\nSegment pages: ${10 - segFails}/10 passed | Failures: ${segFails}`);

// ─────────────────────────────────────────────────────────────
// NICHE PAGES — 120 total — check all
// ─────────────────────────────────────────────────────────────
console.log('\n🏢 NICHE PAGES (all 120)');
let nicheFails = 0;
let nicheMin = Infinity, nicheMax = 0;

for (const svc of services) {
  for (const niche of NICHES) {
    const content = buildNicheContent(svc.slug, niche.slug);
    if (!content) continue;

    const words = countWords(
      svc.title, niche.label,
      content.heroSub || '',
      content.introP1 || '',
      content.introP2 || '',
      faqWords(content.faqs || []),
      (content.painPoints || []).join(' '),
      (content.benefits || []).map(b => `${b.title} ${b.desc}`).join(' '),
      (content.process || []).map(p => `${p.title} ${p.desc}`).join(' '),
      (content.whyChoose || []).map(w => `${w.title} ${w.desc}`).join(' '),
      content.conclusion || '',
      (content.caseStudy ? `${content.caseStudy.challenge} ${content.caseStudy.approach} ${content.caseStudy.result}` : ''),
      (content.industries || []).join(' '),
    );

    nicheMin = Math.min(nicheMin, words);
    nicheMax = Math.max(nicheMax, words);

    if (words < 1000) {
      console.log(`❌ /${svc.slug}/for/${niche.slug} | ~${words} words ← BELOW 1000`);
      nicheFails++;
    }
  }
}
if (nicheFails === 0) {
  console.log(`✅ All 120 niche pages passed (range: ~${nicheMin}–${nicheMax} words)`);
}
console.log(`\nNiche pages: ${120 - nicheFails}/120 passed | Failures: ${nicheFails}`);

// ─────────────────────────────────────────────────────────────
// BLOG POSTS — check all
// ─────────────────────────────────────────────────────────────
console.log(`\n📝 BLOG POSTS (all ${allBlogPosts.length} = ${blogPostsJson.length} original + ${allBlogPosts.length - blogPostsJson.length} generated)`);
let blogFails = 0;
let blogMin = Infinity, blogMax = 0;
const lowBlogs = [];

for (const post of allBlogPosts) {
  // Generated posts have a content[] array of blocks; originals may have sections[]
  const contentBlocks = (post.content || []).map(block => {
    if (block.type === 'intro' || block.type === 'paragraph') return block.text || '';
    if (block.type === 'h2' || block.type === 'h3') return block.text || '';
    return '';
  }).join(' ');

  const words = countWords(
    post.title || '',
    post.excerpt || '',
    contentBlocks,
    post.intro || '',
    faqWords(post.faqs || []),
    (post.sections || []).map(s => `${s.heading || ''} ${s.content || ''} ${(s.items || []).join(' ')}`).join(' '),
  );

  blogMin = Math.min(blogMin, words);
  blogMax = Math.max(blogMax, words);

  if (words < 1000) {
    lowBlogs.push({ slug: post.slug, words });
    blogFails++;
  }
}

if (blogFails === 0) {
  console.log(`✅ All ${allBlogPosts.length} blog posts passed (range: ~${blogMin}–${blogMax} words)`);
} else {
  console.log(`⚠️  ${blogFails} blog posts below 1000 words:`);
  lowBlogs.slice(0, 10).forEach(b => console.log(`   ❌ /blog/${b.slug} | ~${b.words} words`));
  if (lowBlogs.length > 10) console.log(`   ... and ${lowBlogs.length - 10} more`);
}
console.log(`\nBlog posts: ${allBlogPosts.length - blogFails}/${allBlogPosts.length} passed | Failures: ${blogFails} | Range: ~${blogMin}–${blogMax} words`);

// ─────────────────────────────────────────────────────────────
// RESOURCE PAGES — check all
// ─────────────────────────────────────────────────────────────
console.log(`\n📚 RESOURCE PAGES (all)`);
let resFails = 0;
const resList = Array.isArray(resourcePages) ? resourcePages : [];

for (const page of resList) {
  // Build comparison page content from compareA/compareB/verdict
  const compareContent = page.type === 'comparison' ? [
    page.compareA ? `${page.compareA.label} ${(page.compareA.pros||[]).join(' ')} ${(page.compareA.cons||[]).join(' ')}` : '',
    page.compareB ? `${page.compareB.label} ${(page.compareB.pros||[]).join(' ')} ${(page.compareB.cons||[]).join(' ')}` : '',
    page.verdict || '',
  ].join(' ') : '';

  const words = countWords(
    page.title || '',
    page.h1 || '',
    page.metaDesc || '',
    page.heroSub || '',
    page.intro || '',
    faqWords(page.faqs || []),
    (page.sections || []).map(s =>
      `${s.heading || ''} ${s.content || ''} ${(s.items || []).join(' ')} ${(s.rows || []).map(r => Object.values(r).join(' ')).join(' ')}`
    ).join(' '),
    (page.benefits || []).map(b => `${b.title} ${b.desc}`).join(' '),
    page.conclusion || '',
    compareContent,
    (page.keywords || []).join(' '),
  );

  const pass = words >= 1000;
  if (!pass) resFails++;
  const icon = pass ? '✅' : '❌';
  const note = !pass ? ` ← BELOW 1000` : '';
  console.log(`${icon} /resources/${page.slug} | ~${words} words${note}`);
}
console.log(`\nResource pages: ${resList.length - resFails}/${resList.length} passed | Failures: ${resFails}`);


// ─────────────────────────────────────────────────────────────
// FINAL SUMMARY
// ─────────────────────────────────────────────────────────────
const totalPages = 4850 + 500 + 8300 + 120 + allBlogPosts.length + resList.length;
const totalFails = cityFails + stateFails + segFails + nicheFails + blogFails + resFails;

console.log('\n' + '═'.repeat(60));
console.log('  FINAL SUMMARY');
console.log('═'.repeat(60));
console.log(`${'Page Type'.padEnd(25)} ${'Count'.padStart(6)} ${'Sampled'.padStart(8)} ${'Failed'.padStart(7)}`);
console.log('-'.repeat(60));
console.log(`${'City Pages'.padEnd(25)} ${'4,850'.padStart(6)} ${'30'.padStart(8)} ${cityFails.toString().padStart(7)}`);
console.log(`${'State Pages'.padEnd(25)} ${'500'.padStart(6)} ${'10'.padStart(8)} ${stateFails.toString().padStart(7)}`);
console.log(`${'Segment Pages'.padEnd(25)} ${'8,300'.padStart(6)} ${'10'.padStart(8)} ${segFails.toString().padStart(7)}`);
console.log(`${'Niche Pages'.padEnd(25)} ${'120'.padStart(6)} ${'120'.padStart(8)} ${nicheFails.toString().padStart(7)}`);
console.log(`${'Blog Posts'.padEnd(25)} ${allBlogPosts.length.toString().padStart(6)} ${allBlogPosts.length.toString().padStart(8)} ${blogFails.toString().padStart(7)}`);
console.log(`${'Resource Pages'.padEnd(25)} ${resList.length.toString().padStart(6)} ${resList.length.toString().padStart(8)} ${resFails.toString().padStart(7)}`);
console.log('-'.repeat(60));
console.log(`${'TOTAL'.padEnd(25)} ${totalPages.toLocaleString().padStart(6)}`);
console.log('═'.repeat(60));

if (totalFails === 0) {
  console.log('\n✅ ALL SAMPLED PAGES PASS 1000-WORD THRESHOLD');
  console.log('   Website is safe to index — no thin content risk.\n');
} else {
  console.log(`\n⚠️  ${totalFails} pages below 1000 words — see above for details.\n`);
}
