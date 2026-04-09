'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#14B8A6';

const CHATBOT_TYPES = [
  { icon: '💬', title: 'WhatsApp Business Chatbot', desc: 'A chatbot that responds to WhatsApp messages 24/7 — qualifying leads, booking appointments, answering FAQs, and tracking orders through the official WhatsApp API.', platform: 'WhatsApp' },
  { icon: '🌐', title: 'Website Live Chat Bot', desc: 'An AI chat widget that greets visitors, collects contact details, handles common questions, and passes hot leads straight to your sales team.', platform: 'Website' },
  { icon: '📘', title: 'Facebook Messenger Bot', desc: 'Automated DM replies, click-to-Messenger ad integrations, lead capture flows, and product recommendations — all inside Facebook Messenger.', platform: 'Facebook' },
  { icon: '📷', title: 'Instagram DM Automation', desc: 'Auto-replies to story mentions, keyword-triggered DM flows, lead capture, and booking links — through the official Instagram API.', platform: 'Instagram' },
  { icon: '📞', title: 'Customer Support Bot', desc: 'A bot that handles ticket creation, order lookups, FAQs, and escalations to human agents — cutting support volume significantly without cutting service quality.', platform: 'Multi-Platform' },
  { icon: '🤖', title: 'AI-Powered Sales Bot', desc: 'A GPT-4 bot trained on your products, pricing, and brand voice that can hold full sales conversations and answer detailed questions without any human involvement.', platform: 'Custom AI' },
];

const PLATFORMS_BUILT = [
  { name: 'WhatsApp Business API', color: '#25D366' },
  { name: 'Facebook Messenger API', color: '#0080FB' },
  { name: 'Instagram Messaging API', color: '#E1306C' },
  { name: 'Tidio / Crisp (Website)', color: '#5B4CF5' },
  { name: 'Botpress (Custom AI)', color: '#14B8A6' },
  { name: 'ManyChat', color: '#0084FF' },
  { name: 'OpenAI GPT-4', color: '#10A37F' },
  { name: 'Twilio (SMS Bots)', color: '#F22F46' },
];

const KEY_METRICS = [
  { icon: '⚡', val: '< 3 sec', label: 'First response time', desc: 'vs 2-hour human avg', color: AC },
  { icon: '🕐', val: '24/7', label: 'Availability', desc: 'No lunch breaks. No holidays.', color: '#8B5CF6' },
  { icon: '📉', val: '-65%', label: 'Support ticket volume', desc: 'After chatbot deployment', color: '#10B981' },
  { icon: '💰', val: '340%', label: 'Lead gen ROI', desc: 'From website chat leads', color: '#F59E0B' },
];

const USE_CASES = [
  { icon: '📅', case: 'Appointment Booking', desc: 'The bot asks a few quick questions, checks your calendar, and books the appointment directly in the chat — no human needed.' },
  { icon: '📦', case: 'Order Status', desc: 'Customer sends their order number and the bot pulls real-time status from Shopify or WooCommerce and replies instantly.' },
  { icon: '❓', case: 'FAQ Deflection', desc: 'Takes care of the most common questions — pricing, delivery times, policies — so your team can focus on the ones that actually need attention.' },
  { icon: '🎯', case: 'Lead Qualification', desc: 'Asks about budget, timeline, and requirements, then routes serious leads to sales and cooler ones to a nurture sequence.' },
  { icon: '💬', case: 'Quote Calculator', desc: 'Walks a visitor through a set of questions and gives them an instant estimate — works for both services and products.' },
  { icon: '🔔', case: 'Event & Reminder Flow', desc: 'Sends appointment reminders, follow-up messages, and upsell offers automatically via WhatsApp at the right time.' },
];

const PROCESS = [
  { n: '01', title: 'Bot Strategy & Flow Map', week: 'Day 1–3', desc: 'We map out every conversation the bot will have — what it says, what it asks, where it takes the user next, and when it hands off to a human. You approve the full flow before anything is built.' },
  { n: '02', title: 'Platform Setup & API', week: 'Day 3–5', desc: 'We handle the WhatsApp API verification, Facebook/Instagram connection, or website widget setup. API keys and webhooks are all configured properly before we build the flows.' },
  { n: '03', title: 'Conversation Build', week: 'Week 2', desc: 'All conversation flows are built inside the chosen platform. If we\'re using GPT, the AI model is trained on your product and service information so it can answer real questions.' },
  { n: '04', title: 'CRM & Tool Integration', week: 'Week 2–3', desc: 'The bot is connected to your CRM, calendar, and email platform. Every lead the bot captures is automatically filed in the right place with the right tags and notes.' },
  { n: '05', title: 'Test & QA', week: 'Week 3', desc: 'We run 100+ test conversations through every branch of the flow, including weird inputs and edge cases. We make sure escalation to a human agent works properly.' },
  { n: '06', title: 'Launch & Train', week: 'Week 4', desc: 'The bot goes live. We monitor the first 500 conversations for unexpected paths. Monthly updates improve responses based on what real users are actually asking.' },
];

const CASE_STUDIES = [
  { client: 'LuxeStay Hotels', industry: 'Hospitality', before: '4.2 hr avg response time', after: '< 2 minute response', metric: 'WhatsApp booking bot deployed', result: '+218% direct bookings, $0 OTA commission', period: '5 weeks', color: AC },
  { client: 'PureForm Supplements', industry: 'eCommerce', before: '180 support tickets/day', after: '54 support tickets/day', metric: '70% deflection via website chatbot', result: '$84K/yr saved in support labor cost', period: '3 weeks', color: '#8B5CF6' },
  { client: 'EliteSmile Dental', industry: 'Healthcare', before: '14 booked appointments/week', after: '47 booked appointments/week', metric: 'Instagram DM + WhatsApp booking bot', result: 'Eliminated receptionist overtime cost', period: '4 weeks', color: '#10B981' },
];

