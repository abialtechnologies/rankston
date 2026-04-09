'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#F59E0B';

const PLATFORMS = [
  { icon: '🇬', title: 'Google Ads', subs: ['Search Campaigns', 'Performance Max', 'Shopping Ads', 'Display Network', 'YouTube Ads'], color: '#4285F4' },
  { icon: '📘', title: 'Meta Ads', subs: ['Facebook Feed', 'Instagram Feed & Reels', 'Messenger Ads', 'Audience Network', 'WhatsApp Ads'], color: '#0080FB' },
  { icon: '🎵', title: 'TikTok Ads', subs: ['In-Feed Video Ads', 'TopView Placements', 'Branded Hashtag', 'Spark Ads'], color: '#FF0050' },
  { icon: '💼', title: 'LinkedIn Ads', subs: ['Sponsored Content', 'InMail Campaigns', 'Lead Gen Forms', 'Dynamic Ads'], color: '#0A66C2' },
  { icon: '📌', title: 'Pinterest & Twitter', subs: ['Shopping Pins', 'Promoted Tweets', 'Keyword Targeting'], color: '#E60023' },
  { icon: '🛒', title: 'Amazon & Walmart', subs: ['Sponsored Products', 'Sponsored Brands', 'DSP Campaigns'], color: '#FF9900' },
];

const PROBLEMS = [
  { icon: '🔥', problem: 'Burning Budget on Wrong Keywords', our: 'Negative keyword lists built before campaign goes live. We kill waste from day one.' },
  { icon: '📉', problem: 'High CPC, Low Conversion Rate', our: 'Landing page audit + CRO improvements before we spend a single dollar on traffic.' },
  { icon: '🎯', problem: 'Broad Targeting Eating Budget', our: 'Laser-focused audience segmentation based on intent, demographics, and remarketing data.' },
  { icon: '🤷', problem: 'Can\'t Track What\'s Actually Converting', our: 'Full GA4 + Google Tag Manager setup with conversion tracking for every meaningful action.' },
  { icon: '📊', problem: 'Agency Sends Reports You Can\'t Read', our: 'Real-time dashboard + plain-English monthly report showing exact ROAS and revenue attributed.' },
  { icon: '💸', problem: 'Paying 20% of Spend as Agency Fee', our: 'Flat monthly management fee — not a percentage. We\'re incentivized to lower your CPC, not raise spend.' },
];

const PROCESS = [
  { n: '01', title: 'Campaign Audit', week: 'Day 1–3', desc: 'We go through your existing account (or start fresh if needed) and look at where money is being wasted, which keywords have poor quality scores, and how the account is structured.' },
  { n: '02', title: 'Conversion Setup', week: 'Day 3–5', desc: 'Before any ads go live, we make sure tracking is set up properly. GA4, GTM, and pixels configured so every form, call, and purchase is tracked accurately.' },
  { n: '03', title: 'Strategy & Ad Copy', week: 'Day 5–7', desc: 'We research keywords, define your target audience, and write 15–20 ad copy variants. Different headlines are tested against each other from the first day the campaign goes live.' },
  { n: '04', title: 'Launch & Monitor', week: 'Week 2', desc: 'Campaigns go live and we watch them closely. We check spend, click-through rates, and conversions daily in the first two weeks and make adjustments every 48 hours.' },
  { n: '05', title: 'Optimize & Scale', week: 'Month 2–3', desc: 'We pause what\'s not working and put more budget behind what is. Remarketing campaigns are added. Bidding is shifted from manual to target ROAS as data builds up.' },
  { n: '06', title: 'Report & Refine', week: 'Ongoing', desc: 'Monthly report in plain English covering your spend, clicks, conversions, cost per lead, and ROAS. Every number compared to the previous month so you can clearly see progress.' },
];

const KPI_BENCHMARKS = [
  { label: 'Average ROAS Achieved', val: '4.8x', desc: 'Revenue per $1 of ad spend', color: AC },
  { label: 'Avg CPC Reduction', val: '38%', desc: 'Lower cost per click vs. prior agency', color: '#10B981' },
  { label: 'Avg Conversion Rate Lift', val: '+124%', desc: 'After landing page optimization', color: '#6366F1' },
  { label: 'Avg Wasted Spend Eliminated', val: '$1,800/mo', desc: 'Saved per account via negative keywords', color: '#F43F5E' },
];

