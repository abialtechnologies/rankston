/**
 * Niche Content Generator
 * Generates unique content for each service × niche combination
 * 12 niches × 10 services = 120 programmatic pages
 */

export const NICHES = [
  { slug: 'dentists',      label: 'Dentists',             icon: '🦷', industry: 'dental' },
  { slug: 'lawyers',       label: 'Law Firms',             icon: '⚖️', industry: 'legal' },
  { slug: 'real-estate',   label: 'Real Estate Agents',    icon: '🏠', industry: 'real estate' },
  { slug: 'restaurants',   label: 'Restaurants',           icon: '🍽️', industry: 'restaurant' },
  { slug: 'contractors',   label: 'Contractors & HVAC',    icon: '🔨', industry: 'contractor' },
  { slug: 'ecommerce',     label: 'eCommerce Stores',      icon: '🛒', industry: 'ecommerce' },
  { slug: 'startups',      label: 'Startups',              icon: '🚀', industry: 'startup' },
  { slug: 'gyms',          label: 'Gyms & Fitness',        icon: '🏋️', industry: 'fitness' },
  { slug: 'salons',        label: 'Salons & Beauty',       icon: '💇', industry: 'beauty' },
  { slug: 'auto-repair',   label: 'Auto Repair Shops',     icon: '🚗', industry: 'automotive' },
  { slug: 'accountants',   label: 'Accountants & CPAs',    icon: '📊', industry: 'accounting' },
  { slug: 'healthcare',    label: 'Healthcare & Medical',  icon: '🏥', industry: 'healthcare' },
];

const NICHE_PAIN_POINTS = {
  dentists: [
    'New patient acquisition is expensive — most dental practices pay $150–$400 per new patient through ads alone',
    'Patients search "dentist near me" and pick from the top 3 Google Maps results — if you\'re not there, you\'re invisible',
    'Reviews heavily influence dental decisions — 94% of patients check Google reviews before booking',
    'Dental practices lose 20–30% of patients annually to attrition, making consistent lead generation critical',
    'Competing with corporate dental chains that have massive marketing budgets',
  ],
  lawyers: [
    'Legal keyword CPCs are among the highest on Google — some keywords cost $100–$500 per click',
    'Trust is critical — potential clients research extensively before hiring an attorney',
    'Local competition is fierce — especially for personal injury, family law, and criminal defense',
    'Referrals alone are no longer sufficient for sustainable growth in a digital-first market',
    'State bar rules restrict certain advertising methods, requiring compliant campaigns',
  ],
  'real-estate': [
    'Real estate is hyper-local — buyers and sellers search for agents in specific neighborhoods',
    'The market moves fast — buyers expect immediate responses and real-time listings',
    'Agent competition is intense with 1.5M+ licensed Realtors competing for leads in the US',
    'Zillow and Realtor.com dominate search — organic SEO is essential to compete',
    'Seasonal demand fluctuations require smart campaign management year-round',
  ],
  restaurants: [
    '"Restaurants near me" gets millions of searches daily — your Google listing must be perfect',
    'A 1-star drop in Yelp or Google rating can reduce revenue by 5–9%',
    'Social media presence directly influences foot traffic and reservations',
    'Delivery apps take 15–30% commissions — driving direct bookings is more profitable',
    'High competition in every city requires differentiated positioning and consistent marketing',
  ],
  contractors: [
    'Most homeowners search Google before calling any contractor — online visibility is everything',
    'Seasonality creates feast-or-famine cycles that proper digital marketing can smooth out',
    'Fake reviews and low-quality competitors damage trust for all contractors',
    'Local Service Ads and Google Maps dominate contractor search results',
    'Referrals dry up in slow seasons — digital lead generation fills the gap',
  ],
  ecommerce: [
    'Product pages competing against Amazon, Walmart, and major retailers in search results',
    'Shopping cart abandonment rates average 70% — retargeting is essential',
    'Google Shopping and PPC costs have increased 30%+ year-over-year',
    'SEO for ecommerce requires category page optimization and thousands of product pages',
    'International competition and dropshippers undercut pricing constantly',
  ],
  startups: [
    'Brand awareness from zero is the hardest marketing challenge any startup faces',
    'Limited budgets require every dollar to generate measurable ROI',
    'Competing against established brands with years of SEO authority',
    'Investor expectations require demonstrable growth metrics quickly',
    'Building a content moat and topical authority takes time and strategy',
  ],
  gyms: [
    'January brings a surge of new members — most leave by March without proper retention marketing',
    '"Gym near me" searches are dominated by large chains like Planet Fitness and Anytime Fitness',
    'Google Business Profile optimization is critical for local gym discovery',
    'Social proof (before/after photos, member stories) is the primary conversion driver',
    'Class schedules, pricing, and promotions need to be updated and searchable in real-time',
  ],
  salons: [
    'Online booking is now expected — salons not on Google or Booksy lose clients to competitors',
    'Instagram and Pinterest drive discovery for hair and beauty services',
    'Reviews on Google and Yelp are the #1 factor in salon selection',
    '"Hair salon near me" and "[service] near me" are high-intent, high-volume keywords',
    'Client retention is the biggest revenue driver — email and SMS marketing keep clients returning',
  ],
  'auto-repair': [
    'Car trouble is urgent — customers need a trustworthy shop immediately, not in a week',
    '"Auto repair near me" and "mechanic near me" are top local search queries nationwide',
    'Google reviews are the #1 trust signal for choosing an auto repair shop',
    'Competition from national chains (Jiffy Lube, Midas) is intense in every market',
    'Seasonal services (AC, winterizing) create marketing opportunities if properly promoted',
  ],
  accountants: [
    'Tax season creates a narrow window for acquisition — year-round content marketing builds pipeline',
    'Business owners and high-net-worth individuals research extensively before hiring a CPA',
    'Niche authority (real estate accounting, e-commerce accounting) attracts premium clients',
    'Referrals dominate the accounting industry — but digital marketing multiplies referral reach',
    'Virtual accounting has expanded the market beyond local — national targeting is now viable',
  ],
  healthcare: [
    'HIPAA compliance restricts what healthcare providers can advertise — navigating this is critical',
    'Patients rely on Google to find specialists, urgent care, and specific treatments',
    'Healthcare reviews on Google and Healthgrades directly impact new patient volume',
    'Telehealth expansion means providers can now market nationally, not just locally',
    'Trust signals — credentials, certifications, patient testimonials — must be front and center',
  ],
};

