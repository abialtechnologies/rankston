/**
 * lib/ai-generator.js — Advanced Content Generator
 * Creates strictly structured, highly unique, anti-duplicate JSON pages.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini (assuming standard ENV var layout)
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function generateSeoPageContent(keyword, location, serviceName, intentType) {
  if (!genAI) throw new Error('GEMINI_API_KEY is not defined in environment variables.');

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' }); // Using Pro for highest quality

  const prompt = `
  You are an elite, conversion-focused SEO copywriter.
  Your task is to write a high-intent, premium landing page for a digital agency called "Rankston".
  
  TARGET KEYWORD: "${keyword}"
  LOCATION FOCUS: "${location}"
  SERVICE CATEGORY: "${serviceName}"
  INTENT: "${intentType}"
  
  MANDATORY RULES:
  1. DO NOT use generic templates. Every sentence must sound unique, premium, and humanized.
  2. The content must heavily incorporate exact data, benefits, and strong CTAs.
  3. Strict adherence to JSON format. No markdown blocks outside JSON, no \`\`\`json wrappers. Just output raw, valid JSON.
  
  JSON SCHEMA REQUIRED:
  {
    "h1": "A highly compelling H1 focused on the exact keyword.",
    "meta_title": "Max 60 chars meta title ending in | Rankston",
    "meta_description": "Max 160 chars action-driven meta description.",
    "intro": "1-2 short, punchy paragraphs explaining exactly how Rankston solves their problem in the location. Must include the exact keyword organically.",
    "services_overview": "3-4 concise paragraphs detailing the specific components of the service. Format with HTML tags like <p>, <strong>, and <ul> if needed. Do NOT use markdown. Base it on professional ${serviceName}.",
    "benefits": "HTML formatted section highlighting 3-4 distinct ROI-driven benefits. Use <ul> and <li>.",
    "process": "HTML formatted section outlining a 3-step or 4-step process. E.g., '1. Audit, 2. Strategy, 3. Execution, 4. Scaling'. Use <h3> or <strong>.",
    "local_context": "HTML formatted section detailing why Rankston is the perfect fit for ${location}. Mention local dynamics, business environment, or commitment to local clients.",
    "faqs": [
      { "q": "Question 1", "a": "Answer 1" },
      { "q": "Question 2", "a": "Answer 2" },
      { "q": "Question 3", "a": "Answer 3" }
    ]
  }
  
  Take a deep breath and generate the ultimate converting landing page data for Rankston.
  Return STRICTLY ONLY the raw JSON object. NO markdown fences.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();
  
  // Cleanup potential markdown wrappers
  text = text.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/i, '').trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse AI response as JSON:', text.substring(0, 500));
    throw new Error('AI Generation failed to return valid JSON format.');
  }
}
