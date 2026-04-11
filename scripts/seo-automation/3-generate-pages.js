#!/usr/bin/env node
/**
 * scripts/seo-automation/3-generate-pages.js
 *
 * Usage:
 *   node scripts/seo-automation/3-generate-pages.js <service-id> [--country uk|usa]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

const { SERVICES, COUNTRIES } = await import('./config.js');

// ── CLI args ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const serviceId   = args[0];
const countryFlag = args.indexOf('--country');
const countryCode = countryFlag >= 0 ? args[countryFlag + 1] : 'usa';

if (!serviceId) {
  console.error('❌ Usage: node 3-generate-pages.js <service-id> [--country uk|usa]');
  process.exit(1);
}

const country = COUNTRIES[countryCode];
const service  = SERVICES.find(s => s.id === serviceId);
if (!country || !service) { console.error('❌ Unknown service or country'); process.exit(1); }

// ── Load cluster data ─────────────────────────────────────────────────────
const CLUSTERS_FILE = path.join(
  ROOT, 'data', 'seo-automation', 'clusters',
  `${country.filePrefix}${service.slug}.json`
);
if (!fs.existsSync(CLUSTERS_FILE)) {
  console.error(`❌ Clusters file not found. Run 2-cluster-keywords.js first.`);
  process.exit(1);
}

const clustersData = JSON.parse(fs.readFileSync(CLUSTERS_FILE, 'utf-8'));
const clusters = clustersData.clusters || [];

// ── Paths ─────────────────────────────────────────────────────────────────
const PAGES_DIR = path.join(ROOT, 'data', 'seo-automation', 'pages');
fs.mkdirSync(PAGES_DIR, { recursive: true });

console.log(`\n📄 Generating pages for: ${service.title} [${country.name}]`);
console.log(`   Total clusters: ${clusters.length}\n`);

// ── UK spelling fixer ─────────────────────────────────────────────────────
function applySpelling(text, spellingMap) {
  if (!spellingMap) return text;
  let out = text;
  for (const [us, uk] of Object.entries(spellingMap)) {
    // Replace whole-word occurrences, case-insensitive
    const re = new RegExp(`\\b${us}\\b`, 'gi');
    out = out.replace(re, (match) => {
      if (match[0] === match[0].toUpperCase()) return uk.charAt(0).toUpperCase() + uk.slice(1);
      return uk;
    });
  }
  return out;
}

// ── Content templates ─────────────────────────────────────────────────────
function generateContent(service, cluster, country) {
  const loc        = cluster.location;
  const isCity     = cluster.isCity;
  const topKws     = cluster.keywords.slice(0, 5).map(k => k.keyword);
  const topKw      = topKws[0] || `${service.title} ${loc}`;
  const currSymbol = country.currency === 'GBP' ? '£' : '$';
  const cc         = country.name;    // "United Kingdom" or "United States"
  const ccShort    = country.code === 'uk' ? 'UK' : 'USA';

  const heroTitle = isCity
    ? `${service.title} in ${loc}`
    : `${service.title} | ${cc} Market`;

  const heroSub = isCity
    ? `Looking for expert ${service.title.toLowerCase()} in ${loc}? Rankston delivers proven results for businesses across ${loc} and the wider ${ccShort} market.`
    : `Professional ${service.title.toLowerCase()} for businesses across the ${cc}. We help you rank higher, generate more leads, and grow faster.`;

  const whyPoints = [
    `Specialists in ${ccShort} market dynamics and local search behaviour`,
    `Transparent reporting — you always know what we're doing and why`,
    `Dedicated account managers based in your timezone`,
    `Proven results across 200+ ${ccShort} businesses`,
    `No long-term lock-in — cancel anytime with 30 days' notice`,
  ];

  const included = [
    `Full ${service.title} audit and competitor analysis`,
    `Custom strategy tailored to ${isCity ? loc : ccShort} market`,
    `Monthly performance reports with clear KPIs`,
    `Dedicated support from certified specialists`,
    `Regular strategy reviews and optimisation calls`,
  ];

  const process = [
    { step: '01', title: 'Discovery & Audit', desc: `We analyse your current position in the ${isCity ? loc : ccShort} market, identify quick wins, and map out a roadmap.` },
    { step: '02', title: 'Strategy Build',    desc: `Custom ${service.title.toLowerCase()} strategy designed specifically for ${isCity ? loc : ccShort} audience and competition.` },
    { step: '03', title: 'Execution',         desc: `Our specialists implement every element: on-page, technical, content, and authority building.` },
    { step: '04', title: 'Measure & Scale',   desc: `We track rankings, traffic, and leads. Monthly reviews ensure continuous improvement and growth.` },
  ];

  const faqs = isCity ? [
    {
      q: `How much do ${service.title.toLowerCase()} cost in ${loc}?`,
      a: `${service.title} in ${loc} typically range from ${currSymbol}500–${currSymbol}3,000/month depending on competition and scope. We offer transparent pricing with no hidden fees — contact us for a free custom quote.`,
    },
    {
      q: `How long before I see results from ${service.title.toLowerCase()} in ${loc}?`,
      a: `Most ${loc} businesses see measurable improvements within 60–90 days. For highly competitive niches, allow 4–6 months for significant ranking improvements.`,
    },
    {
      q: `Do you specialise in ${loc} businesses specifically?`,
      a: `Yes. Our team understands the ${loc} market — local search patterns, competitor landscape, and consumer behaviour specific to ${loc} and the surrounding areas.`,
    },
    {
      q: `Can you help a small business in ${loc} compete with larger brands?`,
      a: `Absolutely. Local ${service.title.toLowerCase()} in ${loc} levels the playing field. We focus on high-intent local searches where small businesses consistently outperform larger national brands.`,
    },
    {
      q: `Do I need a contract for ${service.title.toLowerCase()} in ${loc}?`,
      a: `We work on rolling monthly agreements. Most clients stay because of results, not contracts. Cancel with 30 days' notice at any time.`,
    },
  ] : [
    {
      q: `How much do ${service.title.toLowerCase()} cost in the ${ccShort}?`,
      a: `${service.title} in the ${ccShort} typically range from ${currSymbol}400–${currSymbol}4,000/month depending on scope and goals. We offer free audits to identify what your business specifically needs before any commitment.`,
    },
    {
      q: `How long does it take to rank in ${ccShort} search results?`,
      a: `Most ${ccShort} businesses see meaningful improvements within 3–6 months. The timeline depends on your current authority, competition level, and the keywords we're targeting.`,
    },
    {
      q: `Is Rankston experienced with the ${ccShort} market?`,
      a: `Yes. We have extensive experience with ${ccShort} search trends, local intent patterns, and the competitive landscape across multiple industries.`,
    },
    {
      q: `Can ${service.title.toLowerCase()} work for small businesses in the ${ccShort}?`,
      a: `Definitely. Small businesses are often better positioned to dominate local and niche search terms. Our strategies are scaled appropriately for businesses at every stage.`,
    },
    {
      q: `Do you offer ${service.title.toLowerCase()} across all ${ccShort} regions?`,
      a: `Yes — we work with businesses across all regions of the ${ccShort}, from London and Manchester to Edinburgh, Cardiff, and beyond.`,
    },
  ];

  // Apply UK spelling if needed
  const sp = country.spellingMap;
  const fix = (t) => sp ? applySpelling(t, sp) : t;

  return {
    heroTitle:   fix(heroTitle),
    heroSub:     fix(heroSub),
    whyPoints:   whyPoints.map(fix),
    included:    included.map(fix),
    process:     process.map(p => ({ ...p, desc: fix(p.desc) })),
    faqs:        faqs.map(f => ({ q: fix(f.q), a: fix(f.a) })),
    topKeywords: topKws,
  };
}

// ── Schema generator ──────────────────────────────────────────────────────
function generateSchema(service, cluster, country, content, slug) {
  const loc  = cluster.location;
  const ccShort = country.code === 'uk' ? 'UK' : 'USA';
  const url  = `https://rankston.com/${service.slug}/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: content.heroTitle,
        description: content.heroSub,
        provider: {
          '@type': 'Organization',
          name: 'Rankston',
          url: 'https://rankston.com',
        },
        areaServed: cluster.isCity
          ? { '@type': 'City', name: loc }
          : { '@type': 'Country', name: country.name },
        serviceType: service.title,
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://rankston.com' },
          { '@type': 'ListItem', position: 2, name: service.title,  item: `https://rankston.com/${service.slug}` },
          { '@type': 'ListItem', position: 3, name: content.heroTitle, item: url },
        ],
      },
    ],
  };
}

// ── Generate pages ────────────────────────────────────────────────────────
let generated = 0, skipped = 0;

for (const cluster of clusters) {
  const slug     = cluster.slug;
  // File: uk--seo-services--london.json  or  seo-services--usa-pricing.json
  const fileName = `${country.filePrefix}${service.slug}--${slug}.json`;
  const filePath = path.join(PAGES_DIR, fileName);

  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipped (exists): ${service.slug}/${slug}`);
    skipped++;
    continue;
  }

  const content = generateContent(service, cluster, country);
  const schema  = generateSchema(service, cluster, country, content, slug);

  const page = {
    // Meta
    serviceSlug:   service.slug,
    serviceTitle:  service.title,
    clusterSlug:   `${service.slug}/${slug}`,
    locationSlug:  slug,
    location:      cluster.location,
    country:       country.code,
    countryName:   country.name,
    isCity:        cluster.isCity,
    generatedAt:   new Date().toISOString(),
    keywordCount:  cluster.keywords.length,
    topKeywords:   cluster.keywords.slice(0, 10),

    // SEO
    seo: {
      metaTitle:       `${content.heroTitle} | Rankston`,
      metaDescription: content.heroSub.slice(0, 160),
      canonical:       `https://rankston.com/${service.slug}/${slug}`,
      schema,
    },

    // Content
    content,
  };

  fs.writeFileSync(filePath, JSON.stringify(page, null, 2));
  console.log(`✅ Generated: ${service.slug}/${slug} (${cluster.keywords.length} keywords) [${country.code.toUpperCase()}]`);
  generated++;
}

console.log(`\n📊 Summary:`);
console.log(`   Generated: ${generated} new pages`);
console.log(`   Skipped:   ${skipped} (already exist)`);
console.log(`   Total:     ${clusters.length} clusters`);
console.log(`\n💾 Pages saved to: data/seo-automation/pages/`);
console.log('🎉 Done! Pages are ready to serve via the Next.js route.\n');
