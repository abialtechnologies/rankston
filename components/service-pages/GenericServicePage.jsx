'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export default function GenericServicePage({ svc, detail }) {
  const [openFaq, setOpenFaq] = useState(null);
  const ac = svc.accentColor || '#10B981';

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, ${ac}18 0%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: ac, borderColor: `${ac}40`, background: `${ac}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: ac }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            {detail.badge} — Rankston Worldwide
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            {detail.heroTitle.split('.')[0]}.<br />
            <span style={{ background: `linear-gradient(135deg, ${ac}, #3B82F6)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {detail.heroTitle.split('.').slice(1).join('.').trim()}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            {detail.heroSubtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${ac}, #3B82F6)`, boxShadow: `0 8px 32px ${ac}35` }}>
              Show Me What&apos;s Possible →
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              I want to understand the process first ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {detail.stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: ac }}>{s.value}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-gray-900/80 backdrop-blur-sm text-xs font-medium shadow-lg" style={{ zIndex: 10, borderColor: `${ac}25`, color: ac }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ac }} />
          Results-Driven. No Fluff.
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-blue-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Free Audit Included
        </motion.div>
      </section>


      {/* ═══ PULL QUOTE ═══ */}
      <section className="py-12" style={{ background: 'rgba(17,24,39,0.6)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold font-poppins text-white leading-snug">
            &ldquo;We don&rsquo;t sell services. We sell outcomes — and every client relationship starts with a free audit to show you exactly what&rsquo;s possible.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gray-600">— Rankston, {svc.title} Team</p>
        </div>
      </section>

      {/* ═══ SUB-SERVICES ═══ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ac }}>
              <span className="w-4 h-px" style={{ background: ac }} /> What&rsquo;s Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Everything You Get with {svc.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.subServices.map((sub, i) => (
              <div key={i} className="group rounded-2xl p-6 border border-white/6 hover:border-opacity-40 transition-all relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: ac }} />
                <span className="text-3xl mb-4 block">{sub.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{sub.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="process" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ac }}>
              <span className="w-4 h-px" style={{ background: ac }} /> Our Process
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">How We Deliver Results</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {detail.process.map((step) => (
              <div key={step.step} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-3 right-3 text-5xl font-black opacity-[0.04] text-white font-poppins leading-none">{step.step}</div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold mb-4" style={{ background: `${ac}20`, color: ac }}>{step.step}</div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: `${ac}a0` }}>{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE + BEFORE/AFTER ═══ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {/* Timeline */}
          <div className="rounded-2xl p-6 border" style={{ background: 'rgba(17,24,39,0.9)', borderColor: `${ac}20` }}>
            <h3 className="text-base font-bold text-white font-poppins mb-4">Timeline to Results</h3>
            <div className="space-y-3">
              {[
                { label: 'First Deliverable', val: detail.timeline.first },
                { label: 'Visible Results', val: detail.timeline.results },
                { label: 'Full Performance', val: detail.timeline.dominant },
              ].map((t) => (
                <div key={t.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-gray-500">{t.label}</span>
                  <span className="text-xs font-bold" style={{ color: ac }}>{t.val}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-700 mt-4 leading-relaxed">{detail.timeline.note}</p>
          </div>

          {/* Before/After */}
          <div className="rounded-2xl p-6 border border-white/8" style={{ background: 'rgba(17,24,39,0.9)' }}>
            <h3 className="text-base font-bold text-white font-poppins mb-4">Average Client Result</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15 text-center">
                <p className="text-xs text-red-400 mb-1">Before</p>
                <p className="text-xl font-extrabold text-white font-poppins">{svc.results.before}</p>
                <p className="text-xs text-gray-600 mt-0.5">{svc.results.metric}</p>
              </div>
              <div className="p-4 rounded-xl border text-center" style={{ background: `${ac}08`, borderColor: `${ac}25` }}>
                <p className="text-xs mb-1" style={{ color: ac }}>After ({svc.results.period})</p>
                <p className="text-xl font-extrabold gradient-text font-poppins">{svc.results.after}</p>
                <p className="text-xs text-gray-600 mt-0.5">{svc.results.metric}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ac }}>
              <span className="w-4 h-px" style={{ background: ac }} /> Why Rankston
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">Rankston vs. Other Agencies</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/8" style={{ background: 'rgba(17,24,39,0.9)' }}>
            <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest border-b border-white/8">
              <div className="p-4 text-gray-600">Feature</div>
              <div className="p-4 text-center" style={{ color: ac, background: `${ac}08` }}>Rankston</div>
              <div className="p-4 text-center text-gray-600">Typical Agency</div>
            </div>
            {detail.comparison.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 1 ? 'bg-white/[0.015]' : ''}`}>
                <div className="p-4 text-sm text-gray-400">{row.feature}</div>
                <div className="p-4 flex items-center justify-center" style={{ background: `${ac}05` }}>
                  {row.us === true ? <CheckCircleIcon className="w-5 h-5" style={{ color: ac }} /> : <span className="text-sm font-medium" style={{ color: ac }}>{row.us}</span>}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.them === false ? (
                    <svg className="w-5 h-5 text-red-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : row.them === true ? (
                    <CheckCircleIcon className="w-5 h-5 text-gray-600" />
                  ) : (
                    <span className="text-xs text-gray-600 text-center">{row.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      {detail.testimonials?.length > 0 && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold font-poppins text-white">Real Businesses. Real Results.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: t.color }}>{t.avatar}</div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-gray-600">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQs ═══ */}
      {detail.faqs?.length > 0 && (
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold font-poppins text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {detail.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-5 pt-1"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${ac}12, rgba(59,130,246,0.08))`, border: `1px solid ${ac}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${ac}15, transparent)` }} />
            <h2 className="text-xl sm:text-2xl font-extrabold font-poppins text-white mb-2 relative">Ready to See What&apos;s Actually Possible?</h2>
            <p className="text-gray-500 text-sm mb-6 relative">You don&apos;t need to commit to anything. Just talk to us once &mdash; we&apos;ll show you exactly where the opportunity is.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity relative" style={{ background: `linear-gradient(135deg, ${ac}, #3B82F6)` }}>
              Talk to Us Once →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
