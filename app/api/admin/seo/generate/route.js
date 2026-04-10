/**
 * /api/admin/seo/generate — Content Generation Agent
 *
 * Takes an approved keyword, runs Gemini to generate structured JSON,
 * and saves to the `seo_pages` table for dynamic rendering.
 */

import { NextResponse } from 'next/server';
import { verifyToken } from '../../auth/route.js';
import { getSupabaseServerClient } from '../../../../../lib/supabase.js';
import { generateSeoPageContent } from '../../../../../lib/ai-generator.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

// Convert a keyword string to a URL-friendly slug
function makeSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export async function POST(request) {
  if (!checkAuth(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { keyword_id } = await request.json();
    if (!keyword_id) return NextResponse.json({ error: 'Missing keyword_id' }, { status: 400 });

    const supabase = getSupabaseServerClient();

    // 1. Fetch Keyword Details
    const { data: kw, error: kwErr } = await supabase
      .from('seo_keywords')
      .select('*, seo_clusters(name)')
      .eq('id', keyword_id)
      .single();

    if (kwErr || !kw) return NextResponse.json({ error: 'Keyword not found' }, { status: 404 });
    if (!kw.approved) return NextResponse.json({ error: 'Keyword must be physically approved first.' }, { status: 403 });

    // 2. Prevent Dupes
    const slug = makeSlug(kw.keyword);
    const { data: existingPage } = await supabase
      .from('seo_pages')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingPage) {
      return NextResponse.json({ error: 'Page already generated for this slug.', slug }, { status: 409 });
    }

    // 3. Generate AI Content
    console.log(`Sending to Gemini: ${kw.keyword} in ${kw.location} for ${kw.service}`);
    const generatedData = await generateSeoPageContent(kw.keyword, kw.location || 'United States', kw.service, kw.intent);

    // 4. Save to Database
    const { error: insertErr, data: insertedPage } = await supabase
      .from('seo_pages')
      .insert({
        cluster_id: kw.cluster_id,
        keyword_id: kw.id,
        keyword: kw.keyword,
        slug,
        h1: generatedData.h1,
        intro: generatedData.intro,
        services_overview: generatedData.services_overview,
        benefits: generatedData.benefits,
        process: generatedData.process,
        local_context: generatedData.local_context,
        faqs: generatedData.faqs,
        meta_title: generatedData.meta_title,
        meta_description: generatedData.meta_description,
        published: true, // auto-publish for Phase 1
        phase: 1
      })
      .select()
      .single();

    if (insertErr) throw new Error(insertErr.message);

    return NextResponse.json({
      message: 'Page successfully generated and published.',
      slug,
      page_id: insertedPage.id
    });
  } catch (err) {
    console.error('Generation Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
