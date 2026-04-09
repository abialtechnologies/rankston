'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  MagnifyingGlassIcon, CodeBracketIcon, CursorArrowRaysIcon,
  PencilSquareIcon, SparklesIcon, ArrowRightIcon,
} from '@heroicons/react/24/outline';
import services from '../data/services.json';

const iconMap = {
  MagnifyingGlass: MagnifyingGlassIcon,
  CodeBracket: CodeBracketIcon,
  CursorArrowRays: CursorArrowRaysIcon,
  PencilSquare: PencilSquareIcon,
  SparklesIcon: SparklesIcon,
};

/* Per-service visual styles */
const palette = [
  { icon: 'text-emerald-400', glow: 'rgba(16,185,129,0.18)', border: 'rgba(16,185,129,0.35)', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', bar: '#10B981' },
  { icon: 'text-blue-400',    glow: 'rgba(59,130,246,0.18)',  border: 'rgba(59,130,246,0.35)',  tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20',       bar: '#3B82F6' },
  { icon: 'text-violet-400',  glow: 'rgba(139,92,246,0.18)', border: 'rgba(139,92,246,0.35)', tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20',   bar: '#8B5CF6' },
  { icon: 'text-orange-400',  glow: 'rgba(249,115,22,0.18)', border: 'rgba(249,115,22,0.35)', tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20',   bar: '#F97316' },
  { icon: 'text-cyan-400',    glow: 'rgba(6,182,212,0.18)',  border: 'rgba(6,182,212,0.35)',  tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',         bar: '#06B6D4' },
];

/* Mouse-tracking spotlight */
function SpotlightCard({ children, glow, border, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: '50%', y: '50%' });
  const [hovered, setHovered] = useState(false);

  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: `${((e.clientX - r.left) / r.width) * 100}%`, y: `${((e.clientY - r.top) / r.height) * 100}%` });
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(17,24,39,0.7)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${hovered ? border : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 0 40px ${glow}` : '0 0 0 transparent',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(280px circle at ${pos.x} ${pos.y}, ${glow}, transparent 70%)` }}
      />
      {children}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="services" className="relative overflow-hidden" style={{ padding: '6rem 1rem' }} ref={ref} aria-label="Our Services">
      {/* Ambient glow */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.04) 50%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-emerald-500/60" /> What We Do <span className="w-4 h-px bg-emerald-500/60" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight">
            Here&apos;s how we solve{' '}<span className="gradient-text">your growth problem</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Whether you need more traffic, better leads, stronger branding, or a fully automated sales process &mdash; we have a proven approach for it. Pick the one you need most right now.
          </p>
        </motion.div>

        {/* Cards grid — top 3 featured services only */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(0, 3).map((service, i) => {
            const Icon = iconMap[service.icon] || SparklesIcon;
            const p = palette[i % palette.length];
            return (
              <motion.div
                key={service.id}
                custom={i} variants={cardVariants} initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <SpotlightCard glow={p.glow} border={p.border} className="group h-full">
                  <Link href={`/${service.slug}`} id={`service-card-${service.slug}`} className="flex flex-col h-full p-7">
                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.icon} bg-white/5 border border-white/8 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-5xl font-black font-poppins text-white/4 group-hover:text-white/8 transition-colors leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title + arrow */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-base font-bold text-white font-poppins group-hover:${p.icon} transition-colors`}>
                        {service.title}
                      </h3>
                      <ArrowRightIcon className={`w-4 h-4 text-gray-700 group-hover:${p.icon} group-hover:translate-x-1 transition-all shrink-0`} />
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.features.slice(0, 3).map((feat) => (
                        <span key={feat} className={`text-xs px-2.5 py-1 rounded-full border ${p.tag}`}>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </Link>
                </SpotlightCard>
              </motion.div>
            );
          })}

          {/* View Services button */}
          <motion.div
            custom={3} variants={cardVariants} initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="sm:col-span-2 lg:col-span-3 text-center pt-2"
          >
            <Link
              href="/services"
              id="services-view-all"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/8 hover:border-emerald-500/40 text-sm font-semibold transition-all group"
            >
              View Services
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
