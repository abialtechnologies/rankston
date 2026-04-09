'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#06B6D4';

const CONTENT_TYPES = [
  { icon: '📝', title: 'SEO Blog Articles', desc: 'Well-researched, expert articles of 1,500–3,000 words, optimized to rank on Google and be selected by AI Overviews.', platform: 'Website / Google' },
  { icon: '📧', title: 'Email Sequences', desc: 'Triggered email flows for welcome, nurturing, abandoned carts, and re-engagement that gradually convert subscribers into paying customers.', platform: 'Email Marketing' },
  { icon: '📖', title: 'Long-Form Guides', desc: 'Comprehensive pillar pages of 3,000–8,000 words that cover a topic thoroughly, rank for many keywords, and attract natural backlinks.', platform: 'Website' },
  { icon: '📣', title: 'LinkedIn Articles', desc: 'Thought leadership posts and industry insight articles that build credibility for founders and executives in their space.', platform: 'LinkedIn' },
  { icon: '📰', title: 'Press Releases', desc: 'Newsworthy updates written and distributed to AP, PR Newswire, and over 200 regional outlets for legitimate brand coverage.', platform: 'PR Distribution' },
  { icon: '📋', title: 'Case Studies', desc: 'Structured success stories showing what your client had before, what changed, and what results they got. Includes a clear CTA.', platform: 'Website / Sales' },
];

const CONTENT_SEO_CONNECTION = [
  { n: '1', title: 'Topical Authority Comes From Covering Topics Deeply', desc: 'Google trusts sites that go deep on a subject — not those that publish one short article and move on. We build topic clusters: one main guide plus 8–12 supporting articles per subject.' },
  { n: '2', title: 'Good Content Earns Links Without Outreach', desc: 'When your content is genuinely useful and original, other websites link to it naturally. Over time, this builds your domain\'s authority without any link-building campaigns.' },
  { n: '3', title: 'Structured Content Gets Picked Up by AI Overviews', desc: 'Google\'s AI Overview pulls answers from well-structured pages with clear definitions, FAQ sections, and concise summaries. We write for this intentionally.' },
  { n: '4', title: 'One Long Article Can Rank for Hundreds of Keywords', desc: 'A thorough 3,000-word guide can show up for 50 to 200 different search queries at once. A short article usually only targets one and still loses.' },
];

const PROCESS = [
  { n: '01', title: 'Content Audit & Keyword Mapping', week: 'Week 1', desc: 'We review what you already have, identify which keywords you\'re missing, and map a 12-month content plan to the different stages of your customer journey.' },
  { n: '02', title: 'Topic Cluster Architecture', week: 'Week 1–2', desc: 'Before writing anything, we design the full cluster structure — which pages are pillars, which support them, and how they link to each other.' },
  { n: '03', title: 'Research & Outline', week: 'Per piece', desc: 'We study the SERPs, look at what competitors are missing, and gather expert sources for every article. You approve the outline before we start writing.' },
  { n: '04', title: 'Expert Drafting', week: 'Per piece', desc: 'Written by someone who knows your industry — not a generalist. Includes author credentials, real-world experience, and cited data where relevant.' },
  { n: '05', title: 'SEO & AIO Optimization', week: 'Per piece', desc: 'We add the right keywords, write proper meta tags, structure FAQs for featured snippets, add schema markup, and link internally to related pages.' },
  { n: '06', title: 'Publish, Track & Scale', week: 'Ongoing', desc: 'Article is published and submitted for indexing. Rank tracking begins in week 2. Monthly report shows you exactly how each piece is performing.' },
];

const PERFORMANCE = [
  { icon: '📈', metric: 'Avg Traffic Growth', val: '+340%', period: '12-month avg across clients', color: AC },
  { icon: '🎯', metric: 'Featured Snippet Rate', val: '28%', period: 'Of published articles win snippets', color: '#10B981' },
  { icon: '🔗', metric: 'Natural Links Earned', val: '12/mo', period: 'Avg from high-quality content', color: '#8B5CF6' },
  { icon: '⏱️', metric: 'Avg Time on Page', val: '4:20', period: 'vs 1:45 industry average', color: '#F59E0B' },
];

