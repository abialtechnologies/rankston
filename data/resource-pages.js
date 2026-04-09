/**
 * Resource Pages Data
 * Long-tail | Problem-based | Comparison pages
 * Routes: /resources/[slug]
 */

// Generates 5 rich body sections (~800 words) for any resource page
function generateSections(page) {
  const { title, type } = page;
  const a = page.compareA?.label || 'Option A';
  const b = page.compareB?.label || 'Option B';

  if (type === 'comparison') {
    return [
      { heading: `Understanding the Core Difference Between ${a} and ${b}`, content: `Before comparing ${a} and ${b} head-to-head, it is important to understand what each channel fundamentally is and what it is not. They are not interchangeable strategies serving the same goal through different means — they are distinct tools that address different stages of the customer journey, operate on different timelines, require different skills to execute well, and deliver different types of return on investment. Businesses that treat them as substitutes typically underperform on both. The right question is not which is better in absolute terms, but which combination is right for your specific business model, growth stage, and goals at this moment in time.` },
      { heading: `How to Evaluate ${a} for Your Business`, content: `${a} works best for businesses with specific characteristics. The businesses that see the strongest returns share several traits: they understand who their target audience is and how that audience searches, they have realistic expectations about timeline and compounding return, and they invest consistently rather than stopping and starting based on short-term impatience. The ROI data consistently shows that ${a} investment made over 12 months or more outperforms almost any other single marketing channel for businesses that fit this profile. The businesses that fail with ${a} almost always share one common trait: they expected results faster than the channel is designed to deliver, or they underinvested to a level where meaningful results were not possible.` },
      { heading: `How to Evaluate ${b} for Your Business`, content: `${b} works best under a different but often complementary set of conditions. It is particularly effective when you need immediate results, when you want to test messaging or offers quickly before investing in longer-term content, or when you have a specific audience segment to reach with precision. The businesses that fail with ${b} typically do so for one of three reasons: unrealistic ROI expectations before optimization data is available, stopping campaigns before collecting enough data to make meaningful improvements, or sending traffic to a website or landing page that is not built to convert. The channel is rarely the problem in these cases — the setup and the patience to optimize is.` },
      { heading: `The Strategic Case for Using Both`, content: `The most effective digital marketing programs do not choose between ${a} and ${b} — they use both in a coordinated system where each channel strengthens the other. Data from one informs strategy for the other, and together they cover more of the customer journey than either can cover alone. The businesses that have built the most durable lead generation engines have typically done so by using the faster channel to generate immediate revenue and learnings while simultaneously building organic or longer-term assets that compound over time and reduce dependency on paid or short-cycle spend. This approach is more capital-efficient over a 24-month horizon even when it requires higher initial investment.` },
      { heading: `Making the Right Decision`, content: `If you are early-stage with an immediate revenue need and limited runway, start with the faster channel while making a minimal investment in the longer-term channel simultaneously so compounding begins immediately. If you are established with consistent revenue and looking to grow more efficiently, invest more heavily in the channel with the highest long-term multiplier. If you are running both and not satisfied with results from either, the problem is almost certainly execution quality — not channel selection. The most common fix is improving landing page quality, targeting specificity, content depth, or conversion rate optimization — not switching channels entirely. For a personalized assessment, contact our team for a free strategy session tailored to your specific business situation.` },
      { heading: `Why US Businesses Choose Rankston`, content: `Rankston was built specifically for US businesses that require a level of transparency, accountability, and market-specific expertise that larger agencies rarely deliver at accessible price points. Our clients receive a dedicated account manager as a single point of contact, fixed monthly pricing without hidden fees or long-term contracts, and honest monthly reporting that shows exactly what moved and what did not — with a clear plan for every underperforming area rather than dashboards designed to obscure problems. We have worked across hundreds of US businesses in competitive markets and bring accumulated knowledge that directly accelerates results. Whether you are choosing between ${a} and ${b} or implementing both in a coordinated strategy, our team will give you an honest assessment of what makes sense for your specific situation before recommending anything.` },
    ];
  }

  if (type === 'problem') {
    return [
      { heading: `Why This Problem Is More Common Than It Should Be`, content: `The issue described by "${title}" affects a significant percentage of US businesses at some point in their digital marketing journey — often multiple times as their market, competition, or digital presence evolves. The reason it persists is that the surface-level symptoms can have a dozen different root causes, and the wrong diagnosis leads to the wrong fix. Most businesses waste time and budget treating symptoms rather than causes — adding traffic when the real problem is conversion rate, or adding content when the real problem is technical. Accurate diagnosis before investment is the single most important step, and it is where most independent troubleshooting efforts break down without professional support.` },
      { heading: `Identifying Your Specific Root Cause`, content: `Our experience across hundreds of US businesses on this exact problem reveals a consistent pattern. The vast majority of cases fall into one of four root cause categories: technical issues preventing proper crawling or indexing, content issues where pages do not match the intent of actual customer searches, authority issues where the site has not built enough external credibility to rank competitively, or conversion issues where traffic exists but the page experience fails to drive action. The fastest way to identify your specific cause is a structured audit examining each layer systematically. Attempting to skip the diagnostic step and move directly to implementation based on intuition almost always results in addressing the wrong problem, which wastes both time and budget.` },
      { heading: `A Step-by-Step Fix Framework`, content: `Fixing this problem permanently requires addressing root causes in the correct order, starting with the foundation. The right sequence is: first, resolve any technical issues preventing Google from reading pages correctly; second, ensure existing pages match the actual search intent of target keywords; third, close the most critical content gaps competitors are currently exploiting; fourth, build the authority signals that tell Google your business is credible enough to rank; and fifth, measure and optimize conversion rate once traffic flows correctly. Each step builds on the previous one, which is why skipping steps consistently costs more time and money than it saves. The businesses that work through each layer systematically always outperform those that try to shortcut the process.` },
      { heading: `Realistic Results and Timelines`, content: `For purely technical fixes such as noindex tags, crawl blocks, or canonical errors, results are often visible within one to four weeks of correction. For content and on-page improvements, ranking movement typically takes four to eight weeks as Google re-crawls and re-evaluates updated pages. For authority building through new backlinks and citations, significant ranking improvement typically takes two to four months to fully materialize. For comprehensive solutions requiring all of the above, plan for a three to six month timeline to see the full effect, with visible incremental progress appearing well before the complete result is achieved. These timelines assume consistent execution and realistic competitive environments, and will vary based on market intensity.` },
      { heading: `When Professional Help Is the Right Investment`, content: `Many businesses successfully resolve this problem independently using a structured framework. However, professional expertise is likely worth the investment in several specific situations: when the problem persists after 60 to 90 days of consistent independent effort, when your competitive market requires specialist knowledge beyond general best practices, when your business is losing significant revenue every month the problem continues and speed matters, or when you lack the internal bandwidth to implement a comprehensive fix while managing existing operations simultaneously. Rankston offers a free diagnostic session for businesses dealing with this challenge, with honest recommendations about what the root cause is and whether our services are the right fit to address it effectively.` },
      { heading: `Why US Businesses Choose Rankston`, content: `Rankston was built specifically for US businesses that require a level of transparency, accountability, and market-specific expertise that larger agencies rarely deliver at accessible price points. Our clients receive a dedicated account manager as a single point of contact, fixed monthly pricing without hidden fees or long-term contracts, and honest monthly reporting that shows exactly what moved and what did not — with a clear plan for every underperforming area. We have worked across hundreds of US businesses dealing with this exact challenge and bring accumulated diagnostic and execution knowledge that directly shortens the time to resolution. Whether the problem turns out to be a quick technical fix or a comprehensive strategic rebuild, we will give you an honest assessment of what it is and what it will take to solve it before committing to any program.` },
    ];
  }

  // long-tail
  return [
    { heading: `What to Know Before Investing in ${title}`, content: `The demand for ${title.toLowerCase()} has grown significantly as US businesses recognize the competitive advantage of properly structured digital marketing. Despite growing awareness, a significant percentage of businesses either invest in the wrong approach for their situation or work with providers who apply generic strategies without market-specific knowledge to make them effective. Understanding what realistic results look like, what effective execution requires, and what warning signs distinguish quality providers from poor ones is essential before making any investment in this area.` },
    { heading: `The Rankston Approach to ${title}`, content: `Our approach is built on three principles applied consistently across every engagement regardless of industry, market, or budget. First, strategy before tactics — we never start executing without understanding your specific market, competitive position, and measurable goals, because the same tactic that works brilliantly in one market can fail completely in another. Second, transparency in everything — you receive a written strategy document before work begins, clear deliverables with defined timelines, and monthly reporting showing exactly what was done and what moved. Third, results over activity — we measure success by leads, revenue, and business outcomes rather than the volume of tasks completed or impressions delivered.` },
    { heading: `Key Success Factors for ${title}`, content: `Businesses that see the strongest results from ${title.toLowerCase()} share several characteristics worth understanding before you invest. They have realistic expectations about timeline — most sustainable digital marketing programs produce their best results in months 6 through 12 as compounding effects accumulate, not in weeks 1 through 4. They maintain consistency — programs that pause and restart every time results dip reset their compounding curve back toward zero each time. They provide good information — deep knowledge of your business, customers, and competitive differentiation is the most valuable input your marketing partner can receive, and no agency can substitute for it with generic research alone.` },
    { heading: `What Results Look Like Across Timeframes`, content: `Within the first 30 days: a clear strategic plan, initial technical implementation, and baseline measurement systems in place. Within 60 to 90 days: early indicators of movement including ranking improvements, increased visibility, or first attribution data from new channels. Within 6 months: meaningful, measurable results including lead volume, ranking improvements across target keywords, and a clear direction on which tactics are compounding fastest. Within 12 months: a mature program generating leads consistently, with a clear ROI, and a sustainable competitive advantage in your market. These timelines assume consistent execution and will vary based on competitive intensity and the depth of investment.` },
    { heading: `Getting Started with ${title}`, content: `The most valuable first step is a free strategy session with our team — a conversation where we learn your business, your market, and your goals before making any recommendations. We will tell you honestly whether we are the right fit, what the opportunity looks like in your specific market, and what a realistic investment and return profile looks like for your situation. We do not use high-pressure sales or make guarantees we cannot deliver. Our business is built on client results and referrals, which means we decline engagements that are not a good fit and accept only clients we believe we can genuinely and sustainably help. Contact us through any channel on this page to begin at no cost or commitment — a 30-minute conversation has helped hundreds of US businesses find clarity on their next best marketing investment.` },
    { heading: `Why US Businesses Choose Rankston for ${title}`, content: `Rankston was built specifically for US businesses that need professional digital marketing at a level of transparency and accountability that larger agencies rarely deliver. Our clients receive a dedicated account manager — a single point of contact who knows their business, responds within one business day, and attends a monthly strategy review call. They receive fixed monthly pricing with no hidden fees, no surprise invoices, and no long-term contracts that lock them in before they have seen results. They receive honest reporting that shows what is working alongside what is not, with clear plans to address underperforming areas rather than hiding them in dashboards full of vanity metrics. They benefit from a team that has worked across hundreds of US businesses in dozens of competitive markets, bringing the accumulated knowledge and tested process that accelerates results compared to working with an agency entering your space for the first time.` },
  ];

}

