/**
 * /api/admin/seo/keywords — List, Filter, Sort, Export Keywords
 *
 * GET: List keywords with rich filtering
 * Params: service, location, intent, page_type, min_vol, max_kd, sort, order, page, limit, export
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { getSupabaseServerClient } from '../../../../../lib/supabase.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const service = searchParams.get('service');
  const location = searchParams.get('location');
  const intent = searchParams.get('intent');
  const pageType = searchParams.get('page_type');
  const minVol = parseInt(searchParams.get('min_vol') || '0', 10);
  const maxKd = parseFloat(searchParams.get('max_kd') || '100');
  const search = searchParams.get('search') || '';
  const sortBy = searchParams.get('sort') || 'opportunity_score';
  const order = searchParams.get('order') || 'desc';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const isExport = searchParams.get('export') === 'csv';

  const supabase = getSupabaseServerClient();

  // Build query
  let query = supabase.from('seo_keywords').select('*', { count: 'exact' });

  if (service) query = query.eq('service', service);
  if (location) query = query.eq('location', location);
  if (intent) query = query.eq('intent', intent);
  if (pageType) query = query.eq('page_type', pageType);
  if (minVol > 0) query = query.gte('search_volume', minVol);
  if (maxKd < 100) query = query.lte('keyword_difficulty', maxKd);
  if (search) query = query.ilike('keyword', `%${search}%`);

  // Sort
  const ascending = order === 'asc';
  query = query.order(sortBy, { ascending });

  // Export all or paginate
  if (isExport) {
    query = query.limit(10000);
  } else {
    const from = (page - 1) * limit;
    query = query.range(from, from + limit - 1);
  }

  const { data, count, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // CSV Export
  if (isExport && data) {
    const headers = ['keyword', 'service', 'location', 'search_volume', 'keyword_difficulty', 'cpc', 'intent', 'opportunity_score', 'page_type'];
    const csv = [
      headers.join(','),
      ...data.map((row) => headers.map((h) => `"${String(row[h] || '').replace(/"/g, '""')}"`).join(',')),
    ].join('\n');

    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="seo-keywords-${service || 'all'}.csv"`,
      },
    });
  }

  // Get stats
  const stats = {
    total: count || 0,
    avgVolume: data?.length ? Math.round(data.reduce((s, k) => s + k.search_volume, 0) / data.length) : 0,
    avgDifficulty: data?.length ? Math.round(data.reduce((s, k) => s + k.keyword_difficulty, 0) / data.length * 10) / 10 : 0,
    intents: {
      transactional: data?.filter((k) => k.intent === 'transactional').length || 0,
      commercial: data?.filter((k) => k.intent === 'commercial').length || 0,
      informational: data?.filter((k) => k.intent === 'informational').length || 0,
    },
  };

  return NextResponse.json({
    keywords: data || [],
    stats,
    total: count || 0,
    page,
    totalPages: Math.ceil((count || 0) / limit),
  });
}
