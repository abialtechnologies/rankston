/**
 * scripts/seo-automation/config.js
 * Central config: services, seed keywords, US states/cities
 */

export const DATAFORSEO_AUTH = Buffer.from(
  'jhjyy@keblo.xyz:2a41ff29a396c1f0'
).toString('base64');

export const HIGH_INTENT_PATTERNS = [
  'hire', 'best', 'top', 'services', 'agency',
  'pricing', 'near me', 'company', 'expert',
  'professional', 'affordable', 'local', 'consultant',
];

export const LOW_INTENT_PATTERNS = [
  'how to', 'what is', 'why is', 'free', 'diy',
  'tutorial', 'meaning', 'definition', 'course', 'learn',
  'vs', 'difference', 'example', 'template',
];

export const SERVICES = [
  {
    id: 'seo-services',
    title: 'SEO Services',
    slug: 'seo-services',
    seedKeywords: ['seo agency', 'seo services', 'seo company', 'search engine optimization'],
    accentColor: '#10B981',
    icon: '🔍',
    shortDesc: 'Rank higher on Google and AI search engines with proven SEO strategies.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    seedKeywords: ['web development company', 'web design agency', 'website development services', 'web developer'],
    accentColor: '#3B82F6',
    icon: '💻',
    shortDesc: 'Fast, conversion-optimized websites built for local businesses and enterprises.',
  },
  {
    id: 'ppc-advertising',
    title: 'PPC Advertising',
    slug: 'ppc-advertising',
    seedKeywords: ['ppc agency', 'google ads management', 'ppc management services', 'pay per click agency'],
    accentColor: '#06B6D4',
    icon: '📈',
    shortDesc: 'ROI-focused Google Ads and Meta Ads management that maximizes your ad spend.',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    seedKeywords: ['social media agency', 'social media marketing services', 'smm agency', 'social media management'],
    accentColor: '#EC4899',
    icon: '📲',
    shortDesc: 'Grow your brand and audience with strategic social media campaigns.',
  },
  {
    id: 'gmb-optimization',
    title: 'GMB Optimization',
    slug: 'gmb-optimization',
    seedKeywords: ['google business profile expert', 'gmb optimization services', 'google my business agency', 'local seo services'],
    accentColor: '#22C55E',
    icon: '📍',
    shortDesc: 'Dominate Google Maps and local search with expert GMB optimization.',
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    slug: 'graphic-designing',
    seedKeywords: ['graphic design agency', 'graphic design services', 'logo design company', 'brand design agency'],
    accentColor: '#8B5CF6',
    icon: '🎨',
    shortDesc: 'Premium graphic design that builds brand identity and drives engagement.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    slug: 'video-editing',
    seedKeywords: ['video editing services', 'video production company', 'video editing agency', 'commercial video production'],
    accentColor: '#F97316',
    icon: '🎬',
    shortDesc: 'Professional video editing for local ads, YouTube, and brand campaigns.',
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    slug: 'content-marketing',
    seedKeywords: ['content marketing agency', 'content writing services', 'content marketing services', 'blog writing agency'],
    accentColor: '#F59E0B',
    icon: '✍️',
    shortDesc: 'SEO-driven content that attracts customers and builds brand authority.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    slug: 'ai-automation',
    seedKeywords: ['ai automation agency', 'ai marketing services', 'marketing automation company', 'ai automation services'],
    accentColor: '#6366F1',
    icon: '🤖',
    shortDesc: 'Automate leads, follow-ups, and workflows with cutting-edge AI tools.',
  },
  {
    id: 'chatbot-development',
    title: 'Chatbot Development',
    slug: 'chatbot-development',
    seedKeywords: ['chatbot development company', 'ai chatbot agency', 'chatbot services', 'chatbot development services'],
    accentColor: '#14B8A6',
    icon: '💬',
    shortDesc: 'Custom AI chatbots that capture leads and serve customers 24/7.',
  },
];

// Top 25 US states/cities targeted
export const US_LOCATIONS = [
  { name: 'California', slug: 'california', code: 'CA', locationCode: 21137 },
  { name: 'Texas', slug: 'texas', code: 'TX', locationCode: 21176 },
  { name: 'Florida', slug: 'florida', code: 'FL', locationCode: 21142 },
  { name: 'New York', slug: 'new-york', code: 'NY', locationCode: 21167 },
  { name: 'Illinois', slug: 'illinois', code: 'IL', locationCode: 21146 },
  { name: 'Pennsylvania', slug: 'pennsylvania', code: 'PA', locationCode: 21172 },
  { name: 'Ohio', slug: 'ohio', code: 'OH', locationCode: 21169 },
  { name: 'Georgia', slug: 'georgia', code: 'GA', locationCode: 21143 },
  { name: 'North Carolina', slug: 'north-carolina', code: 'NC', locationCode: 21166 },
  { name: 'Michigan', slug: 'michigan', code: 'MI', locationCode: 21157 },
  { name: 'New Jersey', slug: 'new-jersey', code: 'NJ', locationCode: 21164 },
  { name: 'Virginia', slug: 'virginia', code: 'VA', locationCode: 21182 },
  { name: 'Washington', slug: 'washington', code: 'WA', locationCode: 21183 },
  { name: 'Arizona', slug: 'arizona', code: 'AZ', locationCode: 21132 },
  { name: 'Tennessee', slug: 'tennessee', code: 'TN', locationCode: 21175 },
  { name: 'Massachusetts', slug: 'massachusetts', code: 'MA', locationCode: 21156 },
  { name: 'Indiana', slug: 'indiana', code: 'IN', locationCode: 21147 },
  { name: 'Missouri', slug: 'missouri', code: 'MO', locationCode: 21160 },
  { name: 'Maryland', slug: 'maryland', code: 'MD', locationCode: 21155 },
  { name: 'Wisconsin', slug: 'wisconsin', code: 'WI', locationCode: 21186 },
  { name: 'Colorado', slug: 'colorado', code: 'CO', locationCode: 21136 },
  { name: 'Minnesota', slug: 'minnesota', code: 'MN', locationCode: 21158 },
  { name: 'South Carolina', slug: 'south-carolina', code: 'SC', locationCode: 21174 },
  { name: 'Oregon', slug: 'oregon', code: 'OR', locationCode: 21170 },
  { name: 'Nevada', slug: 'nevada', code: 'NV', locationCode: 21163 },
];

// USA national (for non-location based keywords)
export const USA_LOCATION_CODE = 2840;
