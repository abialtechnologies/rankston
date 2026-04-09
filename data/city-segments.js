/**
 * City Segment Pages
 * Routes: /[service]/[state]/[city]/[segment]
 * Example: /seo-services/ohio/columbus/small-business
 *          /content-marketing/ohio/columbus/ecommerce
 *
 * 5 segments × 10 services × 485 cities = 24,250 potential pages
 * generateStaticParams limits to top cities only for build performance
 */

export const SEGMENTS = [
  {
    slug: 'small-business',
    label: 'Small Business',
    icon: '🏪',
    tagline: (svc, city) => `Affordable ${svc} for Small Businesses in ${city}`,
    intro: (svc, city, state) =>
      `Small businesses in ${city}, ${state} face unique challenges: limited budgets, fierce local competition, and the need to maximize every single marketing dollar spent. The digital landscape has leveled the playing field — a well-executed ${svc} strategy allows a local business to outperform much larger competitors online. Our ${svc} packages for small businesses are built around this reality, delivering measurable, enterprise-level results at small business prices with no long-term contracts required.`,
    body: (svc, city, state) =>
      `The most common mistake small businesses in ${city} make is treating digital marketing as an expense rather than an investment. When executed correctly, ${svc} generates compounding returns — the work done in month one continues producing results in month twelve and beyond, at no additional cost per lead. We specialize in identifying the specific keywords, channels, and content strategies that work for small businesses in your exact market — not the generic approach that agencies apply to every client regardless of size or location.\n\nFor small businesses in ${city}, ${state}, the fastest path to measurable results is usually a combination of Google Business Profile optimization (for immediate local visibility) and targeted content that captures the high-intent searches your ideal customers perform. We start with the highest-impact tactics first, then build systematically toward longer-term goals. Most small business clients see their first meaningful results within 60–90 days — and those results compound every month of consistent work.\n\nBudget transparency is central to how we work with small businesses. You receive a clear scope of work before anything begins, fixed monthly pricing without surprise fees, and a monthly report that shows exactly what was done, what moved, and what the next 30 days look like. No inflated retainers, no vanity metrics — just clear, honest reporting on the numbers that matter to your revenue.\n\nOne thing we hear consistently from small business owners who have worked with larger agencies is that they felt like a low-priority account — slow responses, rotating account managers, and reports full of numbers that never connected to actual business results. Rankston works differently. Every small business client gets a dedicated account manager who knows their business by name, responds within one business day, and is genuinely invested in growth. We limit the number of clients per account manager specifically to maintain this standard — because a high-volume, low-attention model does not produce the results that small businesses need from their marketing investment.`,
    keywords: (svc, city) => [`${svc} for small business ${city}`, `affordable ${svc} ${city}`, `small business ${svc} near me`],
    painPoints: [
      'Limited marketing budget means every dollar must produce measurable, attributable results — not just impressions and clicks',
      'Competing against larger businesses with much bigger ad spend requires smarter targeting, not higher budgets',
      'Lack of in-house marketing expertise means you need a partner who explains every decision in plain English',
      'Seasonal cash flow makes predictable, fixed monthly pricing essential — no surprise invoices mid-campaign',
      'Most agencies ignore small businesses or apply enterprise playbooks that do not fit the budget or the market reality',
    ],
    benefits: [
      { title: 'Fixed Monthly Pricing', desc: 'Clear, predictable costs with no hidden fees or long-term contract lock-in. Cancel any month, no penalty, no friction.' },
      { title: 'Small Business Expertise', desc: 'Strategies built specifically for smaller budgets and local markets — not a scaled-down version of an enterprise playbook.' },
      { title: 'Fast Time-to-Results', desc: 'We prioritize the tactics with the fastest measurable impact first — most clients see meaningful movement within 60–90 days.' },
      { title: 'Plain-English Reporting', desc: 'Monthly reports that show leads, ranking changes, and revenue impact — not just impressions and vanity click metrics.' },
    ],
    process: [
      { title: 'Free Strategy Call', desc: 'We learn your business, your market, your goals, and your current situation. No pitch — just a conversation to assess fit and opportunity.' },
      { title: 'Audit and Opportunity Map', desc: 'We audit your current digital presence, identify the gaps your competitors are exploiting, and map the fastest path to results.' },
      { title: 'Strategy Delivery', desc: 'You receive a written strategy document covering exactly what we will do, in what order, and what results to expect by when.' },
      { title: 'Execution and Optimization', desc: 'We implement the strategy systematically — reporting every action monthly and optimizing based on real performance data.' },
      { title: 'Compound Growth', desc: 'Results build on themselves over time. Month 6 performance typically runs 3–5x month 1 from the same monthly investment.' },
    ],
    whyUs: 'We work with dozens of small businesses across the USA — we understand your budget constraints, your growth goals, and what actually moves the needle without burning runway. Every client gets a dedicated account manager who responds same-day and attends a monthly strategy call to review progress and next steps. We have no minimum contract, no hidden fees, and no upsell pressure — just a clear, focused program built around your specific goals and market.',
    faqs: [
      { q: 'What is the minimum budget needed for digital marketing as a small business?', a: 'Most small businesses see meaningful results starting at $500 to $1,500 per month depending on the service and market competitiveness. We offer transparent, fixed monthly packages with no long-term contracts — so you can start at a level that fits your current budget and scale as results justify additional investment.' },
      { q: 'How quickly can a small business expect to see results?', a: 'For local SEO and Google Business Profile optimization, most small businesses see measurable improvement in visibility within 60 to 90 days. For paid advertising, leads can begin within the first week. For content and organic SEO, significant traffic growth typically develops over 4 to 6 months of consistent execution and compounds from there.' },
      { q: 'Can you work around a small business seasonal cash flow?', a: 'Yes — our month-to-month structure allows you to adjust, pause, or scale your program based on your business cycle. We work with many seasonal businesses and understand that marketing investment needs to flex with revenue. We help you prioritize the highest-ROI activities during constrained periods and scale up during strong seasons.' },
    ],
    cta: (svc, city) => `Ready to grow your small business in ${city} with ${svc} that actually delivers measurable ROI? Request your free strategy call — no commitment, no sales pressure, just an honest assessment of your opportunity and what it would take to capture it. Most small businesses we speak with are leaving significant revenue on the table from digital channels they have not yet optimized.`,
  },
  {
    slug: 'startups',
    label: 'Startups',
    icon: '🚀',
    tagline: (svc, city) => `${svc} for Startups in ${city}`,
    intro: (svc, city, state) =>
      `Startups in ${city}, ${state} need to build brand awareness fast, generate early customers, and demonstrate traction to investors — all simultaneously, with limited runway. Our ${svc} strategy for startups balances speed-to-results with long-term sustainable growth, so you are not just buying clicks but building an owned marketing asset that grows in value every month and reduces your customer acquisition cost over time as organic channels mature.`,
    body: (svc, city, state) =>
      `The startup digital marketing challenge is unique: you are competing against established brands with years of authority while needing to show month-over-month growth metrics that satisfy investors and stakeholders. Generic marketing approaches do not work — you need a strategy that generates early wins quickly (to maintain momentum and justify spend) while simultaneously building the long-term assets that will eventually make your marketing self-sustaining and increasingly cost-efficient.\n\nFor startups in ${city}, ${state}, this typically means a dual-track approach: paid channels (Google Ads, LinkedIn, or Meta depending on your target audience) for immediate lead generation while your organic channels build, combined with high-intent content marketing that starts generating compounding organic traffic within 60–120 days of publication. The specific mix depends on your funding stage, monthly burn, and growth targets — which is why we start every startup engagement with a detailed strategy session before spending a single dollar on execution.\n\nWhat makes startup marketing different from small business marketing is the pace of iteration. Startups can and should test, learn, and pivot faster than established businesses. We build this into our workflow — monthly performance reviews that look at what is working, what needs adjustment, and where to double down. Our startup clients also receive investor-ready growth reporting: clean dashboards showing organic traffic growth, keyword ranking improvements, and lead attribution by channel, formatted for board presentation and investor updates.\n\nStartups that invest in building their organic marketing foundation early consistently outperform those that rely solely on paid acquisition throughout their growth journey. The compounding nature of SEO and content marketing means that every piece of content published in month one continues generating traffic and leads in month 18 at zero incremental cost — creating an owned marketing asset that makes your cost per acquisition drop steadily over time. This is the difference between building a business and renting an audience.`,
    keywords: (svc, city) => [`${svc} for startups ${city}`, `startup ${svc} company ${city}`, `growth marketing startup ${city}`],
    painPoints: [
      'Building brand awareness from zero in a competitive market against established incumbents with years of domain authority and backlinks',
      'Investor expectations require rapid, demonstrable growth metrics — month-over-month improvement is non-negotiable for Series A preparation',
      'Limited runway means campaigns must prove ROI quickly — no budget for 12-month "trust the process" engagements that delay real results',
      'Establishing credibility and trust with customers who have never heard of your brand and have established alternatives they already trust',
      'Balancing fast early wins with sustainable long-term marketing assets — doing both simultaneously with limited budget and team bandwidth',
    ],
    benefits: [
      { title: 'Investor-Ready Reporting', desc: 'Clean monthly dashboards showing organic growth, keyword rankings, and lead attribution — formatted for board and investor presentations.' },
      { title: 'Dual-Track Approach', desc: 'Paid channels for immediate leads while organic SEO builds — ensuring continuous lead flow at every stage of your growth journey.' },
      { title: 'Rapid Iteration', desc: 'Monthly strategy reviews with fast pivots based on performance data — startup speed and agility, not agency bureaucracy.' },
      { title: 'No Long-Term Lock-In', desc: 'Month-to-month terms that match startup flexibility — scale up, scale down, or pause as your runway and priorities dictate.' },
    ],
    process: [
      { title: 'Growth Audit', desc: 'We assess your current digital presence, competitor landscape, and fastest path to initial traction in your specific market.' },
      { title: 'Channel Strategy', desc: 'We map the optimal channel mix for your stage — balancing immediate paid results with long-term organic asset building.' },
      { title: 'Launch and Test', desc: 'Campaigns launch with clear success metrics defined upfront — no ambiguity about what winning looks like at each stage.' },
      { title: 'Optimize and Scale', desc: 'Weekly optimizations in month 1, then monthly strategy reviews — scaling what works, cutting what does not work, moving fast.' },
      { title: 'Documentation', desc: 'All strategy, account structures, and learnings are fully documented so your internal team can take ownership as you grow.' },
    ],
    whyUs: 'We have helped startups go from zero to 1,000+ organic leads per month. We understand that startup marketing is different — faster pivots, leaner budgets, higher expectations, and the need for investor-ready growth metrics that demonstrate clear month-over-month improvement to stakeholders and board members alike. Our startup programs include investor-ready reporting dashboards, growth benchmarking against industry standards, and strategic advisory that goes beyond task execution to help you make smarter channel investment decisions as you scale.',
    faqs: [
      { q: 'When should a startup invest in digital marketing?', a: 'Ideally from month one, even at a modest level. Digital marketing compounds over time — every month you delay is a month of compounding authority and audience you miss. Even a limited investment in SEO and content from day one builds assets that generate returns for years. Waiting until you have significant revenue to start marketing often means launching into a market where competitors have already built 12 to 18 months of advantage.' },
      { q: 'Should startups focus on organic SEO or paid advertising first?', a: 'Both, allocated according to your runway and timeline. If you have immediate revenue pressure and limited runway, prioritize paid channels for fast lead generation. If you have 6 to 12 months of runway and need sustainable, compounding growth, prioritize organic SEO while running minimal paid to maintain lead flow. The ideal model runs both simultaneously, using paid for immediate revenue and organic for long-term cost efficiency.' },
      { q: 'How do you report startup marketing results to investors?', a: 'We provide investor-ready monthly dashboards showing month-over-month organic traffic growth, keyword ranking improvements, leads attributed to each channel, and customer acquisition cost trends. These reports are formatted for board presentations and can be exported directly. We understand that demonstrating clear, quantifiable growth trajectory is as important for investor relationships as it is for internal decision making.' },
    ],
    cta: (svc, city) => `Ready to build a ${svc} engine for your ${city} startup that generates real traction and investor-ready growth metrics? Schedule a free strategy session — we will assess your current position, your fastest path to early wins, and what a realistic 6-month growth trajectory looks like for your specific market and business model.`,
  },
  {
    slug: 'ecommerce',
    label: 'eCommerce',
    icon: '🛒',
    tagline: (svc, city) => `${svc} for eCommerce Stores in ${city}`,
    intro: (svc, city, state) =>
      `eCommerce businesses based in ${city}, ${state} need ${svc} strategies built around product discovery, purchase intent, and cart conversion — not the generic tactics designed for service businesses. We specialize in the full eCommerce digital marketing playbook: from product and category page SEO optimization to Google Shopping campaigns to abandoned cart retargeting to the specific content strategies that capture buyers at every stage of the purchase journey from first awareness to repeat purchase.`,
    body: (svc, city, state) =>
      `The eCommerce marketing challenge is unique in its complexity and competitiveness. You are not just competing against local businesses — you are competing against Amazon, Walmart, and every major national retailer for the same keywords your customers search daily. That means generic advice is almost always wrong for eCommerce: the tactics that work for a local plumber do not apply to a store with thousands of product SKUs competing on Google Shopping and organic search simultaneously.\n\nFor eCommerce businesses in ${city}, ${state}, effective ${svc} starts with a technical foundation audit — ensuring your site architecture, crawlability, canonical configuration, and page speed are all optimized before any content investment is made. A single misconfigured canonical tag can cause thousands of product pages to lose their indexing status — an invisible problem that costs significant revenue for months before it is discovered and corrected. We find and fix these foundation issues first before any other work begins.\n\nThe content strategy for eCommerce differs fundamentally from service businesses. Category pages need to target commercial, high-volume keywords that capture buyers at the bottom of the funnel. Product pages need to target specific, long-tail purchase-intent queries from buyers who know exactly what they want. Informational blog content needs to target the research phase of the buyer journey — capturing customers before they are actively comparing prices — and convert them to your product through smart internal linking. We build all three layers of this content architecture simultaneously.\n\nThe eCommerce businesses that see the strongest results from ${svc} share one common characteristic: they treat their website as a primary sales channel deserving of genuine investment, not a digital brochure that exists because every business is expected to have one. Your product pages are your salespeople at scale — available 24 hours a day to every potential customer in every geography simultaneously. Investing in making those pages rank and convert is the highest-leverage activity available to most eCommerce businesses.`,
    keywords: (svc, city) => [`${svc} for ecommerce ${city}`, `ecommerce ${svc} company ${city}`, `online store ${svc} ${city}`],
    painPoints: [
      'Product pages competing directly against Amazon, Walmart, and major retailers for the same high-purchase-intent keywords on Google',
      'Shopping cart abandonment averaging 68–70% without proper retargeting campaigns and email recovery flows in place',
      'Rapidly increasing Google Shopping CPCs eating into product margins on your best-selling items and most profitable categories',
      'Managing SEO and paid campaigns across thousands of product SKUs at scale without a dedicated in-house specialist team',
      'Technical SEO issues such as duplicate content, crawl budget mismanagement, and canonical errors silently suppressing product page rankings',
    ],
    benefits: [
      { title: 'Technical SEO Foundation', desc: 'Full crawl audit covering canonicalization, indexation, site speed, and schema markup — fixed before any content investment is made.' },
      { title: 'Amazon Gap Analysis', desc: 'Identification of high-intent product keywords where Amazon does not rank — your best organic product discovery opportunities.' },
      { title: 'Shopping Campaign Management', desc: 'Google Shopping setup, product feed optimization, and bid management targeting the products and terms with your highest ROAS.' },
      { title: 'Abandoned Cart Recovery', desc: 'Retargeting campaigns on Google and Meta that recover 15–25% of abandoned cart sessions from qualified, high-intent buyers.' },
    ],
    process: [
      { title: 'Technical SEO Audit', desc: 'Complete crawl analysis — canonicalization, indexation, site speed, schema markup, duplicate content — all fixed before content work begins.' },
      { title: 'Category Page Optimization', desc: 'On-page optimization of your highest-priority category pages for commercial-intent keywords with realistic near-term ranking potential.' },
      { title: 'Product Page Optimization', desc: 'Title, description, schema, and image alt text optimization across priority products — targeting specific long-tail purchase intent searches.' },
      { title: 'Shopping Campaign Launch', desc: 'Google Shopping setup with product feed optimization, bid strategy configuration, and negative keyword management from day one.' },
      { title: 'Retargeting Setup', desc: 'Abandoned cart retargeting on Google Display and Meta — automatically recovering high-intent sessions that left without completing a purchase.' },
    ],
    whyUs: 'Our eCommerce team has managed significant Google Shopping spend and optimized hundreds of Shopify and WooCommerce stores for organic and paid growth. We understand the technical complexity, the competitive dynamics against major retailers, and the attribution challenges that are unique to eCommerce businesses operating across multiple channels.',
    faqs: [
      { q: 'Can an eCommerce store actually outrank Amazon on Google?', a: 'Not on the same broad commercial keywords where Amazon has overwhelming authority. However, Amazon consistently leaves significant gaps on long-tail product queries, niche-specific category terms, and informational content that leads into product discovery. We identify these Amazon blind spots through systematic competitive research and build content and category pages specifically to capture the search volume Amazon is not capturing.' },
      { q: 'How long does eCommerce SEO take to produce sales?', a: 'Most eCommerce stores in non-hyper-competitive niches see first meaningful organic sales within 3 to 4 months of implementing the technical foundation and category page optimization. Significant organic revenue that materially affects your business typically builds from months 6 through 12 as domain authority grows and content indexes and begins ranking. Stores with strong technical foundations improve faster than those requiring extensive cleanup work first.' },
      { q: 'Should I run Google Shopping or organic SEO for my eCommerce store?', a: 'Both — and they serve different roles in your acquisition funnel. Google Shopping captures immediate purchase intent from buyers who are already in buying mode and searching specific products. Organic SEO captures buyers earlier in the research phase through informational content, builds brand authority, and reduces your long-term cost per acquisition as rankings mature and clicks become free. The most cost-efficient eCommerce marketing programs use both together with unified keyword and audience data.' },
    ],
    cta: (svc, city) => `Ready to build a ${svc} engine for your eCommerce store that increases organic revenue and reduces your cost-per-acquisition over time? Get your free technical SEO audit and channel strategy — we will identify your highest-priority opportunities and deliver a clear roadmap for capturing them within your existing budget.`,
  },
  {
    slug: 'enterprise',
    label: 'Enterprise',
    icon: '🏢',
    tagline: (svc, city) => `Enterprise ${svc} Solutions in ${city}`,
    intro: (svc, city, state) =>
      `Enterprise businesses in ${city}, ${state} require ${svc} at a completely different scale — multi-location management, large site technical SEO, complex multi-touch attribution models, and executive dashboard reporting that connects marketing activity directly to revenue outcomes. Our enterprise programs are built for organizations with 50+ employees and multi-channel marketing complexity that requires specialist knowledge, proven enterprise-grade processes, and the ability to operate within corporate approval workflows without sacrificing execution speed.`,
    body: (svc, city, state) =>
      `Enterprise digital marketing differs from SMB marketing in four fundamental ways: scale, complexity, stakeholder management, and attribution infrastructure. A campaign affecting 50+ locations requires governance structures that prevent individual location managers from making decisions that conflict with the overall brand strategy. A website with 100,000+ pages requires crawl budget management and technical SEO practices that simply do not apply to smaller sites. Attribution across a complex, multi-touch customer journey requires reporting infrastructure that most agencies do not have the capability to build or maintain.\n\nFor enterprise businesses in ${city}, ${state}, our ${svc} programs include dedicated account directors who manage the complex stakeholder landscape — coordinating with your marketing leadership, legal review processes, and regional management teams simultaneously without creating bottlenecks. We build the reporting infrastructure that enterprises require: executive dashboards, location-level performance breakdowns, channel attribution models, and competitive share-of-voice reporting — all integrated with your existing analytics stack and CRM.\n\nWe also operate as an embedded part of your marketing team rather than as a typical external vendor. That means participating in your internal planning meetings, working within your legal review processes for campaign approvals, providing white-label content and assets that your team can use internally, and maintaining response time standards that enterprise stakeholders expect from mission-critical partners. Our enterprise programs include dedicated Slack channels, weekly status calls, and defined escalation paths for urgent issues requiring same-day resolution.\n\nThe enterprises that get the most value from an external ${svc} partner are those that approach the relationship as a genuine partnership rather than a traditional vendor engagement. This means sharing internal performance data, being transparent about strategic priorities, and giving the partner enough context to make smart decisions without requiring approval for every minor execution detail. We earn this level of trust by demonstrating accountability consistently — which is why we build clear performance benchmarks and accountability metrics into every enterprise engagement from day one.`,
    keywords: (svc, city) => [`enterprise ${svc} ${city}`, `${svc} for large business ${city}`, `corporate ${svc} agency ${city}`],
    painPoints: [
      'Managing digital marketing consistency and brand standards across multiple locations, divisions, or regions at significant scale',
      'Generating clear, auditable attribution data for executive and board-level reporting on marketing return on investment',
      'Competing in highly competitive markets against deep-pocketed rivals with large in-house teams and established brand authority',
      'Coordinating campaigns across paid, organic, social, and email channels with complex multi-stakeholder approval workflows',
      'Finding an agency partner that can operate independently without constant handholding, meet corporate compliance requirements, and still execute with speed',
    ],
    benefits: [
      { title: 'Dedicated Account Director', desc: 'A senior strategist who owns your account relationship, manages stakeholder communication, and drives accountability across all workstreams.' },
      { title: 'Executive Reporting', desc: 'Board-ready dashboards and quarterly business reviews connecting marketing activity to revenue outcomes — not just channel metrics.' },
      { title: 'Multi-Location Management', desc: 'Unified brand strategy with location-level execution and reporting — ensuring consistency while allowing local market adaptation.' },
      { title: 'Enterprise SLAs', desc: 'Defined response time standards, same-day escalation paths, and contractual performance commitments for enterprise-level accountability.' },
    ],
    process: [
      { title: 'Enterprise Discovery', desc: 'Stakeholder mapping, goal alignment, current state audit, and competitive landscape analysis conducted at enterprise scale and depth.' },
      { title: 'Strategy and Governance', desc: 'Account governance structure, reporting framework, approval workflow integration, and performance benchmark establishment completed before execution.' },
      { title: 'Technical Foundation', desc: 'Large-site SEO audit, crawl budget optimization, multi-location GBP management, and analytics infrastructure build-out and validation.' },
      { title: 'Campaign Execution', desc: 'Multi-channel campaign management with weekly internal status reporting and monthly executive-level performance presentations with competitive context.' },
      { title: 'Quarterly Business Reviews', desc: 'Formal QBR process with competitive benchmarking, strategy reassessment based on market changes, and 90-day forward planning.' },
    ],
    whyUs: 'Our enterprise clients include multi-location chains, regional franchises, and B2B companies with complex sales cycles and large marketing teams. We know how to operate at scale — within corporate governance structures, alongside internal marketing teams, and with the accountability standards that enterprise organizations require from their external partners. Our dedicated account directors bring enterprise-specific experience across regulated industries, multi-location management, and complex attribution models that require more than a standard agency engagement.',
    faqs: [
      { q: 'How do you manage digital marketing consistency across multiple locations?', a: 'Through a governance structure that combines a unified brand strategy managed centrally with location-level execution that allows for local market variation. Each location receives customized local SEO, Google Business Profile management, and locally-relevant content within the constraints of the brand standard. A central reporting dashboard shows aggregate performance and individual location breakdowns, enabling both high-level executive review and granular location-level optimization.' },
      { q: 'Can you work within our existing marketing technology stack?', a: 'Yes — we integrate with your existing CRM, analytics platforms, marketing automation tools, and reporting infrastructure. We do not require clients to change their technology stack to work with us. If you use Salesforce, HubSpot, Marketo, or any major marketing platform, our team has experience working within those ecosystems and can configure tracking and reporting to flow into your existing systems rather than requiring a separate reporting interface.' },
      { q: 'How do you handle our legal review and compliance requirements?', a: 'We build your legal review and compliance requirements into our workflow from the start. Campaign materials, content drafts, and landing page copy are submitted through your approval process before launching. We have worked with in-house legal teams and external counsel across regulated industries including financial services, healthcare, and legal services, and understand how to produce compliant marketing materials without creating excessive delays in the approval pipeline.' },
    ],
    cta: (svc, city) => `Ready to discuss enterprise ${svc} for your ${city} operations? Request an enterprise discovery call — we will assess your current digital marketing state, your requirements, and whether we are the right fit before presenting any proposal or commitment. Our enterprise engagements typically begin with a paid discovery sprint that delivers immediate value regardless of whether we become your long-term partner.`,
  },
  {
    slug: 'agencies',
    label: 'Marketing Agencies',
    icon: '🤝',
    tagline: (svc, city) => `White-Label ${svc} for Agencies in ${city}`,
    intro: (svc, city, state) =>
      `Marketing agencies in ${city}, ${state} trust Rankston as their white-label ${svc} partner — handling execution behind the scenes while you maintain the client relationship, the credit, and the margin. Our white-label programs are built specifically for agencies that want to expand their service offering and take on more clients without the overhead, risk, hiring cost, and management time commitment of building an internal specialist team from scratch.`,
    body: (svc, city, state) =>
      `The agency white-label model is straightforward in concept but genuinely difficult to execute well. Your clients have high expectations shaped by the relationship they have with your brand. Your margins depend on efficient, reliable delivery. Your reputation requires that every client result meets the standard you have built your agency around over the years. That means your white-label partner cannot just be competent technically — they need to be a seamless extension of your team, operating within your processes, matching your quality standards, and communicating in ways that never break the client's perception of receiving an integrated, internal service.\n\nFor agencies in ${city}, ${state}, our white-label ${svc} partnership model eliminates the most expensive parts of adding a new service capability: recruitment cycles, training time, management overhead, and the long ramp-up period before a new hire becomes fully productive with your processes and clients. We handle all execution under your brand — delivering white-label reports, white-label deliverables, and client-facing communication that presents as coming directly from your team. Your clients never know we exist as an external partner.\n\nThe economics of white-label partnership typically produce strong margins for agency partners. Hiring a specialist costs significant monthly salary plus benefits, before accounting for the months it takes to become fully productive with your workflows. Our white-label programs start at a fraction of that cost, with no ramp-up period, no HR overhead, no benefits, and no sunk cost if a client churns unexpectedly. Most agency partners who work with us achieve 40–60% gross margins on the services they resell — making white-label one of the highest-margin, lowest-risk growth levers available to any agency looking to expand its service lines.`,
    keywords: (svc, city) => [`white label ${svc} ${city}`, `${svc} reseller ${city}`, `agency ${svc} partner ${city}`],
    painPoints: [
      'Clients requesting services outside your team current expertise — and the real risk of losing them to a full-service competitor',
      'Scaling service delivery without the overhead, risk, and multi-month ramp-up time of full-time specialist hires for each new service',
      'Maintaining consistent, high-quality results across a growing client roster while managing existing team bandwidth at capacity',
      'Managing multiple client campaigns efficiently under your brand without burning out your existing delivery team on unfamiliar service lines',
      'Finding a white-label partner who can communicate professionally, operate with complete confidentiality, and deliver to your quality standard consistently',
    ],
    benefits: [
      { title: 'Complete White-Label Delivery', desc: 'Reports, deliverables, and all client-facing communication delivered under your brand — your clients never know we are involved.' },
      { title: 'No Minimum Volume', desc: 'Client-by-client activation with no minimum volume requirements — use us when you need us, with no overhead commitment when you do not.' },
      { title: 'Agency Margins', desc: 'Pricing structured for resale at 40–60% gross margin — making white-label one of your highest-margin, lowest-risk service revenue lines.' },
      { title: 'Priority Communication', desc: 'Agency partners receive dedicated partner management with same-day responses and priority support for client-urgent situations.' },
    ],
    process: [
      { title: 'Partner Onboarding', desc: 'Brand guidelines, communication preferences, report templates, and client intake process all configured to match your existing agency workflow.' },
      { title: 'Client Brief', desc: 'You send us the client brief and goals — we assess fit, scope the work, and deliver a wholesale pricing proposal within 24 hours.' },
      { title: 'Silent Kickoff', desc: 'We onboard the client invisibly — gathering the access and information we need without breaking the perception of your team handling everything.' },
      { title: 'White-Label Execution', desc: 'We execute all work, build reports in your templates, and deliver draft reports to you for review before client delivery each month.' },
      { title: 'Ongoing Partner Support', desc: 'Weekly internal updates to you, monthly reports for client delivery, and available to join client calls if needed — fully under your direction.' },
    ],
    whyUs: 'We work with agency partners across the USA as their silent execution team. White-label reports delivered in your templates, your branding on all deliverables, and complete confidentiality on every engagement. Our agency partners consistently achieve strong gross margins on services they resell through our white-label program, expanding their revenue without expanding their headcount.',
    faqs: [
      { q: 'How do you handle client communication without revealing you are the execution partner?', a: 'All communication goes through you — we never contact your clients directly unless you explicitly authorize it for a specific account and purpose. Reports, deliverables, and any written materials are produced in your templates with your branding and delivered to you for review before going to the client. If we are ever included on a client call, we participate under whatever role and name you instruct, whether as a specialist team member or under an agreed pseudonym.' },
      { q: 'What happens if one of my clients wants to leave and hire you directly?', a: 'We have a strict non-circumvention policy: we will never accept direct business from any agency partner client, now or in the future, regardless of whether your agency relationship with that client ends. This is contractual and absolute. Your client relationships are fully protected when you work with us as your white-label partner, which is a fundamental requirement for the trust that makes this model work.' },
      { q: 'How do you handle situations where results are below expectations for a client I have resold to?', a: 'The same way you would handle it as an agency — with transparency, a clear improvement plan, and accountability. We provide your agency with a full diagnosis of what is underperforming and why, a recovery plan with specific actions and timelines, and accelerated response during the recovery period. Your client sees a professional response delivered through you. We take full ownership of execution failures and work to fix them rather than deflect.' },
    ],
    cta: (svc, city) => `Interested in adding white-label ${svc} to your ${city} agency service offerings? Request a partner application — we will review your agency client profile, confirm mutual fit, and set up a partner call to walk through our white-label program, pricing structure, and what a typical engagement looks like from your team perspective and your client perspective simultaneously.`,
  },
];

