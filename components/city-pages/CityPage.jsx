'use client';
import { useState } from 'react';
import Link from 'next/link';
import LeadForm from '../LeadForm';
import GoogleReviews from '../GoogleReviews';
import { SEGMENTS } from '../../data/city-segments.js';
import services from '../../data/services.json';

function Stars({ n = 5 }) {
  return <span className="text-yellow-400 text-sm tracking-tight">{'★'.repeat(n)}</span>;
}
function Ck({ color }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function FAQBlock({ faqs, color }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
          <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span className="text-xl shrink-0 text-gray-600 font-light">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1">
              <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}



const WHY_US = [
  { icon: '📊', title: 'Transparent Monthly Reporting', desc: 'You get a clear report every month showing exactly what was done, what moved, and what the next 30 days look like. No fluff, no hiding bad numbers.' },
  { icon: '🎯', title: 'Strategy Built for Your Market', desc: 'We don\'t apply the same playbook to every client. Your city, your industry, and your specific competition all shape the approach we take.' },
  { icon: '📞', title: 'Real People. Fast Responses.', desc: 'You have a dedicated point of contact who knows your account. Emails get responses same business day. Calls get answered. Always.' },
  { icon: '🔒', title: 'No Long-Term Contracts', desc: 'We earn your business every month. If results aren\'t there, you can pause or cancel without penalty. We stay on retainer because we perform.' },
];

const STATS = [
  { val: '4.9★', label: 'Average client rating across 200+ businesses' },
  { val: '340%', label: 'Average increase in qualified leads after 6 months' },
  { val: '94%',  label: 'Client retention rate after the first year' },
  { val: '6yr',  label: 'Years helping US businesses grow online' },
];

const MISTAKES = [
  { icon: '❌', prob: 'Chasing vanity metrics instead of leads', fix: 'We track and optimize for one thing: qualified leads. Not impressions, not clicks, not rankings in isolation — actual inquiries from actual buyers.' },
  { icon: '❌', prob: 'Switching strategies every 90 days', fix: 'Consistency compounds. We set a clear strategy, execute it for 6–12 months, and adjust based on data — not anxiety about short-term fluctuations.' },
  { icon: '❌', prob: 'Hiring the cheapest option available', fix: 'Cheap marketing costs more in the long run: wrong decisions, wasted spend, and time lost rebuilding what didn\'t work. We price fairly for work that actually performs.' },
  { icon: '❌', prob: 'No tracking or attribution setup', fix: 'If you can\'t measure where leads come from, you can\'t make good decisions about where to invest. We set up proper attribution from day one so every decision is data-driven.' },
];

export default function CityPage({ svc, stateData, cityData, content, stateContent, nearbyCities }) {
  const AC       = svc.accentColor || '#10B981';
  const city     = cityData.city;
  const state    = stateData.state;
  const abbr     = stateData.stateAbbr;
  const { vars, meta } = content;

  const industries = meta.industries || ['Healthcare', 'Real Estate', 'Professional Services', 'Retail', 'Construction', 'Technology'];
  const IND_ICONS  = { Healthcare: '🏥', 'Real Estate': '🏠', Technology: '💻', 'Technology & SaaS': '💻', 'Financial Services': '🏦', Manufacturing: '🏭', 'Oil & Energy': '⛽', 'Restaurants': '🍕', 'Education': '📚', 'Construction': '🏗️', 'Retail': '🛍️', 'Law Firms': '⚖️', default: '🏢' };

  const WHAT_INC = stateContent?.whatIncluded || [
    { title: '🔍 Research & Strategy', items: ['Market analysis', 'Competitor research', 'Goal setting', 'KPI definition'] },
    { title: '⚙️ Core Execution', items: ['Full implementation', 'Monthly optimization', 'A/B testing', 'Performance monitoring'] },
    { title: '📊 Reporting', items: ['Monthly reports', 'Custom dashboard', 'Goal tracking', 'Quarterly reviews'] },
    { title: '🤝 Support', items: ['Dedicated account manager', 'Same-day email response', 'Monthly strategy call', 'Priority support'] },
  ];

  const PROCESS = stateContent?.process || [
    { n: '01', title: 'Free Strategy Call', desc: `We learn your ${city} business, your goals, your current situation, and your competition — then tell you honestly what we'd do and what results to expect.`, week: 'Day 1' },
    { n: '02', title: 'Onboarding & Audit', desc: `We audit your current setup — website, analytics, existing campaigns, and competitors — and identify the highest-impact opportunities specific to the ${city} market.`, week: 'Week 1' },
    { n: '03', title: 'Strategy Delivery', desc: `You receive a clear strategy document outlining exactly what we'll do, in what order, and why — before we start execution. No surprises.`, week: 'Week 1–2' },
    { n: '04', title: 'Implementation', desc: `We execute the strategy systematically, reporting every action we take. You always know what's happening and why.`, week: 'Week 2–4' },
    { n: '05', title: 'Optimize & Scale', desc: `We review performance data monthly, identify what's working, double down on it, fix what isn't, and present clear next steps.`, week: 'Month 2+' },
    { n: '06', title: 'Compound Growth', desc: `Results compound over time. Each month builds on the previous one. Most ${city} businesses see their strongest ROI in months 4–6 and beyond.`, week: 'Ongoing' },
  ];



  return (
    <>

      {/* §2 — HERO */}
      <section className="relative flex flex-col justify-center overflow-hidden" style={{ minHeight: '88vh', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 10%, ${AC}16 0%, rgba(59,130,246,0.07) 45%, transparent 75%)` }} />
        <div aria-hidden className="absolute inset-0 hero-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-600 mb-5 flex-wrap">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${svc.slug}`} className="hover:text-gray-400 transition-colors">{svc.title}</Link>
            <span>/</span>
            <Link href={`/${svc.slug}/${stateData.stateSlug}`} className="hover:text-gray-400 transition-colors">{state}</Link>
            <span>/</span>
            <span className="text-gray-400">{city}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: AC }} />
            Now Serving {city}, {abbr}
          </div>

          {/* H1 — keyword-first: "Service Services in City, State" matches title tag */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {svc.title} in{' '}
            <span style={{ color: AC }}>{city}, {state}</span>
          </h1>

          {/* Emotional hook — visual impact below the semantic H1 */}
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-4">
            {content.heroH1
              ? content.heroH1.split(city).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {city}
                      </span>
                    )}
                  </span>
                ))
              : <>{svc.title} in{' '}<span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{city}</span></>}
          </p>

          {/* First paragraph — direct keyword mention in opening line */}
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            {content.heroSub || `Looking for ${svc.title.toLowerCase()} in ${city}? Rankston helps ${city} businesses rank higher, generate more leads, and grow revenue with proven digital marketing strategies.`}
          </p>

          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <Stars />
            <span className="text-sm text-gray-400">4.9/5 from 200+ clients</span>
            <span className="text-gray-700">·</span>
            <span className="text-sm text-gray-500">Trusted by {city} businesses since 2019</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get Free {city} Strategy Call →
            </a>
            <a href="#process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 rounded-xl text-sm transition-all">
              See How It Works ↓
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: AC }}>{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §3 — AIO DIRECT ANSWER */}
      <section aria-label={`What is ${svc.title} in ${city}`} className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-white/8 p-7" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 block w-fit" style={{ background: `${AC}15`, color: AC }}>
              ⚡ Quick Answer
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
              What Does {svc.title} in {city} Actually Involve?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">{content.introP1}</p>
            <ul className="space-y-2.5">
              {WHAT_INC.slice(0, 4).map((cat) => (
                <li key={cat.title} className="flex items-start gap-3 text-sm text-gray-400">
                  <Ck color={AC} />
                  <span><strong className="text-gray-200">{cat.title.replace(/^[^\s]+ /, '')}</strong> — {cat.items.slice(0, 3).join(', ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* §4 — WHY THIS CITY / MARKET */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> {city} Market Reality
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-5 leading-tight">
                Why {city} Businesses Are Investing in {svc.title} Right Now
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">{content.introP2}</p>
              <p className="text-gray-400 leading-relaxed mb-4">{content.stateContext}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{content.introP3}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: AC }}>
                Start with a free {city} consultation →
              </a>
            </div>
            {/* Market insight cards */}
            <div className="space-y-4">
              {[
                { icon: '📍', title: `${city} Is a High-Intent Local Search Market`, desc: `Buyers in ${city} search Google before calling any business. The businesses appearing at the top of those searches capture the majority of available leads — regardless of how long they've been in business.` },
                { icon: '🏆', title: 'Being Found First Is a Competitive Advantage', desc: `In ${city}'s market, the first few results get 70%+ of all clicks. If you're not there, you're not in the conversation — no matter how good your work or service actually is.` },
                { icon: '📈', title: `${state}'s ${vars.econ} Economy Creates Real Demand`, desc: `${vars.fact}. That economic activity means consistent search volume from real buyers — and digital marketing that captures it delivers compounding returns month over month.` },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.9)' }}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §5 — WHAT'S INCLUDED */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> What's Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Everything Done For You — One Clear Monthly Fee</h2>
            <p className="text-gray-500 mt-2">No hidden costs. No upsells. Here's exactly what {city} businesses get.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_INC.map((cat) => (
              <div key={cat.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <h3 className="text-sm font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500"><Ck color={AC} />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §6 — PROCESS */}
      <section id="process" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">How We Get Results for {city} Businesses</h2>
            <p className="text-gray-500 mt-3">Clear steps. No surprises. You know exactly what's happening from day one.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-white/6" />
            <div className="space-y-5">
              {PROCESS.map((step) => (
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

      {/* §7 — LOCAL INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">We Serve Every Major {city} Industry</h2>
            <p className="text-gray-500 mt-2">Same proven approach. Adapted for your specific market and competitive landscape.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.slice(0, 6).map((ind) => (
              <div key={ind} className="flex items-center gap-4 rounded-xl p-5 border border-white/6 hover:border-white/12 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl shrink-0">{IND_ICONS[ind] || IND_ICONS.default}</span>
                <div>
                  <p className="text-sm font-bold text-white">{ind}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{city} {ind.toLowerCase()} businesses</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §8 — COMMON MISTAKES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Mistakes to Avoid
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">4 Mistakes {city} Businesses Make With Digital Marketing</h2>
            <p className="text-gray-500 mt-2">We see these patterns constantly. Every one is avoidable with the right approach.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {MISTAKES.map((m) => (
              <div key={m.prob} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-xl shrink-0">{m.icon}</span>
                  <p className="text-sm font-bold text-red-400">{m.prob}</p>
                </div>
                <div className="flex items-start gap-2 pl-8">
                  <Ck color={AC} />
                  <p className="text-sm text-gray-500 leading-relaxed">{m.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §9 — WHY RANKSTON */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Why Rankston
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">What Makes Us Different</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We work with a limited number of {city} businesses each month to maintain quality. Here's what you get.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, ${AC}, #3B82F6)` }} />
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* §10 — GOOGLE REVIEWS */}
      <GoogleReviews variant={cityData.zipcodes?.length || 3} accentColor={AC} location={city} count={6} />


      {/* §13 — NEARBY CITIES (Internal Linking) */}
      {nearbyCities && nearbyCities.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
                <span className="w-4 h-px" style={{ background: AC }} /> Also Serving
              </span>
              <h2 className="text-2xl font-extrabold font-poppins text-white">{svc.title} in Nearby {state} Cities</h2>
              <p className="text-gray-500 mt-1 text-sm">We serve businesses across all of {state}. See if we cover your area.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {nearbyCities.map((c) => (
                <Link key={c.citySlug} href={`/${svc.slug}/${stateData.stateSlug}/${c.citySlug}`}
                  className="group rounded-xl p-4 border border-white/6 hover:border-white/20 transition-all flex items-center justify-between"
                  style={{ background: 'rgba(17,24,39,0.7)' }}>
                  <div>
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{svc.title} in {c.city}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{c.zipcodes.slice(0, 2).join(' · ')}</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-300 transition-colors">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href={`/${svc.slug}/${stateData.stateSlug}`} className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: AC }}>
                View all {state} cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* §14 — KEYWORD CLUSTER SECTION
          Covers intent modifiers naturally within readable, useful content:
          H2-1: "best / top-rated / leading"  → best [service] in [city]
          H2-2: "affordable / cheap / budget" → affordable [service] [city] cost
          These are semantic SEO sections — NOT keyword-stuffed text.
          Each section is genuinely useful to a business owner comparing agencies.
      */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">

            {/* — Best / Top-Rated H2 block — */}
            <div className="rounded-3xl p-8 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.92)' }}>
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, ${AC}, #3B82F6)` }} />
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: AC }}>
                <span className="w-3 h-px" style={{ background: AC }} /> Top Rated
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-poppins text-white leading-snug mb-4">
                The Best {svc.title} Company in {city}? Here's What to Look For
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                The top-rated {svc.title.toLowerCase()} agencies in {city} share three things in common: they explain their strategy in plain English before you sign anything, they tie every metric to business outcomes (leads and revenue — not just rankings), and they don't lock you into long-term contracts because they're confident in their results.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: '✓', text: `Transparent process — you know exactly what's being done each month` },
                  { icon: '✓', text: `Results measured in leads and revenue, not vanity metrics` },
                  { icon: '✓', text: `Month-to-month terms — no 12-month lock-in` },
                  { icon: '✓', text: `Dedicated ${city} account manager, same-day responses` },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-0.5 text-xs font-bold shrink-0" style={{ color: AC }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: AC }}>
                See if We're the Right Fit →
              </a>
            </div>

            {/* — Affordable / Cost H2 block — */}
            <div className="rounded-3xl p-8 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.92)' }}>
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, #3B82F6, ${AC})` }} />
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-4 text-blue-400">
                <span className="w-3 h-px bg-blue-400" /> Pricing
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-poppins text-white leading-snug mb-4">
                Affordable {svc.title} in {city} — What Does It Actually Cost?
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Budget-friendly {svc.title.toLowerCase()} doesn't mean cheap — it means transparent pricing, clear deliverables, and ROI you can measure. Many {city} businesses overpay for agencies that report on impressions and rankings but can't connect their work to actual leads. We price fairly for work that performs.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Starter — Local Focus', price: 'From $499/mo', desc: 'Essential work, measurable results' },
                  { label: 'Growth — Compete & Win', price: 'From $999/mo', desc: 'Full execution for competitive markets' },
                  { label: 'Authority — Market Leader', price: 'From $1,999/mo', desc: 'Scale dominance across all channels' },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3 border border-white/6" style={{ background: 'rgba(3,7,18,0.5)' }}>
                    <div>
                      <p className="text-xs font-bold text-gray-200">{tier.label}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{tier.desc}</p>
                    </div>
                    <span className="text-sm font-extrabold shrink-0" style={{ color: AC }}>{tier.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-700 mt-4">No long-term contracts. Cancel any month. Free strategy call to start.</p>
            </div>

          </div>
        </div>
      </section>

      {/* §15 — FAQs */}
      <section id="faqs" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> FAQs
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-white">{svc.title} in {city} — Common Questions</h2>
            <p className="text-gray-500 mt-3">Honest answers. No marketing speak. Questions we hear from {city} business owners every day.</p>
          </div>
          <FAQBlock faqs={content.faqs} color={AC} />
        </div>
      </section>


      {/* §15 — FINAL CTA + LEAD FORM */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center mb-10">
          <div className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${AC}15, transparent)` }} />

            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2 relative">
              Ready to Grow Your {city} Business?
            </h2>
            <p className="text-gray-500 text-sm mb-6 relative">
              Book a free strategy call. We'll review your current situation, tell you exactly what we'd do, and give you realistic expectations — no pressure, no obligations.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity relative"
              style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Book My Free {city} Strategy Call →
            </a>
            <p className="text-xs text-gray-700 mt-3 relative">No obligation. No credit card. Just honest advice for your {city} business.</p>
          </div>
        </div>
        <div id="contact" className="max-w-3xl mx-auto px-4">
          <LeadForm />
        </div>
      </section>

      {/* ── SEGMENT SUB-PAGES — internal links to long-tail sub-pages */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold font-poppins text-white mb-2">
            {svc.title} by Business Type in {city}
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            We offer specialized {svc.title.toLowerCase()} strategies for every type of {city} business.
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SEGMENTS.map((seg) => (
              <Link key={seg.slug}
                href={`/${svc.slug}/${stateData.stateSlug}/${cityData.citySlug}/${seg.slug}`}
                className="flex flex-col items-center gap-2 rounded-xl p-4 border border-white/6 hover:border-white/15 transition-all text-center group"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-2xl">{seg.icon}</span>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">{seg.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROSS-SERVICE LINKS */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-extrabold font-poppins text-white mb-4">
            More Digital Marketing Services in {city}
          </h2>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => s.slug !== svc.slug && (
              <Link key={s.slug}
                href={`/${s.slug}/${stateData.stateSlug}/${cityData.citySlug}`}
                className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                style={{ background: 'rgba(17,24,39,0.85)' }}>
                {s.shortTitle || s.title} in {city} →
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
