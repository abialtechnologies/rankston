'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

/* ─── CONSTANTS ─────────────────────────────────────────────── */
const AC = '#10B981'; // emerald accent

const SEO_SUBS = [
  { slug: 'on-page-seo',       label: 'On-Page SEO',        icon: '📄', desc: 'Title tags, meta, headers, E-E-A-T signals, semantic structure.' },
  { slug: 'off-page-seo',      label: 'Off-Page SEO',       icon: '🔗', desc: 'Brand mentions, PR outreach, and authority building beyond your domain.' },
  { slug: 'technical-seo',     label: 'Technical SEO',      icon: '⚙️', desc: 'Core Web Vitals, crawlability, indexation, site architecture.' },
  { slug: 'local-seo',         label: 'Local SEO',          icon: '📍', desc: 'Google Map Pack, NAP consistency, local citations.' },
  { slug: 'link-building',     label: 'Link Building',      icon: '⛓️', desc: 'DR 50+ editorial links from relevant publications only.' },
  { slug: 'ai-seo',            label: 'AI SEO / AIO',       icon: '🤖', desc: 'Appear in Google AI Overviews and prompt-based search results.' },
  { slug: 'geo-optimization',  label: 'GEO Optimization',   icon: '🌐', desc: 'Get cited by ChatGPT, Perplexity, Gemini, Claude, and more.' },
  { slug: 'ecommerce-seo',     label: 'eCommerce SEO',      icon: '🛒', desc: 'Category pages, product schema, faceted nav, and PDP optimization.' },
];

const PILLARS = [
  {
    title: 'Traditional SEO',
    badge: 'Still Essential',
    color: AC,
    icon: '🔍',
    points: [
      'On-Page keyword signals & E-E-A-T',
      'High-authority backlink building',
      'Technical crawlability & Core Web Vitals',
      'Local Map Pack & Google Business',
      'Content clusters & topical authority',
    ],
    note: 'Your foundation. Without it, nothing else works.',
  },
  {
    title: 'AIO (AI Overview)',
    badge: '2025 Priority',
    color: '#6366F1',
    icon: '🤖',
    points: [
      'Appear in Google\'s AI-generated answers',
      'Structured FAQs + schema markup',
      'E-E-A-T-heavy author signals',
      'Featured snippet ownership',
      'Concise, factual paragraph writing',
    ],
    note: 'Billions of searches now show AI answers before blue links.',
  },
  {
    title: 'GEO (Generative Engine)',
    badge: 'Future-Proof',
    color: '#F59E0B',
    icon: '🌐',
    points: [
      'Cited by ChatGPT, Perplexity & Gemini',
      'Brand entity optimization',
      'Knowledge graph presence',
      'Wikipedia & Wikidata signals',
      'Authoritative content clusters',
    ],
    note: 'ChatGPT alone handles 10M+ searches per day.',
  },
];

const PROCESS_STEPS = [
  {
    n: '01', title: 'Free SEO Audit',
    desc: 'We crawl your whole site and look at 200+ factors — technical issues, keyword gaps, content opportunities, and what your competitors are doing better. You get a clear report within 24 hours.',
    week: 'Week 1',
  },
  {
    n: '02', title: 'Strategy & Keyword Map',
    desc: 'We map out keywords based on what your customers are actually searching for — buying-intent terms, informational queries, and local searches. Every page gets its own target keyword set.',
    week: 'Week 1–2',
  },
  {
    n: '03', title: 'Technical SEO Fix',
    desc: 'Before we write a single word of content, we fix the technical issues holding your site back. Slow pages, crawl errors, duplicate content, missing canonicals — all of it handled first.',
    week: 'Week 2–3',
  },
  {
    n: '04', title: 'On-Page Optimization',
    desc: 'We go through your most important pages and improve the things Google looks at — titles, headings, internal links, image descriptions, schema markup, and page speed.',
    week: 'Week 3–4',
  },
  {
    n: '05', title: 'Content & Link Building',
    desc: 'We create content that builds your authority on specific topics, and we earn backlinks from real websites through genuine outreach. No paid links. No shortcuts.',
    week: 'Month 2–6',
  },
  {
    n: '06', title: 'Report, Refine & Scale',
    desc: 'Every month you get a clear report showing how your keywords moved, how much traffic grew, and what we\'re working on next. We update the strategy whenever Google does.',
    week: 'Ongoing',
  },
];