const AUDIT_CHECKLIST = [
  { cat: 'Account Structure', color: AC, items: ['Campaign → Ad Group → Keyword hierarchy', 'Keyword match type optimization', 'Quality Score above 7 on main terms', 'Ad schedule configured for peak hours', 'Location targeting precision', 'Device bid adjustments set'] },
  { cat: 'Bidding & Budget', color: '#10B981', items: ['Budget allocated by ROI priority', 'Target ROAS / Target CPA configured', 'Shared budgets audited', 'Impression share vs. budget analysis', 'Time-of-day bid modifiers', 'Seasonal adjustment planning'] },
  { cat: 'Ad Copy & Creative', color: '#6366F1', items: ['RSA with 15 headlines + 4 descriptions', 'Keyword in headline for relevance', 'CTA clarity and urgency', 'Ad extensions fully configured', 'A/B test variants running', 'Landing page message match'] },
  { cat: 'Tracking & Analytics', color: '#F43F5E', items: ['GA4 conversion events firing', 'Google Ads + GA4 linked', 'Call tracking configured', 'Enhanced conversions active', 'GTM publishing verified', 'Attribution model set'] },
];

const CASE_STUDIES = [
  { client: 'Texas Legal Partners', industry: 'Law Firm', before: '$280 CPA', after: '$61 CPA', metric: 'Cost per qualified lead', result: '+$890K in signed cases (4 months)', period: '4 months', color: AC },
  { client: 'PetCare Express', industry: 'eCommerce', before: '1.8x ROAS', after: '6.2x ROAS', metric: 'Google Shopping', result: '$1.4M additional revenue', period: '6 months', color: '#10B981' },
  { client: 'ClearView HVAC', industry: 'Home Services', before: '14 leads/mo', after: '119 leads/mo', metric: 'Inbound phone + form leads', result: '450% lead volume increase', period: '3 months', color: '#6366F1' },
];

const WHY = [
  { icon: '📊', title: 'Flat Fee — Not % of Spend', desc: 'We charge a fixed monthly fee, not a percentage of your ad budget. That means we have no reason to spend more than needed — we\'re focused on getting your costs down.' },
  { icon: '🎯', title: 'Landing Pages Reviewed Before Launch', desc: 'We look at your landing page before spending a cent on ads. Sending paid traffic to a weak page is one of the most common ways PPC campaigns fail.' },
  { icon: '📞', title: 'Call Tracking on Every Campaign', desc: 'You\'ll know exactly which keyword and ad drove each phone call. Not just clicks — actual conversations tracked from start to sale.' },
  { icon: '🔄', title: 'Checked Every 48 Hours in Month 1', desc: 'In the first month, we review every active campaign every two days. Not once a week. We catch problems early and fix them fast.' },
  { icon: '🌍', title: 'All 6 Major Platforms', desc: 'Google, Meta, TikTok, LinkedIn, Pinterest, and Amazon — managed under one strategy. No platform works in isolation, so we don\'t treat them that way.' },
  { icon: '📋', title: 'Real-Time Dashboard', desc: 'You have access to your live campaign data anytime. Check your spend, ROAS, and conversions whenever you want without waiting for a report.' },
];

