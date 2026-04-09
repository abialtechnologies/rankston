// data/industries/gmb-optimization.js
// Phase 2 — GMB Optimization: 12 industries × full 15-section data schema

const gmbIndustries = {
  label: "GMB Optimization",
  accentColor: "#F59E0B",
  industries: [

    // ─── 1. REAL ESTATE ───────────────────────────────────────────────
    {
      slug: "real-estate",
      name: "Real Estate",
      icon: "🏠",
      tagline: "Own the Google Map. Be the First Agent Every Buyer Sees.",
      heroSubtitle: "87% of home buyers use Google Maps to find local real estate agents. Without a dominant Google Business Profile, you're invisible to the largest buyer pool in history. We change that.",
      overview: "Google Business Profile is the single highest-ROI digital asset available to real estate agents and brokerages — and the most neglected. While websites take months to rank, a fully optimized GBP can put you in front of local buyers and sellers within weeks.\n\nWhen someone searches 'real estate agent near me' or 'homes for sale [city],' the local 3-pack appears above every organic result and captures 44% of all clicks. Agents in that 3-pack get calls. Agents outside it don't. The difference between appearing in the 3-pack and sitting at position 10 is not luck — it's optimization.\n\nRankston's GMB optimization for real estate covers every ranking factor Google uses to evaluate your profile: category selection, review velocity, photo strategy, post cadence, Q&A management, and your NAP consistency across the web. The result is a Profile that dominates local real estate searches and drives qualified buyer and seller inquiries directly to your phone.",
      stats: [
        { val: "87%", label: "of buyers use Google Maps to find agents" },
        { val: "44%", label: "of local search clicks go to the 3-pack" },
        { val: "30 days", label: "to first GBP visibility improvements" },
        { val: "5×", label: "more calls from a fully optimized GBP" }
      ],
      painPoints: [
        { title: "Not Appearing in Google Maps 3-Pack", desc: "The local 3-pack dominates real estate searches. Without it, you're competing for organic results that appear below the fold — capturing a fraction of available clicks." },
        { title: "Incomplete GBP Categories and Services", desc: "Most agents select only 'Real Estate Agent' as their category and leave services blank. Missing categories like 'Real Estate Consultant,' 'Property Management,' and specific service listings suppress your ranking for valuable secondary searches." },
        { title: "Zero Photo Strategy", desc: "GBPs with 10+ high-quality photos get 42% more direction requests. Most agent profiles have a headshot and one exterior photo. Photos of listings, open houses, team, and neighborhoods signal an active, trustworthy business." },
        { title: "Review Volume Below Competitive Threshold", desc: "In most markets, appearing in the real estate 3-pack requires 30+ reviews at 4.7+ stars. Agents with under 15 reviews are systematically filtered below the visible pack regardless of how long they've been in business." },
        { title: "No Post Strategy — Profile Appears Inactive", desc: "Google rewards active profiles. Agents who post weekly show higher GBP engagement signals than those who haven't posted in months. An inactive profile looks abandoned to both Google and potential clients." },
        { title: "NAP Inconsistency Across Directories", desc: "Name, address, and phone mismatches between your GBP, Zillow profile, Realtor.com, and other directories create trust conflicts that actively suppress your local ranking." }
      ],
      strategy: {
        title: "Our GMB Strategy for Real Estate Agents",
        intro: "Dominating Google Maps for real estate requires a systematic approach to every ranking signal — not just filling out your profile once. We optimize your GBP as an ongoing marketing channel, not a static directory listing.",
        pillars: [
          { title: "Profile Completeness & Category Architecture", desc: "A complete GBP covers every available data point Google uses for ranking and display", tactics: ["Primary + secondary category optimization", "Complete service listing: buyer representation, seller representation, relocation, property management", "Service area configuration covering all neighborhoods you serve", "Attributes: by appointment, online estimates, wheelchair accessible"] },
          { title: "Review Velocity System", desc: "Reviews are the #1 local pack ranking signal for real estate", tactics: ["Post-transaction review request: SMS + email within 24 hours of closing", "Review response strategy: every review answered within 24 hours", "Review keyword coaching: helping clients mention neighborhoods and services", "Targeting 6–10 new reviews per month consistently"] },
          { title: "Content & Engagement Signals", desc: "Active profiles rank higher — we keep yours signaling activity every week", tactics: ["Weekly GMB posts: new listings, market stats, neighborhood guides", "Q&A management: seeding and answering property questions", "Monthly photo refresh: new listings, community photos, team content", "Google Messaging setup and response time optimization"] }
        ]
      },
      services: [
        "GBP Full Audit & Setup", "Category & Service Optimization",
        "Review Generation System", "Weekly Post Management",
        "NAP Citation Consistency", "Photo Strategy & Upload",
        "Q&A Seeding & Management", "Google Messaging Setup",
        "Service Area Configuration", "Competitor GBP Benchmarking",
        "Monthly Insights Reporting", "GBP Suspension Recovery"
      ],
      commonMistakes: [
        { mistake: "Using a PO Box or virtual office address", impact: "Google requires a verifiable physical address. Fake addresses get profiles suspended — wiping out all reviews and ranking history instantly.", fix: "Verified physical brokerage address with consistent signage. We handle the verification process and ensure full compliance with GBP guidelines." },
        { mistake: "Ignoring the Q&A section", impact: "Anyone can post questions — and answer them. Unanswered questions or incorrect community answers mislead potential clients and signal low engagement to Google.", fix: "We seed your Q&A with the 10 most common buyer and seller questions, provide optimized answers, and monitor for new community questions weekly." },
        { mistake: "Only one photo added at setup", impact: "Photos are a primary trust signal on mobile Google Maps. A profile with 4 photos loses mobile clicks to a competitor with 60 professionally curated photos every time.", fix: "Initial batch of 25+ photos: headshots, team, office, listings, neighborhoods. Monthly refresh with new content tied to active listings and sold properties." },
        { mistake: "Never responding to negative reviews", impact: "An unanswered 1-star review signals to potential clients that you don't care about customer experience. It also suppresses overall review sentiment signals.", fix: "Professional response protocol for every review — positive and negative — within 24 hours, demonstrating accountability and professionalism to prospective clients." }
      ],
      tools: ["Google Business Profile API", "BrightLocal", "Whitespark", "GatherUp", "ReviewTrackers", "PlePer GBP Tools", "Ahrefs Local", "Google Analytics 4", "CallRail"],
      timeline: {
        m1: "Full GBP audit, category fix, photo upload, review system launch, NAP consistency sweep.",
        m2: "First new reviews arriving. Weekly post cadence live. Q&A seeded.",
        m3: "Measurable GBP visibility improvements. 3-pack movement for neighborhood searches.",
        m6: "Consistent 3-pack presence for primary search terms. Review profile competitive.",
        m12: "Dominant local real estate GBP presence. 50+ reviews. Top-3 for all target area searches."
      },
      keywords: [
        "real estate agent near me", "realtor [city]", "homes for sale [neighborhood]",
        "real estate agent [city]", "best realtor [city]", "buy a home [city]",
        "sell my house [city]", "real estate office near me", "top rated realtor [city]",
        "real estate agent [neighborhood]"
      ],
      caseStudy: {
        client: "Brighton Real Estate Group",
        location: "Tampa, FL",
        before: "Position 14 in Google Maps, 11 reviews, 4 GBP photos",
        after: "Position 2 in Google Maps, 94 reviews, 78 GBP photos",
        leads: "28 inbound calls/mo from GBP (up from 3)",
        period: "6 months",
        highlight: "GBP became #1 lead source, surpassing Zillow and paid ads combined"
      },
      localVsNational: {
        local: "Real estate GMB is hyper-local — we optimize for every neighborhood, subdivision, and zip code you serve. A single well-optimized GBP can dominate an entire metro area's local pack for multiple agent + area keyword combinations.",
        national: "Brokerages and franchises with multiple offices need individual GMB profiles for each location — each optimized separately with location-specific photos, service areas, and review strategies."
      },
      faqs: [
        { q: "How quickly can GMB optimization improve my real estate lead flow?", a: "Most agents see measurable improvements in GBP impressions and calls within 30–45 days of optimization. Full 3-pack ranking improvements typically take 60–90 days depending on competition and starting review count." },
        { q: "Do I need a physical office to have a real estate GBP?", a: "Yes — Google requires a verifiable physical location. Most agents use their brokerage address. Solo agents working from home can use a brokerage address with permission. We help with the verification process." },
        { q: "How many reviews do I need to appear in the 3-pack?", a: "It varies by market competitiveness, but 25–40 reviews at 4.7+ stars is the baseline for most mid-size markets. We build your review count systematically with a post-closing request system." },
        { q: "What should I post on Google Business Profile?", a: "New listings, just-sold announcements, neighborhood guides, market stats, open house invitations, and local event mentions. We manage your entire post calendar as part of our GMB service." },
        { q: "Can my real estate GBP get suspended?", a: "Yes — common causes include address issues, keyword stuffing in the business name, or policy violations. We ensure full guidelines compliance to prevent suspension and handle recovery if it occurs." },
        { q: "How does GBP affect my overall SEO?", a: "GBP authority contributes to your local organic rankings. A well-optimized GBP with strong review signals helps your website rank better for local real estate searches beyond just the map pack." },
        { q: "Should I have separate GBPs for different cities I serve?", a: "Only if you have a physical office in each city. Google prohibits creating GBPs for locations where you don't have a real presence. Instead, we use service area settings to cover multiple cities from your primary GBP." },
        { q: "How do photos affect my Google Maps ranking?", a: "Google uses photo quantity and engagement as activity signals. GBPs with 100+ photos rank an average of 18% higher than those with fewer than 10. We build and maintain a consistent photo strategy." }
      ]
    },

    // ─── 2. RESTAURANTS ───────────────────────────────────────────────
    {
      slug: "restaurants",
      name: "Restaurants",
      icon: "🍽️",
      tagline: "Fill Tables Every Night. Restaurant GMB That Drives Walk-Ins.",
      heroSubtitle: "90% of guests check Google before visiting a restaurant. If your Google Business Profile isn't optimized with great photos, current menu, and strong reviews, you're sending customers to your competitors.",
      overview: "For restaurants, Google Business Profile is not a nice-to-have — it is the primary customer acquisition channel. Every day, thousands of hungry people search 'restaurants near me,' '[cuisine] restaurant [city],' and 'best brunch [neighborhood].' The restaurants that dominate these searches fill tables. The rest fight over whatever's left.\n\nRestaurant GMB is unique because customers make decisions in seconds based on three things: photos, ratings, and hours. A profile with 15 stunning food photos, 200 reviews averaging 4.8 stars, and accurate weekend hours converts browsers into walk-ins at 4× the rate of a bare-bones profile.\n\nRankston builds restaurant GBP presences that act as a 24/7 digital host — showing potential diners exactly why your restaurant is the right choice before they ever set foot through the door.",
      stats: [
        { val: "90%", label: "of diners check Google before visiting" },
        { val: "64%", label: "use Google Maps specifically to find restaurants" },
        { val: "4×", label: "conversion rate improvement with photo-rich GBP" },
        { val: "28%", label: "of 'near me' restaurant clicks go to 3-pack" }
      ],
      painPoints: [
        { title: "No Food Photography on GBP", desc: "Profiles with 10+ food photos get 42% more direction requests. Restaurants with only a logo or exterior photo lose customers to nearby competitors showcasing mouth-watering dish photography." },
        { title: "Menu Not Linked or Outdated", desc: "Google displays a menu preview directly on your GBP. An outdated menu link, a broken PDF, or no menu at all costs you customers who want to check before they visit." },
        { title: "Hours Not Updated for Holidays or Special Events", desc: "A customer who arrives to find you closed because your GBP showed wrong hours leaves a 1-star review and never returns. Wrong hours are the #1 cause of negative restaurant reviews." },
        { title: "Competitor Has 300 More Reviews", desc: "Restaurant decisions are heavily review-driven. A location with 12 reviews loses to one with 350 reviews at a similar rating every single time. Review count signals popularity." },
        { title: "Not Appearing for Cuisine-Specific Searches", desc: "'Best Italian restaurant [city]' or 'authentic sushi near me' — cuisine-specific searches convert at the highest rate. Without proper category selection and cuisine attributes, you're invisible for your own specialty." },
        { title: "No Posts for Specials, Events, or Seasonal Menus", desc: "Google Posts appear directly on your GBP and show up in local search. Restaurants that post weekly specials and events get 35% more GBP interactions than those with no post activity." }
      ],
      strategy: {
        title: "Our GMB Strategy for Restaurants",
        intro: "Restaurant diners decide in seconds. Our GMB strategy ensures every element of your profile — photos, reviews, menu, posts, hours — is optimized to convert a Google search into a filled seat.",
        pillars: [
          { title: "Visual Excellence", desc: "Food photos are the #1 conversion driver for restaurant GBP", tactics: ["Professional food photography upload (25+ initial images)", "Monthly photo refresh: seasonal dishes, specials, atmosphere", "Interior, exterior, and team photos for complete profile coverage", "Cover photo A/B testing for click-through optimization"] },
          { title: "Review Domination", desc: "Review count and recency determine both ranking and customer trust", tactics: ["Post-meal automated review request: SMS within 2 hours of dining", "Review response strategy: voice, warmth, and keywords in responses", "Flagging and disputing fake or policy-violating reviews", "Monthly review velocity report"] },
          { title: "Menu & Offer Optimization", desc: "Your GBP menu and posts drive direct conversions from Google", tactics: ["Google menu integration: items, descriptions, prices, dietary labels", "Weekly special posts targeting high-search days (Friday, Saturday)", "Event posts: live music, themed dinners, holiday reservations", "Offer posts: happy hour, lunch deals, seasonal promotions"] }
        ]
      },
      services: [
        "GBP Full Setup & Optimization", "Food Photography Integration",
        "Menu Upload & Management", "Review Generation System",
        "Weekly Post Management", "Holiday Hours Management",
        "Cuisine Category Optimization", "GBP Attributes Configuration",
        "Competitor Benchmarking", "NAP Citation Audit",
        "Reservation Link Integration", "Monthly Performance Reporting"
      ],
      commonMistakes: [
        { mistake: "Outdated or missing menu", impact: "60% of diners check the menu before visiting. A broken menu link or no menu loses these pre-qualified visitors to nearby restaurants with menus they can preview.", fix: "Complete Google menu integration with every item, price, description, and dietary information. Updated immediately when menu changes occur." },
        { mistake: "Ignoring Google Q&A", impact: "Diners ask questions like 'do you have parking,' 'is it good for groups,' 'do you take reservations.' Unanswered questions or wrong answers cost reservations daily.", fix: "We seed your Q&A with the 10 most common diner questions and monitor for new questions weekly, providing immediate accurate answers." },
        { mistake: "No response to negative reviews", impact: "A 1-star review with no response signals that the restaurant doesn't care. Potential diners read 6+ reviews before deciding — one unanswered complaint outweighs three positive reviews in their decision.", fix: "Professional, empathetic review responses within 6 hours for negative reviews — demonstrating your commitment to guest satisfaction." },
        { mistake: "Same photos for 12+ months", impact: "Stale photos signal an unchanged, potentially deteriorating restaurant experience. Google also rewards fresh content with improved local ranking signals.", fix: "Monthly photo refresh program — new seasonal dishes, specials, and atmosphere shots that keep your profile looking current and alive." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Yelp API", "OpenTable Integration", "ReviewTrackers", "Canva Pro (social assets)", "Google Analytics 4"],
      timeline: {
        m1: "Full GBP audit, photo upload, menu integration, review system launch, hours audit.",
        m2: "Weekly post cadence live. New reviews arriving. Q&A seeded.",
        m3: "GBP impressions growing. New customer calls from cuisine category searches.",
        m6: "Top-3 local pack for primary cuisine and neighborhood terms. 80+ reviews.",
        m12: "Dominant local restaurant presence. Seasonal traffic captured consistently."
      },
      keywords: [
        "restaurants near me", "[cuisine] restaurant [city]", "best restaurant [neighborhood]",
        "brunch [city]", "dinner [city]", "date night restaurants [city]",
        "family restaurant near me", "takeout [cuisine] near me", "restaurant open now [city]"
      ],
      caseStudy: {
        client: "Saveur Kitchen",
        location: "Austin, TX",
        before: "38 reviews, GBP position 18, 6 walk-ins/week from Google",
        after: "287 reviews, GBP position 1 for 'French restaurant Austin', 41 walk-ins/week",
        leads: "Saturday nights fully booked 2 weeks in advance",
        period: "7 months",
        highlight: "Food photo strategy drove 340% increase in GBP direction requests"
      },
      localVsNational: {
        local: "Restaurants are almost exclusively local — we build neighborhood-level GBP dominance so you own the top of search for every cuisine, occasion, and dining need in your area.",
        national: "Restaurant chains and groups need individual GBP optimization for every location, with brand-consistent photo strategies and centralized post management that maintains local relevance."
      },
      faqs: [
        { q: "How many photos should a restaurant GBP have?", a: "Minimum 25 to start; 100+ is the benchmark for dominant restaurant GBPs. We upload an initial batch of 25+ and refresh monthly with seasonal and special content." },
        { q: "Should I respond to every Google review?", a: "Yes — both positive and negative. Responses signal active management, improve review sentiment signals, and give you a chance to address concerns publicly. We manage all review responses." },
        { q: "Can I put coupons or discounts on my GBP?", a: "Yes — Google Offer Posts support promotion codes, discounts, and limited-time deals. They appear on your profile and can be a significant driver of first-time visits." },
        { q: "How do I get more Google reviews for my restaurant?", a: "The most effective method: SMS review request sent within 2 hours after the check is closed, while the dining experience is fresh. We set up the automated system targeting 20+ new reviews per month." },
        { q: "What attributes should I enable on my restaurant GBP?", a: "All applicable: dine-in, takeout, delivery, reservations, outdoor seating, parking, good for kids, vegetarian options, alcohol, live music. Attributes directly affect which filtered searches you appear in." },
        { q: "Does my GBP show my menu prices?", a: "Yes — if you integrate your menu through Google's menu editor or a supported platform (SinglePlatform, GloriaFood), prices and items appear directly on your GBP card in search results." },
        { q: "How do I handle holiday hours on Google?", a: "We configure holiday hours proactively before every major holiday — updating your GBP to show correct hours so customers aren't turned away by outdated information." },
        { q: "Will a bad review hurt my Google ranking?", a: "One negative review rarely hurts ranking significantly — but a pattern of unanswered negative reviews, low average rating, or declining review velocity can suppress ranking over time." }
      ]
    },

    // ─── 3. DENTISTS ──────────────────────────────────────────────────
    {
      slug: "dentists",
      name: "Dental Practices",
      icon: "🦷",
      tagline: "Fill Your Schedule From Google Maps. Dental GMB That Books Appointments.",
      heroSubtitle: "When a patient has a toothache or needs a cleaning, they search Google Maps and call the first dental practice they trust. We make that practice yours — in the 3-pack, with the reviews, every day.",
      overview: "Dental practices live and die by local visibility. When a patient searches 'dentist near me' or 'emergency dentist [city],' they are ready to book — today. The dental practices that capture these searches consistently fill their schedules without relying on expensive paid advertising or referral networks alone.\n\nThe Google Business Profile 3-pack captures 44% of clicks for local dental searches and appears before every organic result. Dental practices outside the 3-pack are effectively invisible to the majority of searching patients. Within the 3-pack, reviews and photos determine who gets the call.\n\nRankston builds dental GBP presences that dominate local pack rankings through systematic review generation, complete profile optimization, and active posting strategies that signal to Google and patients alike that your practice is the most trusted option in their search area.",
      stats: [
        { val: "77%", label: "of patients research dentists online before booking" },
        { val: "44%", label: "of local search clicks go to GBP 3-pack" },
        { val: "5×", label: "more new patient calls from optimized GBP" },
        { val: "30 days", label: "to measurable GBP visibility improvement" }
      ],
      painPoints: [
        { title: "Not in Google Maps 3-Pack for 'Dentist Near Me'", desc: "'Dentist near me' is searched 3.3 million times per month in the US. Practices outside the 3-pack capture less than 5% of these searchers. The 3-pack is where new patients are won." },
        { title: "Fewer Reviews Than Competing Practices", desc: "A dental practice with 25 reviews loses to one with 200 reviews for the same search position. Patients equate review count with quality and experience." },
        { title: "No Service-Specific GBP Categories", desc: "Most dental GBPs only select 'Dentist' as their category. Missing secondary categories like 'Cosmetic Dentist,' 'Dental Implants Periodontist,' 'Emergency Dental Service' means you're invisible for high-value specialty searches." },
        { title: "GBP Photos Are Outdated or Low Quality", desc: "Your GBP photos are the first impression for new patients. Outdated interior photos, no staff photos, and zero treatment room imagery fail to build the confidence needed to book." },
        { title: "No Appointment Booking Link", desc: "Google allows GBPs to display a direct appointment booking link. Dental practices without one add friction to the booking process, losing patients who want to schedule instantly." },
        { title: "No Posts About Services or Offers", desc: "Regular posts about new patient specials, dental hygiene tips, and service announcements keep your GBP active and relevant — both for ranking signals and for patients evaluating your practice." }
      ],
      strategy: {
        title: "Our GMB Strategy for Dental Practices",
        intro: "New dental patients need to trust your practice before they ever walk through the door. Our GMB strategy builds that trust through reviews, photos, and content that communicate your quality, your team, and your patient experience.",
        pillars: [
          { title: "Category & Service Architecture", desc: "Proper category selection is foundational to appearing in specialty and service-specific dental searches", tactics: ["Primary category: Dentist", "Secondary categories: Cosmetic Dentist, Pediatric Dentist, Emergency Dental Service, Dental Implants Periodontist", "Complete service listing: cleaning, whitening, Invisalign, implants, emergency, root canal", "Insurance attribute configuration"] },
          { title: "Patient Review Acceleration", desc: "Reviews are the #1 ranking and conversion factor for dental GBPs", tactics: ["Post-appointment SMS review request (sent within 4 hours)", "Review QR code cards for check-out desk", "Staff review coaching: when and how to ask", "Targeting 15+ new reviews per month"] },
          { title: "Active Profile Management", desc: "An active GBP signals trustworthiness to both Google and patients", tactics: ["Bi-weekly posts: dental tips, new patient offers, service highlights", "Monthly photo refresh: new staff, equipment, patient-friendly spaces", "Q&A management: answering insurance, cost, and service questions", "Appointment booking link setup and monitoring"] }
        ]
      },
      services: [
        "GBP Full Audit & Optimization", "Dental Category Architecture",
        "Patient Review Generation System", "Appointment Link Integration",
        "Bi-Weekly Post Management", "Clinical Photo Strategy",
        "Insurance Attributes Setup", "Q&A Management",
        "NAP Citation Consistency", "Emergency Dentist GBP Signals",
        "Competitor Benchmarking", "Monthly New Patient Reporting"
      ],
      commonMistakes: [
        { mistake: "Only 'Dentist' as GBP category", impact: "Searches for 'cosmetic dentist,' 'children's dentist,' and 'emergency dental near me' require matching secondary categories. One category misses 60%+ of available specialty searches.", fix: "Complete category architecture with primary + 4 secondary categories matching every major service you offer, each unlocking additional high-intent search visibility." },
        { mistake: "No booking link on GBP", impact: "Patients ready to book want zero friction. A missing booking link forces them to call, wait, or look for an easier option — your competitor's profile with an online booking button.", fix: "Direct booking link integration from your scheduling software (Dentrix, Open Dental, etc.) so patients can book directly from your GBP card in search results." },
        { mistake: "Under 30 reviews for your market", impact: "Below 30 reviews, you're below the trust threshold for most new patients comparing practices. The practice with 150 reviews wins the call regardless of office quality.", fix: "Systematic post-appointment review request system generating 12–18 new patient reviews per month until you reach and maintain a competitive review profile." },
        { mistake: "Interior photos from 2018", impact: "Stale photos signal an outdated practice. New patients are choosing between your 2018 waiting room photos and a competitor's recently refreshed, modern facility images.", fix: "Professional office photography refresh covering reception, operatories, staff, and technology — renewed annually with monthly additions of team and content photos." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "NexHealth (booking integration)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "CallRail"],
      timeline: {
        m1: "Full audit, category fix, photo upload, booking link, review system activated.",
        m2: "First 15+ new reviews arriving. Weekly posts live. Q&A seeded.",
        m3: "GBP ranking improvements for primary 'dentist near me' searches measurable.",
        m6: "Top-3 local pack for dentist + city searches. 60+ reviews.",
        m12: "Dominant dental GBP. Full service category coverage. New patient flow from GBP matches or exceeds paid channels."
      },
      keywords: [
        "dentist near me", "dentist [city]", "emergency dentist near me",
        "cosmetic dentist [city]", "pediatric dentist [city]", "Invisalign [city]",
        "dental implants [city]", "teeth whitening [city]", "dental office near me"
      ],
      caseStudy: {
        client: "Clearwater Dental Studio",
        location: "Orlando, FL",
        before: "GBP position 12, 22 reviews, 8 new patient GBP calls/mo",
        after: "GBP position 2, 178 reviews, 54 new patient calls/mo",
        leads: "$48,000/mo in new patient revenue from GBP",
        period: "8 months",
        highlight: "Emergency dentist GBP searches drove 22 same-day appointment bookings monthly"
      },
      localVsNational: {
        local: "Dental GMB is neighborhood-level — we ensure you appear in the 3-pack for every relevant dental search in your service radius, from general dentistry to every specialty you offer.",
        national: "Dental service organizations (DSOs) with multiple locations need individual GBP optimization per office with centralized strategy, consistent brand assets, and location-specific review management."
      },
      faqs: [
        { q: "How do I get more dental patients from Google Maps?", a: "Three steps: (1) Optimize your GBP with complete categories, services, and photos. (2) Generate 15+ new Google reviews per month from your patients. (3) Post bi-weekly to keep your profile active. These three actions together can double your new patient GBP calls within 60–90 days." },
        { q: "What dental categories should I select on GBP?", a: "Primary: Dentist. Secondary: add any that match your services — Cosmetic Dentist, Pediatric Dentist, Emergency Dental Service, Dental Implants Periodontist, Orthodontist. Each secondary category makes you visible for those specific searches." },
        { q: "How do insurance attributes on GBP affect patient leads?", a: "GBP allows you to list accepted insurance plans. Patients filtering for 'dentist accepting [insurance]' near them will find you if these are set. Many practices don't configure this, missing a significant segment of searching patients." },
        { q: "Can I put a 'new patient special' on my Google Business Profile?", a: "Yes — Google Offer Posts support promotional offers with unique codes. A 'New Patient Exam + X-Rays — $99' offer post can significantly increase conversion rate from your GBP profile views." },
        { q: "Why does my dental practice keep losing to corporate chains on Google Maps?", a: "Corporate chains often have more reviews and longer GBP history. We close this gap with systematic review generation and consistent optimization. Individual practices win by being more locally specific and having more genuine, experience-based reviews." },
        { q: "How do emergency dental search rankings work?", a: "Emergency dental searches ('emergency dentist near me,' 'dentist open now') use GBP hours and category signals heavily. We ensure your GBP shows same-day/emergency availability through categories, hours, and service descriptions." },
        { q: "Should I have separate GBPs for different practice locations?", a: "Yes — each physical dental office needs its own GBP profile. We manage individual optimization for each location, maintaining consistent branding while customizing photos, service areas, and content." },
        { q: "How long until GMB optimization improves my new patient flow?", a: "Most practices see measurable GBP impression and call increases within 30–45 days. Reaching the 3-pack for primary 'dentist near me' searches typically takes 60–90 days with consistent review generation." }
      ]
    },

    // ─── 4. PLUMBERS ──────────────────────────────────────────────────
    {
      slug: "plumbers",
      name: "Plumbing Companies",
      icon: "🔧",
      tagline: "Own the Emergency Search. Be the Plumber Google Sends First.",
      heroSubtitle: "When a pipe bursts at midnight, homeowners search Google Maps and call the first plumber they see. We put your company in that position — in the 3-pack, with the reviews, 24/7.",
      overview: "Plumbing emergencies generate some of the most urgent, highest-converting local searches in any industry. A homeowner with a burst pipe or a failed water heater is searching Google Maps and dialing within minutes. The plumbing company that appears first gets the call. It's that simple.\n\nFor plumbing companies, Google Business Profile is the single most important marketing asset they have. The 3-pack dominates 85% of clicks for 'emergency plumber near me' searches. A plumbing company sitting at position 8 in maps is invisible to the most high-value, highest-urgency customers searching every day.\n\nRankston builds plumbing GBP profiles that dominate emergency and scheduled service searches through review acceleration, 24/7 availability signals, service-specific categories, and suburb-level coverage that ensures you appear wherever homeowners in your territory are searching.",
      stats: [
        { val: "85%", label: "of emergency plumber clicks go to the 3-pack" },
        { val: "71%", label: "of emergency searches result in same-day call" },
        { val: "3-pack", label: "position is worth $50K+ in annual revenue" },
        { val: "60 days", label: "to 3-pack movement for emergency terms" }
      ],
      painPoints: [
        { title: "Not in 3-Pack for Emergency Plumber Searches", desc: "85% of clicks for emergency plumbing searches go to the 3-pack. Position 4+ in maps means you're invisible for your most valuable, highest-converting customer type." },
        { title: "GBP Doesn't Show 24/7 or Emergency Availability", desc: "Emergency searches heavily weight 24/7 availability signals. If your GBP shows only 9–5 hours with no emergency service indication, you're invisible to the majority of emergency plumbing searches." },
        { title: "Under 40 Reviews Compared to Established Competitors", desc: "Plumbing is high-trust — homeowners are letting a stranger into their home, often in a crisis. Below 40 reviews, you're systematically chosen last vs. competitors with 150+ reviews." },
        { title: "Wrong or Missing Service Categories", desc: "GBP allows plumbing-specific service categories. Missing 'Emergency Plumbing Service,' 'Water Heater Repair,' 'Drain Cleaning' means you're invisible for these high-value searches." },
        { title: "No Service Area Configuration", desc: "Plumbing companies serve a radius, not just one address. Without proper service area configuration, your GBP only ranks prominently near your business address — missing leads from every suburb you serve." },
        { title: "No Photos Showing Work or Team", desc: "Homeowners choosing a plumber want to see a professional, trustworthy operation. No photos of uniforms, trucks, completed work, or team members signal an unknown commodity vs. an established business." }
      ],
      strategy: {
        title: "Our GMB Strategy for Plumbing Companies",
        intro: "Plumbing customers are in urgency mode — they need help now and they pick fast. Our GMB strategy ensures you appear first, look trustworthy instantly, and remove every friction point between a Google search and a booked service call.",
        pillars: [
          { title: "Emergency Availability Signals", desc: "Emergency search ranking requires explicit 24/7 availability configured everywhere Google checks", tactics: ["24/7 hours configured on GBP", "Emergency Plumbing Service as secondary category", "'Available 24/7' in business description and service descriptions", "Google Messaging set up for after-hours text inquiries"] },
          { title: "Service Area Domination", desc: "Plumbing companies serve a wide radius — your GBP must reflect every suburb and community you cover", tactics: ["Service area radius set to cover every zip code you serve", "Suburb-specific keyword integration in posts and Q&A", "Citation consistency for every suburb in your territory", "Multiple GBPs for offices in different service areas (where applicable)"] },
          { title: "Trust & Review Acceleration", desc: "In a high-urgency, high-trust service category, reviews are the primary conversion signal", tactics: ["Post-job SMS review request within 2 hours of service completion", "Review response: professional, keyword-rich responses to every review", "Before/after job photo uploads monthly", "Review count target: 10+ new reviews per month"] }
        ]
      },
      services: [
        "GBP Full Setup & Emergency Optimization", "24/7 Availability Configuration",
        "Service Area Setup", "Plumbing Category Architecture",
        "Review Generation System", "Before/After Photo Upload",
        "Google Messaging Setup", "Service Description Optimization",
        "NAP Citation for All Service Areas", "Competitor Benchmarking",
        "Emergency Search Ranking Strategy", "Monthly Lead Attribution"
      ],
      commonMistakes: [
        { mistake: "9-5 hours with no emergency note", impact: "Emergency searches look for '24-hour plumber near me.' A GBP showing only business hours with no emergency availability signal is invisible for the highest-value searches in plumbing.", fix: "Configure true 24/7 hours or add emergency service hours, 'Available 24/7' in business description, and Emergency Plumbing Service as a secondary category." },
        { mistake: "No service area set — only ranking near office address", impact: "A plumbing company serving a 30-mile radius with no service area configured ranks prominently only near their physical address, missing 80%+ of their actual territory.", fix: "Complete service area configuration covering every city, suburb, and zip code in your service radius — maximizing the geographic footprint of your GBP." },
        { mistake: "Zero photos of trucks, uniforms, or completed work", impact: "Homeowners choosing an emergency plumber are making a trust decision in 10 seconds. No photos of professional equipment, uniforms, and completed jobs loses them to competitors who look more established.", fix: "Photo batch upload: fleet photos, uniformed technicians, completed project photos (before/after), dispatch area, and equipment. Monthly additions." },
        { mistake: "Not responding to reviews mentioning specific services", impact: "Review responses that mention specific services ('thank you for trusting us with your water heater repair') act as keyword signals that improve ranking for those specific service searches.", fix: "Keyword-conscious review responses that naturally mention specific services: drain cleaning, water heater, leak repair, sewer — improving relevance for those searches." }
      ],
      tools: ["Google Business Profile API", "BrightLocal", "GatherUp", "CallRail", "Whitespark", "ReviewTrackers", "Google Analytics 4"],
      timeline: {
        m1: "Full audit, emergency hours, service area config, categories fix, review system launch.",
        m2: "15+ new reviews arriving. Emergency search visibility improving.",
        m3: "First 3-pack movement for emergency plumber + suburb searches.",
        m6: "Top-3 for emergency plumber in primary service area. 60+ reviews.",
        m12: "Dominant plumbing GBP across full service territory. HomeAdvisor dependency reduced."
      },
      keywords: [
        "emergency plumber near me", "plumber near me", "24 hour plumber [city]",
        "burst pipe repair [city]", "water heater repair near me",
        "drain cleaning [city]", "plumbing company near me", "plumber [suburb]"
      ],
      caseStudy: {
        client: "FastFlow Plumbing",
        location: "Phoenix, AZ",
        before: "GBP position 14, 18 reviews, 4 emergency calls/mo from GBP",
        after: "GBP position 2, 127 reviews, 38 emergency calls/mo",
        leads: "$42K in additional monthly revenue attributed to GBP",
        period: "7 months",
        highlight: "24/7 emergency configuration drove 3× increase in after-hours service calls"
      },
      localVsNational: {
        local: "Plumbing GMB is suburb-level — we ensure you appear in the 3-pack for every community in your service area, not just near your office. Full territory coverage is the goal.",
        national: "Plumbing franchise networks need location-specific GBP optimization for every office, with centralized brand assets and franchise-level review management systems."
      },
      faqs: [
        { q: "How do I rank for 'emergency plumber near me' on Google Maps?", a: "Three things: (1) Configure 24/7 or extended emergency hours on your GBP. (2) Add 'Emergency Plumbing Service' as a secondary category. (3) Build 40+ reviews with recency. The combination of availability signals, category matching, and review authority is what wins emergency searches." },
        { q: "Should I set my plumbing GBP as 'no storefront' since customers don't visit my office?", a: "Only if you truly don't serve customers at your address at all. Most plumbing companies keep their office address visible. We configure your service area to cover your full territory regardless of storefront setting." },
        { q: "How do service areas work on GBP for plumbers?", a: "You set a radius or list specific cities/zip codes that you serve. Google uses this to show your GBP in results for those areas — not just near your physical address. We maximize this to cover your entire territory." },
        { q: "How many photos should a plumbing GBP have?", a: "Minimum 20 to start, with monthly additions. The most effective photos: uniformed technicians, fleet vehicles, before/after jobs, and equipment. These build instant credibility with homeowners selecting an emergency plumber." },
        { q: "What should I post on Google Business Profile as a plumber?", a: "Seasonal plumbing tips (winter pipe protection, summer AC drain maintenance), service spotlight posts (water heater replacement, drain cleaning specials), and completed job posts with photos. Monthly minimum, weekly ideal." },
        { q: "Can I compete with large plumbing franchise chains on Google Maps?", a: "Yes — franchise chains rank well on brand authority but weaker on local specificity. We build suburb-level review profiles, locally-relevant Q&A, and service area content that out-localizes franchise template GBPs." },
        { q: "How do reviews affect my emergency plumbing search ranking?", a: "Review count, recency, and rating are among the top 3 ranking signals for local plumbing searches. A plumber with 150 reviews at 4.8 stars consistently ranks above one with 30 reviews at 5.0 stars for high-competition searches." },
        { q: "How long until my plumbing GBP starts generating emergency calls?", a: "Most plumbing companies see measurable GBP improvement within 30–45 days. Emergency-specific 3-pack ranking for your primary service area typically takes 60–90 days with consistent review generation and proper configuration." }
      ]
    },

    // ─── 5. LAWYERS ───────────────────────────────────────────────────
    {
      slug: "lawyers",
      name: "Law Firms",
      icon: "⚖️",
      tagline: "Be the First Call When Someone Needs Legal Help. Law Firm GMB That Wins Clients.",
      heroSubtitle: "People who need a lawyer search Google Maps and call within minutes. The law firm with the strongest local presence — the most reviews, the most complete profile — gets that call. We build that presence.",
      overview: "Legal services rank among the highest-urgency local searches. A person who just received divorce papers, had an accident, or faces a criminal charge is searching Google Maps right now — and they're calling within minutes of finding a result they trust.\n\nFor law firms, the Google Business Profile 3-pack is the most valuable digital real estate available. It captures 44% of all clicks for local legal searches and appears before every organic result and paid ad. Law firms that dominate the 3-pack for their practice areas consistently fill their intake calendars without heavy advertising spend.\n\nRankston builds law firm GBP presences that win on every ranking signal — review velocity, practice area category coverage, geographic service area depth, and the content quality signals that separate trusted firms from unknown listings. Our legal GMB programs turn the 3-pack into your most reliable intake channel.",
      stats: [
        { val: "96%", label: "of people needing legal help search online first" },
        { val: "44%", label: "of local legal search clicks go to the 3-pack" },
        { val: "72%", label: "of clients choose a lawyer with 50+ reviews" },
        { val: "48 hrs", label: "avg time from first search to retained attorney" }
      ],
      painPoints: [
        { title: "Invisible in Maps for Practice-Area Searches", desc: "Searches like 'divorce lawyer near me' or 'car accident attorney [city]' convert at 40%+ — the highest of any legal channel. Firms outside the 3-pack are invisible to these highest-value searches." },
        { title: "Only One Practice Area Category Selected", desc: "A firm practicing family law, personal injury, and estate planning needs separate category signals for each. One category means you only rank for one practice area's search traffic." },
        { title: "Fewer Reviews Than Local Competitors", desc: "Legal clients making high-stakes decisions trust review count as a proxy for competence and experience. A firm with 15 reviews loses to one with 200 reviews at first glance." },
        { title: "No Attorney Profiles or Team Content", desc: "Clients hire attorneys, not firms. GBP photos of attorneys, team bios, and personalizing content build the human trust signal that drives calls." },
        { title: "No Consultation Booking Link", desc: "Law firms offering free consultations should have a direct booking link on their GBP. Friction-free scheduling converts hesitant searchers into intakes." },
        { title: "Posts and Profile Are Static Since Setup", desc: "An inactive GBP looks like a neglected firm. Legal clients making major life decisions don't call firms that appear to have abandoned their online presence." }
      ],
      strategy: {
        title: "Our GMB Strategy for Law Firms",
        intro: "Legal clients are making high-stakes decisions and need to trust you before making first contact. Our GMB strategy builds that trust through reviews, attorney visibility, and practice area coverage that converts searches into consultations.",
        pillars: [
          { title: "Practice Area Category Architecture", desc: "Each practice area you serve requires category coverage to appear in those searches", tactics: ["Primary category: your core practice area", "Secondary categories: every additional practice area you accept cases in", "Service listing: all practice areas with descriptions", "Attribute configuration: free consultation, by appointment, languages spoken"] },
          { title: "Client Review Acceleration Program", desc: "Reviews are the #1 trust signal for legal client acquisition", tactics: ["Post-case resolution (for won cases/satisfied clients) review request", "Review response protocol: professional tone, no case details disclosed", "Targeting 8–12 new reviews per month", "Monitoring for fake or competitor-placed negative reviews"] },
          { title: "Expertise & Trust Signals", desc: "Legal clients research extensively before calling — your GBP must project credibility", tactics: ["Attorney profile photos and team headshots", "Bar admission and certification uploads", "Q&A seeded with practice-area questions", "Award and recognition posts (Super Lawyers, Best Lawyers, AV Preeminent)"] }
        ]
      },
      services: [
        "GBP Full Audit & Legal Setup", "Practice Area Category Architecture",
        "Attorney Profile Photo Strategy", "Client Review Generation System",
        "Free Consultation Link Integration", "Post Management (2x/month)",
        "Q&A Legal Content Seeding", "NAP Citation for All Practice Areas",
        "Bar Credential Display", "Service Area Configuration",
        "Competitor Law Firm Benchmarking", "Monthly Intake Source Reporting"
      ],
      commonMistakes: [
        { mistake: "Generic 'Law Office' as only GBP category", impact: "A search for 'personal injury attorney near me' requires the Personal Injury Attorney category. A search for 'divorce lawyer near me' requires the Divorce Lawyer category. One generic category misses both.", fix: "Complete category architecture covering every practice area: Personal Injury Attorney, Divorce Lawyer, Criminal Justice Attorney, Estate Planning Attorney — each unlocking the search traffic for that area." },
        { mistake: "No photo of the attorneys", impact: "Photos of an empty office lobby don't build the personal trust that drives a scared or stressed potential client to call. Attorney face photos are among the highest-converting GBP elements.", fix: "Professional headshots of every attorney, plus team photos, office, and consultation room images. Monthly additions tied to case wins, recognition, and team events." },
        { mistake: "Reviews not requested after case resolution", impact: "Attorneys who don't ask for reviews after a successful representation miss their best review opportunity. A satisfied client after a good outcome is the ideal review contributor.", fix: "Systematic post-case review request for all appropriate cases — structured to comply with bar rules while capturing the genuine client satisfaction that drives future clients to call." },
        { mistake: "No posts for case results or community involvement", impact: "GBP posts for community involvement, firm news, and legal tips signal an active, engaged firm — and give Google fresh content to index for local relevance.", fix: "Bi-monthly posts: legal tips relevant to your practice areas, community event participation, awards, and new attorney announcements — each naturally incorporating practice area keywords." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Clio (booking integration)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "CallRail"],
      timeline: {
        m1: "Full audit, category architecture, attorney photos, review system launch, consultation link.",
        m2: "8–12 new reviews arriving monthly. Posts calendar live.",
        m3: "Measurable Maps ranking improvements for primary practice area searches.",
        m6: "Top-3 for core practice area + city. 50+ reviews. Secondary areas gaining visibility.",
        m12: "Dominant local law firm GBP presence. Multiple practice areas in top-3."
      },
      keywords: [
        "lawyer near me", "attorney [city]", "personal injury lawyer [city]",
        "divorce attorney near me", "criminal defense lawyer [city]",
        "DUI attorney [city]", "family law attorney [city]", "estate planning lawyer [city]",
        "free consultation lawyer near me", "car accident attorney [city]"
      ],
      caseStudy: {
        client: "Harmon & Cole Law Group",
        location: "Denver, CO",
        before: "GBP position 11 for personal injury, 14 reviews",
        after: "GBP position 1, 143 reviews, 22 consultation requests/mo from GBP",
        leads: "$380K in new case revenue attributed to GBP in 9 months",
        period: "9 months",
        highlight: "Personal injury attorney category change drove 4× increase in qualified GBP calls"
      },
      localVsNational: {
        local: "Law firm GMB is practice-area and geography specific. We build dominance for every practice area in every city and county you serve — local 3-pack wins for the specific searches that drive your highest-value cases.",
        national: "Multi-office law firms and national practice groups need individual GBP optimization per office with centralized brand strategy, consistent review management, and practice-area content that reflects each location's jurisdiction."
      },
      faqs: [
        { q: "How do reviews affect a law firm's Google Maps ranking?", a: "Reviews are among the top 3 local ranking signals. Firms with more reviews, higher average ratings, and more recent reviews rank higher for competitive practice area searches. We build review velocity systematically." },
        { q: "Can I ask clients for Google reviews? Is it ethical?", a: "Yes — requesting reviews doesn't violate bar rules in most states as long as you don't offer incentives and don't ask about case-specific outcomes. We structure our review request templates to be fully compliant with state bar guidelines." },
        { q: "What practice area categories should I select?", a: "Every practice area you actively accept cases in — Personal Injury Attorney, Divorce Lawyer, Criminal Justice Attorney, Estate Planning Attorney, Immigration Attorney, etc. Each category makes you visible for those specific searches." },
        { q: "Should each attorney in our firm have their own GBP?", a: "No — individual attorney GBPs violate GBP policy. One GBP per physical office location is the correct structure. We optimize that profile to represent all attorneys and practice areas at that location." },
        { q: "What posts work best for a law firm GBP?", a: "Legal tips relevant to your practice areas perform best (not case results for confidentiality reasons). Community involvement, firm recognition, new team members, and law-adjacent advice posts keep your profile active." },
        { q: "How important is the free consultation link on GBP?", a: "Very — lowering the barrier to first contact is essential for legal services. A one-click 'book free consultation' button on your GBP converts searchers who would otherwise hesitate or look for a second option." },
        { q: "Can attorneys in different practice areas share a GBP?", a: "Yes — multi-practice firms use a single GBP at each office location. We optimize it with multi-practice categories and service listings so one profile captures searches across all your practice areas simultaneously." },
        { q: "How long until GMB improvements generate more legal consultations?", a: "Most firms see measurable GBP visibility improvement within 30–45 days. Reaching 3-pack for primary practice area searches typically takes 60–90 days with consistent review generation and category optimization." }
      ]
    },

    // ─── 6. HEALTHCARE ────────────────────────────────────────────────
    {
      slug: "healthcare",
      name: "Healthcare Practices",
      icon: "🏥",
      tagline: "Be the Practice Patients Find and Trust. Healthcare GMB That Fills Appointment Books.",
      heroSubtitle: "When patients need a doctor, specialist, or therapist, they search Google Maps. The practice with the best profile, the most reviews, and complete appointment information gets the call — and the long-term patient relationship.",
      overview: "The patient search journey starts on Google Maps. Whether someone needs a primary care physician, a therapist, a specialist, or urgent care, their first action is searching Google Maps for providers near them. Healthcare practices that appear in the top 3 capture 44% of these searching patients. Those that don't are invisible to their most accessible new patient stream.\n\nHealthcare GMB is subject to Google's highest content standards — HIPAA compliance constraints shape how reviews and content can be handled, and category selection determines which specialty-specific searches you appear in. Getting both right requires deep familiarity with healthcare GBP optimization.\n\nRankston builds healthcare GBP presences that optimize every ranking signal while maintaining full HIPAA compliance — growing your new patient pipeline from Google Maps without ever putting patient privacy at risk.",
      stats: [
        { val: "77%", label: "of patients find healthcare providers online" },
        { val: "44%", label: "of healthcare local searches click the 3-pack" },
        { val: "HIPAA", label: "compliance maintained in all review management" },
        { val: "60 days", label: "to measurable new patient GBP improvement" }
      ],
      painPoints: [
        { title: "Not Appearing for Specialty-Specific Patient Searches", desc: "'Cardiologist near me,' 'therapist accepting new patients,' 'urgent care near me' — specialty searches require matching GBP categories. Missing these means you're invisible to specialty patients." },
        { title: "Review Responses Risking HIPAA Compliance", desc: "Responding to patient reviews requires extreme care around what information is acknowledged. Non-compliant responses can expose practices to HIPAA liability — but no response costs new patients." },
        { title: "No Online Appointment Link on GBP", desc: "Healthcare patients expect online scheduling. A GBP without an appointment booking link loses patients who won't wait on hold or call during business hours." },
        { title: "Outdated Provider Photos or No Photos", desc: "Patients choose healthcare providers partly based on whether they feel comfortable with the team. Provider photos, office photos, and a welcoming visual presentation drive call conversion." },
        { title: "Multiple Providers with Confusing GBP Structure", desc: "Multi-provider practices often have messy GBP setups — duplicate profiles, mismatched addresses, or provider-level profiles that compete with the practice profile." },
        { title: "Insurance Information Not Visible on GBP", desc: "Insurance acceptance is a primary decision factor for healthcare patients. GBPs that don't display insurance information lose patients who filter searches by insurance compatibility." }
      ],
      strategy: {
        title: "Our GMB Strategy for Healthcare Practices",
        intro: "Healthcare patients need to trust you before their first appointment. Our HIPAA-compliant GMB strategy builds visibility, trust, and appointment volume through every available GBP optimization lever — with no compliance risk.",
        pillars: [
          { title: "Specialty Category Coverage", desc: "Every specialty and service type needs category coverage to capture its specific search traffic", tactics: ["Primary category: core specialty (General Practitioner, Dentist, Therapist, etc.)", "Secondary categories: every sub-specialty and service type", "Service listing with insurance information", "Specialist provider profiles merged correctly with practice GBP"] },
          { title: "HIPAA-Compliant Review Management", desc: "Healthcare review management requires specialized compliance expertise", tactics: ["HIPAA-compliant review response templates (never acknowledge patient relationship)", "Post-visit review requests using compliant methods", "Review monitoring for fake, competitor, or policy-violating content", "Targeting 10+ new reviews per month while maintaining compliance"] },
          { title: "Patient Trust Signals", desc: "Healthcare decisions are trust-intensive — every GBP element must build confidence", tactics: ["Provider headshots and credentials displayed in photos", "Appointment booking link from your EHR/scheduling system", "Insurance and accepted plans in attributes", "Q&A: hours, insurance, new patient availability, parking"] }
        ]
      },
      services: [
        "Healthcare GBP Full Setup", "Specialty Category Architecture",
        "HIPAA-Compliant Review Management", "Appointment Booking Link Integration",
        "Provider Photo Strategy", "Insurance Attribute Configuration",
        "Multi-Provider GBP Consolidation", "Patient Q&A Management",
        "NAP Citation Consistency", "Telehealth GBP Configuration",
        "Competitor Practice Benchmarking", "Monthly New Patient Reporting"
      ],
      commonMistakes: [
        { mistake: "Acknowledging patient relationship in review responses", impact: "Saying 'Thank you for being our patient...' in a review response confirms the reviewer is a patient — a potential HIPAA violation. This can result in regulatory investigation and significant fines.", fix: "HIPAA-compliant response templates that thank the reviewer for their feedback without acknowledging any patient relationship — maintaining compliance while still responding professionally to every review." },
        { mistake: "No appointment booking integration", impact: "45% of healthcare appointment requests happen outside business hours. A GBP without online booking loses these patients to practices that let them schedule at 10pm from their phone.", fix: "Direct integration of your scheduling system (Zocdoc, SimplePractice, Epic MyChart) with your GBP booking button — capturing appointment requests from every Google search, 24/7." },
        { mistake: "Specialty categories missing for sub-specialties", impact: "A primary care physician also offering geriatric care, sports medicine consults, and telehealth needs categories for each. Missing categories mean missing patients searching those specific terms.", fix: "Full specialty category audit and configuration — every GBP category that matches a service you provide, maximizing your search footprint across all relevant patient searches." },
        { mistake: "Insurance attributes not configured", impact: "Insurance compatibility is a first-filter decision for most patients. GBPs that don't display insurance information lose patients immediately to practices that answer this question on their profile.", fix: "Complete insurance attribute configuration listing every plan and network you accept — so patients filtering by insurance find and call your practice." }
      ],
      tools: ["Google Business Profile API", "GatherUp (HIPAA mode)", "BrightLocal", "Zocdoc (scheduling)", "ReviewTrackers", "Whitespark", "Google Analytics 4"],
      timeline: {
        m1: "Audit, specialty categories, booking link, provider photos, HIPAA review system launch.",
        m2: "10+ new compliant reviews arriving. Posts live.",
        m3: "Specialty search visibility improving. New patient calls from GBP measurable.",
        m6: "Top-3 for primary specialty + city. 50+ reviews.",
        m12: "Dominant local healthcare GBP. Specialty searches fully covered."
      },
      keywords: [
        "doctor near me", "[specialty] near me", "primary care physician [city]",
        "therapist accepting new patients [city]", "urgent care near me",
        "pediatrician [city]", "cardiologist near me", "family doctor [city]",
        "healthcare near me", "medical clinic near me"
      ],
      caseStudy: {
        client: "Westside Family Medicine",
        location: "Portland, OR",
        before: "GBP position 9, 28 reviews, 6 new patient GBP calls/mo",
        after: "GBP position 1, 212 reviews, 41 new patient calls/mo",
        leads: "Waitlist for new patients — 6-week schedule consistently full",
        period: "10 months",
        highlight: "Specialty category additions for telehealth and geriatric care drove 18 additional monthly searches"
      },
      localVsNational: {
        local: "Healthcare GMB is practice-level local — each provider location gets its own highly optimized profile covering all specialties, all providers, and all insurance plans at that location.",
        national: "Hospital systems and multi-location healthcare groups need enterprise GBP management with individual location optimization, centralized brand consistency, and HIPAA-compliant review management at scale."
      },
      faqs: [
        { q: "How do we manage Google reviews for a healthcare practice without violating HIPAA?", a: "Never confirm or deny the reviewer is a patient in your response. Thank them for their feedback generally. Our templates are reviewed against HIPAA guidance and applicable state regulations to ensure full compliance." },
        { q: "Should each physician have a separate GBP?", a: "No — GBP policy allows only one profile per physical location. Individual provider GBP profiles violate guidelines and can be merged or removed by Google. We optimize the practice-level GBP to represent all providers." },
        { q: "Can telehealth practices use GBP?", a: "Yes — telehealth practices can have a GBP at their registered business address. We configure service area settings to reflect the states where you're licensed and use telehealth-specific categories." },
        { q: "How do we get more patient reviews without violating healthcare regulations?", a: "Post-visit email or text with a general feedback link (not mentioning any specific treatment or condition). We provide compliant request templates that encourage reviews while staying within HIPAA guidance." },
        { q: "What photos should a healthcare practice have on GBP?", a: "Provider headshots (builds personal trust), welcoming reception/waiting room, exam rooms, and team photos. Avoid any photos that could identify or imply a patient relationship — HIPAA applies to images too." },
        { q: "Does GBP work for mental health practices?", a: "Yes — therapists, psychologists, and counselors actively searched on Google Maps. We optimize mental health GBPs with appropriate categories (Psychologist, Marriage Counselor, Mental Health Service) and compliant review systems." },
        { q: "How do I show insurance acceptance on my GBP?", a: "GBP has an Insurance/Payments attributes section where you can list accepted plans. We configure this fully so patients filtering by insurance find your practice. This single update often increases call volume measurably." },
        { q: "How long until healthcare GMB optimization fills appointment slots?", a: "Most practices see GBP impression and call improvements within 30–45 days. Filling appointment slots consistently from GBP typically takes 3–6 months depending on competition and starting review count." }
      ]
    },

    // ─── 7. ROOFERS ───────────────────────────────────────────────────
    {
      slug: "roofing",
      name: "Roofing Companies",
      icon: "🏗️",
      tagline: "Win Storm Season and Year-Round. Roofing GMB That Books Projects.",
      heroSubtitle: "After every storm, homeowners search Google Maps for roofers. The companies in the 3-pack book out for months. Be one of them — and keep the pipeline full year-round with a dominant GBP.",
      overview: "Roofing is one of the most geographically concentrated and storm-event-driven local service businesses. After a hail storm or wind event, local search volume for roofers spikes 10× in a matter of hours. The roofing companies that dominate Google Maps during these spikes book out completely while competitors scramble for leads.\n\nBeyond storm season, roofing companies compete for year-round commercial roofing projects, gutter work, maintenance contracts, and replacement jobs that homeowners research over weeks. A well-optimized Google Business Profile is the foundation of both emergency storm response acquisition and steady year-round project intake.\n\nRankston builds roofing GBPs that dominate local maps for both residential and commercial searches, with review systems that build the trust needed for projects averaging $10,000–$30,000+.",
      stats: [
        { val: "10×", label: "search volume spike after storm events" },
        { val: "$18K", label: "avg residential roofing project value" },
        { val: "85%", label: "of homeowners get 3+ quotes — GBP gets the first call" },
        { val: "45 days", label: "to first 3-pack movement with full optimization" }
      ],
      painPoints: [
        { title: "Not Visible During Post-Storm Search Spikes", desc: "Storm-season search spikes are the highest-ROI events for any roofer. Companies not in the 3-pack when volume spikes miss the entire event revenue opportunity." },
        { title: "Missing Commercial Roofing Categories", desc: "Commercial roofing projects are 5–50× the value of residential jobs. Separate commercial roofing category coverage is essential to appear for property manager and business owner searches." },
        { title: "No Before/After Project Photos", desc: "Homeowners spending $15,000+ on a roof need to see your work quality. Roofing GBPs without before/after project photos lose to competitors who visually demonstrate their craftsmanship." },
        { title: "Reviews Below 50 — Losing High-Value Projects", desc: "For a $15,000+ project, homeowners compare multiple roofers. Under 50 reviews positions you below the trust threshold. Competitors with 150+ reviews get the first call and often first project." },
        { title: "No Insurance/Storm Claim Expertise Signaling", desc: "Insurance claim assistance is a massive value-add for storm damage roofing. GBPs that don't signal insurance claim expertise miss homeowners specifically searching for insurance-friendly roofers." },
        { title: "Service Area Not Configured for Full Territory", desc: "Roofing companies often cover 3–5 counties. Without complete service area configuration, you only rank prominently near your office — missing the majority of your territory during storm events." }
      ],
      strategy: {
        title: "Our GMB Strategy for Roofing Companies",
        intro: "Roofing projects are large, infrequent, and high-trust — homeowners research carefully before choosing. Our GMB strategy builds the review volume, visual credibility, and geographic coverage needed to be the obvious choice when a homeowner needs a roof.",
        pillars: [
          { title: "Storm Response Readiness", desc: "During storm events, your GBP must be optimized to capture maximum visibility immediately", tactics: ["Full 24/7 or extended emergency hours during storm season", "Storm damage repair as primary service description", "Insurance claim assistance keywords in profile", "Emergency response Google Posts published immediately after storm events"] },
          { title: "Project Visual Portfolio", desc: "Roofing work is visual — before/after photos are your strongest conversion asset", tactics: ["25+ before/after residential project photos initially", "Monthly photo additions: new roofs, materials, team on projects", "Commercial project photos separately labeled", "Drone aerial completion photos where available"] },
          { title: "High-Value Review Architecture", desc: "Large project decisions require substantial review social proof", tactics: ["Post-project completion review request within 48 hours", "Targeting 12–15 new reviews per month", "Responses mentioning project type (shingle roof, metal roofing, commercial flat roof)", "Review monitoring for competitor or fraudulent negative reviews"] }
        ]
      },
      services: [
        "Roofing GBP Full Setup & Optimization", "Storm Response Configuration",
        "Commercial Roofing Category Setup", "Before/After Photo Strategy",
        "Insurance Claim Expertise Signals", "Review Generation System",
        "Service Territory Coverage", "Material/Product Attribute Setup",
        "Storm Event Post Management", "Competitor Benchmarking",
        "NAP Citation for All Service Areas", "Monthly Project Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "No commercial roofing category", impact: "Commercial property searches ('commercial roofer near me,' 'flat roof repair company') require the Roofing Contractor or Commercial Roofing category. Missing it makes you invisible to commercial project owners.", fix: "Commercial roofing as a secondary category with dedicated service descriptions for flat roofing, TPO, EPDM, and metal commercial systems — unlocking commercial property manager searches." },
        { mistake: "Not publishing posts during storm events", impact: "During the 48-hour window after a major storm event, search volume for roofers spikes dramatically. Roofers who publish emergency response posts immediately capture more of this surge visibility.", fix: "Storm response post templates ready to publish within 2 hours of a major weather event — with location-specific keywords, insurance assistance messaging, and your emergency contact information." },
        { mistake: "No before/after photos of completed roofs", impact: "A homeowner considering a $20,000 roof replacement makes a visual decision. A GBP with only a company logo and no project photos loses to a competitor showcasing 40 beautiful roof installations.", fix: "Systematic before/after documentation of every project — photos uploaded to GBP within 1 week of completion, building a visual portfolio that demonstrates quality across all roof types and materials." },
        { mistake: "Review requests sent weeks after project completion", impact: "Customer satisfaction is highest immediately after a successful installation. Requests sent 3–4 weeks later get a fraction of the response rate of requests sent within 48 hours of job completion.", fix: "SMS review request sent within 48 hours of project sign-off, while the new roof is fresh and the homeowner is satisfied. This timing typically achieves 3–4× higher response rates." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "CallRail", "Whitespark", "ReviewTrackers", "Google Analytics 4", "Angi/HomeAdvisor (monitoring)"],
      timeline: {
        m1: "Full audit, categories, service area, before/after photos, review system, storm response posts ready.",
        m2: "12–15 new reviews monthly. Posts calendar live for storm responses.",
        m3: "3-pack movement for roofing + city searches. Storm event capture during first weather event.",
        m6: "Top-3 for residential roofing in primary territory. 60+ reviews. Commercial category gaining.",
        m12: "Dominant roofing GBP. Storm season fully captured. Commercial project inquiries from GBP regular."
      },
      keywords: [
        "roofer near me", "roofing company [city]", "roof replacement [city]",
        "storm damage roof repair near me", "commercial roofer [city]",
        "hail damage roof repair near me", "metal roofing [city]",
        "roof inspection [city]", "roofing contractor [suburb]", "insurance roof claim [city]"
      ],
      caseStudy: {
        client: "Summit Roofing Co.",
        location: "Kansas City, MO",
        before: "GBP position 16, 31 reviews, missed first storm season",
        after: "GBP position 2, 147 reviews, booked 8 weeks out after first storm event",
        leads: "$620K in storm season revenue from GBP-attributed calls",
        period: "8 months",
        highlight: "Storm response posts published within 2 hours of event drove 84 calls in 72 hours"
      },
      localVsNational: {
        local: "Roofing is territory-based — we build dominant GBP presence across every county, city, and suburb in your service area so storm searches find you first regardless of where the hail falls.",
        national: "Regional roofing chains and national storm chasers need multi-location GBP management optimized for rapid territory deployment after major weather events."
      },
      faqs: [
        { q: "How do I get more roofing leads from Google during storm season?", a: "Three steps: (1) Ensure your GBP service area covers every county in your storm response territory. (2) Publish a storm damage response post immediately after every major weather event. (3) Have 50+ reviews before storm season so you're already ranking when volume spikes." },
        { q: "What GBP categories should a roofing company use?", a: "Primary: Roofing Contractor. Secondary: depending on services — Metal Roofing Contractor, Solar Panel Installer (if applicable), Gutter Cleaning Service, Commercial Roofing. Each secondary category opens additional search visibility." },
        { q: "How do photos help a roofing GBP get more calls?", a: "Dramatically. A homeowner deciding between two quotes downloads the GBP photos for both contractors. The one with 60 before/after project photos wins significantly more often than the one with a logo and office photo." },
        { q: "Should I advertise insurance claim assistance on my GBP?", a: "Yes — homeowners with storm damage actively search for roofers who help with insurance claims. GBP posts, service descriptions, and Q&A content that mention insurance claim assistance capture these high-converting searches." },
        { q: "How quickly should I respond to a storm event with GBP content?", a: "Within 2–4 hours of the storm. We prepare storm response post templates in advance so you can publish immediately — capturing the search surge before competitors who respond days later." },
        { q: "How many reviews does a roofing company need to be competitive?", a: "35–50 is the minimum for most mid-size markets. 100+ is the benchmark for top-3 map pack positions in competitive metros. We target 12–15 new reviews per month through our post-project request system." },
        { q: "Can a roofing company rank in Google Maps for multiple cities?", a: "Yes — through service area configuration covering your entire territory. A single GBP profile can appear in searches across dozens of cities and suburbs when the service area is properly configured." },
        { q: "What's the best time to ask roofing customers for reviews?", a: "Within 48 hours of project completion — when the new roof looks great, the homeowner is satisfied, and the experience is fresh. Review response rates drop significantly when requests are delayed beyond 1 week." }
      ]
    },

    // ─── 8. ECOMMERCE LOCAL ───────────────────────────────────────────
    {
      slug: "ecommerce",
      name: "Local & Hybrid eCommerce",
      icon: "🛍️",
      tagline: "Drive In-Store Traffic and Online Sales. Retail GMB That Works Omnichannel.",
      heroSubtitle: "76% of people who search for a local business visit that business within 24 hours. For local retailers and hybrid eCommerce brands with physical presence, Google Business Profile is the bridge between online search and in-store revenue.",
      overview: "The line between online and offline retail has blurred permanently. Today's shopper searches 'buy [product] near me,' reads Google reviews while standing in your parking lot, and compares your GBP photos to a competitor's before deciding which store to enter. For local retailers and businesses with physical locations, the Google Business Profile is the most direct driver of foot traffic available.\n\nHybrid eCommerce businesses — those selling both online and in physical stores — have a unique GMB opportunity: their GBP can drive both in-store visits and online purchase decisions simultaneously. A shopper who finds your GBP during a 'near me' search often ends up purchasing online if they can't visit immediately.\n\nRankston builds retail GBP presences that drive both physical traffic and online discovery — optimizing inventory visibility, product photos, store attributes, and local SEO signals that capture every type of shopping intent.",
      stats: [
        { val: "76%", label: "of local searchers visit a business within 24 hrs" },
        { val: "88%", label: "of 'near me' searches result in a call or visit" },
        { val: "42%", label: "more direction requests from photo-rich GBPs" },
        { val: "28%", label: "of retail GBP searchers purchase in-store same day" }
      ],
      painPoints: [
        { title: "Not Appearing for Product-Specific 'Near Me' Searches", desc: "'Buy running shoes near me' or 'organic skincare store near me' are product-specific local searches that require matching GBP product listings and categories." },
        { title: "Store Hours Wrong or Not Updated for Holidays", desc: "Nothing drives a 1-star review faster than a customer who drove to your store during listed hours and found it closed. Accurate, maintained hours are a trust foundation." },
        { title: "No Product Photos or Inventory Showcase", desc: "Shoppers decide whether to visit based on your GBP store photos. Retail GBPs without attractive product and interior photos lose foot traffic to competitors who showcase their inventory visually." },
        { title: "No In-Store Pickup or Local Inventory Signals", desc: "Google's local inventory ads and product catalog features allow retailers to show 'in stock near you' signals. Without these, you miss the highest-converting local shopping searches." },
        { title: "Under-Optimized for Shopping-Specific Attributes", desc: "Retail GBPs have unique attributes: curbside pickup, in-store shopping, same-day delivery, gift wrapping. Missing these attributes suppresses you from filtered shopping searches." },
        { title: "Low Review Count for Retail Category", desc: "Retail customers check reviews before visiting. Under 50 reviews positions your store below the trust threshold for first-time shoppers comparing nearby options." }
      ],
      strategy: {
        title: "Our GMB Strategy for Local & Hybrid Retailers",
        intro: "Retail GMB is about capturing the shopper at their peak purchase intent — the moment they're ready to buy and looking for the nearest option. We optimize every element to be found first and chosen most.",
        pillars: [
          { title: "Product & Inventory Visibility", desc: "Showing what you stock increases in-store visit intent significantly", tactics: ["Google product catalog integration for top sellers", "Product category keywords in business description and services", "In-stock signals for high-demand or seasonal items", "Product photo uploads for hero SKUs"] },
          { title: "Shopping Experience Attributes", desc: "Retail attributes directly filter which shopping searches you appear in", tactics: ["In-store shopping, curbside pickup, delivery configuration", "Gift cards, gift wrapping, loyalty program attributes", "Wheelchair accessibility, parking, payment methods", "Store department attributes for multi-department retailers"] },
          { title: "Review Volume for Retail Trust", desc: "Retail review accumulation requires different tactics than service businesses", tactics: ["Post-purchase review request via receipt email or SMS", "In-store QR code at checkout counter linking to review page", "Targeting 20+ new reviews per month given high transaction volume", "Seasonal review campaigns during holiday peaks"] }
        ]
      },
      services: [
        "Retail GBP Full Setup", "Product Catalog Integration",
        "Shopping Attribute Configuration", "Review Generation System",
        "In-Store & Holiday Hours Management", "Product Photo Strategy",
        "Local Inventory Signals", "Seasonal Post Management",
        "NAP Citation Consistency", "Competitor Retail Benchmarking",
        "Google Merchant Center Link", "Monthly Foot Traffic Reporting"
      ],
      commonMistakes: [
        { mistake: "No product listings on GBP", impact: "Google allows retailers to list products directly on their GBP profile. Missing products means missing 'near me' searches for specific items you carry.", fix: "Complete product catalog integration for your top 50 SKUs — with names, photos, descriptions, and prices — so searchers looking for specific products find your store as a local option." },
        { mistake: "Wrong or inconsistent store hours", impact: "Wrong hours generate negative reviews and destroy the trust of first-time visitors who arrive to find your store closed. Google also uses consistent hours as a trust signal.", fix: "Real-time hours management: standard hours set accurately, holiday hours configured 2 weeks in advance for every major holiday, with weekly audits to catch any discrepancies." },
        { mistake: "No curbside or pickup attribute configured", impact: "Post-pandemic, significant retail search volume includes 'buy online pickup in store near me.' Retailers without BOPIS attributes configured miss this buying behavior entirely.", fix: "All applicable fulfillment attributes configured: in-store pickup, curbside pickup, same-day delivery, buy online pickup in store — capturing every modern retail buying behavior." },
        { mistake: "Interior store photos are dark or low quality", impact: "Shoppers form a first impression of your store from GBP photos before they visit. Dark, blurry, or cluttered photos deter visits. High-quality interior photos of displays and products drive foot traffic.", fix: "Professional retail photography: well-lit product displays, clean store interior, featured products, and seasonal arrangements. Updated quarterly and with every major store reset or new product arrival." }
      ],
      tools: ["Google Business Profile API", "Google Merchant Center", "BrightLocal", "GatherUp", "ReviewTrackers", "Whitespark", "Google Analytics 4", "Shopify (product sync)"],
      timeline: {
        m1: "Full audit, attributes config, product catalog, hours setup, review system launch.",
        m2: "20+ reviews/mo flowing. Product listings live. Posts calendar active.",
        m3: "Product-specific 'near me' search visibility improving. Foot traffic from GBP measurable.",
        m6: "Top-3 for primary retail category + city. 100+ reviews.",
        m12: "Dominant local retail GBP. Seasonal traffic peaks consistently captured."
      },
      keywords: [
        "stores near me", "[product type] near me", "buy [product] near me",
        "retail store [city]", "[niche] shop near me", "boutique near me",
        "local [product] store", "in stock near me", "open now [city]",
        "gift shop near me"
      ],
      caseStudy: {
        client: "Cedar & Bloom Home Goods",
        location: "Nashville, TN",
        before: "GBP position 14, 28 reviews, estimated 15 weekly GBP visits",
        after: "GBP position 2, 214 reviews, 86 weekly direction requests from GBP",
        leads: "38% increase in Saturday foot traffic attributed to GBP optimization",
        period: "6 months",
        highlight: "Product catalog integration drove 'home decor near me' searches to #2 ranking"
      },
      localVsNational: {
        local: "Local retail GMB is store-level. We optimize each physical location for maximum visibility in its specific neighborhood — capturing every local shopper search, every 'near me' query, every 'open now' search.",
        national: "Retail chains need enterprise multi-location GBP management: consistent brand assets, centralized product catalog sync, and location-specific review management at scale."
      },
      faqs: [
        { q: "How does Google Business Profile drive in-store foot traffic?", a: "When someone searches for a product or store near them and finds your GBP, their most common next action is getting directions or calling. 76% of local searchers visit within 24 hours. Direction requests from GBP are a direct proxy for foot traffic intent." },
        { q: "Should a retailer with both a website and physical store optimize GBP?", a: "Absolutely — and it's even more important for hybrid retailers. Your GBP captures shoppers who want to buy locally today, while your website serves those who want to order online. Both channels need optimization." },
        { q: "Can I show my store's product inventory on Google Business Profile?", a: "Yes — Google's product catalog feature allows you to list up to hundreds of products with photos, descriptions, prices, and availability. This makes your GBP a searchable product listing that drives both store visits and purchase intent." },
        { q: "How do I get retail customers to leave Google reviews?", a: "In-store QR codes at the checkout counter, post-purchase email/SMS with a direct review link, and training staff to verbally mention reviews after positive interactions. High transaction volume retailers can build 100+ reviews within 2–3 months." },
        { q: "What shopping attributes should I enable on my retail GBP?", a: "Depending on your offerings: in-store shopping, curbside pickup, delivery, buy online pick up in-store, gift cards, wheelchair accessible entrance, parking, payment methods. Attributes filter which shopping searches you appear in." },
        { q: "How often should I update photos for a retail store GBP?", a: "Monthly at minimum — aligned with seasonal merchandise changes, new arrivals, and holiday displays. Retail GBPs with frequently updated photos signal an active, current inventory and consistently rank above static profiles." },
        { q: "Does Google Maps show if a product is in stock at my store?", a: "Through Google's See What's In Store (SWIS) and Merchant Center integration, retailers can display real-time inventory on their GBP. This 'in stock near you' signal is one of the highest-converting local retail features available." },
        { q: "Is Google Business Profile more important than Yelp for retail?", a: "Yes — Google Maps drives 3–5× more local retail traffic than Yelp in most markets. However, Yelp reviews can cross-post to Apple Maps, which matters for iOS users. We prioritize Google while maintaining Yelp presence." }
      ]
    },

    // ─── 9. CONTRACTORS ───────────────────────────────────────────────
    {
      slug: "contractors",
      name: "General Contractors",
      icon: "🏗️",
      tagline: "Win Projects Before the First Quote. Contractor GMB That Fills Your Pipeline.",
      heroSubtitle: "Homeowners and property managers search Google Maps before calling a single contractor. The company with the most reviews, best photos, and complete profile gets the first call — and first calls win most projects.",
      overview: "General contractors compete for some of the largest individual project values in local service industries — kitchen remodels ($30K–$100K+), additions ($75K–$250K+), full gut renovations, and commercial buildouts. Clients investing at this level research extensively before making first contact, and their research begins on Google Maps.\n\nThe 3-pack is where general contractors win or lose projects. Appearing in the top 3 for 'general contractor near me,' 'home remodeling contractor [city],' or 'commercial contractor [area]' means your phone rings first — before they've called anyone else. First contact advantage in contracting often means closed project without competitive bidding.\n\nRankston builds contractor GBP profiles that project quality, credibility, and experience from first glance — through project photography, substantial review counts, and service coverage that captures every type of construction and remodeling search in your territory.",
      stats: [
        { val: "89%", label: "of homeowners search online before hiring a contractor" },
        { val: "$45K", label: "avg general contractor project value" },
        { val: "3-pack", label: "position generates 5× more first-contact leads" },
        { val: "60 days", label: "to first 3-pack movement with full optimization" }
      ],
      painPoints: [
        { title: "Not Appearing for High-Value Project Searches", desc: "'Kitchen remodeling contractor near me' or 'commercial contractor [city]' are searches from clients ready to spend six figures. Missing the 3-pack means missing these highest-value leads entirely." },
        { title: "No Project Portfolio Photos on GBP", desc: "Clients considering a $50,000+ project need visual proof of quality. Contractor GBPs with logo-only photos lose to competitors showing 30 completed project photos every time." },
        { title: "Service Categories Too Generic", desc: "'General Contractor' alone misses project-specific searches. Categories for kitchen remodeling, bathroom renovation, roofing, concrete, and commercial construction each capture different high-value search traffic." },
        { title: "Under 40 Reviews for a High-Trust Category", desc: "No one hires a contractor with 8 Google reviews for a $40,000 project. Under 40 reviews is below the trust threshold for project sizes general contractors command." },
        { title: "No Commercial Project Signaling", desc: "Commercial contracting searches ('commercial construction company near me') require specific GBP signals. Contractors targeting commercial without these signals are invisible to property managers and business owners." },
        { title: "Service Area Not Covering Full Territory", desc: "General contractors often serve multiple counties. Without service area configuration matching your territory, you only rank near your office — missing project leads from the majority of your service area." }
      ],
      strategy: {
        title: "Our GMB Strategy for General Contractors",
        intro: "Contracting clients make high-investment decisions slowly and carefully. Our GMB strategy ensures your profile projects the quality, experience, and trustworthiness that converts a high-value searcher into a first-contact phone call.",
        pillars: [
          { title: "Project Type Category Coverage", desc: "Each type of project you take requires category signals to appear in those specific searches", tactics: ["Primary: General Contractor", "Secondary: Kitchen Remodeling, Bathroom Remodeler, Home Builder, Commercial Building Constructor", "Service listing: all project types with descriptions and price ranges", "License and insurance attributes configured"] },
          { title: "Visual Portfolio Strategy", desc: "Project photography is the single highest-converting element of a contractor GBP", tactics: ["25+ before/after project photos at launch", "Monthly additions: completed projects, in-progress milestones", "Commercial project photos categorized separately", "Team and equipment photos for trust signals"] },
          { title: "High-Value Project Review System", desc: "Reviews for large projects carry more weight — both in ranking and client decisions", tactics: ["Post-project completion review request within 72 hours", "Targeting 8–12 new reviews per month", "Keyword-rich review responses mentioning project types and neighborhoods", "Award and recognition posts for completed projects"] }
        ]
      },
      services: [
        "Contractor GBP Full Setup", "Project-Type Category Architecture",
        "Portfolio Photo Strategy & Upload", "Review Generation System",
        "Commercial Contractor Signals", "Service Territory Configuration",
        "License & Insurance Attributes", "Q&A Project Question Management",
        "NAP Citation for Service Area", "Competitor Contractor Benchmarking",
        "Project Announcement Posts", "Monthly Project Lead Reporting"
      ],
      commonMistakes: [
        { mistake: "Only 'General Contractor' as GBP category", impact: "Searches for 'kitchen remodeler near me,' 'bathroom renovation contractor,' and 'commercial builder' require matching GBP categories. One category misses all project-specific searches.", fix: "Full category architecture: General Contractor + Kitchen Remodeling Contractor + Bathroom Remodeler + Home Addition Builder + Commercial Building Constructor — each unlocking specific high-value project searches." },
        { mistake: "No photos of completed projects", impact: "A homeowner researching a major renovation visits your GBP and sees your logo. They visit a competitor's GBP and see 40 stunning transformation photos. They call the competitor.", fix: "Systematic project documentation: before photos at start, progress photos during build, and professional completion photos. Uploaded within 1 week of project completion, building a visual portfolio that sells your quality." },
        { mistake: "Review requests sent after project invoice is closed", impact: "The window for maximum review enthusiasm is within 3 days of project completion when the client is thrilled with their new space. Waiting until accounting closes the invoice 3 weeks later misses this window.", fix: "Review request SMS at project handoff, while the client is standing in their new kitchen or renovated bathroom — capturing maximum enthusiasm and detail in their review." },
        { mistake: "No service range indication in GBP description", impact: "Clients searching for contractors often want to know if they're in the right price range before calling. No budget signals means calls from mismatched prospects and missed calls from qualified ones.", fix: "Business description that positions your project size range, specialties, and geographic focus — attracting the right clients and pre-qualifying budget fit before the first call." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "CallRail", "Whitespark", "ReviewTrackers", "Google Analytics 4", "Buildertrend (integration)"],
      timeline: {
        m1: "Full audit, category setup, 25+ project photos, review system, service area config.",
        m2: "8–12 new reviews arriving. Posts live with completed projects.",
        m3: "3-pack movement for primary contractor + city searches.",
        m6: "Top-3 for general contractor + major project types in territory. 50+ reviews.",
        m12: "Dominant contractor GBP. Commercial and residential categories both ranking. Pipeline full from GBP."
      },
      keywords: [
        "general contractor near me", "contractor [city]", "home remodeling contractor [city]",
        "kitchen remodeling contractor near me", "commercial contractor [city]",
        "home renovation company [city]", "bathroom remodel contractor near me",
        "addition contractor [city]", "licensed contractor near me"
      ],
      caseStudy: {
        client: "Elevate Construction Group",
        location: "Minneapolis, MN",
        before: "GBP position 19, 23 reviews, 2 GBP project inquiries/mo",
        after: "GBP position 2, 119 reviews, 14 qualified project inquiries/mo",
        leads: "$1.2M in new project contracts from GBP-attributed leads",
        period: "11 months",
        highlight: "Kitchen remodeling category addition drove 6× increase in high-value search visibility"
      },
      localVsNational: {
        local: "Contracting GMB is territory-based. We build GBP dominance across every county, city, and suburb in your service area — covering every project type search in your full operating radius.",
        national: "Regional and national construction companies need multi-location GBP management with individual office optimization and centralized brand and portfolio asset strategy."
      },
      faqs: [
        { q: "How many reviews does a general contractor need to win projects from GBP?", a: "35–50 is the minimum trust threshold for most mid-size markets. For premium or commercial projects, 80+ reviews at 4.8+ stars signals the level of experience high-value clients look for." },
        { q: "What GBP categories should a general contractor select?", a: "Primary: General Contractor. Secondary based on your specialties: Kitchen Remodeling Contractor, Bathroom Remodeler, Home Addition Builder, Commercial Building Constructor. Each category opens visibility for those specific searches." },
        { q: "Should I list project prices or budget ranges on my GBP?", a: "Not as a price list — but incorporating budget signals in your business description ('specializing in projects from $25K to $500K') helps attract qualified clients and pre-qualify before calls." },
        { q: "How do before/after photos affect a contractor GBP's ranking?", a: "Photos with quantity and recency signals improve GBP ranking. More importantly, they dramatically improve call conversion — clients viewing 40 project photos before calling have already pre-sold themselves on your quality." },
        { q: "Can I showcase subcontractor relationships on my GBP?", a: "Yes — service listings can reference plumbing, electrical, and HVAC coordination as services you manage. This broadens your service footprint on GBP without creating separate subcontractor profiles." },
        { q: "How do I get reviews from commercial construction clients?", a: "Commercial clients are review-averse compared to residential — request through project manager contact, not the billing department. Emphasize that a review helps your small business and takes 2 minutes." },
        { q: "Should my GBP show my contractor license number?", a: "Yes — include your state license number in your business description and configure the license attribute if available in your state. This is a trust signal that homeowners doing their research actively look for." },
        { q: "How do I appear in Google Maps for commercial construction searches?", a: "Three-step approach: (1) Add 'Commercial Building Constructor' as a secondary category. (2) Include commercial project photos in your GBP separately labeled. (3) Seed Q&A with commercial-specific questions and answers." }
      ]
    },

    // ─── 10. MORTGAGE BROKERS ─────────────────────────────────────────
    {
      slug: "mortgage-brokers",
      name: "Mortgage Brokers",
      icon: "🏦",
      tagline: "Be the Lender Google Sends First. Mortgage GMB That Converts Home Buyers.",
      heroSubtitle: "When someone is ready to buy a home, their first call is often to a lender they found on Google. A fully optimized Google Business Profile puts your mortgage business in front of pre-qualified buyers at the exact moment of peak intent.",
      overview: "Mortgage brokers and loan officers operate in one of the most competitive and highest-value local service categories. A single closed loan generates $3,000–$15,000+ in commission — making every qualified lead from Google Maps extraordinarily valuable.\n\nMost mortgage professionals rely heavily on realtor referrals, which creates an unstable, relationship-dependent pipeline. Google Maps is the alternative — a scalable, consistent, referral-independent source of pre-qualified buyer leads who are actively researching financing options right now.\n\nRankston builds mortgage GBP presences that convert high-intent searches into application calls — through trust-building reviews, professional credential display, and the complete profile optimization that makes your expertise obvious from first glance.",
      stats: [
        { val: "$8K", label: "avg commission per closed loan" },
        { val: "73%", label: "of buyers shop at least 2 lenders before choosing" },
        { val: "GBP", label: "is 3× more cost-effective than Zillow leads for purchase" },
        { val: "45 days", label: "to measurable GBP mortgage lead improvement" }
      ],
      painPoints: [
        { title: "Fully Dependent on Realtor Referrals", desc: "Referral pipelines dry up when realtor relationships change. A strong GBP presence provides a reliable, independent inbound lead source that doesn't depend on any single referral relationship." },
        { title: "Not Appearing in Google Maps for Mortgage Searches", desc: "'Mortgage broker near me,' 'best mortgage rates [city],' and 'FHA loans [city]' are searched by buyers ready to apply. Without GBP optimization, mortgage professionals are invisible to this traffic." },
        { title: "No Reviews to Build Financial Trust", desc: "Entrusting someone with your $400,000 home purchase requires significant trust. A mortgage broker with 6 reviews doesn't clear the trust threshold. 50+ reviews at 5 stars does." },
        { title: "GBP Categories Don't Cover All Loan Types", desc: "FHA, VA, jumbo, refinance, and commercial mortgage searches require specific GBP signals. One generic 'Mortgage Broker' category misses all loan-type-specific searchers." },
        { title: "No Pre-Application or Contact Link on GBP", desc: "Buyers ready to start their application want a direct link. A GBP without a pre-application or consultation link adds friction that loses fast-moving buyers to competitors who make it easy." },
        { title: "Profile Hasn't Been Touched Since Initial Setup", desc: "Inactive GBPs rank below active ones. A mortgage broker who posts monthly market rate updates, first-time buyer tips, and program announcements signals an active, engaged professional." }
      ],
      strategy: {
        title: "Our GMB Strategy for Mortgage Brokers",
        intro: "Mortgage clients are making the largest financial decision of their lives. Our GMB strategy builds the trust, expertise visibility, and lead capture that converts a Google search into a loan application call.",
        pillars: [
          { title: "Loan Product Category Coverage", desc: "Each loan type you originate requires visibility for that specific search traffic", tactics: ["Primary: Mortgage Broker or Mortgage Lender", "Secondary: FHA Loan, VA Loan, Refinancing Service, Jumbo Mortgage, First-Time Buyer Programs", "Service listing: all loan products with brief descriptions", "NMLS ID displayed in profile"] },
          { title: "Client Trust Architecture", desc: "Financial trust is built through professional credentials and social proof", tactics: ["Professional headshot and NMLS credential in photo section", "Client review request after closing — capturing client satisfaction at peak", "Targeting 6–10 new reviews per month", "Award and recognition posts: top producer, 5-star lender awards"] },
          { title: "Market Expert Content", desc: "Posting mortgage market content signals expertise and keeps your profile active", tactics: ["Bi-weekly posts: rate updates, first-time buyer tips, program announcements", "Q&A seeded with common buyer questions about rates, credit, down payment", "First-time homebuyer and VA loan specialty posts", "Monthly market update posts targeting buyer search intent"] }
        ]
      },
      services: [
        "Mortgage GBP Full Setup", "Loan Product Category Architecture",
        "NMLS Credential Display", "Client Review Generation System",
        "Pre-Application Link Integration", "Bi-Weekly Post Management",
        "Rate & Market Update Posts", "Q&A Mortgage Education Seeding",
        "NAP Citation Consistency", "Realtor Co-Marketing Posts",
        "Competitor Lender Benchmarking", "Monthly Application Source Reporting"
      ],
      commonMistakes: [
        { mistake: "No loan-specific secondary categories", impact: "Searches for 'VA loan specialist near me' or 'FHA lender [city]' require those specific categories to appear in results. One 'Mortgage Broker' category misses all loan-type-specific searches.", fix: "Full loan-product category architecture including VA Loan, FHA Loan, First-Time Buyer Programs, Refinancing Service — each expanding visibility into specific high-intent buyer searches." },
        { mistake: "Not requesting reviews at closing", impact: "Closing day is the peak of client satisfaction — the culmination of a major life milestone. Not requesting a review at this moment misses the highest-enthusiasm review opportunity in the broker lifecycle.", fix: "Review request sent within 24 hours of closing — while the client's excitement is fresh. Include a personal note acknowledging the milestone, making the review request feel natural rather than transactional." },
        { mistake: "No rate or market content posts", impact: "A mortgage broker who hasn't posted in 6 months looks inactive. Buyers researching online want current information. An inactive profile loses to a competitor posting weekly rate updates.", fix: "Bi-weekly market content posts: current rate environment, first-time buyer tips, loan program spotlights, and affordability guidance — positioning you as the go-to local mortgage expert." },
        { mistake: "NMLS ID not displayed anywhere on GBP", impact: "Sophisticated buyers verify lender credentials before applying. An NMLS ID confirms you're a licensed professional — its absence creates doubt in a regulated, high-stakes industry.", fix: "NMLS ID prominently included in business description, and as a credential attribute if available in your state. Regulatory credential display is a trust signal that differentiates professional brokers." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Encompass/Calyx (CRM integration)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "CallRail"],
      timeline: {
        m1: "Full audit, loan categories, NMLS display, consultant link, review system launch.",
        m2: "6–10 new reviews monthly. Bi-weekly posts live.",
        m3: "Measurable GBP visibility for mortgage + city searches.",
        m6: "Top-3 for mortgage broker + city. 40+ reviews.",
        m12: "Dominant local mortgage GBP. Independent inbound lead pipeline established."
      },
      keywords: [
        "mortgage broker near me", "mortgage lender [city]", "home loans [city]",
        "FHA loan [city]", "VA loan specialist near me", "first time home buyer loans [city]",
        "refinance mortgage [city]", "jumbo loans [city]", "best mortgage rates [city]"
      ],
      caseStudy: {
        client: "PrimeRate Mortgage Solutions",
        location: "Dallas, TX",
        before: "GBP position 15, 11 reviews, fully referral-dependent pipeline",
        after: "GBP position 3, 97 reviews, 8 direct GBP application inquiries/mo",
        leads: "$64K/mo in new closed loan commissions from GBP",
        period: "9 months",
        highlight: "VA loan category addition drove 22 veteran buyer inquiries in first 3 months"
      },
      localVsNational: {
        local: "Mortgage GBP is relationship-driven and local — we build the trust signals and loan product coverage that convert community buyers searching for a lender they can meet in person.",
        national: "Mortgage companies with multiple branch offices need individual GBP optimization per branch, with centralized brand consistency and loan-officer-level content strategies."
      },
      faqs: [
        { q: "Can mortgage brokers legally advertise rates on Google Business Profile?", a: "Yes — with appropriate APR disclosures in your posts. Rate posts with proper disclosure language are effective engagement drivers. We structure all rate content to comply with Regulation Z advertising requirements." },
        { q: "Should each loan officer have their own GBP?", a: "Only if they have their own physical office location. GBP policy is one profile per physical location. We optimize the branch profile to feature individual loan officers through photos and team descriptions." },
        { q: "What's the best way to get more mortgage reviews?", a: "Request at closing — with a personal message acknowledging what a milestone this is for your client. A brief 'it would mean so much to get your feedback' at the peak of their excitement generates far higher response rates than a cold follow-up weeks later." },
        { q: "How do I rank in Google Maps for first-time buyer searches?", a: "Add first-time homebuyer program categories and services, post educational content about FHA and down payment assistance programs, and seed Q&A with common first-time buyer questions. These signals collectively improve ranking for first-time buyer searches." },
        { q: "Does a mortgage broker need a physical office for a GBP?", a: "Yes — Google requires a verifiable physical location. Many mortgage brokers use their registered office or brokerage address. Work-from-home originators typically use their brokerage's office address with permission." },
        { q: "How long does it take for GBP to generate mortgage leads?", a: "Most mortgage brokers see measurable visibility improvements within 30–45 days. Generating consistent inbound application inquiries from GBP typically takes 60–90 days with review generation and active posting." },
        { q: "What should I post on Google Business Profile as a mortgage broker?", a: "Rate environment updates, first-time buyer educational content, loan program spotlights (VA loan benefits, FHA down payment requirements), local market affordability insights, and client success story posts within compliance guidelines." },
        { q: "How do mortgage broker reviews affect search ranking?", a: "Reviews are among the top ranking signals for local financial services searches. More reviews, higher average rating, and more recent reviews all contribute to improved GBP ranking for mortgage searches in your area." }
      ]
    },

    // ─── 11. ACCOUNTANTS ──────────────────────────────────────────────
    {
      slug: "accountants",
      name: "Accounting Firms",
      icon: "📊",
      tagline: "Be the Accountant Clients Find at Tax Time and Keep Year-Round.",
      heroSubtitle: "When business owners and individuals search for a CPA or accountant near them, they're ready to hire. A dominant Google Business Profile puts your firm in front of these high-intent searchers before your competitors.",
      overview: "Accounting and tax services generate two distinct peak search periods: tax season (January–April) and business formation season (September–December). During these windows, local searches for CPAs, tax preparers, and bookkeepers spike dramatically — and the firms that appear in the 3-pack capture a disproportionate share of new client volume.\n\nBeyond peak seasons, accounting firms compete for year-round business services clients — companies needing monthly bookkeeping, payroll management, financial planning, and advisory services. These are recurring revenue relationships worth $5,000–$100,000+ annually per client.\n\nRankston builds accounting firm GBP presences that capture both peak-season individual tax clients and high-value year-round business service clients — through service category coverage, credential display, and consistent review generation that builds the trust required for financial relationships.",
      stats: [
        { val: "67%", label: "of people search online to find a local accountant or CPA" },
        { val: "3-pack", label: "captures 50%+ of clicks during tax season search spikes" },
        { val: "$12K", label: "avg annual value of a business bookkeeping client" },
        { val: "45 days", label: "to measurable GBP visibility improvement" }
      ],
      painPoints: [
        { title: "Invisible During Tax Season Search Spikes", desc: "January through April generates 10× normal search volume for accountants and CPAs. Firms not in the 3-pack miss these highest-volume acquisition windows entirely." },
        { title: "Only 'Accountant' as GBP Category", desc: "Tax preparation, bookkeeping, financial planning, payroll, and business advisory each have their own GBP categories. One generic category misses all service-specific searches." },
        { title: "No Professional Credentials Displayed", desc: "CPA, EA, or CFP credentials are trust signals that separate professionals from non-credentialed preparers. GBPs that don't display these credentials miss a critical differentiation point." },
        { title: "Under 30 Reviews for a Trust-Intensive Service", desc: "Handing your financial records to an accountant is a high-trust decision. Under 30 reviews doesn't clear the threshold for business owners comparing options." },
        { title: "No Business Client Niche Signaling", desc: "Accounting firms specializing in specific industries (real estate, restaurants, law firms, eCommerce) have significant differentiation advantage. GBPs that don't signal specialty miss niche business searches." },
        { title: "No Tax Season Urgency Posting", desc: "Firms that post 'tax deadline approaching — book your appointment now' during January–March capture significantly more season-driven client urgency than those with static profiles." }
      ],
      strategy: {
        title: "Our GMB Strategy for Accounting Firms",
        intro: "Accounting clients make trust decisions slowly but switch rarely. Our GMB strategy builds the credential visibility, review authority, and service coverage that makes your firm the obvious first call during both peak season and year-round.",
        pillars: [
          { title: "Service Category & Specialty Coverage", desc: "Every service type and niche you serve requires category and content coverage to appear in those searches", tactics: ["Primary: Certified Public Accountant or Tax Preparer", "Secondary: Bookkeeper, Payroll Service, Financial Planner, Business Tax Service", "Industry specialization in business description", "Credential attribute configuration: CPA, EA designation"] },
          { title: "Tax Season Capture Strategy", desc: "Tax season is the highest-volume period for accounting GBP lead generation", tactics: ["January–April weekly posts: deadline reminders, service promotions, first-time client offers", "Appointment booking link live before January 1", "Extended hours during tax season highlighted on GBP", "Tax deadline calendar post series"] },
          { title: "Year-Round Trust Building", desc: "Business clients choose accountants for long-term relationships — trust signals determine which firm gets the call", tactics: ["Credential photos: CPA certificate, EA credential", "Monthly posts: tax tips, financial planning insights, business advisory content", "Client review request at year-end and tax return completion", "Q&A seeded with common tax and bookkeeping questions"] }
        ]
      },
      services: [
        "Accounting GBP Full Setup", "Service Category Architecture",
        "CPA/EA Credential Display", "Client Review Generation System",
        "Tax Season Post Calendar", "Appointment Booking Link Setup",
        "Business Specialty Signaling", "Industry Niche Targeting",
        "Q&A Tax Education Seeding", "NAP Citation Consistency",
        "Competitor CPA Benchmarking", "Monthly Client Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "No credential display — just a firm name", impact: "The difference between a CPA and a non-credentialed tax preparer is significant to clients. Without credential signals on your GBP, you're indistinguishable from seasonal tax preparers charging a fraction of your rate.", fix: "CPA, EA, or CFP credentials prominently in business name (if correctly licensed to use), business description, credential photos, and attribute configuration — differentiating your professional standing immediately." },
        { mistake: "No tax season posts or appointment urgency", impact: "During January–April, clients feel urgency about filing deadlines. Firms that post weekly appointment availability, deadline reminders, and 'slots filling fast' signals capture this urgency and drive bookings.", fix: "Tax season post calendar starting January 2: weekly deadline reminders, appointment availability updates, and year-end planning invitations — capturing deadline-driven searcher urgency." },
        { mistake: "One generic category misses specialized service searches", impact: "A CPA firm also doing bookkeeping, payroll, and financial planning should appear in searches for all three. One category misses $50K+/year bookkeeping and payroll client searches.", fix: "Service category architecture covering every billable service type: Tax Preparer, Bookkeeper, Payroll Service Provider, Financial Consultant, Business Tax Service — maximizing search visibility year-round." },
        { mistake: "Review requests sent only at tax season", impact: "Requesting reviews only during tax season clusters your reviews in a 3-month period, then creates a long gap with no new reviews — which Google's algorithm penalizes with reduced local ranking.", fix: "Year-round review cadence: tax clients after return completion, bookkeeping clients quarterly, business advisory clients at annual review. Consistent review velocity year-round outperforms seasonal spikes." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "QuickBooks (integration)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "Calendly (booking)"],
      timeline: {
        m1: "Full audit, service categories, credential display, booking link, review system launch.",
        m2: "Tax season post calendar live. 8–12 reviews arriving monthly.",
        m3: "GBP ranking improvement for CPA + city and bookkeeping searches.",
        m6: "Top-3 for primary service + city. 45+ reviews. Specialty niche searches gaining.",
        m12: "Dominant local accounting GBP. Tax season peak fully captured. Business clients flowing year-round."
      },
      keywords: [
        "accountant near me", "CPA near me", "tax preparer [city]",
        "bookkeeper [city]", "small business accountant near me",
        "tax filing [city]", "payroll services [city]", "business CPA [city]",
        "certified public accountant [city]", "tax professional near me"
      ],
      caseStudy: {
        client: "Mercer & Associates CPAs",
        location: "Chicago, IL",
        before: "GBP position 12, 18 reviews, 4 new client GBP calls/mo",
        after: "GBP position 2, 121 reviews, 22 new client inquiries/mo",
        leads: "$280K in annual new client revenue attributed to GBP",
        period: "10 months",
        highlight: "Bookkeeping and payroll category additions generated year-round business client leads for first time"
      },
      localVsNational: {
        local: "Accounting GBP is relationship-local — clients want a CPA they can meet in person or call directly. We build community-level trust through reviews, credentials, and local business specialization signals.",
        national: "Multi-office accounting firms and national practices need individual GBP optimization per office, with centralized brand assets, credential consistency, and service category management."
      },
      faqs: [
        { q: "When is the best time to launch GMB optimization for an accounting firm?", a: "September–November — allowing 2–3 months of optimization before the January tax season search surge. Year-round optimization is ideal, but launching before tax season maximizes first-year impact." },
        { q: "Should each CPA in our firm have a separate GBP?", a: "No — one GBP per physical office location per GBP policy. We feature individual CPAs through photos, team bios in Q&A, and service listings — without creating separate profiles that violate guidelines." },
        { q: "What accounting categories should I select on GBP?", a: "Primary: Certified Public Accountant or Tax Preparer. Secondary based on services: Bookkeeper, Payroll Service Provider, Financial Consultant, Accounting Firm. Each unlocks additional service-specific search traffic." },
        { q: "How do I get accounting clients to leave Google reviews?", a: "Request at the natural high points: after tax return completion, after year-end close, or after solving a significant financial challenge. Framing as 'it helps other small business owners find trusted advisors' resonates well with business clients." },
        { q: "Can I advertise my CPA credential in my GBP business name?", a: "Only if your firm name legally includes 'CPA' as a registered business name. You can display credentials prominently in your business description, credential attribute, and profile photos without incorporating them into your GBP business name." },
        { q: "How do I appear in Google Maps for business accounting searches?", a: "Add 'Business Tax Service' and 'Bookkeeper' as secondary categories. Include business industry specializations in your business description. Post content specifically about business financial needs — not just individual tax season content." },
        { q: "Should I post during tax season on GBP?", a: "Essential — not optional. Weekly posts during January–April: appointment availability, deadline reminders, extension guidance, and client results capture the tax season urgency that drives searchers to act immediately." },
        { q: "How long until GMB optimization generates accounting client leads?", a: "Most firms see measurable GBP visibility improvement within 30–45 days. Generating consistent new client inquiries typically takes 60–90 days, with maximum impact seen during the first tax season following optimization." }
      ]
    },

    // ─── 12. AUTO DEALERSHIPS ─────────────────────────────────────────
    {
      slug: "auto-dealerships",
      name: "Auto Dealerships",
      icon: "🚗",
      tagline: "Fill the Lot With Ready-to-Buy Customers. Dealership GMB That Drives Showroom Traffic.",
      heroSubtitle: "92% of car buyers research online before visiting a dealership. Your Google Business Profile is the first impression for thousands of potential buyers every month — we make it count.",
      overview: "The modern car buying journey starts online and ends in a showroom. 92% of buyers research online first — and a significant portion of that research happens on Google Maps, where buyers compare dealerships by reviews, inventory signals, hours, and photos before deciding which lot to visit.\n\nFor auto dealerships, the Google Business Profile is the highest-traffic digital touchpoint they control outside their website. A fully optimized GBP with strong reviews, complete vehicle inventory signals, and active posts drives measurable showroom traffic in ways that traditional advertising cannot.\n\nRankston builds auto dealership GBP presences that convert local vehicle searches into showroom visits — through vehicle-type category coverage, dealer-specific attributes, inventory year-round posting, and review systems that build the trust needed for $30,000+ purchase decisions.",
      stats: [
        { val: "92%", label: "of car buyers research online before visiting" },
        { val: "$35K", label: "avg new vehicle transaction value" },
        { val: "88%", label: "of GBP-driven dealership visits result in test drive" },
        { val: "30 days", label: "to measurable GBP showroom traffic improvement" }
      ],
      painPoints: [
        { title: "Not Appearing for Vehicle-Type or Brand Searches", desc: "'Toyota dealer near me,' 'used trucks [city],' 'certified pre-owned Honda near me' — these high-intent searches require matching categories and inventory signals. Without them, your lot is invisible." },
        { title: "Review Score Below 4.0 — Dealership Trust Threshold", desc: "Auto dealerships have notoriously low review scores. A 3.9 average is common — and it actively costs you showroom traffic to competitors with 4.4+ averages. Review rehabilitation is a core GMB priority." },
        { title: "Low Review Count for Transaction Volume", desc: "A dealership selling 80 units per month with 45 Google reviews is leaving massive reputation equity on the table. Review count should scale with transaction volume." },
        { title: "GBP Not Showing Service Department", desc: "Service department customers are often more frequent visitors than sales customers. GBPs that don't showcase service department capabilities miss ongoing service revenue and service-driven vehicle sales." },
        { title: "Inventory Not Reflected in GBP Posts or Products", desc: "Google allows dealerships to post inventory updates. Dealers who post 'new arrival' and 'special offer' posts consistently get significantly more GBP engagement than static profiles." },
        { title: "No Finance Department or Financing Signals", desc: "In-house financing, special financing programs, and credit approval signals are major conversion drivers for buyers concerned about credit or payment terms." }
      ],
      strategy: {
        title: "Our GMB Strategy for Auto Dealerships",
        intro: "Car buyers do significant research before stepping on a lot. Our dealership GMB strategy ensures that research ends with a visit to your showroom — through trust-building reviews, inventory signals, and the complete brand and vehicle-type visibility that captures every type of local car search.",
        pillars: [
          { title: "Vehicle Type & Brand Category Coverage", desc: "Auto searches are brand and vehicle-type specific — your GBP must match every search type you serve", tactics: ["Primary category: Car Dealer or Used Car Dealer", "Secondary: brand-specific categories, Truck Dealer, Used Truck Dealer, Certified Pre-Owned", "Service: Sales, Service & Parts, Financing, Trade-In Appraisal", "Inventory-type attribute configuration"] },
          { title: "Dealership Review Rehabilitation", desc: "Review scores for auto dealers are typically below other industries — aggressive review generation is essential", tactics: ["Post-purchase review request: within 48 hours of vehicle delivery", "Post-service review request: within 24 hours of service completion", "Sales team review training and incentive alignment", "Targeting 25–30 new reviews per month given transaction volume"] },
          { title: "Inventory & Offer Content Strategy", desc: "Active dealership profiles with inventory posts significantly outperform static profiles", tactics: ["Weekly inventory posts: new arrivals, featured vehicles, certified pre-owned specials", "Monthly special offers: financing specials, service promotions, trade-in events", "Vehicle photo uploads to GBP photo library monthly", "Event posts: sales events, model year-end clearance, manufacturer promotions"] }
        ]
      },
      services: [
        "Dealership GBP Full Setup", "Brand & Vehicle Category Architecture",
        "Review Generation & Rehabilitation", "Inventory Post Management",
        "Service Department GBP Optimization", "Financing Signal Configuration",
        "Weekly Offer Post Management", "Hours & Holiday Configuration",
        "Competitor Dealership Benchmarking", "NAP Citation Consistency",
        "Vehicle Photo Upload Program", "Monthly Showroom Traffic Reporting"
      ],
      commonMistakes: [
        { mistake: "Letting service department reviews drag down overall score", impact: "Service department generates significantly more Google reviews than sales — and service complaints are more likely to become 1-star reviews. An unmanaged service review score tanks the overall dealership average.", fix: "Separate service department review request system with immediate response protocol — capturing positive service experiences as reviews and addressing service complaints before they become public 1-star reviews." },
        { mistake: "No inventory or new arrival posts", impact: "A dealership that hasn't posted in months looks like it might have inventory problems or be struggling. Buyers researching compare active profiles to inactive ones — active signals a healthy, stocked business.", fix: "Weekly inventory posts featuring new arrivals, featured vehicles, and current specials — maintaining an active, dynamic GBP presence that signals a well-stocked, thriving dealership." },
        { mistake: "No used car or certified pre-owned categories", impact: "Used vehicle searches ('used trucks near me,' 'certified pre-owned Honda dealer') require specific GBP categories. New car dealer categories alone miss the highest-volume local vehicle search queries.", fix: "Complete vehicle inventory category architecture: New Car Dealer + Used Car Dealer + Certified Pre-Owned + brand-specific categories — capturing every type of vehicle purchase search in your area." },
        { mistake: "Review request goes to billing email, not the buyer", impact: "Dealerships that route review requests through the finance or billing department get low response rates. The review request must reach the buyer directly, immediately after their positive delivery experience.", fix: "Direct-to-buyer review request: SMS from salesperson within 24 hours of vehicle delivery, while the buyer is still in 'peak excitement' mode — achieving 5–8× higher review response rates." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "DealerSocket (CRM integration)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "CallRail", "Cars.com (monitoring)"],
      timeline: {
        m1: "Full audit, vehicle categories, review system, inventory post cadence, service dept optimization.",
        m2: "25+ new reviews monthly. Weekly posts live. Brand searches improving.",
        m3: "3-pack movement for primary brand + near me searches. Service traffic from GBP.",
        m6: "Top-3 for new and used vehicle searches. Review score above 4.3.",
        m12: "Dominant local dealership GBP. Both sales and service driving measurable showroom traffic."
      },
      keywords: [
        "[brand] dealer near me", "car dealership [city]", "used cars [city]",
        "certified pre-owned [brand] near me", "truck dealer near me",
        "car dealer near me", "[brand] [city]", "auto dealer near me",
        "used SUV near me", "car financing near me"
      ],
      caseStudy: {
        client: "Riverside Auto Group",
        location: "Sacramento, CA",
        before: "GBP position 14, 3.7 stars, 89 reviews, 12 GBP showroom visits/mo",
        after: "GBP position 2, 4.6 stars, 347 reviews, 68 attributed showroom visits/mo",
        leads: "14 additional vehicles sold/mo from GBP-attributed visits",
        period: "12 months",
        highlight: "Service department review system drove star rating from 3.7 to 4.6 in 6 months"
      },
      localVsNational: {
        local: "Dealership GMB is location-level. Each physical dealership location needs its own optimized profile covering all vehicle types, all departments (sales, service, parts), and all brands it represents.",
        national: "Auto groups with multiple rooftops need enterprise GBP management: individual location optimization, group-level brand consistency, and centralized review management across all dealerships."
      },
      faqs: [
        { q: "Why do auto dealerships have low Google review scores?", a: "Service department repairs generate more reviews than vehicle purchases — and unhappy service customers are more likely to review than satisfied ones. An unmanaged review flow skews toward negative. Our system generates positive reviews at sufficient volume to improve the baseline score." },
        { q: "Should my dealership have separate GBPs for sales and service?", a: "Only if they're at separate physical addresses. Generally, one GBP per dealership location is correct. We optimize it to represent all departments (sales, service, parts, finance) through service listings and attribute configuration." },
        { q: "How do I get car buyers to leave Google reviews?", a: "Delivery day is the highest-enthusiasm moment. A brief review request from the salesperson at handover, followed by a direct SMS link within 24 hours, achieves the highest response rates in the industry." },
        { q: "Can I feature specific inventory on Google Business Profile?", a: "Yes — through product posts and Google Vehicle Listing Ads integration. Posting 'new arrival' or 'featured vehicle' posts weekly and uploading vehicle photos creates inventory signals that attract vehicle-specific searches." },
        { q: "What GBP categories should an auto dealership use?", a: "Primary: Car Dealer (new) or Used Car Dealer. Secondary: the specific brand categories available (Toyota Dealer, Ford Dealer, etc.), Truck Dealer if applicable, and Certified Pre-Owned if you have a CPO program." },
        { q: "How does a 3.7-star rating affect my dealership's leads?", a: "Significantly. Research shows that 94% of consumers check reviews before visiting a business. A 3.7 rating causes approximately 40% of searchers to choose a competitor with a higher rating — even if your inventory is better." },
        { q: "Should I respond to all dealership Google reviews?", a: "Absolutely — especially negative ones. A professional, empathetic response to a service complaint signals that management cares and often changes the reviewer's perception. Unanswered complaints compound buyer concern." },
        { q: "How long until dealership GMB optimization generates more showroom traffic?", a: "Most dealerships see measurable improvement in GBP impressions and direction requests within 30 days. Consistent showroom traffic attribution from GBP typically builds over 60–90 days as review volume and ranking improve together." }
      ]
    },

    // ─── 13. HOME SERVICES ────────────────────────────────────────────
    {
      slug: "home-services",
      name: "Home Services",
      icon: "🏠",
      tagline: "Be the First Call for Every Home Repair and Maintenance Need.",
      heroSubtitle: "Homeowners searching for home services on Google Maps call the first trusted business they find. A fully optimized GBP puts your home services company in the 3-pack — visible when it matters most.",
      overview: "Home services is one of the broadest and most lucrative local search categories on Google. From HVAC and electrical to cleaning, landscaping, pest control, and handyman services, homeowners search Google Maps daily for trusted providers near them.\n\nThe 3-pack dominates home services searches — capturing 44% of all clicks. For home service companies, appearing in those top 3 positions isn't just a marketing advantage; it's the difference between a phone that rings consistently and a business that survives on referrals alone.\n\nRankston builds home services GBP profiles optimized for every search intent — emergency repairs, scheduled maintenance, seasonal services, and recurring contracts — turning Google Maps into your most reliable lead generation channel.",
      stats: [
        { val: "44%", label: "of home service clicks go to the 3-pack" },
        { val: "82%", label: "of homeowners use Google to find home service pros" },
        { val: "3-pack", label: "position generates 4× more calls than position 4+" },
        { val: "30 days", label: "to first measurable GBP improvement" }
      ],
      painPoints: [
        { title: "Not Appearing for Primary Service Searches", desc: "Searches like 'HVAC repair near me' or 'house cleaning service [city]' are from homeowners ready to book. Missing the 3-pack means missing these high-intent, high-conversion leads." },
        { title: "Wrong or Incomplete Service Categories", desc: "Home services GBPs require precise category setup per service type. A cleaning company missing 'House Cleaning Service' as a category becomes invisible to the majority of relevant searches." },
        { title: "No Service Area Configuration", desc: "Home services companies cover a geographic radius, not just one address. Without service area setup, your GBP ranks only near your office — missing the majority of your actual service territory." },
        { title: "Under 30 Reviews for a Trust-Sensitive Category", desc: "Homeowners letting strangers into their homes need social proof. Under 30 reviews is below the trust threshold for most home service categories." },
        { title: "No Before/After Photos", desc: "Visual proof of work quality drives conversion. Home service GBPs without project photos lose to competitors who show their craftsmanship." },
        { title: "Profile Not Optimized for Recurring Services", desc: "Home services generate repeat customers — lawn care, cleaning, HVAC maintenance. GBPs that don't signal recurring service options miss long-term revenue relationships." }
      ],
      strategy: {
        title: "Our GMB Strategy for Home Services Companies",
        intro: "Home service customers value trust, reliability, and proximity. Our GMB strategy builds a GBP presence that communicates all three — through reviews, project photos, and service area coverage that makes you the obvious local choice.",
        pillars: [
          { title: "Service Category Architecture", desc: "Each home service type requires its own category coverage to appear in relevant searches", tactics: ["Primary category: your core service type", "Secondary categories: all supporting services offered", "Service listings with descriptions and service area", "License and insurance attributes where applicable"] },
          { title: "Service Area Coverage", desc: "Home services companies must appear in every neighborhood they serve", tactics: ["Full service area radius configuration covering all zip codes served", "Suburb-specific content in posts and Q&A", "Citation consistency across all service areas", "Multiple location GBPs for companies with offices in different territories"] },
          { title: "Trust & Review Acceleration", desc: "Home service trust is built through review volume and visual proof of work", tactics: ["Post-job SMS review request within 24 hours of service completion", "Before/after project photo uploads monthly", "Targeting 10+ new reviews per month", "Keyword-rich review responses mentioning specific services"] }
        ]
      },
      services: [
        "Home Services GBP Full Setup", "Service Category Architecture",
        "Service Area Configuration", "Review Generation System",
        "Before/After Photo Strategy", "Seasonal Post Management",
        "Recurring Service Signals", "Q&A Customer FAQ Seeding",
        "NAP Citation for All Service Areas", "Competitor Benchmarking",
        "License & Insurance Attributes", "Monthly Lead Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "Only one service category selected", impact: "A home services company offering cleaning, organization, and deep cleaning needs separate categories for each. One category means you only rank for one service type.", fix: "Full service category audit and configuration — every GBP category matching a service you offer, maximizing your search visibility across all relevant homeowner searches." },
        { mistake: "No service area configured", impact: "Home service companies serving a 20-mile radius with no service area set rank only near their office address — missing leads from the majority of their territory.", fix: "Complete service area configuration covering every city, suburb, and zip code in your service radius — maximizing the geographic footprint of your GBP." },
        { mistake: "Waiting weeks to request reviews", impact: "Customer satisfaction is highest immediately after a great service experience. Waiting 2-3 weeks to request a review dramatically reduces response rates.", fix: "Automated SMS review request sent within 24 hours of service completion — capturing peak satisfaction and achieving 3-4× higher response rates than delayed requests." },
        { mistake: "No photos of completed work", impact: "Homeowners evaluating home service providers form instant impressions from GBP photos. No project photos means no visual trust — losing to competitors who show their work.", fix: "Systematic before/after documentation of every service — photos uploaded to GBP weekly, building a visual portfolio that demonstrates quality and professionalism." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "CallRail", "Whitespark", "ReviewTrackers", "Google Analytics 4"],
      timeline: {
        m1: "Full audit, service categories, service area, project photos, review system launch.",
        m2: "10+ new reviews monthly. Posts live. Service area searches improving.",
        m3: "First 3-pack movement for primary service + city searches.",
        m6: "Top-3 for primary service in full territory. 60+ reviews.",
        m12: "Dominant home services GBP. All service categories ranking. Recurring client pipeline from GBP."
      },
      keywords: [
        "home services near me", "house cleaning near me", "HVAC repair [city]",
        "handyman near me", "landscaping company [city]", "pest control near me",
        "electrician near me", "plumber near me", "home repair [city]"
      ],
      caseStudy: {
        client: "Pristine Home Services",
        location: "Atlanta, GA",
        before: "GBP position 18, 14 reviews, 5 GBP calls/mo",
        after: "GBP position 2, 134 reviews, 42 service booking calls/mo",
        leads: "$28K in new monthly recurring cleaning contracts from GBP",
        period: "7 months",
        highlight: "Service area expansion configuration drove 3× increase in geographic coverage and lead volume"
      },
      localVsNational: {
        local: "Home services GMB is neighborhood-level. We build dominance for every service type in every zip code you serve — from emergency repairs to recurring maintenance contracts.",
        national: "Home service franchises with multiple territories need enterprise GBP management with individual location optimization and centralized brand and review management."
      },
      faqs: [
        { q: "How do I get more home service calls from Google Maps?", a: "Three steps: (1) Configure your GBP service area to cover your full territory. (2) Add all secondary categories for every service you offer. (3) Generate 10+ new reviews per month. Together, these drive measurable increases in GBP calls within 30-60 days." },
        { q: "Should I have a GBP for each home service I offer?", a: "No — one GBP per physical business. We optimize your single profile to represent all services through categories, service listings, and posts — capturing searches for every service you offer." },
        { q: "How important is service area configuration for home services?", a: "Critical. Without a configured service area, your GBP only ranks prominently near your office. We expand this to cover every city, suburb, and neighborhood in your operating radius." },
        { q: "Can I show my license and insurance on my GBP?", a: "Yes — and you should. License and insurance attributes are trust signals that homeowners actively look for, especially for services like electrical, plumbing, and HVAC. We configure every applicable attribute." },
        { q: "How many photos should a home services GBP have?", a: "Minimum 20 to start, with weekly additions. Before/after project photos are the most effective — they build instant credibility and demonstrate the quality of your work better than stock imagery." },
        { q: "What should I post on Google Business Profile as a home service company?", a: "Seasonal service tips, project spotlights with before/after photos, maintenance reminders, and special offers. Monthly minimum, weekly ideal. Regular posting signals an active, engaged business." },
        { q: "How do I get recurring clients from Google Maps?", a: "GBP posts about subscription services, maintenance plans, and seasonal packages — combined with Q&A answers about recurring services — capture homeowners looking for long-term service relationships, not just one-time calls." },
        { q: "How long until home services GMB optimization generates consistent leads?", a: "Most home service companies see measurable GBP improvement within 30-45 days. Consistent inbound call flow typically builds over 60-90 days as review volume and service area ranking improve together." }
      ]
    },

    // ─── 14. STARTUPS ────────────────────────────────────────────────────
    {
      slug: "startups",
      name: "Startups & New Businesses",
      icon: "🚀",
      tagline: "Establish Local Presence Fast. GMB That Builds Startup Credibility From Day One.",
      heroSubtitle: "New businesses must build trust quickly to compete with established players. A fully optimized Google Business Profile gives your startup instant local credibility — and makes you visible to customers from your first week of operation.",
      overview: "Startups and new businesses face a unique challenge: competing for local search visibility against established competitors with years of reviews, established profiles, and entrenched local rankings. Without a strategy, new businesses can spend months invisible on Google Maps while customers choose more established alternatives.\n\nThe good news: a properly optimized GBP from day one can compress the timeline dramatically. New businesses that launch with complete profiles, active review generation, and consistent posting can reach the 3-pack in competitive markets within 60-90 days — far faster than businesses that set-and-forget their GBP.\n\nRankston specializes in startup GBP launches that build credibility fast — from day-one profile completeness to aggressive early review generation and content strategies that signal an active, trustworthy business to both Google and potential customers.",
      stats: [
        { val: "60 days", label: "to first 3-pack movement with optimized launch" },
        { val: "4.5+", label: "star rating target from launch through early review generation" },
        { val: "30+", label: "reviews needed to compete in most local markets" },
        { val: "Day 1", label: "complete profile setup signals legitimacy immediately" }
      ],
      painPoints: [
        { title: "No GBP When Business Opens", desc: "Every day without a GBP is a day of lost visibility. New businesses without Google profiles are completely invisible to local searches — losing customers to competitors from day one." },
        { title: "Zero Reviews Against Established Competitors", desc: "Competing against businesses with 100+ reviews with zero reviews means automatic trust deficit. Aggressive early review generation is essential to narrow this gap." },
        { title: "Incomplete Profile Signals Untrustworthiness", desc: "A GBP with missing hours, no photos, and no description looks like an abandoned business even if you're brand new. Complete profiles signal credibility." },
        { title: "No Strategy to Build GBP Authority Quickly", desc: "GBP authority builds over time with reviews, posts, and engagement. New businesses without a structured GBP strategy fall further behind established competitors every day they wait." },
        { title: "Wrong Category Selection From Launch", desc: "Incorrect primary and secondary categories from day one misdirect search traffic. Getting category architecture right at launch is critical to early visibility." },
        { title: "No Local Citation Foundation", desc: "NAP consistency across directories is a core GBP ranking signal. New businesses without a systematic citation building strategy start with a citation disadvantage." }
      ],
      strategy: {
        title: "Our GMB Strategy for Startups & New Businesses",
        intro: "Startup GBP success requires speed and completeness. Our strategy compresses the months it normally takes to build local search authority into a systematic 90-day launch program.",
        pillars: [
          { title: "Complete Launch Profile", desc: "A complete profile from day one builds immediate credibility with customers and Google", tactics: ["Full business information: name, address, hours, website, phone", "Category architecture: primary + all applicable secondary categories", "Business description: keyword-rich, 750 characters", "Opening day photo batch: team, location, products/services, logo"] },
          { title: "Rapid Review Generation", desc: "Closing the review gap with established competitors is the #1 startup GMB priority", tactics: ["Pre-launch: request reviews from founders' networks, beta users, and early customers", "Launch week: personal review requests to every customer interaction", "Targeting 20+ reviews in first 60 days of operation", "Review response protocol from day one — every review acknowledged"] },
          { title: "Authority Building Content", desc: "Active profiles outperform inactive ones — even new ones", tactics: ["Weekly posts from week one: new offerings, team introductions, opening announcements", "Q&A seeded with common customer questions before reviews arrive", "Citation building: top 50 directories with consistent NAP from day one", "Google Maps verification: completed before opening to avoid delays"] }
        ]
      },
      services: [
        "Startup GBP Setup & Verification", "Category Architecture Launch",
        "Opening Day Photo Strategy", "Rapid Review Generation Program",
        "Founder Network Review Campaign", "Early Citation Building",
        "Post Calendar from Day One", "Q&A Pre-Population",
        "NAP Consistency Across Directories", "Competitor Landscape Analysis",
        "60-Day Authority Plan", "Monthly Progress Reporting"
      ],
      commonMistakes: [
        { mistake: "Waiting to set up GBP until after opening", impact: "GBP verification can take 1-2 weeks. Businesses that start the process after opening lose 2 weeks of visibility during their highest-excitement, highest-word-of-mouth period.", fix: "GBP verification process started 2-3 weeks before launch. Profile fully complete on opening day. First reviews requested from team, family, beta users, and early customers in week one." },
        { mistake: "No photos on new profile", impact: "A GBP with no photos looks untrustworthy to potential customers and signals an incomplete listing to Google. A photographic profile signals a real, active business.", fix: "Opening day photo batch: minimum 20 photos including team, location interior/exterior, logo, products or service environment. Professional photography for businesses where visual trust matters." },
        { mistake: "Not leveraging founder network for early reviews", impact: "Waiting for organic customers to generate the first 15-20 reviews takes months. Most first reviews come from people who already know and trust the business — not strangers.", fix: "Structured review ask to entire founder network: investors, advisors, beta users, friends, family, vendors. Ethical, legitimate, and generates the review foundation needed to be credible for first-time visitors." },
        { mistake: "Category setup done without competitive research", impact: "First-time GBP setters often choose categories based on what 'sounds right' rather than what high-ranking competitors are using. Wrong categories mean permanently ranking for the wrong searches.", fix: "Competitive category analysis: audit top 3 competitors' GBP categories before setting yours. Match their primary category exactly and expand secondary categories to cover your full service scope." }
      ],
      tools: ["Google Business Profile API", "BrightLocal", "Whitespark", "GatherUp", "Moz Local", "ReviewTrackers", "Google Analytics 4"],
      timeline: {
        m1: "GBP verification, complete profile, category setup, opening photos, founder review campaign.",
        m2: "20+ reviews achieved. Weekly posts live. Citation building complete.",
        m3: "First 3-pack movement for primary service searches. Review velocity consistent.",
        m6: "Competitive local presence established. 60+ reviews. Multiple categories ranking.",
        m12: "Established local authority. GBP driving consistent inbound leads month-over-month."
      },
      keywords: [
        "new [business type] near me", "[service] [city]", "best [service] near me",
        "[industry] startup [city]", "[product/service] [neighborhood]",
        "local [service] company", "[business type] open now", "new [service] business [city]"
      ],
      caseStudy: {
        client: "Bloom Wellness Studio",
        location: "Austin, TX",
        before: "Day 1 — no GBP, no reviews, no local visibility",
        after: "90 days: GBP position 3, 38 reviews, 22 new client inquiries/mo",
        leads: "GBP-driven revenue covered 40% of first-year operating costs",
        period: "3 months from launch",
        highlight: "Founder network review campaign generated first 18 reviews in 2 weeks — competitive trust baseline established before first stranger visited"
      },
      localVsNational: {
        local: "Startup GMB is community-first. We build your local presence neighborhood by neighborhood — establishing the trust and review foundation that makes you the obvious local choice.",
        national: "Multi-city startup launches need simultaneous GBP setup per location with centralized brand assets and coordinated review generation strategies adapted to each market."
      },
      faqs: [
        { q: "How long does GBP verification take for a new business?", a: "Typically 1-2 weeks for postcard verification. Some businesses qualify for instant phone or email verification. We start the process as early as possible — ideally 2-3 weeks before your planned opening — so you're live on day one." },
        { q: "Can I ask friends and family for Google reviews?", a: "Yes — as long as they've had genuine contact with your business. For new businesses, reviews from beta users, early customers, vendors, and business contacts are legitimate and valuable." },
        { q: "How do I compete with established businesses that have 200+ reviews?", a: "Focus on review velocity (more new reviews per month than competitors), profile completeness, and post frequency. New businesses can close the trust gap faster than most owners expect with systematic review generation." },
        { q: "What photos should a brand new business have on their GBP?", a: "Team photos (builds personal trust), location interior and exterior, logo, and product or service environment photos. 20 minimum to start. Professional photography is worth the investment for any business where visual impression matters." },
        { q: "Should I set up a GBP before my business is fully open?", a: "Yes — start the process 2-3 weeks before opening. Select 'opening soon' status if available in your category. This gives you time to complete verification and populate your profile before your first customer searches for you." },
        { q: "How important is citation consistency for a new business?", a: "Critical. NAP (name, address, phone) inconsistencies across directories actively suppress GBP ranking. We build citations from day one with consistent information across the top 50 local directories." },
        { q: "What should I post on GBP when I'm just starting out?", a: "Opening announcements, team introductions, product/service spotlights, behind-the-scenes of your setup, and early offers for first customers. Content that humanizes your brand and builds familiarity drives early trust." },
        { q: "How long until a new business GBP generates real leads?", a: "With a complete profile and aggressive early review generation, most new businesses see first GBP inquiries within 30 days. Consistent leads from GBP typically develop within 60-90 days as review count and profile activity build ranking authority." }
      ]
    },

    // ─── 15. CONSTRUCTION ────────────────────────────────────────────────
    {
      slug: "construction",
      name: "Construction Companies",
      icon: "🏗️",
      tagline: "Win Bids Before Competitors Get the Call. Construction GMB That Fills Your Backlog.",
      heroSubtitle: "Property owners and developers search Google Maps before making their first call to a construction company. A dominant local presence ensures your company is found first — and chosen first for projects worth tens of thousands.",
      overview: "Construction companies compete for some of the highest-value individual contracts in local business. Residential renovations, commercial buildouts, new construction, and specialty trade work generate project values ranging from $10,000 to millions — making every qualified lead from Google Maps extraordinarily valuable.\n\nYet most construction companies have underdeveloped Google Business Profiles — incomplete categories, minimal photos, and review counts that don't reflect their actual volume of completed work. The result: smaller, less experienced competitors with better-optimized GBPs are winning the first call from clients who would prefer to work with a more established company.\n\nRankston builds construction company GBP profiles that project the quality, experience, and professionalism that high-value construction clients expect — turning Google Maps into a consistent source of qualified project inquiries.",
      stats: [
        { val: "89%", label: "of property owners research contractors online before calling" },
        { val: "$45K", label: "avg construction project value — one job = months of ad ROI" },
        { val: "3-pack", label: "position generates first call in 44% of local searches" },
        { val: "50+", label: "reviews needed to compete for $50K+ projects" }
      ],
      painPoints: [
        { title: "Invisible for High-Value Project Searches", desc: "Searches for 'commercial construction company near me' or 'building contractor [city]' come from clients with significant project budgets. Missing the 3-pack means missing these highest-value leads." },
        { title: "No Project Portfolio on GBP", desc: "Construction clients making major investment decisions need to see your completed work. A GBP without project photos loses to competitors showing 40 stunning completed projects." },
        { title: "Categories Too Generic", desc: "'General Contractor' alone misses commercial construction, renovation, specialty trade, and new build searches. Category depth determines which high-value projects find you." },
        { title: "Too Few Reviews for Project Scale", desc: "No developer is betting $500,000 on a contractor with 8 Google reviews. Review count must reflect the scale and volume of your completed work." },
        { title: "No Commercial Project Signaling", desc: "Commercial construction clients search differently from residential. GBPs without commercial signals are invisible to developers, property managers, and business owners." },
        { title: "Service Area Not Covering Project Territory", desc: "Construction companies often travel for work. Without service area configuration matching your project territory, you only appear near your office — missing projects across your full operating radius." }
      ],
      strategy: {
        title: "Our GMB Strategy for Construction Companies",
        intro: "Construction clients invest heavily and choose carefully. Our GMB strategy ensures your profile projects the quality, scale, and trustworthiness that converts a high-value project search into a first estimate call.",
        pillars: [
          { title: "Project Type Category Coverage", desc: "Each construction type requires category signals to capture its specific search traffic", tactics: ["Primary: General Contractor or Construction Company", "Secondary: Commercial Building Constructor, Home Builder, Renovation Contractor", "Specialty trades as applicable: Concrete Contractor, Steel Structure Builder", "License and bonding attributes configured"] },
          { title: "Visual Portfolio Strategy", desc: "Project photography is the single highest-converting element of a construction GBP", tactics: ["30+ project photos at launch covering all project types", "Monthly additions: completed projects, in-progress milestones, team on site", "Commercial and residential projects separately labeled", "Aerial/drone completion photos where available"] },
          { title: "High-Value Review System", desc: "Construction reviews must reflect the scale and professionalism of your work", tactics: ["Post-project completion review request within 72 hours of client sign-off", "Targeting 8-12 new reviews per month", "Keyword-rich responses mentioning project types and neighborhoods", "Tracking and monitoring for fraudulent negative reviews"] }
        ]
      },
      services: [
        "Construction GBP Full Setup", "Project-Type Category Architecture",
        "Visual Portfolio Upload Strategy", "Commercial Construction Signals",
        "Review Generation System", "Service Territory Configuration",
        "License & Bonding Attributes", "Project Q&A Management",
        "NAP Citation for Full Territory", "Competitor Benchmarking",
        "New Project Announcement Posts", "Monthly Project Lead Reporting"
      ],
      commonMistakes: [
        { mistake: "Only 'General Contractor' as GBP category", impact: "Construction searches are specific: 'commercial construction company,' 'metal building contractor,' 'concrete contractor near me.' One generic category is invisible for all project-specific searches.", fix: "Full category architecture covering every project type: General Contractor + Commercial Building Constructor + Renovation Contractor + New Home Builder — each unlocking specific high-value project searches." },
        { mistake: "Portfolio photos absent or low quality", impact: "A developer evaluating a $2M commercial build visits two GBPs. One has a logo. The other has 60 stunning construction photos. The contractor with photos gets the estimate call.", fix: "Professional project photography: before/during/after documentation for every significant project type. Uploaded within 2 weeks of substantial project milestones. The visual portfolio is your strongest conversion asset." },
        { mistake: "No commercial project signals anywhere on the profile", impact: "Commercial construction clients search with different intent and keywords than residential homeowners. A GBP with only residential signals is invisible to B2B and developer searches.", fix: "Commercial project photos labeled separately, commercial categories added, commercial-specific Q&A seeded, and business description mentioning commercial experience — opening the profile to developer and property manager searches." },
        { mistake: "Not requesting reviews at project completion", impact: "The ideal time to request a review is at project handoff — when the client is standing in their completed space, thrilled with the result. Waiting weeks later significantly reduces response rates.", fix: "Review request at project handoff: a personal message from the project manager at the completion walkthrough achieves the highest response rates and most detailed reviews." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "CallRail", "Whitespark", "ReviewTrackers", "Google Analytics 4", "Procore (integration)"],
      timeline: {
        m1: "Full audit, category architecture, project photos, review system, service territory setup.",
        m2: "8-12 new reviews monthly. Posts live with completed projects.",
        m3: "3-pack movement for primary construction + city searches.",
        m6: "Top-3 for general contractor and specialty types. 50+ reviews.",
        m12: "Dominant construction GBP. Both commercial and residential categories ranking. Pipeline full from GBP."
      },
      keywords: [
        "construction company near me", "contractor [city]", "commercial construction [city]",
        "building contractor near me", "renovation contractor [city]",
        "new home builder [city]", "commercial builder near me", "licensed contractor [city]"
      ],
      caseStudy: {
        client: "Cornerstone Commercial Construction",
        location: "Houston, TX",
        before: "GBP position 21, 11 reviews, no commercial signals",
        after: "GBP position 2, 94 reviews, 9 qualified project inquiries/mo",
        leads: "$1.8M in new project contracts attributed to GBP leads",
        period: "10 months",
        highlight: "Commercial category additions and portfolio upload drove first developer inquiries within 45 days"
      },
      localVsNational: {
        local: "Construction GMB is project-territory based. We build dominance across every county and city in your operating radius, covering residential and commercial searches simultaneously.",
        national: "Regional and national construction companies need multi-office GBP management with individual location optimization and centralized portfolio and brand asset strategy."
      },
      faqs: [
        { q: "How many reviews does a construction company need to win projects from GBP?", a: "35-50 for most mid-size markets. For commercial and high-value residential projects, 80+ at 4.8+ stars signals the level of experience and trustworthiness that decision-makers require." },
        { q: "What GBP categories should a construction company use?", a: "Primary: General Contractor or Construction Company. Secondary based on project types: Commercial Building Constructor, Home Builder, Renovation Contractor, and specialty trade categories. Each opens additional search visibility." },
        { q: "Should I show commercial and residential projects separately on GBP?", a: "Yes — label photos with project type in the description. Commercial decision-makers want to see commercial work; residential clients want residential. A mixed, unlabeled portfolio serves neither audience optimally." },
        { q: "How do before/after construction photos affect GBP ranking?", a: "Photos with recency and quantity signals improve GBP ranking. More importantly, they dramatically improve call conversion — clients viewing completed project portfolios have already pre-sold themselves before making contact." },
        { q: "How do I get reviews from commercial construction clients?", a: "Commercial clients respond best to direct, personal requests from the project manager at final walkthrough. Framing it as helping the business grow resonates more than an automated text. Follow up once via email if no response." },
        { q: "Can a construction company rank in multiple cities on Google Maps?", a: "Yes — through service area configuration covering your full operating territory. A single GBP can appear in searches across dozens of cities when the service area is properly configured." },
        { q: "How do I signal that I'm licensed and bonded on my GBP?", a: "Include license numbers in your business description, configure license and insurance attributes where available, and upload credentialing photos. These signals matter significantly for clients making large project commitments." },
        { q: "How long until construction GMB optimization generates project inquiries?", a: "Most construction companies see measurable GBP impression improvement within 30-45 days. Generating consistent project inquiries from GBP typically takes 90 days with consistent review generation and portfolio building." }
      ]
    },

    // ─── 16. TECHNOLOGY ───────────────────────────────────────────────────
    {
      slug: "technology",
      name: "Technology Companies",
      icon: "💻",
      tagline: "Be the Tech Partner Businesses Find When They Search. Technology GMB That Drives Qualified Inquiries.",
      heroSubtitle: "Businesses searching for IT services, software development, and tech solutions use Google Maps to find local providers they can trust. A fully optimized GBP puts your tech company in front of these decision-makers at the exact moment of need.",
      overview: "Technology companies occupy a unique position in local search. While many tech services are delivered remotely, the majority of small and mid-size businesses actively prefer local IT partners, software firms, and tech consultants they can meet with in person — making Google Maps a significant lead source for local technology companies.\n\nFrom managed IT services and cybersecurity to custom software development and hardware support, technology service searches are made by business decision-makers with real budgets and real projects. A technology company that builds a strong GBP presence captures these high-value B2B leads consistently.\n\nRankston builds technology company GBP profiles optimized for the specific searches that drive qualified business inquiries — from 'IT support near me' to 'software development company [city]' to 'managed IT services [city]'.",
      stats: [
        { val: "67%", label: "of SMBs prefer a local IT or tech partner they can meet in person" },
        { val: "B2B", label: "search behavior — decision-makers use Google Maps for tech partners" },
        { val: "3-pack", label: "captures first inquiry in 44% of relevant tech service searches" },
        { val: "$5K+", label: "avg monthly value of a managed IT services client" }
      ],
      painPoints: [
        { title: "Not Appearing for Business-Specific Tech Searches", desc: "'IT support near me,' 'managed IT services [city],' and 'cybersecurity company near me' are searched by business decision-makers ready to engage. Missing the 3-pack means missing these high-value B2B leads." },
        { title: "GBP Looks Like a Consumer Business", desc: "Technology service GBPs need to signal B2B credibility — professional team photos, technology-specific categories, and content that speaks to business challenges, not consumer concerns." },
        { title: "No Service-Specific Categories", desc: "IT support, managed services, cybersecurity, networking, and software development each have their own GBP category signals. Missing these means missing the specific searches for each service type." },
        { title: "Under-Developed Online Reputation", desc: "Business buyers research technology vendors extensively. Under 20 reviews for a tech company signals limited client experience — a major red flag for decision-makers evaluating managed IT partners." },
        { title: "No Business-Oriented Content Strategy", desc: "Technology GBP posts need to speak to business pain points: cybersecurity threats, IT downtime, software efficiency. Generic posts don't build the credibility that B2B tech buyers need to see." },
        { title: "No Consultation or Assessment Offer on Profile", desc: "Technology clients don't 'buy' from a GBP directly. They schedule consultations. A GBP without a clear consultation booking path loses the B2B conversion opportunity." }
      ],
      strategy: {
        title: "Our GMB Strategy for Technology Companies",
        intro: "Technology company GBP success is about B2B credibility — signaling expertise, reliability, and local accessibility that business decision-makers need before they'll invite a tech partner into their operations.",
        pillars: [
          { title: "B2B Technology Category Architecture", desc: "Each technology service requires category coverage to appear in those specific business searches", tactics: ["Primary: IT Services & Computer Repair or Computer Support and Services", "Secondary: Cybersecurity, Network Support, Software Development, Managed IT", "Services listing: all service offerings with business-oriented descriptions", "Industry specialization signals in business description"] },
          { title: "Business Client Trust Signals", desc: "Technology buyers research vendors carefully before making contact", tactics: ["Professional team headshots and certifications in photo section", "Client review generation: post-project and post-onboarding requests", "Targeting 15+ new reviews per month from business clients", "Case study and project posts demonstrating business-specific results"] },
          { title: "Expert Content Strategy", desc: "B2B tech buyers respond to content that demonstrates expertise and addresses real business pain points", tactics: ["Bi-weekly posts: cybersecurity tips, IT best practices, technology updates", "Q&A seeded with common IT and tech questions from business owners", "Certification and partnership posts: Microsoft Partner, Google Partner, etc.", "Industry-specific content: tech for healthcare, legal, manufacturing"] }
        ]
      },
      services: [
        "Technology GBP Full Setup", "B2B Category Architecture",
        "Tech Certification Display", "Client Review Generation System",
        "Consultation Link Integration", "Expert Content Post Management",
        "Cybersecurity Content Strategy", "Industry Specialization Signals",
        "NDC Citation Consistency", "Competitor Tech Company Analysis",
        "Partnership Badge Display", "Monthly B2B Lead Reporting"
      ],
      commonMistakes: [
        { mistake: "Generic 'IT Services' as the only category", impact: "Business owners searching 'cybersecurity company near me' or 'managed IT services [city]' need specific category matches. One generic category misses all service-specific tech searches.", fix: "Full technology category architecture: IT Services + Cybersecurity Company + Network Consultant + Software Developer + Managed IT Provider — each unlocking specific high-value business tech searches." },
        { mistake: "No professional team photos or certifications", impact: "Business buyers evaluating a technology partner want to see who they'll be working with and what credentials they hold. Stock photos and missing team images signal a faceless operation.", fix: "Professional team photos, certification badges (Microsoft Partner, AWS, CompTIA), and office environment photos. These signals build the personal and professional trust that converts B2B tech searches into consultation calls." },
        { mistake: "Generic posts not relevant to business decision-makers", impact: "A post about 'our new service' doesn't engage a CFO evaluating IT partners. Content that addresses business pain points — downtime costs, cybersecurity risk, productivity — demonstrates expertise.", fix: "Business-oriented content calendar: cybersecurity threat alerts, case studies of client IT challenges solved, technology ROI posts, compliance updates. Content that speaks to decision-maker concerns demonstrates expertise before contact." },
        { mistake: "No consultation booking path on GBP", impact: "Technology service sales require conversations, not instant purchases. A GBP without a clear consultation booking link loses every decision-maker who was ready to engage but hit friction.", fix: "Direct consultation booking link from GBP: 30-minute IT assessment, discovery call, or tech audit offer. Free assessment positioning reduces decision friction and generates higher-value first conversations." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Calendly (scheduling)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "HubSpot (CRM)"],
      timeline: {
        m1: "Full audit, B2B category setup, team photos, certs display, consultation link, review system.",
        m2: "15+ new business reviews monthly. Expert content posts live.",
        m3: "Measurable 3-pack movement for managed IT and primary tech service searches.",
        m6: "Top-3 for primary tech service + city. 40+ client reviews.",
        m12: "Dominant local technology GBP. Multiple service categories ranking. Consistent B2B inquiry flow from GBP."
      },
      keywords: [
        "IT support near me", "managed IT services [city]", "IT company [city]",
        "cybersecurity company near me", "software development company [city]",
        "tech support near me", "network support [city]", "IT consulting [city]"
      ],
      caseStudy: {
        client: "ClearPath IT Solutions",
        location: "Seattle, WA",
        before: "GBP position 15, 9 reviews, 2 inbound B2B inquiries/mo",
        after: "GBP position 2, 78 reviews, 16 qualified B2B inquiries/mo",
        leads: "$32K/mo in new managed IT contracts from GBP-attributed leads",
        period: "8 months",
        highlight: "Cybersecurity category addition and expert content posts drove 3× increase in security-service inquiries"
      },
      localVsNational: {
        local: "Technology GMB is relationship-local — business clients want a tech partner they can meet in person and call directly. We build the trust signals and service coverage that convert local business searches into long-term tech partnerships.",
        national: "Technology companies with multiple offices need individual GBP optimization per location, with centralized service category libraries and certification display strategies."
      },
      faqs: [
        { q: "Can technology companies get leads from Google Maps?", a: "Absolutely — especially for local IT support, managed services, and tech consulting. Most small and mid-size businesses prefer local technology partners they can meet with. Google Maps is where they find them." },
        { q: "What GBP categories should a technology company use?", a: "Primary: IT Services & Computer Repair or Computer Support and Services. Secondary based on offerings: Cybersecurity, Managed IT Services, Software Developer, Network Consultant. Each category opens specific B2B search visibility." },
        { q: "How do technology companies get client reviews on GBP?", a: "Request after successful project delivery or at the 90-day mark of a new managed IT contract — when the client has experienced your service quality. Business client reviews carry significant weight with decision-makers evaluating your firm." },
        { q: "Should a software development company have a GBP?", a: "Yes — especially if serving local businesses. Searches for 'software development company [city]' and 'app developer near me' come from businesses with real budgets. GBP captures these searches that would otherwise go to directories." },
        { q: "What content should a technology company post on GBP?", a: "Cybersecurity alerts and tips, client success stories (anonymized), technology platform updates, certification achievements, and business-oriented tech guidance. Content that demonstrates expertise builds credibility before a decision-maker makes contact." },
        { q: "How do certifications affect a technology GBP's credibility?", a: "Significantly. Microsoft Partner, AWS Certified, CompTIA certifications in your photo section and business description signal technical competence to business buyers who know these credentials. They differentiate you from smaller, uncertified competitors." },
        { q: "Can remote technology companies benefit from GBP?", a: "Yes — with a registered business address. Even primarily remote tech companies benefit from a GBP that captures local searches. We configure service area settings to reflect your actual delivery geography." },
        { q: "How long until technology GMB optimization generates B2B leads?", a: "Most tech companies see measurable GBP impression improvement within 45 days. Generating consistent B2B inquiries typically takes 90 days as review count builds and expert content signals accumulate." }
      ]
    },

    // ─── 17. EDUCATION ────────────────────────────────────────────────────
    {
      slug: "education",
      name: "Education & Training",
      icon: "🎓",
      tagline: "Be the Learning Institution Students Find First. Education GMB That Fills Enrollment.",
      heroSubtitle: "Students, parents, and professionals searching for education and training programs use Google Maps to find local options. A fully optimized GBP puts your institution in front of these decision-ready searchers at the moment of enrollment intent.",
      overview: "Education providers — from tutoring centers and private schools to vocational training programs and professional certification courses — compete intensely for local student enrollment. Parents searching for tutoring, adults seeking professional development, and students researching trade programs all begin their search on Google.\n\nFor education businesses, the Google Business Profile is a critical enrollment touchpoint. The 3-pack appears before every education directory and aggregator, capturing decision-ready searchers at their highest enrollment intent. An optimized GBP built around educational trust signals, program specifics, and outcome credibility consistently outperforms digital advertising for local enrollment generation.\n\nRankston builds education provider GBP profiles that convert local searches into enrollment inquiries through credential display, outcome-focused content, and the review authority that parents and students rely on when making education decisions.",
      stats: [
        { val: "78%", label: "of parents research education providers online before enrolling" },
        { val: "44%", label: "of education local searches click the 3-pack first" },
        { val: "4.5+", label: "star rating threshold for education provider credibility" },
        { val: "60 days", label: "to measurable enrollment improvement from GBP" }
      ],
      painPoints: [
        { title: "Not Visible for Program-Specific Searches", desc: "'Math tutor near me,' 'coding bootcamp [city],' 'trade school programs' — program-specific searches come from students and parents ready to enroll. Missing the 3-pack means missing these high-intent searches." },
        { title: "No Outcome or Credential Signals on Profile", desc: "Education decisions are outcome-driven. GBPs that don't display accreditation, instructor credentials, outcomes data, or success stories lose to providers who do." },
        { title: "Missing Program-Specific Categories", desc: "Tutoring, test prep, vocational training, music lessons, and language learning each have distinct GBP categories and audiences. One generic 'education' category misses all program-specific searches." },
        { title: "Under-Developed Student/Parent Reviews", desc: "Education is high-stakes — parents and students research thoroughly before enrolling. Under 25 reviews doesn't meet the trust threshold for education decisions." },
        { title: "No Enrollment CTA on Profile", desc: "Education GBPs without a direct enrollment inquiry or consultation link add friction to the conversion process — losing decision-ready students to competitors with a clear next step." },
        { title: "No Content Demonstrating Educational Outcomes", desc: "Posts about student successes, instructor qualifications, and program outcomes build the trust that converts education searches into enrollment inquiries." }
      ],
      strategy: {
        title: "Our GMB Strategy for Education & Training Providers",
        intro: "Education decisions are high-stakes and research-intensive. Our GMB strategy builds the credential visibility, outcome proof, and review authority that converts an education search into an enrollment conversation.",
        pillars: [
          { title: "Program Category Coverage", desc: "Each educational program type requires category signals to appear in those specific searches", tactics: ["Primary: most relevant education category (Tutoring Service, Vocational School, etc.)", "Secondary: all program types offered (Test Prep, Music Lessons, Language School)", "Service listings: all programs with descriptions, duration, and outcomes", "Accreditation and certification attributes"] },
          { title: "Outcome & Credential Trust Building", desc: "Education buyers need proof of results before enrolling", tactics: ["Instructor credential photos: degrees, certifications, years of experience", "Student success story posts: outcomes, placements, achievements", "Accreditation badges in photo profile", "Q&A seeded with outcome and curriculum questions"] },
          { title: "Enrollment Review Generation", desc: "Student and parent reviews are the primary trust signal for education decisions", tactics: ["Post-enrollment and post-completion review requests", "Targeting 10+ new reviews per month", "Review responses highlighting outcomes and program strengths", "Testimonial posts with student permission"] }
        ]
      },
      services: [
        "Education GBP Full Setup", "Program Category Architecture",
        "Instructor Credential Display", "Student Review Generation System",
        "Enrollment Link Integration", "Outcome Content Post Management",
        "Accreditation Signal Setup", "Parent Q&A Management",
        "NAP Citation Consistency", "Competitor Education Benchmarking",
        "Success Story Post Calendar", "Monthly Enrollment Attribution Reporting"
      ],
      commonMistakes: [
        { mistake: "Only one generic education category", impact: "A tutoring center specializing in math, science, and test prep needs separate category signals for each. One generic category misses all program-specific enrollment searches.", fix: "Full program category architecture: Tutoring Service + Test Preparation Center + STEM Tutoring — each unlocking the specific searches from students and parents researching those programs." },
        { mistake: "No outcome data or success stories", impact: "Parents spending $2,000+ on tutoring or $15,000 on a vocational program need evidence that the program delivers results. Generic GBP descriptions without outcome data lose to competitors who post ACT score improvements and job placement rates.", fix: "Outcome-focused content: student success posts with specific results (SAT score improvement, professional certification achievements, job placement), instructor credential display, and accreditation signals." },
        { mistake: "No enrollment inquiry link", impact: "An interested parent or student who can't easily take the next step from your GBP bounces to a competitor who makes enrollment inquiry easy. Friction at the conversion moment costs enrollments.", fix: "Direct enrollment inquiry or consultation booking link from GBP: 'Schedule a free program consultation' or 'Request enrollment information.' Calendly or form integration so prospects can act immediately." },
        { mistake: "Not responding to parent and student reviews", impact: "Reviews that aren't responded to make an education provider look unresponsive. Parents researching options form immediate negative impressions from unanswered reviews, especially any negative ones.", fix: "Review response protocol for every review within 48 hours: warm, professional acknowledgment that highlights program values. Thoughtful responses to negative reviews that demonstrate a commitment to student success." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Calendly (enrollment scheduling)", "ReviewTrackers", "Whitespark", "Google Analytics 4"],
      timeline: {
        m1: "Full audit, program categories, instructor photos, accreditation display, review system, enrollment link.",
        m2: "10+ new student/parent reviews monthly. Posts live with success stories.",
        m3: "3-pack movement for primary program + city searches. Enrollment inquiries from GBP measurable.",
        m6: "Top-3 for core programs in local market. 50+ reviews.",
        m12: "Dominant local education GBP. Multiple programs ranking. Consistent enrollment inquiry flow."
      },
      keywords: [
        "tutoring near me", "learning center [city]", "SAT prep [city]",
        "coding classes near me", "trade school [city]", "music lessons near me",
        "language school [city]", "vocational training [city]", "after school programs near me"
      ],
      caseStudy: {
        client: "Apex Learning Center",
        location: "Phoenix, AZ",
        before: "GBP position 14, 18 reviews, 4 enrollment inquiry calls/mo",
        after: "GBP position 2, 112 reviews, 31 enrollment inquiry calls/mo",
        leads: "Waitlist for core programs within 6 months of optimization launch",
        period: "6 months",
        highlight: "Test prep category addition and outcome-focused posts drove SAT/ACT inquiry calls from 1/mo to 11/mo"
      },
      localVsNational: {
        local: "Education GMB is community-level. Parents want programs they can visit, instructors they can meet, and results supported by local student reviews. We build that local credibility systematically.",
        national: "Education companies with multiple locations need individual GBP optimization per campus, with centralized brand assets, program outcome content, and coordinated review generation strategies."
      },
      faqs: [
        { q: "How do education providers get more enrollment inquiries from Google Maps?", a: "Three steps: (1) Configure program-specific categories for every educational service you offer. (2) Generate and display 25+ student and parent reviews. (3) Post student success stories monthly. Together, these drive measurable enrollment inquiry growth within 60 days." },
        { q: "What GBP categories should a tutoring center use?", a: "Primary: Tutoring Service. Secondary: Test Preparation Center, Academic Coaching, Study Skills courses by subject. Each category makes you visible for those specific student and parent searches." },
        { q: "How do I get student and parent reviews on GBP?", a: "Request at natural milestone moments: after a significant grade improvement, after test results come in, or at program completion. Parents and students at peak satisfaction moments produce the most authentic, detailed reviews." },
        { q: "Can I show my accreditation on Google Business Profile?", a: "Yes — in your business description, as photo uploads (accreditation certificates), and through attributes if applicable. Accreditation signals are a primary trust factor for education consumers making significant enrollment decisions." },
        { q: "What should an education business post on GBP?", a: "Student success stories (with permission), instructor spotlights, program milestone announcements, enrollment deadline reminders, and educational tips relevant to your program area. Content demonstrating outcomes and expertise builds trust." },
        { q: "How important is GBP for a private school vs. an education brand?", a: "Equally important. Private schools compete for enrollment with public options and other private schools. A strong GBP with reviews, outcome data, and photo tours drives considerably more campus visit requests." },
        { q: "Should I display tutor credentials on my GBP?", a: "Absolutely. Instructor credentials (degrees, certifications, years of experience) in photos and business description are primary trust signals for education buyers. They differentiate professional programs from informal tutoring options." },
        { q: "How long until education GMB optimization generates enrollment inquiries?", a: "Most education providers see measurable GBP inquiry improvement within 30-60 days of optimization. Consistent enrollment flow from GBP typically develops within 90 days as reviews accumulate and program-specific categories gain ranking." }
      ]
    },

    // ─── 18. FINANCE ─────────────────────────────────────────────────────
    {
      slug: "finance",
      name: "Financial Services",
      icon: "💰",
      tagline: "Be the Financial Professional Clients Find and Trust. Finance GMB That Converts High-Value Inquiries.",
      heroSubtitle: "Individuals and business owners searching for financial advisors, tax professionals, and wealth management services use Google Maps to find local experts they can trust with their most sensitive decisions. A dominant GBP presence ensures you're found first.",
      overview: "Financial services is one of the highest-trust, highest-value categories in local search. Whether someone is searching for a financial advisor to manage their retirement savings, a tax professional during filing season, or a business owner seeking wealth management guidance, the decision is significant — and it begins on Google.\n\nFor financial services professionals — financial planners, wealth managers, investment advisors, insurance professionals, and tax specialists — Google Business Profile is an underutilized channel that rivals or outperforms traditional marketing for qualified lead generation. The 3-pack captures decision-ready searchers at the exact moment they're ready to engage a financial professional.\n\nRankston builds financial services GBP profiles that project the credibility, expertise, and trustworthiness that high-value financial clients require — converting local searches into qualified consultation requests from clients ready to commit.",
      stats: [
        { val: "71%", label: "of people search online to find a local financial advisor" },
        { val: "$250K+", label: "avg assets under management per financial advisory client" },
        { val: "3-pack", label: "captures 44% of local financial service search clicks" },
        { val: "50+", label: "reviews needed to meet trust threshold for financial decisions" }
      ],
      painPoints: [
        { title: "Not Visible for High-Intent Financial Searches", desc: "'Financial advisor near me,' 'wealth management [city],' 'CFP near me' are searched by high-net-worth individuals ready to engage. Missing the 3-pack means missing these highest-value client searches." },
        { title: "Only One Generic Category", desc: "Financial planning, investment advisory, insurance, tax services, and wealth management each have distinct GBP categories. One generic category is invisible for all service-specific financial searches." },
        { title: "No Credential Display", desc: "CFP, CFA, CPA, ChFC credentials are critical trust signals for financial services. GBPs without credentials look identical to uncredentialed competitors to potential high-value clients." },
        { title: "Under-Developed Client Reviews", desc: "Entrusting someone with your financial future requires significant trust. Under 30 reviews doesn't clear the confidence threshold for clients considering a financial advisory relationship." },
        { title: "No Consultation Booking Path", desc: "Financial clients don't buy services from a GBP — they schedule consultations. A GBP without a direct consultation link adds friction that loses ready-to-engage clients." },
        { title: "Compliance-Risky Content on Profile", desc: "Financial services advertising is regulated. GBP content must comply with FINRA, SEC, and state regulations — and many financial professionals don't realize their GBP descriptions or posts may create compliance exposure." }
      ],
      strategy: {
        title: "Our GMB Strategy for Financial Services Professionals",
        intro: "Financial clients make high-stakes trust decisions slowly and deliberately. Our GMB strategy builds the credential visibility, client review authority, and compliant content that converts a financial search into a qualified consultation.",
        pillars: [
          { title: "Financial Service Category Architecture", desc: "Each financial service type requires category coverage to appear in those specific searches", tactics: ["Primary: most relevant financial category (Financial Planner, Financial Advisor, etc.)", "Secondary: all applicable services (Investment Management, Insurance Agency, Tax Preparation)", "Service listings: all offerings with compliant descriptions", "Credential attribute configuration: CFP, CFA, CPA designation"] },
          { title: "Credential & Trust Signal Display", desc: "Financial trust is built through verifiable credentials and consistent social proof", tactics: ["Professional headshot and credential display in photo section", "CFP, CFA, CPA certificates in photo uploads", "Client review request post-planning engagement or annual review", "Targeting 8-10 new reviews per month within compliance guidelines"] },
          { title: "Compliant Content Strategy", desc: "Financial GBP content must balance engagement with regulatory requirements", tactics: ["Financial wellness posts: general guidance without specific investment advice", "Market update posts: educational, not advisory", "Q&A: general financial planning questions answered without personalized advice", "Award and recognition posts: industry credentials, local business recognition"] }
        ]
      },
      services: [
        "Financial Services GBP Full Setup", "Service Category Architecture",
        "Credential Display Configuration", "Compliant Client Review System",
        "Consultation Booking Link Setup", "Regulatory-Compliant Post Management",
        "Financial Education Content", "Client Q&A Management",
        "NAP Citation Consistency", "Competitor Financial Advisor Analysis",
        "Award & Recognition Posts", "Monthly Client Inquiry Reporting"
      ],
      commonMistakes: [
        { mistake: "Generic 'Financial Services' as the only category", impact: "Searches for 'wealth manager near me,' 'certified financial planner [city],' and 'retirement planning advisor' require specific GBP categories. One generic category is invisible for all specialty searches.", fix: "Full financial category architecture: Financial Planner + Investment Management Service + Tax Advisor + Insurance Agency — each unlocking specific high-value client searches for those services." },
        { mistake: "No credentials visible on profile", impact: "A CFP with 20 years of experience looks identical on GBP to an uncredentialed advisor if no credentials are displayed. High-value clients researching financial advisors look for credentials as a first filter.", fix: "CFP, CFA, or CPA prominently in business description with regulatory-compliant language, credential photo uploads, and attribute display where available. Credentials differentiate you instantly from uncredentialed competitors." },
        { mistake: "No consultation booking link", impact: "A high-net-worth individual who found your GBP profile and is ready to schedule a consultation hits an extra friction step without a booking link — and may choose the next result that makes it easier.", fix: "Direct consultation scheduling link from GBP: 'Schedule a complimentary financial review' or 'Book your retirement planning consultation.' Calendly integration so clients can book at their convenience, not just during business hours." },
        { mistake: "Posts that may violate FINRA or SEC guidelines", impact: "Specific investment recommendations, performance claims, or testimonial-like content on GBP can create compliance exposure for registered advisors. This is a risk most financial GBP setups don't address.", fix: "Compliance-reviewed content framework: general financial wellness information, educational guidance, and non-advisory market context — without specific recommendations, performance figures, or language that crosses into advisory territory as defined by FINRA/SEC." }
      ],
      tools: ["Google Business Profile API", "GatherUp", "BrightLocal", "Calendly (consultation scheduling)", "ReviewTrackers", "Whitespark", "Google Analytics 4", "Redtail/Wealthbox (CRM)"],
      timeline: {
        m1: "Full audit, financial categories, credential display, compliance review, consultation link, review system.",
        m2: "8-10 new client reviews monthly. Compliant content posts live.",
        m3: "Measurable 3-pack movement for primary financial service + city searches.",
        m6: "Top-3 for financial advisor and specialty searches. 40+ reviews.",
        m12: "Dominant local financial services GBP. Multiple categories ranking. Consistent high-value inquiry flow."
      },
      keywords: [
        "financial advisor near me", "wealth management [city]", "CFP near me",
        "retirement planning advisor [city]", "investment advisor near me",
        "financial planner [city]", "tax advisor near me", "insurance advisor [city]"
      ],
      caseStudy: {
        client: "Meridian Wealth Advisors",
        location: "Denver, CO",
        before: "GBP position 16, 12 reviews, 2 GBP consultation inquiries/mo",
        after: "GBP position 2, 88 reviews, 14 qualified consultation inquiries/mo",
        leads: "$4.2M in new AUM from GBP-attributed client onboarding",
        period: "9 months",
        highlight: "CFP credential display and retirement planning category addition drove 6× increase in high-net-worth client inquiries"
      },
      localVsNational: {
        local: "Financial services GMB is relationship-local — clients want a financial advisor they can sit across from and call directly. We build the local trust signals and professional credibility that convert community searches into long-term advisory relationships.",
        national: "Multi-office financial advisory firms and national wealth management companies need individual GBP optimization per office, with centralized compliance framework and credential display management."
      },
      faqs: [
        { q: "Can financial advisors generate leads from Google Maps?", a: "Absolutely. Local financial planning and wealth management searches come from people actively seeking a financial professional. Most financial advisors underinvest in GBP, making the 3-pack significantly less competitive than other professional service categories." },
        { q: "Are there compliance rules for financial advisor GBP content?", a: "Yes — FINRA and SEC guidelines apply to marketing content including GBP descriptions and posts. We build content frameworks that are educational and credibility-building without crossing into specific investment advice or performance claims that violate advertising regulations." },
        { q: "What GBP categories should a financial advisor use?", a: "Primary: Financial Planner or Financial Advisor. Secondary based on services: Investment Management Service, Insurance Agency, Retirement Planning Service, Tax Advisor. Each category opens visibility for those specific client searches." },
        { q: "How do financial advisors get client reviews on GBP?", a: "Request during annual reviews or after significant financial milestones (retirement plan established, portfolio restructure completed). FINRA allows genuine client reviews; just ensure the request process doesn't solicit testimonials that imply future performance guarantees." },
        { q: "Should I display my CFP or CFA credential on GBP?", a: "Yes — prominently. Credentials are among the top 3 trust signals for financial service seekers. Include CFP or CFA in your business description (with compliant language), upload credential certificates to your photo section, and configure credential attributes where available." },
        { q: "Can I post about market performance on my GBP?", a: "With caution. General market education and financial wellness content is appropriate. Specific market predictions, performance claims, or content that could be construed as personalized investment advice requires FINRA/SEC compliance review before posting." },
        { q: "How do I compete with large financial institutions on Google Maps?", a: "Personal relationship and local community focus. Large banks and national firms can't match the personal advisory relationship that local independent advisors provide. Emphasize your accessibility, personalized service, and local client relationships in all GBP content." },
        { q: "How long until financial services GBP optimization generates consultation inquiries?", a: "Most financial advisors see measurable GBP visibility improvement within 45 days. Generating consistent qualified consultation requests typically takes 90 days as review count builds and credential signals establish search authority." }
      ]
    }

  ] // end all 18 GMB industries
};

export default gmbIndustries;