const AUDIT_CHECKLIST = [
  {
    category: 'Technical Health',
    color: '#10B981',
    items: ['Core Web Vitals (LCP < 2.5s)', 'HTTPS + security headers', 'XML sitemap & robots.txt', 'Canonical tags on all pages', 'Mobile-first rendering', 'No crawl errors or 404s'],
  },
  {
    category: 'On-Page Signals',
    color: '#3B82F6',
    items: ['Unique title tags (< 60 chars)', 'Meta descriptions on all pages', 'Single H1 per page', 'Keyword in first 100 words', 'Image alt text & WebP format', 'FAQ schema markup'],
  },
  {
    category: 'Authority Building',
    color: '#8B5CF6',
    items: ['Domain Rating (DR 30+ target)', 'Link velocity & anchor diversity', 'No toxic backlinks', 'Brand mentions monitored', 'No link farms or PBNs', 'Editorial links only'],
  },
  {
    category: 'AI / AIO Readiness',
    color: '#F59E0B',
    items: ['Structured FAQ blocks on key pages', 'Author E-E-A-T signals', 'Knowledge graph entity', 'Featured snippet ownership', 'Concise factual definitions', 'GEO brand mentions tracked'],
  },
];

const INDUSTRIES = [
  { icon: '🏥', name: 'Healthcare', desc: 'Clinics, dentists, insurance' },
  { icon: '🚗', name: 'Auto Dealers', desc: 'New, used, repair shops' },
  { icon: '🏠', name: 'Real Estate', desc: 'Realtors, property managers' },
  { icon: '⚖️', name: 'Law Firms', desc: 'Personal injury, family law' },
  { icon: '🍕', name: 'Restaurants', desc: 'Local, chains, delivery' },
  { icon: '🛒', name: 'eCommerce', desc: 'Shopify, WooCommerce, Amazon' },
  { icon: '🏗️', name: 'Construction', desc: 'Contractors, roofers, HVAC' },
  { icon: '💼', name: 'B2B SaaS', desc: 'Software, services, agencies' },
  { icon: '🎓', name: 'Education', desc: 'Schools, tutors, online courses' },
  { icon: '💅', name: 'Beauty & Wellness', desc: 'Salons, spas, fitness' },
  { icon: '🏦', name: 'Finance', desc: 'Accountants, advisors, lenders' },
  { icon: '🌍', name: 'International', desc: 'Multi-market global brands' },
];

const RESULTS_TIMELINE = [
  { month: 'Month 1', label: 'Foundation', progress: 15, desc: 'Technical SEO fixed, keyword map built, on-page optimizations applied.', color: '#10B981' },
  { month: 'Month 2', label: 'Content Live', progress: 35, desc: 'Optimized content published, first editorial backlinks go live.', color: '#3B82F6' },
  { month: 'Month 3', label: 'First Rankings', progress: 55, desc: 'Target keywords begin moving to page 2–3. Traffic starts increasing.', color: '#6366F1' },
  { month: 'Month 4–5', label: 'Page 1 Push', progress: 75, desc: 'Competitive keywords reach page 1. Traffic growth accelerates.', color: '#8B5CF6' },
  { month: 'Month 6+', label: 'Revenue Impact', progress: 100, desc: 'Top 3 rankings locked in. Organic leads and revenue compound over time.', color: '#F59E0B' },
];

const WHY_US = [
  { icon: '🤖', title: 'AIO + GEO Built In', desc: "We don't just focus on traditional Google rankings. We make sure you also show up in Google's AI answers and get mentioned by ChatGPT, Perplexity, and Gemini when people ask about your industry." },
  { icon: '🚫', title: 'No Shortcuts. Ever.', desc: "We don't use link farms, paid links, or anything that could get your site penalized. Everything we do is clean, honest, and built to last through future Google updates." },
  { icon: '📊', title: 'Clear Monthly Reports', desc: 'You\'ll see exactly which keywords moved, how much traffic grew, and what changed. We focus on numbers that matter — not just visits, but real leads and revenue.' },
  { icon: '🔗', title: 'Quality Links Only', desc: 'We only build links from real websites that are relevant to your industry. Every link is placed manually and checked before we pursue it.' },
  { icon: '⚡', title: 'Technical Issues First', desc: "Most agencies jump straight to content and ignore technical problems. We fix your site's foundation in the first week — because everything else depends on it." },
  { icon: '🌍', title: 'One Team, Everything Covered', desc: "You work with one team that handles on-page SEO, content, link building, local, AIO, and GEO. No handoffs between departments. No confusion about who's responsible for what." },
];

