'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────────────────
   Animated count-up hook
───────────────────────────────────────────────────────── */
function useCountUp(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    let startTime = null;
    let raf;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return [count, () => setActive(true)];
}

/* ─────────────────────────────────────────────────────────
   Mouse-tracking gradient spotlight on a card
───────────────────────────────────────────────────────── */
function SpotlightCard({ children, className = '', glowColor = 'rgba(16,185,129,0.15)' }) {
  const divRef = useRef(null);
  const [pos, setPos] = useState({ x: '50%', y: '50%' });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = divRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  }, []);

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${pos.x} ${pos.y}, ${glowColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Thin animated border gradient wrapper
───────────────────────────────────────────────────────── */
function GradientBorder({ children, className = '', from = '#10B981', to = '#3B82F6', opacity = 0.2 }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity,
        }}
      />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Icons (inline SVG — GPU-friendly, no image load)
───────────────────────────────────────────────────────── */
const Icons = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────
   Card appearance animation
───────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ─────────────────────────────────────────────────────────
   WhyRankston — Premium bento grid
───────────────────────────────────────────────────── */
export default function WhyRankston() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-8%' });

  // Animated counters
  const [clients, startClients]   = useCountUp(500, 1600);
  const [growth, startGrowth]     = useCountUp(312, 1800);
  const [cities, startCities]     = useCountUp(25,  1400);
  const [revenue, startRevenue]   = useCountUp(94,  2000);

  useEffect(() => {
    if (isInView) {
      startClients(); startGrowth(); startCities(); startRevenue();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  /* shared card bg */
  const cardBg = 'bg-gray-900/60 backdrop-blur-md border border-white/6 rounded-2xl';

  return (
    <section
      id="why-rankston"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: '6rem 1rem' }}
      aria-labelledby="why-heading"
    >
      {/* ── Ambient glow backdrop ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500,
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, rgba(59,130,246,0.05) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-emerald-500/60" />
            The Difference
            <span className="w-4 h-px bg-emerald-500/60" />
          </span>
          <h2
            id="why-heading"
            className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight"
          >
            Most agencies talk results.{' '}
            <span className="gradient-text">We prove them.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            You’ve probably worked with an agency that promised the world and delivered a report full of vanity metrics. Here’s what makes us different — and why 500+ businesses chose to stay.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════
            BENTO GRID
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 auto-rows-auto">

          {/* ── Card 1 — HERO CARD (large, col-span-5) ── */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-5 lg:row-span-2"
          >
            <SpotlightCard
              glowColor="rgba(16,185,129,0.18)"
              className={`${cardBg} h-full min-h-[320px] flex flex-col p-7 relative`}
            >
              {/* Corner gradient accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(16,185,129,0.18) 0%, transparent 70%)',
                  borderRadius: '0 1rem 0 0',
                }}
              />

              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Guaranteed
              </span>

              {/* Big stat */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-7xl font-black font-poppins gradient-text tabular-nums leading-none">
                    {growth}
                  </span>
                  <span className="text-3xl font-bold text-emerald-400 mb-2">%</span>
                </div>
                <p className="text-white font-semibold text-lg mb-2">Avg. Traffic Growth Across All Clients</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Not a best-case story. This is the average across every client we work with. You see the number move every week in a live dashboard — no hiding, no spin.
                </p>
              </div>

              {/* Bottom mini-bars */}
              <div className="mt-6 space-y-2.5">
                {[
                  { label: 'SEO Traffic', pct: 88, color: '#10B981' },
                  { label: 'Lead Quality', pct: 94, color: '#3B82F6' },
                  { label: 'Revenue ROI', pct: 76, color: '#8B5CF6' },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-20 shrink-0">{bar.label}</span>
                    <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: bar.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${bar.pct}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-7 text-right">{bar.pct}%</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Card 2 — No Contracts (col-span-4) ── */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4"
          >
            <SpotlightCard
              glowColor="rgba(59,130,246,0.15)"
              className={`${cardBg} h-full p-6 flex flex-col gap-4`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                {Icons.shield}
              </div>
              <div>
                <h3 className="text-white font-semibold font-poppins text-base mb-1.5">No Long-Term Contracts</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We work month-to-month. If we&apos;re not delivering, you leave — simple as that. We&apos;d rather earn your business every month than hold you to a contract.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-xs text-blue-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Cancel anytime, zero penalties
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Card 3 — AI Automation (col-span-3) ── */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <SpotlightCard
              glowColor="rgba(139,92,246,0.18)"
              className={`${cardBg} h-full p-6 flex flex-col gap-4`}
            >
              {/* Animated CPU icon rings */}
              <div className="relative w-10 h-10">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  {Icons.cpu}
                </div>
                <motion.div
                  className="absolute -inset-1 rounded-xl border border-violet-500/20 pointer-events-none"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold font-poppins text-base mb-1.5">AI Working For You, 24/7</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Automated lead capture, AI chatbots, and smart content generation — your pipeline keeps running even when you’re asleep.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Card 4 — No Meetings (col-span-4) ── */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4"
          >
            <SpotlightCard
              glowColor="rgba(16,185,129,0.12)"
              className={`${cardBg} h-full p-6 flex flex-col gap-4`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                {Icons.chat}
              </div>
              <div>
                <h3 className="text-white font-semibold font-poppins text-base mb-1.5">No Useless Status Calls</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  You get a live dashboard showing your results in real time. No waiting for a monthly PDF. No calls that could’ve been a message.
                </p>
              </div>
              <div className="mt-auto grid grid-cols-3 gap-2">
                {['Slack', 'Dashboard', 'Async'].map((tag) => (
                  <span key={tag} className="text-center text-xs text-gray-500 bg-white/4 rounded-lg py-1.5 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Card 5 — Local SEO (col-span-3) ── */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <SpotlightCard
              glowColor="rgba(234,179,8,0.12)"
              className={`${cardBg} h-full p-6 flex flex-col gap-4`}
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                {Icons.pin}
              </div>
              <div>
                <h3 className="text-white font-semibold font-poppins text-base mb-1.5">Local SEO Dominance</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Google Maps Pack rankings across{' '}
                  <span className="text-yellow-400 font-semibold">{cities}+ cities</span>.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── STATS STRIP — full width ── */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-12"
          >
            <GradientBorder from="#10B981" to="#8B5CF6" opacity={0.25}>
              <div
                className="rounded-2xl bg-gray-900/80 backdrop-blur-md p-5 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { value: `${clients}+`, label: 'Happy Clients', color: '#10B981' },
                  { value: `$${revenue}M`, label: 'Revenue Generated', color: '#3B82F6' },
                  { value: '90', label: 'Day Guarantee', suffix: '-Day', color: '#8B5CF6' },
                  { value: '4.9★', label: 'Average Rating', color: '#F59E0B' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-2">
                    <p
                      className="text-3xl font-black font-poppins tabular-nums"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GradientBorder>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