const NICHE_CASE_STUDIES = {
  dentists: [
    { client: 'Smile Dental Group', location: 'Chicago, IL', metric: 'New patients/month', before: '28', after: '94', period: '5 months' },
    { client: 'Family Dental Care', location: 'Dallas, TX', metric: 'Google Maps position', before: '#8', after: '#1', period: '4 months' },
    { client: 'Bright Smiles Studio', location: 'Miami, FL', metric: 'Monthly revenue', before: '$42K', after: '$118K', period: '8 months' },
  ],
  lawyers: [
    { client: 'Thompson & Associates', location: 'New York, NY', metric: 'Qualified leads/month', before: '12', after: '67', period: '6 months' },
    { client: 'Pacific Coast Legal', location: 'Los Angeles, CA', metric: 'Organic traffic', before: '800/mo', after: '8,400/mo', period: '9 months' },
    { client: 'Capital Law Group', location: 'Austin, TX', metric: 'Case consultations', before: '18/mo', after: '72/mo', period: '5 months' },
  ],
  'real-estate': [
    { client: 'Premier Realty Team', location: 'Phoenix, AZ', metric: 'Buyer/seller leads', before: '22/mo', after: '89/mo', period: '4 months' },
    { client: 'Coastal Properties', location: 'San Diego, CA', metric: 'Website leads', before: '8/mo', after: '54/mo', period: '6 months' },
    { client: 'Metro Homes Group', location: 'Atlanta, GA', metric: 'Cost per lead', before: '$280', after: '$64', period: '3 months' },
  ],
  restaurants: [
    { client: "Sullivan's Irish Pub", location: 'Boston, MA', metric: 'Weekend reservations', before: '40%', after: 'Waitlist', period: '3 months' },
    { client: 'Sakura Japanese Kitchen', location: 'Seattle, WA', metric: 'Google Maps calls', before: '120/mo', after: '440/mo', period: '4 months' },
    { client: 'The Southern Table', location: 'Nashville, TN', metric: 'Monthly revenue', before: '$68K', after: '$124K', period: '6 months' },
  ],
  contractors: [
    { client: 'PrimeHVAC Solutions', location: 'Denver, CO', metric: 'Service calls/month', before: '38', after: '127', period: '5 months' },
    { client: 'Elite Roofing Co.', location: 'Houston, TX', metric: 'Lead cost (Google Ads)', before: '$180', after: '$42', period: '3 months' },
    { client: 'ProPlumb Services', location: 'Philadelphia, PA', metric: 'Monthly bookings', before: '24', after: '91', period: '4 months' },
  ],
  ecommerce: [
    { client: 'Urban Threads Apparel', location: 'Online (US)', metric: 'Organic revenue', before: '$28K/mo', after: '$142K/mo', period: '8 months' },
    { client: 'PetPro Supply Co.', location: 'Online (US)', metric: 'ROAS (Google Shopping)', before: '1.8x', after: '5.4x', period: '4 months' },
    { client: 'Naturelle Skincare', location: 'Online (US)', metric: 'Monthly orders', before: '340', after: '2,100', period: '9 months' },
  ],
  startups: [
    { client: 'NexGenPay', location: 'San Francisco, CA', metric: 'Organic signups/month', before: '180', after: '1,240', period: '7 months' },
    { client: 'Launchpad HR', location: 'Austin, TX', metric: 'Demo requests/month', before: '8', after: '54', period: '5 months' },
    { client: 'CloudSync Tools', location: 'New York, NY', metric: 'Trial conversions', before: '2.1%', after: '8.7%', period: '4 months' },
  ],
  gyms: [
    { client: 'Apex Fitness', location: 'Chicago, IL', metric: 'New memberships/month', before: '18', after: '67', period: '4 months' },
    { client: 'Iron & Soul Gym', location: 'Los Angeles, CA', metric: 'Google Maps calls', before: '85/mo', after: '310/mo', period: '3 months' },
    { client: 'Pure Results Studio', location: 'Miami, FL', metric: 'Monthly revenue', before: '$32K', after: '$89K', period: '6 months' },
  ],
  salons: [
    { client: 'Bloom Beauty Studio', location: 'Chicago, IL', metric: 'Bookings per week', before: '28', after: '84', period: '5 months' },
    { client: 'The Color Bar', location: 'Los Angeles, CA', metric: 'New client bookings', before: '12/mo', after: '58/mo', period: '4 months' },
    { client: 'Luxe Hair Lounge', location: 'New York, NY', metric: 'Instagram followers', before: '800', after: '12,400', period: '6 months' },
  ],
  'auto-repair': [
    { client: 'FastLane Auto Care', location: 'Dallas, TX', metric: 'Cars serviced/month', before: '90', after: '247', period: '4 months' },
    { client: "Mike's Transmission", location: 'Phoenix, AZ', metric: 'Google Maps position', before: '#9', after: '#1', period: '3 months' },
    { client: 'Precision Auto Works', location: 'Seattle, WA', metric: 'Monthly revenue', before: '$48K', after: '$112K', period: '5 months' },
  ],
  accountants: [
    { client: 'Summit CPA Group', location: 'Denver, CO', metric: 'New clients/quarter', before: '6', after: '28', period: '4 months' },
    { client: 'TrueBooks Financial', location: 'Austin, TX', metric: 'MRR', before: '$18K', after: '$67K', period: '8 months' },
    { client: 'Greenfield Accounting', location: 'New York, NY', metric: 'Organic leads/mo', before: '4', after: '31', period: '6 months' },
  ],
  healthcare: [
    { client: 'BrightLife Medical', location: 'Houston, TX', metric: 'New patients/month', before: '24', after: '98', period: '5 months' },
    { client: 'Revive Physical Therapy', location: 'Chicago, IL', metric: 'Google Maps rank', before: '#7', after: '#2', period: '4 months' },
    { client: 'ClearMind Psychiatry', location: 'Los Angeles, CA', metric: 'Appointment requests', before: '18/mo', after: '74/mo', period: '6 months' },
  ],
};

