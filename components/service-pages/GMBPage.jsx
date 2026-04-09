'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#10B981';

const MAP_PACK_FACTORS = [
  { icon: '📍', factor: 'Google Business Profile', weight: 'Critical', desc: 'How complete your profile is — categories, services, photos, Q&A, and whether your name, address, and phone match exactly across the web.' },
  { icon: '⭐', factor: 'Reviews & Ratings', weight: 'Critical', desc: 'How many reviews you have, how recent they are, and whether you\'re actively responding to them. Google watches all of this.' },
  { icon: '📏', factor: 'Proximity to Searcher', weight: 'High', desc: 'How close your business location is to where the person searching is sitting. You can\'t control this, but we optimize everything else around it.' },
  { icon: '🔑', factor: 'Keyword Relevance', weight: 'High', desc: 'Whether your Google Business category, description, and the words in your reviews match what the person searched for.' },
  { icon: '🔗', factor: 'Local Citations', weight: 'Medium', desc: 'Your name, address, and phone number on other directories like Yelp and Apple Maps. Inconsistencies here hurt your ranking slowly but steadily.' },
  { icon: '🌐', factor: 'Website Authority', weight: 'Medium', desc: 'How well your actual website is set up for local SEO — location pages, schema markup, and local links all contribute.' },
];

const GBP_SERVICES = [
  { icon: '🏗️', title: 'GBP Profile Build / Rebuild', desc: 'We set up or completely overhaul your profile — categories, services, business hours, service areas, description, and photos.' },
  { icon: '📸', title: 'Photo Strategy & Upload', desc: 'We upload new photos every month across interiors, exteriors, team shots, and products. More photos means more visibility in Maps.' },
  { icon: '⭐', title: 'Review Management System', desc: 'We set up automated review request messages sent to customers after their visit. New reviews are monitored and responded to promptly.' },
  { icon: '📝', title: 'Google Posts (Weekly)', desc: 'We publish weekly posts to your Google Business Profile covering offers, updates, and events to keep the profile active and relevant.' },
  { icon: '❓', title: 'Q&A Management', desc: 'We populate your Q&A section with helpful answers and monitor it so your profile always shows accurate, useful information.' },
  { icon: '📊', title: 'GBP Insights Reporting', desc: 'Monthly report showing calls, map direction requests, website clicks, and photo views coming directly from your Google Business Profile.' },
];

const PROCESS = [
  { n: '01', title: 'Local SEO Audit', week: 'Day 1–3', desc: 'We review your Google Business Profile, check citation consistency across directories, look at where competitors rank in the Map Pack, and assess your website\'s local SEO. You get a report within 48 hours.' },
  { n: '02', title: 'GBP Optimization', week: 'Week 1', desc: 'We go through the entire profile: fix the category, write the description, add services, upload a strong set of opening photos, and fill in every field Google gives you.' },
  { n: '03', title: 'Citation Building', week: 'Week 2–4', desc: 'We submit or correct your business details across 50+ directories — Yelp, Apple Maps, Bing Places, and industry-specific sites. We also find and remove duplicates that are hurting your ranking.' },
  { n: '04', title: 'Review Generation System', week: 'Week 2–3', desc: 'We set up automated follow-up messages to customers after their visit asking for a Google review. We also give you a QR code for your counter and templates for responding to reviews.' },
  { n: '05', title: 'Local Content & On-Page', week: 'Month 2', desc: 'We create or improve location pages on your website with local keywords, schema markup, and an embedded map. Blog posts targeting local search questions are added where relevant.' },
  { n: '06', title: 'Monitor & Grow', week: 'Ongoing', desc: 'Weekly posts to your GBP, monthly rank tracking in the Map Pack, ongoing review monitoring, and citation updates as needed.' },
];

const INDUSTRIES = [
  { icon: '🦷', name: 'Dental Clinics' }, { icon: '🔨', name: 'Contractors / HVAC' },
  { icon: '🍕', name: 'Restaurants & Cafés' }, { icon: '⚖️', name: 'Law Firms' },
  { icon: '💇', name: 'Beauty & Salons' }, { icon: '🚗', name: 'Auto Repair Shops' },
  { icon: '🏠', name: 'Real Estate Agents' }, { icon: '🐾', name: 'Veterinary Clinics' },
  { icon: '🏋️', name: 'Gyms & Fitness' }, { icon: '🏥', name: 'Medical Clinics' },
  { icon: '🌿', name: 'Landscaping' }, { icon: '🔑', name: 'Property Management' },
];

const CASE_STUDIES = [
  { client: 'Smile Dental Group', industry: 'Dental', before: 'Position 8 in Map Pack', after: 'Position 1 in Map Pack', metric: 'Google Maps ranking for "dentist near me"', result: '+68 new patients/month from Google Maps', period: '4 months', color: AC },
  { client: 'PrimeHVAC Solutions', industry: 'Contractor', before: '12 reviews, 3.8★', after: '247 reviews, 4.9★', metric: 'Google Business reviews', result: 'Booked 8 weeks out from organic GMB calls', period: '6 months', color: '#3B82F6' },
  { client: 'Corner Bistro', industry: 'Restaurant', before: '180 calls/month', after: '520 calls/month', metric: 'Calls from Google Business', result: 'Weekend fully booked within 3 months', period: '3 months', color: '#F59E0B' },
];

const RANK_FACTORS_METERS = [
  { factor: 'GBP Completeness', our: 100, color: AC },
  { factor: 'Review Volume & Recency', our: 90, color: '#3B82F6' },
  { factor: 'Citation Consistency', our: 95, color: '#8B5CF6' },
  { factor: 'Local On-Page SEO', our: 85, color: '#F59E0B' },
  { factor: 'Photo & Engagement Score', our: 88, color: '#EC4899' },
];

