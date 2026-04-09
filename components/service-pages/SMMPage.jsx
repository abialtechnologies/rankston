'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#EC4899';

const PLATFORMS = [
  { icon: '📷', name: 'Instagram', color: '#E1306C', subs: ['Feed Posts', 'Reels', 'Stories', 'Shopping', 'Collaborations'] },
  { icon: '📘', name: 'Facebook', color: '#1877F2', subs: ['Page Management', 'Groups', 'Events', 'Ads Integration'] },
  { icon: '💼', name: 'LinkedIn', color: '#0A66C2', subs: ['Company Page', 'Thought Leadership', 'B2B Lead Posts', 'LinkedIn Articles'] },
  { icon: '🎵', name: 'TikTok', color: '#FF0050', subs: ['Short-Form Video', 'Duets & Stitches', 'Trending Audio', 'TikTok Shop'] },
  { icon: '🐦', name: 'X (Twitter)', color: '#1DA1F2', subs: ['Threads', 'Engagement Automation', 'Trend Monitoring'] },
  { icon: '▶️', name: 'YouTube', color: '#FF0000', subs: ['Long-form Content', 'YouTube Shorts', 'Community Posts', 'SEO-Optimized Titles'] },
];

const CONTENT_TYPES = [
  { icon: '🎬', type: 'Reels & Short Videos', desc: 'Short vertical videos with a strong opening hook, captions, and audio that fits the current platform trends — built to get more reach.' },
  { icon: '🎨', type: 'Static Graphics', desc: 'On-brand carousels, infographics, quote cards, and product posts that look consistent on any screen.' },
  { icon: '📖', type: 'Educational Carousels', desc: 'Swipeable multi-slide posts that break down complex topics in a way your audience actually wants to read.' },
  { icon: '💬', type: 'UGC-Style Content', desc: 'Content that feels real and unpolished — the kind people trust more and engage with more than polished brand posts.' },
  { icon: '📊', type: 'Data & Stats Posts', desc: 'Visual posts that highlight an interesting number or insight from your industry — great for saves, shares, and profile visits.' },
  { icon: '📸', type: 'Story Sequences', desc: 'A series of connected stories designed to keep people tapping through to the end and taking action at the final slide.' },
];

const PROCESS = [
  { n: '01', title: 'Brand Audit & Competitor Research', week: 'Week 1', desc: 'We look at what you currently have on social, what your competitors are doing, and what content is performing well in your industry. You get a clear picture before anything new is created.' },
  { n: '02', title: 'Strategy & Content Calendar', week: 'Week 1–2', desc: 'We build a 30-day content calendar with post topics, formats, captions, and hashtags. You review and approve everything before it goes live.' },
  { n: '03', title: 'Content Creation', week: 'Week 2–3', desc: 'Graphics are designed in-house, videos are scripted and edited by our team, and captions are written with an engaging opener. Every post is reviewed for quality before it\'s scheduled.' },
  { n: '04', title: 'Scheduling & Posting', week: 'Ongoing', desc: 'Posts go out at the times when your audience is most active. Between main posts, we publish stories, polls, and interactive content to keep people engaged daily.' },
  { n: '05', title: 'Community Management', week: 'Daily', desc: 'We reply to comments and DMs within 4 hours and actively engage with followers and target accounts in your niche. Your community doesn\'t sit ignored.' },
  { n: '06', title: 'Report & Optimize', week: 'Monthly', desc: 'Each month you get a report showing reach, engagement, follower growth, and link clicks. We double down on what\'s working and replace what isn\'t.' },
];

const METRICS_EXPLAINED = [
  { icon: '📈', metric: 'Engagement Rate', avg: '4.8%', bench: 'Industry avg: 1.2%', color: AC, desc: 'Likes, comments, saves, and shares divided by reach — the true measure of content quality.' },
  { icon: '👥', metric: 'Follower Growth Rate', avg: '+1,200/mo', bench: 'Organic, no bots', color: '#8B5CF6', desc: 'Real followers who actually want to see your content and buy from you.' },
  { icon: '🔗', metric: 'Link Clicks to Website', avg: '340/mo', bench: 'Avg across clients', color: '#10B981', desc: 'Traffic from social media that lands on your site, tracked in GA4.' },
  { icon: '💰', metric: 'Social-Attributed Revenue', avg: '$18K/mo', bench: 'eCommerce avg', color: '#F59E0B', desc: 'Revenue directly attributed to social media touchpoints in your GA4 path.' },
];

const CASE_STUDIES = [
  { client: 'Bloom Beauty Studio', industry: 'Beauty & Wellness', before: '1,200 followers', after: '28,400 followers', metric: 'Instagram.', result: '+$42K in bookings from Instagram only', period: '6 months', color: AC },
  { client: 'TechFlow SaaS', industry: 'B2B SaaS', before: '0.4% engagement', after: '5.8% engagement', metric: 'LinkedIn engagement rate', result: '37 qualified leads/month from LinkedIn', period: '3 months', color: '#6366F1' },
  { client: 'Urban Eats Restaurant', industry: 'F&B', before: '800 monthly reach', after: '210,000 monthly reach', metric: 'Combined Instagram + TikTok', result: 'Full booking calendar every weekend', period: '4 months', color: '#10B981' },
];