const NICHE_FAQS = {
  dentists: [
    { q: 'How long does it take to rank for "dentist near me"?', a: 'With proper GMB optimization and local SEO, most dental practices see significant improvement in Map Pack rankings within 60–90 days. Ranking in the top 3 for competitive keywords typically takes 4–6 months of consistent work.' },
    { q: 'What marketing channels work best for dental practices?', a: 'Google Business Profile optimization, Google Ads, and SEO typically deliver the best ROI for dentists. GBP optimization alone—when done properly—can double your inbound calls within 3 months.' },
    { q: 'How do you generate reviews ethically?', a: 'We set up a compliant review request system that sends automated follow-ups after patient visits. We never incentivize reviews (which violates FTC and Google guidelines), but strategic timing and friction-free request processes consistently generate 5–10x more authentic reviews.' },
    { q: 'Can you help with multiple-location dental practices?', a: 'Yes. We\'ve helped multi-location DSOs manage 5–40 locations simultaneously, with separate GBP profiles, local landing pages, and citation management for each location.' },
  ],
  lawyers: [
    { q: 'Do you understand legal advertising rules?', a: 'Yes. We\'re familiar with ABA Model Rules and state bar regulations covering attorney advertising. All campaigns are structured to comply with your jurisdiction\'s rules around testimonials, guarantees, and specialization claims.' },
    { q: 'What\'s the best marketing channel for attorneys?', a: 'It depends on your practice area. Personal injury lawyers typically see the best ROI from Google Local Service Ads (LSAs) and SEO. Estate planning and family law firms often benefit most from organic SEO and content marketing.' },
    { q: 'How do you compete with large law firms on SEO?', a: 'We focus on practice-area-specific and location-specific keywords where large firms often underinvest. Building topical authority through case studies, blog articles, and FAQ pages lets smaller firms outrank large ones for high-intent queries.' },
    { q: 'Can you guarantee leads?', a: 'We don\'t guarantee specific lead numbers because legal markets vary significantly. What we guarantee is transparent reporting, measurable improvement in rankings and traffic, and campaigns that continuously optimize toward your cost-per-case targets.' },
  ],
  'real-estate': [
    { q: 'How do you compete with Zillow and Realtor.com?', a: 'By targeting neighborhood-specific and long-tail keywords where aggregator sites can\'t compete. A local agent page for "3-bedroom homes in [specific neighborhood]" can outrank Zillow because you have local authority and hyper-specific content.' },
    { q: 'What\'s the ROI timeline for real estate marketing?', a: 'PPC campaigns can generate leads within days. SEO builds momentum over 3–6 months but produces significantly lower cost-per-lead long-term. Most real estate clients see positive ROI by month 3.' },
    { q: 'Do you work with buyer\'s agents, seller\'s agents, or both?', a: 'Both. We tailor campaigns to your business model—lead generation for buyers, listing attraction for sellers, or a balanced approach for full-service agents.' },
    { q: 'Can you manage social media for real estate?', a: 'Yes. We create content around new listings, market updates, neighborhood spotlights, and client testimonials. Our real estate social programs typically grow engaged local followings of 2,000–8,000 within 6 months.' },
  ],
  restaurants: [
    { q: 'What\'s the fastest way to get more restaurant reservations?', a: 'Google Business Profile optimization is the fastest ROI. Optimizing your GBP—photos, hours, menu, posts—typically increases calls and direction requests by 80–200% within 60 days. Pair this with targeted social media ads for maximum impact.' },
    { q: 'Should restaurants use Google Ads?', a: 'Yes, strategically. Google Ads work best for promoting specific events, new menu launches, and seasonal specials. For ongoing reservation flow, SEO and GBP optimization provide more cost-effective long-term results.' },
    { q: 'How do you manage online reviews for restaurants?', a: 'We monitor Google, Yelp, TripAdvisor, and OpenTable daily. Every review gets a response within 24 hours—we handle negative reviews with professional, de-escalating language that shows other potential diners you care about their experience.' },
    { q: 'Can you reduce our dependence on delivery apps?', a: 'Yes. We create campaigns that drive customers to order directly through your website, which eliminates the 15–30% commissions charged by DoorDash, Uber Eats, and Grubhub. Direct ordering campaigns typically pay for themselves within 60 days.' },
  ],
  contractors: [
    { q: 'What\'s the best lead source for contractors?', a: 'Google Local Service Ads (LSAs) paired with Google Business Profile optimization typically deliver the highest-quality leads for contractors. LSAs charge per-lead (not per-click) and show your Google Guarantee badge, which dramatically increases trust.' },
    { q: 'How do you handle slow seasons for contractors?', a: 'We plan seasonal campaigns in advance—running awareness content and special offers before slow periods hit. We also shift budget toward longer-sales-cycle services (HVAC maintenance plans, annual contracts) that book ahead.' },
    { q: 'Can you help with multiple service areas?', a: 'Yes. We build location-specific landing pages for every city and county you serve, so you appear in local search results across your entire service area—not just your business address location.' },
    { q: 'How do you compete with HomeAdvisor and Angi?', a: 'By building your own direct lead pipeline. Contractors who rely solely on aggregators pay 40–80% of their marketing budget in commissions. We build owned assets—your website, GBP, and organic rankings—that generate leads you don\'t pay a cut for.' },
  ],
  ecommerce: [
    { q: 'Can you compete with Amazon for product keywords?', a: 'Not always directly, but strategically. We target informational and comparison keywords where Amazon doesn\'t rank, build niche authority through blog content and buying guides, and optimize product pages for long-tail commercial queries where you can rank.' },
    { q: 'What is the typical ROAS on Google Shopping?', a: 'Our ecommerce clients average 3.8x–6.2x ROAS on Google Shopping after optimization. Initial campaigns often start lower (1.5–2.5x) and improve significantly as we eliminate wasted spend and scale winning product campaigns.' },
    { q: 'Do you handle Shopify and WooCommerce SEO?', a: 'Yes. We\'ve optimized hundreds of Shopify and WooCommerce stores—handling technical SEO (site speed, schema, crawlability), on-page optimization (category pages, product descriptions), and content strategy.' },
    { q: 'How do you reduce cart abandonment?', a: 'Through retargeting campaigns on Google and Meta, abandoned cart email sequences (typically 3-email flows), and conversion rate optimization of your checkout process. Our clients average 15–25% cart recovery rates from abandoned sessions.' },
  ],
  startups: [
    { q: 'When should a startup invest in SEO?', a: 'Ideally from day one—SEO compounds over time, and brands that start early have a massive advantage. Even with limited budget, investing in technical SEO setup, keyword research, and 2–4 content pieces per month builds an asset that pays for itself over 12–24 months.' },
    { q: 'How do you compete with established brands?', a: 'We focus on product-specific, problem-based, and long-tail keywords where established brands underinvest. New brands can rank quickly for these. We also build topical authority by becoming the definitive resource on your niche topic.' },
    { q: 'What\'s more important for startups—SEO or paid ads?', a: 'Both play different roles. Paid ads provide immediate leads while you build organic presence. SEO provides sustainable, compounding, lower-cost leads over time. We recommend a balanced approach: modest paid spend in months 1–3, shifting budget toward SEO as organic rankings improve.' },
    { q: 'Can you help with investor-ready growth metrics?', a: 'Yes. We structure campaigns with clear attribution, monthly reporting, and growth metrics that demonstrate YoY improvement—making your marketing investment legible to investors.' },
  ],
  gyms: [
    { q: 'How do gyms compete with Planet Fitness and big chains?', a: 'By owning hyper-local SEO, showcasing community and specialized programming, and targeting keywords that chains ignore ("CrossFit gym near me," "women-only gym [city]"). Your brand story and community differentiation are your biggest competitive advantages.' },
    { q: 'What\'s the best time of year to run gym promotions?', a: 'January (New Year) and September (back-to-school) are the highest-intent periods. We plan campaigns 4–6 weeks ahead, running awareness content before the rush so your brand is top-of-mind when intent peaks.' },
    { q: 'How do you reduce gym membership churn?', a: 'Churn reduction is a retention marketing problem, not just an acquisition one. We build email sequences for new members, milestone celebration content, and re-engagement sequences for at-risk members—typically reducing churn by 15–25%.' },
    { q: 'Can you manage Instagram for a gym?', a: 'Yes. We create transformation content, trainer spotlights, member stories, and class highlight reels. Our gym social programs typically grow follower counts by 2,000–8,000 in 6 months, with engagement rates above industry average.' },
  ],
  salons: [
    { q: 'How do salons get found on Google?', a: 'Google Business Profile optimization is the single highest-ROI activity for salons. Proper category selection, regular photo uploads, review volume, and weekly posts can move you from invisible to the top 3 in your area within 60–90 days.' },
    { q: 'What social platforms work best for salons?', a: 'Instagram and Pinterest are the highest-performing platforms for salons. Before/after content outperforms all other formats. We also leverage Facebook for local awareness ads targeting nearby neighborhoods and demographics.' },
    { q: 'Can you help with online booking?', a: 'Yes. We integrate your booking platform (Vagaro, Booksy, StyleSeat, or Square) with your website and Google profile, and run campaigns that drive direct online bookings to reduce no-shows and phone tag.' },
    { q: 'How do you compete with Supercuts and chain salons?', a: 'By positioning on expertise, personalization, and premium experience—not price. We build content around specific services you specialize in (balayage, keratin, extensions) where chains can\'t compete, attracting clients willing to pay premium rates.' },
  ],
  'auto-repair': [
    { q: 'What\'s the fastest way to get more auto repair customers?', a: 'Google Business Profile optimization plus Google Local Service Ads is the fastest combination. LSAs show a "Google Guaranteed" badge that dramatically increases trust for a service category where trust is the #1 purchase driver.' },
    { q: 'How do you handle reviews for an auto repair shop?', a: 'We set up an automated review request text/email sent after every completed service. Responding to all reviews—especially negative ones—within 24 hours is critical. Our clients average a 0.8-star rating improvement within 6 months.' },
    { q: 'Which auto repair services should I advertise?', a: 'High-urgency, high-frequency services (oil changes, brake repair, AC service, tires) drive the most leads. We also build content around seasonal services to capture demand spikes—winter prep in October, AC service in April.' },
    { q: 'Can you help compete with Jiffy Lube and national chains?', a: 'Yes. Chains win on brand recognition but lose on local trust and personal service. We amplify your reviews, showcase your technicians, and target keywords like "honest mechanic near me" and "independent auto shop [city]" where you have an authentic advantage.' },
  ],
  accountants: [
    { q: 'What marketing works best for CPA firms?', a: 'Content marketing and SEO are the highest-ROI channels for accounting firms long-term. Articles targeting "small business accounting [city]," "QuickBooks setup service," and "tax preparation for [industry]" attract qualified leads year-round. Pair with Google Ads during tax season for maximum impact.' },
    { q: 'How do you market accounting services to businesses?', a: 'We target business owners through a combination of Google Ads, LinkedIn advertising, and content marketing. Case studies showing real financial impact ("we found $24,000 in deductions for a restaurant owner") consistently drive the highest conversion rates.' },
    { q: 'Can you help with niche accounting positioning?', a: 'Absolutely. Niche authority (real estate accountants, ecommerce CFOs, restaurant bookkeeping) significantly increases both lead quality and fees. We build topical authority content around your chosen niche to attract premium clients.' },
    { q: 'How do you generate accounting leads outside of tax season?', a: 'Monthly bookkeeping, payroll services, and CFO advisory services are sold year-round. We create content and campaigns targeting these services year-round, using tax season as a conversion period for clients who were engaged earlier.' },
  ],
  healthcare: [
    { q: 'Can healthcare providers run Google Ads?', a: 'Yes, though healthcare has specific advertising restrictions. Google has a "Sensitive Categories" policy for certain medical topics. We structure campaigns to be compliant while still effectively reaching patients searching for your services.' },
    { q: 'How do you handle HIPAA in digital marketing?', a: 'We ensure all tracking and analytics are configured to avoid capturing PHI (Protected Health Information). Remarketing campaigns are structured to comply with HIPAA rules. All vendor agreements include appropriate BAAs (Business Associate Agreements).' },
    { q: 'What\'s the best way to attract new patients online?', a: 'Google Business Profile optimization is the #1 priority for local healthcare providers. Patients searching for specific conditions, treatments, or specialties are the highest-intent audience—targeting these keywords drives qualified new patient inquiries.' },
    { q: 'Do you work with telehealth providers?', a: 'Yes. Telehealth has fundamentally changed healthcare marketing—providers can now target nationally. We build multi-state SEO campaigns and Google Ads targeting for telehealth platforms across all states where you\'re licensed to practice.' },
  ],
};

