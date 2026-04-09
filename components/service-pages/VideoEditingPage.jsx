'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#F97316';

const VIDEO_TYPES = [
  { icon: '🎬', title: 'Brand Films', desc: 'Short brand story videos — 60 to 180 seconds — for your homepage, YouTube channel, or paid campaigns.' },
  { icon: '📱', title: 'Reels & TikTok Edits', desc: 'Fast-paced vertical videos built to hold attention and reach new audiences on Instagram and TikTok.' },
  { icon: '🎓', title: 'Product Demo Videos', desc: 'Screen recordings, walkthrough demos, or explainer animations that show exactly how your product works.' },
  { icon: '🗣️', title: 'Testimonial Edits', desc: 'Customer interview footage edited into short, believable social proof videos with branded text and graphics.' },
  { icon: '📣', title: 'Ad Creative Videos', desc: 'Video ads for Meta, TikTok, YouTube, and Google — delivered in all required sizes and aspect ratios.' },
  { icon: '📊', title: 'Motion Graphics', desc: 'Animated charts, data visuals, logo animations, and lower-third text overlays for a polished professional look.' },
];

const PRODUCTION_SPECS = [
  { spec: 'Export Formats', val: '4K, 1080p, 720p' },
  { spec: 'Aspect Ratios', val: '16:9, 9:16, 1:1, 4:5' },
  { spec: 'Color Grading', val: 'Included always' },
  { spec: 'Sound Design', val: 'Licensed music + SFX' },
  { spec: 'Subtitles/Captions', val: 'Auto-generated + QA' },
  { spec: 'Delivery', val: 'Compressed + RAW' },
];

const PROCESS = [
  { n: '01', title: 'Video Brief', week: 'Day 1', desc: 'We ask about your footage, brand colours, music style, reference videos, and the platforms you\'re posting to. We don\'t start anything without a complete brief signed off.' },
  { n: '02', title: 'Script / Storyboard', week: 'Day 2–3', desc: 'For brand films and ads we write a script and map out the visual flow. For footage-based edits we review what you\'ve sent and plan the structure.' },
  { n: '03', title: 'Rough Cut', week: 'Day 4–7', desc: 'You receive a full-length first cut with the pacing, music, and edits in place. Narration or voiceover added at this stage if needed.' },
  { n: '04', title: 'Colour & Sound', week: 'Day 7–9', desc: 'Professional colour grade applied. Licensed music track added. Sound effects and audio levels balanced across the whole video.' },
  { n: '05', title: 'Revisions', week: 'Day 9–12', desc: 'You get 2 full rounds of revisions. Send your consolidated feedback and we make the changes within 24 hours per round.' },
  { n: '06', title: 'Final Delivery', week: 'Day 12–14', desc: 'All platform sizes exported and delivered — 16:9, 9:16, and 1:1. Captioned versions and the original project file included.' },
];

const CASE_STUDIES = [
  { client: 'NovaMed Clinical', industry: 'Healthcare', before: '1.2% video CTR on ads', after: '7.8% CTR', metric: 'Meta video ad click-through rate', result: 'CPA dropped from $180 to $44', period: '4 weeks', color: AC },
  { client: 'AeroGear Ecom', industry: 'eCommerce', before: '22% add-to-cart rate', after: '51% add-to-cart rate', metric: 'After product demo video on PDP', result: '+$280K additional monthly revenue', period: '6 weeks', color: '#8B5CF6' },
  { client: 'PulseGym Chain', industry: 'Fitness', before: '4,200 Instagram views/post', after: '380,000 views/Reel', metric: 'Organic Instagram reach', result: '1,200 new member signups in 30 days', period: '3 weeks', color: '#10B981' },
];

const WHY = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most projects are delivered within 14 business days. If you\'re working to a deadline, ask us about our 7-day rush option.' },
  { icon: '🎵', title: 'Licensed Music on Every Video', desc: 'All videos come with properly licensed tracks from Epidemic Sound or Artlist. No copyright issues. No surprise takedowns.' },
  { icon: '📱', title: 'Every Size You Need', desc: 'One project, all formats. YouTube, Instagram Reels, TikTok, Meta Ads — everything exported and labelled for each platform.' },
  { icon: '🎨', title: 'Consistent with Your Brand', desc: 'Your fonts, colours, and visual style are applied throughout. Every video looks like it came from the same creative team, because it did.' },
  { icon: '📝', title: 'Captions Always Included', desc: 'Auto-generated captions are included on all social videos and checked by a human. Most people watch social video without sound, so captions matter.' },
  { icon: '💾', title: 'You Get the Project File', desc: 'We hand over the original Premiere or DaVinci project file with the final delivery. You can make future changes without starting over.' },
];

const FAQS = [
  { q: 'Do I need to provide raw footage?', a: 'For editing projects, yes — you send the raw footage and we do the rest. For brand films that need a shoot, we work with videographers in your area. For animated videos and motion graphics, no footage is needed at all.' },
  { q: 'How long does video editing take?', a: 'A 60-second social video typically takes 5–7 business days. A 3-minute brand film takes around 10–14 days. Motion graphics and animated explainers take 2–3 weeks depending on how complex the animation is.' },
  { q: 'What if I\'m not happy with the first cut?', a: 'You get 2 full revision rounds. Give us your consolidated feedback and we implement all changes within 24 business hours. If the brief was clear from the start, the first cut is usually close to final.' },
  { q: 'Do you write scripts and provide voiceover?', a: 'Yes. Scripting for up to 300 words is included in premium packages. We can also arrange professional voiceover in English and Urdu as an add-on.' },
  { q: 'What formats do you export?', a: 'We export in 4K or 1080p depending on your source footage, in all required aspect ratios — 16:9 for YouTube, 9:16 for Reels and TikTok, 1:1 for Instagram, and 4:5 for Facebook. You get compressed versions ready for upload.' },
];

const TOOLS_USED = ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop', 'Audition', 'Epidemic Sound', 'Artlist'];

export default function VideoEditingPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(249,115,22,0.10) 0%, rgba(239,68,68,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Video Editing &amp; Production — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Scroll-stopping video<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #EF4444 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              that actually converts.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Bad video loses viewers in the first 3 seconds. Great video turns viewers into customers. We edit Reels, YouTube videos, ads, and brand films that are built for retention, not just views — delivered within 48 hours.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EF4444)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Send Us Your Footage →
            </a>
            <a href="#video-types" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See what we deliver ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { val: '48h', label: 'Standard Turnaround', color: AC },
              { val: '4K', label: 'Max Export Quality', color: '#EF4444' },
              { val: '3×', label: 'Avg Engagement Lift', color: '#F59E0B' },
              { val: '∞', label: 'Revision Rounds', color: '#10B981' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl font-extrabold font-poppins mb-1" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-orange-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          48h Delivery — Express Available
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-red-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          Reels, YouTube, Ads &amp; More
        </motion.div>
      </section>




      {/* § 2 VIDEO TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Every Type of Video, Masterfully Edited</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VIDEO_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Brief to Final Cut in 14 Business Days</h2></div>
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

      {/* § 4 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Videos That Generated Real Revenue</h2></div>
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

      {/* § 5 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Our Video Team Delivers More</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 6 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Video Editing FAQs</h2></div>
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
      <IndustriesSection serviceSlug="video-editing" />
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(239,68,68,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready to Create Videos That Actually Convert?</h2>
            <p className="text-gray-500 text-sm mb-6">Free video strategy consultation. We&apos;ll review your existing content and recommend exactly what to create.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EF4444)` }}>
              Book Free Video Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
