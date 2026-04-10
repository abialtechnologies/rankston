/**
 * /api/admin/seo/run — Run Full Automated SEO Pipeline
 *
 * POST: Runs entire pipeline for all services OR specific service
 * Body: { service?: string } — omit for all services
 *
 * Pipeline:
 * 1. Fetch base keywords from DataForSEO (cached if already done)
 * 2. Filter high-intent only
 * 3. Expand with 50 states + cities (FREE)
 * 4. Score and store
 *
 * Cost: ~$0.05 per NEW service, $0 for cached/expansion
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { fetchServiceKeywords, expandWithLocations, runFullPipeline, HIGH_INTENT_SEEDS } from '../../../../../lib/seo-engine.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { service } = await request.json().catch(() => ({}));

    // Run for specific service or all
    if (service) {
      if (!HIGH_INTENT_SEEDS[service]) {
        return NextResponse.json({
          error: `Invalid service: ${service}`,
          validServices: Object.keys(HIGH_INTENT_SEEDS),
        }, { status: 400 });
      }

      const fetchResult = await fetchServiceKeywords(service);
      let expandResult = { expanded: 0 };

      if (!fetchResult.cached) {
        expandResult = await expandWithLocations(service);
      }

      return NextResponse.json({
        message: fetchResult.cached
          ? `"${service}" already cached — no API credit used`
          : `Fetched ${fetchResult.keywords} keywords + expanded ${expandResult.expanded} location combos`,
        ...fetchResult,
        ...expandResult,
      });
    }

    // Run full pipeline for ALL services
    const results = await runFullPipeline();

    return NextResponse.json({
      message: `Pipeline complete! ${results.totalKeywords} base + ${results.totalExpanded} location combos`,
      totalCost: `$${results.totalCost.toFixed(2)}`,
      ...results,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