const NICHE_HERO_SUB = {
  dentists:     svc => `Most dental practices get their new patients from Google — Map Pack, organic search, and Google Ads. ${svc} for dentists requires understanding HIPAA-adjacent advertising rules, the review-heavy decision process patients use, and the local SEO signals that drive new appointment bookings.`,
  lawyers:      svc => `Legal marketing is one of the most competitive spaces online. ${svc} for law firms requires understanding attorney advertising regulations, the trust-heavy research process legal buyers use, and the high-CPC keywords that attract qualified case leads rather than window-shoppers.`,
  'real-estate': svc => `Real estate is hyper-local and time-sensitive. ${svc} for real estate agents means ranking for neighborhood-specific searches, competing with aggregators like Zillow on long-tail terms, and building enough digital credibility to generate buyer and seller inquiries consistently.`,
  restaurants:  svc => `Restaurants live and die by local visibility. ${svc} for restaurants means dominating "near me" searches, managing reviews across Google and Yelp, and driving direct reservations and orders rather than paying 20–30% commissions to delivery apps.`,
  contractors:  svc => `Contractors depend on a steady lead flow to maintain project pipelines year-round. ${svc} for contractors and HVAC businesses focuses on high-intent local searches, Google Local Service Ads, and seasonal campaign planning that smooths out feast-or-famine revenue cycles.`,
  ecommerce:    svc => `eCommerce businesses face the toughest SEO competition — including Amazon, Walmart, and every major retailer. ${svc} for eCommerce stores means identifying the keyword gaps those giants ignore, building category page authority, and converting organized traffic into real sales.`,
  startups:     svc => `Startups face a unique challenge: competing against established brands with zero domain authority and limited budget. ${svc} for startups means building topical authority from scratch, targeting low-competition long-tail keywords first, and producing content that compounds in value over time.`,
  gyms:         svc => `Gyms compete against national chains with massive marketing budgets. ${svc} for gyms and fitness studios means dominating local search, showcasing community and specialized programming, and driving new membership inquiries consistently — not just in January.`,
  salons:       svc => `Salons depend on local discovery and reviews. ${svc} for salons and beauty businesses means ranking prominently in Google Maps, generating consistent 5-star reviews, and driving online bookings that reduce no-shows and phone tag.`,
  'auto-repair': svc => `Auto repair is an urgent, trust-dependent purchase. ${svc} for auto repair shops means ranking for "mechanic near me" and service-specific searches at the moment someone needs help — and having the reviews to earn that trust instantly.`,
  accountants:  svc => `Accounting clients research extensively before hiring. ${svc} for accountants and CPAs means building topical authority across tax, bookkeeping, and advisory content, establishing niche expertise in specific industries, and generating qualified leads year-round — not just during tax season.`,
  healthcare:   svc => `Healthcare marketing requires careful navigation of advertising restrictions, patient privacy requirements, and trust signals unique to medical decision-making. ${svc} for healthcare and medical providers means attracting new patients through Google search, managing the review-heavy decision process patients rely on, complying with HIPAA-adjacent marketing guidelines, and building the online credibility that causes patients to choose your practice over the many other options available in your area.`,
};

const NICHE_INTRO_P1 = {
  dentists:     svc => `Dental practices operate in one of the most review-dependent, location-sensitive verticals in local business. When a family moves to a new city and needs a dentist, or when someone breaks a tooth and needs emergency care, the decision happens on Google in under 3 minutes. The Map Pack wins — and it wins based on review volume, GBP optimization, and local authority signals. ${svc} for dentists is not about ranking nationally; it\'s about owning your specific geography and winning the moment a high-intent local search happens.`,
  lawyers:      svc => `Legal services represent some of the highest-cost-per-click keywords in Google Ads — personal injury terms can cost $100–$500 per click in competitive markets. That reality makes organic SEO and GMB optimization critically important for law firms that want predictable lead flow without spending their entire marketing budget on PPC. ${svc} for law firms means building the kind of online authority that makes potential clients choose you before they even visit your website — because your reviews, your ranking position, and your overall presence signal credibility before a single word of your site is read.`,
  'real-estate': svc => `The real estate market moves faster than almost any other industry — buyers and sellers make decisions quickly, and the agent they hire is almost always the first one who proves their local credibility. Zillow, Realtor.com, and the major aggregators dominate broad real estate keywords, which means agents need a different strategy: hyper-local content, neighborhood-specific pages, and a Google Business Profile that demonstrates consistent activity and strong reviews. ${svc} for real estate agents is about owning your geographic niche in a way the aggregators simply cannot replicate.`,
  restaurants:  svc => `\'Restaurants near me\' receives millions of searches daily across the US — and the Map Pack captures the vast majority of those clicks. Beyond local search, restaurant marketing involves managing your online reputation across Google, Yelp, TripAdvisor, and OpenTable simultaneously, since a 1-star rating drop can reduce revenue by 5–9% (Harvard Business School research). ${svc} for restaurants means building the digital presence that turns searchers into seated guests — and keeping them coming back directly rather than through commission-heavy delivery platforms.`,
  contractors:  svc => `The majority of homeowners search Google before calling any contractor — and most will call the first credible business they find, not the best one they can find after hours of research. That means contractor marketing is fundamentally about being the first visible, trusted option at the exact moment someone needs your service. ${svc} for contractors and HVAC businesses focuses on Google Local Service Ads, Map Pack rankings, and seasonal content that captures demand during peak periods without disappearing during slower months.`,
  ecommerce:    svc => `eCommerce SEO differs fundamentally from local or service business SEO. With potentially thousands of product and category pages, technical SEO decisions compound — a single misconfigured canonical tag can cause thousands of pages to be de-indexed. Shopping intent keywords are intensely competitive because the potential revenue is directly visible to every competitor. ${svc} for eCommerce stores means systematically identifying the keyword gaps your competition ignores, building category-page authority that drives organic revenue, and ensuring your technical foundation can support growth without accumulating debt.`,
  startups:     svc => `Startups face the compounding disadvantage of competing against established brands that have years of domain authority, content, and backlinks already in place. The instinct to target broad keywords immediately is almost always wrong — it leads to spending budget on terms you can\'t rank for yet while missing the long-tail opportunities that could generate early organic traction. ${svc} for startups means building authority systematically, starting with the specific problems your product solves rather than the generic category you compete in.`,
  gyms:         svc => `The fitness industry has one of the highest seasonal demand patterns in local business — January brings a surge of new-member intent that accounts for 12% of the entire year\'s membership sign-ups. But gyms that only market in January get 12% of their potential new membership. ${svc} for gyms and fitness studios means year-round visibility for the keywords local residents search when they\'re ready to commit to a membership — not just when it\'s trendy.`,
  salons:       svc => `The salon and beauty industry runs almost entirely on local reputation and word of mouth — but word of mouth in 2025 primarily happens through Google reviews, Instagram follows, and local search rankings rather than personal recommendations alone. When someone new to a neighborhood searches for a hair salon, the first result they trust is the one with the most reviews, the best photos, and an active presence. ${svc} for salons means building exactly that kind of dominant local digital presence.`,
  'auto-repair': svc => `Car trouble triggers the most time-sensitive local search of any service category — when a car won\'t start or a brake warning comes on, the customer is searching for help now, not next week. At that moment, your Google ranking and your star rating determine whether you get the call. ${svc} for auto repair shops means being the first trusted option across the full range of service searches your customers use — from emergency searches to scheduled maintenance.`,
  accountants:  svc => `Accounting clients represent long-term relationships — a business owner who finds a good accountant tends to stay for years, sometimes decades. But finding that accountant has moved almost entirely to Google. Searches for "small business accountant near me," "bookkeeping services [city]," and "tax preparation for [industry]" are high-intent queries where the right ranking can generate consistent client flow year-round. ${svc} for accountants means building the kind of online authority that attracts the specific clients you want to work with — not just whoever finds you.`,
  healthcare:   svc => `Healthcare decisions involve a uniquely high level of trust requirement. Patients choosing a physician, physical therapist, or specialist are making potentially life-affecting decisions — and they approach that research accordingly. A healthcare provider\'s Google reviews, website quality, and local presence directly influence whether patients book an appointment. ${svc} for healthcare providers means building the digital credibility that converts online research into booked appointments — while navigating HIPAA-adjacent advertising considerations carefully.`,
};

