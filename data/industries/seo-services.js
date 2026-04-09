// data/industries/seo-services.js
// Phase 1 — SEO Service: 12 industries × full 15-section data schema
// Content: ~2500+ words per industry when rendered

const seoIndustries = {
  label: "SEO",
  accentColor: "#10B981",
  industries: [

    // ─── 1. REAL ESTATE ───────────────────────────────────────────────
    {
      slug: "real-estate",
      name: "Real Estate",
      icon: "🏠",
      tagline: "Rank Before the Competition Calls That Lead. Dominate Real Estate Search.",
      heroSubtitle: "In real estate, the agent who appears first on Google wins the lead — full stop. Buyers and sellers research online for months before making contact. We make sure they find you, trust you, and call you first.",
      overview: "The real estate industry is one of the most search-dominated verticals in existence. Over 97% of home buyers use the internet at some point in their purchase journey, and 51% of them find their home online. Yet most real estate agents and brokerages are invisible in organic search, relying entirely on paid Zillow leads, referrals, or cold outreach.\n\nThe problem is structural. Real estate SEO is highly competitive and hyper-local. Ranking for 'homes for sale in [city]' is nearly impossible against Zillow, Realtor.com, and Redfin — who have domain authority built over decades. But neighborhood-level keywords, agent-specific searches, and long-tail buyer queries are wide open for the taking.\n\nRankston specializes in winning the battles that matter — the searches where buyers and sellers are actively evaluating agents in your specific market. We build content, technical foundations, and local authority that produces consistent organic leads month after month, without paying Zillow $1,000 per lead.",
      stats: [
        { val: "97%", label: "of buyers research online" },
        { val: "51%", label: "find their home on the internet" },
        { val: "3.5×", label: "avg lead increase in 6 months" },
        { val: "60 days", label: "to first ranking movements" }
      ],
      painPoints: [
        { title: "Zillow & Realtor.com Dominate Generic Search", desc: "Broad terms like 'homes for sale in [city]' are owned by listing aggregators with DA 90+ domains. Fighting them directly burns budget and produces nothing. We compete where you can actually win — neighborhood, agent, and service-specific searches." },
        { title: "MLS Descriptions Create Duplicate Content Everywhere", desc: "Auto-syndicated MLS listing descriptions appear on hundreds of sites simultaneously, training Google to ignore your content. We create unique, SEO-optimized property and area pages that signal original expertise to search engines." },
        { title: "No Neighborhood-Level Authority", desc: "Most agents have one website with no neighborhood-specific content. Buyers searching 'best neighborhoods in [city] for families' or '[neighborhood] real estate agent' hit dead ends. We build topical neighborhood authority that captures this traffic." },
        { title: "Google Business Profile Underperforming", desc: "Real estate GBPs are among the most underutilized in any industry. Without proper optimization, category selection, review velocity, and post cadence, you're invisible in the local 3-pack where buyers search for agents." },
        { title: "No Content Strategy Targeting Buyer Intent", desc: "Buyers spend 6–18 months researching online before contacting an agent. Without educational content (mortgage guides, neighborhood comparisons, market reports), your site has nothing to keep them engaged or earn their trust." },
        { title: "Slow Page Speed Kills Mobile Rankings", desc: "Over 75% of real estate searches happen on mobile devices. Sites with load times over 3 seconds lose rankings and bounce rates spike. We audit and fix Core Web Vitals to ensure full mobile performance." }
      ],
      strategy: {
        title: "Our SEO Strategy for Real Estate Businesses",
        intro: "We don't apply a cookie-cutter SEO checklist. Our real estate strategy is built around one truth: buyers and sellers aren't searching for you by name — they're searching for answers to their real estate questions. We position you as the answer, in the searches that matter, in the markets you serve.",
        pillars: [
          { title: "Hyperlocal Keyword Architecture", desc: "We build a comprehensive map of neighborhood-level, city-level, and service-specific keywords your ideal clients are actually searching", tactics: ["Neighborhood landing pages for every area you serve", "Buyer guide content targeting pre-purchase research queries", "Seller guide content for homeowners considering listing", "School district, commute, and lifestyle content that ranks for relocation searches"] },
          { title: "Technical SEO Foundation", desc: "Real estate sites have unique technical challenges that require specialist attention to get right", tactics: ["Core Web Vitals optimization for mobile-first indexing", "Schema markup: LocalBusiness, RealEstateAgent, FAQPage", "XML sitemap for listing pages with proper change frequency", "Crawl efficiency — ensuring Google indexes your best pages, not MLS duplicates"] },
          { title: "Authority & Trust Building", desc: "Google's trust signals for real estate center on local authority, reviews, and legitimate backlinks from real estate-adjacent sites", tactics: ["Real estate directory citations (Zillow agent profile, Realtor.com, Homes.com)", "Local news and community backlinks", "Google Business Profile optimization and review velocity strategy", "NAP consistency across 50+ business directories"] }
        ]
      },
      services: [
        "Neighborhood Landing Page Creation", "Google Business Profile Optimization",
        "Real Estate Schema Markup", "Hyperlocal Keyword Research",
        "Buyer & Seller Guide Content", "Backlink Building (Real Estate Directories)",
        "Core Web Vitals Optimization", "Review Generation Strategy",
        "Market Report Content", "Competitor Gap Analysis",
        "IDX Integration SEO", "Monthly Ranking & Traffic Reports"
      ],
      commonMistakes: [
        { mistake: "Targeting city-level keywords only", impact: "You compete directly against Zillow and Realtor.com — sites with Domain Authority 90+. You will not rank. You waste 6+ months chasing impossible terms.", fix: "We identify neighborhood, suburb, and long-tail buyer intent keywords where competition is low and conversion intent is high." },
        { mistake: "Ignoring Google Business Profile", impact: "86% of people who find a local business on Google Maps visit or call within 24 hours. An unoptimized GBP means you're invisible for 'real estate agent near me' searches.", fix: "Complete GBP audit, optimal category selection, photo strategy, Q&A optimization, and weekly post cadence." },
        { mistake: "Publishing syndicated MLS content without modification", impact: "Duplicate content across hundreds of sites tells Google your site adds no unique value. Your listing pages get deindexed or ranked beneath aggregators.", fix: "Unique, SEO-enhanced neighborhood descriptions and property content that passes duplication checks and earns original indexing." },
        { mistake: "No internal linking between area and guide pages", impact: "Google can't understand the topical relationship between your neighborhood pages, buyer guides, and market reports — so none rank well.", fix: "Systematic internal linking architecture that passes PageRank to your highest-value pages and signals topical authority." }
      ],
      tools: ["Ahrefs", "Google Search Console", "Screaming Frog", "BrightLocal", "Google Business Profile API", "SEMrush", "PageSpeed Insights", "Schema Markup Validator", "Surfer SEO", "Moz Local"],
      timeline: {
        m1: "Full audit, keyword map, GBP optimization, and technical fixes. Foundation fully set.",
        m2: "First neighborhood pages and buyer guides published. Initial ranking movements for long-tail terms.",
        m3: "Measurable organic traffic from neighborhood content. GBP visibility improvements in local 3-pack.",
        m6: "Consistent lead flow from organic search. Multiple page-1 rankings for target neighborhood terms.",
        m12: "Dominant local presence. New markets and services added. Organic leads matching or exceeding paid sources."
      },
      keywords: [
        "real estate agent [city]", "homes for sale [neighborhood]",
        "best neighborhoods in [city]", "luxury real estate [city]",
        "buy a house in [city]", "real estate agent near me",
        "[city] housing market 2025", "investment property [city]",
        "how to find a real estate agent [city]", "first time home buyer [city]",
        "sell my house fast [city]", "[neighborhood] homes for sale",
        "condos for sale [city]", "top rated realtor [city]",
        "home valuation [city]", "moving to [city] guide"
      ],
      caseStudy: {
        client: "Prime Realty Group",
        location: "Miami, FL",
        before: "820 organic visits/mo, 4 organic leads/mo",
        after: "9,400 organic visits/mo, 47 organic leads/mo",
        leads: "11× lead increase. Closed 6 deals from organic in month 5.",
        period: "7 months",
        highlight: "Coconut Grove neighborhood page ranked #1 — now drives 2,100 visits/mo alone",
        testimonial: "We used to pay Zillow $3,000/month for mediocre leads. Now our organic pipeline costs us nothing and the quality is far better. Rankston completely changed how we think about marketing."
      },
      localVsNational: {
        local: "For most real estate agents, local domination is the objective. We build neighborhood-by-neighborhood authority — creating content that ranks in each specific area you serve. A single top-3 ranking for a high-intent neighborhood search can generate 8–15 buyer inquiries per month. We compound this across every neighborhood in your market.",
        national: "For franchises, national brokerages, or real estate technology companies, we build national SEO strategies covering multiple markets simultaneously — using scalable content systems, multi-location GBP optimization, and programmatic landing pages for hundreds of target cities."
      },
      faqs: [
        { q: "How long does real estate SEO take to work?", a: "The honest answer: 3–6 months for measurable traffic, 6–9 months for significant lead volume. Real estate is competitive, and Google needs time to trust new content. However, neighborhood-level keywords with low competition can start ranking in 4–8 weeks. We focus on quick wins first, then build toward dominant market positions." },
        { q: "Can I compete with Zillow and Realtor.com?", a: "Not on their terms — broad city-level searches are dominated by aggregators with decades of authority. But you can absolutely outrank them on neighborhood-level, agent-specific, and long-tail searches. 'Best real estate agent in [neighborhood]' or '[neighborhood] home values 2025' are winnable. That's where we play." },
        { q: "Should I focus on buyer or seller keywords?", a: "Both — but they require different content strategies. Buyer keywords tend to be higher volume with longer research cycles. Seller keywords ('how much is my home worth [city]') are lower volume but extremely high intent. We build both simultaneously, prioritizing based on your business model and current client pipeline." },
        { q: "How do Google Business Profile and website SEO work together?", a: "GBP drives visibility in the local 3-pack for 'near me' and city-based searches, while your website drives visibility for neighborhood, content, and long-tail searches. They complement each other — a strong GBP links to your website, boosting its authority. We optimize both as an integrated strategy." },
        { q: "What content does a real estate website need to rank?", a: "Neighborhood guides (for every area you serve), market reports (monthly or quarterly), buyer and seller education content, agent bio pages optimized with local keywords, and community pages covering schools, amenities, and lifestyle. We build this systematically over your engagement." },
        { q: "How do you handle MLS content and duplicate content issues?", a: "We never publish raw MLS syndicated content. Every property page and area description we create is unique — written specifically for SEO value. For listing pages, we add unique neighborhood context, agent insights, and interactive elements that differentiate your content from aggregator sites." },
        { q: "Do you work with single agents or brokerages?", a: "Both. Single agents benefit from hyperlocal neighborhood authority and personal brand SEO. Brokerages benefit from multi-agent profile optimization, office location pages, and broader market content. We scale our approach to fit your size and growth goals." },
        { q: "Do reviews really affect real estate SEO?", a: "Significantly. Review count, recency, and rating affect your GBP ranking in the local 3-pack. More importantly, they affect click-through rate — a 4.8-star agent outclicks a 4.2-star agent regardless of ranking position. We implement a systematic review generation strategy as part of every real estate SEO engagement." }
      ]
    },

    // ─── 2. LAWYERS ───────────────────────────────────────────────────
    {
      slug: "lawyers",
      name: "Law Firms",
      icon: "⚖️",
      tagline: "Get Retained Before the Prospect Calls Anyone Else. Legal SEO That Converts.",
      heroSubtitle: "Legal clients search online when they're in crisis — and they hire the attorney who appears first, looks most authoritative, and answers their specific question. We make that attorney you.",
      overview: "Legal SEO is both the most competitive and highest-value SEO vertical that exists. A single retained personal injury case can be worth $15,000–$250,000 in contingency fees. A single criminal defense retainer averages $5,000–$50,000. The cost-per-click for legal keywords on Google Ads ranges from $50–$300 — which is exactly why organic SEO has the highest ROI in the legal industry.\n\nThe challenge is that law firm SEO requires a specialist approach. Google applies its most stringent quality standards (YMYL — Your Money Your Life) to legal content. Thin, generic content gets filtered. Only sites that demonstrate genuine legal expertise, local authority, and comprehensive coverage of their practice areas rank consistently.\n\nRankston builds the kind of legal SEO presence that Google rewards: deep practice area content hubs, attorney expertise signals, local authority through citations and reviews, and technically pristine site architecture. The result is a steady stream of pre-qualified leads who have already read your content, trust your expertise, and are ready to schedule a consultation.",
      stats: [
        { val: "$300", label: "avg CPC for legal keywords (paid)" },
        { val: "74%", label: "of legal clients research online first" },
        { val: "5×", label: "avg ROI vs paid legal ads" },
        { val: "6–9 mo", label: "to dominant local rankings" }
      ],
      painPoints: [
        { title: "Legal Keywords Are the Most Expensive on Google Ads", desc: "'Personal injury lawyer [city]' can cost $200+ per click on Ads. Organic SEO for the same term delivers the same traffic at zero marginal cost. Most firms are overspending on ads and underinvesting in SEO that would outperform their ad budget within 12 months." },
        { title: "Generic Law Firm Websites Don't Pass Google's Quality Test", desc: "Google applies YMYL (Your Money Your Life) standards to legal content. Template websites with thin, generic practice area descriptions rank nowhere. Only comprehensive, expertise-demonstrating content earns visibility for competitive legal searches." },
        { title: "Competitor Firms Have Years of Content Authority", desc: "Established firms with 5+ years of published legal content have a compounding authority advantage. Without a systematic content strategy, you continue falling behind while their organic presence grows every month." },
        { title: "Practice Area Pages Are Too Thin to Rank", desc: "A single 400-word personal injury page cannot rank against comprehensive 3,000+ word guides from competing firms. Google's YMYL standards demand depth. Every practice area needs a content hub, not a paragraph." },
        { title: "No Local Citation Consistency", desc: "Law firms appear across dozens of legal directories (Avvo, Justia, FindLaw, Martindale) — but inconsistent name, address, and phone number data across these directories actively suppresses local rankings." },
        { title: "Missing EEAT Signals Hurt Domain Authority", desc: "Google's EEAT (Experience, Expertise, Authority, Trust) framework is especially critical for legal websites. Missing attorney credential callouts, bar association memberships, case results, and media mentions leave your site's trustworthiness unvalidated." }
      ],
      strategy: {
        title: "Our SEO Strategy for Law Firms",
        intro: "Legal SEO requires a different level of precision than most industries. The keywords have enormous commercial value, Google's quality bar is at its highest, and the competitive landscape is funded by firms spending $50,000/month on ads. We compete by building what money can't buy quickly: genuine topical authority, local dominance, and EEAT signals that Google trusts.",
        pillars: [
          { title: "Practice Area Content Hubs", desc: "Each practice area gets a comprehensive content hub — a pillar page supported by subtopic articles that together establish topical authority", tactics: ["Pillar pages (3,000+ words) for each practice area", "Supporting articles answering every related legal question", "Case type pages targeting specific search queries", "Local legal content targeting your specific jurisdiction"] },
          { title: "EEAT & Trust Signal Architecture", desc: "Google's highest-quality standards require explicit signals of attorney expertise", tactics: ["Attorney bio pages with credentials, bar admissions, verdicts", "Case results and notable settlements (where permitted)", "Media mentions and press citation integration", "Bar association and legal directory profile optimization"] },
          { title: "Local Legal Dominance", desc: "Most legal searches are local — your GBP and local citations determine who wins the 3-pack", tactics: ["Google Business Profile optimization for each practice area", "Legal directory citations: Avvo, Justia, FindLaw, Martindale-Hubbell", "Review generation strategy (quantity + recency + responses)", "Local schema markup: Attorney, LegalService, FAQPage"] }
        ]
      },
      services: [
        "Practice Area Content Hubs", "Attorney Bio Page Optimization",
        "Legal Schema Markup", "Google Business Profile for Law Firms",
        "Legal Directory Citation Building", "Review Generation Strategy",
        "Competitor Gap Analysis", "Local Keyword Research",
        "Case Type Targeting Pages", "FAQ Content for Voice Search",
        "Core Web Vitals Optimization", "Monthly Performance Reports"
      ],
      commonMistakes: [
        { mistake: "One short page per practice area", impact: "No depth means no rankings. A 500-word personal injury page competing against 3,000-word comprehensive guides from established firms will not rank on page 1 under any circumstance.", fix: "We build content hubs — one comprehensive pillar page per practice area supported by 5–10 related articles covering every subtopic and search variant." },
        { mistake: "Skipping legal directory citations", impact: "Google cross-references your business information against legal directories like Avvo, Justia, and FindLaw to validate your firm's legitimacy. Missing or inconsistent profiles actively suppress your local rankings.", fix: "Complete build-out and consistency audit of your firm across 40+ legal directories, with ongoing citation monitoring." },
        { mistake: "No review generation strategy", impact: "Law firms with fewer than 20 Google reviews are outclicked by competitors regardless of ranking position. Clients trust reviews, and Google rewards review velocity with improved local rankings.", fix: "Systematic post-consultation review request system — text + email sequence — that generates 8–12 new reviews per month." },
        { mistake: "No location-specific pages for multi-location firms", impact: "A firm serving 3 cities with one website page for each city is invisible in local searches for those cities. Google can't determine geographic relevance without location-specific content.", fix: "Individual, unique location pages for each city you serve — with local keywords, area-specific content, and location schema markup." }
      ],
      tools: ["Ahrefs", "Clio (integration)", "BrightLocal", "Screaming Frog", "Google Search Console", "SEMrush", "Avvo API", "Justia", "Schema Markup Validator", "CallRail"],
      timeline: {
        m1: "Complete audit, practice area content plan, GBP optimization, legal directory citations. Foundation built.",
        m2: "First practice area pillar pages published. Attorney bio pages optimized. Citation consistency complete.",
        m3: "Early ranking movements for long-tail legal searches. GBP impressions increasing.",
        m6: "Consistent top-5 rankings for primary practice area + city keywords. Organic consultation bookings increasing.",
        m12: "Multi-practice area dominance. Organic leads rival or exceed paid advertising volume at a fraction of the cost."
      },
      keywords: [
        "personal injury lawyer [city]", "criminal defense attorney [city]",
        "family law attorney near me", "DUI lawyer [city]",
        "employment lawyer [city]", "workers compensation attorney [city]",
        "car accident lawyer [city]", "medical malpractice attorney [city]",
        "divorce lawyer [city]", "wrongful death attorney [city]",
        "immigration lawyer [city]", "estate planning attorney [city]",
        "free legal consultation [city]", "best lawyers in [city]",
        "how to find a lawyer [city]", "lawsuit attorney near me"
      ],
      caseStudy: {
        client: "Hartley Employment Law",
        location: "Los Angeles, CA",
        before: "120 organic visits/mo, 1 contact form/mo",
        after: "11,200 organic visits/mo, 28 consultations/mo",
        leads: "+$380K in retained cases from organic in 10 months",
        period: "10 months",
        highlight: "Wrongful termination guide ranked #1 in LA — drives 2,800 monthly visits",
        testimonial: "I was spending $12,000/month on Google Ads with inconsistent results. Rankston's SEO now generates more consultations per month than my ads ever did. The quality is dramatically better — these are clients who have already read my content and trust me before we even speak."
      },
      localVsNational: {
        local: "Most law firms serve a defined geographic region — a city, county, or state. We build hyper-local legal SEO that dominates for every relevant service + location keyword combination in your market. If you serve 5 practice areas in 3 cities, that's 15+ primary keyword targets with multiple supporting subtopics each.",
        national: "Multi-state firms, national class-action practices, and legal technology companies need national SEO strategies. We build scalable content systems covering every target state and city, with programmatic landing pages, multi-location GBP management, and nationwide link building from legal media and bar associations."
      },
      faqs: [
        { q: "How long does law firm SEO take to generate real leads?", a: "Practice area pages targeting medium-competition terms can start ranking in 3–5 months. Highly competitive terms like 'personal injury lawyer [major city]' take 9–18 months of consistent effort. We prioritize a mix of quick-win long-tail terms and long-term authority building so you see ROI throughout the engagement, not just at the end." },
        { q: "Is SEO worth it compared to Google Ads for law firms?", a: "The math is clear: legal keywords cost $50–$300 per click on Ads. An organic page that ranks #1 delivers the equivalent of thousands of dollars of ad traffic per month at zero marginal cost. The ROI of legal SEO, once rankings are established, is 5–10× that of sustained ad spend. The challenge is the 6–9 month ramp-up period — which is why the best strategy is building SEO now while running ads during the transition." },
        { q: "Can SEO help with multiple practice areas?", a: "Absolutely — in fact, multi-practice area firms benefit most from SEO. We build a content hub for each practice area, which compounds your overall domain authority. Each new practice area you rank for reinforces the others. A firm ranking across 5 practice areas has a dramatically stronger domain than one that ranks for only one." },
        { q: "What are the most important Google ranking factors for law firms?", a: "For local pack rankings: GBP optimization, review volume and recency, and local citations. For organic rankings: content depth and quality (EEAT), backlinks from legal directories and relevant sites, technical site health, and user engagement metrics. We optimize all of these as an integrated strategy." },
        { q: "Do bar advertising restrictions affect legal SEO?", a: "State bar advertising rules primarily govern explicit claims (e.g., 'we win every case'). Standard SEO content — educational articles, FAQ pages, case type explainers — is universally compliant. We review all content against your state bar's specific advertising rules before publication." },
        { q: "Should my law firm blog? Does it help SEO?", a: "A strategic legal blog is one of the highest-ROI content investments available. Not a generic blog — a targeted editorial calendar mapping articles to specific legal search queries. One well-written, 1,500-word article answering a common legal question your prospects search can rank in the top 3 and generate consultation requests for years." },
        { q: "How do attorney reviews on Google affect rankings?", a: "Reviews affect both local pack rankings (where you appear in the 3-pack matters enormously) and click-through rates from search results. A firm with 85 4.9-star reviews gets dramatically more clicks than a firm with 12 4.3-star reviews — even at the same ranking position. We implement systematic review generation as a core component of legal SEO." },
        { q: "What's EEAT and why does it matter for law firm SEO?", a: "EEAT stands for Experience, Expertise, Authority, and Trust — Google's quality evaluation framework. For legal sites, this means your attorneys' credentials and experience must be clearly presented, your firm must have verifiable authority signals (awards, media mentions, bar certifications), and trust indicators (reviews, secure site, clear contact info) must be prominent. Missing EEAT signals is why many well-intentioned law firm sites plateau at page 2–3." }
      ]
    },

    // ─── 3. DENTISTS ──────────────────────────────────────────────────
    {
      slug: "dentists",
      name: "Dental Practices",
      icon: "🦷",
      tagline: "Fill Your Chair Every Day. SEO for Dentists That Drives Real Appointments.",
      heroSubtitle: "When someone has a toothache or needs a dental cleaning, they search Google first. The practice that appears in the top 3 results gets the call. We put you there — and keep you there.",
      overview: "Dentistry has one of the highest local search conversion rates of any healthcare profession. When a patient searches 'dentist near me' or 'emergency dentist [city],' they need an appointment — today or this week. The search-to-call intent is immediate, the decision is fast, and the lifetime value of a new patient ranges from $3,000–$15,000 depending on treatment mix.\n\nThe challenge: dental SEO is intensely local and fiercely competitive. Most mid-sized cities have 50–200 dentists competing for the same keywords. The practices that win have optimized Google Business Profiles, comprehensive service pages, strong review profiles, and fast, mobile-first websites.\n\nRankston's dental SEO system is built on a deep understanding of how patients choose dentists — starting with Google. We combine hyperlocal SEO, dental-specific schema markup, review generation systems, and service-specific content that captures patients at every stage of their search, from 'teeth whitening cost' to 'emergency dental near me.'",
      stats: [
        { val: "77%", label: "of patients research before booking" },
        { val: "$8,200", label: "avg lifetime patient value" },
        { val: "4×", label: "avg new patient increase in 12 months" },
        { val: "3-pack", label: "target position for local searches" }
      ],
      painPoints: [
        { title: "Generic 'Dentist in [City]' Pages Don't Rank", desc: "With 50–200 dentists in a typical city all targeting the same keywords, generic dental pages have near-zero ranking potential. Differentiation through specialty, neighborhood, and patient-type targeting is essential." },
        { title: "Google Business Profile Is Not Optimized", desc: "The GBP 3-pack captures 44% of clicks for local searches. Most dental GBPs have incomplete service categorization, no photo strategy, no post cadence, and fewer than 20 reviews — leaving appointments on the table every day." },
        { title: "No Service-Specific Landing Pages", desc: "A patient searching 'Invisalign cost [city]' is a different person than one searching 'emergency dentist open Sunday.' Without service-specific pages, you're invisible to both regardless of your general keyword ranking." },
        { title: "Slow Website Speed Hurts Mobile Healthcare Searches", desc: "Google prioritizes fast-loading mobile sites for healthcare searches. A dental website loading in 4+ seconds loses both rankings and patients who hit the back button. Core Web Vitals directly impact your search visibility." },
        { title: "Competitors Have 10× More Reviews", desc: "Reviews are the primary trust signal for new dental patients. A practice with 200 Google reviews with a 4.9 rating will win more patients from identical search positions than a practice with 25 reviews at 4.5 stars." },
        { title: "Missing Dental Schema Markup", desc: "Dental-specific schema markup (Dentist, MedicalOrganization, Service schemas) signals to Google exactly what you do, where you're located, and who you serve. Without it, Google has to guess — and often gets it wrong." }
      ],
      strategy: {
        title: "Our SEO Strategy for Dental Practices",
        intro: "Dental consumers make fast, trust-based decisions. When their tooth hurts or it's time for a cleaning, they search Google, see the top results, compare reviews, and call — within minutes. Our strategy ensures you win that moment across every dental service you offer and every patient type you want to attract.",
        pillars: [
          { title: "Service Page Architecture", desc: "Every dental service you offer needs its own optimized page targeting patients actively searching for that specific treatment", tactics: ["Individual pages for: general dentistry, cosmetic dentistry, Invisalign, implants, emergency dental, teeth whitening, root canal, pediatric dentistry", "Service-specific schema markup", "Patient FAQ sections answering 'how much does [service] cost [city]'", "Before/after integration for cosmetic pages"] },
          { title: "Local Pack Domination", desc: "The Google Maps 3-pack is where dental leads are won or lost — it appears above organic results and captures nearly half of all local clicks", tactics: ["Complete GBP optimization with all services, hours, photos, attributes", "Review generation system: 15+ new reviews/month", "Post cadence: weekly dental health tips and promotions", "Local citation consistency across healthcare directories"] },
          { title: "Patient Education Content", desc: "Patients who research dental procedures before calling are your highest-value targets — they've already decided they need care and are choosing a provider", tactics: ["Cost guide content: 'How much does Invisalign cost in [city]?'", "Comparison content: 'Implants vs. Dentures: What's Right for Me?'", "Procedure explainer content for every major service", "Dental anxiety content targeting a major patient hesitation"] }
        ]
      },
      services: [
        "Dental Service Page Creation", "Google Business Profile Optimization",
        "Review Generation System", "Dental Schema Markup",
        "Local Citation Building", "Core Web Vitals Optimization",
        "Patient Education Content", "Emergency Dentist SEO Targeting",
        "Cosmetic Dentistry SEO", "Pediatric Dentistry Landing Pages",
        "Competitor Analysis & Gap Targeting", "Monthly Performance Reporting"
      ],
      commonMistakes: [
        { mistake: "One general 'dental services' page instead of individual service pages", impact: "A patient searching 'teeth whitening [city]' won't click a generic dental services page. Without service-specific pages, you're invisible for procedure-specific searches which represent 60%+ of dental search volume.", fix: "Individual, fully optimized pages for every service you offer — each targeting the specific search terms patients use when researching that treatment." },
        { mistake: "Ignoring 'dentist near me' optimization", impact: "'Near me' searches for dentists have increased 900% in 5 years. Without proper GBP optimization and location schema, your practice is invisible for the highest-intent searches in dentistry.", fix: "Complete GBP audit, proximity optimization, service area configuration, and location schema markup." },
        { mistake: "No dental cost content", impact: "'How much does a root canal cost [city]' and 'Invisalign cost [city]' are some of the highest-volume, highest-converting dental searches. Most practices don't publish this content — missing enormous traffic.", fix: "Cost guide pages for every major service — providing honest price ranges, factors affecting cost, and insurance information that builds trust and pre-qualifies patients." },
        { mistake: "Under 25 Google reviews", impact: "Patients comparing dental practices choose the one with more, more recent, and higher-rated reviews. Below 25 reviews, you're statistically eliminated from consideration regardless of your ranking position.", fix: "Systematic post-appointment review request sequence generating 10–15 new reviews per month until you establish a competitive review profile." }
      ],
      tools: ["Ahrefs", "BrightLocal", "Google Business Profile API", "Screaming Frog", "Google Search Console", "Yext", "Schema Markup Validator", "PageSpeed Insights", "SEMrush", "ReviewTrackers"],
      timeline: {
        m1: "Full SEO audit, GBP optimization, service page architecture plan, citation consistency sweep.",
        m2: "Service pages published. Dental schema markup deployed. Review generation system launched.",
        m3: "Early GBP ranking improvements. New patient calls from service-specific searches beginning.",
        m6: "Consistent new patient flow from organic search. Multiple service and location rankings achieved.",
        m12: "Dominant local presence. Full service category coverage. Organic new patients exceeding paid advertising ROI."
      },
      keywords: [
        "dentist near me", "dentist [city]", "emergency dentist [city]",
        "teeth whitening [city]", "Invisalign [city]", "dental implants [city]",
        "cosmetic dentist [city]", "pediatric dentist [city]",
        "root canal [city]", "dental cleaning [city]",
        "tooth extraction [city]", "dental veneers [city]",
        "how much does Invisalign cost [city]", "dentist accepting new patients [city]",
        "affordable dentist [city]", "dental office near me open Saturday"
      ],
      caseStudy: {
        client: "Brightside Family Dental",
        location: "Phoenix, AZ",
        before: "280 organic visits/mo, 6 new patient calls/mo from organic",
        after: "6,400 organic visits/mo, 41 new patient appointments/mo",
        leads: "$31,200/mo in new patient revenue attributed to organic",
        period: "9 months",
        highlight: "Emergency dentist page ranked #1 in Phoenix — highest-converting page on the site"
      },
      localVsNational: {
        local: "99% of dental practices serve a defined local market — a city, a few zip codes, or a neighborhood. Local dental SEO dominates map pack results for every service you offer within your service radius. We build geographic authority that makes your practice the first result patients see when they're ready to book.",
        national: "Dental service organizations (DSOs) and multi-location group practices need a different strategy — consistent brand presence across every location with individual location pages, location-specific GBP optimization, and a centralized content strategy that builds authority for the entire network."
      },
      faqs: [
        { q: "How do I get more dental patients from Google?", a: "Three pillars: optimize your Google Business Profile for local 3-pack rankings, build service-specific pages for every treatment you offer, and generate consistent new Google reviews. These three elements together account for 80% of local dental SEO success." },
        { q: "Does paid dental advertising outperform SEO?", a: "In the short term, yes — Google Ads delivers immediate visibility. In the long term, no. A dental practice with strong SEO pays $0 per patient lead from organic search, vs. $40–$120 per click from Google Ads. After the 6–9 month ramp-up period, dental SEO typically delivers 5–8× the ROI of paid ads." },
        { q: "How important are Google reviews for dental SEO?", a: "Extremely. Reviews impact your GBP ranking position, your click-through rate from search results, and directly influence patient decisions. A practice with 200 reviews averaging 4.9 stars will outperform a practice with 30 reviews at 4.7 stars — in clicks, calls, and bookings — even from the same search position." },
        { q: "Should I have separate pages for each dental service?", a: "Absolutely. Each service targets a different search query. A patient looking for Invisalign is searching different terms than one looking for an emergency extraction. Without individual service pages, you rank poorly for all of them. With service-specific pages, you can rank for each independently." },
        { q: "What dental specialties benefit most from SEO?", a: "Cosmetic dentistry (Invisalign, veneers, whitening) and specialty services (implants, oral surgery, orthodontics) benefit most — they have high-value patients, high-volume searches, and high lifetime patient value. But general family dentistry also sees massive ROI from local SEO given the volume of 'dentist near me' searches." },
        { q: "How do I outrank the corporate dental chains?", a: "Corporate chains have brand authority but poor local relevance. Individual practices beat them by building hyper-local content, community involvement signals, personal reviews from real local patients, and neighborhood-specific landing pages. Google prefers the locally-relevant result for local searches." },
        { q: "Is dental SEO different from general SEO?", a: "Yes — dental SEO requires healthcare-specific schema markup, HIPAA-compliant content approach, Google's YMYL quality standards, and healthcare directory optimization. General SEO agencies often apply generic strategies that don't account for these nuances. We specialize in dental." },
        { q: "What's the first thing I should fix for dental SEO?", a: "Your Google Business Profile. It's the single highest-impact improvement available to most dental practices. A fully optimized GBP with complete service information, high-quality photos, regular posts, and 50+ reviews can double your new patient calls within 90 days." }
      ]
    },

    // ─── 4. HEALTHCARE ─────────────────────────────────────────────────
    {
      slug: "healthcare",
      name: "Healthcare",
      icon: "🏥",
      tagline: "Get Found by Patients Who Are Ready to Book. Healthcare SEO That Fills Schedules.",
      heroSubtitle: "Today's patients research their conditions online, compare providers on Google, and book the practice that appears most authoritative. We make your practice that provider — in every search that matters.",
      overview: "Healthcare is the most searched vertical on the internet. Over 80% of Americans research health information online, and 60% of patients say that online information has directly influenced their choice of healthcare provider. Every day, millions of patients search for symptoms, treatments, providers, and facilities — and most practices are almost entirely invisible in these searches.\n\nGoogle's standards for healthcare content are the most stringent of any industry. The 'YMYL' (Your Money Your Life) framework means that thin, inaccurate, or misleading health content is actively suppressed. Only practices that build genuine content authority, demonstrate healthcare provider expertise, and maintain technically sound websites earn sustainable rankings.\n\nRankston builds healthcare SEO that meets Google's quality standards while driving real patient appointments. Our approach covers the full patient search journey — from symptom research to provider comparison to booking — ensuring your practice captures patients at every stage of their decision-making process.",
      stats: [
        { val: "80%", label: "of patients research symptoms online" },
        { val: "60%", label: "say online info influenced provider choice" },
        { val: "3.5×", label: "avg appointment increase in 12 months" },
        { val: "YMYL", label: "Google's highest content standard applies" }
      ],
      painPoints: [
        { title: "Healthcare Websites Often Fail Google's YMYL Standards", desc: "Thin service pages, stock content, and non-physician-attributed articles fail Google's highest quality evaluation. These pages get filtered from results, leaving practices invisible for their most valuable patient searches." },
        { title: "Patients Can't Find You for Condition-Specific Searches", desc: "Patients search for their condition or symptom first, then for a provider. Without condition-specific content ('knee pain specialist [city]', 'type 2 diabetes management'), you miss the majority of the patient research journey." },
        { title: "Competing Hospital Systems Have Massive Domain Authority", desc: "Hospital networks publish thousands of health pages and have decades of authority accumulation. Competing directly on broad health terms is futile. We identify the specific searches where independent practices can outrank hospital networks." },
        { title: "Appointment Booking Search Opportunity Being Missed", desc: "Searches like '[specialty] doctor accepting new patients [city]' and '[specialty] appointments available [city]' are high-intent and often undercontested. Most practices have no content targeting these booking-stage searches." },
        { title: "Provider Profile Pages Underoptimized", desc: "Individual physician profile pages rank for doctor name searches and specialty + city combinations. Generic, minimal provider profiles miss enormous search traffic that pre-qualifies patients before they even call." },
        { title: "No Patient Education Content Funnel", desc: "Healthcare content marketing is one of the most effective patient acquisition strategies available. Patients who research a condition on your website and trust your educational content convert to appointments at 4–6× the rate of cold search traffic." }
      ],
      strategy: {
        title: "Our SEO Strategy for Healthcare Practices",
        intro: "Healthcare SEO must serve two masters simultaneously: the patient seeking information, and Google's quality algorithms that evaluate whether your content genuinely serves that patient. Our strategy builds real clinical authority across your specialty area — attracting patients at every stage of their healthcare journey.",
        pillars: [
          { title: "Condition & Treatment Content Hubs", desc: "Patients search for their conditions long before they search for a provider. We place you in front of them during that research phase", tactics: ["Condition-specific educational content for every condition you treat", "Treatment comparison pages ('medication vs. surgery for [condition]')", "Symptom checker content linking to appointment booking", "Post-treatment patient education that reduces calls and builds loyalty"] },
          { title: "Provider & Specialty Optimization", desc: "Individual physician SEO and specialty-level local optimization drive significant appointment volume", tactics: ["Physician bio pages optimized for name + specialty + city searches", "Specialty service pages for every modality and treatment area", "Insurance acceptance and 'accepting new patients' content", "Residency, fellowship, and board certification prominence for EEAT"] },
          { title: "Patient Trust Architecture", desc: "Healthcare decisions are high-stakes. Trust signals must be explicit, verifiable, and comprehensive", tactics: ["Patient testimonial integration (HIPAA-compliant formats)", "Awards, certifications, and health system affiliations prominently featured", "Healthcare-specific schema: Physician, MedicalOrganization, Hospital, MedicalClinic", "Google reviews strategy generating 10+ verified patient reviews monthly"] }
        ]
      },
      services: [
        "Condition & Treatment Content Creation", "Physician Bio Page Optimization",
        "Healthcare Schema Markup", "Google Business Profile for Healthcare",
        "Patient Review Generation", "Medical Directory Citation Building",
        "Specialty Service Page Creation", "Local Healthcare SEO",
        "Hospital Network Competitor Gap Analysis", "Core Web Vitals for Healthcare",
        "HIPAA-Compliant Content Strategy", "Monthly Patient Acquisition Reporting"
      ],
      commonMistakes: [
        { mistake: "Generic healthcare content without physician attribution", impact: "Google's YMYL evaluation requires content to demonstrate genuine medical expertise. Content without clear physician authorship, credentials, and review dates gets filtered as untrustworthy regardless of technical quality.", fix: "Every piece of medical content clearly attributed to a credentialed provider, with publishing date, review date, specialty, and board certifications prominently displayed." },
        { mistake: "No condition-specific landing pages", impact: "A patient with knee pain searching 'orthopedic knee specialist [city]' won't find a generic 'orthopedic services' page relevant. Every specific condition you treat needs dedicated content.", fix: "Condition-specific landing pages targeting every major diagnosis and treatment you offer — built on keyword research showing actual patient search behavior." },
        { mistake: "Ignoring 'accepting new patients' search terms", impact: "This high-intent keyword modifier is searched 40,000+ times/month nationally and represents a patient actively ready to book — not just researching. Most practices have no content targeting it.", fix: "Explicit 'accepting new patients' content on service pages, GBP, and provider profiles — updated regularly and schema-marked for insurance/availability information." },
        { mistake: "No strategy for patient reviews", impact: "Healthcare practices with fewer than 50 Google reviews lose patients to competitors regardless of clinical quality. Patients can't evaluate clinical outcomes directly — reviews are their proxy for quality.", fix: "Post-visit automated review request system generating 15–20 new verified Google reviews per month while maintaining HIPAA compliance." }
      ],
      tools: ["Ahrefs", "Google Search Console", "BrightLocal", "Healthgrades API", "Screaming Frog", "Schema Markup Validator", "SEMrush", "PageSpeed Insights", "Yext", "Vitals.com"],
      timeline: {
        m1: "Complete audit, physician bio optimization, GBP optimization, schema deployment, citation consistency.",
        m2: "Condition and treatment content publishing begins. Review generation system launched.",
        m3: "First patient traffic from condition-specific searches. GBP visibility improvements measurable.",
        m6: "Consistent new patient flow from organic search across specialty and condition searches.",
        m12: "Dominant specialty presence in your market. Full condition coverage. Organic appointments match paid channel volume."
      },
      keywords: [
        "[specialty] doctor near me", "[specialty] doctor [city]",
        "accepting new patients [specialty] [city]", "[condition] specialist [city]",
        "[condition] treatment [city]", "best [specialty] in [city]",
        "[symptom] doctor near me", "urgent care near me",
        "telehealth [specialty] [city]", "[procedure] recovery time",
        "how much does [procedure] cost", "does insurance cover [treatment]",
        "[specialty] for [patient type] [city]", "pediatric [specialty] [city]",
        "[condition] symptoms and treatment", "holistic [specialty] [city]"
      ],
      caseStudy: {
        client: "Cascade Orthopedic Group",
        location: "Seattle, WA",
        before: "410 organic visits/mo, 8 new patient inquiries/mo",
        after: "12,800 organic visits/mo, 64 new patient inquiries/mo",
        leads: "8× patient inquiry increase. 3-month appointment backlog created.",
        period: "11 months",
        highlight: "Knee replacement content hub ranked #1 in Seattle — drives 3,100 monthly visits"
      },
      localVsNational: {
        local: "Most healthcare practices serve a specific geographic area. We build specialty dominance within your service area — ensuring your practice appears for every relevant condition, treatment, and patient type search in your metro. Individual physician profiles + local GBP optimization + condition content creates a comprehensive local presence.",
        national: "National healthcare brands, telemedicine platforms, and multi-location health systems need a different scale. We build programmatic content systems covering every target market, national patient education hubs that build domain authority, and multi-location GBP and citation management."
      },
      faqs: [
        { q: "What is YMYL and how does it affect healthcare SEO?", a: "YMYL (Your Money Your Life) is Google's quality category for content that could significantly impact a person's health, finances, or safety. Healthcare is a primary YMYL category. Google applies its strictest quality evaluation to healthcare content, which means only content that demonstrates genuine medical expertise, accurate information, and clear authorship consistently earns good rankings. This is why we build all healthcare content with explicit physician attribution and clinical accuracy at the forefront." },
        { q: "How do hospital systems affect independent practice SEO?", a: "Hospital systems have enormous domain authority — but they often rank for broad terms while independent practices can outrank them on specialty + location combinations, specific condition searches, and patient experience terms. A single-specialty orthopedic practice can outrank a hospital for 'knee replacement specialist [city]' with the right strategy." },
        { q: "Is healthcare content marketing HIPAA compliant?", a: "Educational content marketing — articles about conditions, treatments, and healthcare tips — is entirely HIPAA compliant. Patient testimonials require written authorization. We build content strategies using only compliant content types, and all patient-adjacent content goes through a HIPAA compliance review before publication." },
        { q: "How do we attract patients for specific conditions?", a: "Through condition-specific content hubs. We research exactly what patients with your target conditions search for during their diagnosis and treatment research journey — then build authoritative content that appears for those searches and guides patients toward booking an appointment with your practice." },
        { q: "Should individual physicians have their own SEO strategy?", a: "Yes — physician-level SEO drives significant appointment volume. Patients often search for a specific doctor by name or specialty + location. Optimized physician bio pages with credentials, specialty keywords, and patient-friendly language perform exceptionally well and compound your practice's overall search authority." },
        { q: "How long before we see results from healthcare SEO?", a: "First measurable results (early ranking movements for long-tail searches) appear in 2–3 months. Significant patient volume from organic search typically begins at month 5–7. Full market dominance for your specialty takes 10–14 months. Healthcare SEO is a long-term investment — but the compounding returns make it the most cost-effective patient acquisition channel available." },
        { q: "How do patient reviews affect healthcare SEO?", a: "Reviews impact local pack rankings for 'near me' and city-based searches, click-through rates from search results, and — most importantly — patient decisions. 84% of patients say online reviews are as trustworthy as personal recommendations. A practice with 100+ verified reviews is perceived as meaningfully more trustworthy than one with 15 reviews, regardless of actual clinical quality." },
        { q: "Can healthcare SEO work for telehealth practices?", a: "Yes — telehealth SEO requires a slightly different approach targeting state-level rather than city-level geographic modifiers. 'Telehealth [specialty] [state]' searches have grown 400%+ since 2020 and remain undercontested in many specialties. We build telehealth-specific content and GBP strategies optimized for multi-state virtual care delivery." }
      ]
    },


    // ─── 5. RESTAURANTS ────────────────────────────────────────────────
    {
      slug: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      tagline: "Fill Every Table, Every Night. Restaurant SEO That Drives Foot Traffic.",
      heroSubtitle: "When someone is hungry and searching for a place to eat, they check Google first. The restaurant that appears first with great photos, strong reviews, and clear information gets the reservation. We put you there.",
      overview: "Restaurant discovery has moved almost entirely online. Over 90% of guests research a restaurant online before visiting — checking Google Maps, reading reviews, looking at menus, and confirming hours. The restaurants winning customer acquisition in 2025 are winning it in search results, not through word-of-mouth alone.\n\nThe challenge for most restaurants is that local restaurant SEO is both competitive and nuanced. Simply having a website isn't enough. The Google Business Profile 3-pack dominates the top of search results for every 'restaurants near me' and '[cuisine] restaurant [city]' search. Without GBP dominance, review velocity, and menu SEO, you're invisible to the largest pool of potential customers you've ever had access to.\n\nRankston builds restaurant SEO around one goal: getting hungry, ready-to-eat customers through your door. We optimize your Google Business Profile to win the local 3-pack, build review systems that generate consistent 5-star feedback, and create menu and location content that captures every type of diner searching in your area.",
      stats: [
        { val: "90%", label: "of diners research online before visiting" },
        { val: "33%", label: "of all restaurant searches are 'near me'" },
        { val: "94%", label: "of diners say reviews influence their choice" },
        { val: "3-pack", label: "captures 28% of all restaurant search clicks" }
      ],
      painPoints: [
        { title: "Not Appearing in Google Maps 3-Pack", desc: "The local 3-pack appears at the top of every restaurant search. If you're not in it for your cuisine type and neighborhood, you're invisible to customers who are ready to walk in tonight. 64% of consumers use Google Maps specifically to find a restaurant." },
        { title: "Outdated or Incomplete Google Business Profile", desc: "Restaurant GBPs with no photos, missing hours, outdated menu links, or zero post activity lose customers to better-managed competitors. Diners interpret an incomplete GBP as a signal that the restaurant itself is poorly managed." },
        { title: "Review Volume Too Low to Compete", desc: "A restaurant with 45 reviews loses walkins to a competitor with 380 reviews every single day. Review count is the primary trust signal for new diners, and it directly affects your GBP ranking in local search." },
        { title: "No Menu SEO — Missing Dish-Specific Searches", desc: "Searches like 'best wood-fired pizza [city]' or 'authentic tacos near me' are high-intent and often less competitive than generic 'restaurants near me.' Without menu-specific SEO content, you're invisible for your own specialty." },
        { title: "Competitor Restaurants Dominate Cuisine Category Keywords", desc: "For every cuisine type you serve, there are established restaurants with hundreds more reviews, better-optimized profiles, and more backlinks from food blogs and review sites. Closing this gap requires a systematic strategy." },
        { title: "No Strategy for Special Events and Seasonal Traffic", desc: "Valentine's Day, Mother's Day, graduation season, and holiday dining represent massive revenue peaks driven entirely by search. Without event and seasonal SEO content, you miss these highest-value booking opportunities." }
      ],
      strategy: {
        title: "Our SEO Strategy for Restaurants",
        intro: "Restaurant customers are impulse-driven and location-anchored. They search, they decide quickly, and they act. Our strategy puts your restaurant at the top of every relevant search — cuisine type, neighborhood, occasion, and dietary preference — so you capture every diner who's looking for exactly what you serve.",
        pillars: [
          { title: "Google Business Profile Domination", desc: "The GBP is the single most impactful asset for restaurant search visibility — optimizing it properly is the highest-ROI action available", tactics: ["Complete GBP build-out: menu, hours, photos, attributes, booking link", "Weekly post cadence: specials, events, behind-the-scenes", "Photo strategy: professional food photography integration", "Review velocity system: 20+ new reviews per month target"] },
          { title: "Cuisine & Occasion Keyword Targeting", desc: "Diners search by cuisine, occasion, location, and dietary need — we target every relevant combination", tactics: ["Cuisine-specific landing pages ('best [cuisine] restaurant in [city]')", "Occasion pages: date night, family dining, business lunch, birthday restaurants", "Dietary pages: vegan, gluten-free, halal, kosher options in [city]", "Neighborhood pages for every area you want to attract diners from"] },
          { title: "Review & Reputation Authority", desc: "Reviews are both an SEO ranking signal and the primary conversion factor for restaurant new customer acquisition", tactics: ["Post-meal automated review request via SMS/email", "Response strategy for all reviews (positive and negative)", "Integration with Yelp, TripAdvisor, OpenTable for multi-platform review consistency", "User-generated content strategy encouraging social photo sharing"] }
        ]
      },
      services: [
        "Google Business Profile Optimization", "Restaurant Review Generation System",
        "Menu SEO & Digital Menu Optimization", "Cuisine Category Keyword Targeting",
        "Occasion & Event Landing Pages", "Local Citation Building",
        "Food Blog Outreach & Backlinks", "Core Web Vitals Optimization",
        "Reservation Platform SEO (OpenTable, Resy)", "Seasonal Campaign SEO",
        "Competitor Restaurant Analysis", "Monthly Visibility Reporting"
      ],
      commonMistakes: [
        { mistake: "No food photography in GBP", impact: "GBPs with 10+ high-quality food photos receive 42% more direction requests than those without. A profile with 3 blurry interior shots loses clicks to competitors with 50 vibrant food photos.", fix: "Professional food photography integrated into GBP, updated monthly with seasonal dishes and specials." },
        { mistake: "Ignoring negative reviews", impact: "A single unanswered 1-star review viewed by potential diners reduces booking intent by 22%. Unanswered negative reviews signal poor customer service to both potential customers and Google's quality evaluation.", fix: "We implement a review response protocol — every review answered within 24 hours, with professional, empathetic responses that demonstrate your commitment to guest experience." },
        { mistake: "Website with no location or neighborhood content", impact: "A restaurant website with no neighborhood references, no local landmark mentions, and no area-specific content struggles to rank for neighborhood-level searches which represent 40%+ of restaurant search volume.", fix: "Location pages and neighborhood-specific content that establishes your restaurant as a local institution — mentioning nearby attractions, neighborhoods served, and community events." },
        { mistake: "Menu not indexed by Google", impact: "If your menu is a PDF or Flash-based, Google cannot read it. Your dishes don't appear in search results, and you miss every dish-specific and cuisine-specific search from potential diners.", fix: "HTML menu pages that Google can index, with proper schema markup for restaurant menu items, pricing, and dietary attribute labeling." }
      ],
      tools: ["Google Business Profile API", "BrightLocal", "Yelp API", "OpenTable SEO Integration", "Ahrefs", "Google Search Console", "SEMrush", "PageSpeed Insights", "Yext", "ReviewTrackers"],
      timeline: {
        m1: "GBP full optimization, review system launch, citation consistency, menu HTML conversion.",
        m2: "Cuisine and occasion pages published. Food photography integrated. First new review influx.",
        m3: "GBP impressions growing. New customer calls attributed to search increasing week-over-week.",
        m6: "Top-3 local pack presence for primary cuisine and neighborhood search terms. Review profile competitive.",
        m12: "Dominant local presence for all cuisine types served. Seasonal traffic captured consistently. Organic reservations exceed paid."
      },
      keywords: [
        "restaurants near me", "[cuisine] restaurant [city]", "best restaurants in [neighborhood]",
        "date night restaurants [city]", "family restaurants [city]", "brunch [city]",
        "happy hour [city]", "restaurant with private dining [city]",
        "birthday restaurant [city]", "best pizza [city]", "authentic [cuisine] near me",
        "vegan restaurants [city]", "gluten-free restaurant [city]",
        "restaurants open late [city]", "takeout [cuisine] [city]", "restaurant reservations [city]"
      ],
      caseStudy: {
        client: "Ember & Vine Bistro",
        location: "Nashville, TN",
        before: "41 Google reviews, invisible in local 3-pack, 12 organic table bookings/mo",
        after: "324 Google reviews, #1 in local 3-pack for 'bistro Nashville', 89 organic table bookings/mo",
        leads: "Friday/Saturday fully booked 3 weeks in advance from organic",
        period: "8 months",
        highlight: "Date night restaurant page ranked #2 in Nashville — drives 1,400 organic visits monthly"
      },
      localVsNational: {
        local: "Restaurants are almost exclusively local businesses — we build hyper-local authority for your specific neighborhood, cuisine category, and dining occasion. A single restaurant properly optimized can dominate the local 3-pack for 8–15 different cuisine and occasion keyword combinations in its neighborhood.",
        national: "Restaurant groups, chains, and franchises need location-by-location GBP optimization, consistent brand SEO across every city, and a centralized content strategy that builds national brand authority while driving local foot traffic for each individual location."
      },
      faqs: [
        { q: "What's the fastest way to get more restaurant customers from Google?", a: "Optimize your Google Business Profile immediately. Add 20+ high-quality food photos, ensure all hours are correct, complete every attribute (outdoor seating, reservations, parking), and launch a review generation system. A fully optimized GBP can increase calls and direction requests by 40–60% within 30 days." },
        { q: "Do restaurant reviews really affect Google rankings?", a: "Yes — review count, recency, and average rating are among the top 3 factors determining your local pack ranking. A restaurant with 300 reviews at 4.7 stars consistently outranks one with 45 reviews at 4.9 stars. Review velocity (getting new reviews consistently) is more important than a single burst of reviews." },
        { q: "Should my restaurant have a website or just a Google Business Profile?", a: "Both are essential and complementary. Your GBP captures 'near me' and map-based searches. Your website captures cuisine-specific, occasion-based, and long-tail searches that don't appear in the local pack. Together, they cover the full spectrum of restaurant search traffic." },
        { q: "How do I rank for specific dish or cuisine searches?", a: "Through menu-focused SEO content — HTML menu pages with dish names, ingredients, and cuisine descriptors that Google can index. Blogs about your specialty dishes, cuisine origin stories, and chef features also build cuisine-specific authority that ranks for food-specific searches." },
        { q: "How important is Yelp for restaurant SEO?", a: "Yelp reviews don't directly impact Google rankings — but Yelp pages for your restaurant appear in Google search results and affect click-through decisions. Maintaining a strong Yelp presence (and responding to reviews) contributes to your overall reputation strength, which indirectly supports Google trust signals." },
        { q: "Can food bloggers and local media help my SEO?", a: "Enormously. A backlink from a respected local food blog or newspaper food section is one of the most powerful local SEO signals available. We include outreach to local food content creators, bloggers, and media as part of our restaurant link-building strategy." },
        { q: "How should we handle our restaurant on Google for multiple locations?", a: "Each location needs its own Google Business Profile, its own location page on your website, and its own review strategy. Multi-location restaurants that merge these or don't create location-specific content underperform dramatically in local search." },
        { q: "Does posting regularly on Google Business Profile help?", a: "Yes — Google posts signal that your business is active and engaged. Weekly posts featuring specials, events, or seasonal dishes improve your GBP engagement signals, which affects ranking. We manage your GBP post cadence as part of every restaurant SEO engagement." }
      ]
    },

    // ─── 6. ECOMMERCE ──────────────────────────────────────────────────
    {
      slug: "ecommerce",
      name: "eCommerce",
      icon: "🛒",
      tagline: "Rank. Drive Traffic. Sell More. eCommerce SEO That Compounds Revenue.",
      heroSubtitle: "Paid ads stop the moment you stop paying. Organic SEO builds a compounding traffic engine that generates sales 24/7 — without cost per click. We build eCommerce SEO that turns Google into your best-performing sales channel.",
      overview: "eCommerce SEO is fundamentally different from local service SEO. You're not fighting for a city — you're competing nationally or globally for product and category keywords that often have thousands of competing pages. The companies that win are those with deep category content, technically sound product page structures, and the link authority to compete for high-volume, high-intent commercial searches.\n\nThe average eCommerce store relies on paid social and Google Shopping for revenue — spending 20–40% of revenue on advertising to maintain their customer acquisition. Meanwhile, organic search drives 33% of overall eCommerce traffic across all stores but goes largely untapped by most brands. The brands that invest in SEO systematically reduce their dependence on paid advertising while building a revenue engine that compounds every month.\n\nRankston's eCommerce SEO system covers the full stack: technical site health (crawlability, structured data, faceted navigation SEO), category page optimization, product page SEO at scale, and content marketing that builds topical authority in your product area. The result is a growing organic revenue channel that reduces your CAC and improves gross margins.",
      stats: [
        { val: "33%", label: "of eCommerce traffic from organic search" },
        { val: "8.5×", label: "avg ROI of eCommerce SEO vs paid ads" },
        { val: "43%", label: "of eCommerce revenue can come from organic" },
        { val: "6–9 mo", label: "to significant organic revenue growth" }
      ],
      painPoints: [
        { title: "Over-Reliance on Paid Traffic Creates Revenue Fragility", desc: "eCommerce stores dependent on Facebook Ads or Google Shopping for 80%+ of revenue are one algorithm change or CPM spike away from a revenue crisis. Organic SEO creates a stable, owned traffic channel that doesn't disappear when you pause spending." },
        { title: "Category Pages Are Not Optimized for Organic Search", desc: "Category pages are the highest-value SEO targets in eCommerce — they capture broad commercial searches ('men's running shoes', 'organic skincare') that drive massive purchase-intent traffic. Most eCommerce stores have thin, template category pages with no SEO content." },
        { title: "Product Pages Have Duplicate or Thin Content", desc: "Manufacturer descriptions used across multiple stores create duplicate content. Product pages with only a title, 3 bullet points, and a price can't compete against comprehensive product guides. Thin product content loses rankings to more thorough competitors." },
        { title: "Faceted Navigation Creates Crawl Waste and Duplicate URLs", desc: "Filter combinations (size=medium&color=blue) create thousands of near-duplicate URLs that waste Google's crawl budget and dilute page authority. Without proper faceted navigation control, large catalogs rank poorly despite having excellent products." },
        { title: "No Blog or Editorial Content to Build Authority", desc: "Buying guides, comparison articles, and product how-to content are some of the highest-converting eCommerce content types. Shoppers who read a buying guide before purchasing convert at 4–6× the rate of cold search traffic. Most stores have no content strategy." },
        { title: "Missing Structured Data Reduces Rich Snippet Visibility", desc: "Product rich snippets (price, availability, rating stars) in search results increase click-through rates by 30%+. Missing Product, Offer, and AggregateRating schema means your products appear as plain blue links while competitors show price and stars." }
      ],
      strategy: {
        title: "Our SEO Strategy for eCommerce Stores",
        intro: "eCommerce SEO requires technical precision and content depth working together. We start with the foundation — fixing technical issues that prevent Google from properly crawling and indexing your catalog — then build category and product authority through strategic content that captures shoppers at every stage of the purchase journey.",
        pillars: [
          { title: "Technical eCommerce SEO Foundation", desc: "Large product catalogs require careful technical architecture to rank efficiently", tactics: ["Faceted navigation control (canonical tags, noindex, parameter handling)", "Product and category schema: Product, Offer, AggregateRating, BreadcrumbList", "International SEO (hreflang) for multi-market stores", "Crawl budget optimization for catalogs of 500+ SKUs"] },
          { title: "Category & Collection Page Authority", desc: "Category pages are the primary revenue drivers in eCommerce SEO", tactics: ["Long-form category introductions (400–800 words of SEO content per category)", "Facet-level optimization for high-volume filter combinations", "Internal linking architecture connecting products to relevant categories", "Category page UX signals optimization (dwell time, pagination SEO)"] },
          { title: "Commerce Content Marketing", desc: "Buying guides and comparison content capture shoppers in the research phase with high purchase intent", tactics: ["Best-of and buying guide content for every major product category", "Product comparison articles ('X vs Y for [use case]')", "How-to and tutorial content linking to relevant products", "Seasonal and trend-based content capturing timely commercial searches"] }
        ]
      },
      services: [
        "Technical eCommerce SEO Audit", "Category Page Optimization",
        "Product Page SEO at Scale", "Structured Data Implementation",
        "Buying Guide & Comparison Content", "Link Building (Commerce Sites)",
        "Faceted Navigation SEO Control", "International eCommerce SEO",
        "Crawl Budget Optimization", "Amazon vs Website SEO Strategy",
        "Shopify/WooCommerce Technical SEO", "Monthly Revenue Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "Using manufacturer product descriptions verbatim", impact: "Identical descriptions across dozens of reseller sites means Google sees your product pages as duplicate content sources. Pages get filtered from results or ranked below competitors with unique content.", fix: "Unique product copy for every item — highlighting specific use cases, customer benefits, and differentiated features that manufacturer specs don't capture." },
        { mistake: "No content on category pages", impact: "A category page with zero text content (only a product grid) cannot compete for broad commercial keywords against competitors with keyword-rich category descriptions and buying guides.", fix: "400–800 words of genuine, valuable SEO content above or below the product grid on every major category page — buying guides, selection tips, and category-specific FAQ." },
        { mistake: "Allowing all filter combinations to be indexed", impact: "A catalog with 500 products and 10 filter types can generate 50,000+ unique URLs from filter combinations. Most are near-duplicate. This destroys crawl efficiency and dilutes ranking authority across thousands of useless pages.", fix: "Canonical tag strategy and robots meta control ensuring Google only indexes and credits the SEO value of your canonical category and product pages." },
        { mistake: "No review schema on product pages", impact: "Product pages without AggregateRating schema show as plain text links in search results while competitors show 4.8 ★★★★★ (1,240 reviews). The visual difference in click-through rate can be 35%+.", fix: "Full Product, Offer, and AggregateRating schema implementation across all product pages — generating rich snippets that dramatically improve organic CTR." }
      ],
      tools: ["Ahrefs", "Screaming Frog", "Google Search Console", "Merchant Center", "SEMrush", "Surfer SEO", "Schema Markup Validator", "PageSpeed Insights", "DeepCrawl", "Hotjar"],
      timeline: {
        m1: "Technical audit and fixes: crawl errors, schema deployment, faceted navigation control.",
        m2: "Category page optimization complete. Buying guide content production begins.",
        m3: "First organic revenue attribution measurable. Long-tail product and category traffic growing.",
        m6: "Significant organic revenue channel established. Category keywords ranking page 1 for target terms.",
        m12: "Organic search becomes top-3 revenue channel. Paid advertising dependency substantially reduced."
      },
      keywords: [
        "buy [product] online", "best [product] for [use case]", "[product category] sale",
        "[brand] vs [brand] [product]", "cheap [product] free shipping",
        "[product] review [year]", "best [product category] under $[price]",
        "where to buy [product]", "[product] buying guide",
        "top rated [product category]", "[product] comparison",
        "discount [product category]", "[product] deals [year]",
        "custom [product] online", "[product] wholesale", "bulk [product] order"
      ],
      caseStudy: {
        client: "PureForm Supplements",
        location: "Austin, TX (ships nationwide)",
        before: "$8K/mo organic revenue, 94% paid traffic dependency",
        after: "$87K/mo organic revenue, 41% organic traffic share",
        leads: "10.9× organic revenue growth in 12 months",
        period: "12 months",
        highlight: "Protein powder buying guide ranked #1 nationally — drives 18,000 monthly visitors"
      },
      localVsNational: {
        local: "Local eCommerce stores (regional delivery, local pickup) benefit from combining eCommerce SEO with local SEO — targeting city-level product searches and Google Business Profile optimization to capture shoppers who prefer local purchase options.",
        national: "National and international eCommerce brands need a full-scale category domination strategy — covering every product category with deep content, technical excellence, and authority building that compounds month over month to reduce paid advertising dependency."
      },
      faqs: [
        { q: "How is eCommerce SEO different from regular SEO?", a: "eCommerce SEO scales to thousands of pages (product and category pages), requires deep technical expertise in faceted navigation, structured data, and crawl budget management, and focuses on commercial intent keywords at every stage of the purchase journey. The content strategy is also different — buying guides, comparisons, and product how-tos replace the typical blog content of service-based SEO." },
        { q: "How long does eCommerce SEO take to generate revenue?", a: "First measurable organic revenue typically appears at 3–4 months for long-tail product searches. Significant revenue from category and competitive commercial keywords takes 6–10 months. The compounding nature of SEO means month-12 revenue is typically 3–5× month-6 revenue as authority builds." },
        { q: "Should I do SEO or Google Shopping for my eCommerce store?", a: "Both — they serve different moments in the purchase journey. Google Shopping captures immediate purchase intent. SEO captures early research queries (buying guides, comparisons, reviews) and builds sustainable traffic that doesn't require ongoing ad spend. The brands with the lowest customer acquisition costs run both channels simultaneously." },
        { q: "How do you handle SEO for Shopify stores?", a: "Shopify has specific technical SEO considerations — duplicate canonical URL issues, limited faceted navigation control, and default URL structures that require optimization. We are specialists in Shopify SEO, implementing custom solutions for tech debt that the platform creates out of the box." },
        { q: "How many blog posts do we need for eCommerce content marketing?", a: "Quality matters more than quantity. Four genuinely excellent buying guides targeting commercial-intent keywords will outperform forty thin blog posts. We prioritize 1–2 comprehensive pieces of commercial content per month, each targeting a specific buyer intent keyword cluster with real purchase volume." },
        { q: "What's the ROI of eCommerce SEO vs. Facebook Ads?", a: "Facebook Ads stop the moment you stop paying. eCommerce SEO builds a compounding asset — pages that rank today continue ranking and generating revenue for years. A typical eCommerce store sees 8–12× ROI from SEO compared to paid social over a 24-month horizon, with the gap widening every subsequent year as organic authority compounds." },
        { q: "How do product reviews affect eCommerce SEO?", a: "Product reviews affect SEO in two ways: review schema enables rich snippets (star ratings) in search results that improve CTR by 30%+, and review content itself often contains long-tail keyword phrases that improve product page relevance for search queries. We integrate review schema and encourage review generation as a core component of eCommerce SEO." },
        { q: "Can you help with Amazon SEO as well as website SEO?", a: "Yes — Amazon SEO (A9 algorithm optimization) and Google SEO are separate disciplines but complementary strategies. We advise on the strategic balance between building owned-channel (website) SEO and marketplace (Amazon) presence based on your business model, margins, and long-term brand goals." }
      ]
    },

    // ─── 7. ROOFING ─────────────────────────────────────────────────────
    {
      slug: "roofing",
      name: "Roofing & Home Services",
      icon: "🏗️",
      tagline: "Be the First Roofer They Call. Dominate Local Home Services Search.",
      heroSubtitle: "When homeowners need a roofer after a storm or inspection, they search Google, check reviews, and call the first trusted contractor they find. We make that contractor you — across every neighborhood you serve.",
      overview: "Roofing is one of the highest-intent local search verticals in existence. When a homeowner searches 'roofing contractor near me' or 'roof leak repair [city],' they are ready to get quotes today. The average roofing job is worth $8,000–$25,000, and a steady stream of organic leads from SEO can transform a roofing business.\n\nThe problem: most roofing companies have near-zero online presence. Many rely entirely on door-knocking after storms, referrals, or paid lead-generation services like HomeAdvisor or Angi — paying $35–$80 per shared lead that goes to 3–5 other contractors simultaneously. SEO changes this model entirely by generating exclusive leads from homeowners who find you organically and contact only you.\n\nRankston builds roofing SEO on the three pillars that matter most in home services: local visibility (Google Maps 3-pack), trust signals (reviews + certifications), and service-area content that ranks for every neighborhood you want to serve.",
      stats: [
        { val: "$12K", label: "avg residential roofing job value" },
        { val: "84%", label: "of homeowners search online before hiring" },
        { val: "5×", label: "cost of Angi leads vs SEO leads long-term" },
        { val: "2–4 mo", label: "to first exclusive organic leads" }
      ],
      painPoints: [
        { title: "Paying for Shared Leads That Close at 10%", desc: "HomeAdvisor and Angi leads are expensive, shared with 4 other contractors, and close at abysmally low rates. A homeowner who finds you organically on Google searched specifically for what you offer and contacts only you — closing rates are 4–5× higher." },
        { title: "No Presence in Google Maps for Any Service Area", desc: "The local 3-pack drives 29% of all clicks for home services searches. A roofing company invisible in Google Maps is losing $50,000+ in potential revenue per month in most mid-size markets." },
        { title: "No Service-Type Pages (Repairs, Replacement, Storm Damage)", desc: "A homeowner with a leaking roof searches differently than one planning a full replacement or filing an insurance claim. Without service-specific pages, you're invisible for the urgent, high-value searches that drive the most revenue." },
        { title: "Website Has No Suburb or Neighborhood Coverage", desc: "Targeting only your city misses the majority of roofing searches. Homeowners in suburbs search '[suburb] roofing contractor' not '[major city] roofing.' Without service-area pages for every suburb you serve, you're invisible in your most profitable neighborhoods." },
        { title: "Under 30 Google Reviews Vs. Competitors With 200+", desc: "Homeowners making a $15,000 decision are highly risk-averse. A roofing company with 12 reviews loses to one with 180 reviews every time — regardless of actual quality. Review volume is the primary trust signal in home services." },
        { title: "No Storm Damage or Insurance Claim Content", desc: "After every hail storm, hundreds of homeowners search 'roof storm damage [city]' and 'does insurance cover roof replacement [city].' Roofing companies with dedicated storm and insurance content capture these highest-urgency, highest-conversion leads." }
      ],
      strategy: {
        title: "Our SEO Strategy for Roofing Companies",
        intro: "Roofing customers are driven by urgency or major investment decisions — both require trust built before first contact. Our strategy builds your digital presence so homeowners in your service area find you first, trust your credentials, and call you — without competing on price with 4 other contractors from a paid lead service.",
        pillars: [
          { title: "Service Area Page Network", desc: "Covering every suburb and neighborhood you serve is the foundation of roofing SEO success", tactics: ["Individual location pages for every city, suburb, and neighborhood served", "City + service combination pages: '[city] roof replacement', '[suburb] roof repair'", "Unique content for each location page — local landmarks, weather patterns, area-specific roofing challenges", "Internal linking connecting service pages to location pages and vice versa"] },
          { title: "Emergency & Storm SEO", desc: "Storm damage and urgent repairs are the highest-converting search queries in roofing", tactics: ["Emergency roof repair landing page targeting urgent searches", "Storm damage assessment page with insurance claim guidance", "Seasonal storm content (hurricane season, hail storm, winter ice damage)", "24/7 emergency contact prominence on mobile for urgent lead capture"] },
          { title: "Trust & Authority Building", desc: "Homeowners spending $15,000+ need extensive trust signals before calling", tactics: ["Before/after project galleries with location and project type tagged", "Manufacturer certification badges (GAF, Owens Corning, CertainTeed)", "Insurance verification and licensing credential display", "Review generation system: 15+ new reviews per month"] }
        ]
      },
      services: [
        "Service Area Landing Pages", "Emergency Roofing SEO",
        "Storm Damage Content & SEO", "Google Business Profile Optimization",
        "Roofing Review Generation System", "Competitor Gap Analysis",
        "Insurance Claim Content Strategy", "Manufacturer Certification SEO",
        "Local Citation Building", "Core Web Vitals Optimization",
        "Before/After Gallery SEO", "Monthly Lead Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "One city page instead of suburb-level pages", impact: "'[City] roofing contractor' is an impossible battle against established local leaders. Meanwhile, '[suburb] roofing contractor' pages for every suburb you serve are often beatable with 3–6 months of effort and generate just as many leads.", fix: "Complete service-area page network — one unique, keyword-optimized page for every city, suburb, and community in your service radius." },
        { mistake: "No emergency or storm damage content", impact: "Post-storm searches are the highest-urgency, fastest-converting moment in home services. Without storm damage content, you're invisible for the searches that drive the most immediate revenue.", fix: "Dedicated storm damage and emergency repair pages targeting post-storm search patterns, with clear emergency contact CTAs and insurance claim guidance." },
        { mistake: "Project gallery with no SEO value", impact: "A photo gallery without project descriptions, location mentions, or alt text adds zero SEO value. Google can't read images. Un-described project photos are a missed opportunity for both rankings and customer trust-building.", fix: "Every project photo accompanied by a project description mentioning location, scope, materials used, and timeline — creating SEO-rich content from your existing work." },
        { mistake: "Competing on HomeAdvisor instead of building owned channel", impact: "HomeAdvisor/Angi leads cost $35–$80 each, are shared with competitors, and create no compounding asset. Over 3 years, the same investment in SEO generates 5–10× more exclusive leads with zero marginal cost per lead.", fix: "Systematic long-term SEO investment that builds an exclusive lead channel — redirecting paid lead spend into owned digital infrastructure over 12–18 months." }
      ],
      tools: ["Ahrefs", "BrightLocal", "Google Business Profile API", "Screaming Frog", "Google Search Console", "SEMrush", "PageSpeed Insights", "CallRail", "Yext", "HailTrace (storm tracking integration)"],
      timeline: {
        m1: "Full audit, GBP optimization, suburb page architecture, emergency content plan.",
        m2: "Service area pages published (10–15 suburbs). Review system launched. Storm content live.",
        m3: "First calls from suburb-level searches. GBP impression growth measurable.",
        m6: "Consistent organic leads from 5–8 suburbs. Emergency and storm pages driving high-intent traffic.",
        m12: "Dominant local presence across full service area. Organic leads outperforming paid lead services in volume and close rate."
      },
      keywords: [
        "roofing contractor [city]", "roof repair near me", "roof replacement [city]",
        "emergency roofing [city]", "storm damage roof [city]", "hail damage roof repair [city]",
        "roof leak repair [suburb]", "roofing company [suburb]", "residential roofing [city]",
        "commercial roofing [city]", "flat roof repair [city]", "shingle replacement [city]",
        "roof inspection [city]", "insurance roof claim [city]", "GAF certified roofer [city]",
        "how much does a new roof cost [city]"
      ],
      caseStudy: {
        client: "Summit Roofing Solutions",
        location: "Denver, CO",
        before: "0 organic leads/mo, 100% dependent on Angi leads",
        after: "31 exclusive organic leads/mo, suburb pages ranking across 12 areas",
        leads: "$287K in closed roofing contracts from organic in month 10",
        period: "10 months",
        highlight: "Aurora, CO service page ranked #1 — drives 890 qualified visits monthly"
      },
      localVsNational: {
        local: "Roofing is the ultimate local service business. We build suburb-by-suburb dominance — creating location pages that rank in every community you serve, so you're always the first roofer homeowners find regardless of which neighborhood they search from.",
        national: "National roofing franchises and multi-market roofing companies need scalable location-page systems, centralized GBP management across dozens of locations, and brand-level authority building that benefits every franchise location simultaneously."
      },
      faqs: [
        { q: "How do I stop paying for HomeAdvisor and Angi leads?", a: "By systematically building organic SEO that generates exclusive leads over 12–18 months. We build suburb-level service pages that rank in Google and drive homeowners to contact you directly. During the transition, you can gradually reduce your Angi spend as organic leads replace them — most clients are fully independent from paid lead services by month 15–18." },
        { q: "How many suburb pages do I need?", a: "One high-quality, unique page for every city, suburb, and community in your service area. If you serve 20 suburbs, you need 20 suburb pages. Each page should be 500–800 words of unique content — not copied templates. The effort pays off with multiple independent ranking opportunities that together dominate your full service territory." },
        { q: "Is storm damage SEO really that important?", a: "As a temporary traffic spike after major weather events, storm damage SEO is the highest-ROI content opportunity available to roofers. The searches aren't just high-volume — they're high-urgency and high-value. Homeowners searching 'hail damage roof repair [city]' after a storm need a roofer now. Being visible at that moment is worth thousands of dollars per ranking." },
        { q: "Should I use a local phone number or toll-free for my roofing website?", a: "Local area code phone number, always. Google uses local phone numbers as a geographic relevance signal, and homeowners are statistically more likely to call a local number than a toll-free one. Every location page should have its own tracked local number so you can attribute leads to specific pages." },
        { q: "How do roofing certifications affect SEO?", a: "Manufacturer certifications (GAF Master Elite, Owens Corning Preferred, CertainTeed SELECT ShingleMaster) are trust signals that both homeowners and Google value. Prominently displayed certification badges with verification links establish your authority. Some certifications also include placement in manufacturer contractor directories — which are high-authority backlinks." },
        { q: "How long until roofing SEO matches Angi lead volume?", a: "For most roofing companies in mid-size markets, organic leads begin surpassing paid service volume at the 8–12 month mark. The crucial difference: organic leads are exclusive, arrive with more context (they read your site), and close at 3–5× the rate of shared leads. Month-12 organic revenue typically exceeds month-12 Angi revenue by a significant margin." },
        { q: "What's the best content for a roofing website?", a: "The highest-converting content for roofing websites: service area pages (suburb-level), specific service pages (roof replacement, repair, emergency, storm), before/after project galleries with descriptive content, cost guides ('how much does a new roof cost in [city]'), and educational content about material types, insurance claims, and roof lifespan." },
        { q: "Do roofing companies need to blog?", a: "Yes — but strategically. The most valuable roofing blog content targets decision-stage searches: 'when to replace vs repair a roof,' 'how to spot storm damage,' 'GAF vs Owens Corning shingles comparison,' and 'what to look for when hiring a roofer.' These pre-educate prospects who then call with higher intent and trust." }
      ]
    },

    // ─── 8. PLUMBERS ──────────────────────────────────────────────────
    {
      slug: "plumbers",
      name: "Plumbing Companies",
      icon: "🔧",
      tagline: "Be the Plumber Google Shows First When Pipes Burst. Emergency SEO That Converts.",
      heroSubtitle: "When a pipe bursts at 11pm or a water heater fails on Saturday morning, homeowners search Google and call the first plumber they trust. We make that plumber you — 24/7, across every neighborhood you serve.",
      overview: "Plumbing is one of the highest-urgency local service verticals in existence. Plumbing emergencies happen at unpredictable times, require immediate action, and represent $300–$5,000+ per job. The homeowner searching 'emergency plumber near me' at midnight is going to call one of the first results they see — and they're going to call right now.\n\nMost plumbing companies get their leads from referrals, Yelp, or paid lead services. The companies that systematically invest in SEO build an exclusive lead engine that sends emergency and scheduled service calls directly to their phone — without paying HomeAdvisor $40–$80 for a shared lead or competing with 5 other plumbers for the same customer.\n\nRankston's plumbing SEO system combines emergency keyword targeting, suburb-level service area coverage, and trust-building review infrastructure to position your company as the obvious choice when homeowners face plumbing problems. The result is a consistent stream of exclusive leads from homeowners who already trust you before they dial.",
      stats: [
        { val: "$1,200", label: "avg plumbing job value" },
        { val: "71%", label: "of emergency searches result in same-day call" },
        { val: "3-pack", label: "gets 85% of clicks for emergency searches" },
        { val: "12 mo", label: "avg payback period for plumbing SEO" }
      ],
      painPoints: [
        { title: "Google Maps 3-Pack Invisible for Emergency Searches", desc: "71% of plumbing emergency calls trace back to a Google Maps result. A plumbing company not in the top 3 of Google Maps for their service area misses the majority of emergency leads — the highest-value, highest-urgency calls available." },
        { title: "No Service-Specific Pages for High-Intent Searches", desc: "A homeowner with a burst pipe searches differently than one who wants a water heater installed or a drain cleaned. Without service-specific pages targeting these distinct search intents, you're invisible for your most profitable job types." },
        { title: "Competitors Dominate 'Emergency Plumber Near Me'", desc: "Emergency plumber searches convert within minutes. Being on page 2 for this search is economically equivalent to not ranking at all. Winning the emergency search requires GBP dominance, reviews, and mobile-first optimized pages." },
        { title: "No Suburb-Level Service Area Coverage", desc: "Homeowners in suburbs rarely search '[major city] plumber' — they search '[their suburb] plumber.' Without suburb-level service pages, you're losing leads in the neighborhoods you already serve and drive to daily." },
        { title: "Under 40 Reviews Compared to Established Competitors", desc: "Plumbing is a high-trust service industry. A homeowner letting a plumber into their home with an emergency is trusting them with their most valuable asset. Review count and quality are the primary trust signals that determine the call." },
        { title: "No Commercial Plumbing SEO Strategy", desc: "Commercial plumbing contracts are worth 10–50× residential jobs. Yet most plumbing company websites have zero commercial-specific content, missing an enormous opportunity to attract property managers, general contractors, and business owners in their service area." }
      ],
      strategy: {
        title: "Our SEO Strategy for Plumbing Companies",
        intro: "Every plumbing search is high-intent. Whether emergency or planned installation, the homeowner has a problem and wants it solved now. Our SEO strategy positions you as the most visible, most trustworthy, and most responsive plumber in every neighborhood you serve — so when the call happens, it goes to you.",
        pillars: [
          { title: "Emergency Search Dominance", desc: "Emergency plumbing searches have the fastest conversion rate of any home services vertical — minutes from search to call", tactics: ["Emergency plumber landing page with mobile-first design and prominent call button", "24/7 availability content with clear emergency contact CTA", "Mobile page speed under 2 seconds for emergency search performance", "Google Business Profile emergency hours and messaging optimization"] },
          { title: "Service Area Expansion", desc: "Suburb-by-suburb ranking coverage creates a geographic moat around your service territory", tactics: ["Individual service area pages for every city, suburb, and community served", "City + service combination pages: '[suburb] water heater installation', '[suburb] drain cleaning'", "Geographic breadth signals through consistent NAP across all city pages", "Local landmark and utility company references in area-specific content"] },
          { title: "Commercial Plumbing Authority", desc: "Commercial plumbing contracts dramatically increase revenue per client and create repeat business", tactics: ["Commercial plumbing services page targeting property managers and contractors", "Commercial-specific content: commercial water heater, commercial drain systems", "B2B trust signals: bonding, insurance, commercial references", "Google Business Profile commercial services section optimization"] }
        ]
      },
      services: [
        "Emergency Plumber SEO", "Service Area Landing Pages",
        "Google Business Profile for Plumbers", "Plumbing Review Generation",
        "Commercial Plumbing SEO", "Service-Specific Page Creation",
        "Local Citation Building", "24/7 Emergency CTA Optimization",
        "Competitor Gap Analysis", "Core Web Vitals for Mobile",
        "Plumbing Schema Markup", "Monthly Lead Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "One phone number and no emergency content", impact: "Emergency plumbing calls are worth 2–3× scheduled service calls because urgency overrides price shopping. A website with no emergency content, no 24/7 indication, and no mobile-optimized emergency CTA loses these highest-value leads constantly.", fix: "Dedicated emergency plumbing page with 24/7 phone number prominently displayed, mobile click-to-call button, and emergency response time guarantee." },
        { mistake: "No suburb service area pages", impact: "A plumbing company serving 15 suburbs with one single-location website misses 85% of neighborhood-specific plumbing searches. Each suburb is a separate ranking opportunity representing thousands of dollars in annual revenue.", fix: "Individual service area pages for every community in your territory — each with unique content, local references, and full service offering description." },
        { mistake: "Ignoring Google Business Profile services list", impact: "GBP allows you to list every specific service you offer. Plumbers who don't populate their services list miss category-specific searches for water heater repair, drain cleaning, leak detection, and more — leaving these searches to competitors.", fix: "Complete GBP services list optimization covering every plumbing service offered, with service-specific descriptions and pricing ranges where applicable." },
        { mistake: "No commercial plumbing presence", impact: "Commercial plumbing jobs (office buildings, restaurants, multi-family properties) are contracted annually and worth 10–50× residential one-time jobs. Zero commercial online presence means zero commercial lead flow.", fix: "Dedicated commercial plumbing services page with B2B-oriented content, bonding/insurance credentials, and commercial reference opportunities." }
      ],
      tools: ["Ahrefs", "BrightLocal", "Google Business Profile API", "Screaming Frog", "Google Search Console", "SEMrush", "Mobile-Friendly Test", "CallRail", "Yext", "PageSpeed Insights"],
      timeline: {
        m1: "Full audit, emergency page optimization, GBP build-out, suburb page architecture.",
        m2: "Service area pages live. Emergency content published. Review generation system activated.",
        m3: "First suburb-level leads arriving. GBP emergency search visibility improving.",
        m6: "Consistent organic plumbing leads across 5–10 suburb areas. Emergency search presence established.",
        m12: "Full service area coverage ranking. Organic leads competitive with or exceeding paid service volume."
      },
      keywords: [
        "emergency plumber near me", "plumber [city]", "plumber [suburb]",
        "burst pipe repair [city]", "water heater replacement [city]",
        "drain cleaning [city]", "leak detection [city]", "clogged drain [city]",
        "sewer repair [city]", "plumbing repair near me", "24 hour plumber [city]",
        "commercial plumber [city]", "bathroom plumbing [city]", "kitchen plumbing [city]",
        "water heater repair near me", "plumbing company near me"
      ],
      caseStudy: {
        client: "RapidFlow Plumbing",
        location: "Houston, TX",
        before: "6 organic leads/mo, 100% HomeAdvisor dependent",
        after: "44 organic leads/mo across 8 suburb markets",
        leads: "$58K in plumbing jobs from organic on month 9",
        period: "9 months",
        highlight: "Katy, TX emergency plumber page ranked #1 — generates 12 exclusive leads monthly"
      },
      localVsNational: {
        local: "Plumbing is pure local — your radius is your revenue territory. We build suburb-by-suburb search dominance, ensuring your company appears first for every plumbing search in every community you service. Emergency and scheduled service pages together create comprehensive coverage that compounds every month.",
        national: "National plumbing franchises and multi-location plumbing groups need location-by-location GBP optimization, consistent brand SEO across every market, and franchise-level content systems that scale suburb page creation across dozens of locations simultaneously."
      },
      faqs: [
        { q: "How do I get emergency plumbing calls from Google?", a: "Three things: (1) Appear in the Google Maps 3-pack for 'emergency plumber near me' through GBP optimization and reviews. (2) Have a fast-loading, mobile-first emergency page with your phone number as the most prominent element. (3) Be clear about 24/7 availability on both your GBP and website. Emergency call volume increases dramatically when all three are optimized." },
        { q: "How many suburb pages do plumbers need?", a: "One for every community in your service area. If you work within a 30-mile radius of your home office, map every city, suburb, township, and community within that radius and create a unique page for each. Realistically, this is 10–30 pages for most plumbing companies — each one a separate ranking opportunity worth several thousand dollars in annual revenue." },
        { q: "Does having 24/7 service improve my Google rankings?", a: "Not directly as a ranking signal — but it improves your GBP attributes (24/7 hours), increases click-through rate when displayed in search results, and is a conversion factor that turns searchers into callers. We set your GBP hours correctly and prominently feature your emergency availability throughout your site." },
        { q: "How do Google reviews affect plumbing lead flow?", a: "Significantly — both for ranking position and for conversion. Local pack rankings weight review count and recency heavily. And a homeowner choosing between two plumbers in the 3-pack will almost always call the one with 180 reviews before the one with 22 reviews. We generate 10–15 new reviews per month targeting a highly competitive review profile within 6 months." },
        { q: "Should I have separate pages for water heater, drain cleaning, and other services?", a: "Absolutely. Each service targets a different search query from a different customer in a different situation. A homeowner with a clogged drain and one replacing a water heater are searching completely different terms. Without service-specific pages, you're invisible for all of them. With them, you rank for each independently." },
        { q: "Can I rank for commercial plumbing searches without a separate website?", a: "You can rank with dedicated commercial pages on your existing site — a standalone commercial plumbing services section with commercial-specific content, credentials, and case studies. A separate domain isn't necessary, but the content differentiation between residential and commercial must be clear to both Google and your potential business clients." },
        { q: "What's the fastest way to get more plumbing leads from SEO?", a: "Optimize your Google Business Profile first — it's the single highest-impact action. Complete all services, set correct hours, add 20+ professional photos, and launch a review request system. A fully optimized GBP can increase inbound calls 40–60% within 30–60 days, before any other SEO work is complete." },
        { q: "How do we compete with large plumbing franchise chains?", a: "By being more locally relevant. National chains have brand authority but weak local specificity. We build suburb-level content that out-localizes franchise websites — mentioning specific neighborhoods, local utilities, area-specific plumbing issues, and community references that franchise template sites never have. Local relevance beats brand authority for local searches." }
      ]
    },


    // ─── 9. CONTRACTORS ────────────────────────────────────────────────
    {
      slug: "contractors",
      name: "General Contractors",
      icon: "🏗️",
      tagline: "Win More Projects Before You Send a Single Quote. Contractor SEO That Fills Your Pipeline.",
      heroSubtitle: "The best general contractors win jobs before competitors even get a chance to bid. When project owners search for a GC online, the contractor with the strongest digital presence gets the first call — and the first call wins most often.",
      overview: "General contracting is a relationship-driven industry historically built on referrals and reputation. That's still true — but the entry point has shifted to Google. Property owners, developers, and commercial clients now research contractors extensively online before making first contact. A contractor with a strong website, verified reviews, and project portfolio visibility wins jobs that once required knowing the right people.\n\nThe opportunity is significant because most general contractors have almost no SEO presence. They rely on word-of-mouth, repeat clients, and occasional Houzz or Thumbtack leads. The contractors who invest in SEO gain an enormous first-mover advantage in their local market — attracting both residential renovation clients and commercial project owners who are actively searching for qualified GCs.\n\nRankston builds contractor SEO around showcasing your expertise, certifications, and past project quality in a format that search engines and project owners both trust. From specialty trade pages to commercial GC content to neighborhood project galleries, we build a digital presence that generates inbound project inquiries consistently.",
      stats: [
        { val: "76%", label: "of project owners research contractors online" },
        { val: "$45K", label: "avg residential renovation project value" },
        { val: "3–6 mo", label: "to first inbound project inquiries from SEO" },
        { val: "10×", label: "ROI of SEO vs paid lead services over 3 years" }
      ],
      painPoints: [
        { title: "No Online Presence Beyond a Basic Website", desc: "Most GC websites are digital business cards with no ranking power. Without keyword-targeted service pages, project galleries with SEO value, and local citation presence, you're invisible to project owners searching specifically for a contractor like you." },
        { title: "Specialty Services Are Not Individually Marketed", desc: "A GC that does kitchen remodels, bathroom renovations, additions, and commercial tenant improvements has 4+ separate markets of potential clients. Without individual pages for each specialty, you rank for none of them." },
        { title: "No Commercial Project Portfolio Visibility", desc: "Commercial clients (property managers, developers, business owners) won't call a GC based on word-of-mouth alone for a $500K+ project. They research online — and if your commercial work isn't documented and visible, you don't exist to them." },
        { title: "Weak Review Profile vs. Established Local Competitors", desc: "Project owners making significant investment decisions use reviews as a primary trust signal. A GC with 8 Google reviews loses to one with 95 reviews before the first call is ever made." },
        { title: "No Content Targeting Project Owner Research Queries", desc: "Content like 'how to choose a general contractor [city],' 'kitchen renovation cost guide,' and 'how long does a home addition take' captures project owners in the research phase — before they've decided who to call. Most GC websites have none of this content." },
        { title: "Not Ranking for Neighborhood or Suburb-Specific Project Searches", desc: "Homeowners planning renovations often search '[their neighborhood] contractor' or '[suburb] home remodeling contractor.' Without location-specific pages, you miss these high-intent searches in the neighborhoods you most want to work in." }
      ],
      strategy: {
        title: "Our SEO Strategy for General Contractors",
        intro: "Winning contractor SEO means being visible when project owners are actively researching — which happens weeks or months before they request quotes. We build your digital authority across every specialty, every neighborhood, and every project type you want to win more of.",
        pillars: [
          { title: "Specialty Service Page Architecture", desc: "Each specialty you offer needs its own page targeting project owners searching for that specific service", tactics: ["Individual pages for: kitchen remodeling, bathroom renovation, home additions, commercial tenant improvement, roofing, decks", "Cost guide content for each service type", "Process and timeline explainer content that builds buyer confidence", "Before/after projects integrated into service pages"] },
          { title: "Project Portfolio SEO", desc: "Your completed projects are your most powerful SEO and conversion asset", tactics: ["Project case study pages with location, scope, timeline, and materials", "Photo gallery SEO with descriptive alt text and location context", "Strategic internal linking from project pages to relevant service pages", "Schema markup for creative works and local business"] },
          { title: "Trust & Credential Authority", desc: "Commercial clients and large residential projects require extensive trust signals before first contact", tactics: ["License and insurance credential display", "Trade association membership: NAHB, AGC, local builder associations", "Bond and warranty documentation visibility", "Client testimonial integration with project context"] }
        ]
      },
      services: [
        "Specialty Service Page Creation", "Project Portfolio SEO",
        "Google Business Profile for Contractors", "Review Generation System",
        "Commercial GC Content Strategy", "Neighborhood Location Pages",
        "License & Credential SEO Signals", "Cost Guide Content",
        "Local Citation Building", "Competitor Gap Analysis",
        "Core Web Vitals Optimization", "Monthly Lead Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "One 'Services' page covering everything", impact: "A single services page cannot rank for kitchen remodeling, bathroom renovation, commercial construction, and home additions simultaneously. Project owners searching any specific service don't find you.", fix: "Individual, fully optimized service pages for every specialty — each targeting the specific keywords project owners use when researching that type of work." },
        { mistake: "Project photos with no descriptions", impact: "A gallery of 50 beautiful project photos with no text describing the project, location, scope, or materials adds zero SEO value and minimal trust value for project owners evaluating your capabilities.", fix: "Project case study pages — each photo series accompanied by a detailed description of the project scope, timeline, materials used, challenges overcome, and client outcome." },
        { mistake: "No commercial contractor content", impact: "Commercial construction projects range from $100K–$10M+. Contractors with no commercial-specific content, credentials, or case studies are completely invisible to commercial project owners searching for qualified GCs.", fix: "Dedicated commercial contracting section with project case studies, relevant certifications (OSHA, bonding levels, commercial references), and commercial-specific service descriptions." },
        { mistake: "Zero strategy for review generation", impact: "Construction projects take 2–12 weeks. Every completed project is an opportunity for a review from a satisfied client. Most GCs get zero reviews from 90% of their completed jobs — a massive missed opportunity.", fix: "Post-project review request system: text + email sequence sent upon project completion, with direct Google review link. Targeting 1 new review per completed project." }
      ],
      tools: ["Ahrefs", "Google Business Profile API", "BrightLocal", "Screaming Frog", "Google Search Console", "SEMrush", "Houzz API", "Angi/HomeAdvisor Profile Optimization", "PageSpeed Insights", "CallRail"],
      timeline: {
        m1: "Full audit, specialty page architecture, GBP optimization, citation building.",
        m2: "Specialty service pages published. Project case studies written and published. Review system launched.",
        m3: "First inbound inquiries from specialty service pages. GBP visibility improving.",
        m6: "Consistent project inquiry flow from multiple specialty and location searches.",
        m12: "Full specialty and location coverage ranking. Commercial project inquiries from organic beginning."
      },
      keywords: [
        "general contractor [city]", "home remodeling contractor [city]", "kitchen remodeling [city]",
        "bathroom renovation contractor [city]", "home addition contractor [city]",
        "commercial contractor [city]", "licensed contractor near me", "home renovation [suburb]",
        "remodeling company [city]", "construction company [city]", "how much does kitchen remodel cost [city]",
        "best contractor [city]", "tenant improvement contractor [city]", "custom home builder [city]",
        "deck builder [city]", "basement finishing contractor [city]"
      ],
      caseStudy: {
        client: "Apex Home Solutions",
        location: "Atlanta, GA",
        before: "4 organic inquiries/mo, 100% referral dependent",
        after: "28 organic project inquiries/mo across 6 specialty pages",
        leads: "$680K in new project contracts from organic in 11 months",
        period: "11 months",
        highlight: "Kitchen remodeling page ranked #2 in Atlanta — generates 14 project inquiries monthly"
      },
      localVsNational: {
        local: "General contracting is inherently local — projects require physical presence. We build neighborhood-level and suburb-level authority for every community in your service territory, with specialty pages that establish your expertise in each trade area you want more projects from.",
        national: "Regional and national construction firms, franchise contractor networks, and multi-state commercial GCs need scalable location-page systems, brand-level authority building, and commercial project search visibility across every target market."
      },
      faqs: [
        { q: "How does SEO help a general contractor get more projects?", a: "SEO puts your business in front of project owners when they're actively searching — before they ask for referrals or post a Houzz project request. A person searching 'kitchen remodeling contractor [city]' is in active project planning mode. Ranking in the top 3 for this search means you get inbound calls from motivated, qualified prospects instead of competing for referrals." },
        { q: "What's more important — a great website or Google Business Profile?", a: "Both are essential. Your GBP captures local search and 'near me' queries. Your website captures specialty service searches, commercial project searches, and the research queries project owners use to evaluate contractors. Together, they create a complete digital presence. Most GCs are underoptimized on both." },
        { q: "How do I get reviews after completed projects?", a: "The simplest and most effective method: send an SMS or email with a direct Google review link immediately after project completion — when client satisfaction is highest. We set up an automated post-project review request sequence for every client, targeting one review per completed job." },
        { q: "Should I have a separate page for commercial work?", a: "Absolutely. Commercial clients (property managers, developers, business owners) research differently and evaluate different criteria than residential clients. A dedicated commercial contracting page with commercial-specific case studies, certifications, and bonding information signals to commercial project owners that you understand their requirements." },
        { q: "How many specialty pages does a GC website need?", a: "One for every distinct service you offer. Kitchen remodeling, bathroom renovation, home additions, basement finishing, deck building, commercial tenant improvement — each gets its own page. This isn't just for SEO — it also helps project owners quickly self-identify whether you do the specific type of work they need." },
        { q: "Does having more completed projects help with SEO?", a: "Yes — but only if those projects are documented online. Each completed project turned into a case study page creates: unique SEO content, location-specific references, social proof for that type of work, and internal link opportunities. A GC with 20 documented project case studies has a dramatically stronger site than one with 200 undocumented jobs." },
        { q: "How long before contractor SEO generates consistent leads?", a: "For specialty service pages targeting medium-competition terms: 3–5 months. For competitive terms like 'kitchen remodeling [large city]': 6–9 months. We prioritize specialty + suburb combinations (lower competition, high intent) for early wins while building toward the most competitive terms over time." },
        { q: "Should GCs be on Houzz and Angi as well as Google?", a: "Houzz and Angi are useful for reputation (reviews) and supplementary visibility — but neither replaces the value of organic Google presence. Google drives 3–5× more project inquiries than Angi for most GCs with even modest SEO investment. We treat third-party directories as supporting signals while building your primary lead channel through Google." }
      ]
    },

    // ─── 10. MORTGAGE BROKERS ──────────────────────────────────────────
    {
      slug: "mortgage-brokers",
      name: "Mortgage Brokers",
      icon: "🏦",
      tagline: "Be Found by Buyers Ready to Finance. Mortgage SEO That Generates Applications.",
      heroSubtitle: "Home buyers research mortgages online for months before applying. The mortgage broker who appears in their searches earliest, educates them best, and builds digital trust wins the application — and the referrals that follow.",
      overview: "Mortgage is one of the most research-intensive financial decisions a consumer makes. The average home buyer spends 3–6 months researching mortgage options before applying. During that research period, they search for rates, compare lenders, research loan types, and look for brokers in their local area.\n\nFor mortgage brokers, organic SEO during this research period is the highest-ROI acquisition channel available. A first-time buyer content hub that ranks for 'FHA loan requirements [state]' or 'how much mortgage can I afford [city]' captures buyers who are months away from applying — building familiarity and trust with your brand before they've ever thought about who to call.\n\nThe challenge: mortgage content is YMYL territory. Google evaluates financial content at its highest quality standard. Generic mortgage content doesn't rank. Only comprehensive, accurate, expert-attributed content earns sustained visibility. Rankston builds the kind of mortgage educational content that Google trusts and buyers bookmark.",
      stats: [
        { val: "85%", label: "of buyers research mortgages online first" },
        { val: "$8,000", label: "avg origination revenue per loan" },
        { val: "6 mo", label: "avg research period before application" },
        { val: "YMYL", label: "Google's highest content standard applies" }
      ],
      painPoints: [
        { title: "Competing with Banks and National Lenders on Rate Keywords", desc: "Searching 'mortgage rates [city]' returns Bankrate, LendingTree, and national bank websites. Competing directly burns resources. The opportunity is in broker-specific, local, and complexity-based searches where independent brokers can win." },
        { title: "No First-Time Buyer Educational Content", desc: "First-time buyers are the most research-hungry mortgage customers. Content answering 'how does FHA work,' 'first-time buyer programs in [state],' and 'how much down payment do I need' captures these buyers early and builds trust before they apply." },
        { title: "Missing Local Realtor SEO Integration", desc: "Most successful mortgage brokers work closely with realtors. SEO content that attracts realtors as referral partners — and appears for searches realtors make on behalf of their clients — creates a powerful referral multiplier." },
        { title: "YMYL Standards Require Deep Content Expertise", desc: "Mortgage content that's generic, inaccurate, or thin fails Google's quality evaluation immediately. Building YMYL-compliant mortgage content requires specialist knowledge of loan types, qualification requirements, and regulatory frameworks." },
        { title: "No State-Specific Loan Program Content", desc: "Down payment assistance programs, state first-time buyer grants, and local affordable housing programs are searched constantly. Brokers who publish comprehensive state-specific program guides capture buyers who are actively looking for affordability solutions." },
        { title: "Review Volume Too Low for Financial Trust Signals", desc: "Borrowers making a 30-year financial commitment are extremely risk-averse. A mortgage broker with 12 Google reviews loses to one with 140 reviews every time. Reviews are the primary trust signal for financial services providers." }
      ],
      strategy: {
        title: "Our SEO Strategy for Mortgage Brokers",
        intro: "Mortgage buyers need education before they need a lender. Our strategy builds you as the most trusted source of mortgage information in your local market — capturing buyers at every stage of the research journey and nurturing them toward an application with your brokerage.",
        pillars: [
          { title: "Educational Content Hub", desc: "Buyers who trust your educational content call you when they're ready to apply", tactics: ["Loan type guides: FHA, VA, USDA, Conventional, Jumbo", "Buyer scenario content: first-time buyers, self-employed borrowers, investors", "Calculator-driven content: affordability, monthly payment, amortization", "State-specific grant and assistance program guides"] },
          { title: "Local Mortgage Authority", desc: "Local searches for mortgage brokers require GBP, citations, and locally-relevant content", tactics: ["GBP optimization for mortgage broker category", "City-specific mortgage market content", "Local real estate market + mortgage rate correlation content", "Realtor and real estate attorney referral relationship content"] },
          { title: "Trust & Credential Architecture", desc: "Financial YMYL content requires explicit expertise and authority signals", tactics: ["NMLS license number and credentials prominently displayed", "Team broker profiles with individual licensing information", "Client testimonial integration with loan type context", "Awards, recognitions, and regulatory compliance display"] }
        ]
      },
      services: [
        "Mortgage Educational Content Hub", "Loan Type Landing Pages",
        "State Program & Grant Content", "Google Business Profile Optimization",
        "Mortgage Review Generation", "Financial Schema Markup",
        "Local Mortgage Market Content", "YMYL Content Strategy",
        "Competitor Rate Content Strategy", "NMLS Credential SEO Signals",
        "Realtor Referral Content Strategy", "Monthly Lead Reporting"
      ],
      commonMistakes: [
        { mistake: "Rate-focused content competing with Bankrate", impact: "Current mortgage rate content is dominated by national aggregators with DA 90+. Competing on rate keywords wastes effort and budget with near-zero chance of ranking.", fix: "Educational, scenario-based content targeting specific buyer situations, loan types, and local market conditions where broker expertise provides genuine value not available on rate aggregator sites." },
        { mistake: "No first-time buyer content section", impact: "First-time buyers are the highest-volume, most research-intensive mortgage customer segment. No content targeting their questions means missing the largest addressable audience for independent mortgage brokers.", fix: "Comprehensive first-time buyer resource section covering down payment options, loan programs, qualification requirements, and the homebuying process step by step." },
        { mistake: "Loan officer profiles with no SEO value", impact: "Borrowers searching for a mortgage broker by name, specialty, or loan type won't find individual loan officers without properly optimized profile pages.", fix: "Individual loan officer profile pages with NMLS license, specialties (VA loans, jumbo, self-employed), languages spoken, and client testimonials — targeting officer name searches and specialty queries." },
        { mistake: "No strategy for realtor referral development through SEO", impact: "Realtors refer buyers to mortgage brokers constantly. Content that positions you as the expert resource for realtors (co-buyer financing, pre-approval best practices) creates a referral flywheel that compounds indefinitely.", fix: "Realtor resource content section: mortgage pre-approval guides for real estate agents, financing condition best practices, and co-buyer mortgage content that realtors share with clients." }
      ],
      tools: ["Ahrefs", "Google Search Console", "BrightLocal", "SEMrush", "Screaming Frog", "Schema Markup Validator", "PageSpeed Insights", "Mortgage rate API integration", "Yext", "CallRail"],
      timeline: {
        m1: "Audit, GBP optimization, credential SEO setup, content architecture plan.",
        m2: "Loan type pages and first-time buyer content published. Review system launched.",
        m3: "First organic mortgage inquiries from educational content. Local search visibility improving.",
        m6: "Consistent pre-application contact from organic search. Multiple loan type and location rankings achieved.",
        m12: "Dominant local mortgage broker presence. Educational content generating consistent referral traffic from realtors."
      },
      keywords: [
        "mortgage broker [city]", "first-time home buyer mortgage [city]", "FHA loan [state]",
        "VA loan [city]", "how much mortgage can I afford", "mortgage pre-approval [city]",
        "best mortgage rates [city]", "down payment assistance [state]", "USDA loan [state]",
        "jumbo mortgage [city]", "refinance mortgage [city]", "self-employed mortgage [city]",
        "mortgage broker near me", "home loan [city]", "mortgage calculator [city]",
        "investment property mortgage [city]"
      ],
      caseStudy: {
        client: "Clearpath Mortgage Group",
        location: "Dallas, TX",
        before: "180 organic visits/mo, 2 online applications/mo",
        after: "8,400 organic visits/mo, 34 applications/mo",
        leads: "$272K in origination revenue attributed to organic in 9 months",
        period: "9 months",
        highlight: "Texas first-time buyer guide ranked #1 — drives 2,100 monthly visits and 8 applications"
      },
      localVsNational: {
        local: "Most mortgage brokers are licensed in specific states and serve defined local markets. We build local mortgage authority — ranking for every loan type in your state, every city you serve, and the specific down payment and program searches that local buyers make.",
        national: "Multi-state licensed brokers and national mortgage companies need state-by-state content coverage, national loan type authority, and a programmatic content strategy that scales across every licensed market."
      },
      faqs: [
        { q: "Can a mortgage broker outrank Bankrate and LendingTree on SEO?", a: "Not on rate-comparison keywords — national aggregators have insurmountable authority for those terms. But mortgage brokers consistently outrank them on local searches ('mortgage broker [city]'), loan-specific local searches ('VA loan specialist [city]'), and scenario-based content ('mortgage for self-employed workers [city]'). That's where we compete." },
        { q: "How does mortgage content satisfy Google's YMYL standard?", a: "Financial content requires clear author attribution with NMLS license information, accurate regulatory and program information, updated publication and review dates, and explicit disclosure statements where required. We build mortgage content with all YMYL compliance elements built in from the start." },
        { q: "How important is the Google Business Profile for mortgage brokers?", a: "Very — especially for 'mortgage broker near me' and 'home loan [city]' searches. A complete GBP with your NMLS license, services, hours, and 50+ reviews significantly improves your local pack ranking. For independent brokers, the GBP is often their most important lead generation asset." },
        { q: "What content converts mortgage website visitors into applications?", a: "Calculator-driven content (affordability calculator, monthly payment calculator) keeps browsers engaged and personalizes their experience. Scenario-specific pages ('Can I get a mortgage with student loan debt?') address specific objections. And clear, frictionless pre-approval application CTAs on every high-traffic page convert the research traffic into applications." },
        { q: "How do reviews help mortgage brokers get more clients?", a: "Borrowers making a 30-year financial commitment need significant trust reassurance before applying. Reviews from past clients describing specific loan scenarios they navigated successfully (first-time buyer, VA loan, complex income) are among the most convincing conversion factors on a mortgage broker's website or GBP." },
        { q: "Should mortgage brokers blog?", a: "Yes — but strategically. The most valuable mortgage blog content addresses specific buyer situations and questions: 'what credit score do I need to buy a house,' 'how to get pre-approved for a mortgage,' 'FHA vs conventional loan comparison.' These articles rank for high-volume research queries and capture buyers early in the process." },
        { q: "How does SEO compare to buying leads from LendingTree?", a: "LendingTree leads cost $30–$100 each, are sold to multiple lenders simultaneously, and come with no context about the buyer. Organic SEO leads who read your content before contacting you are exclusively yours, arrive with buyer context, and close at 3–5× the rate of shared leads. The ROI differential over 24 months is dramatic." },
        { q: "Can mortgage brokers specialize in a niche and dominate SEO for it?", a: "This is one of the most effective mortgage SEO strategies available. Specializing in VA loans, self-employed borrowers, first-time buyers, or jumbo mortgages and building deep content authority in that niche allows you to outrank generalist brokers and national lenders for those specific keyword clusters. Niche authority converts at higher rates too." }
      ]
    },

    // ─── 11. ACCOUNTANTS ───────────────────────────────────────────────
    {
      slug: "accountants",
      name: "Accounting & CPA Firms",
      icon: "📊",
      tagline: "Get Found by Businesses and Individuals Who Need an Expert. CPA SEO That Builds a Practice.",
      heroSubtitle: "Tax season brings a flood of searches for CPAs. Year-round, business owners search for bookkeepers, tax strategists, and financial advisors. We make sure your firm appears first — and converts those searchers into long-term clients.",
      overview: "Accounting is a trust-intensive professional service where client relationships often last decades. The challenge of client acquisition has historically relied on referrals and professional network relationships — but search has fundamentally changed how both individuals and businesses find and evaluate accountants.\n\nToday, a small business owner searching 'CPA for small business near me' or an individual searching 'tax accountant [city]' is ready to engage a professional. These searches happen throughout the year but spike dramatically during tax season. The accounting firms that win these searches consistently fill their client roster with recurring, long-term clients worth thousands of dollars annually.\n\nRankston builds accounting SEO that covers both local authority (for GBP and local searches) and specialty authority (business accounting, tax strategy, bookkeeping, estate planning) that attracts the specific types of clients your firm wants most. The result is a sustainable pipeline of qualified inquiries that reduces dependence on referral networks.",
      stats: [
        { val: "67%", label: "of businesses search online for accountants" },
        { val: "$4,500", label: "avg annual value per accounting client" },
        { val: "10+ yr", label: "avg client lifetime for CPA relationships" },
        { val: "YMYL", label: "Google's highest standard applies to financial content" }
      ],
      painPoints: [
        { title: "Invisible for 'CPA Near Me' and Specialty Searches", desc: "Most accounting firms are invisible in local Google searches. With no GBP optimization, no specialty landing pages, and weak review profiles, they miss a consistent stream of clients who are actively searching for their exact services." },
        { title: "No Specialty Service Pages for High-Value Client Types", desc: "Business owners searching 'CPA for startups [city],' 'real estate accounting [city],' or 'small business tax accountant [city]' want specialists, not generalists. Without specialty pages, you're invisible to these high-value segments." },
        { title: "Tax Season Content Strategy Missing", desc: "Searches for tax preparation, tax deadlines, and tax strategies spike 10× during Q1. Accounting firms without educational tax content miss the highest-traffic period of the year for their industry." },
        { title: "YMYL Financial Content Standards Not Met", desc: "Google evaluates accounting and financial content at its highest quality standard. Thin service pages with no credentials displayed, no professional attribution, and no depth of content rank nowhere for competitive terms." },
        { title: "No Client Niche or Industry Specialization Content", desc: "Firms that serve specific industries (real estate investors, medical practices, restaurants, e-commerce businesses) have an enormous content opportunity. Industry-specific accounting content converts at dramatically higher rates but requires niche content that most firms don't publish." },
        { title: "Under 20 Reviews on Google", desc: "Individuals and business owners evaluating accountants check reviews carefully. Fewer than 20 reviews positions you below the trust threshold for most prospects, who choose the firm with 80+ overwhelmingly positive reviews." }
      ],
      strategy: {
        title: "Our SEO Strategy for CPA and Accounting Firms",
        intro: "Accounting clients are long-term relationships worth tens of thousands of dollars over their lifetime. Our SEO strategy builds your firm as the most visible, most credible, and most relevant accounting resource for the specific client types you serve best — attracting qualified inquiries consistently throughout the year, not just at tax season.",
        pillars: [
          { title: "Specialty & Industry Niche Pages", desc: "High-value accounting clients are searching for specialists, not generalists", tactics: ["Service pages: business accounting, tax preparation, bookkeeping, payroll, estate planning", "Industry niche pages: accounting for restaurants, real estate investors, medical practices, e-commerce", "Client type pages: individual vs. business accounting, self-employed, high net worth", "Life event content: new business formation, sale of business, inheritance accounting"] },
          { title: "Tax Education Content Hub", desc: "Educational content builds trust and captures prospects in the research phase before they've chosen a firm", tactics: ["Tax deadline calendar content (updated annually)", "Tax strategy guides: deductions, credits, retirement planning", "State-specific tax content for your jurisdiction", "Business tax vs. personal tax explainer content"] },
          { title: "Local Authority & Trust Signals", desc: "Local search dominance for accounting requires GBP excellence and professional credential visibility", tactics: ["GBP optimization: CPA and Accountant category, all services listed", "CPA license and professional organization memberships displayed", "Review generation system: 10+ new reviews per quarter", "Local business association membership content"] }
        ]
      },
      services: [
        "Specialty Service Page Creation", "Industry Niche Content",
        "Tax Education Content Hub", "Google Business Profile Optimization",
        "CPA Review Generation System", "Financial Schema Markup",
        "Client Niche Landing Pages", "Local Citation Building",
        "Competitor Gap Analysis", "YMYL-Compliant Content Strategy",
        "Core Web Vitals Optimization", "Monthly Client Acquisition Reporting"
      ],
      commonMistakes: [
        { mistake: "One generic 'accounting services' page", impact: "Business owners searching for a restaurant accountant, a high net worth individual searching for estate tax planning, and a startup founder looking for a CPA are all searching different terms. One page serves none of them well.", fix: "Specialty-specific pages for every service type and client niche — each targeting the specific keywords those client segments use when searching for accounting help." },
        { mistake: "No tax education content", impact: "Tax-related searches spike 10× during tax season — the highest-traffic period for any accounting website. Firms with no tax education content miss 80% of this traffic to H&R Block, TurboTax, and well-SEO'd local CPA competitors.", fix: "Annual tax deadlines guide, tax deduction explainers, business vs. personal tax content, and state-specific tax guidance that captures tax season search traffic and builds year-round authority." },
        { mistake: "No CPA credentials displayed on website or GBP", impact: "Financial content from a non-attributed source fails Google's YMYL evaluation. Users searching for a CPA also need to verify credentials before trusting financial advice. Missing credentials reduce both rankings and conversions.", fix: "Explicit CPA license numbers, state licensing boards, professional organization memberships (AICPA, state CPA societies), and individual team member credentials prominently displayed throughout the site." },
        { mistake: "No industry-specific accounting content", impact: "A restaurant owner searching 'accounting for restaurants [city]' will call the CPA that published content specifically about restaurant accounting — inventory methods, tip reporting, COGS — not the firm with generic small business accounting content.", fix: "Industry accounting content for every client niche you serve — demonstrating specific knowledge of their industry's accounting challenges, tax considerations, and financial reporting requirements." }
      ],
      tools: ["Ahrefs", "Google Search Console", "BrightLocal", "SEMrush", "Screaming Frog", "Schema Markup Validator", "PageSpeed Insights", "Yext", "CallRail", "AICPA resources integration"],
      timeline: {
        m1: "Audit, GBP optimization, credential SEO setup, specialty page architecture.",
        m2: "Specialty service pages and first niche content published. Review system launched.",
        m3: "First client inquiries from specialty searches. Tax season content ready for Q1 traffic spike.",
        m6: "Consistent monthly client inquiries from multiple specialty and industry niche pages.",
        m12: "Full specialty and industry niche coverage. Dominant local CPA presence year-round."
      },
      keywords: [
        "CPA near me", "accountant [city]", "tax accountant [city]",
        "small business accountant [city]", "bookkeeping services [city]",
        "CPA for small business [city]", "tax preparation [city]",
        "business accounting [city]", "payroll services [city]",
        "estate planning accountant [city]", "real estate investor CPA [city]",
        "accounting for restaurants [city]", "self-employed tax help [city]",
        "tax strategy [city]", "IRS problem help [city]", "tax planning for business [city]"
      ],
      caseStudy: {
        client: "Crawford & Associates CPA",
        location: "Charlotte, NC",
        before: "90 organic visits/mo, 2 new client inquiries/mo",
        after: "5,200 organic visits/mo, 19 new client inquiries/mo",
        leads: "$228K in new annual recurring client revenue from organic",
        period: "10 months",
        highlight: "Restaurant accounting page ranked #1 in Charlotte — drives 600 highly targeted visits monthly"
      },
      localVsNational: {
        local: "Most accounting firms serve a specific local market — a city or metro area. Local CPA SEO builds GBP dominance and organic rankings for every service + city keyword combination in your market, attracting both individual and business tax clients who are searching specifically for a local expert.",
        national: "National accounting firms, franchise tax services, and multi-state CPA networks need state-by-state content coverage, national specialty practice areas (international tax, federal government accounting), and a scalable content strategy that builds authority across every target market."
      },
      faqs: [
        { q: "What's the ROI of SEO for an accounting firm vs. referrals?", a: "Referrals have zero marginal cost but finite scale — they grow only as fast as your existing client network grows. SEO is a scalable channel that compounds over time. A CPA firm client acquired through SEO has the same lifetime value as a referral client (often $20,000+ over 10 years), but SEO scales beyond what referrals alone can deliver." },
        { q: "How does accounting SEO help during tax season?", a: "The searches 'tax accountant near me,' 'tax preparation [city],' and 'how to file business taxes [city]' spike 10× between January and April. Accounting firms with established organic rankings capture this seasonal surge with zero incremental ad spend — while firms dependent on word-of-mouth are capacity-limited regardless of search volume." },
        { q: "Should I have industry-specific accounting pages?", a: "Absolutely — it's one of the highest-ROI content investments in accounting SEO. A restaurant owner searching 'restaurant accounting [city]' is vastly more likely to call a firm that published content specifically about restaurant accounting than one with generic small business content. Industry-specific pages convert at 3–4× the rate of generalist pages." },
        { q: "How do you handle YMYL for financial content?", a: "Every piece of accounting content we create includes: clear CPA attribution with license number, accurate regulatory information reviewed for the current tax year, disclaimer language where required, and published/updated dates. This satisfies Google's financial YMYL standards while providing genuinely useful content to prospective clients." },
        { q: "How many reviews does an accounting firm need to compete?", a: "A minimum of 40–50 Google reviews with an average rating above 4.7 is the competitive baseline in most markets. Top accounting firms in competitive cities have 100–200+ reviews. We implement structured review generation targeting specific client niches to build both quantity and contextual relevance in your review profile." },
        { q: "Can bookkeeping services use the same SEO strategy as CPA firms?", a: "Bookkeeping and CPA services target overlapping but distinct keyword sets. Bookkeeping searches tend toward 'bookkeeper near me,' 'small business bookkeeping [city],' and 'bookkeeping services [city]' — less competitive than CPA terms. Firms offering both benefit from separate pages for each service type targeting the distinct search intents." },
        { q: "What content keeps accounting website visitors coming back?", a: "Annual tax deadline calendars (updated every year and bookmarked), quarterly tax payment reminder content, and ongoing tax strategy articles tied to current legislation are among the highest-repeat-visit content types for accounting websites. This content builds familiarity before prospects are ready to hire." },
        { q: "Does Google Business Profile matter for accountants?", a: "Very significantly — especially for 'CPA near me' and 'accountant near me' searches. The Google Maps 3-pack appears above organic results for these searches and captures 30%+ of clicks. An optimized GBP with your professional credentials, services listed, reviews, and regular posts is a top priority in any accounting SEO strategy." }
      ]
    },

    // ─── 12. AUTO DEALERSHIPS ──────────────────────────────────────────
    {
      slug: "auto-dealerships",
      name: "Auto Dealerships",
      icon: "🚗",
      tagline: "Get Found by Car Buyers Before They Walk Onto Any Lot. Automotive SEO That Sells.",
      heroSubtitle: "Today's car buyers spend 14 hours researching online before visiting a dealership. The dealers who appear in those 14 hours of research — with compelling content, inventory visibility, and dominant local presence — win the sale.",
      overview: "Automotive retail has been transformed by digital research. The modern car buying journey is almost entirely online. Buyers compare vehicles, read reviews, research financing, check local inventory, and price-shop across multiple dealers — all before making a single phone call or dealership visit. The dealer who is most visible during this research journey has an enormous first-mover advantage.\n\nAutomotive SEO is unique in its complexity. It requires inventory-level SEO (VDP pages for individual vehicles), make and model-specific content, local competitor differentiators, and financing and special offer content that changes monthly. The dealers who master this multi-layer SEO complexity capture organic traffic at every stage of the buyer's research journey.\n\nRankston builds automotive SEO strategies that position your dealership as the most visible and trustworthy option in your market — from first-time model research to test drive scheduling. We optimize your VDP pages, build brand/model authority content, and dominate local used-car and new-car searches in your metro.",
      stats: [
        { val: "14 hrs", label: "avg online research time before dealership visit" },
        { val: "60%", label: "of car buyers use search to find a dealer" },
        { val: "$32K", label: "avg transaction value per vehicle sale" },
        { val: "3-pack", label: "gets 78% of clicks for 'car dealership near me'" }
      ],
      painPoints: [
        { title: "VDP Pages Don't Rank for Individual Vehicle Searches", desc: "Vehicle detail pages for specific inventory (2023 Honda Civic EX in [city]) represent the highest-intent, most ready-to-buy search traffic in automotive. Most dealer VDP pages have duplicate content, no unique SEO value, and rank nowhere." },
        { title: "Model and Brand Research Content Missing", desc: "Buyers researching 'Toyota Camry vs Honda Accord' or '2025 F-150 features' are 60–90 days from purchase. Dealers who publish this content capture buyers at the start of their journey — when brand preference is still forming." },
        { title: "Local Dealership Searches Dominated by Aggregators", desc: "Cars.com, CarGurus, Autotrader, and Edmunds dominate generic car search. But local searches — 'Ford dealer [city],' 'used cars [city]' — are winnable for individual dealers with proper local SEO." },
        { title: "No Used Car Content Strategy", desc: "Used car searches are among the highest-converting automotive searches and generally less competitive than new car terms. Dealers without used car specific pages, inventory content, and pricing guides miss enormous organically available traffic." },
        { title: "Financing Content Missing — A Major Buyer Research Topic", desc: "Car financing is searched millions of times monthly. 'How to finance a car with bad credit,' 'car loan calculator,' and 'auto loan rates [city]' represent buyers in active purchase mode. Most dealers have no financing content." },
        { title: "Competitor Dealerships Have 5× More Reviews", desc: "Car buyers read an average of 10 reviews before visiting a dealership. A dealer with 500+ Google reviews at 4.6 stars consistently wins walkups against a competitor with 80 reviews — regardless of inventory or pricing." }
      ],
      strategy: {
        title: "Our SEO Strategy for Auto Dealerships",
        intro: "Automotive SEO requires a layered approach: inventory visibility (VDP SEO), model authority content, and local dealership dominance all working simultaneously. We build each layer systematically to capture buyers at every stage of their 14-hour research journey.",
        pillars: [
          { title: "Inventory & VDP Page Optimization", desc: "Individual vehicle pages are your highest-converting SEO pages — properly optimized, they attract in-market buyers searching for exact vehicles", tactics: ["Unique content templates for every VDP (year, make, model, trim, features, mileage)", "Vehicle-specific schema: Vehicle, Offer, availability markup", "Internal linking from model research pages to matching inventory", "Inventory feed SEO integration for dynamic stock visibility"] },
          { title: "Model Research Content Authority", desc: "Capturing buyers in the model research phase establishes preference before they visit any lot", tactics: ["Make/model comparison content for your top inventory categories", "Annual model review content for your franchise brands", "Trim level comparison guides", "Model-specific 'available in [city]' pages linking to inventory"] },
          { title: "Local Dealership Dominance", desc: "Winning local car searches requires GBP excellence, reviews, and location-specific content", tactics: ["GBP optimization for new and used car dealership categories", "Review generation system: 20+ new reviews per month", "Competitor comparison content: 'Why choose [dealer] over [competitor]'", "Sales event and special offer landing pages for seasonal traffic"] }
        ]
      },
      services: [
        "VDP Page SEO Optimization", "Model Research Content Creation",
        "Google Business Profile for Dealers", "Automotive Review Generation",
        "Used Car Landing Pages", "Financing Content Strategy",
        "Local Dealer Keyword Domination", "Vehicle Schema Markup",
        "Inventory Feed SEO Integration", "Seasonal Sales Event Pages",
        "Competitor Gap Analysis", "Monthly Sales Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "VDP pages with only manufacturer-supplied content", impact: "Manufacturer vehicle descriptions are identical across every dealer website selling the same model. Google sees duplicate content and ranks none of them well. Your inventory pages are invisible to buyers searching for specific vehicles.", fix: "Unique content templates for every VDP — customized by trim level, features highlighted for your specific vehicle's configuration, local messaging, and dealer-specific value proposition." },
        { mistake: "No financing or affordability content", impact: "'Car loan calculator,' 'auto financing bad credit,' and 'how much car can I afford' are searched millions of times monthly. Dealers with no financing content miss buyers who are specifically in the financing research phase — often the most motivated buyers.", fix: "Complete financing content hub: calculator tools, credit score guidance, lease vs. finance comparisons, and special financing offer pages updated monthly." },
        { mistake: "Single 'About Us' GBP review request strategy", impact: "Dealers receiving 20–30 cars/month have 20–30 review opportunities per month. Most dealers systematically miss this, collecting 2–3 reviews per month while aggressive competitors gather 25+ reviews/month.", fix: "Post-delivery automated review request — SMS sent within 24 hours of vehicle delivery, with a direct Google review link. Targeting 20+ new reviews per month from every vehicle delivered." },
        { mistake: "No used car SEO differentiation from new car pages", impact: "Used car buyers search very differently from new car buyers. 'Used Honda Civic under $20,000 [city]' is a completely different keyword cluster from 'new Honda Civic [city].' Without used-car specific pages, you're invisible for half of your potential customer base.", fix: "Dedicated used car section with make/model/price/year combination pages, certified pre-owned content, and used car buying guide content targeting the specific search behaviors of the pre-owned buyer." }
      ],
      tools: ["Ahrefs", "Google Search Console", "DealerSocket SEO Integration", "BrightLocal", "SEMrush", "Screaming Frog", "Vehicle Schema Validator", "PageSpeed Insights", "Google Merchant Center (Vehicles)", "CallRail"],
      timeline: {
        m1: "Full audit, GBP optimization, VDP template optimization, review system launch.",
        m2: "Model research content published. Used car pages live. Financing content section built.",
        m3: "First organic leads from model-specific and used car search terms.",
        m6: "Consistent organic walk-in and internet lead flow. Multiple inventory and research pages ranking.",
        m12: "Dominant local dealership presence. Organic leads representing 20%+ of total internet leads."
      },
      keywords: [
        "car dealership near me", "[brand] dealer [city]", "used cars [city]",
        "used [make] [model] [city]", "new [make] [model] [city]",
        "[make] [model] vs [make] [model]", "certified pre-owned [brand] [city]",
        "auto financing [city]", "car loans bad credit [city]", "lease deals [city]",
        "truck dealer [city]", "SUV dealer [city]", "electric vehicle dealer [city]",
        "trade-in value [city]", "car buying tips [year]", "auto dealer [city]"
      ],
      caseStudy: {
        client: "Thornton Ford Lincoln",
        location: "Columbus, OH",
        before: "380 organic visits/mo, 4 organic internet leads/mo",
        after: "12,400 organic visits/mo, 52 organic internet leads/mo",
        leads: "13× internet lead increase from organic. $1.8M in organic-attributed sales in 11 months.",
        period: "11 months",
        highlight: "Used Ford F-150 pages ranked top 3 in Columbus — drive 2,800 in-market monthly visitors"
      },
      localVsNational: {
        local: "Auto dealerships are local businesses competing within a defined DMA. We build complete local dealership dominance — map pack rankings, local organic rankings for every make, model, and used car category you stock — ensuring you're visible to every in-market buyer in your trading area.",
        national: "Dealer groups operating multiple rooftops across multiple markets need scalable VDP SEO systems, brand-level content authority, and centralized SEO management that maintains local relevance for each individual dealership location while building group-level authority."
      },
      faqs: [
        { q: "How can a dealership compete with Cars.com and CarGurus for search traffic?", a: "You can't beat aggregators on generic searches like 'used cars for sale.' You win by targeting make/model/location combinations ('used Toyota Camry [city]'), long-tail VDP searches ('2022 Camry XSE under 30000 Columbus OH'), and local dealership searches ('Toyota dealer [city]') where aggregators don't have the local relevance advantage you do." },
        { q: "How important is VDP SEO for a dealership?", a: "Extremely — VDP (vehicle detail page) SEO captures the highest-intent, closest-to-purchase buyer in automotive. Someone searching '2021 Honda Civic Sport automatic [city]' has narrowed to a specific vehicle configuration and is price-shopping dealers. Ranking for that search captures a buyer who needs no more convincing on the product — just on the dealer." },
        { q: "How many Google reviews should a dealership have?", a: "Competitive review benchmarks vary by market, but 400–800 reviews at 4.5+ stars is competitive in most mid-size markets. Large-market dealers with 1,000+ reviews are the benchmark. We implement post-delivery review systems that generate 20–30 reviews per month — reaching competitive levels within 6–12 months for most dealers." },
        { q: "Does automotive SEO work differently for used vs. new car inventory?", a: "Yes — significantly. New car SEO targets make/model/year research searches and leverages manufacturer content (with uniqueness added). Used car SEO targets more specific configuration + price + location searches, requires unique VDP content, and benefits from 'certified pre-owned' content for applicable inventory." },
        { q: "How does financing content help automotive SEO?", a: "Auto financing content targets buyers in the affordability research phase — before they've visited a dealer. 'Car loan calculator,' 'how to get pre-approved for a car loan,' and 'best car financing rates [city]' are high-volume searches from motivated buyers. Ranking for these searches captures buyers before they call any competitor." },
        { q: "How should a dealership handle monthly or seasonal inventory changes for SEO?", a: "VDP inventory changes daily. We implement dynamic VDP SEO templates that automatically optimize new inventory pages without manual work per vehicle. Seasonal sales events get dedicated landing pages built 4–6 weeks in advance, targeting the seasonal search spikes around model-year changeovers, holiday sales events, and tax refund season." },
        { q: "What's the impact of Google Business Profile on dealership traffic?", a: "The GBP local pack captures 78% of clicks for 'car dealership near me' searches — the entry point for a massive share of dealership walk-in traffic. Dealerships with complete GBP profiles (photos, hours, services, reviews, Q&A, posts) receive dramatically more direction requests and calls than those with partial profiles." },
        { q: "Can SEO reduce our cost to acquire internet leads?", a: "Dramatically. The typical dealership pays $25–$50 per internet lead from third-party aggregators. Organic leads from SEO have zero incremental cost per lead after the fixed SEO investment. Dealerships who systematically build their organic presence over 12–18 months routinely reach a state where 20–30% of their internet leads are organic — at effectively $0 marginal acquisition cost." }
      ]
    }

  ] // end industries array — all 12 SEO industries complete
};

export default seoIndustries;
