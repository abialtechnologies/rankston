#!/usr/bin/env node
/**
 * scripts/seo-automation/2-cluster-keywords.js
 *
 * Usage:
 *   node scripts/seo-automation/2-cluster-keywords.js <service-id> [--country uk|usa]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

const { SERVICES, COUNTRIES } = await import('./config.js');

// ── CLI args ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const serviceId  = args[0];
const countryFlag = args.indexOf('--country');
const countryCode = countryFlag >= 0 ? args[countryFlag + 1] : 'usa';

if (!serviceId) {
  console.error('❌ Usage: node 2-cluster-keywords.js <service-id> [--country uk|usa]');
  process.exit(1);
}

const country = COUNTRIES[countryCode];
const service = SERVICES.find(s => s.id === serviceId);
if (!country || !service) { console.error('❌ Unknown service or country'); process.exit(1); }

// ── Load raw keywords ─────────────────────────────────────────────────────
const RAW_FILE = path.join(ROOT, 'data', 'seo-automation', 'raw', `${country.filePrefix}${service.slug}.json`);
if (!fs.existsSync(RAW_FILE)) {
  console.error(`❌ Raw file not found: ${RAW_FILE}\n   Run 1-fetch-keywords.js first.`);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf-8'));
const keywords = rawData.keywords || [];
const labels   = country.clusterLabels;
const cityList = country.cities;

console.log(`\n🧩 Clustering ${keywords.length} keywords for: ${service.title} [${country.name}]`);

// ── Clustering logic ──────────────────────────────────────────────────────
const clusters = {};

for (const kw of keywords) {
  const k   = kw.keyword.toLowerCase();
  let bucket = null;

  // 1. City match (UK cities: london, manchester, etc.)
  for (const city of cityList) {
    if (k.includes(city.name.toLowerCase()) || k.includes(city.slug)) {
      bucket = city.slug;
      break;
    }
  }

  // 2. Intent-based (country-prefixed clusters)
  if (!bucket) {
    const bestTopWords = ['best', 'top', 'leading', 'number one', 'no.1'];
    const nearMeWords  = ['near me', 'near by', 'local', 'nearby'];
    const pricingWords = ['pricing', 'price', 'cost', 'rates', 'packages', 'plans', 'cheap', 'affordable'];
    const hireWords    = ['hire', 'expert', 'consultant', 'specialist', 'freelance'];
    const agencyWords  = ['agency', 'company', 'firm', 'services', 'provider'];

    if (bestTopWords.some(p => k.includes(p)))  bucket = labels.bestTop;
    else if (nearMeWords.some(p => k.includes(p))) bucket = labels.nearMe;
    else if (pricingWords.some(p => k.includes(p))) bucket = labels.pricing;
    else if (hireWords.some(p => k.includes(p)))  bucket = labels.hire;
    else if (agencyWords.some(p => k.includes(p))) bucket = labels.agency;
    else bucket = labels.other;
  }

  if (!clusters[bucket]) {
    clusters[bucket] = {
      slug: bucket,
      location: getCityName(bucket, cityList, country),
      isCity: cityList.some(c => c.slug === bucket),
      country: country.code,
      keywords: [],
    };
  }
  clusters[bucket].keywords.push(kw);
}

function getCityName(slug, cityList, country) {
  const city = cityList.find(c => c.slug === slug);
  if (city) return city.name;
  // Map cluster labels to readable names
  const labelMap = {
    [country.clusterLabels.bestTop]: `Best/Top ${country.name}`,
    [country.clusterLabels.nearMe]:  `Near Me ${country.name}`,
    [country.clusterLabels.pricing]: `Pricing ${country.name}`,
    [country.clusterLabels.hire]:    `Hire Expert ${country.name}`,
    [country.clusterLabels.agency]:  `Agency Services ${country.name}`,
    [country.clusterLabels.other]:   `Other ${country.name}`,
  };
  return labelMap[slug] || country.name;
}

// Sort keywords within each cluster by volume
for (const c of Object.values(clusters)) {
  c.keywords.sort((a, b) => b.searchVolume - a.searchVolume);
}

const clusterList = Object.values(clusters)
  .filter(c => c.keywords.length > 0)
  .sort((a, b) => b.keywords.reduce((s, k) => s + k.searchVolume, 0) -
                  a.keywords.reduce((s, k) => s + k.searchVolume, 0));

console.log(`\n✅ Total clusters created: ${clusterList.length}`);
console.log('\n📊 Top clusters:');
clusterList.slice(0, 7).forEach((c, i) => {
  const avgVol = Math.round(c.keywords.reduce((s, k) => s + k.searchVolume, 0) / c.keywords.length);
  console.log(`   ${i + 1}. [${c.location}] ${c.keywords.length} keywords, avg vol: ${avgVol.toLocaleString()}`);
});

// ── Save ──────────────────────────────────────────────────────────────────
const CLUSTERS_DIR = path.join(ROOT, 'data', 'seo-automation', 'clusters');
fs.mkdirSync(CLUSTERS_DIR, { recursive: true });
const OUTPUT_FILE = path.join(CLUSTERS_DIR, `${country.filePrefix}${service.slug}.json`);

const output = {
  service: service.id,
  serviceSlug: service.slug,
  serviceTitle: service.title,
  country: country.code,
  countryName: country.name,
  clusteredAt: new Date().toISOString(),
  totalClusters: clusterList.length,
  clusters: clusterList,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
console.log(`\n💾 Saved to: data/seo-automation/clusters/${country.filePrefix}${service.slug}.json`);
console.log('🎉 Done! Run 3-generate-pages.js next.\n');