const NICHE_INTRO_P2 = {
  dentists:     svc => `The competitive dynamics in dental marketing also mean that practices with 80+ Google reviews dramatically outperform those with 20 — not because more reviews are inherently better, but because Google\'s local algorithm weights review volume and recency as direct signals of relevance and activity. Our ${svc} approach for dental practices combines GMB optimization, review generation systems, local citation building, and targeted content that captures high-intent patient searches before they ever reach a competitor.`,
  lawyers:      svc => `Our ${svc} approach for law firms is built around two simultaneous strategies: near-term lead generation through carefully structured Google Ads campaigns that comply with your state bar\'s advertising rules, and long-term authority building through practice-area content that targets the specific searches your ideal clients perform. We work within your ethical constraints while maximizing your digital visibility across every relevant search channel.`,
  'real-estate': svc => `Our ${svc} approach for real estate agents focuses on the keyword categories where individual agents can actually outrank Zillow: specific property types in specific neighborhoods, local market condition questions, and hyper-local community content that aggregators can\'t create at scale. We build your digital presence to serve the searches that motivated buyers and sellers actually perform — and to convert that traffic with a website and GBP that demonstrates genuine local expertise.`,
  restaurants:  svc => `Our ${svc} approach for restaurants prioritizes the channels with the fastest, most direct impact on revenue: Google Business Profile optimization that gets you into the Map Pack for \'restaurants near me\' searches, review management that protects and improves your rating across all platforms, and targeted campaigns that drive direct online orders and reservations — generating the same revenue at zero commission cost.`,
  contractors:  svc => `Our ${svc} approach for contractors combines Google Local Service Ads (for immediate high-intent leads) with local SEO and content marketing (for the long-term credibility that makes homeowners choose you over competitors). We also build service-area landing pages for every city and county in your service zone, ensuring you appear in local searches across your entire area — not just in searches near your registered business address.`,
  ecommerce:    svc => `Our ${svc} approach for eCommerce stores starts with a technical SEO foundation audit — ensuring crawlability, canonical configuration, site architecture, and page speed are all optimized before any content investment is made. Then we identify the category-level and product-level keyword opportunities where your store can compete and win within 6–12 months, and build the content and link assets needed to capture that traffic and revenue.`,
  startups:     svc => `Our ${svc} approach for startups is sequenced deliberately: first, establish the technical SEO foundation (so all subsequent work is captured and indexed properly); second, build topical authority on your product\'s core problem domain through long-tail content; third, earn early links through PR and content partnerships; and fourth, scale toward more competitive terms as domain authority increases. Every month of consistent execution compounds — the businesses that win in search started this process 12–18 months before their competitors.`,
  gyms:         svc => `Our ${svc} approach for gyms and fitness studios focuses on the high-intent local keywords that motivated members search when they\'re ready to commit — not the broad fitness keywords that attract researchers and information-seekers. We build your Google Business Profile to dominate local Map Pack results, generate consistent new reviews, and create the kind of social proof that makes your gym the obvious choice for someone ready to start.`,
  salons:       svc => `Our ${svc} approach for salons combines Google Business Profile dominance (the single highest-ROI activity for local salon visibility) with a consistent social media presence that showcases your work, attracts new clients through Instagram and Facebook, and keeps current clients engaged and returning. For salons with online booking, we integrate your appointment system into your digital presence so every discovery moment has a clear, frictionless path to a booked appointment.`,
  'auto-repair': svc => `Our ${svc} approach for auto repair shops focuses on the full spectrum of searches your customers use — from urgent \'mechanic near me\' queries to planned \'brake inspection [city]\' searches to seasonal \'winter tire swap\' content. We build your Google ranking, your review profile, and your website to be the most trusted, visible option in your market across every service category you offer.`,
  accountants:  svc => `Our ${svc} approach for accountants and CPA firms starts with identifying your ideal client profile — industry, company size, service need — and builds content and campaigns specifically designed to attract that audience. We avoid the generic \'tax services\' keywords (too competitive, too broad) in favor of the specific, high-intent searches that your best-fit clients actually perform. Niche authority compounds over time: the CPA firm that becomes known as the go-to accountant for restaurants, or for eCommerce businesses, faces dramatically less competition than one trying to serve everyone.`,
  healthcare:   svc => `Our ${svc} approach for healthcare providers is built around patient-intent keyword research, HIPAA-compliant tracking configuration, and the review management systems that build the online reputation patients check before booking their first appointment. We structure all campaigns to comply with Google\'s sensitive healthcare advertising policies and your specific provider category\'s regulations — so you get maximum visibility within appropriate boundaries.`,
};

