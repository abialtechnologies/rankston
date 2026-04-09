'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowTrendingUpIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import testimonials from '../data/testimonials.json';

/* Aggregate stats */
const stats = [
  { value: '+312%', label: 'Avg. Traffic Growth', color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
  { value: '+285%', label: 'Avg. Lead Increase',  color: '#3B82F6', bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)' },
  { value: '-68%',  label: 'Cost Per Lead Drop',   color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
  { value: '94%',   label: 'Client Retention',     color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const t = testimonials[current];
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="results" ref={ref} className="relative overflow-hidden" style={{ padding: '6rem 1rem' }} aria-label="Results and Case Studies">
      {/* Ambient glow */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: '30%', left: '60%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-blue-500/60" /> Proven Results <span className="w-4 h-px bg-blue-500/60" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight">
            Numbers Don&apos;t Lie.{' '}
            <span className="gradient-text">Neither Do We.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Real results from real businesses. What happens when data-driven strategy meets flawless execution.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl p-5 text-center overflow-hidden"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
            >
              <p className="text-3xl font-black font-poppins tabular-nums mb-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Individual Case Study Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            {
              industry: 'Auto Dealership — Houston, TX',
              service: 'SEO / AIO',
              challenge: 'Stuck on page 4 for high-value keywords. 2,100 monthly visitors.',
              result: '18,400 monthly visitors. Ranked #1 for 14 target keywords.',
              growth: '+876%',
              timeframe: '5 months',
              revenue: '$2.4M added revenue',
              color: '#10B981',
            },
            {
              industry: 'E-Commerce Brand — UK',
              service: 'PPC Advertising',
              challenge: 'Spending £12,000/mo on ads with 1.2x ROAS. Budget was being wasted.',
              result: '4.8x ROAS. CPC dropped 38%. Revenue up 312% from the same budget.',
              growth: '+312%',
              timeframe: '3 months',
              revenue: '£840K in 90 days',
              color: '#3B82F6',
            },
            {
              industry: 'Local Restaurant Chain — Dubai',
              service: 'GMB + Social Media',
              challenge: 'No Google Maps visibility. 8 reviews. No social media strategy.',
              result: '200+ reviews, Top 3 Maps ranking. 34K Instagram followers. Fully booked weekends.',
              growth: '+620%',
              timeframe: '6 months',
              revenue: '3 new locations opened',
              color: '#8B5CF6',
            },
          ].map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
              className="rounded-2xl p-6 border border-white/6 flex flex-col gap-4 relative overflow-hidden"
              style={{ background: 'rgba(17,24,39,0.8)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cs.color }} />
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.service}</span>
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-full"
                    style={{ background: `${cs.color}18`, color: cs.color, border: `1px solid ${cs.color}30` }}
                  >
                    {cs.growth}
                  </span>
                </div>
                <p className="text-white font-semibold text-sm font-poppins">{cs.industry}</p>
                <p className="text-xs text-gray-600 mt-0.5">{cs.timeframe}</p>
              </div>
              {/* Before/After */}
              <div className="space-y-2">
                <div className="rounded-xl p-3" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.12)' }}>
                  <p className="text-xs text-red-400 font-semibold mb-1">Before</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}20` }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: cs.color }}>After Rankston</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{cs.result}</p>
                </div>
              </div>
              {/* Revenue tag */}
              <div className="flex items-center gap-1.5 pt-1">
                <ArrowTrendingUpIcon className="w-3.5 h-3.5" style={{ color: cs.color }} />
                <span className="text-xs font-bold text-white">{cs.revenue}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main case study panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-2xl overflow-hidden border border-white/6"
          style={{ background: 'rgba(17,24,39,0.8)', backdropFilter: 'blur(20px)' }}
        >
          <div className="grid lg:grid-cols-5">

            {/* LEFT — before/after results */}
            <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest mb-6">
                  <ArrowTrendingUpIcon className="w-3.5 h-3.5 text-emerald-400" />
                  Case Study — {t.service}
                </div>

                {/* Before / After */}
                <div className="space-y-3 mb-6">
                  <div className="rounded-xl p-4" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <p className="text-xs text-red-400 font-semibold mb-1 uppercase tracking-wide">Before Rankston</p>
                    <p className="text-3xl font-black font-poppins text-white">{t.results.before}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{t.results.metric}</p>
                  </div>
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex-1 h-px bg-white/5" />
                    <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-400" />
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <p className="text-xs text-emerald-400 font-semibold mb-1 uppercase tracking-wide">After Rankston</p>
                    <p className="text-3xl font-black font-poppins gradient-text">{t.results.after}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{t.results.metric}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.results.growth} Growth
                </div>
              </div>

              {/* Dot nav */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === current ? 24 : 6,
                      height: 6,
                      background: i === current ? '#10B981' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — testimonial quote */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col justify-between h-full gap-6"
                >
                  {/* Stars */}
                  <div>
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>

                    {/* Large quote mark */}
                    <div className="relative">
                      <span className="absolute -top-4 -left-2 text-7xl font-black text-white/4 leading-none font-poppins select-none">&ldquo;</span>
                      <blockquote className="text-white text-lg leading-relaxed relative z-10 pl-4">
                        {t.quote}
                      </blockquote>
                    </div>
                  </div>

                  {/* Author + nav */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full gradient-bg flex items-center justify-center text-white font-bold font-poppins text-lg shadow-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-gray-500 text-xs">{t.company} · {t.location}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button aria-label="Previous" onClick={prev}
                        className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all">
                        <ChevronLeftIcon className="w-4 h-4" />
                      </button>
                      <button aria-label="Next" onClick={next}
                        className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all">
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            See your potential results <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