const FAQS = [
  { q: 'How long does SEO take to show results?', a: 'You should start seeing keyword movement within 60–90 days. Real traffic growth usually kicks in around months 4–6. For competitive keywords, reaching page 1 typically takes 5–7 months. The good news is SEO compounds — results keep improving the longer you stick with it.' },
  { q: 'What is AIO and why should I care?', a: "Google's AI Overviews appear right at the top of search results — above the traditional blue links — for a huge number of searches. If your content isn't optimized to appear there, you're missing out on visibility that your competitors may already be capturing." },
  { q: 'What makes GEO optimization different from regular SEO?', a: 'GEO (Generative Engine Optimization) is about getting your brand mentioned when people ask ChatGPT, Perplexity, or Gemini a question related to your industry. These AI tools handle millions of search-like queries every day, and being a cited source there builds real brand authority.' },
  { q: 'Do you guarantee Page 1 rankings?', a: "No — and honestly, any agency that makes that promise is being dishonest with you. Rankings depend on your niche, competition, and how long you've been investing in SEO. What we can promise is a clear strategy, honest reporting, and consistent effort to move your rankings in the right direction." },
  { q: 'How is your link building different?', a: 'We only reach out to real websites that are relevant to your industry and have a solid reputation. Every link is placed manually by a human, not a tool. We never buy links, use link farms, or send bulk outreach emails.' },
  { q: 'What does a monthly SEO plan include?', a: 'It includes technical monitoring, on-page improvements, new content (usually 2–4 articles per month), link building, a monthly rank report, and a call to review progress and plan next steps. The exact scope depends on your plan.' },
  { q: 'Can you handle SEO for multiple locations?', a: 'Yes. We create separate pages for each city or location, optimize each Google Business Profile individually, and build local citations for every area you want to rank in. We\'ve done this for businesses with a single location and for chains with 30+ locations.' },
  { q: 'Can you work on my existing website?', a: 'Absolutely. We start with an audit to understand what your site currently does well and what needs fixing — then we make improvements without touching anything that could break what\'s already working.' },
];

