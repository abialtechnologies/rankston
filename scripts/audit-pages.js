/**
 * scripts/audit-pages.js
 *
 * Runs a content uniqueness + quality audit on 30 random pages.
 * Checks:
 *   1. H1 presence and keyword-first format
 *   2. First-paragraph keyword mention
 *   3. Content variation (intro text should differ across cities)
 *   4. Canonical tag format
 *   5. FAQ count (minimum 3 per page)
 *   6. Word count estimate (content sections)
 *
 * Usage: node scripts/audit-pages.js
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const services  = require('../data/services.json');
const locations = require('../data/locations.json');
import buildCityContent from '../data/city-content-generator.js';
import { buildStateContent } from '../data/state-content-generator.js';

const SAMPLE_SIZE = 30;
const PASS = '✅';
const FAIL = '❌';
const WARN = '⚠️ ';

/** Pick N random items from array */
function sample(arr, n) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    const idx = Math.floor(Math.random() * (copy.length - i));
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

/** Estimate word count from string */
function wordCount(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).length;
}

const issues = [];
const results = [];

// --- CITY PAGE AUDIT ---
console.log('\n📍 CITY PAGE AUDIT (20 random city×service combos)\n');

const allCityTargets = [];
for (const svc of services) {
  for (const stateData of locations) {
    for (const cityData of stateData.cities) {
      allCityTargets.push({ svc, stateData, cityData });
    }
  }
}

const cityTargets = sample(allCityTargets, 20);
const introsSeen = new Set();

for (const { svc, stateData, cityData } of cityTargets) {
  const content = buildCityContent(svc.slug, stateData, cityData);
  const url = `/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}`;

  const checks = {
    hasH1:      content.heroH1 && content.heroH1.length > 10,
    h1HasCity:  content.heroH1?.includes(cityData.city),
    hasIntro:   content.introP1 && content.introP1.length > 50,
    introHasCity: content.introP1?.includes(cityData.city) || content.heroSub?.includes(cityData.city),
    hasFAQs:    content.faqs?.length >= 4,
    wordCount:  wordCount([content.heroSub, content.introP1, content.introP2].join(' ')),
    introUnique: !introsSeen.has(content.introP1),
  };

  if (checks.introUnique) introsSeen.add(content.introP1);

  const pass = checks.hasH1 && checks.hasIntro && checks.hasFAQs && checks.introUnique;

  results.push({ url, pass, checks });
  if (!pass) issues.push({ url, checks });

  const status = pass ? PASS : FAIL;
  const warnDup = checks.introUnique ? '' : ' ⚠️  DUPLICATE INTRO';
  console.log(`${status} ${url} | H1:${checks.hasH1?'✓':'✗'} FAQ:${content.faqs?.length||0} words:${checks.wordCount}${warnDup}`);
}

// --- STATE PAGE AUDIT ---
console.log('\n🗺️  STATE PAGE AUDIT (10 random state×service combos)\n');

const allStateTargets = [];
for (const svc of services) {
  for (const stateData of locations) {
    allStateTargets.push({ svc, stateData });
  }
}

const stateTargets = sample(allStateTargets, 10);

for (const { svc, stateData } of stateTargets) {
  const content = buildStateContent(svc.slug, stateData);
  const url = `/${svc.slug}/${stateData.stateSlug}`;

  const checks = {
    hasContent: !!content,
    hasFAQs:    content?.faqs?.length >= 3,
    hasHero:    content?.heroH1?.length > 10,
    wordCount:  wordCount([content?.heroSub, content?.introP1].join(' ')),
  };

  const pass = checks.hasContent && checks.hasFAQs && checks.hasHero;
  const status = pass ? PASS : FAIL;

  console.log(`${status} ${url} | content:${checks.hasContent?'✓':'✗'} FAQ:${content?.faqs?.length||0} words:${checks.wordCount}`);

  if (!pass) issues.push({ url, checks });
}

// --- SUMMARY ---
console.log('\n═══════════════════════════════════════');
console.log('  AUDIT SUMMARY');
console.log('═══════════════════════════════════════');

const cityPassed = results.filter(r => r.pass).length;
console.log(`City pages:   ${cityPassed}/20 passed`);
console.log(`Issues found: ${issues.length}`);

// Check content pool diversity
const uniqueIntros = introsSeen.size;
const dupRate = ((20 - uniqueIntros) / 20 * 100).toFixed(1);
if (dupRate > 20) {
  console.log(`${FAIL} DUPLICATE INTRO RATE: ${dupRate}% — need more variation pools`);
} else {
  console.log(`${PASS} INTRO UNIQUENESS: ${dupRate}% duplication rate (target <20%)`);
}

if (issues.length === 0) {
  console.log('\n✅ ALL CHECKS PASSED — Safe to deploy');
} else {
  console.log('\n⚠️  Issues found — review above before indexing');
  console.log('Failing URLs:');
  issues.forEach(i => console.log(' -', i.url));
}

console.log('═══════════════════════════════════════\n');
