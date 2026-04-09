/**
 * duplicate-content-audit.mjs
 * 
 * Calculates text similarity between random city page pairs
 * to verify content variation is sufficient (target: <60% similarity).
 * 
 * Usage: node --experimental-vm-modules scripts/duplicate-content-audit.mjs
 */
import buildCityContent from '../data/city-content-generator.js';
import locations from '../data/locations.json' with { type: 'json' };
import services from '../data/services.json' with { type: 'json' };

const SAMPLE_SIZE = 30;  // Number of random page pairs to compare

/* ── Jaccard similarity on word trigrams — quick and effective ── */
function trigrams(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i < words.length - 2; i++) {
    set.add(`${words[i]} ${words[i+1]} ${words[i+2]}`);
  }
  return set;
}

function similarity(textA, textB) {
  const a = trigrams(textA);
  const b = trigrams(textB);
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const t of a) {
    if (b.has(t)) intersection++;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/* ── Build text content for a city page ── */
function getPageText(serviceSlug, stateData, cityData) {
  const content = buildCityContent(serviceSlug, stateData, cityData);
  const parts = [
    content.heroH1,
    content.heroSub,
    content.introP1,
    content.introP2,
    content.introP3,
    content.stateContext,
    ...(content.faqs || []).map(f => `${f.q} ${f.a}`),
  ];
  return parts.filter(Boolean).join(' ');
}

/* ── Pick random city pages ── */
function randomPage() {
  const svc = services[Math.floor(Math.random() * services.length)];
  const stateData = locations[Math.floor(Math.random() * locations.length)];
  const cityData = stateData.cities[Math.floor(Math.random() * stateData.cities.length)];
  return { svc, stateData, cityData };
}

/* ── Run the audit ── */
console.log('═══════════════════════════════════════════════════════════');
console.log('  DUPLICATE CONTENT AUDIT');
console.log(`  Comparing ${SAMPLE_SIZE} random page pairs`);
console.log('═══════════════════════════════════════════════════════════\n');

const results = [];

// Compare pages from the SAME service (highest duplicate risk)
for (let i = 0; i < SAMPLE_SIZE; i++) {
  const a = randomPage();
  let b;
  // Pick a different city for the same service
  do {
    b = randomPage();
    b.svc = a.svc;
  } while (
    b.stateData.stateSlug === a.stateData.stateSlug && 
    b.cityData.citySlug === a.cityData.citySlug
  );

  const textA = getPageText(a.svc.slug, a.stateData, a.cityData);
  const textB = getPageText(b.svc.slug, b.stateData, b.cityData);
  const sim = similarity(textA, textB);
  
  results.push({
    pageA: `/${a.svc.slug}/${a.stateData.stateSlug}/${a.cityData.citySlug}`,
    pageB: `/${b.svc.slug}/${b.stateData.stateSlug}/${b.cityData.citySlug}`,
    similarity: sim,
    wordsA: textA.split(/\s+/).length,
    wordsB: textB.split(/\s+/).length,
  });
}

// Sort by similarity (highest first)
results.sort((a, b) => b.similarity - a.similarity);

// Report
let violations = 0;
for (const r of results) {
  const pct = (r.similarity * 100).toFixed(1);
  const status = r.similarity > 0.60 ? '❌ HIGH' : r.similarity > 0.40 ? '⚠️  MED' : '✅ LOW';
  if (r.similarity > 0.60) violations++;
  
  console.log(`${status} ${pct}% similar`);
  console.log(`   A: ${r.pageA} (${r.wordsA} words)`);
  console.log(`   B: ${r.pageB} (${r.wordsB} words)\n`);
}

// Summary
const avgSim = results.reduce((s, r) => s + r.similarity, 0) / results.length;
const maxSim = results[0]?.similarity || 0;
const minSim = results[results.length - 1]?.similarity || 0;

console.log('═══════════════════════════════════════════════════════════');
console.log('  SUMMARY');
console.log('═══════════════════════════════════════════════════════════');
console.log(`  Pairs compared:    ${SAMPLE_SIZE}`);
console.log(`  Average similarity: ${(avgSim * 100).toFixed(1)}%`);
console.log(`  Max similarity:     ${(maxSim * 100).toFixed(1)}%`);
console.log(`  Min similarity:     ${(minSim * 100).toFixed(1)}%`);
console.log(`  Violations (>60%):  ${violations}`);
console.log();

if (violations > 0) {
  console.log('⚠️  Some page pairs exceed 60% similarity.');
  console.log('   Consider adding more body paragraph variants or state-specific content.\n');
} else {
  console.log('✅ All sampled page pairs have acceptable content variation.');
  console.log('   No duplicate content risk detected.\n');
}
