#!/usr/bin/env node
/**
 * scripts/seo-automation/3-generate-pages.js
 *
 * Usage: node scripts/seo-automation/3-generate-pages.js <service-id>
 * Example: node scripts/seo-automation/3-generate-pages.js seo-services
 *
 * Generates unique SEO page content for each cluster.
 * - Skips clusters that already have a page (duplicate prevention)
 * - Template-based: no AI API cost
 * - Output: data/seo-automation/pages/{cluster-slug}.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

const { SERVICES } = await import('./config.js');

// ── CLI args ──
const serviceId = process.argv[2];
if (!serviceId) {
  console.error('❌ Usage: node 3-generate-pages.js <service-id>');
  process.exit(1);
}

const service = SERVICES.find(s => s.id === serviceId);
if (!service) {
  console.error(`❌ Unknown service: ${serviceId}`);
  process.exit(1);
}

// ── Paths ──
const CLUSTERS_FILE = path.join(ROOT, 'data', 'seo-automation', 'clusters', `${service.slug}.json`);
const PAGES_DIR = path.join(ROOT, 'data', 'seo-automation', 'pages');
fs.mkdirSync(PAGES_DIR, { recursive: true });

if (!fs.existsSync(CLUSTERS_FILE)) {
  console.error('❌ Clusters not found. Run 2-cluster-keywords.js first.');
  process.exit(1);
}

const { clusters } = JSON.parse(fs.readFileSync(CLUSTERS_FILE, 'utf-8'));
console.log(`\n📄 Generating pages for: ${service.title}`);
console.log(`   Total clusters: ${clusters.length}\n`);

// ── Content Templates ──
function generatePageContent(cluster, service) {
  const { location, keywords, topKeyword, locationCode } = cluster;
  const sTitle = service.title;
  const isNational = locationCode === 'USA';
  const locationLabel = isNational ? 'the United States' : location;
  const locationShort = isNational ? 'US' : location;

  // Extract all keyword strings for natural use in content
  const kwStrings = keywords.map(k => k.keyword);
  const topKws = kwStrings.slice(0, 5);

  // Page title variations
  const h1 = topKeyword.charAt(0).toUpperCase() + topKeyword.slice(1);
  const h1Sub = `${sTitle} in ${locationLabel} — Rankston`;

  const metaTitle = `${h1} | Rankston Digital Agency`;
  const metaDescription = `Looking for the ${sTitle.toLowerCase()} in ${locationLabel}? Rankston delivers proven results — higher rankings, more leads, and real ROI. Get a free audit today.`;

  // Benefits based on service
  const serviceBenefits = {
    'seo-services': ['Higher Google rankings in 90 days', 'AI Overview (AIO) visibility', 'Local and national keyword dominance', 'Monthly ranking reports'],
    'web-development': ['Mobile-first, fast-loading websites', 'Core Web Vitals optimized', 'Built for SEO from day one', 'Conversion-focused design'],
    'ppc-advertising': ['Lower cost-per-click (CPC)', 'Higher conversion rates', 'Real-time campaign optimization', 'Transparent monthly reporting'],
    'social-media-marketing': ['Consistent brand presence', 'Engaged audience growth', 'Platform-specific strategies', 'Paid social campaign management'],
    'gmb-optimization': ['Top 3 Google Maps ranking', 'More calls and direction requests', 'Review generation strategy', 'Multi-location management'],
    'graphic-designing': ['Professional brand identity', 'Scroll-stopping creatives', 'Consistent brand visuals', 'Full brand style guide'],
    'video-editing': ['High-retention video content', 'Optimized for YouTube and reels', 'Professional color grading', 'Motion graphics and animations'],
    'content-marketing': ['SEO-optimized blog content', 'Pillar page strategy', 'Email marketing sequences', 'Content calendar management'],
    'ai-automation': ['Automated lead capture 24/7', 'Instant follow-up sequences', 'CRM and pipeline automation', 'AI-powered workflow efficiency'],
    'chatbot-development': ['24/7 lead qualification', 'WhatsApp and website chat', 'Appointment booking automation', 'Multi-language support'],
  };

  const benefits = serviceBenefits[service.id] || ['Proven results', 'Dedicated team', 'Transparent reporting', 'ROI focused'];

  // FAQ based on service + location
  const faqs = [
    {
      question: `How much does ${sTitle.toLowerCase()} cost in ${locationShort}?`,
      answer: `${sTitle} pricing in ${locationLabel} varies based on your business size and goals. At Rankston, we offer transparent, results-driven packages starting from competitive rates. We provide a free audit so you know exactly what you need and what it will cost — no hidden fees.`,
    },
    {
      question: `How long does it take to see results from ${sTitle.toLowerCase()}?`,
      answer: `Most clients see measurable results within 60–90 days. For SEO, rankings improve over 3–6 months. For paid campaigns and chatbots, results can appear immediately. We set clear milestones and report transparently so you're never in the dark.`,
    },
    {
      question: `Why choose Rankston for ${sTitle.toLowerCase()} in ${locationLabel}?`,
      answer: `Rankston specializes in ${sTitle.toLowerCase()} for businesses in ${locationLabel} and across the USA. We combine data-driven strategy with hands-on execution — no outsourcing, no cookie-cutter campaigns. Our team is focused on one goal: your growth.`,
    },
    {
      question: `Do you work with small businesses in ${locationShort}?`,
      answer: `Absolutely. We work with local small businesses, growing startups, and established enterprises across ${locationLabel}. Our strategies scale with your budget — whether you're spending $500/month or $50,000/month, we deliver maximum ROI.`,
    },
    {
      question: `What makes your ${sTitle.toLowerCase()} different from other agencies?`,
      answer: `Unlike agencies that overpromise and underdeliver, Rankston uses transparent reporting, dedicated account managers, and proven methodologies. We don't lock you into long contracts — we earn your business every month through results.`,
    },
  ];

  // Related keywords in natural prose (for SEO)
  const relatedKwProse = topKws.length > 1
    ? `Whether you're searching for <em>${topKws.slice(0, 3).join('</em>, <em>')}</em> — you've come to the right place.`
    : `Whether you need <em>${topKeyword}</em> or a full-service digital strategy, we've got you covered.`;

  return {
    clusterId: cluster.clusterId,
    clusterSlug: cluster.clusterSlug,
    serviceId: service.id,
    serviceSlug: service.slug,
    serviceTitle: service.title,
    location: location,
    locationSlug: cluster.locationSlug,
    generatedAt: new Date().toISOString(),
    keywords: kwStrings,
    topKeyword,

    seo: {
      metaTitle,
      metaDescription,
      canonical: `https://rankston.com/${cluster.clusterSlug}`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `Rankston — ${sTitle} in ${location}`,
        description: metaDescription,
        url: `https://rankston.com/${cluster.clusterSlug}`,
        areaServed: location,
        provider: {
          '@type': 'Organization',
          name: 'Rankston',
          url: 'https://rankston.com',
        },
        serviceType: sTitle,
      },
    },

    content: {
      h1,
      h1Sub,
      heroParagraph: `${locationLabel}'s businesses deserve ${sTitle.toLowerCase()} that actually works. Rankston is a results-driven digital marketing agency helping ${locationShort} companies grow with data-backed strategies, measurable ROI, and a dedicated team that treats your business like their own. ${relatedKwProse}`,

      sections: [
        {
          h2: `Why ${locationLabel} Businesses Choose Rankston for ${sTitle}`,
          body: `The ${sTitle.toLowerCase()} landscape in ${locationLabel} is competitive — and generic agencies won't cut it. Rankston brings deep expertise in the ${locationShort} market, understanding local search behavior, competitor dynamics, and the specific channels that drive leads in your industry.\n\nOur approach is built on three pillars: **strategy, execution, and transparency**. We don't just run campaigns — we build systems that generate predictable, compounding results month after month. From your first audit to your 12th monthly report, you'll always know exactly how your investment is performing.`,
        },
        {
          h2: `What's Included in Our ${sTitle} Services`,
          body: `When you partner with Rankston for ${sTitle.toLowerCase()} in ${locationLabel}, you get a comprehensive service package designed for maximum impact:\n\n${benefits.map(b => `• **${b}**`).join('\n')}\n\nEvery service is customized to your industry, budget, and competitive landscape. No two clients get the same strategy — because no two businesses are the same.`,
        },
        {
          h2: `Our Proven Process for ${sTitle} in ${locationLabel}`,
          body: `**Step 1: Free Audit & Strategy Call** — We analyze your current position, competitors, and opportunities in ${locationLabel}.\n\n**Step 2: Custom Strategy Development** — Your dedicated team builds a data-driven ${sTitle.toLowerCase()} roadmap tailored to your goals.\n\n**Step 3: Execution & Optimization** — We implement, monitor, and continuously optimize — adjusting weekly based on real performance data.\n\n**Step 4: Reporting & Scaling** — Monthly reports with clear KPIs. As results compound, we scale what works.`,
        },
        {
          h2: `${sTitle} Results for ${locationLabel} Clients`,
          body: `Rankston has delivered measurable results for businesses across ${locationLabel} and beyond. Our clients consistently see significant improvements in their core metrics — whether that's ranking positions, leads generated, conversion rates, or revenue directly attributable to their digital marketing.\n\nWe publish case studies and share real data because we're confident in the results we deliver. Ask us for examples from your specific industry in ${locationShort}.`,
        },
      ],

      faqs,

      cta: {
        heading: `Ready to Dominate ${sTitle} in ${locationLabel}?`,
        subheading: `Get a free ${sTitle.toLowerCase()} audit and custom strategy — no commitment required.`,
        buttonText: 'Get Your Free Audit',
        buttonLink: '/#contact',
        secondaryText: 'Book a 30-min strategy call',
        secondaryLink: 'https://calendly.com/rankston',
      },
    },

    internalLinks: [], // Will be populated by the route component from sibling pages
  };
}

// ── Main Loop ──
let generated = 0;
let skipped = 0;

for (const cluster of clusters) {
  // Normalize slug for file path
  const safeSlug = cluster.clusterSlug.replace(/\//g, '--');
  const outputFile = path.join(PAGES_DIR, `${safeSlug}.json`);

  if (fs.existsSync(outputFile)) {
    console.log(`⏭️  Skipping (already exists): ${cluster.clusterSlug}`);
    skipped++;
    continue;
  }

  const pageContent = generatePageContent(cluster, service);
  fs.writeFileSync(outputFile, JSON.stringify(pageContent, null, 2));
  console.log(`✅ Generated: ${cluster.clusterSlug} (${cluster.keywords.length} keywords)`);
  generated++;
}

console.log(`\n📊 Summary:`);
console.log(`   Generated: ${generated} new pages`);
console.log(`   Skipped:   ${skipped} (already exist)`);
console.log(`   Total:     ${clusters.length} clusters`);
console.log(`\n💾 Pages saved to: data/seo-automation/pages/`);
console.log('🎉 Done! Pages are ready to serve via the Next.js route.\n');