const CASE_STUDIES = [
  { client: 'Gulf Coast Auto Group', industry: 'Auto Dealer', location: 'Texas, USA', before: 'Page 4–5', after: '#1–3', metric: 'Target keyword rankings', revenue: '$2.4M', period: '5 months', color: '#10B981' },
  { client: 'SunState Dental Group', industry: 'Healthcare / Dental', location: 'Florida, USA', before: '820 visits/mo', after: '9,100 visits/mo', metric: 'Organic monthly visits', revenue: '+$890K', period: '7 months', color: '#3B82F6' },
  { client: 'LuxRoofing Contractors', industry: 'Home Services', location: 'Ohio, USA', before: '3 leads/mo', after: '41 leads/mo', metric: 'Organic inbound leads', revenue: '+$1.1M pipeline', period: '6 months', color: '#8B5CF6' },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function SEOPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: 'radial-gradient(ellipse 80% 50% at 50% 15%, rgba(16,185,129,0.11) 0%, rgba(59,130,246,0.06) 45%, transparent 75%)' }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            SEO was just Google. Now there's AIO & GEO — we rank you on all three.
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            You&apos;re losing customers<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              to competitors who rank.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Right now, someone is searching for exactly what you offer. The question is: are they finding you, or your competitor? We make sure it&apos;s you — on Google, in AI answers, and everywhere search is heading.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Show Me What I&apos;m Missing →
            </a>
            <a href="#what-is-seo" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              I want to understand SEO first ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { val: '3.2×', label: 'Avg Traffic Increase', color: AC },
              { val: '87%', label: 'Page 1 in 6 Months', color: '#3B82F6' },
              { val: '0', label: 'Manual Penalties Ever', color: '#10B981' },
              { val: '4.8★', label: 'Client Satisfaction', color: '#F59E0B' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-emerald-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AIO + GEO Ready
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-blue-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          No Shortcuts. Ever.
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          § 2  WHAT IS MODERN SEO (2026 context)
      ══════════════════════════════════════════ */}
      <section id="what-is-seo" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> The Reality of Search in 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-5 leading-tight">
                Most people can&apos;t find your business online. And they don&apos;t even try twice.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Google&apos;s behavior has fundamentally changed. Before anyone clicks a link, they see an AI-generated answer at the top of the page. Millions of people now use ChatGPT and Perplexity the same way they used to use Google. If your business isn&apos;t showing up in these new layers of search, you&apos;re invisible to a growing slice of your market.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The businesses that adapt now will own this search landscape for years. The ones that don&apos;t will keep wondering why their traffic is quietly shrinking. We work across all three layers — traditional SEO, AI Overviews, and AI tool citations — from one team, with one joined-up strategy.
              </p>
              <div className="flex flex-wrap gap-2">
                {['E-E-A-T Signals', 'Core Web Vitals', 'AI Overviews', 'GEO Citations', 'Entity Authority', 'Schema Markup'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/8 text-gray-400" style={{ background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Traditional Search (Blue Links)', pct: 58, color: AC, desc: 'Still the majority of clicks' },
                { label: 'Google AI Overviews (AIO)', pct: 31, color: '#6366F1', desc: 'Fastest growing — no-click answers' },
                { label: 'Generative AI Engines (GEO)', pct: 11, color: '#F59E0B', desc: 'ChatGPT, Perplexity, Gemini' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                    <span className="text-sm font-black font-poppins" style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-2">
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
              <p className="text-xs text-gray-700 px-1">* Estimated 2026 search query distribution by result type. Source: industry research composite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 3  SEO vs AIO vs GEO — 3-column
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> The Three Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              SEO vs AIO vs GEO — What&rsquo;s the Difference?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Rankston runs all three simultaneously so you dominate every layer of modern search.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-1" style={{ background: p.color }} />
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-2 py-1 rounded-md" style={{ color: p.color, background: `${p.color}15` }}>
                  {p.badge}
                </span>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-extrabold font-poppins text-white mb-4">{p.title}</h3>
                <ul className="space-y-2 mb-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/6">
                  <p className="text-xs text-gray-600 italic">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 4  ALL 8 SEO SERVICES CARDS
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Complete Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Every Type of SEO, Under One Roof
            </h2>
            <p className="text-gray-500 mt-2">Click any service to see full scope, pricing context, process, and real client results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEO_SUBS.map((s) => (
              <Link key={s.slug} href={`/seo-services/${s.slug}`}
                className="group rounded-2xl p-5 border border-white/6 hover:border-emerald-500/25 transition-all relative overflow-hidden block"
                style={{ background: 'rgba(17,24,39,0.85)' }}
              >
                <div className="absolute top-0 inset-x-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: AC }} />
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{s.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <span className="text-xs font-semibold" style={{ color: AC }}>Full details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 5  6-STEP PROCESS  (timeline)
      ══════════════════════════════════════════ */}
      <section id="seo-process" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              How Rankston Delivers SEO Results
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Here&rsquo;s exactly how we work — no surprises, no black boxes.</p>
          </div>
          <div className="relative">
            {/* Vertical line on desktop */}
            <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-white/6" />
            <div className="space-y-5">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.n} className="relative grid md:grid-cols-12 gap-4 group">
                  {/* Step number bubble */}
                  <div className="hidden md:flex md:col-span-1 items-start justify-center pt-1">
                    <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-lg font-black font-poppins border border-white/8 group-hover:border-opacity-50 transition-all"
                      style={{ background: 'rgba(17,24,39,0.97)', color: AC }}>
                      {step.n}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="md:col-span-11 rounded-2xl p-6 border border-white/6 group-hover:border-opacity-30 transition-all"
                    style={{ background: 'rgba(17,24,39,0.85)' }}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{step.week}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 6  TECHNICAL AUDIT CHECKLIST
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> SEO Audit Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              200+ SEO Factors We Check on Day 1
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">Our free audit covers every one of these. Most agencies don&rsquo;t even know half of them exist.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIT_CHECKLIST.map((cat) => (
              <div key={cat.category} className="rounded-2xl p-5 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cat.color }} />
                <h3 className="text-sm font-bold mb-4" style={{ color: cat.color }}>{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: cat.color, opacity: 0.7 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Get Your Free 200-Point Audit →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 7  INDUSTRIES WE SERVE
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              SEO That Understands Your Industry
            </h2>
            <p className="text-gray-500 mt-2">We&rsquo;ve built SEO strategies for 25+ industries. Same discipline. Different execution.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6 hover:border-white/12 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-2xl shrink-0">{ind.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{ind.name}</p>
                  <p className="text-xs text-gray-600 leading-tight mt-0.5">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 8  RESULTS TIMELINE (milestone bars)
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Expected Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              When Will You See Results?
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">SEO is a compounding investment. Here&rsquo;s what to expect month by month.</p>
          </div>
          <div className="space-y-5">
            {RESULTS_TIMELINE.map((item) => (
              <div key={item.month} className="grid sm:grid-cols-12 gap-4 items-center">
                {/* Label */}
                <div className="sm:col-span-2 text-right hidden sm:block">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.color }}>{item.month}</span>
                </div>
                {/* Bar + content */}
                <div className="sm:col-span-10">
                  <div className="rounded-2xl p-5 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="sm:hidden text-xs font-bold uppercase" style={{ color: item.color }}>{item.month}</span>
                        <span className="text-sm font-bold text-white">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: item.color }}>{item.progress}% Progress</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden mb-3">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${item.progress}%`, background: item.color }} />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 9  WHY RANKSTON (6 reasons)
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Why Rankston
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              What Makes Our SEO Different from Every Other Agency
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-white/6 hover:border-emerald-500/15 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 10A  INDUSTRIES WE SERVE
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Industries We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              SEO Strategies Built for Your Industry
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl">
              Every industry has different search behaviors, buyer journeys, and competitive dynamics. Click your industry for a strategy built specifically for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { slug: 'real-estate',       name: 'Real Estate',       icon: '🏠', desc: 'Rank for neighborhood searches & map pack' },
              { slug: 'dentists',          name: 'Dentists',          icon: '🦷', desc: 'More patients from Google, less ad spend' },
              { slug: 'lawyers',           name: 'Law Firms',         icon: '⚖️', desc: 'Rank for high-value legal keywords' },
              { slug: 'ecommerce',         name: 'eCommerce',         icon: '🛒', desc: 'Organic traffic that converts to sales' },
              { slug: 'restaurants',       name: 'Restaurants',       icon: '🍽️', desc: 'Fill tables with local Google searches' },
              { slug: 'healthcare',        name: 'Healthcare',        icon: '🏥', desc: 'More patients finding your practice' },
              { slug: 'roofing',           name: 'Roofing',           icon: '🏗️', desc: 'Dominate local roofing searches' },
              { slug: 'plumbers',          name: 'Plumbers',          icon: '🔧', desc: 'Rank for emergency plumbing searches' },
              { slug: 'contractors',       name: 'Contractors',       icon: '🔨', desc: 'Win more bids with organic visibility' },
              { slug: 'mortgage-brokers',  name: 'Mortgage Brokers',  icon: '🏦', desc: 'Capture high-intent refinance searches' },
              { slug: 'accountants',       name: 'Accountants',       icon: '📊', desc: 'Rank for tax and accounting searches' },
              { slug: 'auto-dealerships',  name: 'Auto Dealerships',  icon: '🚗', desc: 'Outrank competitors for car searches' },
            ].map((ind) => (
              <a
                key={ind.slug}
                href={`/seo-services/industry/${ind.slug}`}
                className="group rounded-2xl p-5 border border-white/6 hover:border-emerald-500/20 transition-all hover:shadow-lg hover:shadow-emerald-500/5"
                style={{ background: 'rgba(17,24,39,0.85)' }}
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{ind.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{ind.desc}</p>
                <span className="text-xs font-semibold" style={{ color: AC }}>View strategy →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 10  CASE STUDIES (3 clients)
      ══════════════════════════════════════════ */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Real Businesses. Documented Results.
            </h2>
            <p className="text-gray-500 mt-2">Not stock photos. Not made-up numbers. Real clients, real campaigns.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.industry}</span>
                  <h3 className="text-base font-bold text-white mt-1">{cs.client}</h3>
                  <p className="text-xs text-gray-600">{cs.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center">
                    <p className="text-xs text-red-400 mb-1">Before</p>
                    <p className="text-lg font-extrabold text-white font-poppins">{cs.before}</p>
                  </div>
                  <div className="p-3 rounded-xl border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}>
                    <p className="text-xs mb-1" style={{ color: cs.color }}>After</p>
                    <p className="text-lg font-extrabold gradient-text font-poppins">{cs.after}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{cs.metric}</p>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs text-gray-600">{cs.period}</span>
                  <span className="text-sm font-extrabold font-poppins" style={{ color: cs.color }}>{cs.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 11  TRUST BAR — logo / tool stack
      ══════════════════════════════════════════ */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-6">SEO Tools & Platforms We Use</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Google Analytics 4', 'Majestic', 'BrightLocal', 'Surfer SEO', 'Clearscope', 'Schema Pro', 'Rank Math', 'Search Atlas'].map((tool) => (
              <span key={tool} className="text-xs px-3.5 py-2 rounded-full border border-white/8 text-gray-500 hover:text-gray-300 hover:border-white/15 transition-all" style={{ background: 'rgba(255,255,255,0.02)' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          § 12  FAQs  (not counted per user)
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> FAQs
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">SEO Questions, Answered Honestly</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Final CTA before form
      ══════════════════════════════════════════ */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${AC}15, transparent)` }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Rank on Google, AI & Everywhere?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">Free 200-point SEO audit. 24-hour delivery. No commitment required.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Get My Free SEO Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