const NICHE_BENEFITS = {
  dentists:     [
    { title: 'New Patient Volume', desc: 'Systematic GBP optimization and local SEO targeted to produce consistent new patient bookings — not just website traffic.' },
    { title: 'Map Pack Rankings', desc: 'Top-3 placement for "dentist near me" and service-specific searches in your target geography, where 70%+ of clicks go.' },
    { title: 'Review Generation', desc: 'A compliant, automated review request system that generates 5–10 new authentic Google reviews per month on average.' },
    { title: 'Multi-Location Support', desc: 'Separate GBP profiles, local landing pages, and citation management for each location — maintaining consistency at scale.' },
    { title: 'HIPAA-Aware Campaigns', desc: 'Ad campaigns and tracking configured to avoid capturing PHI and to comply with healthcare advertising restrictions.' },
    { title: 'Transparent Reporting', desc: 'Monthly reports showing your Map Pack position, call volume, new patient inquiry count, and cost per new patient lead.' },
  ],
  lawyers:      [
    { title: 'Compliant Advertising', desc: 'All campaigns structured in accordance with ABA Model Rules and state bar advertising regulations for your jurisdiction.' },
    { title: 'Practice-Area SEO', desc: 'Dedicated content and ranking campaigns for each practice area — not generic "law firm" SEO that serves nobody specifically.' },
    { title: 'Google Local Service Ads', desc: 'LSA setup and management with Google Screened badge that dramatically increases trust and call conversion rate.' },
    { title: 'Case Lead Quality', desc: 'Campaigns focused on qualified case inquiries rather than raw lead volume — screening for case type, jurisdiction, and merit.' },
    { title: 'Competitor Intelligence', desc: 'Monthly competitor ranking and ad spend analysis showing where you\'re losing visibility and how to close the gap.' },
    { title: 'Long-Term Authority', desc: 'Practice-area blog content and case study pages that build domain authority and generate free organic leads over time.' },
  ],
  'real-estate': [
    { title: 'Neighborhood SEO', desc: 'Location-specific landing pages for every neighborhood you serve, ranking for the searches buyers and sellers actually make.' },
    { title: 'Aggregator Competition', desc: 'Long-tail keyword strategy that captures searches where Zillow and Realtor.com don\'t compete — and you can win.' },
    { title: 'Lead Generation', desc: 'Consistent buyer and seller inquiry flow from organic search, Google Ads, and social media campaigns combined.' },
    { title: 'Social Proof', desc: 'Review generation and testimonial management that builds the local reputation necessary to earn trust before the first contact.' },
    { title: 'Listing Promotion', desc: 'Paid campaigns that amplify new listing visibility to targeted local buyer audiences at critical go-to-market moments.' },
    { title: 'Market Content', desc: 'Monthly market update content that keeps your audience engaged, demonstrates expertise, and generates consistent organic traffic.' },
  ],
  restaurants:  [
    { title: 'Map Pack Dominance', desc: 'Top-3 placement for "restaurants near me" and cuisine-specific searches — where the majority of local dining decisions are made.' },
    { title: 'Review Management', desc: 'Monitoring and responding to reviews across Google, Yelp, TripAdvisor, and OpenTable within 24 hours, every day.' },
    { title: 'Direct Ordering', desc: 'Campaigns driving customers to your direct ordering system rather than delivery apps, eliminating 15–30% commission costs.' },
    { title: 'Event Promotion', desc: 'Targeted campaigns for special events, seasonal menus, and promotional periods that need maximum visibility.' },
    { title: 'Social Content', desc: 'Instagram and Facebook content showcasing your menu, atmosphere, and team — driving discovery and engagement continuously.' },
    { title: 'Reservation Flow', desc: 'GBP optimization and campaign targeting that drives measurable increases in reservation requests and walk-in foot traffic.' },
  ],
  contractors:  [
    { title: 'Local Service Ads', desc: 'Google LSA setup with Google Guarantee badge — the highest-trust, highest-conversion ad format for contractor lead generation.' },
    { title: 'Service-Area Pages', desc: 'Dedicated landing pages for every city and county in your service area, generating leads from each geographic market.' },
    { title: 'Seasonal Campaigns', desc: 'Planned seasonal content and campaigns for peak service periods, capturing demand before your competitors think to advertise.' },
    { title: 'Map Pack Rankings', desc: 'Local SEO that gets your business into the top 3 for service-specific searches across your entire service geography.' },
    { title: 'Review Generation', desc: 'Post-job review request system that builds your Google rating systematically — the #1 trust signal for contractor selection.' },
    { title: 'Direct Lead Pipeline', desc: 'Owned lead generation that reduces dependence on HomeAdvisor, Angi, and other aggregators that charge 40–80% commissions.' },
  ],
  ecommerce:    [
    { title: 'Product Page SEO', desc: 'On-page optimization for every product page — titles, descriptions, schema markup, and keyword targeting for purchase intent.' },
    { title: 'Category Authority', desc: 'Category page content and link building that drives high-volume commercial keywords and competes with major retailers.' },
    { title: 'Google Shopping', desc: 'Shopping campaign management targeting the specific products and search terms where your ROAS is highest.' },
    { title: 'Abandoned Cart Recovery', desc: 'Retargeting campaigns on Google and Meta that recover 15–25% of abandoned cart sessions.' },
    { title: 'Amazon Gap Analysis', desc: 'Identification of high-intent keywords where Amazon doesn\'t rank — your best opportunity for organic product discovery.' },
    { title: 'Technical SEO', desc: 'Crawlability audit, canonical configuration, site speed optimization, and schema markup for all relevant product types.' },
  ],
  startups:     [
    { title: 'Technical Foundation', desc: 'Complete technical SEO setup from day one — ensuring every subsequent content and link investment is properly captured.' },
    { title: 'Long-Tail Targeting', desc: 'Identification of the specific, lower-competition keywords where your startup can rank and convert within 60–90 days.' },
    { title: 'Topical Authority', desc: 'Content cluster strategy that builds Google\'s understanding of your expertise before targeting broader, competitive terms.' },
    { title: 'Investor Metrics', desc: 'Attribution reporting and growth dashboards showing organic search as a business channel with clear month-over-month improvement.' },
    { title: 'Content Compounding', desc: 'A content program whose value accumulates — organic traffic from month 12 typically runs 5–10x month 3 from the same investment.' },
    { title: 'Balanced Channel Mix', desc: 'Paid ads for immediate leads while SEO builds — then shifting budget toward organic as rankings improve to reduce CAC over time.' },
  ],
  gyms:         [
    { title: 'Map Pack Rankings', desc: 'Top-3 placement for "gym near me" and specialty fitness searches — where new members searching locally are most likely to sign up.' },
    { title: 'Membership Campaigns', desc: 'Targeted campaigns for January, September, and other high-intent periods with offers that convert searchers to trial members.' },
    { title: 'Review Generation', desc: 'A systematic member review request process that builds your Google rating — the #1 differentiator vs. chain gyms.' },
    { title: 'Instagram Growth', desc: 'Consistent social content (transformations, trainer spotlights, class highlights) that builds a local following that converts.' },
    { title: 'Retention Marketing', desc: 'Email sequences for new members, milestone celebrations, and re-engagement flows that reduce churn 15–25%.' },
    { title: 'Community Positioning', desc: 'Content and messaging strategy that differentiates your gym from Planet Fitness and national chains on quality and community.' },
  ],
  salons:       [
    { title: 'GBP Optimization', desc: 'Top-3 placement for "hair salon near me" and service-specific searches in your area — the fastest-ROI local marketing activity.' },
    { title: 'Review Management', desc: 'Post-appointment review requests and monitoring across Google and Yelp — building the rating that drives first-time bookings.' },
    { title: 'Instagram Presence', desc: 'Consistent before-and-after content, service showcases, and stylist spotlights that attract new clients through discovery.' },
    { title: 'Online Booking Integration', desc: 'Connecting your booking platform (Vagaro, Booksy, StyleSeat) to your GBP and website for direct, frictionless appointment booking.' },
    { title: 'Chain Differentiation', desc: 'Content and positioning strategy that showcases your specialization and personalized service — where chains simply can\'t compete.' },
    { title: 'Retention Campaigns', desc: 'SMS and email follow-up campaigns that keep clients coming back at the right intervals — reducing revenue gaps from attrition.' },
  ],
  'auto-repair': [
    { title: 'Urgent Search Coverage', desc: 'Top rankings for emergency and high-intent searches: "mechanic near me," "auto repair open now," "brake repair [city]."' },
    { title: 'Google Local Service Ads', desc: 'LSA setup with Google Guaranteed badge — the highest-trust format for a service category where trust is the #1 purchase driver.' },
    { title: 'Review Generation', desc: 'Post-service review request system that builds your Google rating by 0.5–1 star on average within 6 months.' },
    { title: 'Seasonal Campaigns', desc: 'Seasonal service campaigns (AC service in spring, winterizing in fall) that capture demand spikes before competitors do.' },
    { title: 'Chain Competition', desc: 'Messaging strategy that amplifies your trustworthiness and personal service vs. Jiffy Lube and national chain competitors.' },
    { title: 'Service-Specific Pages', desc: 'Dedicated landing pages for each major service (brakes, oil change, transmission, tires) optimized for service-specific searches.' },
  ],
  accountants:  [
    { title: 'Niche Positioning', desc: 'Content and campaigns targeting your specific ideal client type — real estate investors, restaurants, eCommerce — not "everyone."' },
    { title: 'Year-Round Lead Flow', desc: 'Content targeting bookkeeping, payroll, and advisory services that generates leads outside of tax season consistently.' },
    { title: 'Local Authority', desc: 'Google Business Profile optimization and local SEO that surfaces your firm for searches in your specific market and industry.' },
    { title: 'Tax Season Surge', desc: 'Planned campaigns that capture the concentrated demand spike in Q1 — when budget is highest and conversion intent is strongest.' },
    { title: 'LinkedIn Targeting', desc: 'B2B campaigns on LinkedIn targeting business owners by industry, company size, and revenue — for premium client acquisition.' },
    { title: 'Trust Content', desc: 'Case studies, process explanations, and before-and-after financial result content that builds credibility before the first consultation.' },
  ],
  healthcare:   [
    { title: 'Patient Acquisition', desc: 'Consistent new patient inquiry flow from optimized GBP, condition-specific content, and Google Ads within HIPAA-aware frameworks.' },
    { title: 'Compliant Tracking', desc: 'Analytics and advertising configured to avoid capturing PHI — ensuring full HIPAA compliance while maintaining optimization capability.' },
    { title: 'Review Management', desc: 'Healthcare review monitoring across Google and Healthgrades, with professional response protocols that protect your reputation.' },
    { title: 'Telehealth Expansion', desc: 'Multi-state SEO and ad campaigns for telehealth providers — capturing patients across all states where you\'re licensed.' },
    { title: 'Specialty Content', desc: 'Condition-specific and treatment-specific content that captures high-intent searches from patients actively researching their options.' },
    { title: 'Trust Signals', desc: 'Credentials, board certifications, patient testimonials, and association memberships structured for maximum online trust impact.' },
  ],
};

