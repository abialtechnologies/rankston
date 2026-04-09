'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#8B5CF6';

const DESIGN_CATS = [
  { icon: '✨', title: 'Logo & Brand Identity', desc: 'Logo, color palette, typography, and a full brand style guide — built to work consistently across print, social, and digital.', tags: ['AI', 'Figma', 'Brand Guide'] },
  { icon: '📱', title: 'Social Media Graphics', desc: 'Post templates, carousels, Reel covers, story layouts, and profile branding. Consistent look across every platform you use.', tags: ['Instagram', 'LinkedIn', 'TikTok'] },
  { icon: '🖥️', title: 'UI/UX Design', desc: 'Wireframes and high-fidelity screen designs for websites and apps. Built in Figma so your developers can hand it straight off to production.', tags: ['Figma', 'Wireframes', 'Prototypes'] },
  { icon: '🖨️', title: 'Print & Packaging', desc: 'Business cards, brochures, packaging, banners, and trade show materials — all delivered print-ready at the correct colour profile and resolution.', tags: ['CMYK', 'Print-Ready', 'Packaging'] },
  { icon: '📣', title: 'Ad Creative & Banners', desc: 'Ad visuals for Google Display, Meta, LinkedIn, and other platforms. Typically delivered as sets of A/B variants so you can test what performs best.', tags: ['Web Banners', 'Ad Sets', 'A/B Ready'] },
  { icon: '📄', title: 'Pitch Decks & Reports', desc: 'Investor decks, company profiles, and annual reports designed to be clear, well-structured, and visually impressive.', tags: ['PowerPoint', 'Canva', 'PDF'] },
];

const TOOLS = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'After Effects', 'Canva Pro', 'Procreate', 'Blender (3D)'];

const PROCESS = [
  { n: '01', title: 'Creative Brief', week: 'Day 1', desc: 'We ask you about your brand colours, fonts you like, the audience you\'re talking to, and what the design needs to do. Everything is written down before we start.' },
  { n: '02', title: 'Mood Board & Direction', week: 'Day 2–3', desc: 'We present 3 different visual directions as mood boards. You pick the one that feels right, and we develop it into a full design concept.' },
  { n: '03', title: 'Initial Concepts', week: 'Day 4–7', desc: 'We deliver 2–3 initial concepts shown in realistic mockups — your logo on a shop sign, your packaging on a shelf, your ad on a phone screen. You see the real picture.' },
  { n: '04', title: 'Refinement Rounds', week: 'Day 7–12', desc: 'You give us your feedback and we make the changes. You get 2 dedicated rounds of revisions included within the agreed scope.' },
  { n: '05', title: 'Final Delivery', week: 'Day 12–14', desc: 'All files delivered in every format you need — AI, SVG, transparent PNG, PDF, EPS, and JPEG. Brand identity projects also include a PDF brand guide.' },
];

const CASE_STUDIES = [
  { client: 'Zara Home (Concept Rebrand)', industry: 'Retail / Lifestyle', before: 'Outdated wordmark, no system', after: 'Full visual identity system', metric: 'Rebrand including 120+ assets', result: 'Used across 12 country websites', period: '4 weeks', color: AC },
  { client: 'NovaTech Startup', industry: 'SaaS / Technology', before: 'No brand — generic template', after: '40-page brand style guide', metric: 'Complete brand identity from zero', result: 'Raised $1.2M seed with new brand deck', period: '3 weeks', color: '#EC4899' },
  { client: 'GrainRoute Coffee Co.', industry: 'F&B / Packaging', before: 'Plain white packaging', after: 'Award-nominated packaging design', metric: 'Full product packaging suite', result: '+210% retail shelf conversion', period: '5 weeks', color: '#F59E0B' },
];

const WHY = [
  { icon: '🎨', title: 'Everything Is Custom', desc: 'We start from scratch for every client. Nothing is reused from other projects, and we don\'t use stock templates or Canva shortcuts for client work.' },
  { icon: '🌍', title: 'Shown in Real-World Context', desc: 'Every concept is mocked up in a realistic setting — your logo on a wall, your packaging on a shelf, your ad on a phone. You see exactly what it\'ll look like.' },
  { icon: '♾️', title: '2 Revision Rounds Included', desc: 'You get two full rounds of revisions at no extra cost. Give us your consolidated feedback and we implement it within 24 hours.' },
  { icon: '📦', title: 'Files Ready for Print Immediately', desc: 'All files are delivered in press-ready formats — correct colour profile, resolution, and bleed. No extra prep needed before sending to a printer.' },
  { icon: '⚡', title: 'Delivered in 14 Business Days', desc: 'Most projects are complete within 14 business days. If you\'re under time pressure, ask about our 7-day rush option.' },
  { icon: '📁', title: 'You Get Every Source File', desc: 'You receive the original working files — AI, PSD, or Figma. No licensing fees. No monthly subscription. Everything is yours to keep and use however you need.' },
];

