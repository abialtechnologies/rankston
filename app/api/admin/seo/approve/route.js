/**
 * /api/admin/seo/approve
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { getSupabaseServerClient } from '../../../../../lib/supabase.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

export async function POST(request) {
  if (!checkAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, approved } = await request.json();
    const supabase = getSupabaseServerClient();

    const { error } = await supabase
      .from('seo_keywords')
      .update({ approved })
      .eq('id', id);

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true, approved });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
