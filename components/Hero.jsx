'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

/* ─────────────────────────────────────────────────────────
   Abstract Hero Visual — layered glowing cards + orb
   No dashboard, no icons, pure geometric depth
───────────────────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ height: 'clamp(220px, 45vw, 320px)', maxWidth: 560 }}>

      {/* Large ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,129,0.14) 0%, rgba(59,130,246,0.09) 45%, transparent 75%)',
          filter: 'blur(32px)',
        }}
      />

      {/* Back card — tilted left */}
      <motion.div
        className="absolute rounded-2xl border border-white/6"
        style={{
          width: 'clamp(200px, 55vw, 320px)', height: 'clamp(120px, 32vw, 190px)',
          background: 'linear-gradient(135deg, rgba(31,41,55,0.7) 0%, rgba(17,24,39,0.85) 100%)',
          backdropFilter: 'blur(12px)',
          rotate: -8,
          top: 30, left: '3%',
        }}
        animate={{ rotate: [-8, -6.5, -8], y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-blue-500/50 via-violet-500/40 to-transparent" />
        {/* Subtle inner content lines */}
        <div className="p-5 space-y-3 mt-2">
          <div className="h-2 w-2/3 rounded-full bg-white/8" />
          <div className="h-2 w-1/2 rounded-full bg-white/5" />
          <div className="flex gap-2 mt-4">
            <div className="h-6 w-12 rounded-lg bg-blue-500/20 border border-blue-500/20" />
            <div className="h-6 w-16 rounded-lg bg-violet-500/15 border border-violet-500/15" />
          </div>
        </div>
      </motion.div>

      {/* Back card — tilted right */}
      <motion.div
        className="absolute rounded-2xl border border-white/6"
        style={{
          width: 'clamp(180px, 50vw, 300px)', height: 'clamp(110px, 29vw, 175px)',
          background: 'linear-gradient(135deg, rgba(31,41,55,0.65) 0%, rgba(17,24,39,0.80) 100%)',
          backdropFilter: 'blur(12px)',
          rotate: 7,
          top: 45, right: '3%',
        }}
        animate={{ rotate: [7, 5.5, 7], y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-emerald-500/50 via-teal-500/30 to-transparent" />
        <div className="p-5 space-y-3 mt-2">
          <div className="h-2 w-3/5 rounded-full bg-white/8" />
          <div className="h-2 w-2/5 rounded-full bg-white/5" />
          <div className="flex gap-2 mt-4">
            <div className="h-6 w-14 rounded-lg bg-emerald-500/20 border border-emerald-500/20" />
            <div className="h-6 w-10 rounded-lg bg-teal-500/15 border border-teal-500/15" />
          </div>
        </div>
      </motion.div>

      {/* Center card — main focused card */}
      <motion.div
        className="relative rounded-2xl border border-white/10 shadow-2xl z-10"
        style={{
          width: 'clamp(240px, 70vw, 340px)', height: 'clamp(155px, 38vw, 210px)',
          background: 'linear-gradient(145deg, rgba(31,41,55,0.92) 0%, rgba(17,24,39,0.96) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 60px rgba(16,185,129,0.12), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 opacity-80" />

        <div className="p-6">
          {/* Metric row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Organic Growth</p>
              <p className="text-2xl font-bold font-poppins text-white">+312%</p>
            </div>
            {/* Mini sparkline */}
            <svg width="80" height="36" viewBox="0 0 80 36" fill="none" className="opacity-70">
              <polyline
                points="0,36 15,28 28,30 40,18 52,20 62,8 80,2"
                stroke="url(#spark)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bar row */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500 w-16">SEO</div>
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-gray-400">88%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500 w-16">PPC</div>
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400"
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.5, delay: 1.0, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-gray-400">72%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500 w-16">AI</div>
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-gray-400">94%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat chips */}
      <motion.div
        className="absolute top-2 right-2 sm:top-4 sm:right-8 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-emerald-400 shadow-lg z-20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        500+ Active Clients
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-blue-400 shadow-lg z-20"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        90-Day Results Guarantee
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero section
───────────────────────────────────────────────────────── */
export default function Hero() {
  const smoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
      aria-label="Hero Section"
    >
      {/* ── Video background ── */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)',
        }}
      />

      {/* ── Brand glow ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            'radial-gradient(ellipse 80% 50% at 50% 15%, rgba(16,185,129,0.10) 0%, rgba(59,130,246,0.06) 45%, transparent 75%)',
        }}
      />
      <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

      {/* ══════════════════════════════════════════
          HERO CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center" style={{ zIndex: 10 }}>

        {/* ── Trust pill ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/30 text-sm text-emerald-400 font-medium mb-8"
        >
          <motion.span
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          🌍 Ranked Among the World's Fastest-Growing Digital Agencies
        </motion.div>

        {/* ── H1 ── */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-poppins text-white leading-[1.08] tracking-tight mb-6"
        >
          We grow businesses online.{' '}
          <span className="gradient-text">That&apos;s all we do.</span>
        </h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          SEO, paid ads, social media, web development, AI automation — and more. 500+ businesses worldwide trust Rankston to handle their entire digital presence and turn it into measurable revenue.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <motion.a
            href="#contact"
            id="hero-cta-audit"
            onClick={(e) => smoothScroll(e, '#contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 text-sm"
          >
            Get My Free Growth Audit
            <ArrowRightIcon className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => smoothScroll(e, '#contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium hover:text-gray-200 transition-colors text-sm"
          >
            <PlayCircleIcon className="w-5 h-5 text-emerald-400" />
            Just talk to us once — no pressure
          </motion.a>
        </motion.div>

        {/* ── Abstract Visual ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#why-rankston"
          onClick={(e) => smoothScroll(e, '#why-rankston')}
          className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors"
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
