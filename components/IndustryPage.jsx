'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────────────
   IndustryPage — 16-section premium landing page for service × industry.
   Data shape: { svc, industry, siblingIndustries }
   industry fields used: slug, name, icon, tagline, heroSubtitle, overview,
     stats[], painPoints[], strategy{ title,intro,pillars[] }, services[],
     commonMistakes[], tools[], timeline{ m1,m2,m3,m6,m12 },
     keywords[], caseStudy{}, localVsNational{local,national},
     whyUs[], faqs[]
   All NEW fields fall back gracefully if not present.
───────────────────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const SectionLabel = ({ AC, children }) => (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
    <span className="w-4 h-px" style={{ background: AC }} />
    {children}
  </span>
);

const Card = ({ children, AC, highlight }) => (
  <div
    className="rounded-2xl p-6 border transition-all hover:border-white/15"
    style={{
      background: 'rgba(17,24,39,0.88)',
      borderColor: highlight ? `${AC}35` : 'rgba(255,255,255,0.06)',
    }}
  >
    {children}
  </div>
);

export default function IndustryPage({ svc, industry, siblingIndustries }) {
  const AC = svc.accentColor || '#10B981';
  const svcTitle = svc.shortTitle || svc.title;

  // ── Default fallbacks for sections that may not exist in older data ──
  const stats = industry.stats || [];
  const overview = industry.overview || industry.heroSubtitle;
  const strategy = industry.strategy || null;
  const commonMistakes = industry.commonMistakes || [];
  const tools = industry.tools || [];
  const timeline = industry.timeline || null;
  const localVsNational = industry.localVsNational || null;
  const whyUs = industry.whyUs || null;

  return (
    <>
      {/* ══ § 1  HERO ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
      >
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0, opacity: 0.2 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg,rgba(3,7,18,0.9) 0%,rgba(3,7,18,0.5) 38%,rgba(3,7,18,0.92) 78%,#030712 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 70% 50% at 50% 20%,${AC}14 0%,transparent 70%)` }} />
        <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-10 pointer-events-none" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-600 mb-6 flex-wrap justify-center">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${svc.slug}`} className="hover:text-gray-400 transition-colors">{svcTitle}</Link>
            <span>/</span>
            <span className="text-gray-400">{industry.name}</span>
          </nav>

          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-7"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <span className="text-base">{industry.icon}</span>
            {svcTitle} for {industry.name}
          </motion.div>

          <motion.h1 {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-[1.08] mb-5">
            {industry.tagline.split('.')[0]}.<br />
            <span style={{ background: `linear-gradient(135deg,${AC} 0%,#3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {industry.tagline.split('.').slice(1).join('.').trim() || `For ${industry.name}.`}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            {industry.heroSubtitle}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg,${AC},#3B82F6)`, boxShadow: `0 8px 32px ${AC}30` }}>
              Get Free {industry.name} Audit →
            </a>
            <a href={`/${svc.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              View All {svcTitle} Services ↗
            </a>
          </motion.div>

          {/* Hero stats chips */}
          {stats.length > 0 && (
            <motion.div {...fadeUp(0.42)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-4 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div className="text-sm font-extrabold font-poppins mb-0.5 leading-tight" style={{ color: AC }}>{s.val}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Fallback: case study chips if no stats */}
          {stats.length === 0 && industry.caseStudy && (
            <motion.div {...fadeUp(0.42)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
              {[
                { val: industry.caseStudy.before, label: 'Before Rankston' },
                { val: industry.caseStudy.after, label: 'After Rankston' },
                { val: industry.caseStudy.leads, label: 'Business Impact' },
                { val: industry.caseStudy.period, label: 'Timeline' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-4 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div className="text-sm font-extrabold font-poppins mb-0.5 leading-tight" style={{ color: AC }}>{s.val}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ══ § 2  INDUSTRY OVERVIEW ═════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel AC={AC}>Industry Overview</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-4">
                The {industry.name} Digital Landscape
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                {typeof overview === 'string'
                  ? overview.split('\n').filter(Boolean).map((p, i) => <p key={i}>{p}</p>)
                  : overview}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(industry.overviewStats || [
                { val: industry.caseStudy?.after || 'Top 3', label: 'Avg Ranking Achieved' },
                { val: industry.caseStudy?.leads || '3×', label: 'Lead Volume Increase' },
                { val: '60–90 Days', label: 'Time to First Results' },
                { val: '98%', label: 'Client Retention Rate' },
              ]).map((s) => (
                <div key={s.label} className="rounded-2xl p-6 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: AC }}>{s.val}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 3  PAIN POINTS ═══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <SectionLabel AC={AC}>The {industry.name} Problem</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Why Most {industry.name} Businesses Struggle Online
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl">
              These are the specific digital challenges we encounter — and solve — every day for {industry.name.toLowerCase()} clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {industry.painPoints.map((p, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="absolute top-4 right-4 text-xs font-bold opacity-10 text-white font-poppins">0{i + 1}</div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-sm font-bold" style={{ background: `${AC}15`, color: AC }}>✗</div>
                <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 4  STRATEGY ══════════════════════════════════════════════ */}
      {strategy && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <SectionLabel AC={AC}>Our Strategy</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">{strategy.title}</h2>
              <p className="text-gray-400 mt-3 max-w-3xl leading-relaxed">{strategy.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(strategy.pillars || []).map((pillar, i) => (
                <Card key={i} AC={AC} highlight>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-50" style={{ color: AC }}>Pillar {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{pillar.desc}</p>
                  {pillar.tactics && (
                    <ul className="space-y-1">
                      {pillar.tactics.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-xs text-gray-500">
                          <span style={{ color: AC }}>→</span> {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 5  SERVICES ══════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <SectionLabel AC={AC}>Our Offer</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              {svcTitle} Services Tailored for {industry.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.services.map((s) => (
              <div key={s} className="rounded-2xl p-5 border border-white/6 hover:border-white/15 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-3" style={{ background: `${AC}15`, color: AC }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-sm font-semibold text-white leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 6  COMMON MISTAKES ═══════════════════════════════════════ */}
      {commonMistakes.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <SectionLabel AC={AC}>What to Avoid</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                {industry.name} {svcTitle} Mistakes That Kill Growth
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl">
                Most {industry.name.toLowerCase()} businesses make these exact errors. Knowing them is the first step to avoiding them.
              </p>
            </div>
            <div className="space-y-4">
              {commonMistakes.map((m, i) => (
                <div key={i} className="rounded-2xl p-6 border border-white/6 grid sm:grid-cols-3 gap-4" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#EF4444' }}>❌ Mistake</div>
                    <p className="text-sm font-semibold text-white">{m.mistake}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-600">Impact</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.impact}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AC }}>✓ Our Fix</div>
                    <p className="text-xs text-gray-400 leading-relaxed">{m.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 7  TOOLS & TECHNOLOGY ════════════════════════════════════ */}
      {tools.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <SectionLabel AC={AC}>Our Toolkit</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
                Tools We Use for {industry.name} {svcTitle}
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl text-sm">
                We invest in the best tools so our strategies are data-driven, not guesswork.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool}
                  className="px-4 py-2 rounded-xl border border-white/8 text-sm text-gray-400 font-medium hover:text-white hover:border-white/20 transition-all cursor-default"
                  style={{ background: 'rgba(17,24,39,0.6)' }}>
                  ⚙ {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 8  OUR PROCESS ═══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel AC={AC}>Process</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              How We Grow {industry.name} Businesses
            </h2>
          </div>
          <div className="space-y-4">
            {(industry.process || [
              { n: '01', title: `Free ${industry.name} Audit`, desc: `We analyze your entire digital presence — website health, keyword gaps, competitor positioning, and search visibility. You receive a detailed, actionable audit within 24 hours. Zero obligation.` },
              { n: '02', title: 'Custom Industry Strategy', desc: `We build a strategy built specifically for the ${industry.name.toLowerCase()} market — based on how your customers search, what your competitors rank for, and where the highest-ROI opportunities lie.` },
              { n: '03', title: 'Execution & Optimization', desc: `Our team implements every element — technical fixes, content creation, link building, local optimization. We review data weekly and adjust monthly for maximum velocity.` },
              { n: '04', title: 'Reporting & Scaling', desc: `You receive clear, jargon-free monthly reports showing exactly what moved and why. Once we dominate your primary market, we expand into adjacent locations and services.` },
            ]).map((step) => (
              <div key={step.n} className="flex gap-5 rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins shrink-0 w-9 mt-0.5" style={{ color: AC }}>{step.n}</div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 9  TIMELINE & EXPECTATIONS ══════════════════════════════ */}
      {timeline && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <SectionLabel AC={AC}>Realistic Timeline</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                What to Expect — Month by Month
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl">
                We set real expectations, not inflated promises. Here&apos;s what a typical {industry.name.toLowerCase()} engagement looks like.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { label: 'Month 1', content: timeline.m1 },
                { label: 'Month 2', content: timeline.m2 },
                { label: 'Month 3', content: timeline.m3 },
                { label: 'Month 6', content: timeline.m6 },
                { label: 'Month 12', content: timeline.m12 },
              ].map((t) => (
                <div key={t.label} className="rounded-2xl p-5 border border-white/6 relative" style={{ background: 'rgba(17,24,39,0.85)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-b border-white/6" style={{ color: AC }}>{t.label}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{t.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 10  KEYWORD TARGETING ════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <SectionLabel AC={AC}>Keyword Targeting</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
              Searches We Target for {industry.name} Clients
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Every keyword below represents real buyer intent. We don&apos;t chase vanity traffic — we rank for searches that convert.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {industry.keywords.map((kw) => (
              <span key={kw}
                className="px-4 py-2 rounded-xl border border-white/8 text-sm text-gray-400 font-mono hover:text-white hover:border-white/20 transition-all cursor-default"
                style={{ background: 'rgba(17,24,39,0.6)' }}>
                🔍 {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 11  CASE STUDY ════════════════════════════════════════════ */}
      {industry.caseStudy && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <SectionLabel AC={AC}>Real Results</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                A {industry.name} Client We Transformed
              </h2>
            </div>
            <div className="rounded-2xl p-8 border relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.88)', borderColor: `${AC}25` }}>
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: `radial-gradient(circle, ${AC}08 0%, transparent 70%)` }} />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                  { label: 'Client', val: industry.caseStudy.client },
                  { label: 'Location', val: industry.caseStudy.location },
                  { label: 'Before', val: industry.caseStudy.before },
                  { label: 'After', val: industry.caseStudy.after },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-bold text-white">{item.val}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/6 pt-5 flex flex-wrap gap-6">
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Business Impact</div>
                  <div className="text-base font-bold" style={{ color: AC }}>{industry.caseStudy.leads}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Timeline</div>
                  <div className="text-sm font-bold text-white">{industry.caseStudy.period}</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Highlight</div>
                  <div className="text-sm text-gray-300">✦ {industry.caseStudy.highlight}</div>
                </div>
              </div>
              {industry.caseStudy.testimonial && (
                <blockquote className="mt-6 pt-5 border-t border-white/6 text-sm text-gray-400 leading-relaxed italic">
                  &ldquo;{industry.caseStudy.testimonial}&rdquo;
                  <cite className="block mt-2 text-xs not-italic" style={{ color: AC }}>— {industry.caseStudy.client}</cite>
                </blockquote>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 12  LOCAL VS NATIONAL ════════════════════════════════════ */}
      {localVsNational && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <SectionLabel AC={AC}>Coverage</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
                Local & National {svcTitle} for {industry.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card AC={AC} highlight>
                <div className="text-lg mb-3">📍</div>
                <h3 className="text-sm font-bold text-white mb-2">Local Market Domination</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{localVsNational.local}</p>
              </Card>
              <Card AC={AC}>
                <div className="text-lg mb-3">🌎</div>
                <h3 className="text-sm font-bold text-white mb-2">National Scale & Presence</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{localVsNational.national}</p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* ══ § 13  WHY RANKSTON ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel AC={AC}>Why Rankston</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Why {industry.name} Businesses Choose Rankston
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(whyUs || [
              { icon: '🎯', title: 'Industry Specialists', desc: `We don't do generic SEO. We specialize in ${industry.name.toLowerCase()} and understand how your customers search, what they trust, and how they decide.` },
              { icon: '📊', title: 'Transparent Monthly Reports', desc: 'You see exactly what we did, what moved, and what\'s next — every single month. No jargon, no vanity metrics, no surprises.' },
              { icon: '🚫', title: 'No Lock-In Contracts', desc: 'We earn your business every month. Our work speaks for itself. Cancel anytime — though our clients rarely do.' },
              { icon: '🌎', title: 'Nationwide Coverage', desc: 'We serve clients across all 50 US states. Single location or multi-location chain — we scale with you.' },
              { icon: '⚡', title: 'Results in 60–90 Days', desc: 'Most clients see measurable keyword movement within the first 60–90 days — not the 12-month promises of slower agencies.' },
              { icon: '🤝', title: 'Dedicated Account Manager', desc: 'You have a single point of contact who knows your business, your market, and your goals — reachable by Slack, email, or call.' },
            ]).map((w) => (
              <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{w.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 14  FAQ ════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel AC={AC}>FAQ</SectionLabel>
            <h2 className="text-3xl font-extrabold font-poppins text-white">
              {svcTitle} for {industry.name} — Your Questions Answered
            </h2>
          </div>
          <div className="space-y-3">
            {industry.faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer text-sm font-semibold text-white list-none">
                  {faq.q}
                  <span className="text-gray-600 group-open:rotate-180 transition-transform duration-200 shrink-0">▾</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 15  SIBLING INDUSTRIES ═══════════════════════════════════ */}
      {siblingIndustries.length > 0 && (
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-extrabold font-poppins text-white mb-6">
              {svcTitle} for Other Industries
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {siblingIndustries.map((ind) => (
                <Link key={ind.slug} href={`/${svc.slug}/industry/${ind.slug}`}
                  className="group flex items-center gap-3 rounded-xl p-4 border border-white/6 hover:border-white/15 transition-all"
                  style={{ background: 'rgba(17,24,39,0.6)' }}>
                  <span className="text-2xl">{ind.icon}</span>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">{svcTitle}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-white/90">{ind.name} →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ § 16  CTA ════════════════════════════════════════════════════ */}
      <section className="py-14" id="contact">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-10 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg,${AC}12,rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%,${AC}15,transparent)` }} />
            <div className="text-3xl mb-3 relative">{industry.icon}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Grow Your {industry.name} Business?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">
              Free {industry.name} audit. No commitment. Results-driven strategy built for your industry.
            </p>
            <a href="mailto:support@rankston.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative"
              style={{ background: `linear-gradient(135deg,${AC},#3B82F6)` }}>
              Get My Free {industry.name} Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
