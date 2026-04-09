'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import GoogleReviews from './GoogleReviews';
import LeadForm from './LeadForm';

const TYPE_BADGE = {
  'long-tail': { label: 'Service Guide', bg: '#10B981' },
  problem:     { label: 'Solution Guide', bg: '#3B82F6' },
  comparison:  { label: 'Comparison',    bg: '#8B5CF6' },
};

function CompareTable({ compareA, compareB, verdict, AC }) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold font-poppins text-white mb-8 text-center">
          {compareA.label} vs {compareB.label} — Side by Side
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[compareA, compareB].map((side) => (
            <div key={side.label} className="rounded-2xl p-6 border border-white/8"
              style={{ background: 'rgba(17,24,39,0.9)' }}>
              <h3 className="text-lg font-bold text-white mb-4">{side.label}</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">✓ Pros</p>
                  <ul className="space-y-1.5">
                    {side.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-emerald-500 mt-0.5">+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">✗ Cons</p>
                  <ul className="space-y-1.5">
                    {side.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-red-500 mt-0.5">−</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {verdict && (
          <div className="rounded-2xl p-6 border text-sm text-gray-300 leading-relaxed"
            style={{ background: `${AC}08`, borderColor: `${AC}30` }}>
            <span className="font-bold text-white">Our Verdict: </span>{verdict}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ResourcePage({ page, related }) {
  const [openFaq, setOpenFaq] = useState(null);
  const AC = page.accentColor || '#10B981';
  const badge = TYPE_BADGE[page.type] || TYPE_BADGE['long-tail'];
  const isComparison = page.type === 'comparison';
  const variantSeed = Math.abs(page.slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 20;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden"
        style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${AC}10 0%, transparent 70%)` }} />
        <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: `${badge.bg}18`, color: badge.bg, border: `1px solid ${badge.bg}35` }}>
            {badge.label}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-6">
            {page.h1}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {page.intro}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-7 py-3.5 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 28px ${AC}30` }}>
              Get a Free Consultation →
            </a>
            <a href="#faqs" className="px-7 py-3.5 border border-white/15 text-gray-400 hover:text-white rounded-xl text-sm transition-all">
              Read FAQs ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE (if comparison page) ─────────────── */}
      {isComparison && page.compareA && (
        <CompareTable compareA={page.compareA} compareB={page.compareB} verdict={page.verdict} AC={AC} />
      )}

      {/* ── KEY POINTS ────────────────────────────────────────── */}
      {!isComparison && (
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold font-poppins text-white mb-8">
              {page.type === 'problem' ? 'The Root Causes — and Solutions' : 'What You Need to Know'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'The Right Strategy Matters', body: 'Most businesses fail at digital marketing not because of effort, but because of strategy. The right approach for your industry, market, and budget changes everything.' },
                { icon: '📊', title: 'Measure What Matters', body: 'Rankings and traffic are intermediate metrics. Revenue, leads, and cost-per-acquisition are what determine whether your marketing is working. We report on both.' },
                { icon: '⏱️', title: 'Timelines Are Realistic', body: 'SEO takes months. Paid ads work fast. Content compounds over years. Understanding these timelines prevents unrealistic expectations and keeps strategy on track.' },
                { icon: '🔗', title: 'Everything Is Connected', body: 'Your website, Google profile, social presence, and paid campaigns all influence each other. The brands winning online in the USA treat their entire digital presence as one unified system.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 rounded-2xl p-6 border border-white/6"
                  style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1.5">{f.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GOOGLE REVIEWS ──────────────────────────────────────── */}
      <GoogleReviews variant={variantSeed} accentColor={AC} count={6} />

      {/* ── FAQS ────────────────────────────────────────────────── */}
      {page.faqs?.length > 0 && (
        <section id="faqs" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold font-poppins text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/6 overflow-hidden"
                  style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white text-left transition-colors">
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

      {/* ── RELATED RESOURCES ───────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-extrabold font-poppins text-white mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/resources/${r.slug}`}
                  className="rounded-2xl p-5 border border-white/6 hover:border-white/15 transition-all group"
                  style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <span className="inline-block text-xs font-bold uppercase tracking-wide mb-2"
                    style={{ color: r.accentColor }}>
                    {TYPE_BADGE[r.type]?.label}
                  </span>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors leading-snug">
                    {r.title} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ─────────────────────────────────── */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-extrabold font-poppins text-white mb-4">Explore Our Services</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/seo-services',           label: '🔍 SEO Services' },
              { href: '/ppc-advertising',         label: '💰 PPC & Google Ads' },
              { href: '/web-development',         label: '💻 Web Development' },
              { href: '/social-media-marketing',  label: '📱 Social Media' },
              { href: '/content-marketing',       label: '✍️ Content Marketing' },
              { href: '/gmb-optimization',        label: '📍 Google Business Profile' },
              { href: '/ai-automation',           label: '🤖 AI Automation' },
              { href: '/chatbot-development',     label: '💬 Chatbot Development' },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
            Ready to Implement This for Your Business?
          </h2>
          <p className="text-gray-500 text-sm">
            Free strategy call — we'll audit your current setup and show you the exact steps to dominate your market.
          </p>
        </div>
        <LeadForm />
      </section>
    </>
  );
}
