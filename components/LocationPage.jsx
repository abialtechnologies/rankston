'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ── helpers ───────────────────────────────────────── */
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function LocationPage({ svc, stateData, cityData }) {
  const AC = svc.accentColor || '#10B981';
  const city = cityData.city;
  const state = stateData.state;
  const abbr = stateData.stateAbbr;

  const faqs = [
    {
      q: `How much do ${svc.title} services cost in ${city}?`,
      a: `Our ${svc.title} packages for ${city} businesses are custom-priced based on your goals and market size. We offer flexible monthly plans with no lock-in contracts. Contact us for a free audit and tailored quote.`,
    },
    {
      q: `How long before we see results from ${svc.title} in ${city}?`,
      a: `Most ${city} clients see measurable improvements within ${svc.results?.period ?? '3–6 months'}. We track and report every metric so you know exactly what's improving month by month.`,
    },
    {
      q: `Do you work with small businesses in ${city}?`,
      a: `Yes — we've helped dozens of small and medium businesses in ${city} grow their online presence. Our strategies scale with your budget, starting from local campaigns and growing to regional dominance.`,
    },
    {
      q: `What makes Rankston different from other ${svc.title} agencies in ${city}?`,
      a: `We combine data-driven strategy with local market insight specific to the ${city} area. Unlike generic agencies, we study your local competitors, map keyword gaps, and build a custom strategy — not a template.`,
    },
    {
      q: `Can Rankston help us rank in ${city} AND neighboring cities?`,
      a: `Absolutely. We build multi-location SEO strategies covering ${city} and surrounding ${state} markets simultaneously, expanding your reach without diluting your local relevance.`,
    },
  ];

  const siblingCities = stateData.cities
    .filter((c) => c.citySlug !== cityData.citySlug)
    .slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
      >
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0, opacity: 0.22 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.85) 0%, rgba(3,7,18,0.55) 40%, rgba(3,7,18,0.90) 80%, #030712 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 70% 50% at 50% 20%, ${AC}12 0%, transparent 70%)` }} />
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-600 mb-6 flex-wrap justify-center">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${svc.slug}`} className="hover:text-gray-400 transition-colors">{svc.title}</Link>
            <span>/</span>
            <Link href={`/${svc.slug}/${stateData.stateSlug}`} className="hover:text-gray-400 transition-colors">{state}</Link>
            <span>/</span>
            <span className="text-gray-400">{city}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-7"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}
          >
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            {svc.title} — {city}, {abbr}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-[1.08] mb-5"
          >
            {svc.title} Services in<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {city}, {state}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl"
          >
            Rankston helps {city} businesses dominate local search, outperform competitors, and grow revenue through expert {svc.title.toLowerCase()}. {svc.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}30` }}
            >
              Get Free {city} Audit →
            </a>
            <a
              href={`/${svc.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30"
            >
              View All {svc.title} Services ↗
            </a>
          </motion.div>

          {/* Results stats */}
          {svc.results && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl"
            >
              {[
                { val: svc.results.before, label: 'Before Rankston' },
                { val: svc.results.after, label: svc.results.metric },
                { val: svc.results.period, label: 'Timeline' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-4 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div className="text-xl font-extrabold font-poppins mb-0.5" style={{ color: AC }}>{s.val}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── LOCAL MARKET INTRO ───────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
            <span className="w-4 h-px" style={{ background: AC }} /> Why {city} Businesses Need {svc.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-5 leading-tight">
            The {city} Market is Competitive. <br />
            <span style={{ color: AC }}>Here&apos;s How You Win It.</span>
          </h2>
          <div className="text-gray-400 leading-relaxed space-y-4 text-base sm:text-lg">
            <p>
              {city}, {state} is one of the fastest-growing business markets in the US. Whether you&apos;re a local service provider, a retail brand, or a B2B company, your customers are searching online — and if you&apos;re not visible, your competitors are taking those leads.
            </p>
            <p>
              Rankston&apos;s {svc.title} strategy for {city} businesses is built on deep local market research. We identify exactly what your {city} customers search for, which competitors rank above you, and what it takes to displace them — then we execute with precision.
            </p>
            <p>
              {svc.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> What We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              {svc.title} Services We Provide in {city}, {abbr}
            </h2>
            <p className="text-gray-500 mt-2">Every service is custom-built for the {city} market — not a template.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {svc.features.map((f) => (
              <div key={f} className="rounded-2xl p-5 border border-white/6 hover:border-white/12 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-base" style={{ background: `${AC}15`, color: AC }}>✓</div>
                <h3 className="text-sm font-bold text-white leading-snug">{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              How We Grow {city} Businesses
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { n: '01', title: `Free ${city} Market Audit`, desc: `We analyze your current online presence in ${city}, identify gaps vs. competitors, and map a path to growth.` },
              { n: '02', title: 'Custom Strategy Build', desc: `We build a tailored ${svc.title} strategy based on ${city} keyword data, local competition, and your business goals.` },
              { n: '03', title: 'Execution & Optimization', desc: `Our team executes the strategy, reporting progress monthly and optimizing based on real ${city} performance data.` },
              { n: '04', title: 'Scale & Dominate', desc: `Once we establish ${city} dominance, we expand to surrounding ${state} markets and nationwide reach.` },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins shrink-0 w-10" style={{ color: AC }}>{step.n}</div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> FAQ
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">
              {svc.title} in {city} — Questions Answered
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer text-sm font-semibold text-white list-none">
                  {faq.q}
                  <span className="text-gray-600 group-open:rotate-180 transition-transform shrink-0">▾</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER CITIES IN STATE ────────────────────── */}
      {siblingCities.length > 0 && (
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-extrabold font-poppins text-white mb-6">
              {svc.title} Services Across {state}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siblingCities.map((c) => (
                <Link
                  key={c.citySlug}
                  href={`/${svc.slug}/${stateData.stateSlug}/${c.citySlug}`}
                  className="px-4 py-2 rounded-lg border border-white/8 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  {svc.title} in {c.city} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${AC}15, transparent)` }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Dominate {city} Search?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">
              Free {city} market audit. No commitment. Results-or-refund guarantee.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}
            >
              Get My Free {city} Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
