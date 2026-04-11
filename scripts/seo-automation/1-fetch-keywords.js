#!/usr/bin/env node
/**
 * scripts/seo-automation/1-fetch-keywords.js
 *
 * Usage: node scripts/seo-automation/1-fetch-keywords.js <service-id>
 * Example: node scripts/seo-automation/1-fetch-keywords.js seo-services
 *
 * Fetches high-intent keywords from DataForSEO for a given service.
 * Saves raw filtered results to data/seo-automation/raw/<service>.json
 * Budget: ~$0.02–0.05 per service run
 */


import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');

// Load config
const { SERVICES, HIGH_INTENT_PATTERNS, LOW_INTENT_PATTERNS, DATAFORSEO_AUTH, USA_LOCATION_CODE } = await import('./config.js');

// ── CLI args ──
const serviceId = process.argv[2];
if (!serviceId) {
  console.error('❌ Usage: node 1-fetch-keywords.js <service-id>');
  console.error('   Services:', SERVICES.map(s => s.id).join(', '));
  process.exit(1);
}

const service = SERVICES.find(s => s.id === serviceId);
if (!service) {
  console.error(`❌ Unknown service: ${serviceId}`);
  process.exit(1);
}

// ── Paths ──
const RAW_DIR = path.join(ROOT, 'data', 'seo-automation', 'raw');
fs.mkdirSync(RAW_DIR, { recursive: true });
const OUTPUT_FILE = path.join(RAW_DIR, `${service.slug}.json`);

// ── DataForSEO API call ──
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
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString()));
        } catch (e) {
          reject(new Error('Failed to parse response: ' + e.message));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// ── Intent Filters ──
function isHighIntent(keyword) {
  const kw = keyword.toLowerCase();
  const hasHighIntent = HIGH_INTENT_PATTERNS.some(p => kw.includes(p));
  const hasLowIntent = LOW_INTENT_PATTERNS.some(p => kw.includes(p));
  return hasHighIntent && !hasLowIntent;
}

// ── Main ──
console.log(`\n🔍 Fetching keywords for: ${service.title}`);
console.log(`   Seed keywords: ${service.seedKeywords.join(', ')}`);
console.log(`   Location: USA (national)\n`);

try {
  // Step 1: Get seed keyword volumes
  // Step 2: Build expanded list by appending high-intent modifiers
  const intentModifiers = [
    'best', 'top', 'hire', 'agency', 'services', 'company',
    'near me', 'pricing', 'expert', 'professional',
  ];
  const expandedKeywords = [];
  for (const seed of service.seedKeywords) {
    expandedKeywords.push(seed);
    for (const mod of intentModifiers) {
      expandedKeywords.push(`${mod} ${seed}`);
      expandedKeywords.push(`${seed} ${mod}`);
    }
  }
  // Remove duplicates, limit to 100
  const uniqueKeywords = [...new Set(expandedKeywords)].slice(0, 100);
  console.log(`📋 Checking ${uniqueKeywords.length} keyword variations...`);

  const response = await callDataForSEO([{
    keywords: uniqueKeywords,
    location_code: USA_LOCATION_CODE,
    language_code: 'en',
  }]);

  if (response.status_code !== 20000) {
    throw new Error(`API Error ${response.status_code}: ${response.status_message}`);
  }

  const task = response.tasks?.[0];
  if (task?.status_code !== 20000) {
    throw new Error(`Task Error: ${task?.status_message}`);
  }

  // search_volume endpoint returns flat array of results (not nested in items)
  const items = task?.result || [];
  console.log(`📥 Raw keywords fetched: ${items.length}`);

  // Filter to high-intent only + extract volume data
  const filtered = items
    .filter(item => isHighIntent(item.keyword))
    .map(item => ({
      keyword: item.keyword,
      searchVolume: item.search_volume || item.keyword_info?.search_volume || 0,
      cpc: item.cpc || item.keyword_info?.cpc || 0,
      competition: item.competition || item.keyword_info?.competition || 0,
      service: service.id,
      serviceSlug: service.slug,
    }))
    .sort((a, b) => b.searchVolume - a.searchVolume);

  console.log(`✅ High-intent keywords: ${filtered.length}`);

  if (filtered.length === 0) {
    console.log('⚠️  No high-intent keywords found. Check seed keywords or filters.');
    process.exit(0);
  }

  // Show top 10
  console.log('\n📊 Top 10 high-intent keywords:');
  filtered.slice(0, 10).forEach((k, i) => {
    console.log(`   ${i + 1}. "${k.keyword}" — vol: ${k.searchVolume.toLocaleString()}, CPC: $${k.cpc}`);
  });

  // Save
  const output = {
    service: service.id,
    serviceSlug: service.slug,
    serviceTitle: service.title,
    fetchedAt: new Date().toISOString(),
    totalFetched: items.length,
    totalHighIntent: filtered.length,
    keywords: filtered,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\n💾 Saved to: data/seo-automation/raw/${service.slug}.json`);
  console.log('🎉 Done! Run 2-cluster-keywords.js next.\n');

} catch (err) {
  console.error('\n❌ Failed:', err.message);
  process.exit(1);
}
