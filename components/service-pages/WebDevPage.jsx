'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#3B82F6';

const WEB_TYPES = [
  { icon: '🏢', title: 'Corporate Websites', desc: 'Authority-first multi-page sites for B2B companies, law firms, and enterprise brands.', tags: ['Next.js', 'CMS', 'Custom Design'] },
  { icon: '🛒', title: 'eCommerce Stores', desc: 'Revenue-optimized online stores with cart, checkout, payments, and inventory management.', tags: ['Shopify', 'WooCommerce', 'Custom'] },
  { icon: '📋', title: 'Landing Pages', desc: 'Conversion-optimized single-page sites for campaigns, lead gen, and product launches.', tags: ['A/B Tested', 'CRO-Focused'] },
  { icon: '🏪', title: 'Local Business Sites', desc: 'WordPress & custom sites for restaurants, clinics, contractors, and local service businesses.', tags: ['WordPress', 'SEO-Ready', 'GMB Linked'] },
  { icon: '🚀', title: 'SaaS & App Portals', desc: 'Feature-rich web apps with auth, dashboards, APIs, and third-party integrations.', tags: ['Next.js', 'React', 'Supabase'] },
  { icon: '📰', title: 'Blogs & Media Sites', desc: 'Content-heavy SEO-optimized publishing platforms with categories, authors, and schema.', tags: ['CMS', 'SEO', 'Schema'] },
];

const TECH = [
  { name: 'Next.js', color: '#fff', cat: 'Frontend' },
  { name: 'React', color: '#61DAFB', cat: 'Frontend' },
  { name: 'Tailwind CSS', color: '#38BDF8', cat: 'Frontend' },
  { name: 'TypeScript', color: '#3178C6', cat: 'Frontend' },
  { name: 'Node.js', color: '#68A063', cat: 'Backend' },
  { name: 'Supabase', color: '#3ECF8E', cat: 'Backend' },
  { name: 'PostgreSQL', color: '#336791', cat: 'Backend' },
  { name: 'Prisma', color: '#5A67D8', cat: 'Backend' },
  { name: 'WordPress', color: '#21759B', cat: 'CMS' },
  { name: 'Shopify', color: '#96BF48', cat: 'eCommerce' },
  { name: 'WooCommerce', color: '#7F54B3', cat: 'eCommerce' },
  { name: 'Stripe', color: '#6772E5', cat: 'Payments' },
];

const PROCESS = [
  { n: '01', title: 'Discovery & Scope', week: 'Day 1–3', desc: 'We start by understanding your goals, audience, and what the site needs to do. You get a sitemap, wireframe outline, and feature list to review and confirm before we touch any code.' },
  { n: '02', title: 'UI Design & Prototype', week: 'Day 4–10', desc: 'We design every page in Figma before development starts. You see exactly how the site will look and feel, and you approve each screen before we write a single line of code.' },
  { n: '03', title: 'Development Sprint', week: 'Week 2–4', desc: 'We build on a staging link so you can check the real site as it\'s being built. No waiting until the end to see what you\'re getting.' },
  { n: '04', title: 'Content Integration', week: 'Week 3–4', desc: 'Your content, images, and branding go in. SEO tags, schema markup, and image compression are added at this stage — not as an afterthought once the site is live.' },
  { n: '05', title: 'QA & Performance', week: 'Week 4–5', desc: 'We test the site on real phones, tablets, and browsers. We run a Lighthouse check and aim for 90+ across Performance, SEO, and Accessibility before launch.' },
  { n: '06', title: 'Launch & Handoff', week: 'Week 5–6', desc: 'We handle the DNS, SSL, and going live. We monitor the site for 48 hours after launch and give you a full video walkthrough so you know how to manage everything.' },
];

const PERFORMANCE = [
  { metric: 'Lighthouse Performance', val: '95+', unit: '/ 100', color: AC, desc: 'Average score across all Rankston builds' },
  { metric: 'LCP (Largest Contentful Paint)', val: '< 1.2s', unit: '', color: '#10B981', desc: 'Core Web Vital threshold for "Good"' },
  { metric: 'CLS (Cumulative Layout Shift)', val: '0.02', unit: '', color: '#8B5CF6', desc: 'Nearly zero layout shift on load' },
  { metric: 'Time to First Byte (TTFB)', val: '< 200ms', unit: '', color: '#F59E0B', desc: 'Server response optimized globally' },
];