const WHY = [
  { icon: '🎯', title: 'Nothing Is Templated', desc: 'We create everything specifically for your brand, your audience, and your voice. No content is recycled from other clients or pulled from a template library.' },
  { icon: '⏰', title: 'Comments Answered Within 4 Hours', desc: 'We monitor your comments and DMs throughout the day. No follower is left waiting or ignored while your competitors are fast to engage.' },
  { icon: '📊', title: 'Decisions Based on Real Data', desc: 'We track what\'s working — which formats get the most saves, what posting times drive the most visits, which hooks stop the scroll. Then we do more of it.' },
  { icon: '🎬', title: 'Video is Always Included', desc: 'Reels and short-form video consistently outperform static content. Video production is part of every package we offer — not something you have to pay extra for.' },
  { icon: '🤝', title: 'We Write in Your Voice', desc: 'Before we post anything, we study your tone, your values, and how your audience talks. Every caption sounds like you — not like it came from an agency.' },
  { icon: '📈', title: 'Monthly Strategy Review', desc: 'Once a month we get on a call to review what the analytics are showing, talk about upcoming campaigns, and make sure the content fits what\'s happening in your business.' },
];

const FAQS = [
  { q: 'How many posts per month is included?', a: 'Our standard package covers 20 posts across 2 platforms (10 per platform) plus daily Stories on at least one. Premium plans include 30 posts across 3 platforms.' },
  { q: 'Do you create the graphics and videos?', a: 'Yes. Our team designs all static posts, carousels, and Reels. We script and caption everything too. You review and approve before anything is published.' },
  { q: 'When will I start seeing follower growth?', a: 'Reach and engagement typically improve from month 2. Steady follower growth — over a thousand per month — is realistic from month 3 onwards, depending on your starting point and posting volume.' },
  { q: 'Will you manage comments and DMs?', a: 'Yes. Comment and DM replies are included in all packages. We respond within 4 business hours. For common questions, we can also set up auto-reply messages.' },
  { q: 'Can you run paid and organic social together?', a: 'Yes. Our paid social team works alongside the organic strategy. Posts that are performing well organically can be boosted as paid ads, so you\'re amplifying what already works.' },
];

const INDUSTRIES = [
  { icon: '☕', name: 'Cafés & Restaurants' }, { icon: '💅', name: 'Beauty & Salons' },
  { icon: '🏋️', name: 'Fitness & Wellness' }, { icon: '🛒', name: 'eCommerce Brands' },
  { icon: '🏠', name: 'Real Estate' }, { icon: '🚀', name: 'SaaS & Tech' },
  { icon: '👗', name: 'Fashion & Lifestyle' }, { icon: '🏥', name: 'Healthcare' },
];

export default function SMMPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(236,72,153,0.10) 0%, rgba(139,92,246,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Social Media Marketing — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Posting every day and<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #8B5CF6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              getting nothing? That ends now.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Most brands post content that gets ignored. The problem isn&apos;t effort — it&apos;s content that doesn&apos;t hook, doesn&apos;t connect, and doesn&apos;t convert. We build content that makes people stop scrolling and start buying.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #8B5CF6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Get a Free Content Strategy →
            </a>
            <a href="#smm-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              Show me what you&apos;d create ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {METRICS_EXPLAINED.map((m) => (
              <div key={m.metric} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-xl font-extrabold font-poppins mb-1" style={{ color: m.color }}>{m.avg}</div>
                <div className="text-xs text-gray-500">{m.metric}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium shadow-lg" style={{ zIndex: 10, color: AC }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: AC }} />
          6 Platforms Managed as One
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-violet-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          4.8% Avg Engagement Rate
        </motion.div>
      </section>



      {/* § 2 PLATFORMS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Platforms. One Unified Strategy.</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="rounded-2xl p-5 border border-white/6 relative overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: p.color }} />
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">{p.icon}</span><h3 className="text-sm font-bold text-white">{p.name}</h3></div>
                <ul className="space-y-1">{p.subs.map((s) => <li key={s} className="text-xs text-gray-500 flex items-center gap-2"><CheckCircleIcon className="w-3 h-3" style={{ color: p.color }} />{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 CONTENT TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Content Formats We Master</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_TYPES.map((t) => (
              <div key={t.type} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{t.type}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Our Monthly Content Machine</h2></div>
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

      {/* § 5 METRICS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Metrics That Actually Matter (And What They Mean)</h2></div>
          <div className="grid sm:grid-cols-2 gap-4">
            {METRICS_EXPLAINED.map((m) => (
              <div key={m.metric} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.88)' }}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-bold text-white">{m.metric}</h3>
                      <span className="text-lg font-extrabold font-poppins" style={{ color: m.color }}>{m.avg}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{m.bench}</p>
                    <p className="text-xs text-gray-500">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 6 INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8"><h2 className="text-3xl font-extrabold font-poppins text-white">Industries We Grow on Social</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-xl">{ind.icon}</span><span className="text-sm text-gray-300 font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 7 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Social Media Growth That Changed These Businesses</h2></div>
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
                <p className="text-xs text-gray-700 mt-1">{cs.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 8 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston Outperforms Other SMM Agencies</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 9 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Social Media Questions</h2></div>
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
      <IndustriesSection serviceSlug="social-media-marketing" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(139,92,246,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready to Grow Your Social Media?</h2>
            <p className="text-gray-500 text-sm mb-6">Free content strategy call. No commitment. We&rsquo;ll show you exactly what will work for your brand.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #8B5CF6)` }}>
              Get Free Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
