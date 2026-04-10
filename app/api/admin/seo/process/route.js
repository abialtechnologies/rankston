/**
 * /api/admin/seo/process — Run Quality Control Pipeline
 *
 * POST: Processes all stored keywords
 * - Removes junk/dupes
 * - Scores for lead potential
 * - Assigns Tier A/B/C
 * - Smart clustering
 *
 * Cost: $0 — no external API calls
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { processKeywords } from '../../../../../lib/keyword-processor.js';

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
    const results = await processKeywords();

    return NextResponse.json({
      message: 'Quality pipeline complete',
      ...results,
      cost: '$0.00 (local processing)',
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