export const RESOURCE_PAGES = [


  /* ─── LONG-TAIL LANDING PAGES ───────────────────────────────── */
  {
    slug: 'affordable-seo-services-small-business-usa',
    type: 'long-tail',
    title: 'Affordable SEO Services for Small Business USA',
    h1: 'Affordable SEO Services for Small Businesses in the USA',
    metaDesc: 'Looking for affordable SEO for your small business? Rankston delivers enterprise-level SEO strategies at small business prices — no long contracts, real results.',
    intro: 'Small business owners often believe effective SEO requires a massive budget — it does not. The right strategy, properly executed and focused on the highest-impact activities first, produces compounding returns that outperform expensive ad campaigns over a 12-month horizon. This guide covers what affordable small business SEO should include at every budget level, what realistic results look like month-by-month, and how to evaluate whether the agency you are considering is structured to deliver real business outcomes rather than vanity metrics. Rankston was built specifically to make enterprise-quality SEO execution accessible to small businesses across the USA.',
    keywords: ['affordable seo services usa', 'cheap seo for small business', 'small business seo packages usa', 'low cost seo services'],
    accentColor: '#10B981',
    relatedService: 'seo-services',
    faqs: [
      { q: 'How much does SEO cost for a small business?', a: 'Small business SEO typically ranges from $500–$2,500/month depending on competition and goals. Rankston offers transparent, scalable packages starting from $499/month with no long-term contracts.' },
      { q: 'How long before a small business sees SEO results?', a: 'Most small businesses see measurable improvements in 3–4 months. Significant ranking improvements and lead increases typically occur by month 5–6.' },
      { q: 'Is SEO worth it for small businesses?', a: 'Yes — SEO delivers an average ROI of 275% for small businesses vs. 36% for paid ads. It compounds over time, meaning month 12 results cost the same as month 1 but deliver far more.' },
      { q: 'What\'s included in small business SEO?', a: 'Technical SEO audit, keyword research, on-page optimization, Google Business Profile setup, local citation building, monthly rank tracking, and content strategy.' },
    ],
  },

  {
    slug: 'best-digital-marketing-agency-usa',
    type: 'long-tail',
    title: 'Best Digital Marketing Agency USA',
    h1: 'Best Digital Marketing Agency in the USA — What to Look For',
    metaDesc: 'Find the best digital marketing agency in the USA. Rankston combines SEO, PPC, web design, and AI automation into one unified growth system for US businesses.',
    intro: 'The best digital marketing agency is not the biggest one, the most award-winning one, or the one with the most impressive client logo wall — it is the one that understands your specific market, your specific customer acquisition challenges, and can prove results in businesses similar to yours before you commit to a single dollar. This guide covers exactly what separates top-performing agencies from average ones, which questions to ask in every sales conversation, and what to demand in writing before signing any contract.',
    keywords: ['best digital marketing agency usa', 'top marketing agency usa', 'digital marketing company usa', 'best online marketing company'],
    accentColor: '#6366F1',
    relatedService: 'seo-services',
    faqs: [
      { q: 'How do I choose the best digital marketing agency?', a: 'Look for transparent reporting, industry-specific experience, clear KPIs agreed upfront, and case studies from businesses similar to yours. Avoid agencies that guarantee specific rankings — Google\'s algorithm makes that impossible to guarantee ethically.' },
      { q: 'What services should a full-service digital marketing agency offer?', a: 'SEO, PPC/Google Ads, social media marketing, content marketing, web development, email marketing, and reporting/analytics. Ideally under one roof with unified strategy.' },
      { q: 'How much does a digital marketing agency cost in the USA?', a: 'Full-service agencies typically charge $2,500–$10,000+/month. Specialized agencies (SEO only, PPC only) range from $1,000–$5,000/month. Always clarify what\'s included and how success is measured.' },
      { q: 'Should I hire a local or national digital marketing agency?', a: 'For local businesses, a local agency adds context but isn\'t required — what matters far more is industry experience and proven results. Many of the best agencies work fully remotely with clients nationwide.' },
    ],
  },

  {
    slug: 'local-seo-services-near-me',
    type: 'long-tail',
    title: 'Local SEO Services Near Me — USA',
    h1: 'Local SEO Services — Dominate Your Local Market in the USA',
    metaDesc: 'Local SEO services that get your business into the Google Map Pack across the USA. Rankston specializes in local SEO for every city, every industry.',
    intro: 'When someone searches "coffee shop near me" or "plumber in [city]" — those results don\'t happen by accident. Local SEO is the science of making your business the first thing they see. Here\'s exactly how it works and what it takes to win.',
    keywords: ['local seo services near me', 'local seo company usa', 'google maps seo', 'map pack ranking service'],
    accentColor: '#22C55E',
    relatedService: 'gmb-optimization',
    faqs: [
      { q: 'What is local SEO and how is it different from regular SEO?', a: 'Local SEO focuses on ranking in your specific geographic area — particularly in Google\'s Map Pack (the 3 business listings shown on maps). Regular SEO targets organic rankings nationally. Both matter, but local SEO drives the highest-intent leads for brick-and-mortar businesses.' },
      { q: 'How long does it take to rank in the Google Map Pack?', a: 'With proper optimization, most businesses see meaningful Map Pack movement within 60–90 days. Top-3 placement in competitive markets typically takes 4–6 months of consistent work.' },
      { q: 'What factors determine local SEO rankings?', a: 'Google Business Profile completeness, review quantity and quality, website relevance and authority, citation consistency (NAP — Name, Address, Phone), and behavioral signals (clicks, calls, direction requests).' },
      { q: 'Do I need a physical address for local SEO?', a: 'For Map Pack rankings, yes — Google requires a verified business address. Service-area businesses (plumbers, cleaners) can rank without displaying their address publicly, but still need a verified location.' },
    ],
  },

  {
    slug: 'seo-services-for-startups-usa',
    type: 'long-tail',
    title: 'SEO Services for Startups USA',
    h1: 'SEO for Startups — Building Organic Growth from Zero',
    metaDesc: 'SEO services built for US startups. Rankston helps early-stage companies build topical authority, rank for competitive keywords, and generate leads without burning runway on ads.',
    intro: 'Startups face a unique SEO challenge: competing against established brands with zero domain authority and limited budget. The solution isn\'t to do less — it\'s to do it smarter. Here\'s the startup SEO playbook that works.',
    keywords: ['seo services for startups usa', 'startup seo strategy', 'seo for new business usa', 'startup marketing seo'],
    accentColor: '#8B5CF6',
    relatedService: 'seo-services',
    faqs: [
      { q: 'When should a startup invest in SEO?', a: 'Ideally from month 1. SEO compounds over time — every month you delay is a month of compounding you miss. Even $500/month in strategic SEO from day one builds an asset that pays dividends for years.' },
      { q: 'What\'s the fastest way for a startup to rank on Google?', a: 'Target long-tail, low-competition keywords first. Build topical authority by becoming the definitive resource on your niche. Fix technical SEO issues. Earn early links through PR and content partnerships. This is faster than trying to rank for broad, competitive terms.' },
      { q: 'Should startups use SEO or paid ads?', a: 'Both. Paid ads provide immediate leads while organic SEO builds. In the long run, organic leads cost 61% less than paid leads. The ideal startup allocation: 40% paid, 60% SEO in years 1–2, then shift heavily toward SEO as rankings improve.' },
      { q: 'How do you measure SEO success for a startup?', a: 'Track keyword rankings, organic traffic, leads from organic search, and CAC (Customer Acquisition Cost) from organic vs. paid. Benchmark monthly and compare quarter-over-quarter growth as the primary success signal.' },
    ],
  },

  {
    slug: 'ecommerce-seo-services-usa',
    type: 'long-tail',
    title: 'eCommerce SEO Services USA',
    h1: 'eCommerce SEO Services — Rank Your Online Store Across the USA',
    metaDesc: 'eCommerce SEO that drives product sales, not just traffic. Rankston specializes in Shopify, WooCommerce, and custom store SEO across the entire USA.',
    intro: 'eCommerce SEO is both the highest-potential and most technically complex form of search engine optimization available to online retailers. With hundreds or thousands of product pages, complex category hierarchies, duplicate content risks, and direct head-to-head competition against Amazon on high-intent commercial queries, ranking successfully requires a systematic approach that addresses technical foundations before content strategy, and content strategy before link building. This guide covers the full eCommerce SEO framework that drives sustainable organic revenue growth.',
    keywords: ['ecommerce seo services usa', 'shopify seo services', 'woocommerce seo', 'online store seo usa'],
    accentColor: '#F59E0B',
    relatedService: 'seo-services',
    faqs: [
      { q: 'How is eCommerce SEO different from regular SEO?', a: 'eCommerce SEO involves optimizing thousands of product and category pages, managing duplicate content, implementing product schema markup, optimizing for shopping intent keywords, and competing directly with Amazon and major retailers.' },
      { q: 'What\'s the best SEO strategy for a Shopify store?', a: 'Start with technical SEO (site speed, crawlability, canonical tags), then optimize collection/category pages for broad keywords, product pages for specific long-tail terms, and build a blog targeting purchase-intent informational content.' },
      { q: 'Can you rank against Amazon?', a: 'Not on the same keywords directly — but you can outrank Amazon on niche, long-tail product queries, informational content, and brand-specific searches. We identify these "Amazon blind spots" and build content specifically to capture them.' },
      { q: 'How long until my Shopify store gets organic sales?', a: 'Most Shopify stores in non-hyper-competitive niches see first organic sales within 3–4 months. Significant organic revenue typically builds from months 6–12 as domain authority grows.' },
    ],
  },

  {
    slug: 'google-ads-management-services-usa',
    type: 'long-tail',
    title: 'Google Ads Management Services USA',
    h1: 'Google Ads Management Services — ROI-Focused PPC for US Businesses',
    metaDesc: 'Expert Google Ads management for US businesses. Rankston manages search, shopping, display, and YouTube campaigns that maximize ROI on every dollar spent.',
    intro: 'Google Ads is the fastest way to generate qualified leads and sales for almost any US business — but only when managed correctly with the right structure, the right targeting, and the right landing page experience at the other end of every click. Poorly managed campaigns consistently waste 30 to 60 percent of their monthly budget on clicks that were never going to convert, from searchers who were never the right customer at the right moment. This guide covers what professional Google Ads management actually involves and how to evaluate whether your current campaigns are performing at their potential.',
    keywords: ['google ads management services usa', 'ppc management company usa', 'google ads agency usa', 'adwords management'],
    accentColor: '#EF4444',
    relatedService: 'ppc-advertising',
    faqs: [
      { q: 'How much should I spend on Google Ads?', a: 'Budget depends entirely on your industry, location, and goals. A competitive market like personal injury law requires $5,000+/month to compete. A local restaurant may get strong results with $800–$1,500/month. We recommend starting with enough budget to generate 50+ clicks per week for meaningful data.' },
      { q: 'What\'s a good ROAS for Google Ads?', a: 'Industry benchmarks vary. eCommerce averages 4–6x ROAS. Lead generation campaigns are measured by cost-per-lead — good benchmarks range from $20 (local services) to $200+ (legal, financial). We set specific ROAS/CPL targets with every client upfront.' },
      { q: 'How long until Google Ads starts working?', a: 'Google Ads can start generating leads within 24–48 hours of launch. However, the first 30–60 days are a learning/optimization phase. Expect 60–90 days for fully optimized, consistently profitable campaigns.' },
      { q: 'Why are my Google Ads not converting?', a: 'The most common causes: poor keyword targeting (showing for irrelevant searches), weak landing pages, mismatch between ad copy and landing page content, or insufficient bid/budget to compete for high-intent searches.' },
    ],
  },

  /* ─── PROBLEM-BASED PAGES ────────────────────────────────────── */
  {
    slug: 'why-is-my-website-not-ranking-on-google',
    type: 'problem',
    title: 'Why Is My Website Not Ranking on Google?',
    h1: 'Why Is My Website Not Ranking on Google? (Real Answers)',
    metaDesc: 'Your website isn\'t ranking on Google — here\'s exactly why. A step-by-step diagnostic covering the most common causes and how to fix each one.',
    intro: 'If your website isn\'t appearing on Google, there\'s a specific reason — and it\'s fixable. This guide walks through every major cause, from technical issues to content problems to authority gaps, with actionable fixes for each.',
    keywords: ['why is my website not ranking on google', 'website not showing on google', 'site not ranking', 'why cant google find my website'],
    accentColor: '#3B82F6',
    relatedService: 'seo-services',
    faqs: [
      { q: 'How do I know if my website is indexed by Google?', a: 'Search site:yourdomain.com in Google. If results appear, you\'re indexed. If nothing shows, Google hasn\'t indexed your site yet — often caused by a noindex tag, blocked robots.txt, or a very new domain.' },
      { q: 'How long does it take for Google to index a new website?', a: 'New sites typically take 1–4 weeks to get indexed. Submitting your sitemap via Google Search Console speeds this up significantly. Individual pages on established sites usually index within days.' },
      { q: 'What\'s the fastest way to improve Google rankings?', a: 'Fix technical SEO issues (page speed, mobile usability, indexation), improve on-page SEO for your target keywords, build internal links, and earn a few high-quality backlinks. For local businesses, Google Business Profile optimization often produces results fastest.' },
      { q: 'Does website age affect Google rankings?', a: 'Domain age is a minor ranking factor but not a major one. Content relevance, backlink authority, and user experience signals matter far more. New sites can rank competitively within 6–12 months with proper SEO.' },
    ],
  },

  {
    slug: 'how-to-get-more-leads-online-usa',
    type: 'problem',
    title: 'How to Get More Leads Online USA',
    h1: 'How to Get More Leads Online — A Complete Guide for US Businesses',
    metaDesc: 'Not getting enough leads from your website? This complete guide covers every proven lead generation channel for US businesses in 2025 — with tactics that actually work.',
    intro: 'Most businesses aren\'t lacking traffic — they\'re lacking conversions. Before adding more traffic channels, the single biggest lever is usually improving how your existing traffic converts. Here\'s the full lead generation playbook.',
    keywords: ['how to get more leads online usa', 'online lead generation usa', 'get more customers online', 'increase website leads'],
    accentColor: '#10B981',
    relatedService: 'ppc-advertising',
    faqs: [
      { q: 'What is the fastest way to generate leads online?', a: 'Google Ads and Facebook Ads deliver the fastest results — often within 24–48 hours. For sustainable, lower-cost leads, SEO and content marketing are better long-term investments. Most US businesses benefit from running both simultaneously.' },
      { q: 'Why is my website getting traffic but no leads?', a: 'The most common causes: unclear value proposition, weak or missing calls-to-action, slow page load times, lack of mobile optimization, and forms with too many fields. A CRO (Conversion Rate Optimization) audit typically reveals quick wins.' },
      { q: 'How many leads should my website be generating?', a: 'Industry averages vary. B2B SaaS sites convert 5–8% of visitors into leads. Local service businesses average 2–4%. eCommerce sites average 1–3% add-to-cart. If you\'re below these benchmarks, CRO work can dramatically improve results.' },
      { q: 'What\'s the best lead generation tool for small businesses?', a: 'Your Google Business Profile and website are the most important owned assets. Beyond that: Google Ads for immediate leads, email marketing for converting existing contacts, and SEO for long-term sustainable lead flow.' },
    ],
  },

  {
    slug: 'google-my-business-not-showing-up',
    type: 'problem',
    title: 'Google My Business Not Showing Up',
    h1: 'Google Business Profile Not Showing Up? Here\'s How to Fix It',
    metaDesc: 'Your Google Business Profile isn\'t showing in search results or the Map Pack. Here are the exact reasons and how to get it ranking in 30 days.',
    intro: 'Google Business Profile (formerly Google My Business) is the most valuable free marketing tool for local businesses. When it doesn\'t show up, you\'re invisible to thousands of nearby customers every day. Here\'s the complete diagnostic and fix guide.',
    keywords: ['google my business not showing up', 'gmb not appearing in search', 'google business profile not ranking', 'why is my google listing not showing'],
    accentColor: '#22C55E',
    relatedService: 'gmb-optimization',
    faqs: [
      { q: 'Why is my Google Business Profile not showing in the Map Pack?', a: 'The most common reasons: incomplete profile (missing categories, photos, hours), low review count, proximity issues (searcher is far from your location), keyword mismatch between your GBP and the search query, or a new/unverified listing.' },
      { q: 'How do I get my business to rank higher on Google Maps?', a: 'Optimize every field in your GBP (categories, description, services, attributes), upload 20+ high-quality photos, generate Google reviews consistently, build local citations, and post weekly GBP updates.' },
      { q: 'How long does Google Business Profile verification take?', a: 'Video verification (now standard) typically takes 1–3 business days. Postcard verification takes 5–14 days. Some businesses qualify for instant verification if they have an existing Google Search Console account.' },
      { q: 'Can a competitor flag my Google Business Profile?', a: 'Yes, and this is a real risk especially in competitive industries. We monitor GBP listings for suspicious edits or suspension triggers and respond immediately to protect your listing.' },
    ],
  },

  {
    slug: 'website-getting-traffic-but-no-conversions',
    type: 'problem',
    title: 'Website Getting Traffic But No Conversions',
    h1: 'Website Getting Traffic But No Conversions? Here\'s Why',
    metaDesc: 'Traffic without conversions is a solved problem. This guide walks through every cause of low conversion rates and the exact fixes that work for US businesses.',
    intro: 'High traffic with zero conversions is actually more common than you\'d think — and it\'s almost always a solvable problem. The causes fall into three categories: wrong traffic, wrong message, or wrong landing experience.',
    keywords: ['website traffic but no conversions', 'no conversions from website', 'website visitors not converting', 'increase website conversion rate'],
    accentColor: '#F97316',
    relatedService: 'web-development',
    faqs: [
      { q: 'What is a good website conversion rate?', a: 'Industry averages: eCommerce 1–3%, SaaS/B2B 3–7%, local services 3–5%. If your current rate is below these, CRO work will have an outsized impact on revenue without needing more traffic.' },
      { q: 'What causes low website conversion rates?', a: 'Slow page speed, unclear value proposition, weak or missing CTAs, poor mobile experience, mismatch between ad/search intent and landing page content, too many form fields, and lack of trust signals (reviews, credentials, guarantees).' },
      { q: 'How do I fix my website conversion rate?', a: 'Start with a CRO audit: analyze heatmaps (Hotjar, Microsoft Clarity), review session recordings, check page speed (Core Web Vitals), simplify forms to 3–4 fields, add trust signals above the fold, and A/B test headline variations.' },
      { q: 'Should I get more traffic or fix my conversion rate first?', a: 'Always fix conversions first. If your site converts at 1%, doubling traffic doubles leads. But fixing conversions to 3% triples leads from the same traffic. Conversion improvement is the fastest lever.' },
    ],
  },

  {
    slug: 'how-to-rank-higher-on-google-usa',
    type: 'problem',
    title: 'How to Rank Higher on Google USA',
    h1: 'How to Rank Higher on Google in the USA — Complete 2025 Guide',
    metaDesc: 'A complete, actionable guide to ranking higher on Google for US businesses in 2025. Covers technical SEO, content strategy, links, and local optimization.',
    intro: 'Google uses 200+ ranking factors, but 80% of ranking improvement comes from getting 5–7 fundamentals right. This guide covers exactly what those fundamentals are, how to audit your current site performance, and the logical order of operations to move from page 10 to page 1 for your most valuable keywords. Whether you are a local service business or a national brand, these are the core technical, content, and authority-building steps that drive consistent ranking growth in the current search landscape.',
    keywords: ['how to rank higher on google usa', 'improve google ranking', 'rank on first page google', 'google ranking tips 2025'],
    accentColor: '#10B981',
    relatedService: 'seo-services',
    faqs: [
      { q: 'What are the most important Google ranking factors in 2025?', a: 'Content relevance and quality, E-E-A-T (Experience, Expertise, Authoritativeness, Trust), Core Web Vitals (page speed, interactivity, visual stability), mobile usability, backlink authority, and search intent alignment.' },
      { q: 'Does Google Ads help organic rankings?', a: 'No — running Google Ads does not directly improve organic rankings. Google keeps paid and organic results completely separate. However, Ads data can inform your organic keyword strategy.' },
      { q: 'How important are backlinks for ranking on Google?', a: 'Backlinks remain one of the top 3 ranking signals. However, quality matters far more than quantity — one link from a high-authority, relevant site outperforms 100 low-quality links. Focus on earning links from industry publications, local directories, and partner sites.' },
      { q: 'How long does it take to rank on Google\'s first page?', a: 'For new websites: 6–12 months. For established sites targeting new keywords: 2–6 months. For locally competitive terms with proper GMB optimization: 60–120 days. These timelines assume consistent, quality SEO work.' },
    ],
  },

  /* ─── COMPARISON PAGES ───────────────────────────────────────── */
  {
    slug: 'seo-vs-google-ads-which-is-better',
    type: 'comparison',
    title: 'SEO vs Google Ads — Which Is Better for Your Business?',
    h1: 'SEO vs Google Ads — Which Drives Better Results for USA Businesses?',
    metaDesc: 'SEO vs Google Ads: an honest comparison for US business owners. Covers costs, timelines, ROI, and which option is right for your specific situation.',
    intro: 'This is one of the most common questions in digital marketing — and the honest answer is: both. But the right allocation depends entirely on your timeline, budget, and business model. Here\'s the complete breakdown.',
    keywords: ['seo vs google ads', 'seo vs ppc usa', 'organic vs paid search usa', 'seo or google ads which is better'],
    accentColor: '#6366F1',
    relatedService: 'seo-services',
    compareA: { label: 'SEO', pros: ['Compounds over time', 'Lower cost-per-lead long-term', 'Builds brand credibility', 'Free clicks (no CPC)', '24/7 visibility'], cons: ['Takes 3–9 months for results', 'Requires consistent content investment', 'Algorithm changes can impact rankings'] },
    compareB: { label: 'Google Ads', pros: ['Immediate results (24–48 hours)', 'Precise targeting control', 'Scalable with budget', 'Easy A/B testing'], cons: ['Costs stop generating leads when you pause', 'High CPCs in competitive markets', 'Requires ongoing management budget'] },
    verdict: 'For most USA businesses: run Google Ads for immediate lead flow while building SEO for long-term, compounding growth. Once SEO generates consistent leads (typically month 6–12), gradually reduce ad spend on top-of-funnel terms while maintaining spend on high-conversion campaigns.',
    faqs: [
      { q: 'Which has better ROI — SEO or Google Ads?', a: 'Long-term, SEO typically delivers 4–5x higher ROI than Google Ads because the content and authority you build continues generating leads without per-click costs. Short-term, Google Ads wins because results are immediate.' },
      { q: 'What\'s the average cost of SEO vs Google Ads per lead?', a: 'The industry average is $31/lead from organic SEO vs. $55/lead from Google Ads (BrightEdge data). In high-competition industries like legal or insurance, this gap is even wider. However, Google Ads leads are often higher-intent and convert faster.' },
      { q: 'Should a new business start with SEO or Google Ads?', a: 'New businesses with immediate revenue needs should start with Google Ads for quick leads, while simultaneously investing in SEO for long-term growth. If budget is extremely limited, focus on local SEO and GMB optimization first — these are free to set up and produce results within 60–90 days.' },
      { q: 'Can you do both SEO and Google Ads at the same time?', a: 'Yes, and this is the recommended approach for most businesses. PPC data reveals which keywords convert best, informing your organic SEO strategy. Running both also increases your total SERP real estate.' },
    ],
  },

  {
    slug: 'wordpress-vs-webflow-for-seo',
    type: 'comparison',
    title: 'WordPress vs Webflow for SEO — Which Wins?',
    h1: 'WordPress vs Webflow for SEO — An Honest Comparison',
    metaDesc: 'WordPress vs Webflow: which platform is better for SEO in 2025? A technical comparison covering site speed, schema, plugins, and ranking capability.',
    intro: 'Both WordPress and Webflow can rank on the first page of Google. The platform choice matters far less than the quality of your SEO execution. That said, there are meaningful technical differences that impact SEO flexibility and performance.',
    keywords: ['wordpress vs webflow seo', 'wordpress vs webflow for seo', 'webflow seo vs wordpress', 'best website platform for seo'],
    accentColor: '#3B82F6',
    relatedService: 'web-development',
    compareA: { label: 'WordPress', pros: ['Unmatched SEO plugin ecosystem (Yoast, RankMath)', 'Full server-side control', 'Best for large content sites', 'Largest developer community', 'Free (hosting not included)'], cons: ['Requires more maintenance (updates, security)', 'Can be slower without optimization', 'Learning curve for non-developers'] },
    compareB: { label: 'Webflow', pros: ['Cleaner code output by default', 'Built-in CMS for structured content', 'No plugin maintenance', 'Visual editing without coding'], cons: ['Limited SEO plugin options vs. WordPress', 'Higher cost (monthly SaaS pricing)', 'Export limitations', 'Smaller developer ecosystem'] },
    verdict: 'For serious SEO content marketing: WordPress. For design-focused business sites with moderate SEO needs: Webflow. Both platforms can rank if the SEO fundamentals (content, speed, links) are done right. Platform is not the bottleneck — execution is.',
    faqs: [
      { q: 'Is WordPress or Webflow better for SEO?', a: 'WordPress has a slight edge for SEO due to its plugin ecosystem, greater flexibility in technical SEO implementation, and better support for large content sites. However, a well-optimized Webflow site can outrank a poorly optimized WordPress site.' },
      { q: 'Is Webflow slow for SEO?', a: 'Webflow sites are generally fast out of the box — Webflow\'s hosting infrastructure is solid. The main speed factors are image optimization and code complexity, problems that exist on both platforms.' },
      { q: 'Can Webflow handle blog SEO?', a: 'Yes, Webflow has a built-in CMS that handles blogs well. The main limitations are fewer native SEO controls (no equivalent of Yoast\'s full feature set) and less flexibility for schema markup customization.' },
      { q: 'Which platform do enterprise websites use for SEO?', a: 'Enterprise sites more often use WordPress (with advanced configurations), custom CMS solutions, or headless CMS setups. Webflow is primarily used by small-to-mid-size businesses and agencies.' },
    ],
  },

  {
    slug: 'local-seo-vs-national-seo',
    type: 'comparison',
    title: 'Local SEO vs National SEO — Key Differences',
    h1: 'Local SEO vs National SEO — Which Does Your Business Need?',
    metaDesc: 'Local SEO vs National SEO: what\'s the difference, which delivers better ROI for your business type, and how to know which strategy to pursue.',
    intro: 'Choosing the wrong SEO strategy wastes months of effort and budget. Local and national SEO serve completely different business models. Here\'s how to identify which one — or which combination — is right for your specific situation.',
    keywords: ['local seo vs national seo', 'local vs national seo strategy', 'local seo or national seo', 'which seo strategy is right'],
    accentColor: '#22C55E',
    relatedService: 'seo-services',
    compareA: { label: 'Local SEO', pros: ['Higher purchase intent', 'Less competition', 'Faster results (60–120 days)', 'Free Google Business Profile', 'Map Pack visibility'], cons: ['Geographic ceiling', 'Dependent on Google\'s local algorithm', 'May not scale beyond your area'] },
    compareB: { label: 'National SEO', pros: ['Unlimited geographic reach', 'Builds brand authority', 'Scales with content investment', 'Higher long-term traffic ceiling'], cons: ['More competitive keywords', 'Longer timeline (6–18 months)', 'Requires more content and links'] },
    verdict: 'Brick-and-mortar or service-area businesses (restaurants, dentists, contractors) should prioritize local SEO. SaaS, eCommerce, or service businesses with national reach should pursue national SEO. Many businesses need both — local SEO for primary markets + national SEO for product/service content.',
    faqs: [
      { q: 'Can I do both local and national SEO?', a: 'Yes — many businesses should. Create location-specific landing pages for local SEO while publishing national-reach content (guides, comparisons, industry pages) for national visibility. The two strategies complement each other.' },
      { q: 'What\'s the ROI difference between local and national SEO?', a: 'Local SEO typically delivers faster ROI (60–120 days) with higher purchase intent per visit. National SEO takes longer but scales without a geographic ceiling. For service businesses, local SEO often produces 3–5x more leads per dollar in the first 12 months.' },
      { q: 'Do I need local SEO if I have a national website?', a: 'If you have physical locations or serve specific cities/regions, yes — local SEO captures customers who would never find a national content page because they\'re searching geographically-specific terms.' },
      { q: 'How does Google decide local vs. national results?', a: 'Google uses search intent signals to determine whether to show local or national results. Searches with geographic modifiers ("near me," "[city name]") trigger local results. Google also infers location from device/IP for queries without explicit location terms.' },
    ],
  },

  {
    slug: 'organic-search-vs-paid-advertising',
    type: 'comparison',
    title: 'Organic Search vs Paid Advertising USA',
    h1: 'Organic Search vs Paid Advertising — Which Drives Better ROI?',
    metaDesc: 'Organic SEO vs paid ads: a data-driven comparison for USA business owners covering cost, traffic quality, conversion rates, and long-term ROI.',
    intro: 'Organic vs paid is a false binary — most successful businesses use both. But understanding where each excels helps you allocate budget intelligently. Here\'s the honest data-driven comparison.',
    keywords: ['organic search vs paid advertising', 'seo vs paid ads roi', 'organic traffic vs paid traffic', 'ppc vs seo usa'],
    accentColor: '#F97316',
    relatedService: 'ppc-advertising',
    compareA: { label: 'Organic Search', pros: ['Free per-click', 'Higher trust from users', 'Compounding returns', '53% of all web traffic', 'AI Answer Box visibility'], cons: ['Takes months to build', 'Algorithm dependency', 'Requires consistent content investment'] },
    compareB: { label: 'Paid Advertising', pros: ['Immediate results', 'Precise audience targeting', 'Scalable with budget', 'Easy to test and iterate', 'Great for promotions'], cons: ['Costs stop with budget', 'Ad blindness (many users skip ads)', 'Increasing CPCs year-over-year'] },
    verdict: 'Organic search produces 53% of site traffic vs. 27% from paid. Over 24 months, businesses with strong SEO foundations consistently outperform those relying solely on paid advertising — at significantly lower cost per lead.',
    faqs: [
      { q: 'What percentage of clicks go to organic vs paid results?', a: 'Studies show organic results receive 71–92% of clicks on the first page of Google. Paid ads capture 5–15% of clicks on average. However, paid ads convert at comparable or higher rates because they\'re shown to high-intent searchers.' },
      { q: 'What is the average cost per lead for organic vs paid?', a: 'Organic leads average $31/lead vs. $55/lead for paid across industries (BrightEdge research). In high-CPC industries (legal, insurance, finance), this gap can be 5–10x. However, paid leads often convert to customers faster.' },
      { q: 'Which is more reliable — organic traffic or paid traffic?', a: 'Paid traffic is more predictable and controllable — you can turn it on/off, scale up/down instantly. Organic traffic has more algorithm risk but is also "always on" without budget dependency. Diversifying into both reduces overall marketing risk.' },
      { q: 'Can organic SEO replace paid ads eventually?', a: 'For many businesses: yes, partially. Once organic SEO generates consistent first-page rankings for core keywords, you can reduce paid spend on those terms while maintaining paid campaigns for competitive terms or seasonal pushes.' },
    ],
  },

  {
    slug: 'seo-vs-social-media-marketing',
    type: 'comparison',
    title: 'SEO vs Social Media Marketing — Where to Invest?',
    h1: 'SEO vs Social Media Marketing — Which Should USA Businesses Prioritize?',
    metaDesc: 'SEO vs SMM: a strategic comparison for US business owners. Which drives more leads, better ROI, and sustainable growth for your type of business?',
    intro: 'SEO and social media serve fundamentally different purposes in your marketing funnel. Understanding the role each plays — and where each breaks down — is essential before allocating budget to either.',
    keywords: ['seo vs social media marketing', 'seo or social media which is better', 'seo vs smm usa', 'best marketing channel usa'],
    accentColor: '#EC4899',
    relatedService: 'social-media-marketing',
    compareA: { label: 'SEO', pros: ['Captures high purchase intent', 'Lower CPL long-term', 'Permanent content assets', 'Works 24/7 without active posting'], cons: ['Slow to build', 'Less brand personality visibility', 'Algorithm-dependent'] },
    compareB: { label: 'Social Media', pros: ['Brand awareness and personality', 'Viral potential', 'Direct audience engagement', 'Faster community building'], cons: ['Lower purchase intent traffic', 'Algorithm reach is declining', 'Requires constant content creation'] },
    verdict: 'SEO wins for capturing high-intent buyers (people searching for what you sell). Social media wins for brand building, community, and top-of-funnel awareness. The highest-performing US businesses use SEO as the demand capture engine and social media as the brand building and retargeting channel.',
    faqs: [
      { q: 'Does social media help with SEO?', a: 'Social media is not a direct Google ranking factor. However, it indirectly helps SEO by increasing brand awareness (more branded searches = positive signal), distributing content that earns backlinks, and driving traffic that increases dwell time signals.' },
      { q: 'Which has better lead quality — SEO or social media?', a: 'SEO generates higher purchase-intent leads — people searching "buy [product] near me" are further down the funnel. Social media generates awareness and engagement at the top of the funnel. Both convert, but at different stages and rates.' },
      { q: 'Can social media replace SEO?', a: 'No. Social platforms control your reach and can change algorithms or ban accounts without warning. Your website\'s organic rankings are owned assets that social media cannot replace. Both should be part of an integrated strategy.' },
      { q: 'Which has better ROI for small businesses — SEO or social media?', a: 'For most small businesses, local SEO and Google Business Profile optimization deliver the fastest, highest ROI. Social media builds brand over time but rarely drives direct conversions as effectively as search for service-based businesses.' },
    ],
  },
];

// Pre-computed pages with generated sections attached (used by audit and page renderer)
export const RESOURCE_PAGES_WITH_CONTENT = RESOURCE_PAGES.map(p => ({
  ...p,
  sections: p.sections || generateSections(p),
}));

export function getResourcePage(slug) {
  return RESOURCE_PAGES_WITH_CONTENT.find((p) => p.slug === slug) || null;
}


export function getRelatedResources(slug, limit = 3) {
  const page = getResourcePage(slug);
  if (!page) return [];
  return RESOURCE_PAGES
    .filter((p) => p.slug !== slug && p.type === page.type)
    .slice(0, limit);
}