const FAQS = [
  { q: 'How many revision rounds are included?', a: 'Every project includes 2 dedicated revision rounds. We apply all your feedback from each round before moving to the next. If you need more rounds, we can add them for a flat fee.' },
  { q: 'What files will I receive?', a: 'You\'ll get the original source files (AI, PSD, or Figma) plus export-ready files for print and digital use — PDF, SVG, PNG, EPS, and JPEG. Logos come in all standard formats.' },
  { q: 'How long does graphic design take?', a: 'A full brand identity with logo and style guide takes 3–4 weeks. Social media template sets take 1–2 weeks. Individual pieces like a single ad creative take 2–3 business days.' },
  { q: 'Can you match our existing brand style?', a: 'Yes. If you have brand guidelines, we design within them. If you have a rough visual direction but nothing documented, we extract your style first and write it down before designing.' },
  { q: 'Do you do animated graphics?', a: 'Yes. Animated GIFs, motion graphics, and animated social post templates are available as an add-on or within our premium packages.' },
];

const INDUSTRIES = [
  { icon: '🏢', name: 'Corporate / B2B' }, { icon: '🛒', name: 'eCommerce' },
  { icon: '🍽️', name: 'Food & Beverage' }, { icon: '💊', name: 'Healthcare' },
  { icon: '🎓', name: 'Education' }, { icon: '🚀', name: 'Startups / Tech' },
  { icon: '👗', name: 'Fashion' }, { icon: '🏡', name: 'Real Estate' },
];

export default function GraphicDesignPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.28 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(139,92,246,0.10) 0%, rgba(236,72,153,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Graphic Design — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Bad design is quietly<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #EC4899 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              costing you customers.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            People judge your business in 0.05 seconds based on how it looks. If your branding looks cheap or inconsistent, they assume your service is too. We create designs that build instant trust, tell your story visually, and make your brand unforgettable.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EC4899)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get a Free Brand Review →
            </a>
            <a href="#design-services" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See our design work ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="flex flex-wrap justify-center gap-2">
            {TOOLS.map((t) => <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-500">{t}</span>)}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Delivered in 14 Business Days
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-pink-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          You Own Every Source File
        </motion.div>
      </section>


      {/* § 2 WHAT WE DESIGN */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Design Categories We Excel In</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DESIGN_CATS.map((c) => (
              <div key={c.title} className="rounded-2xl p-5 border border-white/6 hover:border-purple-500/20 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1">{c.tags.map((tag) => <span key={tag} className="text-xs px-2 py-0.5 rounded border border-white/8 text-gray-600">{tag}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">From Brief to Beautiful in 14 Days</h2></div>
          <div className="space-y-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-center gap-4 mb-2"><span className="text-xl font-black font-poppins" style={{ color: AC }}>{step.n}</span><h3 className="text-sm font-bold text-white">{step.title}</h3><span className="ml-auto text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{step.week}</span></div>
                <p className="text-sm text-gray-500 leading-relaxed pl-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8"><h2 className="text-3xl font-extrabold font-poppins text-white">Designed for Your Industry</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => <div key={ind.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><span className="text-xl">{ind.icon}</span><span className="text-sm text-gray-300 font-medium">{ind.name}</span></div>)}
          </div>
        </div>
      </section>

      {/* § 5 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Designs That Delivered Results</h2></div>
          <div className="grid lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.industry}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-4">{cs.client}</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center"><p className="text-xs text-red-400 mb-1">Before</p><p className="text-xs font-bold text-white">{cs.before}</p></div>
                  <div className="p-3 rounded-xl border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}><p className="text-xs mb-1" style={{ color: cs.color }}>After</p><p className="text-xs font-bold text-white">{cs.after}</p></div>
                </div>
                <p className="text-xs text-gray-600 mb-1">{cs.metric}</p>
                <p className="text-sm font-bold" style={{ color: cs.color }}>{cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 6 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston Design Stands Apart</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 7 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Design Questions, Answered</h2></div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5 pt-1"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <IndustriesSection serviceSlug="graphic-designing" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(236,72,153,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready to Make Your Brand Unforgettable?</h2>
            <p className="text-gray-500 text-sm mb-6">Free design consultation. We&apos;ll show you exactly what your brand is missing.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EC4899)` }}>
              Get Free Design Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
