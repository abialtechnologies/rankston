#!/usr/bin/env node
/**
 * scripts/seo-automation/1-fetch-keywords.js
 *
 * Usage:
 *   node scripts/seo-automation/1-fetch-keywords.js <service-id> [--country uk|usa]
 *
 * Example:
 *   node scripts/seo-automation/1-fetch-keywords.js seo-services --country uk
 *   node scripts/seo-automation/1-fetch-keywords.js seo-services           (defaults to usa)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

const { SERVICES, HIGH_INTENT_PATTERNS, LOW_INTENT_PATTERNS, DATAFORSEO_AUTH, COUNTRIES } = await import('./config.js');

// ── CLI args ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const serviceId = args[0];
const countryFlag = args.indexOf('--country');
const countryCode = countryFlag >= 0 ? args[countryFlag + 1] : 'usa';

if (!serviceId) {
  console.error('❌ Usage: node 1-fetch-keywords.js <service-id> [--country uk|usa]');
  console.error('   Services:', SERVICES.map(s => s.id).join(', '));
  process.exit(1);
}

const country = COUNTRIES[countryCode];
if (!country) {
  console.error(`❌ Unknown country: ${countryCode}. Available: ${Object.keys(COUNTRIES).join(', ')}`);
  process.exit(1);
}

const service = SERVICES.find(s => s.id === serviceId);
if (!service) {
  console.error(`❌ Unknown service: ${serviceId}`);
  process.exit(1);
}

// ── Paths ─────────────────────────────────────────────────────────────────
const RAW_DIR = path.join(ROOT, 'data', 'seo-automation', 'raw');
fs.mkdirSync(RAW_DIR, { recursive: true });
const OUTPUT_FILE = path.join(RAW_DIR, `${country.filePrefix}${service.slug}.json`);

// ── DataForSEO API ────────────────────────────────────────────────────────
async function callDataForSEO(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: 'api.dataforseo.com',
      path: '/v3/keywords_data/google_ads/search_volume/live',
      method: 'POST',
      headers: {
        'Authorization': `Basic ${DATAFORSEO_AUTH}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    const req = https.request(options, (res) => {
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
        catch (e) { reject(new Error('Parse error: ' + e.message)); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ── Intent filter ─────────────────────────────────────────────────────────
function isHighIntent(keyword) {
  const kw = keyword.toLowerCase();
  return HIGH_INTENT_PATTERNS.some(p => kw.includes(p)) &&
    !LOW_INTENT_PATTERNS.some(p => kw.includes(p));
}

// ── Build expanded keyword list ───────────────────────────────────────────
function buildKeywords(service, country) {
  const modifiers = country.intentModifiers;
  // Add country-specific modifiers to seed keywords
  const countryModifier = country.code === 'uk' ? 'uk' : '';
  const cityNames = country.cities.map(c => c.name.toLowerCase());

  const expanded = [];
  for (const seed of service.seedKeywords) {
    expanded.push(seed);
    // Add country suffix variant
    if (countryModifier) expanded.push(`${seed} ${countryModifier}`);
    // Add intent modifiers
    for (const mod of modifiers) {
      expanded.push(`${mod} ${seed}`);
      expanded.push(`${seed} ${mod}`);
    }
    // Add top 3 cities for this country
    for (const city of cityNames.slice(0, 3)) {
      expanded.push(`${seed} ${city}`);
      expanded.push(`${seed} in ${city}`);
    }
  }
  return [...new Set(expanded)].slice(0, 100);
}

// ── Main ──────────────────────────────────────────────────────────────────
console.log(`\n🔍 Fetching keywords for: ${service.title} [${country.name}]`);
console.log(`   Location code: ${country.locationCode}`);
console.log(`   Seed keywords: ${service.seedKeywords.join(', ')}\n`);

const keywords = buildKeywords(service, country);
console.log(`📋 Checking ${keywords.length} keyword variations...`);

try {
  const response = await callDataForSEO([{
    keywords,
    location_code: country.locationCode,
    language_code: country.language,
  }]);

  if (response.status_code !== 20000) {
    throw new Error(`API Error ${response.status_code}: ${response.status_message}`);
  }
  const task = response.tasks?.[0];
  if (task?.status_code !== 20000) {
    throw new Error(`Task Error: ${task?.status_message}`);
  }

  const items = task?.result || [];
  console.log(`📥 Raw keywords fetched: ${items.length}`);

  const filtered = items
    .filter(item => isHighIntent(item.keyword))
    .map(item => ({
      keyword: item.keyword,
      searchVolume: item.search_volume || 0,
      cpc: item.cpc || 0,
      competition: item.competition || 0,
      service: service.id,
      serviceSlug: service.slug,
      country: country.code,
    }))
    .sort((a, b) => b.searchVolume - a.searchVolume);

  console.log(`✅ High-intent keywords: ${filtered.length}`);

  if (filtered.length === 0) {
    console.log('⚠️  No high-intent keywords found.');
    process.exit(0);
  }

  console.log('\n📊 Top 10 high-intent keywords:');
  filtered.slice(0, 10).forEach((k, i) => {
    console.log(`   ${i + 1}. "${k.keyword}" — vol: ${k.searchVolume?.toLocaleString()}, CPC: £${k.cpc}`);
  });

  const output = {
    service: service.id,
    serviceSlug: service.slug,
    serviceTitle: service.title,
    country: country.code,
    countryName: country.name,
    fetchedAt: new Date().toISOString(),
    totalFetched: items.length,
    totalHighIntent: filtered.length,
    keywords: filtered,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\n💾 Saved to: data/seo-automation/raw/${country.filePrefix}${service.slug}.json`);
  console.log('🎉 Done! Run 2-cluster-keywords.js next.\n');

} catch (err) {
  console.error('\n❌ Failed:', err.message);
  process.exit(1);
}