const NICHE_PROCESS = {
  dentists:     [
    { title: 'GBP Audit & Optimization', desc: 'Full audit of your Google Business Profile — category, services, photos, description, Q&A — and systematic optimization to maximize Map Pack eligibility.' },
    { title: 'Review System Setup', desc: 'Automated review request workflow (text + email) triggered after patient appointments — generating consistent new Google reviews monthly.' },
    { title: 'Local Citation Building', desc: 'Audit and correction of NAP data across 40+ directories, plus new citation creation for any major gaps.' },
    { title: 'Location-Specific SEO', desc: 'Website optimization for target geography including local landing pages, internal linking, and schema markup for healthcare providers.' },
    { title: 'Ongoing Monitoring', desc: 'Weekly Map Pack rank tracking, monthly reporting on call volume and new patient inquiries attributed to digital channels.' },
  ],
  lawyers:      [
    { title: 'Practice Area Strategy', desc: 'Keyword research for each practice area, competitive analysis against top-ranking firms, and a prioritized content roadmap.' },
    { title: 'Compliant Campaign Setup', desc: 'Google Ads structured to comply with state bar rules — no guarantee language, compliant testimonials, proper disclaimers.' },
    { title: 'Authority Content', desc: 'In-depth practice-area guides, FAQ pages, and case study content that builds topical authority and generates organic leads.' },
    { title: 'LSA Management', desc: 'Google Local Service Ads setup with Screened verification and ongoing lead quality management.' },
    { title: 'Monthly Reporting', desc: 'Clear reporting on cost per case lead, organic ranking movement, and source attribution for every incoming inquiry.' },
  ],
  'real-estate': [
    { title: 'Market & Keyword Research', desc: 'Identification of the neighborhood-specific and property-type keywords where you can rank and where your target buyers search.' },
    { title: 'Location Page Creation', desc: 'Dedicated, unique landing pages for each neighborhood and community you serve — optimized for local property searches.' },
    { title: 'GBP Optimization', desc: 'Agent or brokerage GBP setup with correct categories, service areas, regular posts, and review management.' },
    { title: 'Listing Campaigns', desc: 'Paid campaigns for new listings targeting local buyer audiences — maximizing visibility at the critical go-to-market moment.' },
    { title: 'Lead Attribution', desc: 'Tracking setup that shows exactly which digital channels generate buyer and seller inquiries — so you know your ROI.' },
  ],
  restaurants:  [
    { title: 'GBP Optimization', desc: 'Category optimization, menu upload, photo refresh (20+ images), regular weekly posts, and attribute completion — the highest-ROI starting point.' },
    { title: 'Review Strategy', desc: 'Review management across Google, Yelp, TripAdvisor, and OpenTable with same-day response to all reviews including negative ones.' },
    { title: 'Direct Order Campaigns', desc: 'Campaigns driving traffic to your direct ordering page — reducing dependency on third-party delivery commissions.' },
    { title: 'Social Content', desc: 'Weekly Instagram and Facebook content showcasing your menu, events, and atmosphere — building local discovery and engagement.' },
    { title: 'Event Promotion', desc: 'Paired paid social and GMB campaigns for private events, seasonal menus, and special promotions.' },
  ],
  contractors:  [
    { title: 'LSA Setup', desc: 'Google Local Service Ads configuration with Google Guarantee verification — the highest-converting ad format for contractor lead generation.' },
    { title: 'Service Area Pages', desc: 'Individual landing pages for each city and county in your service zone with unique, location-specific content.' },
    { title: 'Seasonal Planning', desc: 'Campaign calendar mapped to your service seasons — launching 4–6 weeks before peak periods to capture early-intent searchers.' },
    { title: 'Review System', desc: 'Post-job review request workflow via text and email — systematically building your Google rating across your service area.' },
    { title: 'Competitor Tracking', desc: 'Monthly monitoring of competitor LSA rankings, review counts, and ad activity — so you always know where you stand.' },
  ],
  ecommerce:    [
    { title: 'Technical SEO Audit', desc: 'Complete crawl analysis covering canonicalization, indexation, site speed, schema markup, and duplicate content — fixed before any content work.' },
    { title: 'Category Page Optimization', desc: 'On-page optimization of your highest-priority category pages for commercial intent keywords with realistic ranking potential.' },
    { title: 'Product Page Optimization', desc: 'Title, description, schema, and image alt text optimization across priority product pages — targeting long-tail purchase intent.' },
    { title: 'Shopping Campaigns', desc: 'Google Shopping campaign setup and management — product feed optimization, bid strategy, and negative keyword management.' },
    { title: 'Retargeting Setup', desc: 'Abandoned cart retargeting on Google Display and Meta — recovering 15–25% of sessions that left without purchasing.' },
  ],
  startups:     [
    { title: 'Technical Foundation', desc: 'Site speed, crawlability, indexation, schema, and analytics setup — the non-negotiable infrastructure for all subsequent SEO work.' },
    { title: 'Opportunity Mapping', desc: 'Long-tail keyword research identifying the 30–50 terms where your startup can achieve first-page rankings within 90 days.' },
    { title: 'Topic Cluster Build', desc: 'Pillar content and supporting articles covering your core problem domain — building topical authority systematically.' },
    { title: 'Early Link Acquisition', desc: 'PR outreach, content partnerships, and directory placements that build early domain authority without buying links.' },
    { title: 'Investor Reporting', desc: 'Growth dashboards showing organic traffic, keyword rankings, and lead attribution — ready for board meetings and investor updates.' },
  ],
  gyms:         [
    { title: 'GBP Optimization', desc: 'Category, services, photos, description, and Q&A optimization — plus weekly posts that signal active operation to Google\'s local algorithm.' },
    { title: 'Review Generation', desc: 'Member review request workflow via text and email — building your Google rating systematically with authentic member reviews.' },
    { title: 'Membership Campaigns', desc: 'Paid search and social campaigns targeting peak signup periods (January, September) with compelling introductory offers.' },
    { title: 'Social Content', desc: 'Instagram and Facebook content strategy: member transformations, trainer spotlights, class highlights, and community moments.' },
    { title: 'Retention Marketing', desc: 'Email onboarding sequences for new members, milestone celebrations, and re-engagement campaigns for at-risk members.' },
  ],
  salons:       [
    { title: 'GBP Optimization', desc: 'Category, services, photos, attributes, and weekly posts — getting you into the Map Pack for "hair salon near me" searches fast.' },
    { title: 'Instagram Setup', desc: 'Profile optimization, content calendar, and before-and-after content strategy that drives local discovery and new client bookings.' },
    { title: 'Booking Integration', desc: 'Direct booking link in your GBP and website — connecting Vagaro, Booksy, StyleSeat, or Square for frictionless appointment flow.' },
    { title: 'Review Building', desc: 'Post-appointment review request via text — building Google and Yelp ratings consistently with authentic client reviews.' },
    { title: 'Retention Campaigns', desc: 'SMS and email follow-up to bring clients back at the right intervals — based on their service history and rebooking patterns.' },
  ],
  'auto-repair': [
    { title: 'GBP & Review Optimization', desc: 'Full GBP audit, category correction, photo upload, and review request system — typically the fastest-impact starting point for shops.' },
    { title: 'LSA Setup', desc: 'Google Local Service Ads with Google Guaranteed badge — builds instant trust for a service category where trust is the #1 decision factor.' },
    { title: 'Service-Specific Pages', desc: 'Individual landing pages for your major service categories — brakes, oil change, tires, transmission — optimized for service-specific searches.' },
    { title: 'Seasonal Content', desc: 'Spring (AC service), fall (winterizing), winter (battery and wipers) campaigns capturing seasonal demand spikes.' },
    { title: 'Reputation Monitoring', desc: 'Daily review monitoring across Google and Yelp with same-day professional responses and flag-and-resolve workflows for negative reviews.' },
  ],
  accountants:  [
    { title: 'Ideal Client Identification', desc: 'Defining your target client type (industry, size, service need) and building a strategy specifically designed to attract that profile.' },
    { title: 'Niche Content Build', desc: 'Articles, guides, and FAQ content targeting the specific searches your ideal client type performs throughout the year.' },
    { title: 'GBP Optimization', desc: 'Local SEO for your firm, including GBP optimization, local citations, and service-area landing pages for your target geography.' },
    { title: 'Tax Season Campaigns', desc: 'Google Ads campaigns launching 6 weeks before tax season peak — capturing the highest-intent, highest-conversion window.' },
    { title: 'Lead Attribution', desc: 'Tracking that shows which content and campaigns generate inquiries — so you can scale what works and cut what doesn\'t.' },
  ],
  healthcare:   [
    { title: 'HIPAA-Compliant Setup', desc: 'Analytics and ad tracking configured to avoid PHI capture — meeting HIPAA requirements while maintaining optimization capability.' },
    { title: 'GBP Optimization', desc: 'Provider or practice GBP with correct specialty categories, service list, and photo optimization for local patient discovery.' },
    { title: 'Condition-Specific Content', desc: 'Articles and landing pages targeting the conditions, treatments, and services your patients actively search for.' },
    { title: 'Review Management', desc: 'Professional review responses across Google and Healthgrades — with protocols that protect privacy and demonstrate care.' },
    { title: 'Patient Flow Reporting', desc: 'Monthly reporting on new patient inquiries attributed to digital channels — connecting marketing investment to practice revenue.' },
  ],
};

