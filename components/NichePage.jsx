'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import GoogleReviews from './GoogleReviews';
import LeadForm from './LeadForm';
import { NICHES } from '../data/niche-content-generator.js';

function Stars({ n = 5 }) {
  return <span className="text-yellow-400 text-sm">{'★'.repeat(n)}</span>;
}

function Ck({ color }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill={color || '#10B981'}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

const RELATED_NICHES_BY_INDUSTRY = {
  dentists: ['healthcare', 'accountants'],
  lawyers: ['accountants', 'startups'],
  'real-estate': ['contractors', 'accountants'],
  restaurants: ['salons', 'gyms'],
  contractors: ['real-estate', 'auto-repair'],
  ecommerce: ['startups', 'accountants'],
  startups: ['ecommerce', 'accountants'],
  gyms: ['salons', 'restaurants'],
  salons: ['gyms', 'restaurants'],
  'auto-repair': ['contractors', 'gyms'],
  accountants: ['lawyers', 'startups'],
  healthcare: ['dentists', 'accountants'],
};

export default function NichePage({ svc, niche, content }) {
  const [openFaq, setOpenFaq] = useState(null);
  const AC = svc.accentColor || '#10B981';

  const { painPoints = [], caseStudies = [], faqs = [] } = content || {};

  /* Related services for internal linking */
  const SERVICES_SAMPLE = [
    { slug: 'seo-services', shortTitle: 'SEO' },
    { slug: 'gmb-optimization', shortTitle: 'GMB' },
    { slug: 'ppc-advertising', shortTitle: 'PPC' },
    { slug: 'web-development', shortTitle: 'Web Dev' },
    { slug: 'social-media-marketing', shortTitle: 'SMM' },
    { slug: 'content-marketing', shortTitle: 'Content' },
  ].filter(s => s.slug !== svc.slug);

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${AC}12 0%, transparent 70%)` }} />
        <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <span className="text-xl">{niche.icon}</span>
            {svc.shortTitle} for {niche.label} — Rankston USA
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-poppins text-white leading-tight mb-6">
            {svc.title} for<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {niche.label}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Generic marketing doesn't work for {niche.label.toLowerCase()}. We build campaigns specifically around how your customers search, decide, and buy — with results measured in revenue, not impressions.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-14">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get a Free {svc.shortTitle} Audit →
            </a>
            <a href="#results" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See Client Results ↓
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42 }}
            className="grid grid-cols-3 gap-4 w-full max-w-lg">
            {[
              { val: '500+', label: `${niche.label} Served` },
              { val: '4.9★', label: 'Average Rating' },
              { val: '2.8x', label: 'Avg Revenue Growth' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: AC }}>{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> The Real Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Why {niche.label} Struggle with Marketing
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Most {niche.label.toLowerCase()} have great services but can't be found online. Here's the real gap.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((pt, i) => (
              <div key={i} className="flex gap-4 rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm font-bold" style={{ background: `${AC}20`, color: AC }}>
                  {i + 1}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE SOLVE IT ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              {svc.title} Built for {niche.label}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'Industry-Specific Keywords', desc: `We research the exact search terms ${niche.label.toLowerCase()} customers use — not generic marketing keywords that waste budget.` },
              { icon: '📍', title: 'Local + National Targeting', desc: `We target your service area precisely and—where relevant—build national authority so you're visible wherever your customers search.` },
              { icon: '⭐', title: 'Trust-First Content', desc: `${niche.label} success depends on trust. Every page we create builds your authority, showcases your results, and answers customer concerns before they arise.` },
              { icon: '📊', title: 'Revenue-Based Reporting', desc: `We don't report on rankings and traffic alone. Every monthly report connects our work directly to leads, calls, appointments, and revenue.` },
              { icon: '🔄', title: 'Continuous Optimization', desc: `Markets change. Competitor strategies shift. We review and refine your campaigns every 30 days so performance improves month over month.` },
              { icon: '🤝', title: 'Dedicated Account Manager', desc: `You get a single point of contact who understands your industry and your business — not a rotating team reading from a script.` },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────── */}
      {caseStudies.length > 0 && (
        <section id="results" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> Real Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                {niche.label} We've Grown
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {caseStudies.map((cs, i) => (
                <div key={i} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, ${AC}, #3B82F6)` }} />
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AC }}>{cs.location}</p>
                  <h3 className="text-base font-bold text-white mb-4">{cs.client}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center">
                      <p className="text-xs text-red-400 mb-1">Before</p>
                      <p className="text-sm font-bold text-white">{cs.before}</p>
                    </div>
                    <div className="p-3 rounded-xl border text-center" style={{ background: `${AC}08`, borderColor: `${AC}25` }}>
                      <p className="text-xs mb-1" style={{ color: AC }}>After</p>
                      <p className="text-sm font-bold text-white">{cs.after}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{cs.metric} · {cs.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GOOGLE REVIEWS ──────────────────────────────────────── */}
      <GoogleReviews variant={NICHES.findIndex(n => n.slug === niche.slug) + 10} accentColor={AC} count={6} />

      {/* ── FAQS ────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold font-poppins text-white">
                {svc.title} for {niche.label} — FAQs
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
      )}

      {/* ── INTERNAL LINKS: Other services for this niche ────── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold font-poppins text-white">
              More Services for {niche.label}
            </h2>
            <p className="text-gray-500 mt-1 text-sm">We offer a full suite of digital marketing services specialized for your industry.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {SERVICES_SAMPLE.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/${s.slug}/for/${niche.slug}`}
                className="flex items-center gap-3 rounded-xl p-4 border border-white/6 hover:border-white/15 transition-all group"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {s.shortTitle} for {niche.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED INDUSTRIES ─────────────────────────────── */}
      {(() => {
        const relatedSlugs = RELATED_NICHES_BY_INDUSTRY[niche.slug] || [];
        const relatedNiches = relatedSlugs.map(s => NICHES.find(n => n.slug === s)).filter(Boolean);
        if (relatedNiches.length === 0) return null;
        return (
          <section className="py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="text-lg font-extrabold font-poppins text-white mb-4">
                {svc.title} for Related Industries
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedNiches.map((n) => (
                  <Link key={n.slug}
                    href={`/${svc.slug}/for/${n.slug}`}
                    className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                    style={{ background: 'rgba(17,24,39,0.85)' }}>
                    {n.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── FINAL CTA / LEAD FORM ────────────────────────────── */}
      <section id="contact" className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
            Ready to Grow Your {niche.label} Business?
          </h2>
          <p className="text-gray-500 text-sm">
            Free audit — we'll show you exactly what's missing and what it will take to dominate your market.
          </p>
        </div>
        <LeadForm />
      </section>
    </>
  );
}