const WHY = [
  { icon: '🗺️', title: 'Local SEO is Our Core', desc: 'Google Maps optimization isn\'t a small add-on we offer on the side. It\'s one of our core services, and we\'ve done it for dozens of local businesses across many industries.' },
  { icon: '⭐', title: 'Review Systems That Actually Work', desc: 'We set up a system that automatically asks customers for reviews after their visit — so reviews build up consistently over time without you having to remember to ask.' },
  { icon: '📸', title: 'We Upload Photos Every Month', desc: 'Profiles with lots of photos get more clicks. We handle the photo strategy and uploading every month so your profile always looks active and professional.' },
  { icon: '📊', title: 'You Can See Your Rankings Move', desc: 'We track your exact position in the Map Pack for every target keyword, every week. You\'ll clearly see how many spots you\'ve climbed and which areas are improving.' },
  { icon: '🔗', title: 'Citations Fixed Properly', desc: 'Inconsistent business information across directories quietly hurts your ranking. We clean it all up and make sure your details are correct everywhere Google checks.' },
  { icon: '📞', title: 'Every Call Tracked Back to Maps', desc: 'We set up tracking numbers so you can see exactly how many calls are coming from your Google Business Profile each month.' },
];

const FAQS = [
  { q: 'How long before I appear in the Map Pack?', a: 'With a poorly optimized profile, you should see meaningful improvements within 60–90 days. Getting into the top 3 for competitive searches usually takes 4–6 months of consistent optimization, reviews, and citation building.' },
  { q: 'What\'s the difference between GMB optimization and regular SEO?', a: 'Regular SEO is about ranking in the blue links below the map. GMB optimization is specifically about ranking in the Map Pack — the 3 businesses shown at the top with a map. They support each other, and ideally you do both.' },
  { q: 'Can you manage multiple locations?', a: 'Yes. We create and optimize a separate Google Business Profile for each location, build citations per location, and manage reviews across all of them.' },
  { q: 'Do you handle negative reviews?', a: 'Yes. We watch for new reviews daily and respond to negative ones within 24 hours with a professional, calm response that shows other potential customers you care about resolving issues.' },
  { q: 'What if my Google Business Profile keeps getting suspended?', a: 'Suspensions are usually caused by address issues, incorrect categories, or policy violations. We handle the appeal process, re-verify the listing, and fix whatever caused the problem in the first place.' },
];

export default function GMBPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.35 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(16,185,129,0.10) 0%, rgba(59,130,246,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            GMB / Google Business Optimization — Rankston
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Customers near you are<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              calling your competitor.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Every day, people nearby search &ldquo;[your service] near me&rdquo; and choose from the Map Pack — the 3 businesses at the very top. If you&apos;re not in those 3, that call goes to your competitor. We get you there.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Check My Google Ranking →
            </a>
            <a href="#gmb-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See how it works ↓
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-3 gap-4 w-full max-w-lg">
            {[{ val: '4 mo', label: 'Avg to Map Pack Top 3' }, { val: '90%', label: 'Clients Rank Top 3' }, { val: '+3.8x', label: 'Call Volume Increase' }].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: AC }}>{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating stat chips */}
        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-emerald-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          500+ Local Businesses Ranked
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-blue-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          90% Hit Map Pack Top 3
        </motion.div>
      </section>



      {/* § 2 MAP PACK FACTORS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">What Determines Your Map Pack Position?</h2><p className="text-gray-500 mt-2">Google ranks local businesses based on these 6 factors. We optimize all of them.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAP_PACK_FACTORS.map((f) => (
              <div key={f.factor} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-start justify-between mb-3"><span className="text-3xl">{f.icon}</span><span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{f.weight}</span></div>
                <h3 className="text-sm font-bold text-white mb-2">{f.factor}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 WHAT WE DO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 GMB Services Included in Every Plan</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GBP_SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">How We Get You Into the Map Pack</h2></div>
          <div className="space-y-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-center gap-4 mb-2"><span className="text-xl font-black font-poppins" style={{ color: AC }}>{step.n}</span><h3 className="text-sm font-bold text-white">{step.title}</h3><span className="ml-auto text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: `${AC}15`, color: AC }}>{step.week}</span></div>
                <p className="text-sm text-gray-500 leading-relaxed pl-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 5 INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8"><h2 className="text-3xl font-extrabold font-poppins text-white">Industries We Dominate Locally</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => <div key={ind.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><span className="text-xl">{ind.icon}</span><span className="text-sm text-gray-300 font-medium">{ind.name}</span></div>)}
          </div>
        </div>
      </section>

      {/* § 6 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Local Businesses We&apos;ve Put on the Map</h2></div>
          <div className="grid lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.industry}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-4">{cs.client}</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center"><p className="text-xs text-red-400 mb-1">Before</p><p className="text-xs font-bold text-white">{cs.before}</p></div>
                  <div className="p-3 rounded-xl border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}><p className="text-xs mb-1" style={{ color: cs.color }}>After</p><p className="text-xs font-bold text-white">{cs.after}</p></div>
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
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston for Local SEO?</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 8 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">GMB Optimization — FAQs</h2></div>
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
      <IndustriesSection serviceSlug="gmb-optimization" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(59,130,246,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready to Own the Map Pack in Your City?</h2>
            <p className="text-gray-500 text-sm mb-6">Free GMB audit — we&apos;ll show your current ranking, review gap, and exact fixes needed.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #3B82F6)` }}>
              Get Free Local SEO Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
