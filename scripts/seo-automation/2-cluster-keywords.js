#!/usr/bin/env node
/**
 * scripts/seo-automation/2-cluster-keywords.js
 *
 * Usage: node scripts/seo-automation/2-cluster-keywords.js <service-id>
 * Example: node scripts/seo-automation/2-cluster-keywords.js seo-services
 *
 * Groups high-intent keywords into clusters.
 * 1 cluster = 1 page
 * Zero API cost — pure JS logic.
 *
 * Clustering strategy:
 *  1. Detect US state/city in keyword → location cluster
 *  2. Group keywords with same location + service into one cluster
 *  3. Remaining non-location keywords → national cluster
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

const { SERVICES, US_LOCATIONS } = await import('./config.js');

// ── CLI args ──
const serviceId = process.argv[2];
if (!serviceId) {
  console.error('❌ Usage: node 2-cluster-keywords.js <service-id>');
  process.exit(1);
}

const service = SERVICES.find(s => s.id === serviceId);
if (!service) {
  console.error(`❌ Unknown service: ${serviceId}`);
  process.exit(1);
}

// ── Paths ──
const RAW_FILE = path.join(ROOT, 'data', 'seo-automation', 'raw', `${service.slug}.json`);
const CLUSTERS_DIR = path.join(ROOT, 'data', 'seo-automation', 'clusters');
fs.mkdirSync(CLUSTERS_DIR, { recursive: true });
const OUTPUT_FILE = path.join(CLUSTERS_DIR, `${service.slug}.json`);

if (!fs.existsSync(RAW_FILE)) {
  console.error(`❌ Raw keywords not found. Run 1-fetch-keywords.js first.`);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf-8'));
const keywords = rawData.keywords;
console.log(`\n🧩 Clustering ${keywords.length} keywords for: ${service.title}\n`);

// ── Location detection ──
function detectLocation(keyword) {
  const kw = keyword.toLowerCase();
  for (const loc of US_LOCATIONS) {
    if (kw.includes(loc.name.toLowerCase()) || kw.includes(loc.code.toLowerCase() + ' ') || kw.endsWith(' ' + loc.code.toLowerCase())) {
      return loc;
    }
  }
  return null;
}

// ── Clustering ──
const locationClusters = {};
const nationalKeywords = [];

for (const kw of keywords) {
  const loc = detectLocation(kw.keyword);
  if (loc) {
    const key = loc.slug;
    if (!locationClusters[key]) {
      locationClusters[key] = {
        clusterId: `${service.slug}-${loc.slug}`,
        clusterSlug: `${service.slug}/${loc.slug}`,
        serviceId: service.id,
        serviceSlug: service.slug,
        serviceTitle: service.title,
        location: loc.name,
        locationSlug: loc.slug,
        locationCode: loc.code,
        keywords: [],
        avgVolume: 0,
        topKeyword: '',
      };
    }
    locationClusters[key].keywords.push(kw);
  } else {
    nationalKeywords.push(kw);
  }
}

// Compute stats per location cluster
const clusters = [];
for (const [, cluster] of Object.entries(locationClusters)) {
  if (cluster.keywords.length < 1) continue;
  
  const totalVol = cluster.keywords.reduce((sum, k) => sum + k.searchVolume, 0);
  cluster.avgVolume = Math.round(totalVol / cluster.keywords.length);
  cluster.topKeyword = cluster.keywords.sort((a, b) => b.searchVolume - a.searchVolume)[0].keyword;
  clusters.push(cluster);
}

// National clusters: group remaining by keyword theme
if (nationalKeywords.length > 0) {
  // Split by intent words into sub-groups
  const intentGroups = {
    'best-top': [],
    'agency-services': [],
    'pricing': [],
    'hire-expert': [],
    'near-me': [],
    'other': [],
  };

  for (const kw of nationalKeywords) {
    const k = kw.keyword.toLowerCase();
    if (k.includes('pricing') || k.includes('cost')) intentGroups['pricing'].push(kw);
    else if (k.includes('near me') || k.includes('local')) intentGroups['near-me'].push(kw);
    else if (k.includes('hire') || k.includes('expert') || k.includes('consultant')) intentGroups['hire-expert'].push(kw);
    else if (k.includes('best') || k.includes('top')) intentGroups['best-top'].push(kw);
    else if (k.includes('agency') || k.includes('services') || k.includes('company')) intentGroups['agency-services'].push(kw);
    else intentGroups['other'].push(kw);
  }

  for (const [groupKey, kws] of Object.entries(intentGroups)) {
    if (kws.length === 0) continue;
    const totalVol = kws.reduce((sum, k) => sum + k.searchVolume, 0);
    clusters.push({
      clusterId: `${service.slug}-usa-${groupKey}`,
      clusterSlug: `${service.slug}/usa-${groupKey}`.replace(/-+/g, '-'),
      serviceId: service.id,
      serviceSlug: service.slug,
      serviceTitle: service.title,
      location: 'United States',
      locationSlug: `usa-${groupKey}`,
      locationCode: 'USA',
      keywords: kws.sort((a, b) => b.searchVolume - a.searchVolume),
      avgVolume: Math.round(totalVol / kws.length),
      topKeyword: kws.sort((a, b) => b.searchVolume - a.searchVolume)[0].keyword,
    });
  }
}

// Sort clusters by avg volume desc
clusters.sort((a, b) => b.avgVolume - a.avgVolume);

console.log(`✅ Total clusters created: ${clusters.length}`);
console.log('\n📊 Top clusters:');
clusters.slice(0, 8).forEach((c, i) => {
  console.log(`   ${i+1}. [${c.location}] ${c.keywords.length} keywords, top: "${c.topKeyword}" (vol: ${c.avgVolume.toLocaleString()})`);
});

const output = {
  service: service.id,
  serviceSlug: service.slug,
  serviceTitle: service.title,
  clusteredAt: new Date().toISOString(),
  totalClusters: clusters.length,
  clusters,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
console.log(`\n💾 Saved to: data/seo-automation/clusters/${service.slug}.json`);
console.log('🎉 Done! Run 3-generate-pages.js next.\n');
