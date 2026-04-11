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
  const curr       = country.currency === 'GBP' ? '£' : '$';
  const cc         = country.name;
  const ccShort    = country.code === 'uk' ? 'UK' : 'USA';

  const sp = country.spellingMap;
  const fix = (t) => {
    if (!sp) return t;
    let out = t;
    for (const [us, uk] of Object.entries(sp)) {
      const re = new RegExp(`\\b${us}\\b`, 'gi');
      out = out.replace(re, (match) => {
        if (match[0] === match[0].toUpperCase()) return uk.charAt(0).toUpperCase() + uk.slice(1);
        return uk;
      });
    }
    return out;
  };

  const h1 = topKw.charAt(0).toUpperCase() + topKw.slice(1);
  const h1Sub = `${service.title} in ${loc} — Rankston`;
  const kwsHtml = topKws.slice(0,3).map(k => `<em>${k}</em>`).join(', ');

  const heroParagraph = isCity
    ? `Looking for expert ${service.title.toLowerCase()} in ${loc}? Rankston delivers proven results for businesses across ${loc} and the wider ${ccShort} market. Whether you're searching for ${kwsHtml} — you've come to the right place. We combine data-backed strategies with measurable ROI.`
    : `Professional ${service.title.toLowerCase()} for businesses across the ${cc}. We help you rank higher, generate more leads, and grow faster. Whether you're searching for ${kwsHtml} — you've come to the right place. Our team treats your business like our own.`;

  const sections = [
    {
      h2: fix(`Why ${loc} Businesses Choose Rankston for ${service.title}`),
      body: fix(`The ${service.title.toLowerCase()} landscape in ${loc} is competitive, and you need specialists who understand ${ccShort} market dynamics and local search behaviour.\n\nOur approach is built on transparent reporting, dedicated account managers, and proven strategies that have worked for 200+ businesses. We don't just run campaigns — we build systems that generate predictable, compounding results month after month.`)
    },
    {
      h2: fix(`What's Included in Our ${service.title}`),
      body: fix(`We provide a comprehensive strategy tailored specifically to the ${isCity ? loc : ccShort} market:\n\n• **Full audit and competitor analysis**\n• **Custom strategy for high-intent keywords**\n• **Monthly performance reports with clear KPIs**\n• **Dedicated support from certified specialists**\n\nNo two clients get the same strategy, because every business requires a customised approach to dominate search performance.`)
    },
    {
      h2: fix(`Our Proven Process for ${service.title}`),
      body: fix(`**Step 1: Discovery & Audit** — We analyse your current position in the ${isCity ? loc : ccShort} market and identify quick wins.\n\n**Step 2: Strategy Build** — We design a custom ${service.title.toLowerCase()} roadmap tailored to your specific audience and competitive landscape.\n\n**Step 3: Execution** — Our specialists implement technical, content, and authority-building optimisations.\n\n**Step 4: Measure & Scale** — We track rankings, traffic, and leads, optimising continuously for better ROI.`)
    }
  ];

  const faqsItems = isCity ? [
    { question: `How much do ${service.title.toLowerCase()} cost in ${loc}?`, answer: `${service.title} in ${loc} typically range from ${curr}500–${curr}3,000/month depending on competition. We offer transparent pricing with no hidden fees — contact us for a free custom quote.` },
    { question: `How long before I see results from ${service.title.toLowerCase()} in ${loc}?`, answer: `Most ${loc} businesses see measurable improvements within 60–90 days. For highly competitive niches, it may take 4–6 months to see significant improvements.` },
    { question: `Do you specialise in ${loc} businesses specifically?`, answer: `Yes. Our team understands the ${loc} market — search patterns, competitor landscape, and consumer behaviour specific to your region.` },
    { question: `Do I need a contract for ${service.title.toLowerCase()} in ${loc}?`, answer: `We work on rolling monthly agreements. Cancel with 30 days' notice at any time — we retain clients through results, not contracts.` }
  ] : [
    { question: `How much do ${service.title.toLowerCase()} cost in the ${ccShort}?`, answer: `${service.title} in the ${ccShort} typically range from ${curr}400–${curr}4,000/month depending on scope and goals.` },
    { question: `How long does it take to rank in ${ccShort} search results?`, answer: `Most ${ccShort} businesses see meaningful improvements within 3–6 months. The timeline depends on your current authority and competition.` },
    { question: `Is Rankston experienced with the ${ccShort} market?`, answer: `Yes. We have extensive experience with ${ccShort} search trends, local intent patterns, and the competitive landscape.` },
    { question: `Do you offer ${service.title.toLowerCase()} across all ${ccShort} regions?`, answer: `Yes — we work with businesses across all regions of the ${ccShort}. Our campaigns are tailored to both local and national audiences.` }
  ];

  return {
    h1: fix(h1),
    h1Sub: fix(h1Sub),
    heroParagraph: fix(heroParagraph),
    sections: sections,
    faqs: faqsItems.map(f => ({ question: fix(f.question), answer: fix(f.answer) })),
    cta: {
      heading: fix(`Ready to Dominate ${service.title} in ${loc}?`),
      subheading: fix(`Get a free ${service.title.toLowerCase()} audit and custom strategy — no commitment required.`),
      buttonText: fix("Get Your Free Audit"),
      buttonLink: "/#contact",
      secondaryText: fix("Book a Call"),
      secondaryLink: "https://calendly.com/rankston"
    }
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
        name: content.h1,
        description: content.heroParagraph.slice(0, 160),
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
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://rankston.com' },
          { '@type': 'ListItem', position: 2, name: service.title,  item: `https://rankston.com/${service.slug}` },
          { '@type': 'ListItem', position: 3, name: content.h1,     item: url },
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
      metaTitle:       `${content.h1} | Rankston`,
      metaDescription: content.heroParagraph.slice(0, 160),
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
