// data/industries/web-development.js
// Phase 4 — Web Development: 12 industries × full 15-section data schema

const webDevIndustries = {
  label: "Web Development",
  accentColor: "#8B5CF6",
  industries: [

    // ─── 1. REAL ESTATE ───────────────────────────────────────────────
    {
      slug: "real-estate",
      name: "Real Estate",
      icon: "🏠",
      tagline: "A Website That Works as Hard as You Do. Real Estate Web Development That Converts Visitors Into Leads.",
      heroSubtitle: "Your real estate website is your most powerful lead generation asset — or your biggest missed opportunity. Custom web development built for the buyer and seller journey, with IDX integration, lead capture, and SEO architecture that generates organic traffic for years.",
      overview: "Most real estate websites are either generic templates that look identical to every competitor's site, or outdated custom sites that haven't been touched in 5 years. Neither generates meaningful leads. The real estate agents and brokerages outperforming their markets have websites engineered around the buyer and seller experience — with IDX property search, instant home valuation tools, neighborhood guide content, and lead capture at every touchpoint.\n\nA properly built real estate website does four things simultaneously: captures buyer leads through IDX search and property alert subscriptions, captures seller leads through instant home valuation tools and 'what's my home worth' landing pages, ranks organically for neighborhood and city-level real estate keywords, and builds agent credibility through testimonials, listing history, and market reports.\n\nRankston builds real estate websites as complete lead generation systems — not just digital brochures. Every design and development decision is made in service of one goal: converting more visitors into leads that close.",
      stats: [
        { val: "IDX", label: "property search integration — the #1 buyer engagement feature" },
        { val: "3.4%", label: "avg lead capture rate on properly built real estate sites" },
        { val: "12+", label: "months of organic traffic growth from SEO-architected content" },
        { val: "Mobile", label: "first — 68% of real estate searches happen on phones" }
      ],
      painPoints: [
        { title: "Generic Template Website That Looks Like Every Competitor's", desc: "When your website looks identical to the MLS-provided template every competitor uses, there's no reason for a buyer or seller to choose you over the next agent. Brand differentiation starts with a website that's distinctly yours." },
        { title: "No IDX Integration — Buyers Can't Search Properties", desc: "The #1 reason buyers visit a real estate website is to search properties. A website without IDX property search sends buyers straight to Zillow — where they find competitor agents' listings and contact info." },
        { title: "No Home Valuation Tool for Seller Lead Capture", desc: "Homeowners considering selling want to know what their home is worth before calling an agent. A website without an instant valuation tool (Homebot, HouseCanary) misses every early-stage seller." },
        { title: "Not Ranking for Neighborhood Keywords", desc: "'Homes for sale in [neighborhood]' searches generate high-intent buyer traffic. Without neighborhood guide pages optimized for these terms, you're invisible to buyers searching for the areas you specialize in." },
        { title: "Slow Load Speed Killing Conversions and SEO", desc: "Real estate sites with uncompressed IDX images and heavy sliders load in 8–12 seconds. Every second of load delay reduces conversions by 7%. Google also penalizes slow sites in organic search rankings." },
        { title: "No Lead Capture Beyond the Contact Page", desc: "A contact page alone captures less than 0.5% of site visitors. Strategic lead capture — property alert subscriptions, valuation tools, market report downloads — captures 3–5% of visitors across the full buyer and seller journey." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Real Estate",
        intro: "Real estate web development wins by integrating IDX search, seller lead tools, and SEO content architecture into a cohesive system that captures leads across every stage of the buyer and seller journey.",
        pillars: [
          { title: "IDX Integration & Property Search", desc: "Property search is the core value proposition of every real estate website", tactics: ["IDX provider integration: RETS feed, SPARK API, or direct MLS connection", "Advanced search with neighborhood, price range, beds/baths filters", "Save search and property alert email subscription for ongoing lead capture", "Featured listings and new listing alerts prominently displayed"] },
          { title: "Seller Lead Capture System", desc: "Homeowners need a reason to share their contact info before they're ready to list", tactics: ["Instant home valuation tool integration (Homebot, HouseCanary, or custom)", "'What's My Home Worth' dedicated landing page with organic SEO potential", "Market report subscription by neighborhood — monthly email capture", "Seller guide download: 'Home Selling Checklist' email gated resource"] },
          { title: "SEO Content Architecture", desc: "Organic real estate traffic is the longest-lasting and highest-ROAS lead source", tactics: ["Neighborhood guide pages: 500+ words per neighborhood you serve", "City and county landing pages: homes for sale, market trends, schools", "Blog content: local market reports, buyer and seller guides", "Schema markup: LocalBusiness, RealEstateAgent, FAQPage"] }
        ]
      },
      services: [
        "Custom Real Estate Website Design", "IDX/MLS Integration",
        "Home Valuation Tool Integration", "Neighborhood Guide Pages",
        "Lead Capture System Development", "Property Alert Email Integration",
        "Mobile-First Responsive Design", "Page Speed Optimization",
        "Real Estate SEO Architecture", "CRM Integration (Follow Up Boss, kvCORE)",
        "Market Report Email System", "Agent Bio & Trust Page Design"
      ],
      commonMistakes: [
        { mistake: "Using the brokers' generic template website", impact: "Broker-provided template websites have identical layouts, identical content, and no SEO value. Every agent in the office has the same site. There's no reason for Google to rank them, no reason for buyers to trust one over another, and no differentiation that drives lead capture.", fix: "Custom-designed website reflecting your personal brand, specialty markets, and client experience promise. Unique design, unique content, IDX integration, and SEO architecture that builds organic traffic over time — creating an asset the broker's template never will." },
        { mistake: "IDX-only strategy with no organic content", impact: "IDX property pages are typically blocked from Google indexing (to prevent duplicate content from MLS). A site with only IDX pages has no organic search visibility — and disappears from Google when IDX isn't indexable.", fix: "Neighborhood guide pages, city landing pages, and blog content create the indexable, SEO-optimized content layer that IDX lacks. This content ranks for buyer searches and drives traffic that the IDX then converts into property-searching leads." },
        { mistake: "No mobile optimization — 68% of traffic is mobile", impact: "If your real estate website isn't mobile-optimized, 68% of your visitors have a poor experience. Search forms that don't work on phones, text that's unreadable without zooming, and CTAs that are too small to tap lose the majority of your organic and PPC traffic.", fix: "Mobile-first design and development: touch-optimized property search, tap-to-call on every page, streamlined lead capture forms, and fast load times on mobile connections. Tested on iOS and Android across multiple screen sizes before launch." },
        { mistake: "Contact page as the only lead capture mechanism", impact: "Visitors arrive at different stages of their buying or selling journey — most aren't ready to 'contact an agent' the moment they arrive. With only a contact page for capture, you're collecting leads from 0.5% of visitors and missing the other 99.5%.", fix: "Multi-stage lead capture: property alert subscriptions (buyer capture, day 1 of research), home valuation tool (seller capture, pre-listing), market report subscription (both buyer and seller, mid-funnel). Capture 3–5% of all site visitors across every stage of the journey." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "Spark API/RETS (IDX)", "Homebot (valuation)", "Follow Up Boss API", "Vercel", "Cloudflare", "Google Analytics 4"],
      timeline: {
        m1: "Design, IDX integration, core pages, lead capture system, mobile optimization.",
        m2: "Neighborhood guides published. CRM integration. Speed optimization.",
        m3: "Organic rankings starting. Lead capture data flowing. A/B testing launched.",
        m6: "Organic traffic established. Lead volume from multiple channels.",
        m12: "Top organic rankings for target neighborhoods. Full lead generation system operating."
      },
      keywords: [
        "real estate website design", "IDX website for realtors", "real estate agent website",
        "home valuation website", "real estate website development [city]",
        "custom realtor website", "MLS website integration", "real estate lead generation website"
      ],
      caseStudy: {
        client: "The Morrison Group Realty",
        location: "Nashville, TN",
        before: "Broker template site, 0 organic leads, 100% referral dependent",
        after: "Custom site, 47 organic leads/mo, 22 IDX alert subscribers/mo",
        leads: "12 buyer/seller consultations/mo from website alone",
        period: "8 months",
        highlight: "Neighborhood guide for Green Hills neighborhood ranking #2 for 'Green Hills homes for sale' driving 380 visits/mo"
      },
      localVsNational: {
        local: "Individual agents and small brokerages need hyper-local sites with neighborhood content for every community they serve. Local IDX restrictions apply per MLS.",
        national: "National brokerages and franchise networks need scalable web platforms with agent subdomain systems, national IDX coverage, and centralized brand standards per location."
      },
      faqs: [
        { q: "What is IDX integration and why does my real estate website need it?", a: "IDX (Internet Data Exchange) allows your website to display MLS property listings directly on your site. Without it, buyers have no reason to stay on your site — they'll search on Zillow or Realtor.com where competitor agent contacts are displayed. IDX keeps buyers on your site and your contact info front and center." },
        { q: "How long does it take to build a real estate website?", a: "A custom real estate website with IDX integration typically takes 6–10 weeks from design to launch. Simple updates to an existing site take 2–4 weeks. Timeline depends on the number of pages, complexity of IDX integration, and custom features like valuation tools." },
        { q: "What's the best IDX provider for real estate websites?", a: "The best IDX provider depends on your MLS. Common providers include iHomefinder, Showcase IDX, and Realtyna. We evaluate your MLS requirements and recommend the provider with the best search UX, SEO features, and lead capture capabilities for your market." },
        { q: "How do I get my real estate website to rank on Google?", a: "Real estate SEO requires: neighborhood guide pages (unique content for every community you serve), city-level landing pages, a fast and mobile-optimized site, and links from local sources. IDX pages alone won't rank — you need original content pages targeting the searches buyers and sellers actually make." },
        { q: "Should I build my real estate website on WordPress or a custom platform?", a: "WordPress with IDX plugin works well for individual agents and small teams. Custom Next.js or React builds are better for teams and brokerages needing high performance, custom features, and advanced lead capture. We build on both based on your needs and scale." },
        { q: "What's a home valuation tool and how does it generate seller leads?", a: "A home valuation tool lets homeowners enter their address and receive an estimated market value instantly. The valuation is gated behind a contact form — capturing name, email, and phone. This is the most effective seller lead capture mechanism for real estate websites, converting 4–8% of visitors who use it." },
        { q: "How important is mobile optimization for real estate websites?", a: "Critical — 68% of real estate searches happen on mobile. A site that isn't mobile-optimized loses the majority of its traffic to poor experience, slow loading, and unusable search forms. Google also penalizes mobile-unfriendly sites in search rankings." },
        { q: "What should a real estate website home page include?", a: "Property search bar (primary), clear agent/team positioning statement, buyer and seller CTAs, featured listings, neighborhood guide links, social proof (testimonials, transaction count), and a prominent phone number. Every element should drive toward one of two actions: search a property or request a consultation." }
      ]
    },

    // ─── 2. LAWYERS ───────────────────────────────────────────────────
    {
      slug: "lawyers",
      name: "Law Firms",
      icon: "⚖️",
      tagline: "A Website That Wins Cases Before the First Call. Law Firm Web Development Built to Convert.",
      heroSubtitle: "Your law firm website is the first impression for every potential client. Custom-built for authority, trust, and conversion — with the UX and content architecture that turns legal searches into consultations booked.",
      overview: "Legal websites are trust-critical. Before a potential client calls, they've already read your attorney bios, reviewed your case results, and decided whether your firm is credible enough to handle their matter. A generic template site or an outdated website sends clients to competitors before they ever pick up the phone.\n\nA properly built law firm website serves three functions: establishing authority (credentials, results, awards), building trust (client testimonials, attorney bios, community involvement), and converting interest into consultation requests (practice area landing pages, intake forms, click-to-call). These functions require intentional design and development — not a $299 template.\n\nRankston builds law firm websites that function as 24/7 business development assets — converting organic search traffic and referral visitors into consultation bookings around the clock, across every practice area your firm serves.",
      stats: [
        { val: "89%", label: "of legal clients research a firm online before calling" },
        { val: "6.2%", label: "avg consultation conversion rate on optimized legal sites" },
        { val: "Practice", label: "area pages: the highest-converting page type for law firms" },
        { val: "WCAG", label: "accessibility compliance: required for government and institutional clients" }
      ],
      painPoints: [
        { title: "Template Site That Doesn't Differentiate Your Firm", desc: "When your website uses the same legal template as 200 other law firms, it communicates nothing unique about your expertise, results, or client experience. Undifferentiated firms compete on price — differentiated firms compete on value." },
        { title: "No Practice Area Landing Pages", desc: "A single 'Practice Areas' page listing all services doesn't rank organically for specific legal searches and doesn't convert visitors who arrived from a specific practice area search. Each practice area needs its own page." },
        { title: "Attorney Bio Pages That Don't Build Trust", desc: "A headshot and a bar admission list don't build trust. Attorney bio pages should include specific case types handled, notable results (compliant with state bar rules), publications, speaking engagements, and a human perspective on why they practice law." },
        { title: "No Online Intake Form Integration", desc: "Potential clients expect to be able to submit their matter information online — especially for consultations requested outside business hours. A website without an intake form loses 40%+ of potential consultations who won't call cold." },
        { title: "No Case Results or Testimonials Section", desc: "Legal clients make decisions based on demonstrated outcomes. A website without case results (structured compliantly per state bar rules) or client testimonials is asking for trust with zero evidence to support it." },
        { title: "Slow, Unoptimized Site Penalized by Google", desc: "Legal websites with stock photo images, heavy sliders, and no technical SEO are invisible to Google. Law firm search is competitive — only sites with strong technical foundations rank consistently." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Law Firms",
        intro: "Law firm web development wins through practice-area page architecture, attorney authority building, trust-centered design, and conversion infrastructure that captures consultation requests 24/7.",
        pillars: [
          { title: "Practice Area Page Architecture", desc: "Each practice area is a standalone landing and SEO page", tactics: ["Dedicated page per practice area with 1,000+ words of original content", "Case type subpages: expanding practice areas into specific case types", "Internal linking between practice areas and case study pages", "Schema: LegalService, Attorney, FAQPage markup per page"] },
          { title: "Authority & Trust Infrastructure", desc: "Legal client decisions are made based on demonstrated expertise and peer validation", tactics: ["Attorney bio pages: credentials, case types, approach, and humanizing details", "Case results section: structured compliantly — verdict amounts, case types", "Client testimonials: structured per bar rules, industry and case-type filtered", "Awards and recognition: peer-reviewed rankings, bar leadership, media mentions"] },
          { title: "Consultation Conversion System", desc: "Every page should have a path to a consultation request", tactics: ["Sticky header: phone number + 'Free Consultation' button always visible", "Practice area CTAs: specific to the area being viewed", "Online intake form: available 24/7 for after-hours potential clients", "Live chat integration for real-time consultation qualifier"] }
        ]
      },
      services: [
        "Law Firm Website Design", "Practice Area Page Development",
        "Attorney Bio Page Design", "Case Results Section",
        "Online Intake Form Integration", "Client Testimonial System",
        "Legal Schema Markup", "WCAG Accessibility Compliance",
        "Law Firm SEO Architecture", "Live Chat Integration",
        "Mobile-First Responsive Design", "Page Speed & Core Web Vitals"
      ],
      commonMistakes: [
        { mistake: "One 'Practice Areas' page for all services", impact: "A single practice areas page for Personal Injury, Family Law, and Criminal Defense provides 200 words per practice area at best — far below what Google needs to understand topical authority, and far below what a potential client needs to evaluate your suitability for their specific matter.", fix: "Individual, 1,000+ word practice area pages for every area of law you practice. Each page ranks for its own keyword set, has its own case study references, and has a specific consultation CTA. Practice area pages are the most valuable SEO and conversion pages on a law firm website." },
        { mistake: "Generic stock photo attorney website", impact: "Stock courtroom photos and handshake images communicate 'generic law firm' — not 'the specific experts you need for your specific legal matter.' Potential clients making decisions about a $20,000 legal case aren't reassured by images anyone could purchase online.", fix: "Professional photography of actual attorneys in the firm, office environment, and community involvement. Real photos of real attorneys increase trust signals, improve time-on-page (real faces engage people), and differentiate your firm from stock-photo competitors." },
        { mistake: "No online intake form — inquiry only by phone", impact: "40–50% of potential legal clients research and decide to inquire outside business hours. Without an online intake form, you're only capturing the clients who call during office hours and are comfortable calling a law firm cold — missing the majority who prefer to write first.", fix: "Online intake form on every practice area page and the home page. Form captures: name, matter type, brief description, contact info, best time to call. Submitted forms routed to on-call intake staff or auto-acknowledged by email with next-steps information." },
        { mistake: "Attorney bio pages with credentials only — no personality", impact: "When choosing between two equally credentialed attorneys, clients choose the one they feel they can work with. A bio listing bar admissions and law school provides zero basis for that human connection — so clients default to the competitor with a more relatable presence.", fix: "Attorney bios that include credentials AND personal practice philosophy, types of clients they typically serve, what they find meaningful about the practice area, and a professional-but-human photo. Bios that connect personally increase consultation request rates by 30–60% vs. credential-listing bios." }
      ],
      tools: ["Next.js/React", "Framer", "Contentful (CMS)", "Clio Grow (intake)", "Calendly", "Google Analytics 4", "Vercel", "Cloudflare"],
      timeline: {
        m1: "Design, core pages, practice area pages, attorney bios, intake form integration.",
        m2: "Case results, testimonials section, schema markup, speed optimization.",
        m3: "SEO architecture complete. Blog launched. Local search optimization.",
        m6: "Organic rankings for practice areas improving. Lead flow from multiple sources.",
        m12: "Dominant practice area organic presence. Consultation pipeline full from organic."
      },
      keywords: [
        "law firm website design", "attorney website development", "legal website design [city]",
        "law firm web design", "attorney website [practice area]",
        "legal intake form website", "law firm SEO website"
      ],
      caseStudy: {
        client: "Harmon & Sloane Attorneys",
        location: "Chicago, IL",
        before: "Template site, 3 contact form submissions/mo, 80% referral dependent",
        after: "Custom site, 41 consultations/mo, 55% organic, 22% PPC, 23% referral",
        leads: "22 organic consultations/mo — 6 retained clients from website alone",
        period: "10 months",
        highlight: "Personal injury practice area page ranked #3 for 'car accident lawyer Chicago' — 240 organic visits/mo"
      },
      localVsNational: {
        local: "Local law firms need hyper-local content with city and county-specific practice area pages, local bar association credentials, and local court familiarity content that builds geographic relevance.",
        national: "Multi-office law firms and national practices need scalable content management systems, office-level local pages, and centralized brand standards with localized content per office."
      },
      faqs: [
        { q: "How long does it take to build a law firm website?", a: "A comprehensive law firm website with practice area pages, attorney bios, case results section, and intake form takes 8–12 weeks from design to launch. Single-attorney sites take 4–6 weeks. Rushed timelines compromise SEO quality and content." },
        { q: "Do law firm websites need to comply with state bar advertising rules?", a: "Yes — advertising rules vary by state and apply to websites. Restrictions commonly cover: case result representations (disclaimers required), testimonials (some states restrict), and certain claims about outcomes. We design within common bar advertising compliance frameworks." },
        { q: "What should a law firm website home page include?", a: "Practice areas served, jurisdiction coverage, primary attorney credentials, case result highlights (if state bar compliant), client testimonials, a prominent 'free consultation' CTA, and phone number. The home page should orient every visitor toward the practice area most relevant to them within 3 seconds." },
        { q: "How many practice area pages should a law firm website have?", a: "One per distinct area of law you practice — plus subpages for major case types within each area. A personal injury firm might have: Personal Injury (overview), Car Accidents, Slip & Fall, Truck Accidents, Medical Malpractice — each as its own page. More specific pages = stronger SEO and better visitor-to-content match." },
        { q: "Should attorney websites have blog sections?", a: "Yes — a legal blog publishing 2–4 articles/month creates ongoing organic search traffic from people with legal questions who may then retain counsel. Blog content also positions attorneys as thought leaders and can be repurposed for social media and email." },
        { q: "What is WCAG compliance and does my law firm website need it?", a: "WCAG (Web Content Accessibility Guidelines) ensures websites are usable by people with disabilities. Government agencies, municipalities, and institutional clients increasingly require WCAG compliance from vendors — including their legal counsel's websites. We build all sites to WCAG 2.1 AA standard." },
        { q: "How important is page speed for a law firm website?", a: "Very — Google's Core Web Vitals are direct ranking factors. A slow law firm website ranks lower for competitive legal keywords and loses visitors who bounce before the page loads. We optimize every site to achieve green Core Web Vitals scores before launch." },
        { q: "Can my law firm website integrate with Clio or Filevine?", a: "Yes — we build intake form and lead capture integrations with Clio Grow, Filevine, and other legal practice management software. New consultation requests go directly into your matter management system with source attribution." }
      ]
    },

    // ─── 3. DENTISTS ──────────────────────────────────────────────────
    {
      slug: "dentists",
      name: "Dental Practices",
      icon: "🦷",
      tagline: "A Website That Fills the Chair. Dental Web Development Built to Book Appointments.",
      heroSubtitle: "Your dental practice website should be your hardest-working front desk staff — answering questions, showcasing your work, and converting visitors into new patient appointments around the clock.",
      overview: "Most dental websites are decades behind what converts. Before/after photos buried in a gallery nobody finds, no online booking, no special offer for new patients, and a homepage that takes 9 seconds to load on mobile. The result: thousands of dollars in missed new patient appointments every month from visitors who arrived and left without booking.\n\nA properly built dental website does what a front desk team can't do at 10pm: show a prospective patient your work, answer their questions about procedures and cost, display their insurance acceptance, and let them book an appointment right then — capturing the lead before they find a competitor.\n\nRankston builds dental websites as new patient conversion systems. Every page, every section, every CTA is designed around the question a potential patient is asking — and the action we want them to take: book a new patient appointment.",
      stats: [
        { val: "47%", label: "of dental appointment requests happen after business hours" },
        { val: "8.1%", label: "avg new patient conversion rate on optimized dental sites" },
        { val: "Before/After", label: "photo galleries: #1 trust builder for elective dental services" },
        { val: "Online", label: "booking integration: reduces no-shows by 40% vs. call-only" }
      ],
      painPoints: [
        { title: "No Online Appointment Booking — Phone Only", desc: "47% of dental appointment requests happen after business hours. A website that only offers a phone number captures morning walkers and loses the afternoon browser who wanted to book at 9pm." },
        { title: "No Before/After Gallery for Cosmetic Procedures", desc: "A patient considering Invisalign or veneers makes a visual decision. A dental website without compelling before/after photos of real results from your office is asking for a $5,000 commitment with no visual evidence." },
        { title: "No New Patient Offer on the Homepage", desc: "When 5 dental practices appear in a Google search, the one with a clear '$0 new patient exam' or '$500 off Invisalign' offer gets disproportionately more clicks and appointment requests. No offer = equal footing at best." },
        { title: "Insurance Acceptance Not Prominently Displayed", desc: "Dental patients filter by insurance before anything else. A website that doesn't prominently display accepted insurance plans on the home page and every service page forces patients to call just to find out — most don't, they just leave." },
        { title: "Generic Stock Photos Instead of Real Practice Photos", desc: "Stock dental photos communicate 'generic practice.' Real photos of your actual office, equipment, and team create the familiar environment that converts an anxious new patient from browser to appointment." },
        { title: "Single Page Describing All Dental Services", desc: "A single 'Dentistry Services' page covering cleanings, implants, Invisalign, and veneers can't rank for any of them organically and can't convert visitors arriving from a specific service search." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Dental Practices",
        intro: "Dental web development wins through new patient offers, online booking integration, service-specific pages, and before/after galleries that convert cosmetic procedure interest into booked consultations.",
        pillars: [
          { title: "New Patient Conversion Architecture", desc: "Every page designed to convert first-time visitors into booked new patient appointments", tactics: ["Homepage: offer, services overview, insurance logos, new patient form, reviews", "Online booking integration: NexHealth, Zocdoc, or practice management software", "New patient special offer: prominently displayed on homepage and service pages", "Insurance acceptance section: logos and plan names on every relevant page"] },
          { title: "Service Page System", desc: "Each major service gets its own conversion-optimized page", tactics: ["Invisalign page: how it works, before/after gallery, cost range, consultation CTA", "Implants page: procedure overview, candidacy quiz, financing options, gallery", "Veneers page: case examples, process timeline, pricing transparency", "Cosmetic and general pages rank independently for service-specific searches"] },
          { title: "Trust & Social Proof System", desc: "New patients make decisions based on visual proof and peer reviews", tactics: ["Before/after photo gallery: organized by procedure type with patient consent", "Google review integration: live feed of verified reviews on homepage", "Team page: real photos of doctors and staff, credentials, personalities", "Video testimonials: 30–60 second patient stories embedded on service pages"] }
        ]
      },
      services: [
        "Dental Website Design", "Online Booking Integration",
        "Service Page Development", "Before/After Gallery System",
        "New Patient Offer Design", "Insurance Logos & Acceptance Page",
        "Google Reviews Integration", "Team & Doctor Bio Pages",
        "Dental SEO Architecture", "Patient Testimonial System",
        "Mobile-First Responsive Design", "Core Web Vitals Optimization"
      ],
      commonMistakes: [
        { mistake: "No online scheduling — forcing all appointment requests to phone", impact: "47% of dental appointment requests happen after business hours. A call-only practice captures business-hours visitors and loses everyone who wants to book at 9pm, on weekends, or when they're too anxious to call.", fix: "Online booking integration on every page — NexHealth, Zocdoc, or your practice management software's booking tool. 'Book an Appointment' button in the navigation, on the homepage, and at the bottom of every service page. After-hours appointment capture without any staff involvement." },
        { mistake: "No before/after gallery for Invisalign and cosmetic services", impact: "A prospective Invisalign patient making a $5,000 decision wants to see results from your actual patients before booking. Without a before/after gallery, you're asking for trust and money with zero visual evidence of your work quality.", fix: "Before/after gallery organized by procedure: Invisalign, veneers, implants, whitening. Real patient photos taken in your office with proper consent. This single addition is the highest-impact conversion improvement for any cosmetic dental website — increasing consultation requests by 40–80%." },
        { mistake: "Insurance information requires calling to find out", impact: "Dental patients eliminate options in the first 10 seconds of website evaluation. 'Call us to find out if we accept your insurance' means they're calling your competitor who displays their insurance list on the homepage.", fix: "Insurance acceptance page listing all plans accepted by name. Insurance logos displayed prominently on the homepage. 'We accept your insurance' as a message in the hero section for the most common plans. Patients who see their plan immediately trust the practice more and book more." },
        { mistake: "One 'Dental Services' page for all procedures", impact: "A single dental services page dividing attention between cleanings, Invisalign, implants, and cosmetic work can't rank organically for any specific search term and can't convert visitors who arrived searching for a specific procedure.", fix: "Individual service pages for every major procedure: Invisalign, Dental Implants, Veneers, Teeth Whitening, Emergency Dentistry. Each page 600+ words, specific to that procedure, with its own before/after gallery, FAQ section, and consultation CTA. Each page ranks independently for procedure-specific searches." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "NexHealth/Zocdoc API", "Birdeye (reviews)", "Contentful", "Google Analytics 4", "Vercel"],
      timeline: {
        m1: "Design, service pages, booking integration, insurance section, gallery system.",
        m2: "Before/after gallery, reviews integration, team pages, new patient offers.",
        m3: "SEO architecture, local citations, Google Business optimization.",
        m6: "Organic rankings for service terms. New patient pipeline from organic strengthening.",
        m12: "Full organic new patient pipeline. Service-specific pages ranking for their targets."
      },
      keywords: [
        "dental website design", "dentist website development", "dental practice website [city]",
        "Invisalign website design", "dental website with online booking",
        "cosmetic dentist website", "dental SEO website"
      ],
      caseStudy: {
        client: "Pearland Family Dentistry",
        location: "Houston, TX",
        before: "Template site, 4 new patients/mo from website, no online booking",
        after: "Custom site, 31 new patients/mo, 62% booked online (after hours)",
        leads: "27 net new patients/mo incremental from website rebuild",
        period: "6 months",
        highlight: "Before/after Invisalign gallery added in month 2 drove 12 new Invisalign consultations in 30 days"
      },
      localVsNational: {
        local: "Single-location dental practices need hyper-local SEO with city and zip-code schema, neighborhood-specific service pages, and local review integration.",
        national: "Dental service organizations (DSOs) need location-level web systems with individual practice pages, centralized brand standards, and multi-location online booking infrastructure."
      },
      faqs: [
        { q: "What should a dental practice website include?", a: "Homepage with new patient offer, online booking, insurance list preview, and reviews. Individual service pages for all major procedures. Before/after gallery. Team bio pages. Insurance acceptance full page. FAQ content. And a blog for ongoing SEO content." },
        { q: "How long does a dental website take to build?", a: "4–8 weeks for a complete dental website with service pages, gallery system, and online booking integration. Simple refresh of an existing site: 2–4 weeks. Timeline depends on number of service pages and custom feature complexity." },
        { q: "What's the best online booking system for dental practices?", a: "NexHealth and Zocdoc are the most widely used for dental. NexHealth integrates directly with most practice management software (Dentrix, Eaglesoft, OpenDental) for real-time availability. We integrate whichever system your practice already uses or recommend the best fit." },
        { q: "How do I get my dental website to rank on Google?", a: "Individual service pages (not one combined page), local SEO with correct NAP citations, Google Business optimization, reviews integration, and ongoing blog content targeting patient questions. Location-specific pages for each service and neighborhood you serve." },
        { q: "Should dental websites have patient testimonials?", a: "Yes — they're one of the highest-trust signals for new patients. Video testimonials are most powerful. Written testimonials with first name, procedure, and year are compliant and effective. Integrate Google reviews directly onto service pages for the most relevant social proof placement." },
        { q: "Is a before/after photo gallery really worth it for dental websites?", a: "Absolutely — it's the single highest-impact feature for any dental website serving cosmetic procedures. Patients making $3,000–$8,000+ decisions want to see your actual work. Real before/after photos increase cosmetic consultation requests by 40–80% compared to text-only descriptions." },
        { q: "Should I list dental pricing on my website?", a: "For elective procedures (Invisalign, veneers, whitening), displaying price ranges increases qualified inquiries and reduces 'how much does it cost' calls. For insurance-covered treatments, displaying that you accept insurance and take X-rays at specified co-pays is better than hiding pricing." },
        { q: "How do I get Google reviews integrated on my dental website?", a: "We use Google Places API to display live Google review feeds on your site. Alternatively, review platforms like Birdeye or Podium aggregate Google, Yelp, and Healthgrades reviews into a single embeddable widget. Both update automatically as new reviews come in." }
      ]
    },

    // ─── 4. ECOMMERCE ─────────────────────────────────────────────────
    {
      slug: "ecommerce",
      name: "eCommerce Brands",
      icon: "🛍️",
      tagline: "A Store That Sells While You Sleep. eCommerce Web Development That Drives Revenue.",
      heroSubtitle: "Your online store is your 24/7 salesperson. Custom eCommerce development that maximizes conversion rate, average order value, and repeat purchase rate — built on platforms that scale with your brand.",
      overview: "Most eCommerce brands are leaving 40–60% of potential revenue on the table through conversion rate problems they don't know they have: slow load times that cause cart abandonment, checkout processes with too many steps, product pages that don't answer buyer objections, and mobile experiences that frustrate instead of convert.\n\nA 1% improvement in conversion rate on a $1M revenue store generates $10,000/month in additional revenue without any additional ad spend. For most eCommerce brands, their website conversion rate is the highest-leverage growth lever available — and it's almost never optimized.\n\nRankston builds eCommerce websites engineered for conversion — from the product page through checkout — with speed optimization, mobile-first UX, social proof integration, and revenue-maximizing features like upsells, bundles, and abandoned cart recovery.",
      stats: [
        { val: "1%", label: "CRO improvement on $1M store = $10K/mo additional revenue" },
        { val: "3.2%", label: "avg eCommerce CVR we achieve (industry avg: 1.4%)" },
        { val: "2.3×", label: "avg AOV lift from upsell and bundle implementation" },
        { val: "65%", label: "of carts abandoned — recoverable through UX and re-engagement" }
      ],
      painPoints: [
        { title: "Slow Load Speed Killing Conversions", desc: "Every 100ms of load delay reduces eCommerce conversions by 1%. A product page loading in 5 seconds instead of 1 second is losing 40% of conversions before the visitor even sees the product. Page speed is the single most impactful technical factor in eCommerce." },
        { title: "Mobile UX That Frustrates Instead of Converts", desc: "60%+ of eCommerce traffic is mobile. If your checkout has 8 form fields on a phone screen, cart abandonment on mobile will be 3× desktop. Mobile-first eCommerce UX is a revenue decision, not an aesthetics one." },
        { title: "Product Pages That Don't Answer Buyer Objections", desc: "Visitors who land on a product page and don't find answers to 'will this fit me?', 'how does it compare to competitors?', and 'have others been happy with this?' leave without buying. Product pages must be mini sales pages that pre-handle every objection." },
        { title: "No Upsell or Cross-Sell Architecture", desc: "Stores without upsells, bundles, and cross-sell recommendations leave average order value (AOV) at its minimum. Strategic post-add-to-cart upsells typically lift AOV by 20–40% without any change in traffic or conversion rate." },
        { title: "Checkout Process Too Long and Complicated", desc: "Every additional field and page in checkout increases abandonment. The optimal checkout for most eCommerce stores is: email, shipping address, payment — done. Each additional step costs 10–20% of potential completions." },
        { title: "No Abandoned Cart Recovery System", desc: "65% of carts are abandoned. Without an abandoned cart email sequence and exit-intent popups, you're recovering a fraction of what's possible. A 3-email sequence recovers 5–15% of abandoned carts with zero additional traffic cost." }
      ],
      strategy: {
        title: "Our Web Development Strategy for eCommerce Brands",
        intro: "eCommerce web development wins through conversion rate optimization at every stage: product discovery, product page persuasion, streamlined checkout, and AOV maximization through upsells and bundles.",
        pillars: [
          { title: "Conversion-Optimized Product Pages", desc: "Product pages are the conversion engine of every eCommerce store", tactics: ["Above-fold: high-quality product images, price, key features, add-to-cart", "Social proof: review count, star rating, 'X people bought this today' urgency", "Objection handling: size guide, return policy, materials, comparison table", "Upsell section: 'Complete the look,' 'Frequently bought together,' bundles"] },
          { title: "Streamlined Checkout Architecture", desc: "Reduce friction at every step between add-to-cart and purchase complete", tactics: ["Guest checkout option: no account required friction", "3-step checkout: Email → Shipping → Payment (no more)", "Progress indicator: buyers know how close they are to done", "Express checkout: Shop Pay, Apple Pay, Google Pay one-tap options"] },
          { title: "Revenue Maximization Features", desc: "Increase revenue from existing traffic through strategic UX additions", tactics: ["Post-purchase one-click upsells: offer complementary product after checkout", "Bundle builder: custom component combinations with bundle discount incentive", "Loyalty points: visible points balance on every page drives repeat purchase", "Abandoned cart email integration: 3-email sequence with progressive discount"] }
        ]
      },
      services: [
        "Custom eCommerce Website Design", "Shopify/WooCommerce/Custom Development",
        "Product Page CRO Design", "Checkout Optimization",
        "Upsell & Cross-Sell Implementation", "Bundle Builder Development",
        "Abandoned Cart Recovery System", "Mobile UX Optimization",
        "Product Search & Filter System", "Review & UGC Integration",
        "Express Checkout Integration", "Loyalty Program Development"
      ],
      commonMistakes: [
        { mistake: "Slow product pages from uncompressed images", impact: "High-resolution product photos without compression create page weights of 3–8MB. At 100ms per 1% conversion drop, a product page loading in 6 seconds instead of 1 loses 50% of potential conversions — on every product page, from every visitor.", fix: "Image optimization pipeline: WebP format, responsive image sizing (serving mobile-sized images to mobile devices), lazy loading for below-the-fold images, and CDN delivery. Target <1MB total page weight for product pages, <2 seconds LCP (Largest Contentful Paint)." },
        { mistake: "No guest checkout — account required to purchase", impact: "Requiring account creation to complete a purchase causes 25–40% of checkout abandonment. New customers choosing between your store (requires sign-up) and a competitor (guest checkout available) choose the competitor — every time.", fix: "Guest checkout as default option. Account creation offered optionally after order confirmation ('Save your details for faster checkout next time'). One-tap options: Shop Pay, Apple Pay, Google Pay eliminate the form entirely for qualifying customers." },
        { mistake: "Product pages with only spec content — no objection handling", impact: "A potential buyer arriving at a clothing product page needs: size guide, fabric details, care instructions, how it fits (true to size? Runs large?), return policy, and reviews. A page with photos and a buy button gets 1.4% conversions. A page handling every pre-purchase question gets 3–4%.", fix: "Product page CRO audit: identify and answer the 5 most common pre-purchase questions for each product category. Add size guide, fit notes, care details, comparison context, return policy summary, and review highlights to every product page. Double conversion rate typically achieved within 60 days." },
        { mistake: "No upsells or product recommendations", impact: "Without strategic cross-sells and post-add-to-cart upsells, your AOV is whatever the customer decides to spend without guidance. Industry data shows 35% of Amazon's revenue comes from recommended products — a mechanism most independent eCommerce stores completely ignore.", fix: "Three upsell touchpoints: (1) product page 'frequently bought together' and 'complete the look' sections, (2) cart page upsell: one recommended item with one-click add, (3) post-purchase upsell: one-click offer for a complementary item on the confirmation page. Combined AOV lift: 20–40%." }
      ],
      tools: ["Shopify/Shopify Plus", "Next.js Commerce", "WooCommerce", "Klaviyo (email)", "ReCharge (subscriptions)", "Google Analytics 4 + GA4 eCommerce", "Hotjar", "Cloudflare"],
      timeline: {
        m1: "Store architecture, product pages, checkout optimization, express checkout, mobile UX.",
        m2: "Upsell system, bundle builder, review integration, abandoned cart setup.",
        m3: "SEO product catalog optimization. Loyalty program. CRO A/B testing launched.",
        m6: "Full revenue stack operating. AOV improvements measured. Organic product traffic growing.",
        m12: "Leading CVR vs. industry average. SEO driving significant organic product revenue."
      },
      keywords: [
        "eCommerce website development", "Shopify website design", "custom eCommerce store",
        "WooCommerce development", "eCommerce CRO agency", "online store development [niche]",
        "Shopify store design", "eCommerce website design"
      ],
      caseStudy: {
        client: "Altitude Outdoor Gear",
        location: "Denver, CO (online-first)",
        before: "1.1% CVR, $68 AOV, 78% mobile bounce rate",
        after: "3.4% CVR, $112 AOV, 31% mobile bounce rate",
        leads: "Revenue increased from $380K to $940K/mo on same traffic",
        period: "7 months",
        highlight: "Post-purchase one-click upsell alone added $28K/mo in revenue on zero additional traffic"
      },
      localVsNational: {
        local: "Local eCommerce with pickup or regional delivery needs local SEO integration, Google Local Inventory Ads feed, and location-specific landing pages.",
        national: "National eCommerce brands need multi-currency support, tax compliance by jurisdiction, fulfillment logic, and international shipping UX built into the store architecture."
      },
      faqs: [
        { q: "Shopify vs. custom Next.js for eCommerce — which should I use?", a: "Shopify for most DTC brands: fastest launch, best app ecosystem, managed hosting. Custom Next.js for brands with complex product logic, subscription models, or specific performance requirements that Shopify's theme architecture limits. We help you choose based on your catalog complexity, custom feature needs, and growth trajectory." },
        { q: "What's the most impactful thing I can do to increase eCommerce revenue?", a: "Increase your conversion rate — not traffic. A 1% CVR improvement on most stores generates more revenue than doubling ad spend. Start with page speed optimization, mobile checkout UX, and product page objection handling. These three changes account for 70%+ of CVR improvements we achieve." },
        { q: "How do I reduce shopping cart abandonment?", a: "Five interventions: (1) Guest checkout option, (2) 3-step checkout maximum, (3) Express checkout options (Apple Pay, Google Pay), (4) Exit-intent popup with incentive (free shipping, 10% off), (5) Abandoned cart email sequence (3 emails over 7 days). Together, these recover 15–25% of abandoned carts." },
        { q: "How do I increase average order value without increasing traffic?", a: "Four levers: (1) Product page 'frequently bought together' section, (2) Cart page upsell widget (one item, one-click add), (3) Bundle builder with bundle discount incentive, (4) Post-purchase one-click upsell. Combined AOV lift typically 20–40% without changing a word of ad copy." },
        { q: "How important is page speed for an eCommerce store?", a: "Every 100ms of load delay reduces conversion rate by 1%. A product page loading in 5 seconds loses 40% of its conversion potential vs. a 1-second page. Page speed is the highest-leverage technical investment in eCommerce — with a clear, measurable ROI." },
        { q: "Should I migrate from WooCommerce to Shopify?", a: "Depends on what's limiting you. WooCommerce limitations that justify migration: hosting performance issues, maintenance burden, plugin conflicts. Reasons to stay: deep WordPress SEO integration, complex product customization, large existing content investment. We audit before recommending." },
        { q: "How do I set up product recommendations on my eCommerce site?", a: "Three types: collaborative filtering (Shopify AI, Nosto, Klevu), rule-based cross-sell (manually curated 'goes with this'), and purchase-based 'frequently bought together.' We implement all three in sequence: start with rule-based for immediate control, graduate to AI-driven recommendations as order data accumulates." },
        { q: "How long does it take to build a custom eCommerce store?", a: "Shopify theme customization: 4–8 weeks. Custom Shopify section development: 6–10 weeks. Full custom Next.js commerce build: 10–16 weeks. Timeline depends on product catalog complexity, custom features (bundle builder, quiz, subscription), and integration requirements." }
      ]
    },

    // ─── 5. HEALTHCARE ────────────────────────────────────────────────
    {
      slug: "healthcare",
      name: "Healthcare Practices",
      icon: "🏥",
      tagline: "A Website Built for Patient Trust. Healthcare Web Development That Grows Your Practice.",
      heroSubtitle: "Patients choose healthcare providers based on trust, credentials, and digital first impressions. A custom healthcare website that communicates expertise, accepts new patient bookings, and ranks organically for your specialties.",
      overview: "Healthcare website requirements are unique: HIPAA considerations for any data collection, strict accuracy requirements for medical content, online scheduling integrations with EHR systems, and insurance acceptance as a primary patient filter — all within a design framework that communicates warmth, competence, and safety.\n\nMost healthcare practice websites fail in at least one dimension: they're visually generic and forgettable, they don't rank for specialty or condition-specific searches, they have no online scheduling, or their patient intake forms create HIPAA exposure. Any of these failures costs the practice patients every month.\n\nRankston builds healthcare websites that meet the intersection of regulatory compliance, clinical credibility, and patient conversion — websites that earn patient trust before the first appointment and capture new patient requests around the clock.",
      stats: [
        { val: "HIPAA", label: "compliant patient intake and data handling architecture" },
        { val: "77%", label: "of patients research a healthcare provider online before booking" },
        { val: "Online", label: "scheduling: reduces new patient no-shows by 35–45%" },
        { val: "Specialty", label: "pages: rank for condition and treatment searches organically" }
      ],
      painPoints: [
        { title: "No HIPAA-Compliant Online Patient Intake", desc: "Standard web forms without HIPAA-compliant data handling create regulatory liability for healthcare practices. New patient intake must be handled through HIPAA-compliant form tools or EHR patient portal integrations." },
        { title: "No Online Scheduling Integration", desc: "Patients expect to be able to schedule appointments online. A practice without online scheduling loses patients to competitors with real-time availability — especially for first-time patient appointments." },
        { title: "No Specialty or Condition-Specific Pages", desc: "Patients search for their specific condition or treatment: 'orthopedic knee surgeon [city],' 'anxiety therapist near me,' 'sleep apnea specialist [city].' Without specialty pages targeting these searches, the practice is invisible to high-intent patients." },
        { title: "Insurance and Billing Page Missing or Buried", desc: "Insurance acceptance is the #1 filter for most patients. If insurance information requires clicking through multiple pages or calling to verify, patients move to a competitor who lists it clearly." },
        { title: "Provider Bio Pages That Read Like CVs", desc: "Patients want to know their provider is qualified and that they'll feel comfortable in their care. A list of credentials and publications doesn't communicate warmth or practice philosophy — the human factors patients actually decide on." },
        { title: "ADA Accessibility Not Implemented", desc: "Healthcare websites are more likely to be accessed by patients with disabilities than almost any other type of site. ADA/WCAG compliance is not optional — it's expected and legally recommended for healthcare organizations." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Healthcare Practices",
        intro: "Healthcare web development wins through HIPAA-compliant infrastructure, online scheduling integration, specialty content pages, and provider credibility design that converts patient research into booked appointments.",
        pillars: [
          { title: "HIPAA-Compliant Patient Infrastructure", desc: "Data handling must be correct before anything else is built", tactics: ["HIPAA-compliant form tool: Jotform HIPAA, Formstack HIPAA, or EHR portal", "SSL and encrypted data transit on all patient-facing pages", "Business Associate Agreements (BAA) with all relevant third-party tools", "No standard Google Analytics form field capture on intake forms"] },
          { title: "Specialty & Condition Content Architecture", desc: "Rank for the conditions and treatments your patients search for", tactics: ["Specialty pages: each major specialty with 800+ words of patient-appropriate content", "Condition pages: specific conditions treated, symptoms, treatment approach", "Treatment pages: procedure descriptions, candidacy, recovery, FAQ", "FAQ schema: capturing 'People Also Ask' real estate for medical queries"] },
          { title: "Provider Authority & Patient Trust Design", desc: "Patients choose providers; they need to see the human behind the credentials", tactics: ["Provider bio pages: credentials + philosophy + patient approach + headshot", "Patient testimonials and Google reviews integration (HIPAA disclaimer noted)", "Provider video introduction: 60-second 'meet your doctor' embed", "Certifications, awards, hospital affiliations displayed prominently"] }
        ]
      },
      services: [
        "Healthcare Website Design", "HIPAA-Compliant Form Integration",
        "Online Scheduling System (EHR)", "Specialty & Condition Pages",
        "Provider Bio Page Design", "Insurance Acceptance Page",
        "Patient Portal Link Integration", "Medical SEO Architecture",
        "ADA/WCAG Accessibility", "Google Reviews Integration",
        "Mobile-First Responsive Design", "Core Web Vitals Optimization"
      ],
      commonMistakes: [
        { mistake: "Standard web forms collecting patient info without HIPAA compliance", impact: "A generic contact form asking for 'Your Condition' or 'Symptoms' without HIPAA-compliant data handling creates potential liability. Standard form tools (Google Forms, basic Gravity Forms) do not provide HIPAA BAAs — making any data submission a potential violation.", fix: "HIPAA-compliant form tools with active BAAs: Jotform HIPAA, Formstack with BAA, or the practice's EHR patient portal. All new patient intake, symptom descriptions, and appointment requests handled through compliant infrastructure. Standard forms used only for non-PHI inquiries." },
        { mistake: "One 'Our Services' page for all specialties and treatments", impact: "A page listing '50 services we provide' can't rank for any of them and can't convert a patient searching for a specific condition or treatment. The patient finds a competitor with a dedicated page about their exact condition.", fix: "Individual specialty pages (Orthopedics, Cardiology, Neurology) plus condition and treatment subpages within each. Each page patient-oriented, 600+ words, describing the condition, symptoms, treatment approach, and candidacy. These pages rank independently for every condition the practice treats." },
        { mistake: "No online scheduling — new patients must call to book", impact: "Patients researching healthcare providers at 9pm decide to book based on the digital experience. A practice that requires a phone call to schedule loses the after-hours decision-maker to the competitor with real-time online scheduling.", fix: "EHR-integrated online scheduling: Zocdoc, Phreesia, or your EHR's native patient portal scheduling. Real-time availability for new patient appointments. Confirmation and reminder emails automated through the scheduling system. New patient capture 24/7 without staff involvement." },
        { mistake: "Insurance list requires calling to verify", impact: "Insurance is the first filter in provider selection for most privately insured patients. A website that doesn't list accepted plans forces a call that most prospective patients won't make — they choose a provider whose website clearly lists their insurance.", fix: "Dedicated insurance and billing page listing all accepted plans by insurer name. Insurance section on the homepage summarizing major networks accepted. 'Accept your insurance? Check here' link in the navigation. Eliminate insurance uncertainty as a barrier to booking." }
      ],
      tools: ["Next.js/React", "Jotform HIPAA / Formstack", "Zocdoc / Practice-Fusion API", "Google Analytics 4 (non-PHI)", "Contentful", "Vercel", "WCAG Accessibility Checker"],
      timeline: {
        m1: "HIPAA-compliant infrastructure, scheduling integration, specialty pages, insurance page.",
        m2: "Provider bios, reviews integration, condition pages, accessibility audit.",
        m3: "Medical SEO architecture complete. Local search optimization. Schema markup.",
        m6: "Organic specialty rankings improving. New patient pipeline from organic.",
        m12: "Dominant specialty organic presence. Full new patient capture system operational."
      },
      keywords: [
        "healthcare website design", "medical practice website development", "HIPAA compliant website",
        "doctor website design [city]", "medical SEO website", "healthcare web developer",
        "patient scheduling website", "[specialty] practice website"
      ],
      caseStudy: {
        client: "Apex Orthopedic Group",
        location: "Phoenix, AZ",
        before: "Generic template, 6 new patient inquiries/mo, no online scheduling",
        after: "Custom site, 52 new patient inquiries/mo, 71% book online",
        leads: "46 incremental new patients/mo from website improvements",
        period: "7 months",
        highlight: "'Knee replacement surgery Phoenix' specialty page ranked #4 organically — 290 visits/mo"
      },
      localVsNational: {
        local: "Single-location practices need local geo-targeted specialty pages, local insurance acceptance emphasis, and Google Business integration for local search dominance.",
        national: "Health systems and multi-location practices need location-level scheduling systems, centralized provider databases, and specialty content templates deployed across all locations."
      },
      faqs: [
        { q: "What does HIPAA compliance mean for a healthcare website?", a: "HIPAA compliance for websites means: using HIPAA-compliant form tools with active Business Associate Agreements (BAAs) for any patient data collection, encrypted data transmission, and no unauthorized third-party access to Protected Health Information (PHI). We build all healthcare sites with compliant infrastructure." },
        { q: "Can I use regular Google Analytics on a healthcare website?", a: "Google Analytics is acceptable for general traffic tracking as long as it's not capturing PHI. We configure GA4 to exclude form field data capture and redact any URL patterns containing patient-identifiable parameters. More sensitive analytics needs may require a HIPAA-compliant analytics tool." },
        { q: "What's the best online scheduling system for medical practices?", a: "Depends on your EHR. Zocdoc is the most patient-facing consumer platform. Epic MyChart, Athenahealth, and Practice Fusion all have native patient portal scheduling. We recommend integrating your EHR's scheduling rather than a third-party overlay to avoid double-booking and ensure EMR data capture." },
        { q: "How do I get specialty pages to rank on Google?", a: "800+ words of patient-appropriate content per specialty, covering: what the specialty treats, common conditions, treatment approach, what to expect during a first visit, and FAQ. Condition-specific subpages within each specialty rank for the specific searches patients make: '[condition] specialist [city],' '[treatment] near me.'" },
        { q: "Should a healthcare website have a blog?", a: "Yes — a medical blog publishing patient-education content creates ongoing organic traffic from health searchers who may become patients. Topics: condition explanations, treatment recovery timelines, what to expect from procedures. Every article should have a 'schedule an appointment' CTA." },
        { q: "Do I need ADA accessibility on my healthcare website?", a: "Yes — healthcare websites are legally recommended to meet ADA/WCAG 2.1 AA standards, and practically necessary given that many healthcare website visitors have the disabilities your practice may treat. We build all healthcare websites to WCAG 2.1 AA compliance and provide an accessibility audit report at launch." },
        { q: "How do I handle Google reviews on a healthcare website?", a: "Google reviews can be displayed on a healthcare website with appropriate HIPAA considerations: reviews are public information, not PHI. We embed Google reviews using the Places API. Patient responses to reviews should not include any PHI — responses should be generic and invite direct contact for specifics." },
        { q: "How long does it take to build a healthcare practice website?", a: "8–12 weeks for a complete healthcare website with specialty pages, HIPAA-compliant forms, scheduling integration, and provider bios. Larger multi-provider or multi-location practices take 12–18 weeks. HIPAA infrastructure setup adds 1–2 weeks vs. a standard website build." }
      ]
    },

    // ─── 6. PLUMBERS ──────────────────────────────────────────────────
    {
      slug: "plumbers",
      name: "Plumbers",
      icon: "🔧",
      tagline: "A Website That Answers the Call at 2am. Plumber Web Development Built for Emergency and Scheduled Jobs.",
      heroSubtitle: "When pipes burst, homeowners Google first. A fast, mobile-optimized plumbing website with emergency call CTAs and service area coverage captures jobs before the call even happens — from the driveway or the flooded bathroom floor.",
      overview: "Plumbing website visitors split into two categories: homeowners with an emergency right now, and those planning a scheduled project like a water heater replacement or bathroom renovation. These are different visitors with different needs — and a single generic plumbing homepage that doesn't address both loses half its potential jobs immediately.\n\nFor emergency visitors, the website has three seconds to deliver: one click to call, service area confirmation, and 'available 24/7' signal. For project visitors, the site needs service pages, before/after photos, pricing ranges, and a quote request form.\n\nRankston builds plumbing websites architected for both visitor types — with emergency UX that converts the panicking homeowner in 3 seconds, and project service pages that rank organically and convert the deliberate planner with quotes and social proof.",
      stats: [
        { val: "3 sec", label: "window to convert an emergency plumbing visitor before they call a competitor" },
        { val: "72%", label: "of plumbing searches happen on mobile (often mid-emergency)" },
        { val: "24/7", label: "emergency availability signal is the #1 conversion factor for burst pipe searches" },
        { val: "Service", label: "area pages: rank organically in every city and neighborhood you serve" }
      ],
      painPoints: [
        { title: "Emergency CTA Not Immediate Above the Fold", desc: "A homeowner with water flooding their kitchen will click the first phone number they can find. If your website requires scrolling to find a phone number, they've already called a competitor. The emergency phone CTA must be in the sticky header and the first fold." },
        { title: "No Service Area Pages", desc: "'Plumber near me' searches are location-specific. A website without city and neighborhood service area pages is invisible for searches in the surrounding communities you serve — even if you operate there every day." },
        { title: "No Service-Specific Pages", desc: "'Emergency plumber' and 'water heater installation' are different searches requiring different pages. A single plumbing services page can't rank for every service type and can't convert visitors arriving from specific service searches." },
        { title: "No Before/After Job Photos", desc: "Homeowners choosing a plumber for a $2,000 water heater replacement or bathroom rough-in want visual evidence of clean, professional work. Before/after photos of actual completed jobs build trust that text descriptions never match." },
        { title: "Slow Mobile Load Speed", desc: "72% of plumbing searches happen on mobile — often from the location of the problem. A plumbing website loading in 6 seconds on a mobile connection is failing during the exact moment a homeowner needs it most." },
        { title: "No Online Quote Request for Non-Emergency Jobs", desc: "Homeowners scheduling non-emergency plumbing work (fixture replacement, bathroom renovation) prefer to submit a project description and receive a quote. Without an online quote form, these planner-type leads don't convert." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Plumbers",
        intro: "Plumbing web development wins through emergency-first UX, service area pages for every community served, service-specific pages for organic rankings, and quote request systems for planned projects.",
        pillars: [
          { title: "Emergency-First UX Architecture", desc: "The emergency visitor gets what they need in 3 seconds or they're gone", tactics: ["Sticky header: phone number + 'Call Now — Available 24/7' always visible", "Above-fold: service area cities listed, emergency messaging, one-click call", "Schema: LocalBusiness with openingHours, EmergencyService markup", "Mobile tap-to-call on every page, no zoom or scrolling required"] },
          { title: "Service Area Page System", desc: "Rank in every city and community in your service area", tactics: ["Individual pages per city: '[City] Plumber,' 'Plumbing Services [City]'", "Neighborhood pages for high-density urban markets", "Service area map displayed on homepage and service area index page", "Local testimonials embedded on each city page"] },
          { title: "Service Page Architecture", desc: "Each major service type has its own SEO and conversion page", tactics: ["Emergency plumbing page: burst pipes, flooding, emergency shutoff guidance", "Water heater page: replacement, installation, tankless options, pricing range", "Drain cleaning page: methods, timeline, prevention tips", "Bathroom/Kitchen plumbing page: renovation projects, fixture installation"] }
        ]
      },
      services: [
        "Plumbing Website Design", "Emergency CTA Architecture",
        "Service Area Page System", "Service-Specific Pages",
        "Before/After Job Gallery", "Online Quote Request Form",
        "Google Reviews Integration", "Local Plumbing SEO Architecture",
        "Mobile-First Responsive Design", "Page Speed Optimization",
        "Schema Markup (LocalBusiness)", "Google Business Integration"
      ],
      commonMistakes: [
        { mistake: "Phone number not immediately visible on mobile", impact: "72% of plumbing searches are mobile. If a homeowner has to scroll down on their phone to find a phone number during a plumbing emergency, they've already called the competitor whose number was in the header.", fix: "Sticky mobile header with tap-to-call phone number and 'Call Now — 24/7' label that remains visible as the user scrolls. Secondary click-to-call buttons within the first fold. Every page on the site — phone visible at all times without scrolling on mobile." },
        { mistake: "No service area pages — only one general location", impact: "Plumbing searches in surrounding cities ('plumber [suburb name]') return local results. Without individual city pages, your site is invisible for these searches — even if you service those communities daily.", fix: "Individual service area pages for every city, town, and major neighborhood in your territory. 300–500 words per page covering your presence in that area, response time, local testimonials, and services available. Each page targets '[City] plumber' and '[City] plumbing services' independently." },
        { mistake: "No before/after project photos", impact: "Homeowners selecting a plumber for a $1,500–$5,000 project want evidence of professional, clean work. Without job photos, you're asking for a significant financial commitment with only text promising quality.", fix: "Before/after gallery organized by job type: water heater installations, bathroom plumbing, drain work, emergency repairs. Real job photos from your actual work — taken on a phone camera at completion. Quality of the work, not production quality of the photo, is what builds trust." },
        { mistake: "Only a contact form — no phone number emphasis", impact: "Emergency plumbing visitors won't fill out a form. A contact form as the primary call-to-action assumes the visitor has time to type and wait for a response — which is fundamentally mismatched with the emergency plumbing visitor experience.", fix: "Phone number as primary CTA everywhere. Contact form as secondary CTA for quote requests and non-emergency inquiries. Explicit messaging: 'For emergencies, call now. For quotes, use the form below.' Both calls-to-action serve their respective visitor type." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "CallRail (call tracking)", "ServiceTitan / Jobber API", "Google Analytics 4", "Vercel", "Google Maps Embed API"],
      timeline: {
        m1: "Design, emergency UX, core pages, service area pages (top 5 cities), quote form.",
        m2: "Service-specific pages, job gallery, reviews integration, all service area pages.",
        m3: "SEO optimized. Schema markup. Local citations. Google Business sync.",
        m6: "Service area pages ranking. New job inquiries from organic traffic.",
        m12: "Dominant local plumbing web presence. Service area and service pages all ranking."
      },
      keywords: [
        "plumber website design", "plumbing company website", "emergency plumber website",
        "plumbing website development [city]", "plumber web design", "plumbing service website"
      ],
      caseStudy: {
        client: "ClearFlow Plumbing",
        location: "Sacramento, CA",
        before: "Generic template, 5 web leads/mo, emergency callers couldn't find the phone number",
        after: "Custom site, 38 web leads/mo, 52% from service area city pages",
        leads: "33 incremental leads/mo — avg job value $680 = $22,400/mo incremental revenue",
        period: "5 months",
        highlight: "Service area pages for 8 Sacramento suburbs each ranking page 1 for '[suburb] plumber'"
      },
      localVsNational: {
        local: "Single-territory plumbing companies need city and neighborhood service area pages, local testimonials per area, and emergency response time messaging.",
        national: "Plumbing franchises and multi-location operations need location-level websites with centralized brand standards and emergency service pages per service territory."
      },
      faqs: [
        { q: "What should a plumbing website home page include?", a: "Sticky header with phone number and 24/7 availability. Above-fold emergency messaging with service areas listed. Core services overview. Before/after job photos. Google reviews. Service area map. Trust signals: licensed, insured, years in business. Every element serves either the emergency caller or the quote requester." },
        { q: "How many service area pages should a plumbing website have?", a: "One per city or major neighborhood in your service territory. For a plumbing company serving a metro area of 12 communities, that's 12 service area pages. Each page creates independent organic search visibility for that community — ranking for '[city] plumber' without competing with your home page." },
        { q: "How do I rank for emergency plumbing searches?", a: "Emergency plumbing SEO: dedicated emergency plumbing page with 24/7 availability emphasis, fast mobile load speed (emergency searches are mobile), service area coverage clarity, and LocalBusiness schema with openingHours including '24 hours.' Google Maps presence with 'open 24 hours' verified in Google Business Profile." },
        { q: "Should a plumbing website show pricing?", a: "Price ranges for common jobs (water heater replacement: $600–$1,200) reduce phone calls about pricing and pre-qualify prospects who are prepared to pay your rates. Exact pricing is not recommended — too many variables per job. Ranges with 'get a free estimate' CTAs work best." },
        { q: "What's the most important feature on a plumbing website?", a: "Mobile tap-to-call accessibility. 72% of plumbing website visitors are on mobile — many during an emergency. If they can't tap to call immediately, they're calling a competitor. Everything else (SEO, design, content) is secondary to the most fundamental feature: connecting an emergency caller to your phone in under 3 seconds." },
        { q: "How do I get Google reviews on my plumbing website?", a: "Google Places API displays live reviews automatically. Third-party review platforms (Birdeye, Podium) aggregate Google and other platforms. Display reviews most prominently on the homepage and individual service area pages — local reviews ('Great plumber in Roseville!') on the relevant city pages." },
        { q: "Should I have a separate page for emergency plumbing?", a: "Yes — a dedicated emergency plumbing page targeting 'emergency plumber [city],' '24/7 plumber near me,' 'burst pipe plumber near me.' This page has its own SEO value and converts the emergency visitor who searched specifically for emergency plumbing services. Different content, different urgency, different conversion path." },
        { q: "How long does it take to build a plumbing website?", a: "4–8 weeks for a complete plumbing website with service pages, service area pages, emergency UX, and job gallery. The bulk of build time is service area page creation — more service areas = more time. We can launch a core site in 4 weeks and add service area pages in the weeks following." }
      ]
    },

    // ─── 7. ROOFING ───────────────────────────────────────────────────
    {
      slug: "roofing",
      name: "Roofing Companies",
      icon: "🏠",
      tagline: "A Website That Captures Storm Chasers and Project Planners. Roofing Web Development That Books Inspections.",
      heroSubtitle: "Homeowners searching for roofing after a storm or planning a replacement are ready to act. A fast, trust-building roofing website that ranks locally, showcases your work, and captures inspection requests wins the job before competitors respond.",
      overview: "Roofing websites face a unique dual-audience challenge: storm damage emergency searchers who need to act immediately, and homeowners proactively planning a roof replacement who are researching for weeks before requesting an estimate. Both need the same fundamental things — trust signals, social proof, and an easy path to requesting an inspection — but with different messaging urgency and content depth.\n\nThe trust equation in roofing is high-stakes: a roof replacement is a $8,000–$25,000 decision. Homeowners are acutely aware of horror stories about storm chasers and fly-by-night contractors who disappear after taking a deposit. A website that communicates local credibility, licensing, and insurance documentation with real job photos and Google review integration addresses these fears before the prospect ever calls.\n\nRankston builds roofing websites engineered for local market dominance — with storm damage response pages, inspection request workflows, material showcase galleries, and service area pages that capture organic searches in every community where you work.",
      stats: [
        { val: "$14K", label: "avg roof replacement value — website trust is the deciding factor" },
        { val: "Storm", label: "damage response pages: time-sensitive ranking opportunity post-severe weather" },
        { val: "5-star", label: "Google reviews prominently displayed: #1 trust factor for new roofing clients" },
        { val: "Before/After", label: "gallery: converts the undecided homeowner better than any ad" }
      ],
      painPoints: [
        { title: "No Storm Damage Response Page", desc: "After major hail or wind events, search volume for 'storm damage roof repair [city]' spikes within 24 hours. Without a storm damage page already optimized and indexed, new roofers entering the search results while your site has no relevant page." },
        { title: "No Before/After Photo Gallery", desc: "For a $15,000 decision, homeowners want to see your actual completed roofs. A website with stock photos or no gallery fails to demonstrate real-world quality and loses the visual comparison to competitors who show their work." },
        { title: "No Licensing, Insurance, and Warranty Prominently Displayed", desc: "Homeowners are protective about roof scams. If your licensing number, insurance certificate, and warranty terms aren't easy to find on your website, skeptical homeowners choose the competitor who prominently displays these trust signals." },
        { title: "No Material Showcase or Options Education", desc: "Homeowners replacing a roof often don't know the difference between 3-tab and architectural shingles, or metal vs. tile. A website with educational material pages builds authority and keeps the homeowner on your site during their research phase." },
        { title: "Service Area Coverage Not Clear", desc: "Roofing is regional — homeowners want to know if you serve their area before they read anything else. Without immediate service area clarity, potential customers bounce to verify you operate in their location with a competitor." },
        { title: "Inspection Request Flow Too Complex", desc: "A homeowner ready to request a free inspection should be able to do so in 60 seconds. Multi-page forms with too many fields lose prospects in the form completion step — at the exact moment of highest intent." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Roofing Companies",
        intro: "Roofing web development wins through storm damage response pages, before/after photo galleries, trust-signal transparency, material education content, and streamlined inspection request workflows.",
        pillars: [
          { title: "Trust Signal Architecture", desc: "Address the contractor scam fear directly through transparent credibility display", tactics: ["License number displayed prominently with state contractor board link", "Insurance certificate details: general liability and workers comp", "Manufacturer certifications: GAF Master Elite, CertainTeed Select", "Warranty terms displayed on every relevant page: workmanship + material"] },
          { title: "Storm Response & Service Area System", desc: "Be ready for weather events and rank in every community you serve", tactics: ["Storm damage page: ready to rank for post-storm searches, with photos", "Service area pages: city-level pages for every community in your territory", "Emergency inspection request: 24-hour response commitment, prominent CTA", "Insurance claim assistance messaging: differentiate from cash-pay replacement focus"] },
          { title: "Material Education & Project Gallery", desc: "Keep the researching homeowner on your site through their entire decision process", tactics: ["Material pages: asphalt shingles, metal roofing, tile, flat/TPO — with pros/cons", "Before/after gallery: organized by material type and project scope", "Cost guide page: price ranges by material and roof size — pre-qualifies buyers", "Maintenance guide: creates returning organic traffic and demonstrates expertise"] }
        ]
      },
      services: [
        "Roofing Website Design", "Storm Damage Response Page",
        "Service Area Page System", "Before/After Project Gallery",
        "Material Showcase Pages", "Trust Signal Architecture",
        "Inspection Request Form", "Insurance Claim Assistance Page",
        "Google Reviews Integration", "Roofing SEO Architecture",
        "Mobile-First Responsive Design", "Page Speed Optimization"
      ],
      commonMistakes: [
        { mistake: "No storm damage page before storm season", impact: "After a major hail or wind event, homeowners search 'storm damage roof repair [city]' and insurance related terms within hours. A roofing company without a pre-built, optimized storm damage page misses the highest-urgency, highest-value traffic surge of the year.", fix: "Storm damage response page built, optimized, and indexed before storm season. Content: how to document damage, emergency tarp service, insurance claim process, photo inspection request. When a storm hits, update the page with event-specific content (hail size, affected areas). Be the first credible result for storm searchers." },
        { mistake: "No before/after gallery — stock photos only", impact: "Homeowners spending $10,000–$25,000 on a roof need to see your actual work. Stock roofing photos communicate 'generic contractor' — not 'the skilled local company I can trust with my most expensive home investment.' Stock photo sites lose the visual trust test every time vs. real job galleries.", fix: "Before/after gallery with real job photos — minimum 20 completed projects, organized by material type and neighborhood where possible. Phone camera quality is fine — authenticity matters more than production quality. Local neighborhoods mentioned in captions build geographic trust." },
        { mistake: "No licensing and insurance information on the site", impact: "Homeowners have been burned by unlicensed contractors before, or they know someone who has. Without a license number and insurance certificate displayed on the website, your credibility is unknown — and skeptical homeowners choose the competitor who publishes these credentials clearly.", fix: "License page or section: state license number with link to contractor board lookup, insurance certificate summary (type and coverage amount), manufacturer certifications (GAF, CertainTeed, etc.), and BBB accreditation if applicable. Trust signals reduce the evaluation barrier for high-stakes projects." },
        { mistake: "Multi-page inspection request form", impact: "A homeowner ready to request a free roof inspection who encounters a 10-field, multi-page form will abandon before completion. Friction at the highest-intent moment costs inspection appointments that would otherwise become $15,000 projects.", fix: "3-field inspection request on every page: Name, Phone, Address. Everything else collected at the inspection appointment. Get the contact and appointment first — qualify the project at the door. 3-field forms convert at 2–5× the rate of multi-field forms for roofing inspection requests." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "AccuLynx/JobProgress API", "CallRail", "Google Analytics 4", "Vercel", "Cloudflare", "Google Maps API"],
      timeline: {
        m1: "Design, trust architecture, storm damage page, service area pages, inspection form.",
        m2: "Material pages, before/after gallery, reviews integration, insurance page.",
        m3: "SEO complete. Schema markup. Local citations. Service area rankings improving.",
        m6: "Organic service area rankings established. Inspection requests growing from organic.",
        m12: "Dominant local roofing web presence. Storm season ready with optimized response page."
      },
      keywords: [
        "roofing website design", "roofing company website", "storm damage roof website",
        "roof replacement website [city]", "roofing web development", "roofer website design"
      ],
      caseStudy: {
        client: "Summit Roofing Solutions",
        location: "Dallas, TX",
        before: "Generic site, 7 inspection requests/mo, no storm damage page",
        after: "Custom site, 44 inspection requests/mo post build; storm page drove 190 requests after Q2 hail event",
        leads: "44 regular + 190 storm-surge inspection requests — $2.1M in project value over 3 months",
        period: "8 months including storm season",
        highlight: "Pre-built storm damage page ranked #1 for 'Dallas hail damage roof repair' within 4 weeks of the hail event"
      },
      localVsNational: {
        local: "Independent roofing contractors need geo-targeted service area pages, local manufacturer certifications, and local Google review integration.",
        national: "Roofing franchise networks and regional operators need location-level websites with centralized brand standards, territory-specific storm response pages, and national manufacturer certification management."
      },
      faqs: [
        { q: "What should a roofing company website home page include?", a: "Service area coverage (confirm you serve them), inspection request CTA, trust signals (licensed, insured, manufacturer certified), before/after gallery preview, Google reviews, storm damage CTA, and material showcase link. The homepage exists to immediately confirm credibility and convert to an inspection request." },
        { q: "When should I build my storm damage response page?", a: "Before storm season — typically January for hail/spring storm markets, September for hurricane markets. Pre-built pages are already indexed when weather events hit. A page built after a storm takes 2–6 weeks to rank — missing the highest-traffic window." },
        { q: "How do I rank for local roofing searches in multiple cities?", a: "Service area pages: individual pages for every city and community in your service territory. Each page targeting '[city] roofing company,' '[city] roof replacement,' and '[city] storm damage roof repair.' 300–500 words per page, local testimonials where possible, and service area map embedded." },
        { q: "Should I show roofing prices on my website?", a: "Price ranges by material and approximate roof size work well: 'Asphalt shingle replacement: $6,000–$14,000 for a typical 1,500 sq ft roof.' Ranges pre-qualify budget and reduce low-ball estimate shoppers without locking you into a fixed price before seeing the job." },
        { q: "How important are Google reviews for a roofing company website?", a: "Critical — roofing is a high-trust, high-dollar purchase where peer validation is the primary decision factor. Displaying Google reviews prominently (50+ reviews at 4.8+ stars) addresses the contractor scam concern more effectively than anything else on the page. Get reviews from every completed job." },
        { q: "What should a roofing inspection request form include?", a: "Three fields: Name, Phone, Property Address. The goal is to capture the contact and schedule the visit — everything else (roof size, damage type, insurance details) is gathered at the inspection. Short forms convert at 3–5× the rate of long forms for inspection requests." },
        { q: "How do I build trust on a roofing website for high-dollar projects?", a: "Five trust layers: (1) State license number with verification link, (2) Insurance certificate (type and coverage), (3) Manufacturer certifications (GAF Master Elite, CertainTeed Select), (4) 50+ Google reviews prominently displayed, (5) Before/after gallery of 20+ local jobs. Each layer addresses a specific homeowner fear." },
        { q: "How long does a roofing website take to build?", a: "5–8 weeks for a complete roofing website with service area pages, storm damage page, material pages, and gallery system. Service area coverage area determines the bulk of the timeline — more communities served = more pages to create. Core site can launch in 4 weeks with area pages added in phases." }
      ]
    },

    // ─── 8. RESTAURANTS ───────────────────────────────────────────────
    {
      slug: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      tagline: "A Website That Fills Tables. Restaurant Web Development That Drives Reservations and Orders.",
      heroSubtitle: "Dining decisions happen online before they happen at the host stand. A restaurant website that loads instantly, showcases your food beautifully, and takes reservations directly keeps guests coming back — without paying third-party commissions.",
      overview: "Third-party delivery and reservation platforms (OpenTable, Yelp, DoorDash, Uber Eats) have trained diners to search and book through their platforms — charging restaurants 15–30% commission on every order and reservation. The restaurants winning the direct booking game have websites compelling enough to convert visitors who find them through Google, Instagram, or word of mouth directly — without the intermediary.\n\nA restaurant website's job is immediate: load fast, display the menu beautifully, show the ambiance, display hours and location clearly, and provide a frictionless direct reservation or order path. Every element not serving one of these functions is friction reducing conversion.\n\nRankston builds restaurant websites engineered for direct conversion — with online reservation systems, online ordering integration, Google Business sync, and visual design that communicates your dining experience so compellingly that guests book before they check OpenTable.",
      stats: [
        { val: "30%", label: "avg third-party platform commission on restaurant reservations and orders" },
        { val: "Direct", label: "reservations from your website = zero commission on every cover" },
        { val: "43%", label: "of diners visit a restaurant's website before deciding to dine in" },
        { val: "Mobile", label: "first: 78% of restaurant website visits are on mobile devices" }
      ],
      painPoints: [
        { title: "Paying 30% Commission to OpenTable and Third-Party Platforms", desc: "Every reservation and online order placed through a third-party platform costs 15–30% in commission. A restaurant doing 200 covers/month at $45 average check through OpenTable is paying $2,700/month in commissions that a direct booking website eliminates." },
        { title: "PDF Menu That Doesn't Work on Mobile", desc: "A PDF menu that requires pinching, zooming, and sideways scrolling on a phone creates the opposite of appetite — frustration. Mobile visitors who can't read the menu leave without booking." },
        { title: "No Online Reservation System — Phone Only", desc: "43% of dining decisions happen outside business hours. A restaurant without online reservations loses every diner who decides to book at 10pm when the phone isn't answered." },
        { title: "Slow Website That Doesn't Reflect the Dining Experience", desc: "A restaurant spending $50,000 on interior design to create a premium atmosphere loses the first impression battle if their website loads in 8 seconds on a phone. The website is the first experience of the brand." },
        { title: "No Occasion-Specific Landing Pages", desc: "Private dining, Valentine's Day, Christmas parties, and birthday reservations drive disproportionate revenue but require dedicated pages to rank for occasion-specific searches and convert occasion-intent visitors." },
        { title: "Photos That Don't Make Guests Hungry", desc: "Dark, blurry, or phone camera food photos on a restaurant website communicate carelessness. Professional food photography is not optional for a restaurant competing on experience and cuisine quality." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Restaurants",
        intro: "Restaurant web development wins through direct reservation integration, commission-free online ordering, mobile-optimized menu, food photography that drives appetite, and occasion pages that capture high-value private dining searches.",
        pillars: [
          { title: "Direct Reservation & Order System", desc: "Eliminate third-party commissions by capturing reservations and orders directly", tactics: ["OpenTable/Resy/Tock reservation widget: embedded on every page", "Direct online ordering: ChowNow, Olo, or Toast integration — zero delivery commission", "Private dining inquiry form: for groups and event bookings", "Gift card purchase direct: captures occasion shopper revenue without platform fee"] },
          { title: "Mobile-First Menu & Visual System", desc: "The menu and food photography are the primary conversion drivers on a restaurant website", tactics: ["HTML/CSS mobile-responsive menu: no PDFs, no zooming required", "Food photography integration: high-quality images for each menu section", "Seasonal menu updates through CMS: no developer needed to update menu", "Dietary filter system: vegetarian, vegan, gluten-free filtering for accessibility"] },
          { title: "Occasion & Private Dining Pages", desc: "Special occasion dining is the highest-revenue category and most searchable", tactics: ["Valentine's Day page: active from December, specials, reservation link", "Private dining page: capacity, menus, catering options, event inquiry form", "Holiday pages: Thanksgiving, Christmas, Easter — seasonal reservations", "Birthday/Anniversary package page: set menus, special offers"] }
        ]
      },
      services: [
        "Restaurant Website Design", "Online Reservation Integration",
        "Direct Online Ordering System", "Mobile-Responsive Digital Menu",
        "Food Photography Integration", "Occasion & Event Pages",
        "Private Dining Inquiry Form", "Google Business Integration",
        "Gift Card Purchase System", "Restaurant SEO Architecture",
        "Mobile-First Responsive Design", "Page Speed Optimization"
      ],
      commonMistakes: [
        { mistake: "PDF menu on a mobile-first website", impact: "78% of restaurant website visitors are on mobile. A PDF menu pinched on a phone screen communicates 'we don't care about your experience before you even arrive.' Visitors who can't read the menu easily don't make reservations — they find a competitor whose menu they could read on their phone.", fix: "HTML/CSS responsive menu built directly into the website. Each menu section (appetizers, entrees, desserts) loads immediately, scrolls naturally, and reads clearly on any screen size. CMS-editable so menu changes are made by restaurant staff in minutes, not developers." },
        { mistake: "No direct online reservation — only OpenTable link", impact: "A restaurant linking to OpenTable for reservations is paying $1–$2 per cover in reservation fees AND giving diner data to OpenTable who then markets other restaurants to them. A direct reservation system (Tock, Resy, or SevenRooms) captures the same reservation with zero commission.", fix: "Direct reservation system embedded on the restaurant website. Tock and SevenRooms offer commission-free models. At 200 covers/month, this saves $2,400–$4,800/year in reservation fees while keeping diner contact data for loyalty and re-engagement marketing." },
        { mistake: "Low-quality food photography throughout the site", impact: "Restaurant websites are the primary vehicle for appetite generation before a dining decision. Dark, blurry, or phone-camera food photos signal food quality below what diners expect from an experiential dining destination — and they choose a competitor whose photos made them hungry.", fix: "Professional food photography shoot for every category of the menu: 2–3 hero shots per category minimum. Investment: $500–$2,000 for a professional shoot. ROI: permanent website asset used on the website, Instagram, ads, and Google Business profile. Professional photos average 3× the engagement of amateur restaurant photos." },
        { mistake: "No occasion-specific pages for Valentine's Day, private dining", impact: "Valentine's Day searches for 'romantic restaurant [city]' and 'Valentine's dinner [city]' spike 6 weeks before February 14. Without dedicated pages, you're invisible for 70%+ of the highest-revenue dining night of the year. Same applies to Christmas, Easter, and private dining searches.", fix: "Occasion pages built and optimized year-round: Valentine's Day, Private Dining, Holiday Events, birthday/anniversary packages. Each page targets the specific search terms for that occasion and includes a direct reservation form with date selection. These pages rank for occasion searches and capture the highest-check diners." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "Toast/Resy/Tock API", "ChowNow/Olo (online ordering)", "Contentful (menu CMS)", "Google Analytics 4", "Vercel"],
      timeline: {
        m1: "Design, menu system, reservation integration, food photo integration, mobile optimization.",
        m2: "Online ordering integration, occasion pages, private dining page, Google Business sync.",
        m3: "SEO architecture. Local search optimization. Review integration. Schema markup.",
        m6: "Direct reservation volume tracked. Commission savings quantified. Organic reservations growing.",
        m12: "Direct booking dominant. Occasion pages ranking for seasonal searches. Online ordering established."
      },
      keywords: [
        "restaurant website design", "restaurant web development", "online reservation website restaurant",
        "restaurant website with online ordering", "food website design [city]",
        "private dining website", "restaurant SEO website"
      ],
      caseStudy: {
        client: "Calla Restaurant",
        location: "San Francisco, CA",
        before: "OpenTable-only reservations ($3/cover), no online ordering, 78% bounce rate",
        after: "Direct Tock reservations ($0/cover), ChowNow ordering, 31% bounce rate",
        leads: "220 reservations/mo direct = $660/mo saved in OpenTable fees + 40% increase in total covers",
        period: "6 months",
        highlight: "Valentine's Day occasion page ranked #3 for 'romantic restaurant San Francisco' — 840 visits, 186 reservations in 3 weeks"
      },
      localVsNational: {
        local: "Independent restaurants need single-location sites with neighborhood-specific content, local review prominence, and event calendar integration for local occasions.",
        national: "Restaurant groups and chains need multi-location website infrastructure with location-level menus, individual reservation systems per location, and centralized brand standards with local customization."
      },
      faqs: [
        { q: "Should a restaurant website have online reservations?", a: "Yes — absolutely. 43% of dining decisions happen outside business hours. Without online reservations, you're losing every diner who decides at 10pm when your phone isn't answered. Direct reservation systems (Tock, SevenRooms) cost less in commissions than third-party platforms like OpenTable." },
        { q: "What's the difference between OpenTable and a direct reservation system?", a: "OpenTable charges $1–$2 per cover in reservation fees and keeps diner data for their own marketing. Direct platforms like Tock and SevenRooms charge flat monthly fees (no per-cover commission) and the diner contact data goes to the restaurant. For an active restaurant, direct saves $24,000–$48,000/year." },
        { q: "Should my restaurant use an online ordering platform like Uber Eats?", a: "For delivery volume, third-party platforms are useful — but recapture as much direct ordering as possible. Direct ordering through ChowNow or Olo charges restaurants a flat monthly fee vs. 15–30% commission per order. A $40 direct order costs $20–$30 less in commissions than the same order through DoorDash." },
        { q: "How important is food photography for a restaurant website?", a: "Extremely — food photography is the primary conversion driver on a restaurant website. Professional photos average 3× the engagement of amateur photos. Investment: $500–$2,000/year for a professional shoot. Returns: permanent website asset, Instagram content for 6–12 months, Google Business photos, and ad creative." },
        { q: "What should a restaurant website home page include?", a: "Hero with best food photo or ambiance shot, location and hours immediately visible, online reservation button prominently placed, menu link, occasion pages (private dining, events), and Google reviews. Remove everything that doesn't serve one of these purposes — restaurant home pages succeed through clarity, not volume of content." },
        { q: "Should a restaurant have a blog on their website?", a: "Only if it's updated consistently. A blog last updated in 2021 is worse than no blog — it signals abandonment. If you can commit to 1–2 posts per month (seasonal menu features, local events, chef articles), a blog creates organic traffic and gives Google fresh content signals. Otherwise, skip it." },
        { q: "How do I get my restaurant to rank on Google?", a: "Google Business optimization is the most impactful: accurate hours, photos updated monthly, Google reviews responded to, menu uploaded in Google Business. For the website: local restaurant SEO with cuisine type and neighborhood in page titles, individual occasion pages, and structured data (Restaurant schema with hours, menu, price range)." },
        { q: "How long does a restaurant website take to build?", a: "4–8 weeks for a complete restaurant website with reservation integration, digital menu system, online ordering, and occasion pages. Photo-heavy sites with large menus take closer to 8 weeks. Faster launches (4 weeks) are possible with client-provided photography and menu in digital format." }
      ]
    },

    // ─── 9. FINANCIAL ADVISORS ────────────────────────────────────────
    {
      slug: "financial-advisors",
      name: "Financial Advisors",
      icon: "📈",
      tagline: "A Website That Builds Trust Before the First Meeting. Financial Advisor Web Development That Converts Prospects.",
      heroSubtitle: "High-net-worth clients pick their financial advisor based on trust, credibility, and first impressions. A custom-built advisor website with credentials, philosophy, client outcomes, and a frictionless meeting request converts the researching prospect into a booked discovery call.",
      overview: "Financial advisory is one of the highest-trust service categories in professional services — clients are handing over their life savings, retirement, and financial security. Every element of a financial advisor's website either builds or destroys that trust before the first conversation happens.\n\nMost financial advisor websites fail the trust test in obvious ways: stock photos of handshakes and skylines that could be any firm, credential lists with no explanation of what they mean to the client, no philosophy or investment approach description, and no client outcomes (however general) that demonstrate results. The advisors growing their practice through digital channels have websites that communicate a specific, differentiated investment philosophy with real advisor personality and clear paths to initiating a conversation.\n\nRankston builds financial advisor websites that are trust-engineered — with credentials translated into client benefit language, philosophy sections that attract ideal clients and repel poor fits, and meeting request workflows that reduce the 'picking up the phone and calling a stranger' barrier to nearly zero.",
      stats: [
        { val: "$500K+", label: "avg AUM threshold — high-trust website required to attract this client" },
        { val: "SEC/FINRA", label: "compliance-aware content and disclaimer architecture" },
        { val: "Philosophy", label: "page: the #1 differentiator attracting aligned high-net-worth clients" },
        { val: "Discovery", label: "call booking: frictionless scheduling converts prospects 3× more than contact forms" }
      ],
      painPoints: [
        { title: "Generic Website Indistinguishable from Every Other RIA", desc: "When your website looks and sounds identical to 1,000 other RIAs — stock photos, credential list, 'we put clients first' — there's no reason for a prospect to choose you. Differentiation through philosophy, specialty, and personality is what makes the phone ring." },
        { title: "Credentials Listed Without Client Benefit Translation", desc: "CFP®, CFA, AIF mean nothing to most prospects without explanation. A website that lists credentials without explaining what they mean for the client's money and security misses the trust-building opportunity they represent." },
        { title: "No Investment Philosophy Section", desc: "Prospects want to know how you think about money before they share theirs. An advisor website without a clear investment philosophy section — how you approach markets, risk, and client goals — fails to differentiate and fails to pre-qualify the right clients." },
        { title: "No Discovery Call Booking Integration", desc: "Asking a prospect to 'call us' or 'fill out a contact form' to initiate a relationship introduces maximum friction at the most insecure moment — initiating financial disclosure with a stranger. Calendly or similar removes this barrier entirely." },
        { title: "No Client Persona or Specialty Described", desc: "Financial advisors who serve everyone attract no one with digital marketing. A website that articulates a specific ideal client ('we serve physicians and medical professionals planning for retirement') attracts higher-quality leads and repels poor-fit inquiries." },
        { title: "SEC/FINRA Disclaimer Compliance Gaps", desc: "Financial advisor websites have specific SEC and FINRA content requirements: performance disclaimers, testimonial rules (post Reg BI), ADV Part 2 reference links, and specific language requirements for investment claims. Non-compliant content creates regulatory risk." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Financial Advisors",
        intro: "Financial advisor web development wins through differentiated philosophy positioning, credential benefit translation, ideal client articulation, discovery call integration, and SEC/FINRA compliance-conscious content architecture.",
        pillars: [
          { title: "Trust & Differentiation Architecture", desc: "Build a website that feels like the specific advisor you are — not a generic RIA", tactics: ["Advisor bio with personality, philosophy, and real-world approach to client goals", "Investment philosophy section: how you think, what you believe, what you won't do", "Ideal client profile: who you serve best, minimum assets, life stages, specialties", "Community involvement and personal story: humanizing the financial expert"] },
          { title: "Credential & Authority Translation", desc: "Turn certifications into client benefit statements, not alphabet soup", tactics: ["CFP® page: what it means you've mastered and why it matters to retirement planning", "Fiduciary statement: clear commitment to client interest standard vs. suitability", "Firm history and AUM milestone: social proof for institutional trust", "Awards and recognition translated into client benefit language"] },
          { title: "Compliance-Conscious Content", desc: "Build for regulatory requirements without compromising conversion", tactics: ["SEC/FINRA disclaimer architecture: compliant placement without destroying UX", "Post-Reg BI testimonial compliance: third-party review guidelines", "ADV Part 2 reference link in footer navigation", "Performance references: properly disclaimed, no implied guarantees"] }
        ]
      },
      services: [
        "Financial Advisor Website Design", "Investment Philosophy Page",
        "Advisor Bio & Credential Pages", "Ideal Client Page",
        "Discovery Call Booking Integration", "SEC/FINRA Compliance Review",
        "Client Testimonial System (Reg BI Compliant)", "ADV Part 2 Integration",
        "Financial Advisor SEO Architecture", "Mobile-First Responsive Design",
        "Page Speed Optimization", "Google Analytics 4 Setup"
      ],
      commonMistakes: [
        { mistake: "Generic advisor website with stock handshake photos", impact: "When every element of the website could belong to any financial advisor in the country — stock photos, generic language, credential list — there's nothing to anchor a prospect's search for 'my advisor.' They move on to someone whose website communicates a specific perspective on money and relationships.", fix: "Differentiated advisor website: real headshots or professional photography of you in context (not stock photos), your specific investment philosophy articulated clearly, your ideal client described specifically, and your personal story in the context of why you entered the profession. A website that sounds like you — not like every other RIA." },
        { mistake: "No discovery call scheduling — contact form only", impact: "A high-net-worth prospect deciding to explore a new financial advisor relationship has significant psychological friction to overcome — disclosing their financial situation to a stranger. A contact form adds form-letter-response anxiety on top. Most don't submit. They move to an advisor who makes the first conversation frictionless.", fix: "Calendly or Acuity integrated directly on the website: 'Schedule a 30-Minute Discovery Call' with your actual calendar displaying real availability. Prospects who can see 'Tuesday at 3pm' available book at 3–5× the rate of those who submit a contact form and wait. Remove the anxiety of not knowing when you'll respond." },
        { mistake: "No investment philosophy or specialty — 'we serve everyone'", impact: "Financial advisors who serve everyone with a generalist approach and generic website attract generic, low-conviction inquiries — if any. Digital marketing works through specificity. An advisor who specializes in business owners preparing for exit, or physicians managing student loans and practice overhead, attracts exactly those clients.", fix: "Ideal client definition section: specific about who you serve best, what life stage, what asset level, what primary financial challenges. Investment philosophy section: how you approach risk, what you believe about markets, what you will and won't do for clients. Specificity attracts qualified leads and repels poor-fit inquiries at the same time." },
        { mistake: "Testimonial page without Reg BI compliance", impact: "Post-2023 SEC Regulation BI updates introduced new guidelines for financial advisor testimonials on websites — including disclosure requirements and the prohibition of cherry-picked testimonials creating a misleading impression. Non-compliant testimonial sections create regulatory risk during SEC examination.", fix: "Testimonial architecture built to Reg BI requirements: required disclosures per testimonial, balanced representation, no performance implication in testimonial selection. Third-party review platform integration (Google, Yelp) with compliant embedding. SEC examination-ready documentation of testimonial compliance approach." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "Calendly / Acuity", "Wealthbox / Redtail (CRM) API", "Google Analytics 4", "Vercel", "Contentful"],
      timeline: {
        m1: "Design, advisor bio, philosophy page, ideal client page, discovery call booking.",
        m2: "Credential pages, compliance review, testimonials, specialty service pages.",
        m3: "SEO architecture. Financial planning topic blog launched. Local search optimization.",
        m6: "Organic rankings for specialty terms. Discovery call volume from organic growing.",
        m12: "Dominant local/specialty organic presence. Qualified discovery call pipeline full."
      },
      keywords: [
        "financial advisor website design", "RIA website design", "wealth management website",
        "financial planner website [city]", "investment advisor website development",
        "CFP website design", "fiduciary advisor website", "financial advisor web developer"
      ],
      caseStudy: {
        client: "Meridian Wealth Planning",
        location: "Austin, TX",
        before: "Generic template, 1 discovery call/mo from website, 95% referral dependent",
        after: "Custom site, 11 discovery calls/mo, 4 new clients/mo from digital",
        leads: "4 new clients/mo avg $480K AUM = $1.92M AUM added monthly from website alone",
        period: "9 months",
        highlight: "Physician-specialist landing page ranked #2 for 'financial advisor for doctors Austin' — 7 physician clients in 9 months"
      },
      localVsNational: {
        local: "Independent RIAs and solo advisors need local geo-targeting, community involvement content, and discovery call scheduling tuned to local timezone availability.",
        national: "National advisory firms and broker-dealers need compliant content management systems, advisor profile databases, and scalable appointment scheduling infrastructure per advisor."
      },
      faqs: [
        { q: "What should a financial advisor website include?", a: "Investment philosophy, ideal client profile, advisor bio (credentials translated to client benefit), discovery call scheduling, ADV Part 2 reference, SEC/FINRA required disclosures, and client testimonials compliant with post-Reg BI guidelines. Every page should have a path to a discovery call." },
        { q: "Do financial advisor websites need SEC or FINRA compliance review?", a: "Yes — financial advisor websites are marketing materials subject to SEC and FINRA advertising rules. Key requirements: no misleading performance claims, proper disclaimers, compliant testimonial display, ADV Part 2 reference link. We build with compliance architecture in place and recommend an RIA compliance consultant review before launch." },
        { q: "Can financial advisors use testimonials on their website?", a: "Yes, under updated SEC Regulation BI guidelines (effective 2023). Key requirements: testimonials must include specific disclosures (compensated or not, past client status), must not cherry-pick to create a misleading impression, and must comply with applicable state rules. Third-party review platforms (Google) are generally compliant." },
        { q: "How do I differentiate my financial advisor website from competitors?", a: "Three differentiators: (1) Specific ideal client definition — who you serve, asset level, life stage, profession. (2) Investment philosophy — how you think about money, risk, and markets. (3) Advisor personality — your story, your values, why you do this work. Generic advisors get generic results — specific advisors attract specific, aligned clients." },
        { q: "Should a financial advisor have a blog?", a: "Yes — financial topics generate significant organic search traffic from people at every stage of wealth-building. Topics: retirement planning by decade, tax strategies by income level, market commentary, specific-to-your-specialty educational content. Blog content also demonstrates expertise to prospects evaluating your knowledge depth." },
        { q: "How do I get financial planning clients from my website?", a: "Four levers: (1) Discovery call scheduling directly on the site — remove friction from the first conversation. (2) Ideal client specificity — people who match your description self-select. (3) Educational content that answers the questions your ideal client searches. (4) Local SEO for your city and specialty search terms." },
        { q: "What's the best way to handle the ADV Part 2 requirement on a website?", a: "Link to your current ADV Part 2 from the footer navigation and from your About/Team page. Include the phrase 'Our ADV Part 2 is available upon request or at [link]' in the footer alongside your standard disclosures. Update the link whenever you file an ADV amendment." },
        { q: "How long does a financial advisor website take to build?", a: "6–10 weeks for a comprehensive financial advisor website with philosophy pages, credential content, testimonials, and discovery call integration. Compliance review adds 1–2 weeks. Simpler single-advisor sites take 4–6 weeks." }
      ]
    },

    // ─── 10. CHIROPRACTORS ────────────────────────────────────────────
    {
      slug: "chiropractors",
      name: "Chiropractors",
      icon: "🦴",
      tagline: "A Website That Books Adjustments. Chiropractic Web Development Built for New Patient Conversion.",
      heroSubtitle: "Patients searching for chiropractic care are often in pain right now. A fast, trustworthy chiropractic website with online booking, condition-specific pages, and location prominence captures new patients before they call three other offices.",
      overview: "Chiropractic new patient acquisition is hyper-local and research-driven. Patients typically spend 5–15 minutes evaluating 3–5 chiropractic websites before calling one — reviewing doctor credentials, treatment approaches, insurance acceptance, and patient reviews. The practice with the most trustworthy, condition-specific, and easy-to-navigate website wins the majority of those comparison evaluations.\n\nA properly built chiropractic website converts the pain-motivated searcher with immediate online booking, the insurance-conscious patient with clear insurance display, and the condition researcher with specific condition and treatment pages that answer their exact questions before they ask them.\n\nRankston builds chiropractic websites as new patient acquisition engines — with online scheduling, condition pages, before/after treatment outcomes, and the local SEO architecture that ensures the practice appears first for the searches new patients actually make.",
      stats: [
        { val: "Online", label: "booking: captures 47% of new appointment requests made after hours" },
        { val: "Condition", label: "pages: rank for 'back pain chiropractor [city],' 'sciatica chiropractor near me'" },
        { val: "Insurance", label: "display: #1 patient filter before choosing which office to call" },
        { val: "5-star", label: "Google reviews: primary trust factor in chiropractic selection" }
      ],
      painPoints: [
        { title: "Generic Chiropractic Template — Looks Like Every Competitor", desc: "Generic chiropractic websites look interchangeable. When patients evaluate 3–4 chiropractic sites in an afternoon, the one that looks and reads uniquely — with real doctor personality, condition specialty, and patient outcomes — wins the appointment." },
        { title: "No Online Booking — Phone Required", desc: "47% of chiropractic appointment requests happen outside business hours. Without online booking, the practice loses every patient who searches and decides at 9pm when the phone goes unanswered." },
        { title: "No Condition-Specific Pages", desc: "'Back pain chiropractor,' 'sciatica treatment,' and 'neck pain relief' are different searches requiring different pages. A single 'Services' page can't rank for these conditions and can't convert visitors arriving with a specific complaint." },
        { title: "Insurance Acceptance Not Displayed", desc: "Insurance is the first patient filter. A chiropractic website that doesn't prominently display accepted insurance plans forces patients to call for insurance verification — most won't, they call the office that already answered the question." },
        { title: "No Patient Outcome Testimonials", desc: "Chiropractic patients make decisions based on 'will this work for me?' Condition-specific patient testimonials ('I came in with sciatica so severe I couldn't sit; 6 sessions later I'm running again') convert the pain-motivated searcher better than any credential." },
        { title: "No New Patient Special Offer", desc: "New patient offers — discounted first exam, complimentary consultation — reduce the new patient barrier significantly. Without one, the practice competes on perceived quality alone vs. competitors who also offer a lower-risk entry offer." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Chiropractors",
        intro: "Chiropractic web development wins through condition-specific pages, online booking integration, insurance acceptance display, patient outcome testimonials, and new patient offers that reduce first-visit barriers.",
        pillars: [
          { title: "Condition Page Architecture", desc: "Rank for every condition and treatment search in your market", tactics: ["Back pain page: causes, chiropractic approach, expected outcomes, booking CTA", "Sciatica page: nerve vs. disc causes, treatment methodology, patient outcomes", "Neck pain page: postural causes, technology (CBP, decompression), results", "Auto injury/personal injury page: insurance billing, documentation, prognosis"] },
          { title: "New Patient Conversion System", desc: "Convert condition-motivated searchers into booked first appointments", tactics: ["New patient offer: discounted first exam or complimentary consultation", "Online booking: ChiroFusion, Jane App, or practice management software", "Insurance display: accepted insurers listed with self-pay options", "New patient packet download: form-gate with email capture"] },
          { title: "Trust & Outcome Architecture", desc: "Build clinical credibility through outcomes, not just credentials", tactics: ["Patient testimonials by condition: sciatica, back pain, headaches, sports injury", "Video testimonials: 30–60 second outcome stories embedded on condition pages", "Doctor bio: technique specializations, advanced training, philosophy of care", "Before/after case studies: documented outcome cases with patient permission"] }
        ]
      },
      services: [
        "Chiropractic Website Design", "Online Booking Integration",
        "Condition-Specific Page Development", "Patient Testimonial System",
        "New Patient Offer Design", "Insurance Acceptance Page",
        "Doctor Bio & Credentials Page", "Google Reviews Integration",
        "Chiropractic SEO Architecture", "Mobile-First Responsive Design",
        "Page Speed Optimization", "Local Schema Markup"
      ],
      commonMistakes: [
        { mistake: "No condition-specific pages — one general 'Services' page", impact: "A patient searching 'chiropractor for sciatica near me' wants a page that specifically addresses sciatica — causes, chiropractic approach, expected timeline. A generic services page listing all conditions provides nothing specific and ranks for nothing specific.", fix: "Individual condition pages for every major presentation you treat: back pain, sciatica, neck pain, headaches, sports injuries, auto injuries, pediatric chiropractic. Each page 500+ words, condition-specific, with patient testimonials from that condition and a booking CTA. Pages rank independently for condition-specific searches." },
        { mistake: "No new patient offer", impact: "A first chiropractic appointment requires overcoming the 'what if it doesn't work?' barrier. Without a new patient offer (discounted or complimentary first visit), the practice asks for full-price commitment from someone who has never experienced chiropractic — maximum barrier, minimum conversion.", fix: "New patient offer prominently on the homepage and all condition pages: '$0 New Patient Exam' or '$39 New Patient Special — Exam + Adjustment.' Offer reduces first-visit risk and differentiates from competitors without a clear entry offer. Include offer expiration date for urgency without being manipulative." },
        { mistake: "No online booking — appointment by phone only", impact: "The peak decision moment for a chiropractic new patient is often during (or immediately after) a pain episode — at night, on weekends, outside of business hours. A practice that only books by phone loses every patient who reaches their decision moment without answering hours coverage.", fix: "Online booking directly on the website and linked from every page. ChiroFusion, Jane App, or Nextiva scheduling integrated with practice management software. New patient appointment slots available for online booking Monday through Saturday. Immediate confirmation email with intake forms and instructions." },
        { mistake: "Testimonials without condition specificity", impact: "Generic positive reviews ('Dr. Smith is great!') don't address the specific concern of a patient searching for sciatica treatment. A testimonial from a patient who had their exact condition and recovered builds vastly more trust — but only if the testimony addresses the condition specifically.", fix: "Condition-specific testimonials: source testimonials by asking patients specifically about their condition and outcome ('Could you describe what brought you in and how chiropractic helped?'). Embed sciatica patient testimonials on the sciatica page, back pain testimonials on the back pain page. Condition-matched testimonials increase conversion by 40–70%." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "ChiroFusion / Jane App / Nextiva", "Birdeye (reviews)", "Google Analytics 4", "Vercel", "Contentful"],
      timeline: {
        m1: "Design, online booking, condition pages (top 5), insurance section, new patient offer.",
        m2: "All condition pages, patient testimonials, doctor bio, video embed system.",
        m3: "SEO architecture. Local citations. Google Business sync. Schema markup.",
        m6: "Condition pages ranking. New patient pipeline from organic growing.",
        m12: "Dominant local chiropractic web presence. New patient pipeline full from organic."
      },
      keywords: [
        "chiropractor website design", "chiropractic website development", "back pain chiropractor website",
        "chiropractic website [city]", "chiropractor web design", "chiropractic SEO website"
      ],
      caseStudy: {
        client: "Peak Performance Chiropractic",
        location: "Denver, CO",
        before: "Template site, 8 new patients/mo from web, no online booking",
        after: "Custom site, 34 new patients/mo, 71% booked online",
        leads: "26 incremental new patients/mo — recurring chiropractic patients avg $1,200/yr LTV",
        period: "5 months",
        highlight: "Sciatica condition page ranked #3 for 'sciatica chiropractor Denver' — 8 new patients/mo from that page alone"
      },
      localVsNational: {
        local: "Independent chiropractic practices need hyper-local condition pages, neighborhood testimonials, and Google Business integration for local search dominance.",
        national: "Chiropractic chains and franchise networks need location-level websites with centralized brand standards, individual practice booking systems, and scalable condition page templates per location."
      },
      faqs: [
        { q: "What should a chiropractic website include?", a: "Condition-specific pages, online booking, insurance acceptance list, new patient offer, doctor bio, patient testimonials by condition, Google reviews integration, and a blog covering patient questions. Every page should have a clear path to booking a first appointment." },
        { q: "How do I get new chiropractic patients from my website?", a: "Three primary levers: (1) Condition pages that rank for patient searches ('back pain chiropractor [city]'), (2) New patient offer that reduces the first-visit barrier, (3) Online booking so the decision converts to an appointment immediately — day or night. Combined these typically 3–4× website new patient volume." },
        { q: "What online booking system should a chiropractor use?", a: "ChiroFusion and Jane App are the most common chiropractic practice management systems with built-in online booking. Nextiva, Acuity, and Calendly work for simpler scheduling needs. We integrate whatever system you already use or recommend the best fit for your volume and practice type." },
        { q: "How many condition pages should a chiropractic website have?", a: "One per major condition you treat: back pain, sciatica, neck pain, headaches, sports injuries, auto injury, disc herniation, scoliosis, pediatric chiropractic. Each page ranks for its own search term and converts visitors who arrived with that specific condition." },
        { q: "Should chiropractic websites show treatment pricing?", a: "Self-pay price ranges work well for transparency: 'Initial exam: $95–$125. Adjustment: $45–$75.' Insurance billing: note accepted insurers and that billing varies by plan. Pricing transparency reduces 'how much does it cost' calls and pre-qualifies budget-appropriate patients." },
        { q: "How important are Google reviews for a chiropractic website?", a: "Critical — chiropractic is a high-trust specialty where patients are committing their spine to your care. 50+ Google reviews at 4.8+ stars displayed prominently is the single most powerful trust signal on a chiropractic website. Implement a systematic review request process for every completing patient." },
        { q: "Should a chiropractor have a blog?", a: "Yes — patient health questions are highly searchable. Topics: how to sit at a desk without back pain, stretches for sciatica, what to expect at a first chiropractic appointment, headache causes and natural solutions. Educational content captures early-stage searchers and funnels them toward condition pages and booking." },
        { q: "How long does a chiropractic website take to build?", a: "5–8 weeks for a complete chiropractic website with condition pages, online booking, testimonial system, and insurance section. Single-doctor practices take 5 weeks. Multi-doctor practices or those with large condition page counts take 8 weeks." }
      ]
    },

    // ─── 11. PET CARE ─────────────────────────────────────────────────
    {
      slug: "pet-care",
      name: "Pet Care Services",
      icon: "🐾",
      tagline: "A Website That Pet Parents Trust. Pet Care Web Development That Fills Boarding and Grooming Appointments.",
      heroSubtitle: "Pet owners make decisions based on gut feeling and visual trust signals. A custom pet care website that shows your facility, displays certifications, and books appointments online fills boarding, grooming, and training slots the moment a pet parent goes searching.",
      overview: "Pet care is a deeply emotional buying decision. Pet owners are entrusting their 'family member' to a facility they can't watch 24/7 — and every element of a website either builds or destroys that confidence. Facility photos, staff certifications, emergency protocols, and real-pet social proof (photos and reviews of actual dogs and cats in your care) are the conversion drivers no pet care business can afford to skip.\n\nThe pet care industry is also increasingly competitive: pet store grooming, franchise boarding facilities, and independent kennels compete for the same local search terms. The businesses capturing digital market share have websites that combine emotional resonance (your pet will love it here, and we'll prove it) with functional convenience (online booking, FAQ answers, price transparency).\n\nRankston builds pet care websites that earn the trust of the most protective pet parents — with facility tour photography, staff certification display, safety protocol visibility, and online booking integrations that fill any type of pet service appointment.",
      stats: [
        { val: "78%", label: "of pet owners research facilities online before boarding their pets" },
        { val: "Facility", label: "photos: #1 trust factor for boarding and daycare conversion" },
        { val: "Online", label: "booking: fills grooming and daycare slots 24/7 without phone tag" },
        { val: "Safety", label: "protocol transparency: top request from anxious first-time boarding clients" }
      ],
      painPoints: [
        { title: "No Facility Photos — Just Generic Pet Stock Images", desc: "A pet owner considering overnight boarding wants to see the actual kennels, play yards, sleeping arrangements, and staff interacting with dogs. Stock photos of happy dogs on white backgrounds communicate nothing about your facility." },
        { title: "No Online Booking for Grooming and Daycare", desc: "Pet care services are appointment-dependent. Without online booking, every potential client either calls during business hours or gives up. A booking system fills grooming and daycare slots around the clock." },
        { title: "No Staff Certifications Displayed", desc: "Pet first aid certification, breed-specific training, and veterinary technician credentials are trust signals that differentiate a professional pet care facility from a backyard boarding situation. Most pet care websites don't display them." },
        { title: "No Safety and Emergency Protocol Information", desc: "Anxious pet owners have specific safety questions: what happens if my dog gets sick? What's your vaccination policy? Do you have on-call vet access? Websites without safety FAQ content lose the protective pet parent who needs these answers before booking." },
        { title: "No Social Proof — Where Are the Pets?", desc: "A grooming studio or boarding facility without photos of actual pets in their care (with owner permission), active social media integration, or pet-specific review highlights has zero emotional proof that pets are happy there." },
        { title: "No Service-Specific Pages", desc: "Boarding, grooming, daycare, training, and pet taxi are different searches with different conversion requirements. A single 'Services' page can't rank for or convert any of them with the depth required." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Pet Care Services",
        intro: "Pet care web development wins through facility photography, safety transparency, staff certification display, online booking integration, and service-specific pages that rank for every pet care search in your market.",
        pillars: [
          { title: "Trust & Safety Architecture", desc: "Address the 'will my pet be safe?' question before it's asked", tactics: ["Facility tour photo gallery: kennel areas, play yards, sleep arrangements, staff", "Safety and health protocols page: vaccination requirements, emergency procedures", "Staff certifications section: pet first aid, breed certifications, vet tech credentials", "Emergency vet partnership: named veterinary partner for emergencies"] },
          { title: "Service Page System", desc: "Each service type has its own conversion and SEO page", tactics: ["Boarding page: kennel specs, overnight schedule, add-ons (playtime, baths)", "Grooming page: services menu, breed expertise, appointment booking", "Daycare page: play group structure, supervision ratio, daily schedule", "Training page: methods, trainer certifications, program types, results"] },
          { title: "Pet Parent Emotional Conversion", desc: "Win the emotional decision before the functional one", tactics: ["Pet photo gallery: real dogs and cats in your facility (by permission)", "Social media feed integration: Instagram grid of daily pets in care", "5-star review highlights: pet-specific review quotes prominently displayed", "Meet the staff: bios with the pets they personally own — humanizing instant trust"] }
        ]
      },
      services: [
        "Pet Care Website Design", "Online Booking Integration",
        "Service-Specific Page Development", "Facility Photo Gallery",
        "Staff Certification Display", "Safety Protocol Page",
        "Pet Photo & Social Media Integration", "Google Reviews Integration",
        "Pet Care SEO Architecture", "Mobile-First Responsive Design",
        "Page Speed Optimization", "Local Schema Markup"
      ],
      commonMistakes: [
        { mistake: "Stock pet photos instead of real facility photos", impact: "Pet parents choose a boarding or grooming facility based on visual evidence of the environment. Stock photos signal 'we have nothing real to show you' — the exact opposite of confidence. A prospective client's imagination about what's behind generic stock photos is more frightening than any real facility photo.", fix: "Professional or high-quality smartphone photography of your actual facility: kennel rooms, play yards, grooming stations, sleeping arrangements, staff with pets. Real facility photos convert boarding prospects at 2–3× the rate of stock photos. If the facility looks good, show it." },
        { mistake: "No display of staff certifications or training credentials", impact: "Pet first aid certification, Fear Free certification, breed-specific training expertise, and vet tech credentials are powerful differentiators that most pet care websites completely ignore. Not displaying them means they might as well not exist — from the website visitor's perspective.", fix: "Staff credentials section on every relevant page: trainer certifications with certifying organization links, pet first aid certification with renewal date, Fear Free certifi status, breed expertise list. Certification logos displayed visually alongside text descriptions of what each certification means for pet safety." },
        { mistake: "No safety and vaccination policy information", impact: "The most common objection from first-time boarding clients is anxiety about safety: vaccination requirements, sick pet procedures, emergency vet access. Without answers on the website, anxious prospects call your competitors who've already addressed their fears online.", fix: "Dedicated health and safety page: vaccination requirements (with exact vaccine names), what happens if a pet displays illness symptoms during boarding, emergency veterinary partner named and linked, supervision staffing ratios, medication administration policy. Answer every question the anxious first-timer will have — on the website, before they ask." },
        { mistake: "No online booking for grooming appointments", impact: "Grooming appointments are a service most pet owners want to book at the moment of decision — during a dog bath at home, after noticing a matted coat, during a Sunday evening planning session. Without online booking, 60%+ of those spontaneous booking moments are lost to competitors who offer immediate confirmation.", fix: "Online booking on every grooming-related page with your actual availability calendar. Pet booking platforms: Gingr, 123Pets, or time.ly. Immediate booking confirmation by email with pre-appointment instructions (bathing, flea check). Never make a pet owner call to confirm availability." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "Gingr / 123Pets API", "Instagram API (pet gallery)", "Birdeye (reviews)", "Google Analytics 4", "Vercel"],
      timeline: {
        m1: "Design, online booking, facility gallery, service pages, safety page, staff section.",
        m2: "Social media integration, reviews, pet photo gallery, all service-specific pages.",
        m3: "SEO architecture. Local citations. Schema markup. Google Business sync.",
        m6: "Service pages ranking. Appointment volume from organic growing.",
        m12: "Dominant local pet care web presence. All service types generating organic bookings."
      },
      keywords: [
        "pet boarding website design", "dog grooming website", "pet daycare website",
        "pet care website development [city]", "dog boarding website design", "pet service website"
      ],
      caseStudy: {
        client: "Wagging Tails Pet Resort",
        location: "Charlotte, NC",
        before: "Generic site, 12 new boarding clients/mo from web, grooming booked by phone only",
        after: "Custom site, 48 new boarding/grooming clients/mo, 74% book online",
        leads: "36 incremental new pet care clients/mo — avg LTV $1,800/yr per client",
        period: "5 months",
        highlight: "Real facility photo gallery added in month 2 increased boarding inquiry rate by 140%"
      },
      localVsNational: {
        local: "Independent pet care businesses need hyper-local SEO, neighborhood testimonials, and facility-specific photo galleries that franchise competitors can't match.",
        national: "Pet care chains and franchise networks need location-level websites with centralized brand standards, individual facility galleries, and location-specific booking systems."
      },
      faqs: [
        { q: "What should a pet boarding or grooming website include?", a: "Real facility photos, online booking, service-specific pages (boarding, grooming, daycare, training), staff certifications displayed, vaccination and health requirements, emergency vet information, pricing transparency, and pet-specific testimonials. Every element addresses the primary concern: will my pet be safe and happy here?" },
        { q: "What's the best online booking system for pet care services?", a: "Gingr is the most widely used pet care management platform with integrated online booking — handles boarding reservations, daycare drop-in, grooming appointments, and training sessions. 123Pets and Kennelsoft are alternatives. We integrate your existing system or recommend the best fit for your service mix." },
        { q: "How do I get pet owners to trust my boarding facility website?", a: "Four trust builders: (1) Real facility photos — kennels, play yards, staff with dogs. (2) Vaccination requirements displayed — signals you care about pet health. (3) Emergency vet partner named — addresses the #1 anxiety. (4) Staff certifications visible — differentiates from unlicensed operations." },
        { q: "How important are Google reviews for a pet care business?", a: "Extremely — pet care is high-trust and emotionally charged. 50+ reviews at 4.8+ stars is a baseline expectation for serious boarding clients. Pet-specific review quotes displayed on service pages ('Max absolutely loved daycare!') provide emotional proof that no amount of facility description can replace." },
        { q: "Should a pet care website have social media integration?", a: "Yes — Instagram integration is particularly powerful for pet care websites. A grid of daily photos of actual dogs and cats in your care is the highest-impact trust builder possible. It shows the environment, the staff engagement, and the pets' happiness in real time. Embed your Instagram feed prominently on the homepage and boarding page." },
        { q: "How do I rank for local pet boarding and grooming searches?", a: "Service-specific pages for every service type (boarding separate from grooming, daycare from training), local service area targeting, Google Business optimization with facility photos, 50+ Google reviews, and blog content answering pet owner questions ('how to prepare your dog for boarding,' 'signs your dog needs professional grooming')." },
        { q: "Should I show pet care pricing on my website?", a: "Yes — pet care is a commodity-influenced service where pricing is visible on competitor websites. Not showing pricing creates a comparison disadvantage and generates 'how much does it cost' calls you'd rather convert online. Full pricing for standard services; 'starting at' ranges for customized packages." },
        { q: "How long does a pet care website take to build?", a: "4–7 weeks for a complete pet care website with service pages, online booking, facility gallery, and staff section. Facilities with multiple service types (boarding, grooming, daycare, training) take closer to 7 weeks for full service page development." }
      ]
    },

    // ─── 12. HOME SERVICES ────────────────────────────────────────────
    {
      slug: "home-services",
      name: "Home Services",
      icon: "🏡",
      tagline: "A Website That Wins the Job Before the Quote. Home Services Web Development That Generates Estimates.",
      heroSubtitle: "Homeowners making home improvement decisions research online before requesting a single quote. A custom home services website that showcases your work, earns trust, and captures estimate requests converts local search traffic into jobs on your schedule.",
      overview: "The home services market — from landscaping and painting to HVAC and carpet cleaning — is intensely competitive in local search, increasingly won by businesses with the best digital presence rather than the most yard signs. Homeowners in 2024 research contractors before ever making a phone call, visiting 3–5 websites and making decisions in minutes based on visual work quality, reviews, pricing transparency, and ease of estimate request.\n\nThe home services businesses winning digital market share treat their website as a primary business development tool: they showcase completed project photo galleries, display licensing and insurance clearly, embed Google review feeds directly on service landing pages, and capture estimate requests with streamlined forms that don't require a phone call.\n\nRankston builds home services websites as lead generation machines — with service area pages for every community, project galleries that demonstrate quality, trust signal architecture that eliminates contractor anxiety, and estimate forms that convert the researching homeowner into an active prospect in under 60 seconds.",
      stats: [
        { val: "3.7×", label: "more estimate requests from sites with project photo galleries vs. text-only" },
        { val: "Service", label: "area pages: rank organically in every city and neighborhood you serve" },
        { val: "Same-day", label: "estimate response time commitment: #1 conversion differentiator" },
        { val: "Licensed +", label: "insured displayed prominently: eliminates unlicensed contractor anxiety" }
      ],
      painPoints: [
        { title: "No Completed Project Photo Gallery", desc: "Homeowners hiring for landscaping, painting, HVAC, or any visual home service make decisions based on what they see. A website with no project photos asks for trust without evidence — and loses every comparison evaluation to a competitor with a portfolio gallery." },
        { title: "No Service Area Pages", desc: "Home service searches are hyper-local. A website without city and neighborhood pages is invisible to searches from every community outside your immediate city — even if you work there every week." },
        { title: "Estimate Request Form Too Complex", desc: "A homeowner ready to request an estimate who encounters a multi-page form with 12 fields will abandon without submitting. Every additional field reduces conversions — and home services estimate forms should be 3–4 fields maximum." },
        { title: "Licensing and Insurance Not Prominently Displayed", desc: "Homeowners are protective about contractor fraud. If your license number and insurance information aren't on the website, the skeptical homeowner assume the worst and chooses the competitor who publishes their credentials." },
        { title: "No Service-Specific Pages for Organic Rankings", desc: "A single 'Home Services' page can't rank for landscaping, deck building, painting, and HVAC simultaneously. Each service needs its own page to rank for service-specific searches and convert single-service intent visitors." },
        { title: "Slow Website That Fails the Mobile Comparison Test", desc: "Homeowners research home services on mobile, often in the middle of a home improvement project. A slow, hard-to-navigate mobile website loses the comparison evaluation to the competitor who loads in 1 second and has a tap-to-call in the header." }
      ],
      strategy: {
        title: "Our Web Development Strategy for Home Services",
        intro: "Home services web development wins through project photo galleries, service area pages, service-specific pages, trust signal architecture, and streamlined estimate request flows that capture the researching homeowner before competitors respond.",
        pillars: [
          { title: "Project Portfolio System", desc: "Visual evidence of work quality is the #1 home services conversion driver", tactics: ["Project gallery organized by service type: landscaping, deck, interior painting", "Before/after system: shows transformation, not just the finished product", "Project location callouts: local geographic context builds trust with nearby searchers", "Seasonal updates: gallery reflects current season's work — landscaping in spring, holiday lights"] },
          { title: "Service & Area Page Architecture", desc: "Rank in every market and for every service you want to win", tactics: ["Service pages: individual pages per service type with gallery, FAQ, CTA", "Service area pages: city and neighborhood pages for every territory", "Service area map on homepage and index page for immediate coverage clarity", "Combination pages: 'Landscaping in [City]' for highest transactional intent"] },
          { title: "Trust & Conversion System", desc: "Convert the researching homeowner through credentials and frictionless estimate capture", tactics: ["License and insurance section: prominently on homepage and service pages", "Google reviews feed: integrated live on service and service area pages", "3-field estimate form: Name, Phone, Service needed — on every page", "Response time commitment: 'Same-day estimate response' displayed on CTAs"] }
        ]
      },
      services: [
        "Home Services Website Design", "Project Photo Gallery System",
        "Service-Specific Page Development", "Service Area Page System",
        "Estimate Request Form", "Trust Signal Architecture",
        "Google Reviews Integration", "Home Services SEO Architecture",
        "Mobile-First Responsive Design", "Page Speed Optimization",
        "Schema Markup (LocalBusiness)", "Google Business Integration"
      ],
      commonMistakes: [
        { mistake: "No project photo gallery — text descriptions of work only", impact: "Homeowners hiring for any visual home service decide based on seeing your actual work. Text descriptions of 'high-quality landscaping' or 'professional painting' are claims, not evidence. Without a project gallery, your website is making promises with no visual proof — and losing every comparison to a competitor with one.", fix: "Project gallery organized by service type: before/after pairs for transformations, completed project showcases with location (neighborhood or city) noted. Mobile-optimized gallery with fast-loading images. Update the gallery monthly with recent work — fresh project photos signal an active, current business." },
        { mistake: "No service area pages beyond immediate city", impact: "Home service searches in surrounding communities are worth just as much as city center searches — often more, as suburban markets are frequently underserved by digital competition. Without individual service area pages, every '[suburb] landscaping' or '[suburb] painter' search returns nothing from your website.", fix: "Individual service area pages for every city, town, and major neighborhood in your territory. Each page 300–500 words covering your presence, typical project types, local testimonials if available, and service area map. Service area pages unlock organic search visibility in every community you serve without any additional advertising spend." },
        { mistake: "Long or complex estimate request forms", impact: "A homeowner ready to get a quote who faces a multi-section form with project dimensions, timeline questions, budget ranges, and multi-paragraph description fields will close the browser. Every friction point reduces form completion. Home services estimate forms should be the shortest possible path to getting a human on the phone.", fix: "3-field estimate form as primary CTA on every page: Name, Phone Number, Service Needed (dropdown). Optional: Address field for services where location matters (lawn care, pressure washing). The goal is getting a phone number — qualify the project scope on the call. Short forms convert at 4–6× the rate of long forms for home service estimate requests." },
        { mistake: "License and insurance information requires calling to verify", impact: "Homeowners who've had bad experiences with unlicensed contractors — or who have friends that have — will not hire a contractor whose licensing credentials they can't verify from the website. Requiring a phone call to get this information is a dealbreaker for the skeptical homeowner who is also evaluating 3 other companies.", fix: "License section on every service page and the homepage: state license number with link to contractor board lookup, general liability insurance information (coverage type and amount), workers comp confirmation. Trust signals reduce the evaluation barrier for projects of any size. Competitors who don't display credentials lose by comparison." }
      ],
      tools: ["Next.js/React", "Tailwind CSS", "CallRail (call tracking)", "ServiceTitan / Jobber API", "Google Analytics 4", "Vercel", "Google Maps Embed API", "Cloudflare"],
      timeline: {
        m1: "Design, project gallery, core service pages, service area pages (top 5), estimate form.",
        m2: "All service and service area pages, trust section, reviews integration, schema markup.",
        m3: "SEO architecture. Local citations. Google Business sync. Core Web Vitals.",
        m6: "Service and area pages ranking. Estimate request volume from organic growing.",
        m12: "Dominant local home services web presence. All service and area targets ranking."
      },
      keywords: [
        "home services website design", "contractor website development", "landscaping website design",
        "painting company website", "HVAC website development [city]",
        "home improvement website design", "home services web developer"
      ],
      caseStudy: {
        client: "ProGround Landscaping",
        location: "Minneapolis, MN",
        before: "Generic site, 9 estimate requests/mo from web, no project gallery",
        after: "Custom site, 51 estimate requests/mo, 67% from service area pages",
        leads: "42 incremental estimate requests/mo — avg job value $2,400 = $100,800 incremental pipeline/mo",
        period: "6 months",
        highlight: "Service area pages for 11 Twin Cities suburbs all ranking page 1 within 6 months"
      },
      localVsNational: {
        local: "Independent home services businesses need hyper-local service area pages, project galleries with local neighborhood references, and Google Business integration for local map pack presence.",
        national: "National home services franchises and regional operators need location-level websites with centralized brand standards, territory service area pages, and scalable estimate request infrastructure."
      },
      faqs: [
        { q: "What should a home services website include?", a: "Project photo gallery (organized by service type), service-specific pages for every service offered, service area pages for every community served, trust signals (license, insurance), Google reviews integration, a 3-field estimate request form on every page, and a sticky header with phone number." },
        { q: "How many service area pages should a home services website have?", a: "One per city, town, or major neighborhood in your service territory. If you serve 15 communities, you need 15 service area pages. Each page creates independent organic visibility for that community's searches — 'landscaping in [suburb],' '[suburb] painter,' '[suburb] HVAC' — without competing with your homepage." },
        { q: "How do I get more home service leads from my website?", a: "Four highest-impact changes: (1) Add a project photo gallery with before/after pairs. (2) Create service area pages for every community you serve. (3) Simplify your estimate form to 3 fields. (4) Display license and insurance prominently. These four changes account for 80%+ of home services website lead volume increases." },
        { q: "Should I show home services pricing on my website?", a: "Price ranges for standard projects work well: 'Lawn care: starting at $45/visit,' 'Interior painting: $1.50–$3.50/sq ft.' Ranges attract budget-appropriate clients and reduce 'how much does it cost?' calls. Full project pricing can't be shown without a site assessment — 'Get a Free Estimate' is the appropriate CTA after ranges are displayed." },
        { q: "How important is a project gallery for a home services website?", a: "Critical — homeowners make home service decisions primarily based on visual evidence of quality. Project galleries increase estimate requests by 3.7× vs. text-only websites. Before/after pairs are most effective, followed by completed project photos with size and complexity context." },
        { q: "Should home services websites have separate pages per service type?", a: "Yes — 'Landscaping, Deck Building, and Patio Installation' need three separate pages, not one combined page. Each page has its own keyword target, its own gallery, its own FAQ content, and its own estimate request CTA. Separate pages rank independently and convert service-specific intent visitors who arrived from a specific search." },
        { q: "How do I get my home services business to rank in nearby cities?", a: "Service area pages are the primary mechanism: individual pages for each city targeting '[city] [service]' keywords. 300–500 words per page with local context, service area map, and local testimonials where available. Google Business category optimization and local citation building in each service community supplement service area page rankings." },
        { q: "How long does a home services website take to build?", a: "5–8 weeks for a home services website with service pages, service area pages, project gallery, and estimate system. Service breadth (number of different services) and territory size (number of service area pages) are the primary timeline variables. Core site in 5 weeks, area and additional service pages in weeks 6–8." }
      ]
    }

  ] // complete — 12 industries total
};

export default webDevIndustries;
