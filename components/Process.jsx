'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MagnifyingGlassCircleIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    step: '01',
    Icon: MagnifyingGlassCircleIcon,
    title: 'Free Audit & Strategy',
    description:
      'We start with a deep-dive audit of your digital presence — website, SEO, ads, and competitors. Then we build a custom 90-day growth roadmap tailored to your industry.',
    highlights: ['Full SEO Audit', 'Competitor Analysis', 'Custom Growth Plan'],
    color: '#10B981',
    shadow: 'rgba(16,185,129,0.25)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    label: 'Discovery',
  },
  {
    step: '02',
    Icon: ChartBarIcon,
    title: 'Execution & Optimization',
    description:
      'Our team executes with precision — content, links, ads, and high-converting landing pages. We optimize continuously using real-time data, never guessing.',
    highlights: ['Content Creation', 'Technical SEO', 'Paid Campaigns'],
    color: '#3B82F6',
    shadow: 'rgba(59,130,246,0.25)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    label: 'Execute',
  },
  {
    step: '03',
    Icon: RocketLaunchIcon,
    title: 'Scale & Dominate',
    description:
      "Once we've proven what works, we scale your winning channels aggressively. Monthly reports keep you 100% informed and our team is always one message away.",
    highlights: ['Scale Winners', 'Monthly Reports', 'Dedicated Support'],
    color: '#8B5CF6',
    shadow: 'rgba(139,92,246,0.25)',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    label: 'Scale',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="process" ref={ref} className="relative overflow-hidden" style={{ padding: '6rem 1rem' }} aria-label="Our Process">
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" aria-hidden />

      {/* Ambient glow */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: '40%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, rgba(59,130,246,0.05) 45%, transparent 75%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-violet-500/60" /> How It Works <span className="w-4 h-px bg-violet-500/60" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight">
            A Simple 3-Step Path to{' '}
            <span className="gradient-text">Rapid Growth</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            No fluff, no mystery. Our proven process delivers results in 90 days or less.
          </p>
        </motion.div>

        {/* Steps — stacked with connector line */}
        <div className="relative">
          {/* Vertical connector (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.4) 0%, rgba(59,130,246,0.4) 50%, rgba(139,92,246,0.4) 100%)' }} />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:mt-[-2rem]' : ''}`}
                >
                  {/* Card — alternates left/right on desktop */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} relative`}>
                    <div
                      className="rounded-2xl p-7 relative overflow-hidden group transition-all duration-300 hover:translate-y-[-4px]"
                      style={{
                        background: 'rgba(17,24,39,0.85)',
                        backdropFilter: 'blur(16px)',
                        border: `1px solid ${s.border}`,
                        boxShadow: `0 8px 40px ${s.shadow}`,
                      }}
                    >
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: s.color }} />

                      {/* Corner glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-tr-2xl" style={{ background: `radial-gradient(circle at top right, ${s.bg}, transparent 70%)` }} />

                      {/* Step badge + icon */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                          <s.Icon className="w-6 h-6" style={{ color: s.color }} />
                          {/* Pulse ring */}
                          <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{ border: `1px solid ${s.color}` }}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                          />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: s.color }}>{s.label}</p>
                          <h3 className="text-lg font-bold text-white font-poppins">{s.title}</h3>
                        </div>
                        <span className="ml-auto text-5xl font-black font-poppins opacity-10 leading-none" style={{ color: s.color }}>
                          {s.step}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>

                      <ul className="space-y-2">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircleIcon className="w-3.5 h-3.5 shrink-0" style={{ color: s.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node (visible on desktop only) */}
                  <div className={`hidden lg:flex ${!isEven ? 'lg:order-1' : ''} justify-${isEven ? 'end' : 'start'} pr-${isEven ? '0' : '0'} items-center`}>
                    <div className="relative flex items-center justify-center">
                      {/* Node circle */}
                      <motion.div
                        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-black font-poppins text-lg text-white shadow-2xl"
                        style={{ background: s.color, boxShadow: `0 0 30px ${s.shadow}` }}
                        initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.18, type: 'spring', stiffness: 200 }}
                      >
                        {s.step}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-500 text-sm mb-5">Ready to start your 3-step journey to growth?</p>
          <a
            href="#contact"
            id="process-cta-button"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20 text-sm"
          >
            Start for Free — Get Your Audit
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