const INCLUDED = [
  { cat: 'Design & UX', color: AC, items: ['Figma mockups for every page', 'Mobile-first responsive layout', 'Micro-animations & hover effects', 'Dark/light mode support', 'Accessibility (WCAG 2.1 AA)', 'Brand style guide'] },
  { cat: 'Development', color: '#10B981', items: ['Clean, documented code', 'Git version control', 'Staging + production environments', 'API integrations', 'Form handling + email alerts', 'Admin panel (if CMS)'] },
  { cat: 'SEO & Performance', color: '#8B5CF6', items: ['SEO meta tags + OG tags', 'Schema markup (JSON-LD)', 'Image WebP/AVIF compression', 'Sitemap & robots.txt', 'Core Web Vitals optimized', 'Google Analytics 4 setup'] },
  { cat: 'Launch & Support', color: '#F59E0B', items: ['DNS migration assistance', 'SSL certificate setup', 'CDN configuration (Vercel/Cloudflare)', '30-day bug-fix warranty', 'Video tutorial handoff', '1-month post-launch monitoring'] },
];

const CASE_STUDIES = [
  { client: 'Gulf Coast Chevrolet', industry: 'Auto Dealership', before: '62/100', after: '97/100', metric: 'Lighthouse Performance score', result: '340% more leads from organic', period: '6 weeks', color: AC },
  { client: 'Bloom Dental Studio', industry: 'Healthcare / Dental', before: '$2,200/mo ad waste', after: '$0 waste', metric: 'Eliminated via conversion-optimized landing page', result: '+218% form submissions', period: '4 weeks', color: '#10B981' },
  { client: 'UrbanDwell Realty', industry: 'Real Estate', before: '4.8s load time', after: '0.9s load time', metric: 'Page load speed', result: '+89% organic traffic in 60 days', period: '5 weeks', color: '#8B5CF6' },
];

const INDUSTRIES = [
  { icon: '⚖️', name: 'Law Firms' }, { icon: '🏥', name: 'Healthcare' },
  { icon: '🚗', name: 'Auto Dealers' }, { icon: '🏠', name: 'Real Estate' },
  { icon: '🛒', name: 'eCommerce' }, { icon: '🚀', name: 'SaaS / Tech' },
  { icon: '🏗️', name: 'Construction' }, { icon: '🎓', name: 'Education' },
  { icon: '🍕', name: 'Restaurants' }, { icon: '💼', name: 'B2B Services' },
  { icon: '💅', name: 'Beauty & Spa' }, { icon: '🏦', name: 'Finance' },
];

const WHY = [
  { icon: '⚡', title: 'Lighthouse 90+ on Every Build', desc: 'We don\'t aim for 90+ on some projects. Every site we build hits that score before launch. It\'s part of our standard process, not an optional upgrade.' },
  { icon: '📱', title: 'Mobile-First by Default', desc: "We design for phones first, then adapt to desktop. It sounds obvious, but most agencies still do it the other way around — which is why so many sites feel clunky on mobile." },
  { icon: '🔍', title: 'SEO Built In From Day One', desc: 'We add schema markup, meta tags, sitemaps, and image optimization during the build itself — not as a plugin bolted on after the fact.' },
  { icon: '🔒', title: 'You Own Everything', desc: "You get the code, the hosting account, and the domain. There's no monthly licensing or proprietary platform that stops working if you leave. The site is yours." },
  { icon: '📊', title: 'Analytics Ready at Launch', desc: 'GA4, Search Console, and Hotjar are connected and tracking before the site goes live. You\'ll see what\'s happening from the very first day.' },
  { icon: '🤝', title: 'One Team, Start to Finish', desc: "Your designer and developer work together throughout. You have one contact throughout the project — no handoffs between departments, no confusion about who's responsible." },
];

const FAQS = [
  { q: 'How long does a website take to build?', a: 'A standard 5–7 page business site takes about 4–5 weeks. An eCommerce store takes 6–8 weeks. A custom web app takes longer depending on the features involved — usually 8–16 weeks.' },
  { q: 'Do you build on WordPress or custom code?', a: "Both. WordPress works well for sites that need easy content management. For high-performance landing pages or SaaS apps, we use Next.js. We'll suggest the right option for your situation." },
  { q: 'Will the site work on mobile?', a: 'Yes, always. We design mobile-first and test on a range of real device sizes. Mobile performance is something we check throughout — not just at the end.' },
  { q: 'Can you redesign my existing website?', a: "Yes. We'll look at your current site's speed, UX, and conversion rate, then redesign with specific improvements in those areas. We don't just make it look better — we make it work better." },
  { q: 'Do you handle hosting?', a: "We set up hosting on Vercel, Cloudflare, or your preferred provider. For WordPress, we typically recommend WP Engine. We handle the setup and migration, but the account is in your name." },
  { q: 'What happens after launch?', a: 'You get a 30-day warranty for any bugs. After that, we offer optional monthly maintenance if you want us to handle updates and security. Either way, the site is fully documented so you can manage it yourself.' },
  { q: 'Is SEO included?', a: 'On-page SEO is included: meta tags, schema, sitemap, image compression, and Core Web Vitals. Ongoing SEO work like rankings and backlinks is a separate service you can add if needed.' },
  { q: 'Can I edit the site myself after launch?', a: "Yes. CMS-based sites are built so you can update content, images, and pages without touching code. We show you how in a recorded video walkthrough before we hand the site over." },
];