/**
 * Generate full content for a service × niche page
 */
export function buildNicheContent(serviceSlug, nicheSlug) {
  const niche = NICHES.find(n => n.slug === nicheSlug);
  if (!niche) return null;

  // Build a readable service title from slug
  const svcTitleMap = {
    'seo-services':          'SEO',
    'gmb-optimization':      'Google Business Profile Optimization',
    'web-development':       'Web Development',
    'social-media-marketing':'Social Media Marketing',
    'content-marketing':     'Content Marketing',
    'graphic-designing':     'Graphic Design',
    'video-editing':         'Video Editing',
    'ppc-advertising':       'PPC Advertising',
    'ai-automation':         'AI Automation',
    'chatbot-development':   'Chatbot Development',
  };
  const svcTitle = svcTitleMap[serviceSlug] || serviceSlug.replace(/-/g, ' ');

  // Six reasons why Rankston for this specific service + niche combination
  // (~35 words each × 6 = ~210 words added per page)
  const whyChoose = [
    {
      title: `${niche.label}-Specific Strategy`,
      desc: `We do not apply the same ${svcTitle} playbook to every industry. The strategy we build for ${niche.label.toLowerCase()} accounts for how your specific customers search, what they trust, and what moves them to take action — knowledge that only comes from actual experience in your market.`,
    },
    {
      title: 'No Long-Term Contracts',
      desc: `Every Rankston program runs on a month-to-month basis. You stay because the results are measurable and the relationship is working — not because you signed a 12-month contract at a time when you had limited information about what the results would actually look like.`,
    },
    {
      title: 'Transparent Monthly Reporting',
      desc: `Each month you receive a clear report showing exactly what was executed, what ranking or visibility changes occurred, how many leads were generated, and what the next 30 days look like. No agency speak, no hiding weak months — just honest data and clear next steps.`,
    },
    {
      title: 'Dedicated Account Manager',
      desc: `Your account is managed by one person who knows your business, understands your goals, and responds within one business day. You are never passed between account managers or left wondering who is responsible for your program's results.`,
    },
    {
      title: 'Results-First Approach',
      desc: `We measure success by the business outcomes that matter to ${niche.label.toLowerCase()} businesses — new customers, booked appointments, leads generated, and revenue attributed to digital marketing channels — not by vanity metrics like impressions, reach, or follower counts that do not translate to business growth.`,
    },
    {
      title: 'Proven ${svcTitle} Process',
      desc: `Our ${svcTitle} methodology has been refined across hundreds of client engagements. Every step is documented, repeatable, and adaptable to your specific market conditions. You benefit from accumulated experience rather than being the test case for an agency figuring out your industry for the first time.`,
    },
  ];

  // Closing paragraph (~120 words)
  const conclusion = `${svcTitle} for ${niche.label} businesses is not a one-size-fits-all service — and working with an agency that understands this difference produces meaningfully better results. The strategies that drive new patients for a dental practice differ from those that generate seller leads for a real estate agent, just as the content that builds trust with a legal client differs from what converts a restaurant visitor into a regular. Rankston brings both the ${svcTitle} technical knowledge and the ${niche.label.toLowerCase()} market knowledge that effective execution requires. If you are ready to invest in a program built specifically for your business and your market, request a free strategy call — we will assess your current digital presence, your competitive landscape, and your fastest path to measurable growth.`;

  return {
    heroSub:     (NICHE_HERO_SUB[nicheSlug]  || (() => ''))(svcTitle),
    introP1:     (NICHE_INTRO_P1[nicheSlug]  || (() => ''))(svcTitle),
    introP2:     (NICHE_INTRO_P2[nicheSlug]  || (() => ''))(svcTitle),
    benefits:    NICHE_BENEFITS[nicheSlug]  || [],
    process:     NICHE_PROCESS[nicheSlug]   || [],
    painPoints:  NICHE_PAIN_POINTS[nicheSlug]  || [],
    caseStudies: NICHE_CASE_STUDIES[nicheSlug] || [],
    faqs:        NICHE_FAQS[nicheSlug]         || [],
    whyChoose,
    conclusion,
    niche,
  };
}