const FAQS = [
  { q: 'What is a good ROAS and how do you track it?', a: 'ROAS (Return on Ad Spend) measures revenue generated per dollar spent. A 4x ROAS means $4 revenue for every $1 ad spend. We configure GA4 conversion tracking and revenue values so ROAS is tracked precisely — not estimated.' },
  { q: 'How much should I spend on ads?', a: 'We recommend starting with a minimum of $1,500–$2,000/month in ad spend for meaningful data. Most competitive industries need $3,000–$5,000/month. Below $1,000/month, the learning algorithm doesn\'t have enough data to optimize efficiently.' },
  { q: 'How long before PPC generates results?', a: 'Unlike SEO, PPC can drive traffic from day one. However, the first 2–4 weeks are a data-collection phase where campaigns learn and we refine. Significant ROAS improvements typically happen in months 2–3.' },
  { q: 'Do you handle landing page creation?', a: 'Yes. We offer standalone landing page design and development as an add-on. A mismatched landing page is the most common reason PPC campaigns fail — we fix this before ads launch.' },
  { q: 'Can you take over an existing Google Ads account?', a: 'Yes. We begin with a full account audit to identify wasted spend, poor quality scores, and structural issues. We preserve campaign history while rebuilding the account architecture.' },
  { q: 'What platforms do you manage?', a: 'Google Ads, Meta (Facebook/Instagram), TikTok Ads, LinkedIn Ads, Pinterest, Amazon Ads, and Walmart Ads. We recommend the right mix based on your audience and industry.' },
];

export default function PPCPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.28 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(245,158,11,0.10) 0%, rgba(249,115,22,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            PPC Advertising — Rankston Worldwide
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            You&apos;re probably wasting{' '}
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #F97316 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              30% of your ad budget.
            </span>
            <br />Let&apos;s fix that.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Most ad campaigns bleed money on the wrong keywords, wrong audiences, and weak landing pages. We audit your account first, fix the leaks, then scale what actually works. Flat fee — never a percentage of your spend.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #F97316)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Find My Wasted Spend →
            </a>
            <a href="#ppc-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See how we fix it ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {KPI_BENCHMARKS.map((k) => (
              <div key={k.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: k.color }}>{k.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{k.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-amber-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          4.8x Avg ROAS Achieved
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-emerald-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Flat Fee — Never % of Spend
        </motion.div>
      </section>



      {/* § 2 ALL PROBLEMS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 PPC Problems We Fix Before Spending a Cent</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROBLEMS.map((p) => (
              <div key={p.problem} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <p className="text-xs font-bold text-red-400 mb-2">❌ {p.problem}</p>
                <p className="text-xs text-gray-400 leading-relaxed">✅ {p.our}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 PLATFORMS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Ad Platforms. One Unified Strategy.</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORMS.map((p) => (
              <div key={p.title} className="rounded-2xl p-5 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: p.color }} />
                <h3 className="text-sm font-bold text-white mb-3">{p.title}</h3>
                <ul className="space-y-1">{p.subs.map((s) => <li key={s} className="text-xs text-gray-500 flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: p.color }} />{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">From Audit to ROAS in 14 Days</h2></div>
          <div className="space-y-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xl font-black font-poppins" style={{ color: AC }}>{step.n}</span>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <span className="ml-auto text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{step.week}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 5 AUDIT CHECKLIST */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Our 80-Point PPC Audit — Every Account Gets This</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIT_CHECKLIST.map((cat) => (
              <div key={cat.cat} className="rounded-2xl p-5 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cat.color }} />
                <h3 className="text-sm font-bold mb-4" style={{ color: cat.color }}>{cat.cat}</h3>
                <ul className="space-y-2">{cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                    <CheckCircleIcon className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: cat.color, opacity: 0.7 }} />{item}
                  </li>
                ))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 6 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Ads That Generated Real Revenue</h2></div>
          <div className="grid lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.industry}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-4">{cs.client}</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center"><p className="text-xs text-red-400 mb-1">Before</p><p className="text-base font-extrabold text-white">{cs.before}</p></div>
                  <div className="p-3 rounded-xl border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}><p className="text-xs mb-1" style={{ color: cs.color }}>After</p><p className="text-base font-extrabold text-white">{cs.after}</p></div>
                </div>
                <p className="text-xs text-gray-600 mb-1">{cs.metric}</p>
                <p className="text-sm font-bold" style={{ color: cs.color }}>{cs.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 7 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Our PPC Beats Every Other Agency</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 8 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">PPC Questions, Answered Plainly</h2></div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5 pt-1"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <IndustriesSection serviceSlug="ppc-advertising" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(249,115,22,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Stop Burning Budget. Start Generating ROAS.</h2>
            <p className="text-gray-500 text-sm mb-6">Free PPC audit. See exactly where your money is being wasted — within 24 hours.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #F97316)` }}>
              Get Free Ads Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