export default function WebDevPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.28 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(59,130,246,0.10) 0%, rgba(16,185,129,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Web Development — Rankston Worldwide
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Your website is either<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #10B981 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              making you money
            </span>
            <br />or losing it.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            If your site is slow, hard to find on Google, or confusing to navigate — visitors leave within seconds and don&apos;t come back. We build websites that load fast, rank well, and turn visitors into customers. Every site we ship scores 90+ on Lighthouse.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #10B981)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get a Free Website Audit →
            </a>
            <a href="#web-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See how we build ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {[{ val: '6 wks', label: 'Avg Delivery', color: AC }, { val: '95+', label: 'Lighthouse Score', color: '#10B981' }, { val: '0.9s', label: 'Avg LCP', color: '#3B82F6' }, { val: '200+', label: 'Sites Delivered', color: '#F59E0B' }].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-blue-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          95+ Lighthouse on Every Build
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-emerald-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Full Ownership — No Lock-in
        </motion.div>
      </section>


      {/* § 2 WHAT WE BUILD */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Every Type of Website, Built Performance-First</h2>
            <p className="text-gray-500 mt-2">From a 3-page local business site to a full SaaS platform — every build follows the same Lighthouse 90+ standard.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEB_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-6 border border-white/6 hover:border-blue-500/20 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-4 block">{t.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">{t.tags.map((tag) => <span key={tag} className="text-xs px-2 py-0.5 rounded-md border border-white/8 text-gray-500">{tag}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 TECH STACK */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Enterprise-Grade Technologies. Zero Lock-In.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TECH.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6 hover:border-white/12 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: t.color }} />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 6-STEP PROCESS */}
      <section id="web-process" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">From Idea to Launch in 5–6 Weeks</h2>
          </div>
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

      {/* § 5 WHAT'S INCLUDED */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>What&rsquo;s Included</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Everything in Every Build — No Upsells</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INCLUDED.map((cat) => (
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

      {/* § 6 PERFORMANCE */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>Performance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Our Sites Load Faster Than Your Competitors&rsquo;</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERFORMANCE.map((p) => (
              <div key={p.metric} className="rounded-2xl p-6 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <p className="text-3xl font-extrabold font-poppins mb-1" style={{ color: p.color }}>{p.val}<span className="text-sm font-normal text-gray-600">{p.unit}</span></p>
                <p className="text-xs font-semibold text-white mb-2">{p.metric}</p>
                <p className="text-xs text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 7 INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8"><h2 className="text-3xl font-extrabold font-poppins text-white">Built for Your Industry</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-xl">{ind.icon}</span><span className="text-sm text-gray-300 font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 8 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: AC }}>Results</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Websites That Actually Moved the Needle</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-2xl p-6 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.9)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: cs.color }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cs.color }}>{cs.industry}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-4">{cs.client}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-center"><p className="text-xs text-red-400 mb-1">Before</p><p className="text-sm font-extrabold text-white">{cs.before}</p></div>
                  <div className="p-3 rounded-xl border text-center" style={{ background: `${cs.color}08`, borderColor: `${cs.color}25` }}><p className="text-xs mb-1" style={{ color: cs.color }}>After</p><p className="text-sm font-extrabold text-white">{cs.after}</p></div>
                </div>
                <p className="text-xs text-gray-600 mb-1">{cs.metric}</p>
                <p className="text-sm font-bold" style={{ color: cs.color }}>{cs.result}</p>
                <p className="text-xs text-gray-700 mt-1">{cs.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 9 WHY RANKSTON */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston Beats Every Other Dev Agency</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{w.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 10 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Web Development — Questions Answered</h2></div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5 pt-1"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection serviceSlug="web-development" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(16,185,129,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready for a Website That Actually Converts?</h2>
            <p className="text-gray-500 text-sm mb-6">Free project consultation. No commitment. Quote within 24 hours.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #10B981)` }}>
              Get Free Quote →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