export function getSegment(slug) {
  return SEGMENTS.find(s => s.slug === slug) || null;
}

/** Top cities to pre-render (build performance guard) — ~50 cities per state */
export const TOP_CITIES_FOR_SEGMENTS = [
  // AL
  'birmingham','montgomery','huntsville','mobile','tuscaloosa',
  // AZ
  'phoenix','tucson','scottsdale','mesa','chandler',
  // CA
  'los-angeles','san-francisco','san-diego','san-jose','fresno','long-beach','sacramento','oakland',
  // CO
  'denver','colorado-springs','aurora','fort-collins','boulder',
  // FL
  'miami','orlando','tampa','jacksonville','st-petersburg','hialeah','fort-lauderdale','tallahassee',
  // GA
  'atlanta','columbus','savannah','augusta','sandy-springs',
  // IL
  'chicago','aurora','joliet','naperville','rockford',
  // MA
  'boston','worcester','cambridge','lowell','springfield',
  // MI
  'detroit','grand-rapids','warren','sterling-heights','lansing',
  // MN
  'minneapolis','saint-paul','duluth','bloomington','brooklyn-park',
  // MO
  'kansas-city','st-louis','columbia','independence','lees-summit',
  // NC
  'charlotte','raleigh','greensboro','durham','winston-salem','fayetteville','cary','wilmington',
  // NJ
  'newark','jersey-city','paterson','elizabeth','camden','edison',
  // NV
  'las-vegas','henderson','reno','north-las-vegas','sparks',
  // NY
  'new-york','buffalo','rochester','yonkers','syracuse','brooklyn','queens',
  // OH
  'columbus','cleveland','cincinnati','toledo','akron','dayton','canton',
  // OR
  'portland','eugene','salem','gresham','hillsboro','beaverton','bend',
  // PA
  'philadelphia','pittsburgh','allentown','erie','reading','scranton',
  // TN
  'nashville','memphis','knoxville','chattanooga','clarksville','murfreesboro',
  // TX
  'houston','san-antonio','dallas','austin','fort-worth','el-paso','arlington','corpus-christi',
  'lubbock','garland','irving','frisco','mckinney','amarillo','denton',
  // VA
  'virginia-beach','chesapeake','richmond','norfolk','newport-news','alexandria',
  // WA
  'seattle','spokane','tacoma','vancouver','bellevue','everett','kent','renton',
  // WI
  'milwaukee','madison','green-bay','kenosha','racine','appleton',
];