const WHY = [
  { icon: '🧠', title: 'Trained on Your Business', desc: 'For complex products or services, we train a custom GPT-4 model on your knowledge base so the bot gives accurate, specific answers — not generic chatbot responses.' },
  { icon: '🔗', title: 'Every Lead Goes Into Your CRM', desc: 'Every contact the chatbot collects is automatically added to your CRM with source, tags, and conversation history. No manual entry, no lost leads.' },
  { icon: '🌍', title: 'Responds in Multiple Languages', desc: 'Bots can detect the language and respond accordingly — English, Arabic, Urdu, Spanish, and more. Your international customers feel understood.' },
  { icon: '📊', title: 'Monthly Conversation Reports', desc: 'We send a monthly report showing the most common user questions, where people drop off, and what the bot couldn\'t answer — so the bot improves over time.' },
  { icon: '🔒', title: 'Official APIs Only', desc: 'We only use the official WhatsApp Business API and Meta-approved messaging APIs. No unofficial tools or hacks that risk getting your number or account banned.' },
  { icon: '🤝', title: 'Smooth Human Handoff', desc: 'When a conversation needs a real person, the bot transfers the full conversation history to your team on WhatsApp, Slack, or email. The customer never has to repeat themselves.' },
];

const FAQS = [
  { q: 'Do I need the WhatsApp Business API?', a: 'For a proper WhatsApp chatbot that works at scale, yes — you need the official API. We handle the entire application, verification, and setup. If you only need basic automation at a smaller scale, the standard WhatsApp Business app is also an option.' },
  { q: 'Can the chatbot book appointments?', a: 'Yes. The bot checks your calendar availability, asks a few qualifying questions, and books the slot directly in the conversation. No human involvement needed.' },
  { q: 'How long does chatbot development take?', a: 'A basic FAQ and lead capture bot takes 2–3 weeks. A full GPT-4 powered sales bot with CRM integration and multi-platform deployment takes 4–6 weeks.' },
  { q: 'Can the bot respond in Arabic or Urdu?', a: 'Yes. We configure the bot to respond in multiple languages. For Arabic, we make sure the message formatting handles right-to-left text correctly, and we train the AI on Arabic-language data for local clients.' },
  { q: 'What happens if a user asks something the bot doesn\'t know?', a: 'The bot has a fallback built in — it apologises, collects the user\'s contact details, and either alerts a live agent or creates a follow-up task. No conversation disappears without being addressed.' },
  { q: 'Can I manage the bot myself after delivery?', a: 'Yes. We walk you through everything in a handoff session and leave full documentation. Most platforms have a visual editor that requires no coding to update. For AI model retraining, our team handles that.' },
];

export default function ChatbotPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(20,184,166,0.10) 0%, rgba(139,92,246,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            Chatbot Development — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            Your business closes at 6pm.<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #8B5CF6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Leads don&apos;t.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Every unanswered message after hours is a potential customer who moved on. We build AI chatbots for WhatsApp, Instagram, Facebook, and your website that answer questions, book appointments, and collect leads — 24/7, without extra staff.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #8B5CF6)`, boxShadow: `0 8px 32px ${AC}35` }}>
              See a Live Bot Demo →
            </a>
            <a href="#chatbot-features" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              What can it do? ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {KEY_METRICS.map((m) => (
              <div key={m.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl mb-1">{m.icon}</div>
                <div className="text-xl font-extrabold font-poppins mb-1" style={{ color: m.color }}>{m.val}</div>
                <p className="text-xs font-semibold text-white">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-teal-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          24/7 Lead Capture — No Extra Staff
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-violet-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Live in &lt; 2 Weeks
        </motion.div>
      </section>

      {/* § 2 CHATBOT TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Types of Chatbots We Build</h2>
            <p className="text-gray-500 mt-2">Each platform has different API capabilities, conversation patterns, and audience expectations. We build natively for each.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHATBOT_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-5 border border-white/6 relative overflow-hidden hover:border-teal-500/20 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{t.icon}</span>
                  <span className="text-xs px-2 py-0.5 rounded border border-white/8 text-gray-600">{t.platform}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 USE CASES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Things Your Chatbot Will Do Automatically</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((u) => (
              <div key={u.case} className="rounded-2xl p-5 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{u.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{u.case}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 PLATFORMS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8"><h2 className="text-3xl font-extrabold font-poppins text-white">Platforms & Technologies We Build On</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PLATFORMS_BUILT.map((p) => (
              <div key={p.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
                <span className="text-sm text-gray-300 font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 5 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Bot Live in 4 Weeks</h2></div>
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

      {/* § 6 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Chatbots That Changed These Businesses</h2></div>
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

      {/* § 7 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston for Chatbot Development</h2></div>
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

      {/* § 8 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Chatbot Development FAQs</h2></div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <button className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <ChevronDownIcon className={`w-4 h-4 text-gray-600 shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection serviceSlug="chatbot-development" />
      {/* CTA */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(139,92,246,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready for a Bot That Works Harder Than Your Team?</h2>
            <p className="text-gray-500 text-sm mb-6">Free bot demo — we&apos;ll show you a live chatbot built for your specific industry and use case.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #8B5CF6)` }}>
              Get Free Chatbot Demo →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
