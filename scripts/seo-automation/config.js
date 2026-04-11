/**
 * scripts/seo-automation/config.js
 * Central config: services, seed keywords, multi-country support
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
    shortDesc: 'Dominate Google Maps and local search with expert GMB optimisation.',
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

// ─────────────────────────────────────────────
// MULTI-COUNTRY CONFIG (scalable for AU, CA etc.)
// ─────────────────────────────────────────────

export const COUNTRIES = {
  usa: {
    code: 'usa',
    name: 'United States',
    locationCode: 2840,        // DataForSEO national code
    language: 'en',
    currency: 'USD',
    spelling: 'en-US',
    filePrefix: '',            // USA has no prefix (legacy)
    urlSuffix: '',             // /seo-services/usa-pricing
    nationalSlug: 'usa',
    cities: [
      { name: 'New York',      slug: 'new-york',      locationCode: 1023191 },
      { name: 'Los Angeles',   slug: 'los-angeles',   locationCode: 1014221 },
      { name: 'Chicago',       slug: 'chicago',       locationCode: 1016367 },
      { name: 'Houston',       slug: 'houston',       locationCode: 1014220 },
      { name: 'Phoenix',       slug: 'phoenix',       locationCode: 1022744 },
      { name: 'Philadelphia',  slug: 'philadelphia',  locationCode: 1022942 },
      { name: 'San Antonio',   slug: 'san-antonio',   locationCode: 1014223 },
      { name: 'Dallas',        slug: 'dallas',        locationCode: 1014218 },
      { name: 'Austin',        slug: 'austin',        locationCode: 1013942 },
      { name: 'Jacksonville',  slug: 'jacksonville',  locationCode: 1012093 },
    ],
    intentModifiers: [
      'best', 'top', 'hire', 'agency', 'services', 'company',
      'near me', 'pricing', 'expert', 'professional', 'affordable',
    ],
    clusterLabels: {
      national: 'United States',
      bestTop:  'usa-best-top',
      nearMe:   'usa-near-me',
      pricing:  'usa-pricing',
      hire:     'usa-hire-expert',
      agency:   'usa-agency-services',
      other:    'usa-other',
    },
  },

  uk: {
    code: 'uk',
    name: 'United Kingdom',
    locationCode: 2826,         // DataForSEO UK national code
    language: 'en',
    currency: 'GBP',
    spelling: 'en-GB',
    filePrefix: 'uk--',         // Files: uk--seo-services--london.json
    urlSuffix: '',
    nationalSlug: 'uk',
    cities: [
      { name: 'London',        slug: 'london',        locationCode: 1006886 },
      { name: 'Manchester',    slug: 'manchester',    locationCode: 1006875 },
      { name: 'Birmingham',    slug: 'birmingham',    locationCode: 1006862 },
      { name: 'Leeds',         slug: 'leeds',         locationCode: 1006874 },
      { name: 'Liverpool',     slug: 'liverpool',     locationCode: 1006875 },
      { name: 'Sheffield',     slug: 'sheffield',     locationCode: 1006888 },
      { name: 'Bristol',       slug: 'bristol',       locationCode: 1006863 },
      { name: 'Edinburgh',     slug: 'edinburgh',     locationCode: 1006869 },
      { name: 'Glasgow',       slug: 'glasgow',       locationCode: 1006871 },
      { name: 'Cardiff',       slug: 'cardiff',       locationCode: 1006864 },
    ],
    intentModifiers: [
      'best', 'top', 'hire', 'agency', 'services', 'company',
      'near me', 'pricing', 'expert', 'professional', 'affordable', 'uk',
    ],
    clusterLabels: {
      national: 'United Kingdom',
      bestTop:  'uk-best-top',
      nearMe:   'uk-near-me',
      pricing:  'uk-pricing',
      hire:     'uk-hire-expert',
      agency:   'uk-agency-services',
      other:    'uk-other',
    },
    // UK spelling replacements (applied to content)
    spellingMap: {
      'optimize': 'optimise',
      'optimization': 'optimisation',
      'organize': 'organise',
      'organization': 'organisation',
      'color': 'colour',
      'favor': 'favour',
      'favorite': 'favourite',
      'analyze': 'analyse',
      'catalog': 'catalogue',
      'center': 'centre',
      'defense': 'defence',
      'license': 'licence',
      'program': 'programme',
      'recognize': 'recognise',
      'customize': 'customise',
      'customization': 'customisation',
      'monetize': 'monetise',
      'monetization': 'monetisation',
    },
  },

  // Future markets — uncomment to expand
  // au: {
  //   code: 'au',
  //   name: 'Australia',
  //   locationCode: 2036,
  //   filePrefix: 'au--',
  //   nationalSlug: 'australia',
  //   cities: [
  //     { name: 'Sydney',      slug: 'sydney',      locationCode: 1000567 },
  //     { name: 'Melbourne',   slug: 'melbourne',   locationCode: 1000564 },
  //   ],
  // },
  // ca: {
  //   code: 'ca',
  //   name: 'Canada',
  //   locationCode: 2124,
  //   filePrefix: 'ca--',
  //   ...
  // },
};

// ── Legacy USA exports (backward compat) ──────
export const US_LOCATIONS = [
  { name: 'California',     slug: 'california',     code: 'CA', locationCode: 21137 },
  { name: 'Texas',          slug: 'texas',           code: 'TX', locationCode: 21176 },
  { name: 'Florida',        slug: 'florida',         code: 'FL', locationCode: 21142 },
  { name: 'New York',       slug: 'new-york',        code: 'NY', locationCode: 21167 },
  { name: 'Illinois',       slug: 'illinois',        code: 'IL', locationCode: 21146 },
  { name: 'Pennsylvania',   slug: 'pennsylvania',    code: 'PA', locationCode: 21172 },
  { name: 'Ohio',           slug: 'ohio',            code: 'OH', locationCode: 21169 },
  { name: 'Georgia',        slug: 'georgia',         code: 'GA', locationCode: 21143 },
  { name: 'North Carolina', slug: 'north-carolina',  code: 'NC', locationCode: 21166 },
  { name: 'Michigan',       slug: 'michigan',        code: 'MI', locationCode: 21157 },
];

export const USA_LOCATION_CODE = 2840;
