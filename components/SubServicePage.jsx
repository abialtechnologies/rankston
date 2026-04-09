'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const AC = '#10B981';

export default function SubServicePage({ sub, service, related }) {
  const serviceSlug = service?.slug ?? '';
  const serviceLabel = service?.title ?? serviceSlug;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#030712', paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 20%, rgba(16,185,129,0.10) 0%, transparent 70%)', zIndex: 1 }}
        />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" aria-hidden="true" style={{ zIndex: 1 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${serviceSlug}`} className="hover:text-gray-400 transition-colors capitalize">{serviceLabel}</Link>
            <span>/</span>
            <span className="text-gray-400">{sub.label}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-6"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: AC }} />
            {serviceLabel}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-6xl mb-5"
          >
            {sub.icon}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-4"
          >
            {sub.label}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: AC }}
          >
            {sub.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-base text-gray-400 leading-relaxed max-w-2xl mb-10"
          >
            {sub.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}30` }}
            >
              Get a Free Consultation →
            </a>
            <Link
              href={`/${serviceSlug}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30"
            >
              ← Back to {serviceLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ──────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> What We Deliver
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-5 leading-tight">
                Everything Included in Our {sub.label} Service
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We handle every aspect of {sub.label.toLowerCase()} from strategy to execution. No partial services, no passing the work to juniors — a dedicated team that delivers the full scope below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {(sub.whatWeDeliver ?? []).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl p-4 border border-white/6"
                  style={{ background: 'rgba(17,24,39,0.85)' }}
                >
                  <CheckCircleIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: AC }} />
                  <span className="text-sm text-gray-300 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────── */}
      {sub.whyItMatters && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Why It Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-5">
              Why {sub.label} Is Worth Investing In
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {sub.whyItMatters}
            </p>
          </div>
        </section>
      )}

      {/* ── RELATED SUB-SERVICES ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> More From {serviceLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
                Other {serviceLabel} Services We Offer
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${serviceSlug}/${rel.slug}`}
                  className="group rounded-2xl p-5 border border-white/6 hover:border-emerald-500/25 transition-all block"
                  style={{ background: 'rgba(17,24,39,0.85)' }}
                >
                  <div className="absolute top-0 inset-x-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" style={{ background: AC }} />
                  <span className="text-3xl mb-4 block">{rel.icon}</span>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{rel.label}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{rel.desc}</p>
                  <span className="text-xs font-semibold" style={{ color: AC }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BAR ──────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${AC}15, transparent)` }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Get Started With {sub.label}?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">Free consultation. No commitment required. Results guaranteed.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}
            >
              Get a Free Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
