import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf-8')
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => {
      const parts = line.split('=');
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
      return [key, val];
    })
);

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

function makeSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function fetchSupabase(rpc, method = 'GET', body = null) {
  const options = {
    method,
    headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}`, 'Content-Type': 'application/json' }
  };
  if (body) options.body = JSON.stringify(body);
  const res = await fetch(`${supabaseUrl}/rest/v1/${rpc}`, options);
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

async function run() {
  console.log("🚀 STARTING PHASE 1 TEST (5 KEYWORDS) 🚀");

  console.log("Fetching keywords...");
  const keywords = await fetchSupabase("seo_keywords?tier=eq.A&approved=eq.false&limit=5&select=*");
  
  console.log(`Found ${keywords.length} keywords. Auto-approving...`);
  for (let kw of keywords) {
      await fetchSupabase(`seo_keywords?id=eq.${kw.id}`, 'PATCH', { approved: true });
  }

  let success = 0;
  
  for (let kw of keywords) {
    console.log(`\nGenerating for: "${kw.keyword}" (${kw.location})`);
    
    // Check if generated already to avoid constraint issues during tests
    const slug = makeSlug(kw.keyword);
    const existing = await fetchSupabase(`seo_pages?slug=eq.${slug}&select=id`);
    if (existing && existing.length > 0) { 
        console.log(`Already exists. Skipping.`); 
        continue; 
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const prompt = `
  You are an elite, conversion-focused SEO copywriter.
  Your task is to write a high-intent, premium landing page for a digital agency called "Rankston".
  
  TARGET KEYWORD: "${kw.keyword}"
  LOCATION FOCUS: "${kw.location || 'United States'}"
  SERVICE CATEGORY: "${kw.service}"
  INTENT: "${kw.intent}"
  
  MANDATORY RULES:
  1. STRICT ANTI-DUPLICATION: Do NOT use standard opening templates like "Welcome to Rankston" or "Are you looking for...". Dive straight into an aggressive, unique, highly-semantic hook. 
  2. DEEP LOCALIZATION: You MUST mention specific geographical elements, business climate traits, or local realities for ${kw.location || 'United States'}. Generic "We help businesses in ${kw.location}" is a failure.
  3. The content must heavily incorporate exact data, benefits, and strong CTAs.
  4. Strict adherence to JSON format. No markdown blocks outside JSON, no \`\`\`json wrappers. Just output raw, valid JSON.
  
  JSON SCHEMA REQUIRED:
  {
    "h1": "A highly compelling H1 focused on the exact keyword.",
    "meta_title": "Max 60 chars meta title ending in | Rankston",
    "meta_description": "Max 160 chars action-driven meta description.",
    "intro": "1-2 short, punchy paragraphs explaining exactly how Rankston solves their problem in the location. Must include the exact keyword organically.",
    "services_overview": "3-4 concise paragraphs detailing the specific components of the service. Format with HTML tags like <p>, <strong>, and <ul> if needed. Do NOT use markdown. Base it on professional ${kw.service}.",
    "benefits": "HTML formatted section highlighting 3-4 distinct ROI-driven benefits. Use <ul> and <li>.",
    "process": "HTML formatted section outlining a 3-step or 4-step process. E.g., '1. Audit, 2. Strategy, 3. Execution, 4. Scaling'. Use <h3> or <strong>.",
    "local_context": "HTML formatted section detailing why Rankston is the perfect fit for ${kw.location}. Mention local dynamics, business environment, or commitment to local clients.",
    "faqs": [
      { "q": "Question 1", "a": "Answer 1" },
      { "q": "Question 2", "a": "Answer 2" }
    ]
  }
  `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text().replace(/^```json/i, '').replace(/^```/, '').replace(/```$/i, '').trim();
      const generatedData = JSON.parse(text);

      if (!generatedData.h1 || !generatedData.meta_title || !generatedData.intro) {
          throw new Error("Validation failure: Schema missing");
      }
      if (generatedData.intro.length < 100) throw new Error("Validation failure: Intro too short.");

      console.log(`✓ Validation Passed. Inserting slug /solutions/${slug}...`);
      
      await fetchSupabase(`seo_pages`, 'POST', {
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

      await fetchSupabase(`seo_logs`, 'POST', { keyword_id: kw.id, action: 'GENERATED_SUCCESS', details: slug });
      
      console.log(`✅ Output published & logged.`);
      success++;
      
    } catch (e) {
      console.error("❌ Failed and Dropped (Real system prevents save):", e.message);
      await fetchSupabase(`seo_logs`, 'POST', { keyword_id: kw.id, action: 'GENERATED_FAILED', details: e.message });
    }
    
    await new Promise(r => setTimeout(r, 6000));
  }
  
  console.log(`\n🎉 PHASE 1 TEST FINISHED: ${success}/5 Output Verified. 🎉`);
}
run();