const CASE_STUDIES = [
  { client: 'FinSight Capital', industry: 'Financial Services', before: '800 organic visits/mo', after: '24,000 organic visits/mo', metric: 'After 18 months of content marketing', result: '340 qualified leads from organic content only', period: '18 months', color: AC },
  { client: 'ProSeal Contractors', industry: 'Construction', before: '0 blog articles', after: '48 published articles', metric: 'Content cluster for roofing services', result: 'Page 1 rankings for 87 local service keywords', period: '12 months', color: '#10B981' },
  { client: 'MedPrep Academy', industry: 'Education', before: '0 email subscribers', after: '14,800 subscribers', metric: 'Email + content marketing integrated', result: '$220K course revenue from email alone', period: '8 months', color: '#8B5CF6' },
];

const WHY = [
  { icon: '✍️', title: 'Writers Who Know Your Industry', desc: 'Every article is written by someone with real knowledge of your field. A legal article is written by a legal writer. A tech article by a tech writer. You can tell the difference.' },
  { icon: '🔍', title: 'Optimized for Google and AI Overviews', desc: 'We structure every piece so it can rank in Google search results AND appear in AI Overviews. Both require very different formatting — we do both.' },
  { icon: '📊', title: 'Cluster Strategy, Not Random Posts', desc: 'Every article we publish fits into a plan. Nothing is published in isolation — each piece builds your authority on a specific topic your customers are searching for.' },
  { icon: '📅', title: 'Full 12-Month Calendar Upfront', desc: 'On day one you get a complete content plan for the next 12 months — topics, formats, target keywords, and estimated publish dates.' },
  { icon: '🔗', title: 'Internal Linking Maintained', desc: 'We don\'t just publish and forget. Every new article is linked from relevant existing content, and older articles are updated to link to new ones as they go live.' },
  { icon: '📈', title: 'Monthly Performance Reports', desc: 'We track every published article. Each month you see which keywords moved, how much traffic each piece is bringing in, and which articles are generating leads.' },
];

const FAQS = [
  { q: 'How long before content marketing shows results?', a: 'New content usually starts ranking within 60–90 days. You\'ll see meaningful organic traffic growth from months 4–6. The good news is it compounds — each new article ranks faster as your site\'s authority grows.' },
  { q: 'How many articles per month do you recommend?', a: 'We suggest a minimum of 4 articles per month for steady results in 6–12 months. More aggressive campaigns of 8–12 articles per month can see traffic turning around in months 3–4. Quality always comes first though.' },
  { q: 'Do you write for our specific industry?', a: 'Yes. We match your content to a writer with real experience in your field. We don\'t put a healthcare article in the hands of a marketing generalist.' },
  { q: 'Is content marketing the same as SEO?', a: 'They\'re closely connected but different. Content marketing creates the pages that have something worth ranking. SEO makes sure those pages are technically set up to rank. We combine both in every piece we write.' },
  { q: 'Can you write in our brand voice?', a: 'Yes. We run a brand voice session before we start writing. You review a test article and give us feedback. Once the voice is right, we write everything to match it.' },
];

export default function ContentMarketingPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(6,182,212,0.10) 0%, rgba(59,130,246,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Content Marketing — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Your content isn&apos;t getting found.<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Here&apos;s why — and how to fix it.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Writing content is just the start. The hard part is making it rank, getting it picked up by AI tools, and converting readers into customers. We do all three — with expert articles that compound in value month after month.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get My Free Content Strategy →
            </a>
            <a href="#content-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See what we write ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {PERFORMANCE.map((p) => (
              <div key={p.metric} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-xl font-extrabold font-poppins mb-1" style={{ color: p.color }}>{p.val}</div>
                <div className="text-xs text-gray-500">{p.metric}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-cyan-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          +340% Avg Traffic Growth
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-blue-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          AIO + GEO Optimized
        </motion.div>
      </section>


      {/* § 2 CONTENT TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Content Types That Drive Real Results</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-start justify-between mb-2"><span className="text-3xl">{t.icon}</span><span className="text-xs px-2 py-0.5 rounded border border-white/8 text-gray-600">{t.platform}</span></div>
                <h3 className="text-sm font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Our Content Production System</h2></div>
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

      {/* § 4 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Content Campaigns With Measurable ROI</h2></div>
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

      {/* § 5 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston Content Outperforms the Competition</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 6 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Content Marketing FAQs</h2></div>
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
      <IndustriesSection serviceSlug="content-marketing" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready for Content That Actually Ranks?</h2>
            <p className="text-gray-500 text-sm mb-6">Free content audit — we&apos;ll show your current content gaps and keyword opportunities in 24 hours.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Get Free Content Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
