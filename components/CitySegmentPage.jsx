'use client';
import Link from 'next/link';
import LeadForm from './LeadForm';
import GoogleReviews from './GoogleReviews';

export default function CitySegmentPage({ svc, stateData, cityData, seg, content, nearbyCities, otherSegs }) {
  const AC    = svc.accentColor || '#10B981';
  const city  = cityData.city;
  const state = stateData.state;
  const abbr  = stateData.stateAbbr;
  const svcTitle = svc.title;
  const variantSeed = city.length + seg.slug.length;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '85vh', paddingTop: '5.5rem', paddingBottom: '4rem' }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 75% 50% at 50% 0%, ${AC}14 0%, transparent 70%)` }} />
        <div aria-hidden className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-600 mb-5 flex-wrap">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${svc.slug}`} className="hover:text-gray-400 transition-colors">{svcTitle}</Link>
            <span>/</span>
            <Link href={`/${svc.slug}/${stateData.stateSlug}`} className="hover:text-gray-400 transition-colors">{state}</Link>
            <span>/</span>
            <Link href={`/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}`} className="hover:text-gray-400 transition-colors">{city}</Link>
            <span>/</span>
            <span className="text-gray-400">{seg.label}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <span className="text-base">{seg.icon}</span>
            {svcTitle} · {seg.label} · {city}, {abbr}
          </div>

          {/* H1 — keyword-first */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-5 animate-fade-in">
            {svcTitle} for{' '}
            <span style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {seg.label}
            </span>
            {' '}in {city}
          </h1>

          {/* First paragraph */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in">
            {seg.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-in">
            <a href="#contact" className="px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get Free {svcTitle} Audit →
            </a>
            <a href="#why-us" className="px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              Why Rankston? ↓
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto animate-fade-in">
            {[
              { val: '4.9★', label: 'Client Rating' },
              { val: '340%', label: 'Avg Lead Growth' },
              { val: '94%',  label: 'Retention Rate' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-4 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-lg font-extrabold font-poppins mb-0.5" style={{ color: AC }}>{s.val}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
              Why {seg.label} in {city} Struggle with {svcTitle}
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              These are the real challenges — and why a generic agency won't cut it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {seg.painPoints.map((pt, i) => (
              <div key={i} className="flex gap-4 rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{ background: `${AC}20`, color: AC }}>{i + 1}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RANKSTON ────────────────────────────────────────────── */}
      <section id="why-us" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-8 sm:p-12 border border-white/8 relative overflow-hidden"
            style={{ background: 'rgba(17,24,39,0.9)' }}>
            <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${AC}, transparent)` }} />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-4">
              Why {city} {seg.label} Choose Rankston
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">{seg.whyUs}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '📊', title: 'Transparent Reporting', desc: 'Monthly reports in plain English — not vanity metrics, but leads, revenue, and ROI.' },
                { icon: '🎯', title: `Built for ${seg.label}`, desc: `We don't apply a generic playbook. Every strategy is tailored to ${seg.label.toLowerCase()} in the ${city} market.` },
                { icon: '🔒', title: 'No Long-Term Contracts', desc: 'We earn your business every single month. Stay because results are there — not because you\'re locked in.' },
                { icon: '📞', title: 'Dedicated Account Manager', desc: 'One point of contact who knows your business, responds same day, and is invested in your success.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 p-4 rounded-2xl border border-white/6" style={{ background: 'rgba(3,7,18,0.6)' }}>
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{f.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ─────────────────────────────────────────── */}
      <GoogleReviews variant={variantSeed} accentColor={AC} count={6} />

      {/* ── INTERNAL LINKS — Other Segments ────────────────────────── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold font-poppins text-white mb-2">
            {svcTitle} for Other Business Types in {city}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Looking for a different focus? We offer specialized {svcTitle} for every type of {city} business.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherSegs.map((s) => (
              <Link key={s.slug}
                href={`/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}/${s.slug}`}
                className="flex items-center gap-3 rounded-xl p-4 border border-white/6 hover:border-white/15 transition-all group"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {s.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS — Nearby Cities ─────────────────────────── */}
      {nearbyCities.length > 0 && (
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-extrabold font-poppins text-white mb-5">
              {svcTitle} for {seg.label} in Nearby Cities
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <Link key={c.citySlug}
                  href={`/${svc.slug}/${stateData.stateSlug}/${c.citySlug}/${seg.slug}`}
                  className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  style={{ background: 'rgba(17,24,39,0.85)' }}>
                  {c.city} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
            Ready to Grow Your {seg.label} in {city}?
          </h2>
          <p className="text-gray-500 text-sm">
            Free {svcTitle} audit — we'll identify exactly what's holding your business back and how to fix it.
          </p>
        </div>
        <LeadForm />
      </section>
    </>
  );
}
