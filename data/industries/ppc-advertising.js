// data/industries/ppc-advertising.js
// Phase 3 — PPC Advertising: 12 industries × full 15-section data schema

const ppcIndustries = {
  label: "PPC Advertising",
  accentColor: "#EF4444",
  industries: [

    // ─── 1. REAL ESTATE ───────────────────────────────────────────────
    {
      slug: "real-estate",
      name: "Real Estate",
      icon: "🏠",
      tagline: "Every Click Is a Buyer or Seller Ready to Act. Real Estate PPC That Converts.",
      heroSubtitle: "Real estate PPC puts your listings and services in front of buyers and sellers at the exact moment they're searching. No waiting for SEO to mature — qualified leads start flowing from day one.",
      overview: "Real estate is one of the highest-stakes, most competitive PPC verticals. A single closed deal from a Google Ads lead can generate $8,000–$25,000+ in commission — making even expensive CPCs ($8–$22 per click) extraordinarily profitable when campaigns are built to convert.\n\nMost real estate agents running their own PPC campaigns waste 60–70% of their ad spend on broad match keywords, mismatched landing pages, and no bid strategy. Rankston builds Google Ads campaigns engineered for the real estate buyer journey — from 'homes for sale [city]' to 'sell my house fast' to 'real estate agent near me.'\n\nEvery campaign we build starts with the end goal: a booked consultation or a completed property inquiry form. We match landing pages to ad intent, set smart bidding to maximize qualified lead volume, and track every call and form submission back to the exact keyword that generated it.",
      stats: [
        { val: "$15K+", label: "avg commission value from one converted PPC lead" },
        { val: "4.2%", label: "avg real estate landing page conversion rate (our campaigns)" },
        { val: "Day 1", label: "qualified leads start flowing after campaign launch" },
        { val: "3×", label: "ROAS achieved in first 90 days for optimized campaigns" }
      ],
      painPoints: [
        { title: "Broad Match Hemorrhaging Budget on Irrelevant Clicks", desc: "Running 'real estate' or 'homes' on broad match burns budget on searches from renters, job seekers, and researchers who will never convert. Every wasted click costs $8–$22 in a competitive market." },
        { title: "No Landing Page — Sending Ads to the Homepage", desc: "Homepage traffic from PPC converts at under 1%. Dedicated landing pages built around the specific ad intent convert at 4%+. The difference is the margin between profitable and unprofitable campaigns." },
        { title: "Not Bidding on Competitor Brand Names", desc: "When someone searches 'Century 21 homes [city]' or 'Zillow agent [city],' you can appear above their results with a compelling alternative offer. Competitor keyword campaigns often deliver the lowest CPL in real estate PPC." },
        { title: "No Call and Form Tracking", desc: "Without tracking every call and form submission back to the keyword that generated it, you're managing a campaign blindly. You can't cut waste or scale winners without conversion attribution." },
        { title: "Bidding on High-Volume Informational Keywords", desc: "'How does real estate work' and 'home buying process' are informational searches that don't convert. Every dollar spent here is wasted on content-intent searches instead of transaction-intent buyers." },
        { title: "No Remarketing for High-Intent Website Visitors", desc: "A buyer who viewed 5+ listings on your website is highly likely to work with an agent within 30 days. Without remarketing, they convert for a competitor who retargeted them." }
      ],
      strategy: {
        title: "Our PPC Strategy for Real Estate",
        intro: "Real estate PPC wins through precision targeting, intent-matched landing pages, and conversion tracking that ties every dollar spent to actual leads and closings.",
        pillars: [
          { title: "Hyper-Intent Keyword Architecture", desc: "We target searches that signal transaction intent, not information gathering", tactics: ["Buyer intent: 'homes for sale [city],' '[neighborhood] houses for sale,' 'buy home [city]'", "Seller intent: 'sell my house fast [city],' 'real estate agent to sell my home'", "Agent searches: 'top real estate agent [city],' 'best realtor near me'", "Negative keyword library: 500+ excluded terms preventing wasted spend"] },
          { title: "Conversion-Optimized Landing Pages", desc: "Every ad group gets a dedicated landing page matched to its search intent", tactics: ["Buyer landing pages: property search integration + consultation CTA", "Seller landing pages: instant home valuation + agent consultation form", "Mobile-first design: 60%+ of real estate searches are mobile", "A/B testing: headline, CTA, and form length optimization ongoing"] },
          { title: "Smart Bidding + Remarketing", desc: "AI-powered bidding maximizes leads at your target cost per acquisition", tactics: ["Target CPA bidding after sufficient conversion data collected", "RLSA: higher bids for past website visitors showing re-engagement", "Remarketing: 30-day window for listing viewers and form abandoners", "Competitor campaign: appearing above competitor brand searches"] }
        ]
      },
      services: [
        "Google Ads Account Setup & Audit", "Keyword Research & Architecture",
        "Ad Copy Creation & Testing", "Landing Page Design & Development",
        "Conversion Tracking Setup", "Call Tracking Integration",
        "Smart Bidding Configuration", "Remarketing Campaign Setup",
        "Competitor Keyword Campaigns", "Monthly Optimization Reports",
        "Negative Keyword Management", "Ongoing A/B Testing"
      ],
      commonMistakes: [
        { mistake: "Sending all PPC traffic to the homepage", impact: "Homepage conversion rates for PPC traffic are typically under 1.5%. A seller searching 'sell my house fast' lands on a generic homepage and bounces — wasting $15+ per click with no lead generated.", fix: "Dedicated landing pages per campaign: seller landing page for seller intent keywords, buyer landing page with property search for buyer intent. Intent-matched pages convert at 4%+ for real estate." },
        { mistake: "No negative keyword list managed", impact: "Without active negative keyword management, broad and phrase match keywords show ads for renters, real estate investors looking for courses, and job seekers — wasting 30–40% of budget.", fix: "500+ negative keyword library built at campaign launch, updated weekly with search term reports. Eliminates non-converting traffic segments and improves conversion rate across all active keywords." },
        { mistake: "Not tracking phone calls as conversions", impact: "Real estate buyers call — they don't always fill forms. Without call tracking, 40–60% of conversions are invisible. You're optimizing bids based on half your actual conversion data.", fix: "Google Ads call extension tracking + CallRail integration tracking every call duration, keyword source, and call recording — giving you full conversion attribution across both calls and forms." },
        { mistake: "Running the same ads for 6+ months", impact: "Ad fatigue is real — click-through rates decline 30–50% over 60 days for static ads. Declining CTR tells Google your ads are irrelevant and raises your cost per click.", fix: "Monthly ad copy refresh with 3–4 active variations per ad group at all times. Winning variants kept, underperformers replaced with new tests — maintaining fresh CTR signals and competitive Quality Scores." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "CallRail", "Unbounce/Instapage", "SEMrush", "Google Tag Manager", "Hotjar", "Google Data Studio"],
      timeline: {
        m1: "Account structure, keyword research, landing pages, conversion tracking, campaign launch.",
        m2: "First conversion data. Negative keyword refinement. Bid adjustments based on performance.",
        m3: "Smart bidding activated. CPL improving. Remarketing campaigns live.",
        m6: "Fully optimized campaign. Target CPL achieved. Scaling winners.",
        m12: "Dominant market share for target keywords. ROAS consistently above 4×."
      },
      keywords: [
        "homes for sale [city]", "real estate agent [city]", "sell my house [city]",
        "buy a home [city]", "houses for sale near me", "realtor [city]",
        "home valuation [city]", "[neighborhood] homes for sale", "best real estate agent [city]"
      ],
      caseStudy: {
        client: "Keystone Realty Group",
        location: "Houston, TX",
        before: "$8,200/mo ad spend, 3 leads/mo, no conversion tracking",
        after: "$8,200/mo ad spend, 31 leads/mo, CPL $264",
        leads: "4 closings/mo from PPC — $68K/mo in commission",
        period: "5 months",
        highlight: "Seller landing page with instant valuation tool drove 2× form completion rate vs. generic page"
      },
      localVsNational: {
        local: "Real estate PPC is hyper-local — we build campaigns targeting specific neighborhoods, zip codes, and cities that match your licensed service area. Every keyword includes geographic modifiers.",
        national: "National real estate brands and portals need market-level campaign structures — with separate ad groups per metro area optimized for local inventory levels and competition."
      },
      faqs: [
        { q: "How much does real estate PPC cost per lead?", a: "In most mid-size markets, a well-optimized real estate PPC campaign generates buyer leads at $80–$180 CPL and seller leads at $150–$300 CPL. With a single closing worth thousands in commission, the ROAS is consistently strong." },
        { q: "Should I run Google Ads or Facebook Ads for real estate?", a: "Google Ads for high-intent, ready-to-act leads (searching 'homes for sale [city]' means they want to buy now). Facebook for awareness and nurture campaigns targeting homeowner demographics. We recommend Google Ads first for fastest lead flow." },
        { q: "How long does real estate PPC take to generate leads?", a: "Qualified leads typically start arriving within 7–14 days of campaign launch. The first 30–60 days are optimization-intensive; by day 90, campaigns are typically at or near target CPL performance." },
        { q: "What are 'seller leads' vs 'buyer leads' in real estate PPC?", a: "Seller leads come from keywords like 'sell my house [city]' or 'home value estimate' — typically higher-value leads. Buyer leads come from 'homes for sale [city]' or '[neighborhood] houses.' Both require separate landing pages and different follow-up sequences." },
        { q: "Should I include competitor agent names in my PPC keywords?", a: "Bidding on competitor brand terms is legal and often produces the lowest cost-per-lead in real estate. When someone searches a competitor's name, you appear with a compelling alternative — capturing consideration before they commit." },
        { q: "How do I track which PPC keywords are generating closed deals?", a: "We set up conversion tracking for every lead action (form submission, phone call, chat) and can integrate with your CRM to track leads through to listing appointment and closing. This lets you see true ROAS per keyword." },
        { q: "Do I need separate landing pages for buyer and seller campaigns?", a: "Yes — this is one of the highest-impact optimizations in real estate PPC. A seller searching 'sell my house fast' needs a landing page with a home valuation tool, not a property search. Mismatched pages lose 60%+ of potential conversions." },
        { q: "What budget should I start with for real estate PPC?", a: "We recommend $2,500–$5,000/month as a starting floor for meaningful data collection and lead volume in most metro markets. Below $1,500/month, impression share is too low to optimize effectively in competitive real estate markets." }
      ]
    },

    // ─── 2. LAWYERS ───────────────────────────────────────────────────
    {
      slug: "lawyers",
      name: "Law Firms",
      icon: "⚖️",
      tagline: "Capture Clients at the Moment of Legal Crisis. Law Firm PPC That Fills the Intake Calendar.",
      heroSubtitle: "Legal PPC places your firm in front of people who need a lawyer right now. With CPLs that deliver 10–30× ROAS on retained cases, Google Ads is the highest-ROI paid channel available to law firms.",
      overview: "Legal PPC is the most valuable paid search vertical by ROAS — and one of the most expensive by CPC. Personal injury keywords can cost $50–$200 per click in major metros. Criminal defense and family law run $20–$80. These costs are completely justified when a single retained case generates $5,000–$100,000+ in fees.\n\nThe problem: most law firm PPC campaigns are built and managed by generalist agencies that don't understand the legal buyer journey. They target the right keywords but send traffic to the firm homepage, don't track phone calls, and run the same ads for years. The result is $5,000–$15,000/month in ad spend producing 3–5 leads instead of 25–40.\n\nRankston manages legal PPC with practice-area precision — separate campaigns for each practice area, dedicated landing pages for each case type, 24/7 call tracking, and ad scheduling that maximizes visibility during peak search hours.",
      stats: [
        { val: "$45K+", label: "avg retained case value for personal injury" },
        { val: "12%", label: "avg legal landing page conversion rate (our campaigns)" },
        { val: "24/7", label: "ad scheduling for emergency legal searches" },
        { val: "8–30×", label: "ROAS on retained cases from PPC leads" }
      ],
      painPoints: [
        { title: "One Campaign for All Practice Areas", desc: "Running personal injury, family law, and criminal defense in one campaign with shared budgets means your highest-value practice area gets outbid by your lowest-value one. Practice areas need separate campaigns." },
        { title: "Not Running 24/7 for Emergency Legal Searches", desc: "DUI arrests happen at 2am. Domestic incidents happen on weekends. Emergency criminal defense and family law searches peak outside business hours. Day-parting campaigns off at night costs urgent-need clients." },
        { title: "Homepage Landing Pages — 2% Conversion Rate", desc: "A person who just got in a car accident searches 'car accident lawyer [city]' and lands on a generic law firm homepage. They bounce. A dedicated personal injury landing page with a 'free case evaluation' form converts at 10–15%." },
        { title: "Not Bidding on Case-Type Keywords", desc: "'Personal injury lawyer' is broad. 'Car accident lawyer,' 'slip and fall attorney,' and 'truck accident lawyer' are case-type keywords that convert at 2–3× the rate of general practice keywords." },
        { title: "No Legal Intake Form on Landing Page", desc: "Legal clients want to describe their situation before calling. A short intake form ('what happened?' 'when did it occur?' 'have you seen a doctor?') pre-qualifies leads and significantly increases call show rates." },
        { title: "Ad Schedule Doesn't Match Search Behavior", desc: "Legal searches peak Tuesday–Thursday, 10am–2pm. Running equal spend on Monday and Sunday wastes budget on lower-intent periods when legal searchers are less likely to retain counsel." }
      ],
      strategy: {
        title: "Our PPC Strategy for Law Firms",
        intro: "Legal PPC wins through practice-area precision, case-type keyword targeting, and conversion infrastructure that turns clicks into retained clients at a fraction of traditional advertising cost.",
        pillars: [
          { title: "Practice Area Campaign Architecture", desc: "Each practice area is a separate campaign with its own budget, keywords, and landing pages", tactics: ["Personal Injury: auto accident, slip/fall, truck accident, wrongful death grouped separately", "Family Law: divorce, child custody, adoption, restraining order", "Criminal Defense: DUI, drug charges, assault, white collar grouped by case type", "Separate budgets ensure high-value practice areas aren't throttled by lower-value ones"] },
          { title: "Legal Landing Page System", desc: "Every case type gets a dedicated conversion-optimized landing page", tactics: ["Above-fold: headline matching search intent + phone number + 'free consultation' form", "Trust signals: bar credentials, case results, client testimonials, no-fee-unless-we-win", "Short intake form: 3–5 fields capturing case type, incident date, injury status", "Live chat + click-to-call: multiple contact options for different client preferences"] },
          { title: "Ad Scheduling & Emergency Coverage", desc: "Legal searches happen 24/7 — campaigns are structured to capture every urgent-need searcher", tactics: ["24/7 ad scheduling for criminal defense and DUI (arrests happen at all hours)", "Peak hour bid increases: Tuesday–Thursday 9am–5pm for family law and civil matters", "Weekend coverage for accident-related personal injury searches", "Mobile bid adjustments: legal searchers skew heavily mobile during emergencies"] }
        ]
      },
      services: [
        "Legal PPC Account Setup", "Practice Area Campaign Architecture",
        "Case-Type Keyword Research", "Legal Landing Page Development",
        "Intake Form Optimization", "24/7 Ad Scheduling Setup",
        "Call Tracking & Recording", "Competitor Law Firm Analysis",
        "Click-Fraud Protection", "Monthly Performance Reporting",
        "A/B Testing (Ad Copy & Landing Pages)", "CRM Integration for Lead Tracking"
      ],
      commonMistakes: [
        { mistake: "Shared budget across all practice areas", impact: "When personal injury and traffic tickets share a budget, lower-CPC traffic ticket clicks consume budget faster than higher-value PI keywords — starving your most profitable practice area.", fix: "Separate campaign per practice area with individual budgets set proportional to case value. Personal injury gets the largest budget; document prep or traffic matters the smallest." },
        { mistake: "Turning campaigns off nights and weekends", impact: "Criminal defense and DUI clients search at midnight and on Sunday mornings — when they need help most urgently. Campaigns that pause after 6pm miss the highest-urgency, highest-intent legal leads.", fix: "24/7 campaign scheduling for criminal defense, DUI, and family emergency matters. Business-hours scheduling for estate planning and business law. Each practice area scheduled for its actual search behavior." },
        { mistake: "No case evaluation form — just a phone number", impact: "Many legal clients are anxious about first contact and prefer to describe their situation in writing before calling. No intake form loses the 40% of prospects who won't call cold.", fix: "Short 4-question intake form on every landing page: type of legal matter, approximate date, what happened, contact info. Pre-qualified leads show up to consultations 2× more prepared and have 40% higher retention rates." },
        { mistake: "Same ad copy running for years", impact: "Ad copy that's been running unchanged for 18 months has severe Quality Score deterioration, 50%+ lower CTR than fresh copy, and no A/B test data to improve conversion rates.", fix: "3 ad variations active per practice area at all times. Monthly analysis — worst performer paused, new variant launched. Fresh copy sustains Quality Score, improves CTR, and continuously discovers better messaging." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Unbounce", "Google Tag Manager", "SEMrush", "ClickCease (fraud protection)", "Salesforce/Clio (CRM)"],
      timeline: {
        m1: "Campaign architecture, landing pages, call tracking, conversion setup, launch.",
        m2: "First intake data. Search term refinement. Landing page A/B test launched.",
        m3: "CPL optimization. Smart bidding activated. Emergency scheduling refined.",
        m6: "Target CPL achieved per practice area. Scaling high-ROAS campaigns.",
        m12: "Dominant legal PPC presence. Multiple practice areas converting at target CPL."
      },
      keywords: [
        "car accident lawyer [city]", "personal injury attorney near me", "DUI lawyer [city]",
        "divorce attorney [city]", "criminal defense lawyer near me",
        "slip and fall attorney [city]", "wrongful death lawyer [city]",
        "family law attorney [city]", "free legal consultation [city]"
      ],
      caseStudy: {
        client: "Vega & Partners Law",
        location: "Miami, FL",
        before: "$12K/mo spend, 5 intakes/mo, no practice-area separation",
        after: "$12K/mo spend, 38 intakes/mo, CPL $316 (PI), $180 (criminal)",
        leads: "7 retained PI cases/mo — avg $42K/case = $294K in monthly revenue",
        period: "6 months",
        highlight: "24/7 criminal defense scheduling captured 14 overnight DUI arrest inquiries in month 3"
      },
      localVsNational: {
        local: "Legal PPC is metro and practice-area specific. We build campaigns targeting precise geographic areas matching your bar license and court jurisdiction — ensuring every click is from a potential client you can legally serve.",
        national: "National law firm networks and multi-office firms need geo-partitioned campaigns per office location with practice-area budgets reflecting each market's competition and case value."
      },
      faqs: [
        { q: "How much should a law firm budget for PPC?", a: "Personal injury: $5,000–$20,000/month minimum in competitive metros (CPCs of $50–$200 require volume to optimize). Family law and criminal defense: $2,500–$8,000/month. The math always works — one retained case covers months of ad spend." },
        { q: "What's a realistic CPL (cost per lead) for legal PPC?", a: "Personal injury: $200–$500/lead in competitive markets. Family law: $100–$250. Criminal defense: $80–$200. These CPLs deliver 10–50× ROAS when campaigns are properly optimized for qualified intake (not all clicks)." },
        { q: "Should law firms run Google Ads or Facebook Ads?", a: "Google Ads for high-intent leads — people searching for an attorney when they have a legal problem (highest conversion intent). Facebook for brand awareness and targeting homeowners, drivers, or other demographic segments before they have a legal need." },
        { q: "Why is legal PPC so expensive per click?", a: "Because the lifetime value of a retained client is enormous. Law firms are willing to pay $100+ per click because 1 in 20 clicks might become a $30,000+ case. This bidding competition drives up CPCs across the entire legal vertical." },
        { q: "Do I need a separate landing page for each practice area?", a: "Yes — this is non-negotiable for legal PPC efficiency. A divorce searcher landing on a personal injury page bounces. Dedicated landing pages per practice area improve conversion rates by 200–400% compared to homepage traffic." },
        { q: "How do I track which PPC keywords are generating retained clients?", a: "We integrate Google Ads conversion tracking with your intake CRM. Every lead is tagged with the keyword, ad, and campaign that generated it — allowing you to see CPL and ROAS by practice area and specific keyword." },
        { q: "Should I appear for competitor law firm searches in PPC?", a: "Yes — competitor keyword campaigns for law firms consistently produce some of the lowest CPLs available. When someone searches a competitor firm name, appearing with your 'free consultation' offer captures clients before they've committed." },
        { q: "How long until legal PPC starts generating retained clients?", a: "Leads typically start within 7–14 days of campaign launch. Converting leads to retained clients depends on your intake process — typically 30–60 days for the first retained client from an optimized campaign." }
      ]
    },

    // ─── 3. DENTISTS ──────────────────────────────────────────────────
    {
      slug: "dentists",
      name: "Dental Practices",
      icon: "🦷",
      tagline: "Fill the Chair Tomorrow. Dental PPC That Converts Searches Into Appointments.",
      heroSubtitle: "Dental PPC gets new patients calling before they've had time to reconsider or compare. With the right keywords, landing pages, and tracking, Google Ads becomes your most reliable new patient acquisition channel.",
      overview: "Dental PPC is one of the most consistent, predictable performers in local healthcare advertising. Unlike SEO which takes months to build, a well-constructed dental Google Ads campaign generates new patient calls within days of launch — and each new patient acquired represents $800–$5,000+ in lifetime value.\n\nThe problem most dental practices face is that their PPC campaigns are set up once and never optimized. The same keywords, same ads, same landing pages for 2 years — with no testing, no negative keyword management, and no call tracking. CPL inflates from $80 to $400 and the practice thinks 'PPC doesn't work for dentists.'\n\nRankston builds dental PPC campaigns engineered around the dual objectives every practice has: filling the schedule with routine appointments (cleanings, checkups) and capturing high-value specialty patients (implants, Invisalign, veneers). The strategy, bidding, and landing pages are different for each — and both are necessary for a complete dental PPC program.",
      stats: [
        { val: "$3,200", label: "avg Invisalign case value — 1 case covers months of spend" },
        { val: "8.4%", label: "avg dental landing page conversion rate (our campaigns)" },
        { val: "48 hrs", label: "avg time from first PPC click to booked appointment" },
        { val: "5–12×", label: "ROAS on high-value specialty dental PPC campaigns" }
      ],
      painPoints: [
        { title: "Spending Budget on Informational Keywords", desc: "'How to whiten teeth at home' and 'what is a root canal' are informational searches from people who won't book appointments. Every click on these keywords wastes $4–$18 with zero conversion opportunity." },
        { title: "No Separation Between General and Specialty Campaigns", desc: "A cleaning campaign should have a $60 target CPL. An Invisalign campaign should have a $120 target CPL with a $4,000+ expected case value. Mixing them in one campaign misprices your bids for both." },
        { title: "Sending All Ads to the Homepage or Services Page", desc: "Homepage dental PPC converts at 1–2%. A dedicated new patient landing page with a special offer ($199 new patient exam, $500 discount on Invisalign) and a simple appointment form converts at 8–12%." },
        { title: "Not Targeting Emergency Dental Keywords", desc: "'Emergency dentist near me' and 'tooth pain dentist open now' have the highest urgency and conversion rate of any dental keyword type. Missing these means missing the patients most motivated to book today." },
        { title: "No New Patient Offer to Differentiate", desc: "When 5 dental practices appear on a search results page, patients click on the one with an offer: '$0 exam for new patients' or 'complimentary Invisalign consultation.' No offer = no click advantage." },
        { title: "No Insurance Filter in Keyword Targeting", desc: "A practice accepting Delta Dental should appear for 'dentist accepting Delta Dental near me' searches. These insurance-specific keywords convert at 3× the rate of generic dental searches." }
      ],
      strategy: {
        title: "Our PPC Strategy for Dental Practices",
        intro: "Dental PPC wins through new patient offers, emergency keyword capture, and specialty campaign separation that matches bid levels to actual case value.",
        pillars: [
          { title: "Multi-Campaign Dental Architecture", desc: "Different dental services need different budgets and bid strategies", tactics: ["General dentistry campaign: cleanings, checkups, X-rays — volume focus, lower CPC", "Specialty campaign: Invisalign, implants, veneers — higher CPCs justified by case value", "Emergency dentist campaign: 24/7, highest bids, immediate call CTA", "Insurance keyword campaign: specific coverage + city keywords"] },
          { title: "New Patient Offer Landing Pages", desc: "Offers dramatically improve click-through and conversion rates for dental PPC", tactics: ["New patient exam offer: $99–$199 package prominently displayed", "Specialty offer: 'Free Invisalign consultation + 3D scan'", "Online scheduling integration on every landing page", "Trust signals: before/after photos, doctor credentials, reviews"] },
          { title: "Emergency & Urgency Capture", desc: "Emergency dental searches have 3× the conversion rate of routine searches", tactics: ["'Emergency dentist near me' + 'tooth pain dentist' + 'dentist open now' campaigns", "24/7 ad scheduling for emergency campaigns", "Click-to-call as primary CTA on mobile for emergency ads", "Message extensions: 'Open Now,' 'Same-Day Appointments,' 'Emergency Care'"] }
        ]
      },
      services: [
        "Dental PPC Account Setup", "Multi-Campaign Architecture",
        "Specialty Service Campaigns", "Emergency Dental Campaign",
        "New Patient Landing Pages", "Offer & Promotion A/B Testing",
        "Online Booking Integration", "Insurance Keyword Targeting",
        "Call & Appointment Tracking", "Monthly ROI Reporting",
        "Competitor Dental Analysis", "Negative Keyword Management"
      ],
      commonMistakes: [
        { mistake: "No new patient offer in ads or landing pages", impact: "When multiple dental practices appear in search results, the ones with offers ('$0 new patient exam') get disproportionately more clicks. No offer means equal traffic split at best — losing the competitive CTR advantage that makes PPC profitable.", fix: "Compelling new patient offer as the centerpiece of every general dentistry ad and landing page. For specialty: 'free Invisalign consultation' or '$500 credit toward implants.' Offers increase CTR by 30–60% and conversion rates by 40%+." },
        { mistake: "Implant and Invisalign keywords mixed with cleaning keywords", impact: "If Invisalign keywords (worth $4,000/case) and cleaning keywords (worth $200/recall value) share a budget and Target CPA bid, the algorithm optimizes for the higher-volume, lower-value cleanings — underbidding for the keywords worth 20× more.", fix: "Separate campaign for every specialty service with individual budgets and bid targets reflecting each service's actual case value. Implant campaigns can justify $200+ CPL; cleaning campaigns need $60 CPL — they cannot coexist in one campaign." },
        { mistake: "Landing pages without online scheduling", impact: "47% of dental appointment requests happen after hours. A landing page with only a phone number loses half the potential conversions from people who want to book at 9pm without making a call.", fix: "Online scheduling integration on every landing page — Zocdoc, NexHealth, or your practice management software's online booking tool. 'Book an Appointment' button visible above the fold, no phone required." },
        { mistake: "Not tracking which keywords generate actual appointments (vs. just calls)", impact: "A keyword can drive 40 calls but if they're all for questions about insurance or existing patients calling, it's generating 0 new patient appointments. Without appointment-specific tracking, you scale the wrong keywords.", fix: "New patient appointment tracking via intake CRM integration — tagging each new patient record with the PPC keyword source. Optimization against new patient appointments, not just call volume." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "NexHealth/Zocdoc (scheduling)", "Unbounce", "Google Tag Manager", "SEMrush"],
      timeline: {
        m1: "Campaign setup, landing pages with offers, call tracking, emergency campaign launch.",
        m2: "First new patient data. Insurance keywords added. Specialty campaigns refined.",
        m3: "CPL per service type established. Smart bidding activated per campaign.",
        m6: "All campaigns optimized to target CPL. Specialty ROAS consistently 8×+.",
        m12: "Full new patient pipeline from PPC. Dependency on referrals reduced."
      },
      keywords: [
        "dentist near me", "emergency dentist near me", "Invisalign [city]",
        "dental implants [city]", "new patient dentist [city]", "cosmetic dentist [city]",
        "teeth whitening [city]", "dentist accepting [insurance]", "children's dentist [city]"
      ],
      caseStudy: {
        client: "Aspire Dental Group",
        location: "Seattle, WA",
        before: "$3,500/mo spend, 6 new patients/mo, homepage traffic",
        after: "$3,500/mo spend, 29 new patients/mo, CPL $121",
        leads: "Implant campaign alone generated $48K in monthly production",
        period: "4 months",
        highlight: "Emergency dental campaign drove 11 same-day appointment bookings in first month"
      },
      localVsNational: {
        local: "Dental PPC is zip-code level — we target the exact geographic radius your practice serves, ensuring every click is from a realistic patient who can actually visit your office.",
        national: "Dental service organizations (DSOs) with multiple locations need individual campaign management per office location with centralized brand assets and offers."
      },
      faqs: [
        { q: "How much should I budget for dental PPC?", a: "For a single location: $1,500–$4,000/month. Specialty-focused practices (implants, Invisalign) can justify $4,000–$8,000/month given case values. The key metric is CPL vs. lifetime patient value — the math consistently favors dental PPC." },
        { q: "What's the best offer to use in dental PPC ads?", a: "For general dentistry: '$149 new patient exam, X-ray, and cleaning' or '$0 exam for new patients' (if your practice absorbs it as a new patient investment). For Invisalign: 'Free consultation + complimentary 3D scan ($350 value).' Offers increase conversions by 40%+." },
        { q: "Should I run ads for emergency dental services?", a: "Absolutely — emergency keywords have the highest conversion intent of any dental PPC keyword. Someone searching 'emergency dentist open now' is calling within minutes. Emergency campaigns pay for themselves with 2–3 same-day patients per month." },
        { q: "How do I know if my dental PPC is working?", a: "The metric that matters: new patient appointments attributed to PPC. Not clicks, not calls — appointments from new patients. We track this from first click through to patient record, giving you CPL and ROAS per keyword and campaign." },
        { q: "Can I run dental PPC for specific procedures?", a: "Yes — and this is where the highest ROAS lives. Invisalign campaigns: $120–$180 CPL on a $5,000 case = 30× ROAS. Implant campaigns: $150–$250 CPL on a $4,000 case = 20× ROAS. Procedure-specific campaigns consistently outperform general 'dentist near me' campaigns." },
        { q: "Does dental PPC work in small markets?", a: "Yes — often better than large metros because competition is lower. CPCs of $3–$8 vs $12–$25 in major cities means the same budget generates 3–4× more clicks and conversions. Small market dental PPC can achieve $40–$80 CPL consistently." },
        { q: "How do I appear for patients with specific insurance?", a: "Insurance-specific keywords like 'dentist accepting Delta Dental near me' are high-converting because the searcher has already filtered by compatibility. We build insurance keyword campaigns that target the plans you accept, capturing this highly qualified segment." },
        { q: "How long does it take for dental PPC to start generating new patients?", a: "With a pre-built landing page and tracking ready: 7–14 days to first calls. 30–45 days to have enough conversion data to optimize bids meaningfully. Most practices see a full pipeline from PPC within 60–90 days of launch." }
      ]
    },

    // ─── 4. HEALTHCARE ────────────────────────────────────────────────
    {
      slug: "healthcare",
      name: "Healthcare Practices",
      icon: "🏥",
      tagline: "New Patients On Demand. Healthcare PPC That Fills Your Appointment Book.",
      heroSubtitle: "When potential patients search for a doctor or specialist, paid ads place your practice at the top of results before organic listings. HIPAA-compliant PPC that generates new patients predictably.",
      overview: "Healthcare PPC combines the urgency of emergency medical searches with the deliberate consideration of specialist and elective care choices. The strategic approach differs dramatically across specialties — and getting it right means new patients consistently filling your schedule.\n\nFor primary care and urgent care, PPC captures same-day and near-term appointment intent. For specialists, it captures referral-bypassing direct-to-specialist searches that are increasingly common. For elective care (plastic surgery, dermatology, fertility), it captures patients actively researching providers before making a significant financial and personal decision.\n\nRankston manages healthcare PPC programs with HIPAA compliance at every layer — from ad copy restrictions to landing page data handling to conversion tracking. We deliver new patient volume without regulatory risk.",
      stats: [
        { val: "77%", label: "of patients search online before booking an appointment" },
        { val: "7.1%", label: "avg healthcare landing page conversion rate (our campaigns)" },
        { val: "HIPAA", label: "compliant at every layer of the campaign structure" },
        { val: "45 days", label: "to full new patient pipeline from PPC" }
      ],
      painPoints: [
        { title: "Specialty Keywords Not Targeted", desc: "Searches like 'cardiologist near me' or 'knee replacement surgeon [city]' are direct specialist intent. Without specialty-specific campaigns, you're invisible to patients who've already decided they need your type of care." },
        { title: "No HIPAA-Compliant Landing Page", desc: "Using Google Ads standard conversion tracking with a basic contact form can create HIPAA compliance issues when protected health information is submitted. Healthcare PPC requires specific compliance architecture." },
        { title: "Not Appearing for 'New Patients Accepted' Searches", desc: "Patients who've been rejected by full practices or are new to an area specifically search 'doctor accepting new patients [city].' This high-intent keyword type is systematically underutilized." },
        { title: "Sending Telehealth Ads to In-Person Pages", desc: "Telehealth patients searching 'online doctor [state]' have completely different needs from in-person patients. Sending telehealth ad traffic to an in-person appointment page loses these conversions." },
        { title: "No Insurance Keyword Targeting", desc: "Healthcare decisions are heavily filtered by insurance. 'Doctor accepting Cigna [city]' or 'HMO doctor near me' are high-conversion, lower-competition keywords systematically ignored by most healthcare PPC campaigns." },
        { title: "Ad Copy Violating Google Healthcare Policies", desc: "Google has strict policies on healthcare ad copy — restrictions on before/after claims, outcome guarantees, and certain medical terminology. Non-compliant ads get disapproved and accounts suspended." }
      ],
      strategy: {
        title: "Our PPC Strategy for Healthcare Practices",
        intro: "Healthcare PPC wins through HIPAA-compliant infrastructure, specialty-specific keyword targeting, and conversion systems that match how different types of patients make appointment decisions.",
        pillars: [
          { title: "HIPAA-Compliant Campaign Architecture", desc: "Every layer of our healthcare PPC programs is built for compliance", tactics: ["Tracking pixels configured to exclude ePHI from data collection", "Form submissions routed through HIPAA-compliant intake systems", "Ad copy reviewed against Google Healthcare policies before launch", "Landing pages with privacy-first data handling"] },
          { title: "Specialty & Insurance Keyword Targeting", desc: "High-intent specialty searches are underserved by most healthcare practices", tactics: ["Specialty condition keywords: '[condition] specialist [city],' '[procedure] doctor near me'", "Insurance acceptance keywords: 'doctor accepting [plan] [city]'", "New patient availability: 'accepting new patients [specialty] [city]'", "Telehealth keywords for virtual care applicable practices"] },
          { title: "Patient Journey Landing Pages", desc: "Healthcare decisions involve different levels of urgency and research depth", tactics: ["Urgent care: immediate appointment CTA, hours displayed, insurance logos", "Specialist: specialty credentials, conditions treated, referral not required message", "Elective: before/after results, financing options, consultation CTA", "Telehealth: virtual appointment booking, state licensure displayed"] }
        ]
      },
      services: [
        "HIPAA-Compliant PPC Setup", "Specialty Keyword Architecture",
        "Healthcare Landing Page Development", "Insurance Keyword Campaigns",
        "Telehealth Campaign Management", "Compliant Conversion Tracking",
        "Appointment Booking Integration", "Google Policy Compliance Audit",
        "Competitor Specialty Analysis", "Monthly New Patient Reporting",
        "ROAS Tracking by Patient Type", "A/B Testing (Offer & Messaging)"
      ],
      commonMistakes: [
        { mistake: "Standard Google Ads conversion tracking with contact forms", impact: "If a patient submits their medical condition or insurance information through a standard Google Ads-tracked form, this can constitute ePHI transmission through a non-HIPAA-compliant platform — creating regulatory liability.", fix: "HIPAA-compliant conversion tracking configuration: CallRail HIPAA mode, compliant form handling, pixel configurations that exclude protected health information from Google's data collection systems." },
        { mistake: "Outcome claims in ad copy", impact: "Ad copy stating 'we cure,' 'guaranteed results,' or 'successful treatment' violates both Google Healthcare Advertising policies and FTC regulations. Disapproved ads stop all campaign traffic instantly.", fix: "Google policy-compliant ad copy framework: descriptive language about services and specialties, outcome-neutral messaging, credentials and experience as differentiators. Pre-launch policy review on all new copy." },
        { mistake: "Not targeting 'accepting new patients' keywords", impact: "'Doctor accepting new patients near me' is searched by patients who've already confirmed they want a provider — they just need one with availability. Missing this keyword segment means missing your highest-intent searcher.", fix: "Dedicated 'accepting new patients' keyword group with landing pages confirming current availability, online booking integration, and average wait time prominently displayed." },
        { mistake: "Elective and urgent care in the same campaign", impact: "A patient searching 'urgent care near me' needs to book today. A patient searching 'Botox [city]' is in a 2–4 week consideration phase. Same ad copy, same landing page, same bidding serves neither well.", fix: "Separate campaigns per patient intent type: urgent/same-day (immediate booking CTA), routine (online scheduling), specialty referral (specialist credential focus), elective (education + consultation CTA). Each with matching bid strategy." }
      ],
      tools: ["Google Ads", "CallRail (HIPAA mode)", "Google Analytics 4", "Zocdoc/NexHealth", "Unbounce", "Google Tag Manager", "SEMrush"],
      timeline: {
        m1: "HIPAA compliance audit, campaign setup, specialty keywords, compliant landing pages, launch.",
        m2: "First new patient data. Insurance keywords added. Specialty campaigns refined.",
        m3: "CPL firmly established per specialty. Smart bidding activated.",
        m6: "Full new patient pipeline. Multiple specialties performing at target CPL.",
        m12: "Dominant local healthcare PPC presence across all target specialties."
      },
      keywords: [
        "doctor near me", "[specialty] near me", "doctor accepting new patients [city]",
        "urgent care near me", "specialist [city]", "doctor accepting [insurance]",
        "online doctor [state]", "[condition] specialist near me", "healthcare near me"
      ],
      caseStudy: {
        client: "NorthShore Orthopedic Group",
        location: "Boston, MA",
        before: "$5K/mo spend, 7 new patients/mo, no specialty targeting",
        after: "$5K/mo spend, 34 new patients/mo, CPL $147",
        leads: "11 surgical consultations/mo from PPC — avg $12K/procedure",
        period: "5 months",
        highlight: "'Knee replacement surgeon Boston' keyword drove 8 surgical consultation requests in month 2"
      },
      localVsNational: {
        local: "Healthcare PPC is license-jurisdiction specific. We target the states and cities where your providers are licensed and can legally treat patients.",
        national: "Hospital systems and multi-location healthcare groups need market-level campaign management per facility, with centralized HIPAA compliance architecture and specialty-specific optimization."
      },
      faqs: [
        { q: "Is healthcare PPC HIPAA compliant?", a: "It can be — with proper configuration. Standard Google Ads conversion tracking is NOT HIPAA compliant out of the box. We configure HIPAA-compliant tracking using CallRail HIPAA mode, compliant form handling, and pixel configurations that prevent ePHI from entering Google's systems." },
        { q: "Can I run Google Ads for elective healthcare procedures?", a: "Yes — with policy-compliant ad copy. Elective procedures (plastic surgery, fertility, dermatology) are fully advertisable. The restrictions are around outcome claims ('guaranteed'), before/after imagery limitations, and certain drug-related terms." },
        { q: "What's a good CPL for healthcare PPC?", a: "Primary care and urgent care: $60–$120/new patient. Specialist: $100–$250. Elective (high-value): $150–$400. The key is comparing CPL to lifetime patient value — a $175 CPL for a patient with $8,000/yr value over 5 years is exceptional ROI." },
        { q: "How do I target patients with specific insurance plans?", a: "We build insurance-specific keyword campaigns targeting '[insurance plan] doctor [city]' searches. These are lower-competition, higher-conversion-rate keywords because the patient has already filtered by insurance compatibility before clicking." },
        { q: "Can I advertise telehealth services on Google?", a: "Yes — with state-specific targeting matching your provider licensure, and ad copy that clearly describes the telehealth nature of the service. We build telehealth campaigns targeting state-level geography matching your licensed states." },
        { q: "Should healthcare practices run remarketing campaigns?", a: "Yes — cautiously. HIPAA compliance requires that remarketing lists not be built using health-condition-related page visits. We build compliant remarketing lists from general website visitors and past appointment pages, excluding condition-specific URLs." },
        { q: "How long does healthcare PPC take to generate new patients?", a: "Most practices see new patient calls within 7–14 days of campaign launch. Full pipeline optimization takes 60–90 days as conversion data accumulates and bid strategies mature." },
        { q: "What Google policies restrict healthcare advertising?", a: "Restrictions include: outcome guarantees ('cure,' 'fix'), certain drug names, before/after imagery for some procedures, and personal experience claims. We conduct a policy compliance review on all ad copy before launch to prevent disapprovals." }
      ]
    },

    // ─── 5. PLUMBERS ──────────────────────────────────────────────────
    {
      slug: "plumbers",
      name: "Plumbing Companies",
      icon: "🔧",
      tagline: "Capture Emergency Calls the Moment They Happen. Plumbing PPC That Rings Phones.",
      heroSubtitle: "A burst pipe at midnight, a broken water heater before a holiday — plumbing emergencies search Google and call the first result. PPC puts your number there before anyone else's.",
      overview: "Plumbing PPC is emergency-driven, mobile-first, and ruthlessly competitive. The searcher with a flooded basement types 'emergency plumber near me' and calls the first result that answers. There's no comparison shopping, no review reading — just the first credible result that picks up.\n\nThis means plumbing PPC campaigns must be always-on, mobile-optimized to click-to-call, and structured around the emergency keywords that convert at 3–5× the rate of routine service keywords. A well-built plumbing campaign running 24/7 with call tracking and bid-to-call optimization can generate $8,000–$25,000/month in new service revenue from $2,000–$4,000 in ad spend.\n\nRankston builds plumbing PPC programs engineered around calls — not clicks. Every campaign is structured to maximize phone calls from high-intent emergency and service-need searchers, with tracking that ties every dollar of ad spend to actual booked jobs.",
      stats: [
        { val: "73%", label: "of plumbing searches result in a same-day service call" },
        { val: "$380", label: "avg plumbing job value — high ROAS on $8–$18 CPCs" },
        { val: "24/7", label: "campaign scheduling to capture all emergency calls" },
        { val: "6–15×", label: "ROAS on well-optimized emergency plumbing campaigns" }
      ],
      painPoints: [
        { title: "Campaigns Turned Off at Night — Missing All Emergencies", desc: "Burst pipes, water heater failures, and sewer backups happen at midnight and on holidays. A plumbing campaign that stops at 8pm misses the highest-urgency, highest-willingness-to-pay calls of the day." },
        { title: "No Click-to-Call on Mobile Ads", desc: "Emergency plumbing is 80%+ mobile. An ad without a prominently displayed phone number and click-to-call button is missing the primary conversion action of every emergency searcher." },
        { title: "Bidding on Non-Emergency Keywords", desc: "'Plumbing tips' and 'how to fix a leaky faucet' are content searches. 'Emergency plumber near me,' 'burst pipe repair,' and 'plumber open now' are emergency searches. Budget spent on the former generates zero calls." },
        { title: "No Separate Campaign for High-Value Services", desc: "Sewer line replacement ($3,000–$8,000) and water heater installation ($800–$2,000) justify much higher CPCs than a drain cleaning call ($150). Mixing them in one campaign misprices both." },
        { title: "No Service Area Bid Adjustments", desc: "A plumber covering 5 zip codes performs differently in each. Without location-based bid adjustments, budget is distributed equally — instead of concentrated on high-conversion-rate service areas." },
        { title: "Sending Clicks to a Generic Website", desc: "Sending emergency plumbing clicks to a website homepage loses 70% of inbound leads. A dedicated emergency landing page with a phone number above the fold and 'call now' CTA converts at 20%+." }
      ],
      strategy: {
        title: "Our PPC Strategy for Plumbing Companies",
        intro: "Plumbing PPC is about one thing: phone calls from people who need help right now. Every campaign element is engineered to maximize call volume from emergency and high-value service searches.",
        pillars: [
          { title: "Emergency-First Campaign Architecture", desc: "Emergency searches are the highest-value plumbing PPC keywords", tactics: ["Emergency campaign: 'emergency plumber,' 'plumber open now,' '24 hour plumber' — 24/7, highest bids", "Service campaign: 'drain cleaning [city],' 'water heater repair [city]' — standard hours, lower CPC", "High-value campaign: 'sewer line replacement,' 'water heater installation' — higher bid justified by job value", "Negative library: all informational and DIY keyword exclusions"] },
          { title: "Call-Maximized Ad Format", desc: "Mobile plumbing searchers call — ads must be built for calls above all else", tactics: ["Call ads: display phone number as the headline on mobile", "Call extensions on every ad with 24/7 call tracking", "Message extensions: 'Open 24/7,' 'Same-Day Service,' 'Emergency Response'", "Mobile bid increase: +30–50% for mobile devices on emergency campaigns"] },
          { title: "24/7 Ad Scheduling & Coverage", desc: "Plumbing emergencies don't follow business hours", tactics: ["All emergency campaigns run 24 hours, 7 days a week", "Holiday bid increases for all campaigns — peak emergency period", "Weekend coverage for water heater and drain emergency surge", "After-hours bid boost: 10pm–6am for emergency keywords"] }
        ]
      },
      services: [
        "Plumbing PPC Account Setup", "Emergency Campaign Architecture",
        "High-Value Service Campaigns", "Call Ad Format Setup",
        "24/7 Ad Scheduling", "Click-to-Call Optimization",
        "Emergency Landing Pages", "Call Tracking & Recording",
        "Service Area Bid Adjustments", "Negative Keyword Management",
        "Holiday & Weekend Bid Boosts", "Monthly Job Revenue Reporting"
      ],
      commonMistakes: [
        { mistake: "Pausing campaigns after 8pm or on weekends", impact: "The majority of plumbing emergencies occur outside business hours. A burst pipe at 11pm generates a panicked Google search — and the plumber whose ad shows up gets the call and the job.", fix: "24/7 campaign scheduling with after-hours bid increases for emergency keywords when competition drops but urgency spikes. Capturing 11pm emergency calls at lower CPCs than peak daytime competition." },
        { mistake: "No dedicated emergency landing page", impact: "Sending an 'emergency plumber near me' click to a full-featured website homepage forces a panicked homeowner to find a phone number in the navigation. They bounce and call the next result.", fix: "Emergency landing page: 40% of screen = phone number with click-to-call. 'We Answer In 3 Rings.' Emergency response times for your service area. Nothing else — no navigation, no distraction, just the call." },
        { mistake: "All plumbing services in one campaign with one budget", impact: "A $150 drain cleaning click and a $5,000 sewer replacement click have completely different maximum CPC values. Bidding them together misprices both — either overpaying for drain work or underbidding for sewer jobs.", fix: "Three-campaign structure: emergency (highest bids, 24/7), high-value services (sewer, water heater — higher CPC cap), routine services (drain, leak — lower CPC cap). Each bid strategy reflecting actual service value." },
        { mistake: "No call recording or tracking per keyword", impact: "Without call recording, you don't know if your PPC calls are converting or why they're not. Without keyword-level tracking, you can't identify which keywords are generating booked jobs vs. tire-kickers.", fix: "CallRail or Google call tracking with keyword-level attribution. Call recordings reviewed weekly. Campaigns optimized against booked job rate, not just call volume — scaling what converts, cutting what doesn't." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Unbounce", "ServiceTitan/Jobber (CRM)", "Google Tag Manager", "SEMrush"],
      timeline: {
        m1: "Emergency campaign launch, call tracking, 24/7 scheduling, landing page, negative library.",
        m2: "First job-attribution data. Service area bids refined. High-value campaign added.",
        m3: "CPL per service type established. Smart bidding on highest-performing campaigns.",
        m6: "Full emergency + service pipeline from PPC. ROAS tracking per job type.",
        m12: "Dominant local plumbing PPC. Emergency calls 24/7. High-value service pipeline full."
      },
      keywords: [
        "emergency plumber near me", "plumber near me", "plumber open now",
        "burst pipe repair [city]", "water heater repair [city]", "drain cleaning [city]",
        "sewer line repair [city]", "24 hour plumber [city]", "plumbing company near me"
      ],
      caseStudy: {
        client: "AquaFix Plumbing",
        location: "Phoenix, AZ",
        before: "$2,200/mo spend, 8 calls/mo, daytime-only campaign",
        after: "$2,200/mo spend, 47 calls/mo, 38 booked jobs, CPL $47",
        leads: "$14,400/mo in new job revenue from PPC",
        period: "3 months",
        highlight: "24/7 emergency scheduling generated 19 after-hours calls in month 2 alone"
      },
      localVsNational: {
        local: "Plumbing PPC is zip-code and service-territory specific. We geo-fence campaigns to exactly the areas you dispatch to — no budget wasted on calls from outside your operating radius.",
        national: "Regional plumbing franchises need individual market campaigns per location with centralized negative keyword libraries and brand-consistent call tracking systems."
      },
      faqs: [
        { q: "Should plumbing PPC campaigns run 24/7?", a: "Yes — without exception for emergency campaigns. The highest-urgency, highest-converting plumbing searches happen after hours. Pausing campaigns overnight to 'save budget' eliminates your most valuable lead window." },
        { q: "What's a good budget for plumbing PPC?", a: "$1,500–$3,000/month in most markets. Given CPCs of $6–$18 and avg job values of $300–$500+, the math typically generates 8–15× ROAS on properly optimized campaigns within 60–90 days." },
        { q: "How do I track which PPC keywords are generating booked jobs?", a: "CallRail tracks calls to their keyword source. When integrated with ServiceTitan or Jobber, we can tag each new job with the CPC keyword that triggered the call — giving true job-level ROAS per keyword." },
        { q: "What plumbing PPC keywords convert best?", a: "Emergency keywords convert at the highest rate: 'emergency plumber near me,' 'plumber open now,' 'burst pipe repair.' These searchers are calling within minutes. Routine service terms convert well too, but at lower urgency rates." },
        { q: "Should I bid on competitors' plumbing company names?", a: "It's legal and can be effective — especially if a competitor is slow to answer calls. When someone searches a competitor's name, your ad with 'Call Now — 3-Ring Answer Guarantee' can capture the lead before they make contact." },
        { q: "How quickly can plumbing PPC start generating jobs?", a: "Emergency campaigns with a pre-built landing page and call tracking typically generate calls within 48–72 hours of launch. First booked jobs from PPC usually happen within the first week for active plumbing markets." },
        { q: "Is Local Services Ads (LSA) better than Google Ads for plumbers?", a: "LSA and Google Ads serve different positions on the results page. LSA appears above paid ads and charges per lead (not click) — complementary to, not a replacement for, Google Ads. We manage both for maximum SERP coverage." },
        { q: "How do I appear for sewer and water heater searches?", a: "Dedicated ad groups with exact match and phrase match for each high-value service: 'sewer line replacement [city],' 'water heater installation near me.' Higher bid caps and dedicated landing pages per service with specific job value messaging." }
      ]
    },

    // ─── 6. ROOFING ───────────────────────────────────────────────────
    {
      slug: "roofing",
      name: "Roofing Companies",
      icon: "🏗️",
      tagline: "Fill the Calendar Before Storm Season Ends. Roofing PPC That Books Projects.",
      heroSubtitle: "After every storm, homeowners hit Google looking for a roofer. PPC puts your company at the top of those results within hours — capturing the surge before competitors know what hit them.",
      overview: "Roofing PPC has two modes: storm-surge and steady-state. Storm season creates explosive short-term search volume that campaigns must be pre-built to capture. Steady-state is the year-round flow of replacement, repair, and commercial roofing searches that keep the pipeline full between weather events.\n\nThe roofing companies that dominate PPC are the ones ready before the storm — campaigns built, landing pages live, call tracking active. When hail hits and search volume spikes 10×, they're already in position. Competitors scrambling to launch ads days later get the leftovers.\n\nRankston builds roofing PPC programs with storm-readiness as a core feature — pre-built emergency response campaigns that activate immediately after weather events, alongside steady-state programs that generate consistent leads year-round from replacement and commercial searches.",
      stats: [
        { val: "10×", label: "search volume spike in 48 hrs after major storm events" },
        { val: "$12K", label: "avg residential roof replacement value" },
        { val: "Pre-built", label: "storm response campaigns ready to activate in hours" },
        { val: "8–20×", label: "ROAS on storm-season roofing PPC campaigns" }
      ],
      painPoints: [
        { title: "Not Ready Before Storm Events Hit", desc: "Campaigns launched after a storm is already trending generate results 3–5 days later when homeowners have already called 3 roofers. Pre-built campaigns ready to activate in hours capture the surge peak." },
        { title: "Missing Commercial Roofing Keywords", desc: "Commercial roofer keywords ('commercial roofing contractor [city],' 'flat roof repair company') target property managers with $20K–$200K+ projects. Missing these is leaving the highest-value searches uncaptured." },
        { title: "No Insurance Claim Landing Page", desc: "Storm damage roofing = insurance claim roofing. Homeowners searching for help with their insurance claim need a specific landing page: 'We work with your insurance, free inspection and claim assistance.'" },
        { title: "Seasonal Budget Misallocation", desc: "Running the same daily budget year-round misses the math: storm season generates 5–10× the ROI of off-season months. Budgets should surge during spring and fall hail seasons and reduce in winter." },
        { title: "Bidding Broadly Without Material Specificity", desc: "'Roofer near me' competes with every roofer in the market. 'Metal roofing contractor [city]' and 'asphalt shingle replacement near me' are lower-competition, higher-intent keywords with better ROAS." },
        { title: "No Before/After Landing Page Content", desc: "Homeowners considering a $15,000 roof replacement make visual decisions. A landing page with project photos, material options, and a 'free inspection' CTA converts at 3× the rate of a text-only page." }
      ],
      strategy: {
        title: "Our PPC Strategy for Roofing Companies",
        intro: "Roofing PPC wins by being ready before the storm, capturing high-value project searches year-round, and converting clicks into booked inspections with compelling offers and landing pages.",
        pillars: [
          { title: "Storm Response Campaign System", desc: "Pre-built campaigns activate within hours of storm events to capture peak search volume", tactics: ["Pre-built storm damage campaign with ad copy, landing page, and tracking ready to activate", "Geographic bid boosts targeting storm-affected zip codes within 4 hours of event", "Emergency inspection offer: 'Free storm damage inspection — book in 10 minutes'", "Insurance claim assistance as primary message for storm-damage searchers"] },
          { title: "Year-Round Replacement & Commercial Campaigns", desc: "Storm season alone isn't enough — steady-state campaigns maintain pipeline year-round", tactics: ["Replacement campaign: 'roof replacement [city],' 'new roof cost [city],' material-specific keywords", "Commercial campaign: 'commercial roofer [city],' 'flat roof repair,' 'TPO roofing contractor'", "Seasonal budget scaling: surge spring/fall, maintain summer/winter", "High-value material keywords: metal roofing, tile roofing — higher CPC justified by project value"] },
          { title: "Inspection Offer Landing Pages", desc: "The free inspection offer is the most powerful conversion asset in roofing PPC", tactics: ["Free inspection offer above the fold on every residential roofing page", "Before/after project photo gallery building visual trust", "Insurance claim assistance section with 'we handle the paperwork' messaging", "Online scheduling for inspection requests — reducing friction to conversion"] }
        ]
      },
      services: [
        "Roofing PPC Account Setup", "Storm Response Campaign System",
        "Commercial Roofing Campaigns", "Year-Round Replacement Campaigns",
        "Free Inspection Landing Pages", "Insurance Claim Landing Page",
        "Storm Event Activation Service", "Seasonal Budget Management",
        "Material-Specific Keyword Targeting", "Call & Inspection Tracking",
        "Competitor Roofing Analysis", "Monthly Project Revenue Reporting"
      ],
      commonMistakes: [
        { mistake: "Launching campaigns after a storm instead of before", impact: "The peak search window after a major hail or wind event is 24–72 hours. Competitors with pre-built campaigns capture this window. Roofers scrambling to launch ads on day 3 arrive after the homeowners have already made calls.", fix: "Pre-built storm response campaign sitting in draft: ad copy written, landing page live, tracking active. When a storm hits, activation takes 30 minutes — not 3 days. Storm surge captured at peak volume." },
        { mistake: "No insurance claim messaging in ads or landing pages", impact: "The majority of storm damage roofing clients need insurance claim guidance. Ads and landing pages that don't mention insurance claim assistance miss the primary concern of the highest-volume searcher type during storm recovery.", fix: "Insurance claim assistance as a primary message: 'We work directly with your insurance company,' 'Free claim inspection,' 'We handle the paperwork.' This messaging captures and converts the insurance-driven storm searcher at 2–3× the rate of generic roofing ads." },
        { mistake: "Same budget in January as in April", impact: "Spring hail season generates 5–10× the ROI of January. A January dollar of roofing ad spend is worth a fraction of an April dollar. Equal monthly budgets subsidize off-season spend while undersupplying peak-season demand.", fix: "Dynamic seasonal budget allocation: increase 40–60% from March through May (spring hail season) and September through October (fall season). Reduce November through February. Same annual budget, massively better ROAS." },
        { mistake: "No commercial roofing campaign", impact: "Commercial roofing searches come from property managers and business owners with projects 5–20× the value of residential jobs. A company ignoring commercial PPC is leaving the highest-value search category uncaptured.", fix: "Dedicated commercial roofing campaign: 'commercial roofer [city],' 'flat roof repair company near me,' 'TPO/EPDM roofing contractor.' Higher CPC cap justified by commercial project values; separate landing page with commercial portfolio and references." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Unbounce", "Google Tag Manager", "SEMrush", "Weather API (storm trigger alerts)"],
      timeline: {
        m1: "Campaign setup, storm response system built, inspection landing page, call tracking live.",
        m2: "First inspection data. Commercial campaign added. Seasonal bids calibrated.",
        m3: "First storm event captured. CPL per project type established.",
        m6: "Storm + steady-state pipeline running. ROAS tracking per project type.",
        m12: "Dominant roofing PPC. Storm surge fully captured. Commercial pipeline consistent."
      },
      keywords: [
        "roofer near me", "roof replacement [city]", "storm damage roof repair near me",
        "commercial roofer [city]", "hail damage roof repair [city]",
        "free roof inspection near me", "metal roofing contractor [city]",
        "insurance roof claim [city]", "roofing company near me"
      ],
      caseStudy: {
        client: "StormShield Roofing",
        location: "Dallas, TX",
        before: "$4K/mo, 6 leads/mo, no storm response system",
        after: "$4K/mo, 44 leads/mo in storm month, 18 in off-season, CPL $91",
        leads: "Storm month: $380K in new contracts from PPC leads",
        period: "7 months",
        highlight: "Storm activation in 45 minutes after April hail event — 31 inspection bookings in 48 hours"
      },
      localVsNational: {
        local: "Roofing PPC is territory-based. We geo-fence campaigns by zip codes in your service area, with storm-event activation targeting the specific affected zones — not the entire metro.",
        national: "Regional roofing chains and national storm contractors need multi-market campaign management with rapid geographic expansion capability during large-scale storm events."
      },
      faqs: [
        { q: "How do I get my roofing ads to appear immediately after a storm?", a: "Pre-build your storm response campaign before storm season. When a storm hits, activating a pre-built campaign takes 30 minutes, not 3 days. We build storm response campaigns as part of every roofing PPC program." },
        { q: "What's the best roofing PPC offer?", a: "'Free storm damage inspection' is the highest-converting offer in roofing PPC — no commitment, no cost, delivers the inspection that leads to the estimate. 'Free estimate' also performs well for non-storm replacement searches." },
        { q: "Should I run roofing PPC year-round?", a: "Yes — but with seasonal budget allocation. Spring and fall hail seasons get the bulk of budget. Summer and winter maintain a lower-budget steady-state program for replacement and commercial searches. Never go completely dark." },
        { q: "How do I target homeowners whose insurance will pay for their roof?", a: "Insurance claim keywords and messaging on landing pages capture this segment. Ad copy: 'Insurance claim? We handle the paperwork.' Landing page: 'Free insurance claim inspection — we work directly with your provider.' These convert at 3× non-insurance roofing ads." },
        { q: "What budget does roofing PPC need during storm season?", a: "Storm season: $3,000–$8,000/month in competitive markets. The ROAS math is extraordinary — a $1,000 daily budget generating 3 booked inspections, with 1 converting at $12,000, delivers a 12× daily return." },
        { q: "How do I run roofing PPC for commercial properties?", a: "Separate commercial campaign targeting property manager searches: 'commercial roofing contractor,' 'flat roof repair company,' 'TPO roofing [city].' Higher CPC bids reflect commercial project values. Landing page: commercial portfolio, references, financing options." },
        { q: "Can I target specific zip codes hit by a storm?", a: "Yes — geographic bid adjustments can be applied at the zip code or radius level. After a hail event, we increase bids specifically for the affected zip codes while maintaining standard coverage for the broader service area." },
        { q: "How long do roofing PPC campaigns take to generate leads?", a: "Emergency and storm response campaigns generate calls within hours of activation. Year-round steady-state campaigns typically generate first leads within 7–14 days of launch. Storm month performance will typically exceed any other month significantly." }
      ]
    },

    // ─── 7. ECOMMERCE ─────────────────────────────────────────────────
    {
      slug: "ecommerce",
      name: "eCommerce Brands",
      icon: "🛍️",
      tagline: "Turn Ad Spend Into Revenue. eCommerce PPC That Scales Profitably.",
      heroSubtitle: "Google Shopping, Search, and Performance Max campaigns engineered for ROAS — not just traffic. We build eCommerce PPC programs that scale revenue without scaling cost proportionally.",
      overview: "eCommerce PPC is the most data-rich, continuously optimizable advertising channel available to online retailers. Google Shopping alone drives 76% of retail search ad clicks — and retailer brands that master merchant center feed optimization, smart bidding, and campaign architecture generate 4–12× ROAS consistently.\n\nThe brands that fail at eCommerce PPC are those treating it like a set-and-forget channel. They launch a Performance Max campaign, give it a budget, and check results quarterly. The brands succeeding are making daily optimizations on their product feed, weekly asset refreshes on their Performance Max campaigns, and monthly expansion into new product lines based on conversion data.\n\nRankston manages eCommerce PPC as an always-on revenue optimization engine — combining Shopping campaign architecture, search brand protection, remarketing sequences, and Performance Max with the operational rigor that separates profitable scaling from expensive traffic buying.",
      stats: [
        { val: "76%", label: "of retail search ad clicks go to Shopping campaigns" },
        { val: "4–12×", label: "ROAS achieved by optimized eCommerce campaigns" },
        { val: "35%", label: "of eCommerce revenue driven by returning visitor remarketing" },
        { val: "ROAS", label: "not CPC — the only metric that matters for eCommerce PPC" }
      ],
      painPoints: [
        { title: "Performance Max on Autopilot With No Feed Optimization", desc: "PMax campaigns are only as good as the product feed they pull from. Poor titles, missing attributes, and low-quality images produce poor results — regardless of budget. Feed optimization is the foundation of eCommerce PPC." },
        { title: "No Shopping Campaign Segmentation", desc: "High-margin products and low-margin products should not share the same bid strategy. Campaign segmentation by margin, seasonality, and inventory level is essential for profitable Shopping campaigns." },
        { title: "Brand Keywords Undefended — Competitors Appearing for Your Name", desc: "Competitors bidding on your brand name appear above your organic listing. A branded search campaign costs pennies per click (you have the highest Quality Score for your own brand) and protects your highest-converting traffic." },
        { title: "No Remarketing for Cart Abandoners", desc: "65%+ of online shopping carts are abandoned. A well-configured Dynamic Remarketing campaign showing the exact products a visitor viewed typically achieves 3–5× the ROAS of prospecting campaigns." },
        { title: "Seasonal Budget Not Adjusted for Peak Periods", desc: "Q4 holiday season generates 30–50% of annual eCommerce revenue. Running the same daily budget in December as in February is the most expensive mistake in eCommerce PPC." },
        { title: "No Competitor Product Targeting", desc: "Google Shopping allows targeting users searching for competitor products. Appearing in these searches with a compelling offer or competitive price captures buyers already in purchase mode for products like yours." }
      ],
      strategy: {
        title: "Our PPC Strategy for eCommerce Brands",
        intro: "eCommerce PPC wins through product feed excellence, campaign segmentation by margin and intent, and a full-funnel approach from prospecting to cart abandonment recovery.",
        pillars: [
          { title: "Product Feed & Shopping Campaign Architecture", desc: "The foundation of profitable eCommerce PPC", tactics: ["Merchant Center feed optimization: titles, descriptions, images, GTINs, custom labels", "Shopping campaign segmentation by margin, best-sellers, seasonal, clearance", "ROAS target bidding per product segment based on actual margin data", "Competitor product targeting campaigns for product category conquest"] },
          { title: "Performance Max Management", desc: "PMax requires active management to prevent wasted spend on low-value placements", tactics: ["Asset group organization by product category and audience intent", "Weekly search term review and negative list expansion", "Audience signal configuration: customer lists, website visitors, converters", "Ad creative refresh: images, headlines, and descriptions monthly"] },
          { title: "Full-Funnel Remarketing", desc: "Remarketing captures the high-intent visitors who didn't convert on first visit", tactics: ["Dynamic remarketing: exact products viewed shown in display and Shopping", "Cart abandoner sequence: 1-day, 3-day, 7-day campaigns with escalating offers", "Customer match: past purchaser campaigns for repeat purchase and LTV growth", "RLSA: higher bids for past visitors in Search campaigns"] }
        ]
      },
      services: [
        "Google Merchant Center Setup & Optimization", "Shopping Campaign Architecture",
        "Performance Max Campaign Management", "Product Feed Optimization",
        "Brand Defense Campaigns", "Competitor Product Targeting",
        "Dynamic Remarketing Setup", "Cart Abandonment Campaign Sequence",
        "Customer Match & LTV Campaigns", "Seasonal Budget Management",
        "ROAS Reporting by Product Category", "A/B Testing (Creative & Offers)"
      ],
      commonMistakes: [
        { mistake: "Unoptimized product feed with generic titles", impact: "Google Shopping matches ads to searches based primarily on product titles in the Merchant Center feed. A product titled 'Blue Shirt' misses searches for 'men's slim fit navy Oxford shirt large.' Each unoptimized title = invisible for the searches that would buy it.", fix: "Product title optimization following Google's attribute priority order: Brand + Gender + Product Type + Key Attribute + Color/Size. Feed automation maintaining title quality as catalog grows. Properly titled products generate 40–60% more impressions from highly relevant searches." },
        { mistake: "One Shopping campaign for the entire product catalog", impact: "Best-sellers, high-margin products, and loss leaders sharing one campaign and one ROAS target means the algorithm optimizes across them equally — underbidding for high-margin items and overbidding for low-margin products.", fix: "Campaign segmentation by product label: best sellers campaign (highest bids), high-margin campaign (aggressive ROAS target), seasonal campaign (adjustable by quarter), clearance campaign (Target ROAS set to break-even). Each segment bid to its actual profitability." },
        { mistake: "No cart abandonment remarketing", impact: "65%+ of carts are abandoned — these are the most purchase-intent visitors your site receives. Without a cart abandonment remarketing sequence, you're losing the traffic that's most likely to buy.", fix: "Dynamic remarketing campaign targeting cart abandoners within 1, 3, and 7 days with the exact products they added to cart — progressively offering incentives (free shipping on day 3, 10% off on day 7) to recover the sale." },
        { mistake: "No brand keyword campaign — brand searches going to competitors", impact: "Competitors bidding on your brand name appear prominently above your organic listing. Every brand search captured by a competitor is a high-intent buyer lost at the bottom of the funnel — the easiest conversion for any advertiser.", fix: "Brand defense campaign targeting your brand name and all product names. Quality Score advantage means you pay $0.05–$0.20 per click for your own brand terms while competitors pay $1–$5 for the same keyword. Protect every brand search." }
      ],
      tools: ["Google Ads", "Google Merchant Center", "Google Analytics 4", "DataFeedWatch (feed management)", "Klaviyo (email sync)", "Northbeam/Triple Whale (attribution)", "Google Tag Manager"],
      timeline: {
        m1: "Feed optimization, Shopping campaign architecture, PMax launch, brand campaign, remarketing setup.",
        m2: "First ROAS data by segment. Feed refinements. Competitor campaigns added.",
        m3: "Smart ROAS bidding active per segment. Cart abandonment sequence live.",
        m6: "Full-funnel campaign running. ROAS target achieved. Scaling winning segments.",
        m12: "Dominant search + Shopping presence. LTV campaigns generating repeat revenue."
      },
      keywords: [
        "[brand name] [product]", "[product category] [city/online]", "buy [product] online",
        "[product] near me", "best [product type]", "[competitor brand] alternative",
        "[product] sale", "cheap [product]", "[product] free shipping"
      ],
      caseStudy: {
        client: "Luxe Home Textiles",
        location: "Online — US",
        before: "$6K/mo, 2.1× ROAS, one Shopping campaign, no remarketing",
        after: "$6K/mo, 7.4× ROAS, segmented campaigns, full remarketing funnel",
        leads: "Monthly revenue from PPC: $44K (was $12.6K on same budget)",
        period: "5 months",
        highlight: "Cart abandonment sequence alone recovered $8,200/mo in previously lost sales"
      },
      localVsNational: {
        local: "Local eCommerce brands with physical locations need campaigns geo-targeted to their delivery radius or pickup area — combining Shopping ads with local inventory signals.",
        national: "National eCommerce brands need full Shopping architecture across all product categories, with market-level performance analysis and seasonal budget allocation by category and region."
      },
      faqs: [
        { q: "What's a good ROAS for eCommerce Google Ads?", a: "Target ROAS depends on your margins. A 4× ROAS on a product with 30% margins delivers 1.2× net revenue — just breaking even. A 4× ROAS on a 60% margin product is extremely profitable. We set ROAS targets based on your actual product margins, not industry averages." },
        { q: "Should I run Google Shopping or Performance Max for eCommerce?", a: "Both — as complementary campaigns. Standard Shopping gives you full bid and placement control. Performance Max extends reach across all Google properties using automation. We run both with PMax excluded from the most controlled segments." },
        { q: "How important is product feed optimization for Shopping ads?", a: "Critical — it's the foundation. Google Shopping matching is primarily title and attribute-based. Unoptimized feeds generate poor Quality Scores, mismatched searches, and high CPCs. Feed optimization is step one before any other Shopping optimization." },
        { q: "How do I recover abandoned shopping carts with Google Ads?", a: "Dynamic remarketing campaigns using your Merchant Center product feed show exact products to visitors who added them to cart but didn't checkout. Tagged via Google Ads remarketing tag on cart and checkout pages. Typically achieves 3–5× ROAS vs. prospecting campaigns." },
        { q: "How do I compete against Amazon and large retailers in Shopping?", a: "Position on unique products where you have no direct large-retailer competition. Use brand and product-specific keywords where you have Quality Score advantage. Compete on offer (free shipping, better guarantee) rather than price for commodity products." },
        { q: "Should I bid on competitor product names in Google Ads?", a: "Yes — competitor product targeting in Shopping and Search captures buyers in active purchase mode for products competitive with yours. CPCs are higher but conversion rates are excellent because these searchers have already self-qualified their purchase intent." },
        { q: "How do I handle seasonal spikes in my eCommerce PPC budget?", a: "Set seasonal budget rules in advance: Q4 90 days before holiday season, Valentine's Day, Mother's Day aligned campaign expansions. Budget increases of 50–100%+ during peak periods with corresponding ROAS target adjustments reflecting higher competition." },
        { q: "How long until eCommerce PPC is profitable?", a: "With proper feed optimization and campaign structure, most eCommerce brands see positive ROAS within 30 days. Reaching target ROAS consistently takes 60–90 days as smart bidding algorithms accumulate conversion data. Full-funnel profitability including remarketing typically achieved within 90 days." }
      ]
    },

    // ─── 8. RESTAURANTS ───────────────────────────────────────────────
    {
      slug: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      tagline: "Fill Tables Every Night. Restaurant PPC That Drives Reservations and Walk-Ins.",
      heroSubtitle: "When someone in your area searches 'restaurants near me' or 'best Italian restaurant [city],' paid ads place your restaurant at the top before Yelp and TripAdvisor. Reservations and walk-ins from people ready to eat now.",
      overview: "Restaurant PPC is hyper-local, appetite-driven, and time-sensitive. Someone searching 'restaurants near me open now' is making a dining decision in the next 30 minutes. A well-timed paid ad with the right offer — happy hour, weekend specials, new menu items — converts that searcher into a seated guest before they open a third-party platform.\n\nMost restaurants avoid PPC because they think it's only for e-commerce or service businesses. The reality: local restaurants generating $800–$3,000/month from Google Ads typically spend $500–$1,200 on ad spend. The ROI is straightforward — a 4-person table averaging $120 driven by a $15 ad click is 8× ROAS before the check is even paid.\n\nRankston builds restaurant PPC campaigns focused on the two high-ROI windows every restaurant has: the pre-lunch and pre-dinner search surges when local searchers are choosing where to eat. We maximize visibility in those windows with offer-driven ads and frictionless reservation/order landing pages.",
      stats: [
        { val: "72%", label: "of restaurant-intent searches happen within 2 hrs of dining" },
        { val: "8–15×", label: "ROAS on offer-driven local restaurant PPC" },
        { val: "Peak", label: "targeting: 11am–1pm and 5pm–8pm maximize ROI" },
        { val: "Mobile", label: "first — 85% of restaurant searches are on mobile devices" }
      ],
      painPoints: [
        { title: "Running Ads With No Day-Parting Strategy", desc: "Restaurant searches peak sharply before lunch and dinner. Even ad spend across all hours wastes 60%+ of budget on low-intent off-peak periods (2am, 9am) when no one is choosing a restaurant." },
        { title: "Not Targeting Cuisine-Specific and Occasion Searches", desc: "'Italian restaurant near me,' 'romantic dinner [city],' and 'birthday dinner restaurant [city]' are high-intent, cuisine/occasion-specific searches that generic 'restaurant near me' campaigns miss entirely." },
        { title: "No Online Reservation or Order Link", desc: "A hungry searcher who clicks an ad and can't immediately book a table or place an order bounces to a competitor who lets them do both in 30 seconds. Frictionless reservation and order integration is essential." },
        { title: "Not Promoting Happy Hour or Daily Specials", desc: "Happy hour and daily specials drive diners who were considering 2–3 options to choose the restaurant that has an active promotion. PPC ads with specific offers outperform generic ads by 40–60% in restaurant CTR." },
        { title: "Competing on Generic 'Restaurant' Keywords", desc: "'Restaurant near me' competes with hundreds of restaurants and aggregators. Cuisine-specific, occasion-specific, and neighborhood-specific keywords have lower competition and higher conversion rates." },
        { title: "No Delivery/Takeout Campaign", desc: "Delivery intent ('Thai food delivery near me,' 'pizza delivery [zip code]') is a completely different search pattern from dine-in. Missing delivery keyword campaigns ignores 40%+ of restaurant-intent search volume." }
      ],
      strategy: {
        title: "Our PPC Strategy for Restaurants",
        intro: "Restaurant PPC wins by appearing during the pre-meal search windows with compelling offers, cuisine-specific keywords, and frictionless booking or order paths.",
        pillars: [
          { title: "Mealtime Ad Scheduling", desc: "Restaurant PPC budgets should be heavily concentrated in the 90-minute windows before lunch and dinner", tactics: ["11:00am–1:30pm: lunch rush targeting — highest bid increases", "5:00pm–8:30pm: dinner rush targeting — peak restaurant search window", "Weekend lunch: Saturday 10am–2pm bid increases for brunch searches", "Happy hour: 3pm–6pm for happy hour keyword targeting"] },
          { title: "Cuisine & Occasion Keyword Targeting", desc: "Specific searches convert far better than generic restaurant keywords", tactics: ["Cuisine keywords: 'Italian restaurant [city],' 'sushi near me,' 'Mexican food [neighborhood]'", "Occasion keywords: 'romantic dinner,' 'birthday restaurant,' 'anniversary dinner [city]'", "Dine-in vs. delivery campaign split: separate keywords, landing pages, CTAs", "Neighborhood targeting: '[restaurant name] near [landmark/neighborhood]'"] },
          { title: "Offer-Driven Ad Copy", desc: "Active promotions dramatically increase restaurant ad CTR and conversion rates", tactics: ["Happy hour promotions with times in ad copy", "Weekend specials and seasonal menu items", "Reservation incentives: 'Book now and receive complimentary appetizer'", "Delivery offers: 'Free delivery on orders over $25 tonight'"] }
        ]
      },
      services: [
        "Restaurant PPC Setup", "Mealtime Ad Scheduling",
        "Cuisine & Occasion Keyword Research", "Delivery vs. Dine-In Campaign Split",
        "Happy Hour & Specials Campaigns", "Reservation Link Integration",
        "Online Order Integration", "Mobile Click-to-Call Setup",
        "Neighborhood Targeting", "Competitor Restaurant Campaigns",
        "Special Event Campaigns", "Monthly Revenue Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "Running the same bids at 2am as at 6pm", impact: "A 2am restaurant ad click wastes budget on someone with no immediate dining intent. A 6pm click reaches someone choosing dinner right now. Equal bid distribution means 70%+ of budget generates zero seated guests.", fix: "Mealtime bid scheduling: +50% bid adjustments from 11am–2pm and 5pm–9pm. Reduce or pause overnight and early morning. Concentrate the entire daily budget on the 5-hour window when restaurant searches convert." },
        { mistake: "No delivery campaign for a restaurant that delivers", impact: "Delivery intent keywords ('Thai food delivery near me,' 'pizza delivery [zip]') represent 40%+ of restaurant-search volume and convert directly to DoorDash/direct orders. Missing these means a competitor's ad captures every delivery-intent searcher.", fix: "Separate delivery campaign with delivery-specific keywords, delivery-specific ad copy ('Order now, 30-min delivery'), and direct link to your online ordering platform or delivery app. Delivery campaigns often achieve lower CPLs than dine-in for high-delivery-volume restaurants." },
        { mistake: "Generic 'restaurant near me' as primary keyword", impact: "'Restaurant near me' triggers ads for every restaurant in the area and attracts general browsers — not committed diners. CTR is low, CPC is high from competition with aggregators, and conversion rate is poor.", fix: "Cuisine-specific and occasion-specific keywords: 'best Italian restaurant [city],' 'sushi near me,' 'romantic dinner [city].' These searchers have a cuisine preference or occasion intent — converting at 2–4× the rate of generic restaurant searches." },
        { mistake: "No special event or holiday campaigns", impact: "Valentine's Day, Mother's Day, and New Year's Eve are the highest-revenue dining nights of the year. Restaurants without PPC campaigns running specifically for these dates miss the highest-intent, book-now searchers.", fix: "4-week lead-in campaigns for every major dining occasion: Valentine's Day ('romantic dinner reservations [city]'), Mother's Day, NYE, and local events. Landing pages with available time slots and one-click reservation." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "CallRail", "OpenTable/Resy (reservation)", "Google Tag Manager", "Square/Toast (POS integration)"],
      timeline: {
        m1: "Campaign setup, mealtime scheduling, cuisine keywords, reservation/order links, delivery campaign.",
        m2: "First seated-guest attribution. Happy hour campaign added. Holiday campaigns built.",
        m3: "Mealtime bid refinement. Occasion keywords expanded. ROAS tracking live.",
        m6: "Consistent dine-in and delivery pipeline from PPC. Seasonal events captured.",
        m12: "Dominant local restaurant PPC. Reservations regularly sourced from Google Ads."
      },
      keywords: [
        "restaurants near me", "[cuisine] restaurant near me", "best restaurant [city]",
        "dinner near me", "romantic dinner [city]", "happy hour near me",
        "[cuisine] delivery near me", "birthday dinner restaurant [city]",
        "brunch [city]", "restaurant reservations [city]"
      ],
      caseStudy: {
        client: "Osteria Fiore",
        location: "San Francisco, CA",
        before: "$800/mo, 12 PPC reservations/mo, even scheduling",
        after: "$800/mo, 63 reservations/mo, CPL $12.70",
        leads: "63 tables/mo from PPC — avg $110/table = $6,930 additional monthly revenue",
        period: "3 months",
        highlight: "Mealtime scheduling shift concentrated entire budget into 6pm–9pm — CPL dropped from $67 to $12.70"
      },
      localVsNational: {
        local: "Restaurant PPC is neighborhood-level — we geo-target a 3–5 mile radius around your location, concentrating every dollar on searchers who can realistically walk through your door tonight.",
        national: "Restaurant chains and franchises need location-level campaign management with centralized brand assets and occasion campaigns, plus individual store radius targeting per location."
      },
      faqs: [
        { q: "Is Google Ads worth it for a restaurant?", a: "Absolutely — the math is compelling. A restaurant averaging $100/table spending $1,000/month on ads generating 25 tables = $2,500 in direct revenue with 2.5× ROAS. Considering customer lifetime value (return visits, referrals), the actual ROAS is substantially higher." },
        { q: "When should restaurants run their PPC ads?", a: "Concentrate bids heavily during pre-lunch (11am–1:30pm) and pre-dinner (5pm–9pm) windows. These two periods drive 70%+ of all restaurant-intent searches. Running equal spend overnight wastes the majority of your restaurant ad budget." },
        { q: "Should restaurants advertise on Google or social media?", a: "Both serve different purposes. Google Ads captures high-intent searchers actively choosing where to eat now (highest conversion rate). Instagram/Facebook builds visual appetite and discovery for awareness. For fastest revenue, start with Google Ads." },
        { q: "What's the best offer to use in restaurant PPC ads?", a: "Happy hour details with specific times: '50% off wine bottles, Mon–Fri 4–6pm.' New menu items. Special events. Reservation incentive: 'Book via Google Ads link, receive complimentary dessert.' Specific offers dramatically outperform generic 'great food, great atmosphere' copy." },
        { q: "How do I run delivery restaurant PPC?", a: "Separate delivery campaign: cuisine + 'delivery near me' keywords, direct link to your online ordering page or third-party platform. Ad copy emphasizing delivery time and minimum order. Highest bids during peak dinner delivery hours (6pm–9pm)." },
        { q: "How do I compete with Yelp and OpenTable in restaurant PPC?", a: "You don't need to — you're not competing for the same thing. Restaurant-specific ads with a direct reservation link bypass aggregator comparison. Searchers clicking your ad are choosing your restaurant specifically, not browsing a list." },
        { q: "Should I run PPC campaigns specifically for Valentine's Day and holidays?", a: "Yes — these are the highest-intent, book-immediately dining events of the year. 4-week lead-in campaigns with occasion-specific keywords and landing pages showing available reservation times convert dramatically better than standard campaigns." },
        { q: "How much should a restaurant spend on Google Ads?", a: "$500–$2,000/month for a single location is the typical range. Lower budgets work in neighborhood restaurants with an established reputation. Higher budgets make sense for fine dining or high-competition areas where visibility against well-funded competitors requires more impression share." }
      ]
    },

    // ─── 9. CONTRACTORS ───────────────────────────────────────────────
    {
      slug: "contractors",
      name: "General Contractors",
      icon: "🏚️",
      tagline: "Fill the Project Pipeline. Contractor PPC That Books Estimates and Starts Jobs.",
      heroSubtitle: "Homeowners planning renovations and additions search Google before calling anyone. PPC puts your contracting business at the top of those results, generating estimate requests from qualified buyers with real project budgets.",
      overview: "General contracting PPC sits between emergency services (roofing, plumbing) and considered high-value purchases (Invisalign, implants). Homeowners have real projects in mind — kitchen remodels, additions, basement finishes — and they're actively gathering estimates from 3–5 contractors before committing. Your PPC ad is the first impression in that selection process.\n\nThe economics are powerful: a kitchen remodel averages $35,000–$75,000. A home addition runs $100,000–$300,000. A basement finish is $25,000–$60,000. Even a 1–2% conversion rate from qualified PPC estimate requests generates extraordinary ROAS on $10–$25 CPC keywords. The challenge is filtering for qualified leads — homeowners with real budgets, not just casual browsers.\n\nRankston builds contractor PPC programs focused on qualified estimate requests from project-intent searchers, with landing pages that pre-qualify budget and scope, estimate request forms that filter serious buyers, and tracking that attributes every completed contract back to the keyword that started the relationship.",
      stats: [
        { val: "$52K", label: "avg kitchen remodel — one job = months of ad spend ROI" },
        { val: "5.8%", label: "avg contractor landing page conversion rate (our campaigns)" },
        { val: "3–5", label: "estimates typically gathered per project by homeowners" },
        { val: "10–40×", label: "ROAS on completed projects from PPC estimate leads" }
      ],
      painPoints: [
        { title: "Bidding on Low-Specificity Keywords", desc: "'Contractor near me' and 'home improvement company' attract every homeowner with any project idea. 'Kitchen remodel contractor [city]' and 'home addition builder [city]' attract homeowners specifically planning the projects you do best." },
        { title: "No Portfolio on Landing Pages", desc: "Homeowners choosing a contractor for a $50,000 project need to see your work before they call. A landing page without before/after photos and project galleries loses the visual proof of quality that drives estimate requests." },
        { title: "No Budget Qualifier on the Estimate Form", desc: "Without a budget qualifier ('what is your approximate project budget?'), estimate requests include homeowners with $5,000 budgets for $35,000 projects. Qualifying budget on the form filters for project-ready leads." },
        { title: "Missing Specialty Project Keywords", desc: "'ADU builder [city],' 'home addition contractor,' and 'bathroom remodel near me' are project-specific keywords that attract homeowners with defined project intent. Generic contractor terms miss these high-intent searches." },
        { title: "No Financing Offer", desc: "Financing options ('0% financing available,' 'projects from $350/month') convert hesitant homeowners who want the project but are concerned about upfront cost. This offer alone improves conversion rates 20–40% for high-ticket project keywords." },
        { title: "Same Campaign Budget Year-Round", desc: "Spring and early fall are peak home improvement planning seasons. Budget concentration in March–May and September–October captures the highest-intent research periods when homeowners are most actively planning projects." }
      ],
      strategy: {
        title: "Our PPC Strategy for General Contractors",
        intro: "Contractor PPC wins through project-specific keyword targeting, portfolio-driven landing pages, and lead qualification that filters estimate requests for budget-qualified, project-ready homeowners.",
        pillars: [
          { title: "Project-Specific Campaign Architecture", desc: "Each major project type gets its own campaign with tailored keywords and landing pages", tactics: ["Kitchen remodel campaign: 'kitchen remodel contractor [city],' 'kitchen renovation near me'", "Addition campaign: 'home addition builder [city],' 'room addition contractor'", "Basement campaign: 'basement finishing contractor,' 'basement remodel [city]'", "ADU/garage conversion campaign for applicable markets"] },
          { title: "Portfolio Landing Pages", desc: "Visual proof of quality is the primary conversion driver for contractor PPC", tactics: ["Gallery of completed projects by type: kitchen, bath, addition, ADU", "Before/after photos with project scope and budget range displayed", "Client testimonials with specific project references", "Financing option prominently displayed on every page"] },
          { title: "Qualified Estimate Request System", desc: "Not every click is a qualified lead — build the form to pre-qualify automatically", tactics: ["Estimate form: project type + budget range + timeline questions", "Budget qualifier: eliminate under-budget requests before they consume estimate time", "Project scope description field: understanding complexity before the call", "Financing inquiry option: capture budget-concerned leads who want the project"] }
        ]
      },
      services: [
        "Contractor PPC Account Setup", "Project-Specific Campaign Architecture",
        "Specialty Project Keyword Research", "Portfolio Landing Page Design",
        "Qualified Estimate Form Setup", "Financing Offer Campaigns",
        "Seasonal Budget Management", "Competitor Contractor Analysis",
        "Call & Form Conversion Tracking", "CRM Lead Attribution Setup",
        "Project Revenue Reporting", "A/B Testing (Gallery vs. Testimonials)"
      ],
      commonMistakes: [
        { mistake: "No project-specific landing pages — one generic page for all work types", impact: "A homeowner searching 'kitchen remodel contractor [city]' landing on a generic 'services' page sees HVAC, painting, and plumbing alongside kitchens. They can't quickly confirm you specialize in their project, so they bounce to a specialist.", fix: "Dedicated landing page per project type with a gallery of that specific project type, testimonials from those specific clients, and an estimate form scoped to that project. Kitchen people see kitchens. Addition people see additions. Specialists win." },
        { mistake: "No portfolio — text-only landing pages for visual-decision buyers", impact: "Contractor hiring is almost entirely visual. Homeowners want to see the quality of your work before they invite you to give an estimate. A text-only or stock-photo page gives them nothing to evaluate — they click back and find a competitor showing their actual work.", fix: "Real project photo galleries on every landing page — minimum 6 before/after photos per project type. Professional photography investment pays back 5–10× in conversion rate improvement for high-ticket contractor PPC. Nothing sells a $60,000 kitchen remodel faster than photos of beautiful $60,000 kitchen remodels." },
        { mistake: "No financing offer mentioned in ads or landing pages", impact: "For projects priced $20,000–$100,000+, a significant percentage of homeowners want the project but are uncertain about cash flow. Without a financing option mentioned, they self-eliminate or delay — even when you offer financing.", fix: "'0% financing on projects over $10,000' or '$350/month bathroom remodel' in ad copy and prominently on landing pages. This messaging captures budget-sensitive homeowners who want the project. Financing inquiries convert at similar rates to full-budget inquiries." },
        { mistake: "No budget qualifier on estimate request forms", impact: "Without a budget field, estimate requests include homeowners hoping a $45,000 kitchen renovation can be done for $8,000. No-shows on estimates, wasted site visits, and estimate team frustration erode the value of PPC leads.", fix: "Budget range selector on the estimate form: Under $10K / $10K–$25K / $25K–$50K / $50K–$100K / $100K+. Leads below your minimum project size can be declined before scheduling a site visit. Qualification cuts estimate waste by 40–60%." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Unbounce", "JobNimbus/BuilderTrend (CRM)", "Google Tag Manager", "SEMrush"],
      timeline: {
        m1: "Project campaigns launched, portfolio landing pages live, estimate form with qualifier, tracking.",
        m2: "First estimate data. Unqualified search terms excluded. Financing campaign added.",
        m3: "CPL per project type established. Seasonal bids applied. Smart bidding active.",
        m6: "Full estimate pipeline from PPC. Project revenue tracking live.",
        m12: "Dominant local contractor PPC. Multiple project types converting at target CPL."
      },
      keywords: [
        "kitchen remodel contractor [city]", "home addition contractor near me",
        "general contractor near me", "bathroom remodel contractor [city]",
        "basement finishing contractor [city]", "home renovation company [city]",
        "ADU builder [city]", "home improvement contractor near me"
      ],
      caseStudy: {
        client: "Meridian Home Builders",
        location: "Denver, CO",
        before: "$4K/mo, 8 estimate requests/mo, 2 projects/mo avg",
        after: "$4K/mo, 31 estimate requests/mo, 12 projects/mo avg, CPL $129",
        leads: "Avg project value $42K — $504K in monthly contracts sourced from PPC",
        period: "6 months",
        highlight: "Budget qualifier on estimate form eliminated 60% of unqualified requests — win rate rose from 18% to 34%"
      },
      localVsNational: {
        local: "Contractor PPC is metro and county level — we target the geographic areas where your crews operate and you're licensed to pull permits.",
        national: "National remodeling franchises need location-level campaign management with centralized portfolio assets and project-type campaigns scaled per location."
      },
      faqs: [
        { q: "What's a good budget for contractor PPC?", a: "$2,500–$6,000/month for most markets. Given avg project values of $30,000–$75,000, even a single project per month from PPC generates 10–30× ROAS on ad spend. Most optimized campaigns generate 2–5 projects monthly." },
        { q: "What project types work best for Google Ads?", a: "Kitchen remodels, home additions, ADUs, and basement finishes are the highest-ROAS contractor PPC categories — specific enough to pre-qualify intent, high enough value to justify $15–$30 CPCs. General 'handyman' terms have lower average project values and higher waste." },
        { q: "How do I qualify PPC leads for project budget?", a: "Budget range selector on the estimate form: ranges from Under $10K to $100K+. Leads below your minimum are declined without site visits. This alone eliminates 40–60% of estimate waste and concentrates your estimating resources on winnable projects." },
        { q: "Should I display pricing on my contractor landing pages?", a: "Project price ranges with financing options work better than exact pricing. 'Kitchen remodels from $28,000–$75,000, 0% financing available' sets realistic expectations while capturing both cash buyers and financing-interested leads." },
        { q: "Do I need a separate campaign for each project type?", a: "Yes — for the project types generating your highest revenue. A kitchen remodel campaign with a kitchen-specific landing page and gallery converts at 3–5× the rate of a generic 'contractor near me' campaign. Project specificity = intent specificity = better leads." },
        { q: "How do I compete with large remodeling franchise networks in PPC?", a: "Compete on local credibility: real project photos from your actual local work, local testimonials naming neighborhoods, local licensing and permit experience. National franchises can't match hyper-local authenticity — and that's what converts on landing pages." },
        { q: "Should contractor ads run year-round?", a: "Yes — with seasonal budget adjustments. Spring (March–May) and early fall (September–October) are peak planning periods. Increase budget 30–50% during these windows. Maintain lower-budget campaigns in winter for planning-ahead homeowners." },
        { q: "How long does contractor PPC take to generate completed projects?", a: "Estimate requests typically start within 7–14 days of launch. First signed contracts from PPC usually arrive 30–60 days in — reflecting the typical estimate-to-contract timeline in contractor sales cycles." }
      ]
    },

    // ─── 10. MORTGAGE BROKERS ─────────────────────────────────────────
    {
      slug: "mortgage-brokers",
      name: "Mortgage Brokers",
      icon: "🏦",
      tagline: "Capture Purchase and Refinance Intent at the Moment of Decision. Mortgage PPC That Closes Loans.",
      heroSubtitle: "When buyers search for mortgage rates or refinance options, Google Ads puts your brokerage at the top before aggregators and bank competitors. PPC that generates mortgage applications from qualified borrowers.",
      overview: "Mortgage PPC is highly competitive, heavily regulated, and — when done correctly — one of the highest-ROAS advertising channels available to independent brokers. A single closed loan generates $3,000–$12,000+ in commission. Even at $30–$50 CPCs in competitive markets, the economics are exceptional.\n\nThe challenge is compliance. Mortgage advertising on Google is subject to specific lending regulations — trigger terms requiring APR disclosure, fair lending requirements, and geographic targeting restrictions. Most mortgage PPC campaigns running outside compliant frameworks risk Google account suspension or regulatory liability.\n\nRankston builds mortgage PPC programs that balance compliance architecture with conversion optimization — targeting purchase, refinance, and first-time buyer intent with separate campaigns, RESPA-compliant ad copy, and landing page lead qualification that delivers applications from credible borrowers ready to move forward.",
      stats: [
        { val: "$6,400", label: "avg mortgage broker commission per closed loan" },
        { val: "RESPA", label: "compliant ad copy and landing page framework" },
        { val: "72 hrs", label: "avg time from PPC application to initial broker contact" },
        { val: "8–25×", label: "ROAS on closed loans from qualified PPC applications" }
      ],
      painPoints: [
        { title: "Non-Compliant Mortgage Ad Copy", desc: "Using terms like 'lowest rates' or 'best rates guaranteed' without required disclosures violates Google financial advertising policies and can trigger regulatory review. Most generic agencies don't know the mortgage ad compliance framework." },
        { title: "No Separation of Purchase vs. Refinance Campaigns", desc: "A first-time buyer searching 'how to get a mortgage' and a homeowner searching 'refinance my mortgage' are in completely different intent stages requiring different messaging, landing pages, and qualification criteria." },
        { title: "Competing on Rate Without Other Differentiators", desc: "Bidding on 'best mortgage rates [city]' positions your brokerage in a pure rate comparison with banks and aggregators. Relationship, speed, and options diversity are broker advantages that differentiate better than rates." },
        { title: "No Pre-Qualification Form on Landing Pages", desc: "Mortgage PPC quality depends entirely on application quality. A landing page with only a contact form generates low-quality leads. A pre-qualification form (credit score range, down payment, property value) generates qualified applications ready to process." },
        { title: "Ignoring First-Time Buyer Keywords", desc: "'First-time home buyer mortgage [city],' 'FHA loan [city],' and 'down payment assistance programs [city]' attract the highest-volume buyer segment — and independent brokers have product access advantages over big banks for these programs." },
        { title: "Not Targeting Real Estate Agent Partnership Keywords", desc: "Real estate agents are the highest-leverage referral source for mortgage brokers. Appearing for 'mortgage broker for realtors [city]' or 'preferred lender program [city]' searches can generate agent partnerships worth dozens of loans per year." }
      ],
      strategy: {
        title: "Our PPC Strategy for Mortgage Brokers",
        intro: "Mortgage PPC wins through compliant campaign architecture, intent-matched purchase and refinance campaigns, and pre-qualification landing pages that separate serious applicants from rate shoppers.",
        pillars: [
          { title: "Compliant Mortgage PPC Architecture", desc: "Every mortgage campaign is built within Google financial advertising policy and applicable lending regulations", tactics: ["Ad copy framework: rate claims with required APR disclosure when applicable", "Fair lending: no discriminatory targeting by protected class", "Geographic targeting: state licensing compliance per market", "Landing page disclosure: NMLS numbers, required lender disclosures per state"] },
          { title: "Purchase vs. Refinance Campaign Split", desc: "Purchase and refinance buyers need completely separate campaigns", tactics: ["Purchase campaign: first-time buyer, FHA, VA, jumbo — intent-matched landing pages", "Refinance campaign: rate-and-term, cash-out, debt consolidation — separate messaging", "First-time buyer campaign: down payment assistance, FHA, first-time buyer programs", "Agent partnership campaign: realtor referral network and preferred lender positioning"] },
          { title: "Pre-Qualification Landing Pages", desc: "Lead quality is determined at the landing page level — qualification must happen before the broker invests time", tactics: ["3-step pre-qualification: property info, financial overview, contact info", "Credit score range selector: ensures borrowers understand credit requirements", "Loan type selector matching available products to borrower situation", "NMLS disclosure and fair lending statement below the fold"] }
        ]
      },
      services: [
        "Compliant Mortgage PPC Setup", "Purchase Campaign Architecture",
        "Refinance Campaign Architecture", "First-Time Buyer Campaigns",
        "VA & FHA Loan-Specific Campaigns", "Pre-Qualification Landing Pages",
        "Agent Partnership Campaign", "Rate Comparison Keyword Targeting",
        "State Licensing Geo-Targeting", "Application Tracking & Attribution",
        "Quality Lead Scoring Setup", "Monthly Closed Loan ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "Non-compliant rate claims in ad copy", impact: "Ad copy with 'lowest mortgage rates' without required APR disclosure violates Google's Financial Products and Services policy. Disapproved ads halt all traffic; repeat violations trigger account suspension.", fix: "Compliant ad copy framework: differentiate on speed ('close in 21 days'), service ('dedicated loan officer'), and product access ('150+ loan programs') rather than rate claims. Where rates are used, include required disclosure in the ad extension or landing page per RESPA/Google policy." },
        { mistake: "Purchase and refinance campaigns lumped together", impact: "A first-time buyer needing FHA guidance and a homeowner wanting to cash out equity are looking for completely different products, information, and conversations. One campaign, one landing page, one message serves neither well.", fix: "Separate campaigns: purchase (first-time buyer, conventional, jumbo, VA), refinance (rate-and-term, cash-out), and agent partnership. Each with distinct messaging, budget, and pre-qualification flow matching the borrower situation." },
        { mistake: "Contact form instead of pre-qualification form", impact: "A 'name, email, phone' contact form generates calls from buyers who are years away from purchase readiness, have credit scores below qualification thresholds, or are rate-shopping without intent to act. Broker time wasted on unqualified leads.", fix: "4-field pre-qualification: property purchase price/value, down payment available, credit score range (600–640, 640–680, 680–720, 720+), and loan purpose. Pre-qualification filters generate applications 50% more likely to close than contact form leads." },
        { mistake: "Not targeting first-time buyer programs", impact: "First-time buyers represent 40%+ of purchase mortgage volume — and they actively search for program information independently. Ignoring FHA, down payment assistance, and first-time buyer keywords means missing the market's largest buyer segment.", fix: "Dedicated first-time buyer campaign: 'FHA loan [city],' 'first-time home buyer programs [state],' 'down payment assistance [city].' Landing pages explaining specific programs with a pre-qualification CTA. Independent brokers typically have access to better FHA and assistance program rates than big banks." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Encompass/Salesforce (LOS CRM)", "Unbounce", "Google Tag Manager", "SEMrush"],
      timeline: {
        m1: "Compliant campaign setup, purchase/refi split, pre-qual landing pages, state geo-targeting, launch.",
        m2: "First application data. Non-qualifying terms excluded. First-time buyer campaign added.",
        m3: "CPL per borrower type established. Smart bidding active. Agent campaign launched.",
        m6: "Full purchase + refinance pipeline from PPC. Closed loan ROAS tracking live.",
        m12: "Dominant local mortgage PPC. Agent partnerships generating referral multiplier."
      },
      keywords: [
        "mortgage broker near me", "mortgage rates [city]", "first-time home buyer mortgage [city]",
        "FHA loan [city]", "refinance mortgage [city]", "VA loan lender [city]",
        "mortgage pre-approval near me", "cash out refinance [city]", "jumbo mortgage [city]"
      ],
      caseStudy: {
        client: "Prestige Lending Group",
        location: "Charlotte, NC",
        before: "$5K/mo, 14 applications/mo, 3 closed loans/mo, non-compliant copy",
        after: "$5K/mo, 52 applications/mo, 11 closed loans/mo, CPL $96",
        leads: "11 loans × $5,800 avg commission = $63,800/mo from PPC",
        period: "5 months",
        highlight: "Pre-qualification form launch filtered out 45% of unqualified leads — closing ratio jumped from 21% to 46%"
      },
      localVsNational: {
        local: "Mortgage PPC is state-licensed and metro-specific. We geo-target campaigns to the states where your brokers hold active licenses, with metro-level bid adjustments for purchase market activity.",
        national: "Multi-state mortgage operations need licensed-market campaign management with centralized compliance framework and market-level budget allocation based on purchase volume data."
      },
      faqs: [
        { q: "Can mortgage brokers advertise on Google?", a: "Yes — with compliant ad copy and landing pages. Google requires NMLS number disclosure, prohibits certain rate guarantee claims without APR disclosure, and restricts some targeting options. We build every mortgage campaign within Google's Financial Products and Services policy." },
        { q: "What's a good PPC budget for mortgage brokers?", a: "$3,000–$8,000/month in most markets. At $30–$50 CPC for competitive mortgage keywords, this generates 60–200 clicks monthly. With a 5–8% landing page conversion rate and 20–30% close rate, that's 1–4 closed loans/month — well above break-even at $5,000+ commissions per loan." },
        { q: "Should I target purchase or refinance keywords?", a: "Both — in separate campaigns. In rising rate environments, purchase volume > refinance volume. In falling rate environments, refinance volume surges. Separate campaigns allow budget reallocation between them based on current market conditions." },
        { q: "How do I generate real estate agent referrals from PPC?", a: "Agent partnership campaign targeting 'mortgage broker for realtors [city],' 'preferred lender for real estate agents,' and 'mortgage partner for realtors.' Landing page positioned for agents: fast closings, communication standards, co-marketing opportunities. One agent partnership = 12–36 loan referrals per year." },
        { q: "What mortgage PPC keywords work best?", a: "Purchase: 'FHA loan [city],' 'mortgage pre-approval [city],' 'first-time home buyer mortgage [city].' Refinance: 'refinance my mortgage [city],' 'cash out refinance [city].' These specific keywords convert at 2–4× the rate of generic 'mortgage rates' terms." },
        { q: "How do I track which keywords generate closed loans?", a: "Application tracking in Google Ads + CRM integration. We tag each application with the PPC keyword source. When the loan closes, the keyword is credited in the CRM — giving closed-loan ROAS per keyword, ad group, and campaign." },
        { q: "How do I compete with Rocket Mortgage and large banks in PPC?", a: "Compete on what they can't replicate: broker relationship, access to 100+ lenders/programs, faster decisions, and direct loan officer availability. These are real advantages over large bank bureaucracy — and they resonate in ad copy and on landing pages." },
        { q: "How long does mortgage PPC take to generate closed loans?", a: "Applications typically start within 7–14 days. First closed loans from PPC arrive 30–90 days in — reflecting the purchase or refinance timeline. Refinance loans close faster (20–30 days). Purchase loans close at contract to close timing (30–60+ days)." }
      ]
    },

    // ─── 11. ACCOUNTANTS ──────────────────────────────────────────────
    {
      slug: "accountants",
      name: "Accounting Firms",
      icon: "📊",
      tagline: "Full the Client Roster Before Tax Season Ends. Accounting PPC That Books Engagements.",
      heroSubtitle: "Business owners and individuals searching for CPAs, tax preparers, and bookkeepers are ready to engage. PPC gets your firm in front of them the moment they search — before they call your competitor.",
      overview: "Accounting PPC has a natural seasonality peak — January through April is the highest-search-volume period for tax-related keywords. But the firms that dominate accounting PPC year-round are those capturing the year-round high-value services: business accounting, bookkeeping, payroll, and CFO-level advisory.\n\nThe economics are excellent and often underestimated. A new small business accounting client represents $3,600–$18,000+ per year in recurring revenue. A tax client represents $400–$2,000/engagement plus potential advisory upsells. At $8–$20 CPCs for accounting keywords, even modest conversion rates generate extraordinary annual ROAS on the lifetime client value.\n\nRankston builds accounting PPC programs with tax-season surge capability and year-round business accounting pipelines — ensuring the firm is visible to the right client types at the right moment, whether it's a business owner needing a bookkeeper in August or an individual needing a CPA in March.",
      stats: [
        { val: "$9,600", label: "avg annual value of a small business accounting client" },
        { val: "5.2%", label: "avg accounting landing page conversion rate (our campaigns)" },
        { val: "4×", label: "tax-season search volume spike (Jan–Apr vs. rest of year)" },
        { val: "15–50×", label: "5-year client lifetime ROAS on accounting PPC costs" }
      ],
      painPoints: [
        { title: "Only Running PPC During Tax Season", desc: "Business bookkeeping, payroll, and advisory services are needed year-round. A firm that only runs PPC January–April misses 8 months of business accounting leads — the highest-value, most recurring client type." },
        { title: "Same Campaign for Individual Tax and Business Accounting", desc: "An individual needing personal tax preparation ($400 engagement) and a business owner needing ongoing bookkeeping ($12,000/year) require completely different messaging, CTAs, and qualifying conversations." },
        { title: "No Specialization Keywords", desc: "'Accountant near me' competes with every accounting firm in the market. 'CPA for small business [city],' 'eCommerce accountant [city],' and 'real estate accountant [city]' are specialty keywords with higher intent and lower competition." },
        { title: "No Niche Industry Targeting", desc: "CPAs specializing in real estate investors, medical practices, law firms, or tech startups should be bidding on industry-specific accounting searches. These searchers are looking specifically for a CPA who understands their industry." },
        { title: "No Free Consultation Offer", desc: "Potential accounting clients compare firms before committing. A 'free 30-minute consultation' offer reduces the perceived risk of initial contact and increases inquiry volume by 30–50% vs. no offer." },
        { title: "Tax Season Budget Not Pre-Built", desc: "January 1 is the start of peak tax season search volume. Accounting firms scrambling to launch campaigns in February miss the first 30 days of peak — when competition is lower and CPLs are best." }
      ],
      strategy: {
        title: "Our PPC Strategy for Accounting Firms",
        intro: "Accounting PPC wins through service-type campaign separation, year-round business accounting targeting, niche industry specialization, and tax-season surge readiness.",
        pillars: [
          { title: "Service-Segmented Campaign Architecture", desc: "Individual and business accounting require separate campaigns", tactics: ["Tax season campaign: individual returns, self-employed, multi-state — Jan–Apr focus", "Business accounting campaign: bookkeeping, payroll, business tax — year-round", "Specialty campaign: industry-specific accounting (real estate, medical, eCommerce)", "Advisory campaign: CFO services, financial planning, business formation"] },
          { title: "Niche Industry Keyword Targeting", desc: "Specialty accounting keywords convert at 3–5× generic 'accountant near me'", tactics: ["Real estate CPA: 'accountant for real estate investors [city],' 'cost segregation specialist'", "Medical practice: 'CPA for medical practice,' 'healthcare accounting firm [city]'", "eCommerce: 'eCommerce accountant [city],' 'Shopify CPA,' 'Amazon seller accountant'", "Legal firms: 'law firm bookkeeping,' 'attorney accounting services'"] },
          { title: "Tax Season Surge System", desc: "Tax season is the highest-ROI period in accounting PPC — campaigns must be pre-built and ready", tactics: ["Tax campaign built and in draft by December 1 each year", "January 1 activation capturing first-wave tax searchers at lowest CPCs", "Budget surge: 50–100% increase January through April 15", "Tax deadline urgency messaging: 'Still Need Your Taxes Done? Book Now.'"] }
        ]
      },
      services: [
        "Accounting PPC Account Setup", "Tax Season Campaign System",
        "Business Accounting Campaigns", "Niche Industry Keyword Targeting",
        "Free Consultation Landing Pages", "Year-Round Bookkeeping Campaigns",
        "Tax Season Budget Management", "Specialty CPA Campaigns",
        "Call & Consultation Tracking", "Client Revenue Attribution",
        "Competitor CPA Analysis", "Monthly ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "Only running PPC during tax season", impact: "Business bookkeeping leads ($9,600+ annual value) search year-round. A firm that pauses all PPC May 1 through December misses 8 months of high-LTV business accounting client acquisition — the most valuable ongoing revenue source.", fix: "Year-round business accounting campaign running parallel to seasonal tax campaign. Reduced budget May–December, surge January–April. Business accounting leads in August become annual clients renewing through tax season — the compound ROAS is extraordinary." },
        { mistake: "No specialist positioning in ads or landing pages", impact: "In a market with 20 accountants all running 'accountant near me' broader campaigns, the specialist wins. 'CPA for real estate investors' or 'eCommerce accountant for Shopify sellers' signals expertise that generic 'CPA near me' ads cannot.", fix: "Niche industry campaigns with specialist messaging in every ad: 'CPA specializing in real estate investors.' Landing pages with specific industry client types, industry-relevant tax strategies mentioned, and testimonials from that industry. Specialists charge more and close more." },
        { mistake: "No free consultation offer — just a 'contact us' CTA", impact: "Accounting clients compare multiple firms before engaging anyone. Without a low-friction first step ('free 30-minute initial consultation'), the barrier to contact feels too high and many qualified prospects don't reach out.", fix: "'Free 30-Minute Consultation' as the primary CTA on every accounting landing page. Calendly or Acuity scheduling integration so prospects can book immediately without a back-and-forth email. Low friction = higher inquiry volume from qualified prospects." },
        { mistake: "Tax season campaign launched in February instead of January 1", impact: "January is peak tax search volume AND has the lowest CPCs of tax season (competition builds through February and March). Firms launching campaigns in February pay 20–40% higher CPCs than those live on January 1 — and miss the first, best wave of early filers.", fix: "Tax season campaign built in draft by December 15. Jan 1 activation — capturing early filers at January CPCs before February competition surge. Pre-built campaigns allow immediate launch without the 2–3 week delay of building from scratch in January." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Calendly/Acuity (scheduling)", "Unbounce", "Google Tag Manager", "QBO/Xero (client attribution)"],
      timeline: {
        m1: "Campaign setup, tax campaign drafted, business accounting live, consultation landing pages, tracking.",
        m2: "First consultation data. Specialty industry campaigns added. Tax season surge prep.",
        m3: "Jan 1: Tax season campaign activated. Budget surge. Peak CPL performance.",
        m6: "Tax season results reviewed. Business accounting pipeline steady. Advisory campaign added.",
        m12: "Full annual cycle complete. Year-over-year CPL trends. Client LTV ROAS calculated."
      },
      keywords: [
        "CPA near me", "accountant near me", "tax preparation [city]",
        "small business accountant [city]", "bookkeeping services [city]",
        "CPA for small business [city]", "tax filing near me", "payroll services [city]",
        "eCommerce accountant [city]"
      ],
      caseStudy: {
        client: "Summit CPA Group",
        location: "Austin, TX",
        before: "$2K/mo (tax season only), 9 consultations/mo, 4 new clients/mo",
        after: "$2K/mo year-round, 34 consultations/mo, 14 new clients/mo, CPL $59",
        leads: "14 new clients/mo × $8,400 avg annual value = $117,600 new ARR/mo",
        period: "8 months (including full tax season cycle)",
        highlight: "eCommerce accountant specialty campaign generated $0 previously — drove 7 Shopify/Amazon clients in Q1"
      },
      localVsNational: {
        local: "Accounting PPC is city and state-license specific. We target the metro areas where your CPAs are licensed to practice and where your target client industries are concentrated.",
        national: "National accounting networks and multi-office CPA firms need practice-area campaigns per office with centralized specialty keyword libraries and tax season activation systems."
      },
      faqs: [
        { q: "When should accounting firms run PPC?", a: "Year-round for business accounting; surge January–April for tax services. The firms with the best annual ROAS run year-round — business accounting clients acquired in August and September become tax clients in March AND ongoing recurring revenue." },
        { q: "What accounting PPC keywords convert best?", a: "Specialty and service-specific terms outperform generic: 'CPA for small business [city],' 'bookkeeping services [city],' 'eCommerce accountant.' These convert at 3–5× 'accountant near me' because they signal exactly what the searcher needs." },
        { q: "Should accounting firms offer free consultations in their ads?", a: "Yes — this is your primary competitive offer in accounting PPC. A free 30-minute consultation with an online scheduling link reduces barrier to entry, pre-qualifies the firm's expertise fit, and generates 30–50% higher inquiry rates than no-offer pages." },
        { q: "How do I target business owners needing bookkeeping?", a: "Business bookkeeping campaign: 'bookkeeping services [city],' 'small business bookkeeper [city],' 'QuickBooks bookkeeper [city].' Landing page: monthly pricing ranges, services included, onboarding process. Business owners need pricing context plus process clarity before booking." },
        { q: "How do I compete with H&R Block and national chains in PPC?", a: "Position on CPA expertise and business specialization — national chains do individual returns at volume. An independent CPA firm targeting 'CPA for real estate investors' or 'small business tax planning' competes where chains can't follow: true accounting expertise and client relationships." },
        { q: "What's a good CPL for accounting PPC?", a: "Individual tax clients: $40–$80 CPL for a $400–$800 engagement (5–10× ROAS per engagement, 50× over multi-year relationship). Business accounting: $80–$150 CPL for a $9,600+ annual client (80× ROAS over 5 years). Accounting has some of the highest client lifetime value by CPL in all of local services." },
        { q: "Can I run PPC for CPA advisory and CFO services?", a: "Yes — and these are the highest-value client type. 'Fractional CFO [city],' 'outsourced CFO for small business,' 'business financial planning [city].' Advisory clients represent $24,000–$120,000+ in annual fees. Even at $300 CPL, the ROAS is extraordinary." },
        { q: "How long does accounting PPC take to generate new clients?", a: "Consultation bookings typically start within 7–14 days. First signed engagements arrive 14–30 days post-launch (tax season) or 30–60 days (business accounting — longer sales cycle involving firm evaluation)." }
      ]
    },

    // ─── 12. AUTO DEALERSHIPS ─────────────────────────────────────────
    {
      slug: "auto-dealerships",
      name: "Auto Dealerships",
      icon: "🚗",
      tagline: "Drive Buyers to the Lot. Auto Dealership PPC That Generates Test Drives and Offers.",
      heroSubtitle: "Car shoppers research online for 4–6 weeks before visiting a dealership. PPC puts your inventory in front of buyers actively comparing vehicles — driving qualified showroom visits, trade-in inquiries, and price quote requests.",
      overview: "Auto dealer PPC is one of the most competitive and most rewarding local advertising verticals. Buyers spend 4–6 weeks researching vehicles online before visiting a lot — and the dealerships capturing that research traffic through paid search are the ones getting the showroom visits and closings.\n\nThe opportunity is massive: Google Vehicle Ads allow dealers to display specific inventory with photos, pricing, and trim levels directly in search results. Combined with traditional search campaigns targeting make, model, and intent keywords, a comprehensive auto dealer PPC program captures every stage of the car buying journey — from 'what SUV should I buy' to 'Honda CR-V price [city]' to 'dealership near me with test drive today.\n\nRankston builds auto dealer PPC programs that integrate with dealer inventory management systems to keep vehicle ads current, run make/model campaigns for the vehicles in stock, and capture trade-in inquiry traffic — the highest-value pre-showroom touchpoint for dealer gross margin.",
      stats: [
        { val: "$28K", label: "avg new vehicle gross — one sale covers months of PPC" },
        { val: "Google", label: "Vehicle Ads: photos + price + trim in search results" },
        { val: "87%", label: "of car buyers research online before visiting any dealership" },
        { val: "6–20×", label: "ROAS on closed vehicle sales from qualified PPC leads" }
      ],
      painPoints: [
        { title: "No Google Vehicle Ads — Missing the Most Visual Inventory Format", desc: "Google Vehicle Ads show specific vehicles with photos, price, and trim directly in search results — generating far higher CTR than text ads for shopping-stage buyers. Dealerships without Vehicle Ads cede this placement to competitors who have them." },
        { title: "Generic Dealership Ads Without Make/Model Specificity", desc: "'Car dealership near me' competes with every dealer in the market. 'Honda CR-V [city]' or 'Toyota Camry [city] deals' attracts buyers who've already decided on the make/model — the highest-converting segment in auto PPC." },
        { title: "Not Capturing Trade-In Inquiry Traffic", desc: "'Trade in my car [city],' 'what is my car worth,' and 'car trade-in near me' attract buyers actively starting the vehicle replacement process. Trade-in inquiries are the highest-ROAS touchpoint in auto dealer PPC — converting to new vehicle sales at 40–60% rates." },
        { title: "No Service Department PPC Campaign", desc: "Service-intent keywords ('oil change near me,' 'tire rotation [brand] dealer near me') capture existing customers and competitive conquest from independent shops. Service revenue and service-to-sales conversion make this the highest-ROAS campaign for established dealers." },
        { title: "Static Inventory in Ads — Advertising Cars No Longer in Stock", desc: "Running make/model ads for vehicles you've sold and not removed from campaigns wastes every click on a searcher you can't satisfy. Dynamic inventory integration ensures ads only run for vehicles currently on the lot." },
        { title: "Not Targeting Competitive Conquests", desc: "Buyers researching a competitor make/model are still deciding. Appearing for 'Toyota RAV4 vs Honda CR-V' or 'Toyota dealer near me' when you're a Honda dealer captures competitive consideration traffic before they commit." }
      ],
      strategy: {
        title: "Our PPC Strategy for Auto Dealerships",
        intro: "Auto dealer PPC wins through Google Vehicle Ads integration, make/model precision targeting, trade-in inquiries, and service campaigns — covering the full automotive buyer and ownership lifecycle.",
        pillars: [
          { title: "Google Vehicle Ads & Inventory Integration", desc: "Vehicle ads show specific inventory with photos, price, and trim in search results", tactics: ["Google Merchant Center vehicle feed integration from dealer DMS", "Vehicle Ads for all new inventory: Make + Model + Year + Trim + Price", "Dynamic exclusion: ads automatically pause when vehicles sell", "Mobile-optimized vehicle detail pages for every ad click"] },
          { title: "Make/Model and Intent Campaign Architecture", desc: "Buyers at different stages need different campaign types", tactics: ["Make/model campaigns: '[Make] [Model] [city],' '[Make] dealer near me'", "Trade-in campaign: 'trade in my car,' 'car trade value,' 'sell my car [city]'", "Competitive conquest: competitor make searches with your make comparison messaging", "Financing campaign: 'bad credit car loans,' '0% APR [make] [city]'"] },
          { title: "Service Department & Loyalty Campaigns", desc: "Service campaigns capture lifetime customer value beyond the initial sale", tactics: ["Service keywords: 'oil change near me,' '[make] service [city],' 'tire rotation dealer'", "Customer match campaigns: past buyers promoted for service intervals", "Recall notice targeting: model-specific recall keywords for affected owners", "Service-to-sales pipeline: service visit → trade-in conversation tracking"] }
        ]
      },
      services: [
        "Auto Dealer PPC Account Setup", "Google Vehicle Ads Integration",
        "Make/Model Campaign Architecture", "Trade-In Inquiry Campaigns",
        "Competitive Conquest Campaigns", "Service Department Campaigns",
        "Financing & Lease Campaigns", "Inventory Feed Management",
        "Customer Match & Loyalty Campaigns", "Call & Chat Tracking",
        "Showroom Visit Attribution", "Monthly Vehicle Sales ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "No Google Vehicle Ads — text-only campaigns for inventory searches", impact: "Buyers searching 'Honda CR-V [city] price' in a Google Vehicle Ads-dominated results page see competitor inventory photos, trim levels, and pricing directly in results. A text-only dealership ad below these gets 1/5th the CTR — regardless of ad quality.", fix: "Google Merchant Center vehicle feed setup with DMS integration. Vehicle Ads running for every new vehicle in inventory. The CTR lift from visual inventory ads vs. text alone is 3–5× — and the conversion quality is higher because buyers saw the specific vehicle they clicked on." },
        { mistake: "No trade-in campaign despite trade-ins being the highest-ROAS touchpoint", impact: "A buyer searching 'what is my car worth' or 'trade in my [make] near me' is initiating the vehicle replacement process — they need a new car and need to understand their trade value first. No trade-in campaign means missing the most valuable pre-showroom interaction.", fix: "Trade-in campaign targeting 'trade in my car [city],' 'car trade value,' 'sell my car near me.' Landing page: instant trade valuation tool (CarGurus/KBB widget) + new inventory shown alongside valuation. Trade-in leads convert to new vehicle purchases at 40–60% — higher than any other PPC lead type." },
        { mistake: "Advertising vehicles no longer in stock", impact: "A buyer clicking an ad for a specific vehicle that was sold 2 weeks ago becomes an immediately disappointed prospect. Bounce rate is near-instant, ad spend wasted, and trust in the dealership eroded before first contact.", fix: "Dynamic inventory feed integration with the Dealer Management System. When vehicle sells, its Vehicle Ad pauses automatically within hours. No manual management required — feed-driven automation ensures ads only run for currently available inventory." },
        { mistake: "No service department campaign", impact: "Service search keywords ('oil change near me,' '[make] dealer service') are low-competition, low-CPC ($2–$6), and capture existing customers who could be converted back to the sales floor. Most dealers run zero service campaigns — leaving this profitable acquisition channel entirely uncaptured.", fix: "Service campaign: major service keywords for all makes you service, model-specific service searches, and recall-related keywords. Customer match campaigns targeting past buyers for service interval promotions. Each service visit is a trade-in conversation opportunity." }
      ],
      tools: ["Google Ads", "Google Merchant Center (Vehicle Ads)", "CallRail", "GA4", "CDK/Reynolds (DMS integration)", "Google Tag Manager", "Dealer.com/DealerSocket"],
      timeline: {
        m1: "Vehicle feed integration, Google Vehicle Ads launch, make/model campaigns, trade-in campaign, tracking.",
        m2: "First lead data by type. Competitive conquest campaigns added. Service campaign launched.",
        m3: "Smart bidding active. ROAS by campaign type established. Financing campaign added.",
        m6: "Full buyer lifecycle PPC. Vehicle Ads + search + trade-in + service all performing.",
        m12: "Dominant local auto PPC. Vehicle sales, service, and trade-in all attributed to PPC."
      },
      keywords: [
        "[make] dealer [city]", "[make] [model] [city]", "car dealership near me",
        "trade in my car [city]", "used cars [city]", "new [make] [city] deals",
        "[make] service near me", "car financing near me", "0% APR [make]"
      ],
      caseStudy: {
        client: "Lakewood Honda",
        location: "Columbus, OH",
        before: "$8K/mo text ads, no Vehicle Ads, 22 leads/mo",
        after: "$8K/mo, Vehicle Ads + trade-in + service, 91 leads/mo, CPL $88",
        leads: "18 vehicles sold/mo attributed to PPC — avg $3,200 gross/vehicle = $57,600/mo dealer gross",
        period: "5 months",
        highlight: "Trade-in campaign generated 24 trade-in valuations/mo — 11 converted to new vehicle sales"
      },
      localVsNational: {
        local: "Auto dealer PPC is zip-code radius around each rooftop. We geo-fence to your primary market area with bid adjustments matching the distance searchers realistically travel to purchase.",
        national: "Auto groups with multiple rooftops need location-level campaign management with centralized inventory feed infrastructure and make-specific campaign libraries shared across locations."
      },
      faqs: [
        { q: "What are Google Vehicle Ads for dealerships?", a: "Google Vehicle Ads are a search ad format showing your specific vehicle inventory (photo, make, model, year, trim, price) directly in Google search results. When a buyer searches 'Honda CR-V [city],' they see actual inventory from your lot with a link to the vehicle detail page. Available for new and used inventory." },
        { q: "How do I set up Google Vehicle Ads for my dealership?", a: "Vehicle Ads require a Google Merchant Center account with a vehicle inventory feed connected to your Dealer Management System (CDK, Reynolds, etc.). We handle the full technical setup — DMS connection, feed configuration, and Vehicle Ad campaign structure." },
        { q: "Should I run PPC for used vehicles?", a: "Yes — used vehicle searches have lower CPCs and high buyer intent. 'Used Honda Accord [city],' '[year] Toyota Camry for sale near me.' Vehicle Ads and standard search campaigns both work effectively for used inventory." },
        { q: "How do I get trade-in leads from Google Ads?", a: "Dedicated trade-in campaign targeting 'trade in my car,' 'what is my car worth,' 'car trade value near me.' Landing page with instant trade valuation tool (KBB/CarGurus widget) + new inventory shown. Trade-in leads convert to new vehicle purchases at 40–60%." },
        { q: "What budget does auto dealer PPC need?", a: "$5,000–$20,000/month for most single-rooftop dealers. CPCs of $2–$15 depending on make and keyword type. At avg gross of $2,500–$4,000/vehicle, 3–5 additional vehicles sold monthly from PPC generates 5–20× ROAS on ad spend." },
        { q: "How do I appear for competitor dealership searches?", a: "Competitive conquest campaigns target competitor make searches: bidding 'Toyota dealer [city]' when you're a Honda dealer, with ad copy highlighting Honda CR-V vs. RAV4 comparisons. Legal, effective, and captures buyers still in the make-selection phase." },
        { q: "Should I separate my service department PPC from my sales PPC?", a: "Yes — separate campaigns with separate budgets. Service keywords are lower CPC ($2–$6) and target existing customers. Sales campaigns target new buyers at $8–$20 CPC. Separate campaigns allow budget optimization per objective and accurate ROAS tracking per business line." },
        { q: "How do I know which PPC leads are buying vehicles?", a: "CRM integration tagging each lead with PPC keyword source. When a vehicle sells, the salesperson marks the lead source. We pull monthly reports matching sold vehicles to PPC attribution — giving true sold-vehicle ROAS by campaign and keyword." }
      ]
    }

    ,
    // ─── 13. HOME SERVICES ────────────────────────────────────────────
    {
      slug: "home-services",
      name: "Home Services",
      icon: "🏠",
      tagline: "Fill Your Calendar With Booked Jobs. Home Services PPC That Delivers Calls, Not Clicks.",
      heroSubtitle: "Homeowners searching for HVAC repair, cleaning, landscaping, or pest control are ready to book. Home services PPC captures these high-intent searches and converts them into booked jobs — not website visits.",
      overview: "Home services PPC is one of the highest-ROI advertising channels available to service businesses. When a homeowner's AC fails in July or their plumbing backs up on a Sunday, they search Google immediately — and they call the first trusted result they find.\n\nFor home service companies, Google Ads delivers something traditional marketing cannot: customers at the exact moment of need. Emergency repairs, seasonal services, and recurring maintenance contracts — each search intent can be targeted, captured, and converted through properly structured PPC campaigns.\n\nRankston builds home services PPC campaigns engineered for call volume — using call-only ads, local service extensions, and lead tracking that attributes every booked job to its originating keyword.",
      stats: [
        { val: "68%", label: "of home service bookings originate from search" },
        { val: "$18–$45", label: "avg cost per booked home service call" },
        { val: "4.2×", label: "avg ROAS for optimized home services PPC" },
        { val: "Day 1", label: "inbound calls begin from launch" }
      ],
      painPoints: [
        { title: "Wasting Budget on Non-Booking Traffic", desc: "Home services PPC campaigns often fund clicks from people 'just looking.' Proper intent targeting ensures budget goes to searchers ready to schedule — not browsers." },
        { title: "Not Running Call-Only Ads for Emergency Services", desc: "Emergency HVAC, plumbing, and electrical searchers want to call — not visit a website. Missing call-only ads for these keywords loses the highest-conversion traffic." },
        { title: "No Seasonal Campaign Scheduling", desc: "HVAC peaks in summer and winter. Landscaping surges in spring. Pest control spikes seasonally. Flat budgets miss peak demand windows and over-spend during slow periods." },
        { title: "No Negative Keyword Filtering", desc: "Home services attract DIY searches, job applicants, and research traffic. Without negative keywords, budget hemorrhages on irrelevant clicks." },
        { title: "No Call Tracking", desc: "Without call tracking, you can't distinguish which campaigns drive booked jobs vs. unqualified calls. Budget optimization requires knowing what converts." },
        { title: "Bidding on Wrong Service Types", desc: "A plumbing company bidding on 'HVAC repair' wastes money on irrelevant clicks. Service-specific ad groups prevent cross-contamination." }
      ],
      strategy: {
        title: "Our PPC Strategy for Home Services Companies",
        intro: "Home services PPC success is about capturing demand at peak intent — emergency searches, seasonal peaks, and recurring service searches — with call-optimized campaigns that turn clicks into booked jobs.",
        pillars: [
          { title: "Service-Segmented Campaign Structure", desc: "Each service type needs its own campaign to maximize relevance and control budget per service", tactics: ["Separate campaigns: emergency, maintenance, seasonal, recurring", "Call-only ads for emergency service keywords", "Location-targeted ads by service area zip codes", "Day-parting: increased bids during peak booking hours (7am–7pm)"] },
          { title: "Demand Capture by Intent", desc: "Different home service searches require different ad messaging and landing pages", tactics: ["Emergency: urgency messaging, immediate call CTA, 24/7 availability", "Scheduled: pricing transparency, booking ease, trust signals", "Seasonal: limited-time offer, seasonal relevance, schedule-now CTA", "Recurring: subscription framing, cost savings, reliability messaging"] },
          { title: "Call & Booking Attribution", desc: "Every campaign must be tied to booked jobs — not just calls", tactics: ["Call tracking numbers per campaign and service type", "Call recording for quality scoring and dispatch integration", "CRM integration: job ticket created from PPC call attribution", "Monthly ROAS reporting: ad spend vs. invoiced job value"] }
        ]
      },
      services: [
        "Home Services PPC Setup", "Emergency Service Campaign",
        "Seasonal Campaign Calendar", "Call-Only Ad Creation",
        "Service Area Geo-Targeting", "Negative Keyword Management",
        "Call Tracking Integration", "Recurring Service Campaign",
        "LSA (Local Services Ads) Setup", "Job Attribution Reporting",
        "Competitor Conquest Campaign", "Monthly ROAS Analysis"
      ],
      commonMistakes: [
        { mistake: "One campaign for all services", impact: "Mixing HVAC, plumbing, and electrical in one campaign prevents service-specific budget control, ad relevance, and performance analysis.", fix: "Separate campaigns per service type with dedicated ad groups, ad copy, landing pages, and budgets — allowing optimization by service profitability and seasonal demand." },
        { mistake: "No call-only ads for emergency keywords", impact: "'Emergency plumber near me' searchers want a number, not a website. Missing call-only ads on these keywords loses the highest-conversion, highest-value traffic in home services.", fix: "Call-only campaigns for all emergency service keywords. 24/7 call availability signaled in ad copy. Click-to-call as primary CTA across mobile ads." },
        { mistake: "Flat budget across all months", impact: "A pest control company spending equally in December and May wastes thousands during low demand and under-captures peak season volume.", fix: "Monthly budget calendar aligned to your service category's demand peaks. Seasonal budget increases pre-scheduled 2 weeks before peak demand windows." },
        { mistake: "No negative keyword list", impact: "Home services attract 'DIY,' 'how to,' 'free,' 'job,' and 'training' searches. Without negatives, 20-30% of budget funds clicks that will never convert.", fix: "Comprehensive negative keyword list: DIY terms, job listings, equipment purchases, research modifiers. Updated monthly as search term reports reveal new irrelevant traffic." }
      ],
      tools: ["Google Ads", "CallRail", "Google Analytics 4", "Local Services Ads", "Google Tag Manager", "Looker Studio", "ServiceTitan / Jobber (CRM)"],
      timeline: {
        m1: "Campaign structure, ad groups, call tracking, landing pages, negative keywords. Calls begin.",
        m2: "Bid optimization, Search Term Report cleanup, Quality Score improvement.",
        m3: "First full ROAS report. Seasonal adjustments. Budget shifted to top-performing services.",
        m6: "Efficient cost-per-booked-job. Seasonal peaks fully capitalized.",
        m12: "Home services PPC running as primary demand engine. Full job attribution pipeline."
      },
      keywords: [
        "HVAC repair near me", "plumber near me", "emergency electrician near me",
        "house cleaning service [city]", "pest control near me", "landscaping company near me",
        "handyman near me", "roof repair [city]", "water heater repair near me"
      ],
      caseStudy: {
        client: "All-Pro Home Services",
        location: "Charlotte, NC",
        before: "$4,200/mo spend, 31 calls, 12 booked jobs, $350 cost-per-job",
        after: "$4,200/mo spend, 74 calls, 47 booked jobs, $89 cost-per-job",
        leads: "$52,000 in monthly invoiced jobs from PPC",
        period: "5 months optimization",
        highlight: "Emergency campaign separation and call-only ads tripled booking rate without increasing spend"
      },
      localVsNational: {
        local: "Home services PPC is hyper-local — we target every zip code in your service territory with geo-adjusted bids and local messaging.",
        national: "Home service franchises need multi-territory PPC with per-location budget controls and consistent brand with local market customization."
      },
      faqs: [
        { q: "How much should a home services company spend on PPC?", a: "Starting budget of $1,500–$3,000/month for a single service category in a mid-size market. Scale based on cost-per-booked-job target and service profitability. Emergency services deliver the highest ROAS and warrant the highest bids." },
        { q: "Should I use Google Local Services Ads or Google Ads for home services?", a: "Both — they serve different placements. LSA appears above standard ads and charges per lead. Google Ads gives full keyword and bid control. Running both maximizes search real estate coverage." },
        { q: "How do I track which PPC calls turn into booked jobs?", a: "Call tracking numbers per campaign + CRM integration. CallRail assigns unique numbers per ad group. When a call converts to a job ticket, source is tagged in your dispatch software for ROAS calculation." },
        { q: "How long until home services PPC generates consistent leads?", a: "Call volume begins day one. Optimized, profitable campaigns typically develop within 60-90 days as bid strategy matures, negative keywords filter irrelevant traffic, and Quality Scores improve ad costs." }
      ]
    },

    // ─── 14. STARTUPS ────────────────────────────────────────────────────
    {
      slug: "startups",
      name: "Startups & New Businesses",
      icon: "🚀",
      tagline: "Generate Customers From Day One. Startup PPC That Builds Revenue While SEO Catches Up.",
      heroSubtitle: "Startups can't wait 6-12 months for organic SEO to mature. PPC delivers qualified customers immediately — making it the most efficient customer acquisition channel for new businesses that need revenue now.",
      overview: "For startups, speed to revenue is existential. While SEO builds authority over months, PPC delivers qualified traffic on day one — making it the ideal customer acquisition engine for new businesses competing against established players.\n\nStartup PPC requires a different approach than established-business PPC. Budget efficiency, rapid testing, and customer acquisition cost (CAC) discipline are critical when runway is finite. Every campaign must be built to generate maximum learning and revenue from minimum spend.\n\nRankston builds startup PPC campaigns designed for capital efficiency — structure that scales as revenue grows, targeting that maximizes early conversion data, and reporting that tells investors exactly what digital acquisition costs.",
      stats: [
        { val: "Day 1", label: "qualified traffic from PPC campaign launch" },
        { val: "2–4×", label: "faster customer acquisition vs. waiting for organic SEO" },
        { val: "$0", label: "paid until someone clicks — unlike traditional advertising" },
        { val: "100%", label: "measurable CAC per channel from launch" }
      ],
      painPoints: [
        { title: "No Revenue While Waiting for SEO", desc: "SEO takes 6-12 months minimum. Startups that rely on organic growth alone starve in the interim. PPC delivers customers while organic authority builds." },
        { title: "Burning Through Budget on Wrong Keywords", desc: "Startup founders often can't distinguish high-intent from research keywords. Bidding on broad terms drains limited capital on non-converting traffic." },
        { title: "No CAC Tracking for Investor Reporting", desc: "Investors ask: 'What is your cost to acquire a customer?' Startups without proper PPC attribution cannot answer this critical question." },
        { title: "Competing Against Established Brands with Higher Budgets", desc: "Direct head-to-head keyword bidding against established competitors burns startup budgets. Niche keyword strategy outperforms competitor budgets through specificity." },
        { title: "No A/B Testing on Core Messaging", desc: "Startups rarely know which value proposition converts best. PPC without structured A/B testing misses the fastest, cheapest way to find winning messaging." },
        { title: "Scaling Budget Without First Proving Efficiency", desc: "Many startups scale ad spend before proving unit economics. Budget should scale only after hitting CAC targets at small spend levels first." }
      ],
      strategy: {
        title: "Our PPC Strategy for Startups & New Businesses",
        intro: "Startup PPC must be capital-efficient from day one. Our approach prioritizes proving unit economics at minimum spend, then scaling into proven campaigns — not burning budget on volume before efficiency is established.",
        pillars: [
          { title: "Lean Campaign Launch Structure", desc: "Maximum learning from minimum spend in the first 60 days", tactics: ["3-5 tightly themed ad groups vs. broad coverage", "Exact and phrase match only — no broad match in first 90 days", "Conversion tracking fully configured before first dollar spent", "Weekly search term review: expand winners, kill losers fast"] },
          { title: "CAC-Optimized Bidding", desc: "Every campaign decision tied to customer acquisition cost", tactics: ["Target CPA bidding after 30 conversion data points", "CAC by campaign tracked in real-time dashboard", "Budget scaling rules: only increase when CAC ≤ target", "Separate retargeting budget: highest-ROAS spend for startups"] },
          { title: "Message Testing at Speed", desc: "PPC is the fastest way to discover which startup messaging converts", tactics: ["2-3 ad variations per ad group: different value propositions", "Landing page A/B test: feature-focused vs. outcome-focused", "Quarterly messaging refresh based on conversion data", "Winner messaging fed back to sales, website, and investor decks"] }
        ]
      },
      services: [
        "Startup PPC Launch Setup", "CAC Tracking Configuration",
        "Conversion-First Campaign Build", "Lean Ad Group Architecture",
        "A/B Value Proposition Testing", "Negative Keyword Foundation",
        "Landing Page Conversion Audit", "Retargeting Campaign Setup",
        "Investor-Ready CAC Reporting", "Weekly Optimization Sprints",
        "Budget Efficiency Analysis", "Scale-When-Ready Protocol"
      ],
      commonMistakes: [
        { mistake: "Launching PPC without conversion tracking configured", impact: "Spending $3,000 without conversion data is pure waste. No data means no optimization. Startup budgets cannot afford untracked spend.", fix: "Full conversion tracking configured and verified before first campaign goes live: form fills, calls, sign-ups, purchases — every conversion action tagged and attributed to originating keyword." },
        { mistake: "Using broad match keywords with a limited budget", impact: "Broad match on a $2,000/month startup budget funds hundreds of irrelevant queries — burning capital before finding what actually converts.", fix: "Exact and phrase match only for first 90 days. Expand to modified broad only after conversion data identifies safe expansion terms." },
        { mistake: "Scaling budget before proving unit economics", impact: "A startup scaling from $2K to $8K/mo before hitting CAC targets amplifies losses, not growth. Scale kills startups when efficiency isn't first established.", fix: "Budget scaling protocol: CAC must hit target for 2 consecutive months before budget increase. Scale 20% at a time and monitor for 2 weeks before next increase." },
        { mistake: "Not running retargeting alongside search", impact: "Website visitors who don't convert on first visit are already warm leads. Startups that don't retarget abandon the highest-ROAS audience available.", fix: "Retargeting campaigns running within first 30 days: display and search retargeting for all site visitors and specific high-intent page visitors." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Hotjar", "Unbounce / Webflow", "Looker Studio", "HubSpot / Notion (CAC tracking)"],
      timeline: {
        m1: "Launch: conversion tracking, lean campaign build, first customer acquisitions.",
        m2: "CAC established. Winners identified. Budget shifted to converting ad groups.",
        m3: "CAC at or near target. Scale protocol initiated.",
        m6: "Scaling into proven campaigns. Multiple converting keyword clusters.",
        m12: "PPC as primary customer acquisition engine. CAC optimized. Investor metrics clean."
      },
      keywords: [
        "[product/service] near me", "best [category] [city]", "[service] for [target audience]",
        "[solution] software", "[niche] service [city]", "[competitor] alternative",
        "[problem] solution", "[outcome] service"
      ],
      caseStudy: {
        client: "Stackly (B2B SaaS Startup)",
        location: "San Francisco, CA",
        before: "No PPC, $0 paid CAC data, 2 customers/mo from word of mouth",
        after: "Month 3: $82 CAC, 34 trial sign-ups/mo, 11 paid conversions",
        leads: "PPC provided proof-of-CAC metrics used in Series A pitch deck",
        period: "3 months from zero",
        highlight: "Message A/B test revealed 'reduce onboarding time' converted 3× better than 'all-in-one platform' — fed directly into homepage and pitch deck"
      },
      localVsNational: {
        local: "Local startup PPC focuses on geographic market validation — proving unit economics in one city before expanding budget to additional markets.",
        national: "Startups targeting national audiences need keyword-focused campaigns by customer segment — not geo — with rapid CAC testing across audience cohorts."
      },
      faqs: [
        { q: "How much should a startup spend on PPC?", a: "Minimum $1,500/month to generate statistically meaningful conversion data. Budget level depends on your target CAC and average conversion value. Start as a percentage of your monthly revenue target — typically 15-25% of first-month revenue goal." },
        { q: "Should a startup use PPC or SEO first?", a: "PPC first — to generate immediate customers and prove CAC while SEO builds. A 6-month head start on revenue beats waiting for organic rankings. Run both simultaneously once PPC is proving unit economics." },
        { q: "What conversion events should a startup track in PPC?", a: "Every meaningful action: form fills, free trial signups, demo requests, phone calls, purchases. Micro-conversions (email captures, content downloads) as secondary. Full-funnel tracking gives you data to optimize every stage." },
        { q: "How do I compete against established companies with bigger PPC budgets?", a: "Niche keyword strategy beats budget competition. Target long-tail, high-intent, lower-competition keywords where $50–$100/day generates meaningful volume. Established brands often neglect niche terms you can own cheaply." }
      ]
    },

    // ─── 15. CONSTRUCTION ────────────────────────────────────────────────
    {
      slug: "construction",
      name: "Construction Companies",
      icon: "🏗️",
      tagline: "Win High-Value Contracts From Google. Construction PPC That Fills Your Project Pipeline.",
      heroSubtitle: "Property owners, developers, and businesses searching for construction companies use Google to find their contractor. Targeted PPC puts your company in front of these high-budget searches — generating project inquiries worth tens of thousands.",
      overview: "Construction PPC operates in a high-value, high-stakes category where a single won contract can deliver $50,000 to millions in revenue. Yet most construction companies have underdeveloped PPC strategies — broad keywords, no bid segmentation by project type, and landing pages that don't convert project-scale inquiries.\n\nFor construction companies, Google Ads targeting must reflect the realities of how construction clients search: they use specific terms (commercial construction, building contractor, renovation contractor), they research extensively before calling, and they are highly sensitive to trust signals during their search.\n\nRankston builds construction PPC campaigns that target the specific project types, geographies, and buyer personas your company serves — generating qualified project inquiries, not general contractor clicks.",
      stats: [
        { val: "$45K+", label: "avg construction project value from a PPC lead" },
        { val: "89%", label: "of project owners research contractors online first" },
        { val: "5–15×", label: "ROAS for construction PPC on won projects" },
        { val: "3 months", label: "to steady project inquiry flow from PPC" }
      ],
      painPoints: [
        { title: "No Segmentation Between Commercial and Residential", desc: "Commercial developers and residential homeowners search differently, have different budgets, and need different messaging. One campaign serving both audiences serves neither well." },
        { title: "Project Inquiries Without Project Budgets", desc: "Attracting low-budget residential inquiries when the business serves commercial clients wastes bid spend and sales team time. Project-type targeting filters by intent." },
        { title: "No Visual Trust Signals at Click", desc: "Construction clients clicking an ad want immediate portfolio proof. Landing pages without project photos and testimonials lose estimate requests to competitors who show their work." },
        { title: "Bidding on DIY and Supply Keywords", desc: "Construction attracts massive search volume from DIY researchers and material buyers. Without heavy negative keyword management, construction PPC budgets hemorrhage on irrelevant clicks." },
        { title: "Not Targeting Developers and Property Managers", desc: "Commercial construction clients are often professional buyers — developers, property managers, and facilities managers. These B2B buyers require different ad copy and landing page messaging." },
        { title: "No Estimate Request Landing Page", desc: "Construction inquiry conversion requires a dedicated estimate request process — not just a contact form. Missing this step loses project-scale inquiries already made." }
      ],
      strategy: {
        title: "Our PPC Strategy for Construction Companies",
        intro: "Construction PPC must reflect the scale and complexity of your client's buying decision. Our campaigns target by project type, client type, and geography — ensuring every inquiry has the budget and intent to become a real project.",
        pillars: [
          { title: "Project-Type Campaign Segmentation", desc: "Commercial, residential, and specialty construction each require separate campaigns", tactics: ["Commercial campaign: developer, business, property manager targeting", "Residential campaign: homeowner renovation, addition, new build searches", "Specialty campaigns: concrete, steel, roofing, glass per service mix", "Service area geo-targeting by county and city"] },
          { title: "Project-Scale Traffic Filtering", desc: "Negative keywords and budget segmentation ensure only project-scale inquiries convert", tactics: ["Negative: DIY, materials, supplies, jobs, training, how-to", "Phrase and exact match for commercial-specific keywords", "Budget allocation: 70% commercial, 30% residential if commercial focus", "Ad scheduling: Mon-Fri 7am-6pm for B2B commercial audience"] },
          { title: "Estimate Request Conversion Path", desc: "Construction inquiries require a trust-first landing page with a clear estimate CTA", tactics: ["Project portfolio section: 8+ photos on landing page", "Credential badges: licensed, bonded, insured prominently displayed", "Estimate request form: project type, scope, timeline, budget range", "Response time promise: estimate within 48 hours"] }
        ]
      },
      services: [
        "Construction PPC Full Setup", "Commercial vs. Residential Segmentation",
        "Project-Type Campaign Build", "Estimate Request Landing Page",
        "Portfolio Integration Strategy", "License & Bond Ad Signals",
        "Negative Keyword Management", "Developer Audience Targeting",
        "Geographic Bid Strategy", "Competitor Conquest Campaign",
        "CRM Lead Integration", "Monthly Project ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "One campaign for all construction work", impact: "Commercial and residential clients search with different terms, have different budgets, and require different trust signals. One campaign delivers mediocre relevance to both audiences.", fix: "Separate commercial and residential campaigns with dedicated keywords, ad copy, landing pages, and budget — maximizing relevance for each client type." },
        { mistake: "No negative keyword management for supply/DIY searches", impact: "Construction keywords attract enormous DIY and material-buyer search volume. Without negatives, 30-40% of budget funds people who will never hire a contractor.", fix: "Comprehensive construction negative keyword list: lumber, concrete, materials, how to, DIY, permit, cost calculator, salary, job listing. Updated weekly from search term reports." },
        { mistake: "Generic landing page without portfolio", impact: "A construction client clicking an ad and landing on a contact form with no portfolio has no evidence of capability. They bounce to a competitor who shows their work.", fix: "Dedicated estimation landing pages with project gallery, client testimonials, credential display, and a structured estimate request form — converting inquiries into scheduled site visits." },
        { mistake: "Not targeting with commercial-specific keywords", impact: "Commercial construction clients use specific search terms: 'commercial building contractor,' 'tilt-up construction [city],' 'tenant improvement contractor.' Missing these terms means missing commercial budget clients entirely.", fix: "Dedicated commercial keyword list researched from industry-specific terms. Commercial construction ad groups separated and bid aggressively for high-value commercial project searches." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "CallRail", "Google Tag Manager", "Unbounce / WordPress", "Looker Studio", "Procore / Buildertrend (CRM)"],
      timeline: {
        m1: "Structure build, segmentation, landing pages, negative keywords. First estimate requests.",
        m2: "Bid optimization by project type. Search terms cleaned. Quality Scores improving.",
        m3: "Consistent estimate request flow. Commercial vs. residential ROAS differentiated.",
        m6: "Project pipeline from PPC established. Budget shifted to highest-value project types.",
        m12: "Construction PPC as primary project acquisition channel. Consistent high-value inquiry flow."
      },
      keywords: [
        "construction company near me", "commercial contractor [city]", "building contractor near me",
        "renovation contractor [city]", "commercial construction company near me",
        "licensed contractor near me", "new home builder [city]", "general contractor near me"
      ],
      caseStudy: {
        client: "Summit Commercial Builders",
        location: "Denver, CO",
        before: "$5,000/mo spend, 8 form fills, 1-2 viable project inquiries/mo",
        after: "$5,000/mo spend, 31 estimate requests, 9 viable commercial project inquiries/mo",
        leads: "$2.1M in new commercial contracts from PPC pipeline",
        period: "7 months",
        highlight: "Commercial/residential segmentation and B2B keyword targeting drove 4× increase in developer inquiries within 60 days"
      },
      localVsNational: {
        local: "Construction PPC is project-territory specific — geo-targeted by every county and city in your operating radius, with bid adjustments for highest-value project markets.",
        national: "Regional construction companies with multiple offices need per-market campaign structures with centralized brand assets and locally-adapted messaging per geography."
      },
      faqs: [
        { q: "How much should a construction company spend on PPC?", a: "Starting budget of $3,000–$6,000/month. Commercial construction keywords ($15–$40 CPC) are expensive but deliver inquiries worth $50K+ per project. Target CAC relative to average project margin, not project value." },
        { q: "How do I get commercial construction clients from Google Ads?", a: "Dedicated commercial keyword campaign with developer and property manager-focused ad copy. Commercial-specific landing page with commercial project portfolio. Phrase and exact match to filter residential traffic." },
        { q: "How do I filter out DIY and low-budget searchers?", a: "Comprehensive negative keyword list removing DIY terms, material/supply searches, job listings, how-to modifiers, and cost research queries. Updated weekly from search term report review." },
        { q: "What landing page converts best for construction PPC?", a: "Project portfolio gallery, license and bond credentials, client testimonials with project type references, and a structured estimate request form asking for project type, scope, timeline, and budget range." }
      ]
    },

    // ─── 16. TECHNOLOGY ───────────────────────────────────────────────────
    {
      slug: "technology",
      name: "Technology Companies",
      icon: "💻",
      tagline: "Generate B2B Tech Leads From Google. Technology PPC That Delivers Qualified Business Inquiries.",
      heroSubtitle: "Business owners and IT decision-makers searching for tech solutions, managed IT, and software development use Google to find their next vendor. Targeted PPC puts your technology company in front of these high-value B2B searches.",
      overview: "Technology companies — from managed IT providers and cybersecurity firms to software developers and SaaS platforms — operate in one of the highest-value B2B PPC categories. Decision-makers searching for IT services, software development, and tech consulting have real project budgets and real urgency.\n\nTechnology PPC requires a B2B-specific strategy: longer sales cycles, consultative ad messaging, and landing pages that establish technical credibility before a prospect will submit an inquiry. Generic search campaigns with consumer-oriented copy fail in this environment.\n\nRankston builds technology company PPC campaigns engineered for B2B inquiry generation — with industry-specific ad copy, technical credibility signals, and consultation booking paths that convert decision-maker searches into qualified sales conversations.",
      stats: [
        { val: "$5K+", label: "avg monthly value of a managed IT services contract" },
        { val: "3-6 mo", label: "B2B tech sales cycle — ad strategy must match" },
        { val: "67%", label: "of SMBs prefer a local tech partner they can meet in person" },
        { val: "8–14×", label: "ROAS achievable on won managed IT contracts" }
      ],
      painPoints: [
        { title: "Consumer Ad Copy for B2B Audience", desc: "Tech decision-makers are sophisticated buyers. Generic ad copy that doesn't speak to business outcomes, SLAs, or technical credentials fails to earn the click from a CTO or IT manager." },
        { title: "No Segmentation by Tech Service Type", desc: "IT support, cybersecurity, managed services, and software development are entirely different buying decisions. One campaign mixing all services dilutes relevance for every service type." },
        { title: "Landing Pages Without Technical Credibility", desc: "A business evaluating a $60K/year managed IT contract needs technical proof before submitting an inquiry. Landing pages without credentials, certifications, and case studies lose these decision-makers." },
        { title: "Not Targeting Business Owner and IT Job Titles", desc: "Google Ads audience layering allows B2B intent targeting by job title and industry. Tech PPC without this layering wastes spend on consumer searches for the same keywords." },
        { title: "No Consultation Booking Conversion Path", desc: "Tech services are sold through conversations, not form fills. Campaigns without a direct consultation scheduling CTA lose decision-makers who were ready to engage." },
        { title: "Bidding on Consumer Tech Keywords", desc: "Tech PPC attracts consumer searches: personal device support, consumer software, gaming. Without B2B-specific keyword architecture and negatives, budget funds irrelevant consumer traffic." }
      ],
      strategy: {
        title: "Our PPC Strategy for Technology Companies",
        intro: "B2B technology PPC requires technical credibility at every touchpoint — from keyword targeting to ad copy to landing page. We build campaigns where every element signals expertise, reliability, and business-outcome focus.",
        pillars: [
          { title: "B2B Service-Type Campaign Structure", desc: "Each technology service requires its own campaign with B2B-specific targeting", tactics: ["Managed IT campaign: SMB owner and IT manager keyword targeting", "Cybersecurity campaign: risk/compliance focused ad copy", "Software development campaign: project-based keyword targeting", "Audience layering: business decision-maker job titles and industries"] },
          { title: "Technical Credibility Ad Strategy", desc: "B2B tech buyers need credential signals before they click", tactics: ["Certifications in ad copy: Microsoft Partner, AWS, CompTIA, ISO", "SLA and uptime guarantees in headlines", "Industry specialization signals: healthcare IT, legal tech, fintech", "Case study stats in ad extensions: '99.9% uptime for 200+ clients'"] },
          { title: "Consultation Conversion Optimization", desc: "Tech sales happen in consultations — not form submissions", tactics: ["Free IT assessment or security audit as primary offer", "Calendly integration: direct booking from landing page", "Response time guarantee: 'Guaranteed response within 2 business hours'", "Retargeting: follow decision-makers across 30 days post-visit"] }
        ]
      },
      services: [
        "Technology PPC Full Setup", "B2B Campaign Architecture",
        "Managed IT Campaign", "Cybersecurity PPC Campaign",
        "Software Development Campaign", "Technical Credential Ad Copy",
        "Consultation Booking Integration", "B2B Audience Layering",
        "Consumer Negative Keyword List", "Competitor Conquest Campaign",
        "Retargeting for Long Sales Cycles", "Monthly B2B ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "Consumer ad copy for B2B technology services", impact: "A CFO evaluating managed IT proposals skips ads that don't immediately signal enterprise capability. Generic copy about 'tech support' fails to earn the click from sophisticated buyers.", fix: "B2B-specific ad copy: outcome language ('Reduce IT downtime by 73%'), credential signals (Microsoft Partner, ISO certified), and industry references ('Serving healthcare and legal firms since 2014')." },
        { mistake: "No audience layering on tech keywords", impact: "Generic tech keywords attract consumers buying personal devices and students researching tech careers alongside business buyers. Without audience layering, half the budget funds irrelevant traffic.", fix: "Google Ads audience layering: B2B in-market audiences (Business Software & Services), job title targeting for owner/CTO/IT Manager, and industry exclusions for consumer segments." },
        { mistake: "Single landing page for all tech services", impact: "A business evaluating cybersecurity and a business evaluating custom software development have completely different needs, budgets, and conversion signals. One page serves neither well.", fix: "Dedicated landing pages per service type: cybersecurity page (risk/compliance focus), managed IT page (SLA and uptime focus), software development page (project portfolio focus)." },
        { mistake: "No consultation booking path", impact: "A B2B tech buyer ready to engage who hits a generic contact form loses motivation. Decision-makers with busy calendars won't return for follow-up.", fix: "Direct consultation scheduling link on every landing page: 'Book a 30-minute IT assessment.' Calendly integration allowing immediate calendar booking without phone tag." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "Calendly", "Google Tag Manager", "HubSpot CRM", "Looker Studio", "Semrush (keyword research)", "LinkedIn Ads (retargeting)"],
      timeline: {
        m1: "B2B structure, service campaigns, audience layering, landing pages, consultation booking.",
        m2: "Bid optimization, consumer keyword negation, Quality Score improvement.",
        m3: "Consistent consultation request flow. B2B vs. consumer traffic clearly separated.",
        m6: "Managed IT pipeline generating consistent revenue. Retargeting ROAS optimized.",
        m12: "Technology PPC as primary B2B customer acquisition engine."
      },
      keywords: [
        "managed IT services [city]", "IT support near me", "cybersecurity company near me",
        "software development company [city]", "IT consulting [city]", "network support [city]",
        "cloud migration services [city]", "tech support for business near me"
      ],
      caseStudy: {
        client: "NexGen Managed IT",
        location: "Chicago, IL",
        before: "$6,000/mo spend, 11 leads, 2 viable managed IT inquiries/mo",
        after: "$6,000/mo spend, 38 consultation bookings, 14 qualified IT inquiry calls/mo",
        leads: "$41K/mo in new managed IT contracts from PPC pipeline",
        period: "6 months",
        highlight: "B2B audience layering and consultation booking integration tripled qualified inquiry rate within 45 days"
      },
      localVsNational: {
        local: "Technology PPC is relationship-local for managed IT and consulting. We target every business district and business cluster in your territory with geo-adjusted bids.",
        national: "SaaS and software development companies targeting national audiences need keyword-by-customer-segment campaigns without geographic constraints."
      },
      faqs: [
        { q: "How much should a technology company spend on PPC?", a: "Managed IT: $3,000–$8,000/month — keywords are competitive ($20–$50 CPC) but client LTV is $60K+/year. Software development: $2,000–$5,000/month. Budget relative to average contract value and close rate." },
        { q: "Can Google Ads target B2B technology buyers specifically?", a: "Yes — through audience layering (B2B in-market audiences), job title targeting, and industry-specific keyword selection. We layer these signals to concentrate budget on business decision-makers." },
        { q: "What makes a technology PPC landing page convert?", a: "Technical credentials (certifications, partnerships), SLA guarantees, client case studies with measurable outcomes, and a direct consultation booking path. Credibility first, CTA second." },
        { q: "Should tech companies use LinkedIn Ads alongside Google Ads?", a: "Yes — especially for managed IT and enterprise software. LinkedIn allows direct job-title and company-size targeting. We run Google Ads for intent capture and LinkedIn retargeting to re-engage B2B visitors." }
      ]
    },

    // ─── 17. EDUCATION ────────────────────────────────────────────────────
    {
      slug: "education",
      name: "Education & Training",
      icon: "🎓",
      tagline: "Fill Every Program Seat. Education PPC That Turns Searches Into Enrollment Conversations.",
      heroSubtitle: "Students, parents, and professionals searching for education programs use Google to make enrollment decisions. Education PPC captures these high-intent searches and converts them into enrollment inquiries — filling your programs with qualified applicants.",
      overview: "Education PPC is a high-competition, high-value channel where the lifetime value of an enrolled student can range from $2,000 for tutoring to $50,000+ for vocational programs. Parents and students at peak enrollment intent search Google — and they convert quickly when presented with the right program signals.\n\nFor education providers — tutoring centers, vocational schools, professional certification programs, and private institutions — PPC delivers enrollment inquiries at exactly the right moment: when a parent is searching for math tutoring after bad grades, or when a professional is researching career change programs during evening browsing.\n\nRankston builds education PPC campaigns that target enrollment-intent searches, build program credibility at click, and convert prospect clicks into enrollment consultation bookings.",
      stats: [
        { val: "$2K–$50K", label: "student LTV range across education program types" },
        { val: "78%", label: "of parents research education programs online before enrolling" },
        { val: "3–5×", label: "ROAS achievable for well-structured education PPC" },
        { val: "60 days", label: "to steady enrollment inquiry flow from optimized PPC" }
      ],
      painPoints: [
        { title: "No Program-Specific Campaign Structure", desc: "A tutoring center offering math, science, test prep, and enrichment needs separate campaigns per program. One generic campaign dilutes relevance and bidding efficiency across all programs." },
        { title: "Missing Seasonal Enrollment Windows", desc: "Education enrollment has predictable peaks: back-to-school (August), new year resolution (January), summer programs (April-May). Flat budgets miss these high-conversion windows." },
        { title: "No Outcome Signals in Ad Copy", desc: "Parents choosing an education program want results. Ads that lead with program features instead of outcomes ('Improve SAT scores 150+ points') lose to competitors who lead with results." },
        { title: "Landing Pages Without Social Proof", desc: "Education is a high-stakes purchase. Landing pages without parent reviews, success stories, and accreditation signals fail to convert the research-intensive education buyer." },
        { title: "No Enrollment Consultation CTA", desc: "Education inquiry conversion requires a scheduled consultation or campus tour — not a generic form fill. Missing this specific CTA loses enrollment-ready inquiries." },
        { title: "Bidding on Research Keywords Without Enrollment Intent", desc: "Education attracts heavy research traffic from students doing homework, not researching programs. Without intent filtering, education budgets fund non-enrollment traffic." }
      ],
      strategy: {
        title: "Our PPC Strategy for Education & Training Providers",
        intro: "Education PPC success requires matching ad messaging to enrollment intent at every program type, backed by outcome proof that converts research into enrollment conversations.",
        pillars: [
          { title: "Program-Type Campaign Architecture", desc: "Each educational program requires dedicated campaigns for relevance and budget control", tactics: ["Program campaigns: one per major offering (math tutoring, SAT prep, vocational)", "Enrollment-season budget increases: August, January, May pre-scheduled", "Parent vs. adult learner audience segmentation", "Geographic targeting: radius around campus + commutable neighborhoods"] },
          { title: "Outcome-Led Ad Creative", desc: "Education buyers respond to results, not features", tactics: ["Headline 1: outcome-focused ('Raise SAT Scores 150+ Points')", "Headline 2: program specifics ('12-Week Intensive Program')", "Headline 3: trust signal ('4.9 Stars · 300+ Student Reviews')", "Extensions: enrollment offer, program curriculum, free assessment"] },
          { title: "Enrollment Conversion Optimization", desc: "Every click must have a clear path to enrollment conversation", tactics: ["Free assessment or program consultation as primary offer", "Landing page: outcome stats, parent reviews, accreditation, enrollment form", "Calendly or booking widget for immediate consultation scheduling", "Retargeting: parent and student site visitors for 30 days post-visit"] }
        ]
      },
      services: [
        "Education PPC Full Setup", "Program Campaign Architecture",
        "Enrollment Season Budget Planning", "Outcome-Led Ad Copy Creation",
        "Consultation Booking Integration", "Parent & Student Landing Pages",
        "Accreditation Ad Signals", "Retargeting for Long Decision Cycles",
        "Negative Research Keyword List", "Competitor Conquest Campaign",
        "Enrollment Funnel Tracking", "Monthly Enrollment ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "One campaign for all programs", impact: "A parent searching 'SAT prep near me' and a parent searching 'math tutor for 5th grader' are at different decision points with different needs. One campaign fails both.", fix: "Dedicated campaigns per program type with matching landing pages — each optimized for the specific parent or student search intent behind that program." },
        { mistake: "Feature-focused ad copy instead of outcomes", impact: "Parents don't enroll students in programs for features. They enroll for outcomes: better grades, college acceptance, career change. Feature ads get scrolled past in favor of results-focused competitors.", fix: "Outcome-first ad copy: specific, measurable results front-and-center. 'Our students gain an average of 142 SAT points' outperforms 'Comprehensive SAT preparation curriculum' every time." },
        { mistake: "Missing enrollment season budget scaling", impact: "Education PPC spending equally in March and August misses the single highest-enrollment-intent month. Flat budgets abandon the biggest conversion windows of the year.", fix: "Pre-scheduled budget calendar: 40% budget increase in July-August (back-to-school), 25% increase in January (new year), 30% increase in April-May (summer programs). Set and automated." },
        { mistake: "No free assessment offer on landing page", impact: "A parent researching tutoring who sees a contact form with no incentive has no reason to submit before comparing 3 more options. The free assessment removes friction and starts the relationship.", fix: "Free 30-minute assessment or program consultation as primary CTA on every education landing page. Specific offer reduces abandonment and creates an immediate enrollment conversation." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Calendly", "Unbounce / WordPress", "Looker Studio", "HubSpot / Salesforce CRM"],
      timeline: {
        m1: "Program campaigns, enrollment season planning, landing pages, consultation booking, tracking.",
        m2: "Bid optimization, outcome-led ad variants testing, research keyword negation.",
        m3: "Consistent enrollment inquiry flow. Program ROAS differentiated. Season budgets pre-set.",
        m6: "Enrollment pipeline from PPC established. Waitlist potential for peak programs.",
        m12: "Education PPC as primary enrollment acquisition engine. Full-year seasonal strategy optimized."
      },
      keywords: [
        "tutoring near me", "SAT prep [city]", "math tutor near me",
        "coding bootcamp [city]", "vocational training near me", "trade school [city]",
        "music lessons near me", "online learning programs", "adult education [city]"
      ],
      caseStudy: {
        client: "Pinnacle Learning Academy",
        location: "Dallas, TX",
        before: "$3,500/mo spend, 18 leads, 5 enrollment consultations/mo",
        after: "$3,500/mo spend, 61 consultation bookings, 28 new enrollments/mo",
        leads: "Program revenue increased 3.4× from PPC within 5 months",
        period: "5 months",
        highlight: "Outcome-led ad copy ('Average 138-point SAT improvement') doubled CTR and cut cost-per-enrollment by 58%"
      },
      localVsNational: {
        local: "Education PPC is neighborhood-radius targeted — commutability matters. We geo-target every neighborhood within realistic travel distance of your campus.",
        national: "Online education providers need national keyword campaigns segmented by program type and target demographic — no geographic constraints."
      },
      faqs: [
        { q: "How much should an education business spend on PPC?", a: "Tutoring and enrichment programs: $1,500–$3,000/month. Vocational and professional programs: $3,000–$6,000/month. Budget relative to program tuition and enrollment close rate." },
        { q: "When should education businesses increase PPC budgets?", a: "August (back-to-school), January (new year enrollment resolutions), and April-May (summer programs). These three windows generate the highest search volume and conversion rates for most education programs." },
        { q: "What is the best CTA for education PPC landing pages?", a: "Free assessment or free program consultation. Specific, low-commitment offer that starts an enrollment conversation. Direct Calendly booking widget so parents or students can schedule immediately." },
        { q: "How do I measure ROI for education PPC?", a: "Cost-per-enrollment: total ad spend ÷ enrollments attributed to PPC. Track enrollment consultations as primary conversion, paid enrollments as secondary. Compare monthly ad spend to tuition revenue from PPC-sourced students." }
      ]
    },

    // ─── 18. FINANCE ─────────────────────────────────────────────────────
    {
      slug: "finance",
      name: "Financial Services",
      icon: "💰",
      tagline: "Attract High-Value Financial Clients From Google. Finance PPC That Generates Qualified Consultation Requests.",
      heroSubtitle: "Individuals and business owners searching for financial advisors, tax professionals, and wealth management services use Google to find who they'll trust with their finances. Targeted PPC places your firm in front of these high-value searches at the exact moment of decision.",
      overview: "Financial services PPC is a high-value, compliance-sensitive advertising category where a single acquired client can be worth $250,000+ in assets under management or tens of thousands in annual tax and advisory fees. The challenge: financial services keywords are among the most competitive — and most regulated — in Google Ads.\n\nFor financial advisors, wealth managers, tax professionals, and insurance specialists, PPC requires a compliant, credibility-first approach. High-intent financial searches — 'financial advisor near me,' 'CFP [city],' 'wealth management [city]' — come from individuals and business owners ready to engage a professional. A strong PPC presence captures these prospects before they find a competitor.\n\nRankston builds financial services PPC campaigns that generate qualified consultation requests while maintaining full regulatory compliance — with FINRA and SEC-aware ad copy, credential-forward landing pages, and consultation booking paths that convert high-net-worth searches into advisory relationships.",
      stats: [
        { val: "$250K+", label: "avg AUM per financial advisory client acquired" },
        { val: "71%", label: "of people search online to find a financial advisor" },
        { val: "$45–$90", label: "avg CPC for competitive financial advisor keywords" },
        { val: "10–30×", label: "ROAS achievable on high-net-worth client acquisition" }
      ],
      painPoints: [
        { title: "Non-Compliant Ad Copy and Landing Pages", desc: "Financial advertising is regulated by FINRA and SEC. Generic PPC campaigns with performance claims or testimonial-style language create compliance exposure most financial advisors don't realize they have." },
        { title: "Keywords Too Broad for High-Value Client Targeting", desc: "Financial keywords attract budget researchers, students, and job seekers alongside genuine advisory prospects. Without aggressive filtering, costly financial keywords fund irrelevant traffic." },
        { title: "No Credential Signals in Ads", desc: "CFP, CFA, CPA designations are primary trust filters for financial buyers. Ads without credential signals compete on cost alone against advisors who lead with qualifications." },
        { title: "No Consultation Booking Path", desc: "Financial clients don't 'buy' advisory services from a form. They schedule consultations. Landing pages without direct booking integration lose prospects who were ready to engage." },
        { title: "Not Segmenting by Client Type", desc: "Retirement planning for individuals, business succession planning, and tax preparation are different services for different buyers. One campaign for all services serves none optimally." },
        { title: "Competing Head-to-Head with National Financial Brands", desc: "National firms (Fidelity, Vanguard, Edward Jones) dominate broad financial keywords with massive budgets. Independent advisors must use niche keyword strategies to compete efficiently." }
      ],
      strategy: {
        title: "Our PPC Strategy for Financial Services Professionals",
        intro: "Financial PPC must balance compliance, credibility, and conversion — three requirements most financial ad campaigns fail to achieve simultaneously. Our campaigns are built to do all three.",
        pillars: [
          { title: "Compliant Campaign Architecture", desc: "Every campaign element reviewed for FINRA and SEC compliance from the start", tactics: ["Ad copy review: no performance claims, no testimonial language, no guarantees", "Disclaimer extensions where required by jurisdiction", "CRD number displayed in compliant market contexts", "Landing page compliance review: disclosure statements, credential display"] },
          { title: "High-Net-Worth Audience Targeting", desc: "Financial keywords must be concentrated on prospect quality, not click volume", tactics: ["Exact and phrase match: 'financial advisor near me,' 'CFP [city],' 'wealth management [city]'", "Audience layering: high-net-worth in-market audiences", "Exclusions: student, research, job-seeking traffic", "Ad scheduling: business hours for professional buyer audience"] },
          { title: "Consultation Conversion System", desc: "Financial advisory relationships begin with conversations — PPC must deliver consultation bookings", tactics: ["Primary offer: complimentary 30-minute financial review or retirement assessment", "Calendly booking widget: direct calendar scheduling from landing page", "Retargeting: 60-day window for high-consideration financial decisions", "CRM integration: consultation request auto-assigned to advisor"] }
        ]
      },
      services: [
        "Financial Services PPC Setup", "FINRA-Aware Ad Copy Development",
        "High-Net-Worth Audience Targeting", "Credential-Forward Landing Pages",
        "Consultation Booking Integration", "Compliance Review for All Creative",
        "Retirement Planning Campaign", "Business Owner Campaign",
        "Tax Services Campaign", "Competitor Keyword Strategy",
        "60-Day Retargeting Campaign", "Monthly Client ROAS Reporting"
      ],
      commonMistakes: [
        { mistake: "Performance claims in financial ad copy", impact: "Headlines like 'Grow Your Wealth Faster' or 'Beat Market Returns' violate FINRA advertising guidelines and can trigger regulatory action. Most financial PPC campaigns have compliance issues.", fix: "FINRA-aware ad copy: educational, credential-focused, service-description language. 'CFP-Certified Retirement Planning in [City]' — no performance claims, no guarantees, no testimonials." },
        { mistake: "Broad match keywords for high-CPC financial terms", impact: "At $45–$90 CPC, 'financial advisor' on broad match generates research traffic, student searches, and competitor research. Each irrelevant click costs $45+.", fix: "Exact and phrase match for all high-CPC financial keywords. Comprehensive negative keyword list: student, career, salary, free, DIY, investing course. Every wasted click in finance is expensive." },
        { mistake: "Generic landing page without credential display", impact: "A high-net-worth prospect clicking an ad and landing on a generic 'Contact Us' page has no evidence of qualifications. They continue searching to find an advisor who leads with credentials.", fix: "Credential-forward landing pages: CFP designation, years of experience, AUM managed, client demographics served, and a specific consultation offer. Compliance-reviewed before launch." },
        { mistake: "No segmentation between individual and business financial clients", impact: "A retired couple doing estate planning and a business owner evaluating 401k plans need completely different ad copy and landing experiences. One page serves neither audience.", fix: "Separate campaigns for individual wealth management and business financial services — each with tailored keywords, ad copy that addresses that specific client type, and dedicated landing pages." }
      ],
      tools: ["Google Ads", "Google Analytics 4", "Calendly", "Google Tag Manager", "Redtail / Wealthbox CRM", "Looker Studio", "Compliance review software"],
      timeline: {
        m1: "Compliance review, credential-forward build, landing pages, consultation booking, targeting.",
        m2: "Bid optimization, negative keyword expansion, Quality Score improvement.",
        m3: "Consistent consultation request flow. HNW audience layering optimized.",
        m6: "AUM pipeline from PPC quantified. New client acquisition cost established.",
        m12: "Financial services PPC as primary qualified consultation engine. Full compliance maintained."
      },
      keywords: [
        "financial advisor near me", "CFP near me", "wealth management [city]",
        "retirement planning advisor [city]", "investment advisor near me",
        "financial planner [city]", "tax advisor near me", "estate planning attorney near me"
      ],
      caseStudy: {
        client: "Clearwater Wealth Management",
        location: "San Diego, CA",
        before: "$8,000/mo spend, 14 form fills, 3 qualified consultations/mo",
        after: "$8,000/mo spend, 42 consultation bookings, 16 qualified advisory inquiries/mo",
        leads: "$6.8M in new AUM from PPC-attributed client onboarding",
        period: "8 months",
        highlight: "HNW audience layering and credential-forward landing pages increased qualified consultation rate from 21% to 61% of total bookings"
      },
      localVsNational: {
        local: "Financial services PPC is highly local — clients want face-to-face advisory relationships. We geo-target your metro area with radius-based bid adjustments for highest-wealth zip codes.",
        national: "Multi-office wealth management firms and national advisory brands need per-market campaign structures with centralized compliance review and locally-adapted credential messaging."
      },
      faqs: [
        { q: "Can financial advisors advertise on Google Ads?", a: "Yes — with compliance precautions. FINRA and SEC advertising guidelines apply to Google Ads for registered advisors. We build campaigns with compliant ad copy, appropriate disclaimers, and no performance claims from day one." },
        { q: "How much should a financial advisor spend on PPC?", a: "Starting budget of $3,000–$6,000/month. Financial keywords are expensive ($45–$90 CPC) but client LTV is exceptional. Target cost-per-consultation-booking as primary metric, then track consultation-to-client close rate for true ROAS." },
        { q: "How do I compete with Fidelity and Vanguard on Google Ads?", a: "Niche keyword strategy. Target specific, local searches where national brands don't compete: 'independent financial advisor [your city],' 'fee-only CFP near me,' 'fiduciary advisor [city].' Local specificity wins over national brand dominance." },
        { q: "What are the compliance rules for financial services Google Ads?", a: "No performance claims ('we beat the market'), no testimonials implying future results, no guarantees. Educational, service-description, and credential-focused ad copy is safe. All financial PPC creative should be reviewed against FINRA Rule 2210 before launch." }
      ]
    }

  ] // end ppc industries — 18/18 complete
};

export default ppcIndustries;
