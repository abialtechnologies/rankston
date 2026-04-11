import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';
import { generateSeoPageContent } from './lib/ai-generator.js';

// Load env vars from .env.local
loadEnvConfig(process.cwd());

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function makeSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function runTest() {
  console.log('--- STARTING PHASE 1 TEST (5 KEYWORDS) ---');

  // 1. Get 5 Tier A keywords
  const { data: keywords, error: fetchErr } = await supabase
    .from('seo_keywords')
    .select('*')
    .eq('tier', 'A')
    .limit(5);

  if (fetchErr) return console.error('Fetch error:', fetchErr);
  if (!keywords || keywords.length === 0) return console.log('No Tier A keywords found.');

  console.log(`Found ${keywords.length} keywords. Approving...`);

  const kwIds = keywords.map(k => k.id);
  await supabase.from('seo_keywords').update({ approved: true }).in('id', kwIds);

  let successCount = 0;

  for (const kw of keywords) {
    console.log(`\nGenerating for: "${kw.keyword}" (${kw.location})`);
    
    const slug = makeSlug(kw.keyword);
    
    // Check if generated already to avoid constraint issues during tests
    const { data: exist } = await supabase.from('seo_pages').select('id').eq('slug', slug).single();
    if (exist) { 
        console.log(`Already exists. Generating next.`); 
        continue; 
    }

    try {
      const generatedData = await generateSeoPageContent(kw.keyword, kw.location || 'United States', kw.service, kw.intent);
      
      const { error: insertErr } = await supabase.from('seo_pages').insert({
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
        published: true,
        phase: 1
      });

      if (insertErr) throw new Error("DB Insert failed: " + insertErr.message);

      await supabase.from('seo_logs').insert({ keyword_id: kw.id, action: 'GENERATED_SUCCESS', details: slug });
      console.log(`✅ Success: ${slug}`);
      successCount++;
    } catch (aiError) {
      console.error(`❌ Validation Failed (Dropped & Retried in real scenario):`, aiError.message);
      await supabase.from('seo_logs').insert({ keyword_id: kw.id, action: 'GENERATED_FAILED', details: aiError.message });
    }
    
    // Rate limit gracefully
    await new Promise(r => setTimeout(r, 6000));
  }

  console.log(`\n--- PHASE 1 COMPLETE: ${successCount}/5 Generated Successfully ---`);
}

runTest();
