'use client';
import { useState } from 'react';
import Link from 'next/link';
import LeadForm from '../LeadForm';
import GoogleReviews from '../GoogleReviews';
import services from '../../data/services.json';
import locations from '../../data/locations.json';

/* ─── Helpers ────────────────────────────────────────────────── */
function Stars({ n = 5 }) {
  return <span className="text-yellow-400 text-sm tracking-tight">{'★'.repeat(n)}</span>;
}
function Check({ color }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function X({ others }) {
  return <span className="text-xs text-gray-600">{others || 'No'}</span>;
}

/* ─── FAQ (client component) ─────────────────────────────────── */
function FAQSection({ faqs, color }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
          <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
            <span className="text-xl shrink-0 text-gray-600 font-light">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1">
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────────── */
export default function StateHubPage({ svc, stateData, content }) {
  const AC = svc.accentColor || '#10B981';
  const cities = stateData.cities || [];
  const hasFallback = !content;

  if (hasFallback) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-2xl font-bold mb-2">{svc.title} in {stateData.state}</p>
          <p className="text-gray-500">Content coming soon.</p>
        </div>
      </section>
    );
  }

  return (
    <>


      {/* ══ §1 HERO ═══════════════════════════════════════════════════ */}
      <section className="relative flex flex-col justify-center overflow-hidden" style={{ minHeight: '90vh', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 10%, ${AC}16 0%, rgba(59,130,246,0.07) 45%, transparent 75%)` }} />
        <div aria-hidden className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-600 mb-5 flex-wrap">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${svc.slug}`} className="hover:text-gray-400 transition-colors">{svc.title}</Link>
            <span>/</span>
            <span className="text-gray-400">{stateData.state}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: AC }} />
            Now Serving {cities.length}+ Cities in {stateData.stateAbbr}
          </div>

          {/* H1 — keyword-first to match title tag: "Service in State | Rankston" */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {svc.title} in{' '}
            <span style={{ color: AC }}>{stateData.state}</span>
          </h1>

          {/* Visual hook — large emotional headline comes below the semantic H1 */}
          <p className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-4">
            {content.heroH1
              ? content.heroH1.split(stateData.state).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {stateData.state}
                      </span>
                    )}
                  </span>
                ))
              : <>{svc.title} in{' '}<span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stateData.state}</span></>}
          </p>

          <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">{svc.title} &middot; {stateData.state} ({cities.length}+ Cities)</p>

          {/* First paragraph — opens with direct keyword mention for on-page SEO */}
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            {content.heroSub || `Looking for ${svc.title.toLowerCase()} in ${stateData.state}? Rankston helps businesses across ${stateData.state} — from ${cities[0]?.city || 'major cities'} to smaller markets — grow with proven digital marketing strategies.`}
          </p>


          {/* Trust proof line */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <Stars />
            <span className="text-sm text-gray-400">4.9/5 from 200+ clients</span>
            <span className="text-gray-700">·</span>
            <span className="text-sm text-gray-500">Trusted by {stateData.state} businesses since 2019</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get Free {stateData.stateAbbr} Strategy Call →
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 rounded-xl text-sm transition-all">
              See How It Works ↓
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {content.heroStats.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: AC }}>{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AIO DIRECT ANSWER BLOCK ══════════════════════════════════
          Structured for AI Overview, GEO & semantic readability.
          First 2–3 lines directly answer the user's intent.
          AI models (Google AIO, ChatGPT, Perplexity) extract this.
      ═══════════════════════════════════════════════════════════════ */}
      <section aria-label={`What is ${svc.title} in ${stateData.state}`} className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-white/8 p-7" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: `${AC}15`, color: AC }}>
                ⚡ Quick Summary
              </span>
              <span className="text-xs text-gray-600">What {svc.title} in {stateData.state} means for your business</span>
            </div>
            {/* Direct answer — AI-readable, question-intent format */}
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
              What Does {svc.title} in {stateData.state} Actually Involve?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              {content.introP1}
            </p>
            <ul className="space-y-2.5 mb-5">
              {(content.whatIncluded || []).slice(0, 4).map((cat) => (
                <li key={cat.title} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="shrink-0 mt-0.5 w-4 h-4">
                    <svg fill="none" viewBox="0 0 24 24" stroke={AC} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-gray-200">{cat.title.replace(/^[^\s]+ /, '')}</strong> — {cat.items.slice(0, 3).join(', ')}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 leading-relaxed">
              {content.introP2}
            </p>
          </div>
        </div>
      </section>

      {/* ══ §2 STATE OVERVIEW ════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> {stateData.state} Market Reality
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-5 leading-tight">
                Why {stateData.state} Businesses Are Investing in {svc.title} Right Now
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">{content.introP1}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{content.introP2}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: AC }}>
                Start with a free {stateData.stateAbbr} audit →
              </a>
            </div>
            <div className="space-y-4">
              {content.marketInsights.map((insight) => (
                <div key={insight.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">{insight.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{insight.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{insight.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ §3 WHY THIS SERVICE ═══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Why Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              3 Reasons {stateData.state} Businesses Can't Afford to Wait
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Every month you delay is a month your competitors pull further ahead.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {content.whyService.map((item) => (
              <div key={item.title} className="rounded-2xl p-7 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, ${AC}, #3B82F6)` }} />
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §4 WHAT'S INCLUDED ════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> What's Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Everything Done For You — One Monthly Fee
            </h2>
            <p className="text-gray-500 mt-2">No hidden costs. No upsells. Here's exactly what {stateData.state} businesses get every month.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.whatIncluded.map((cat) => (
              <div key={cat.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <h3 className="text-sm font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <Check color={AC} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §5 PROCESS ════════════════════════════════════════════════ */}
      <section id="process" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              How We Get Results for {stateData.state} Businesses
            </h2>
            <p className="text-gray-500 mt-3">No guesswork. No surprises. Here's exactly what happens from day one.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-white/6" />
            <div className="space-y-5">
              {content.process.map((step) => (
                <div key={step.n} className="relative grid md:grid-cols-12 gap-4 group">
                  <div className="hidden md:flex md:col-span-1 items-start justify-center pt-1">
                    <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-base font-black font-poppins border border-white/8"
                      style={{ background: 'rgba(17,24,39,0.97)', color: AC }}>
                      {step.n}
                    </div>
                  </div>
                  <div className="md:col-span-11 rounded-2xl p-6 border border-white/6 group-hover:border-white/10 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{step.week}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ §6 MARKET STATS ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Why {svc.title} Matters in {stateData.state}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {content.marketStats.map((stat, i) => {
              const colors = [AC, '#3B82F6', '#8B5CF6', '#F59E0B'];
              const c = colors[i % 4];
              return (
                <div key={stat.label} className="rounded-2xl p-7 border border-white/6 text-center relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: c }} />
                  <div className="text-3xl sm:text-4xl font-extrabold font-poppins mb-2" style={{ color: c }}>{stat.val}</div>
                  <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ §7 PAIN POINTS ════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Problems We Fix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Sound Familiar? These Are the {stateData.state} Challenges We Solve Every Day.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {content.painPoints.map((pt) => (
              <div key={pt.title} className="rounded-2xl p-6 border border-white/6 flex items-start gap-4" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <span className="text-3xl shrink-0">{pt.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §8 INDUSTRIES ════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              We Serve Every Major {stateData.state} Industry
            </h2>
            <p className="text-gray-500 mt-2">Same proven approach. Tailored for your specific market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-4 rounded-xl p-5 border border-white/6 hover:border-white/12 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl shrink-0">{ind.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{ind.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §9 RESULTS / CASE STUDIES ════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              Businesses Just Like Yours. Results That Speak for Themselves.
            </h2>
            <p className="text-gray-500 mt-2">Not made-up numbers. Not stock photo clients. Real campaigns, real outcomes.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {content.caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-7 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: cs.color }}>{cs.client}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl p-4 bg-red-500/5 border border-red-500/15 text-center">
                    <p className="text-xs text-red-400 mb-1">Before</p>
                    <p className="text-lg font-extrabold text-white font-poppins">{cs.before}</p>
                  </div>
                  <div className="rounded-xl p-4 border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}>
                    <p className="text-xs mb-1" style={{ color: cs.color }}>After</p>
                    <p className="text-lg font-extrabold text-white font-poppins">{cs.after}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{cs.period} · {svc.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══ §11 WHY RANKSTON ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Why Rankston
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              What Makes Us Different From Every Other Agency
            </h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              {content.whyUs.map((item) => (
                <div key={item.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider border-b border-white/6 px-5 py-3">
                  <span className="text-gray-500">Feature</span>
                  <span className="text-center" style={{ color: AC }}>Rankston</span>
                  <span className="text-center text-gray-600">Others</span>
                </div>
                {content.comparison.map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-3 items-center px-5 py-3 text-xs border-b border-white/4 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                    <span className="text-gray-400 pr-2">{row.feature}</span>
                    <span className="flex justify-center">
                      <span className="flex items-center gap-1.5 font-semibold" style={{ color: AC }}>
                        <Check color={AC} /> Yes
                      </span>
                    </span>
                    <span className="flex justify-center">
                      <X others={row.others} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══ §13 GOOGLE REVIEWS ═══════════════════════════════════════ */}
      <GoogleReviews variant={cities.length} accentColor={AC} location={stateData.state} count={6} />

      {/* ══ §14 CITIES GRID ═══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              {cities.length} Cities Across {stateData.state} — We Serve Them All
            </h2>
            <p className="text-gray-500 mt-2">Click your city for a dedicated local strategy page.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c) => (
              <Link key={c.citySlug} href={`/${svc.slug}/${stateData.stateSlug}/${c.citySlug}`}
                className="group rounded-2xl p-5 border border-white/6 hover:border-white/20 transition-all"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-white/90">{svc.title} in {c.city}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{c.zipcodes.slice(0, 3).join(' · ')}{c.zipcodes.length > 3 ? ' …' : ''}</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-300 transition-colors text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §15 COMMON MISTAKES ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Mistakes to Avoid
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
              4 Costly Mistakes {stateData.state} Businesses Make
            </h2>
            <p className="text-gray-500 mt-2">We see these same mistakes constantly — and every one of them is avoidable.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {content.mistakes.map((m) => (
              <div key={m.mistake} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-xl shrink-0">{m.icon}</span>
                  <p className="text-sm font-bold text-red-400">{m.mistake}</p>
                </div>
                <div className="flex items-start gap-2 pl-8">
                  <Check color={AC} />
                  <p className="text-sm text-gray-500 leading-relaxed">{m.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §16 FAQs ══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> FAQs
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">
              {svc.title} in {stateData.state} — Honest Answers
            </h2>
            <p className="text-gray-500 mt-3">No marketing speak. Just straight answers to the questions we get every day.</p>
          </div>
          <FAQSection faqs={content.faqs} color={AC} />
        </div>
      </section>

      {/* ══ §17 FINAL CTA + LEAD FORM ═════════════════════════════════ */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <div className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${AC}15, transparent)` }} />

            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Grow Your {stateData.state} Business?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">{content.finalCtaLine}</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Book My Free {stateData.stateAbbr} Strategy Call →
            </a>
            <p className="text-xs text-gray-700 mt-3 relative">No obligation. No credit card. Just honest advice.</p>
          </div>
        </div>

        <div id="contact" className="max-w-3xl mx-auto px-4">
          <LeadForm />
        </div>
      </section>

      {/* ══ §18 CROSS-SERVICE LINKS ═══════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-extrabold font-poppins text-white mb-4">
            More Digital Marketing Services in {stateData.state}
          </h2>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => s.slug !== svc.slug && (
              <Link key={s.slug}
                href={`/${s.slug}/${stateData.stateSlug}`}
                className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                {s.shortTitle || s.title} in {stateData.state} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §19 NEARBY STATES ═════════════════════════════════════════ */}
      <section className="py-8 pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-extrabold font-poppins text-white mb-4">
            {svc.title} in Nearby States
          </h2>
          <div className="flex flex-wrap gap-2">
            {locations
              .filter((s) => s.stateSlug !== stateData.stateSlug)
              .slice(0, 12)
              .map((s) => (
                <Link key={s.stateSlug}
                  href={`/${svc.slug}/${s.stateSlug}`}
                  className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  style={{ background: 'rgba(17,24,39,0.85)' }}>
                  {s.state} →
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
