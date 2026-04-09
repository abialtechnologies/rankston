'use client';
import GoogleReviews from '../GoogleReviews';
import IndustriesSection from '../IndustriesSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const AC = '#6366F1';

const AUTOMATION_TYPES = [
  { icon: '🔗', title: 'CRM Automation', desc: 'Leads from forms, emails, and chats are automatically created in your CRM, scored, assigned to the right rep, and added to follow-up sequences — no manual entry needed.', tools: ['HubSpot', 'Salesforce', 'Zoho'] },
  { icon: '📧', title: 'Email & Drip Sequences', desc: 'Automated email flows triggered by what users do — signing up, abandoning a cart, making a purchase, or going quiet for a while. Each email sent at the right moment.', tools: ['Mailchimp', 'ActiveCampaign', 'Klaviyo'] },
  { icon: '📄', title: 'Document & Invoice Automation', desc: 'Invoices, proposals, contracts, and NDAs generated automatically from your CRM data and sent for e-signature without anyone touching them manually.', tools: ['Docusign', 'PandaDoc', 'Notion'] },
  { icon: '📊', title: 'Reporting & Analytics', desc: 'Automated weekly or monthly reports pulled from Sheets, GA4, your ad platforms, and CRM — delivered to the right people on schedule, without anyone building them by hand.', tools: ['Google Sheets', 'Looker Studio', 'Slack'] },
  { icon: '🛒', title: 'eCommerce Automation', desc: 'Order confirmations, shipping updates, review requests, loyalty rewards, and low-stock alerts all handled automatically so your team doesn\'t have to.', tools: ['Shopify', 'WooCommerce', 'Stripe'] },
  { icon: '📅', title: 'Scheduling & Calendar Flows', desc: 'Booking confirmations, pre-appointment reminders, no-show follow-ups, and post-meeting surveys sent automatically. Nothing falls through the cracks.', tools: ['Calendly', 'Google Calendar', 'Acuity'] },
];

const TECH_STACK = [
  { name: 'n8n', color: '#f74e00', cat: 'Workflow Automation' },
  { name: 'Make (Integromat)', color: '#6d00cc', cat: 'Workflow Automation' },
  { name: 'Zapier', color: '#ff4a00', cat: 'Workflow Automation' },
  { name: 'OpenAI GPT-4', color: '#10A37F', cat: 'AI Processing' },
  { name: 'Airtable', color: '#18bfff', cat: 'Database / CRM' },
  { name: 'Supabase', color: '#3ECF8E', cat: 'Database / API' },
  { name: 'Google Workspace', color: '#4285F4', cat: 'Productivity' },
  { name: 'Webhooks / REST APIs', color: AC, cat: 'Custom Integration' },
];

const ROI_METRICS = [
  { icon: '⏱️', val: '28 hrs/mo', label: 'Avg hours saved per team', color: AC },
  { icon: '💰', val: '$6,200', label: 'Avg labor cost saved monthly', color: '#10B981' },
  { icon: '⚡', val: '3-4x', label: 'Faster lead response time', color: '#F59E0B' },
  { icon: '🎯', val: '0 errors', label: 'vs manual data entry mistakes', color: '#EC4899' },
];

const PROCESS = [
  { n: '01', title: 'Process Audit', week: 'Day 1–2', desc: 'We talk with your team to understand every repetitive task in your workflow — how long each one takes, who does it, and what tools are involved. You get a written report outlining where automation will have the biggest impact.' },
  { n: '02', title: 'Automation Roadmap', week: 'Day 3–5', desc: 'We list everything we can automate and rank it by ROI. Quick wins that take a day to build come first. Bigger multi-step flows are scheduled after. Each item includes an estimate of hours and money saved per month.' },
  { n: '03', title: 'Build & Test', week: 'Week 2–3', desc: 'Automations built in n8n, Make, Zapier, or custom code — whichever fits the job. Every flow is tested with real sample data, including edge cases that could cause it to break.' },
  { n: '04', title: 'CRM & Tool Integration', week: 'Week 3', desc: 'We connect everything to your existing tools — HubSpot, Salesforce, Shopify, Slack, Google Workspace. You don\'t need new software. We make your current tools do more.' },
  { n: '05', title: 'Go-Live & Monitor', week: 'Week 4', desc: 'Automations go live and we watch them closely for 30 days. Error alerts are set up so that if anything breaks, you\'re notified immediately — no silent failures.' },
  { n: '06', title: 'Docs & Training', week: 'Week 4', desc: 'Written documentation and a video walkthrough for every automation we built. Your team can manage, pause, and update flows themselves without needing technical help.' },
];

const CASE_STUDIES = [
  { client: 'BrightPath Recruiters', industry: 'HR / Staffing', before: '4.5 hrs manual per placement', after: '18 minutes per placement', metric: 'End-to-end placement automation (docs, email, calendar)', result: 'Scaled from 40 to 120 placements/month, same team', period: '6 weeks', color: AC },
  { client: 'CoastalCraft eCommerce', industry: 'eCommerce / Retail', before: '6 hrs/day on order management', after: '0 hrs/day manual order work', metric: 'Full Shopify → CRM → Fulfillment automation', result: '$38K/yr saved in VA labor costs', period: '3 weeks', color: '#10B981' },
  { client: 'VertexLaw LLP', industry: 'Legal Services', before: '2-day proposal turnaround', after: '4-minute proposal generation', metric: 'CRM-to-PandaDoc proposal automation', result: '+67% proposal acceptance rate (speed-to-lead)', period: '4 weeks', color: '#F59E0B' },
];

const WHY = [
  { icon: '🔬', title: 'We Audit Before Building Anything', desc: 'We don\'t guess which processes to automate. We spend time understanding your workflow and only build what will genuinely save you time and money.' },
  { icon: '📊', title: 'We Prioritize by Savings First', desc: 'Every automation is ranked by time saved multiplied by the cost of that time. The ones that save the most money get built first.' },
  { icon: '🛠️', title: 'No-Code and Custom Code', desc: 'Simple flows are done in Make or Zapier and live in days. Complex logic that needs custom data handling is built as proper scripts with full API access.' },
  { icon: '📝', title: 'Full Documentation Included', desc: 'Every automation is delivered with a written guide and a video walkthrough. Your team can understand, manage, and update any flow without needing us.' },
  { icon: '🚨', title: 'Error Alerts Always Set Up', desc: 'Every workflow we build has error logging and instant alerts. If anything breaks in production, you\'ll know about it via Slack or email within minutes.' },
  { icon: '🤝', title: 'Works With Your Existing Tools', desc: 'We don\'t try to replace your software. We automate the work between the tools you already have — HubSpot, Shopify, Monday.com, whatever your stack is.' },
];

const FAQS = [
  { q: 'What is business process automation?', a: 'It\'s using software to handle tasks your team currently does by hand — things like entering data, sending emails, generating documents, or updating records. The goal is to free your people from low-value repetitive work so they can focus on things that actually need a human.' },
  { q: 'What tools do you use?', a: 'Primarily n8n, Make (Integromat), and Zapier for workflow automation. For AI-powered logic we use OpenAI\'s GPT-4 API. For flows that need database logic, we use Supabase with custom Node.js or Python scripts.' },
  { q: 'How long does automation take to set up?', a: 'Simple flows (like a basic Zapier connection) take 1–3 days. Complex multi-step automations with CRM and API integrations take 2–4 weeks. We always start with quick wins so you see results fast while the bigger buildout happens.' },
  { q: 'Do I need to buy new software?', a: 'Almost never. We build automation layers on top of what you already use. We\'ll only suggest switching a tool if it genuinely limits what we can automate — and we\'ll never push software we get paid for recommending.' },
  { q: 'What if an automation breaks?', a: 'All automations are built with error monitoring. If anything fails, you get an instant Slack or email notification with the details. We also provide 30 days of post-launch support to fix any issues at no extra charge.' },
  { q: 'Can you build AI-powered automations?', a: 'Yes. We build flows where GPT-4 does things like categorize inbound leads, write personalised email drafts from CRM data, summarize documents, and sort support tickets by intent and urgency.' },
];

export default function AIAutomationPage({ svc }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* § 1 HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#030712', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, rgba(3,7,18,0.80) 0%, rgba(3,7,18,0.62) 38%, rgba(3,7,18,0.84) 78%, rgba(3,7,18,0.98) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: `radial-gradient(ellipse 80% 50% at 50% 15%, rgba(99,102,241,0.10) 0%, rgba(236,72,153,0.06) 45%, transparent 75%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none" aria-hidden="true" style={{ zIndex: 2 }} />

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8" style={{ color: AC, borderColor: `${AC}40`, background: `${AC}10` }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: AC }} animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            AI Business Automation — Rankston
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-[1.06] mb-6">
            You&apos;re paying people<br />
            <span style={{ background: `linear-gradient(135deg, ${AC} 0%, #EC4899 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              to do robot work.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Following up with leads, sending invoices, moving data between tools, scheduling posts — your team spends hours every week on tasks that should be fully automated. We map it all out for free and show you exactly what to automate first.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EC4899)`, boxShadow: `0 8px 32px ${AC}35` }}>
              Show Me What to Automate →
            </a>
            <a href="#ai-process" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white rounded-xl text-sm transition-all hover:border-white/30">
              See how automation works ↓
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.44 }}
            className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {ROI_METRICS.map((m) => (
              <div key={m.label} className="rounded-2xl p-5 border border-white/6 text-center" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="text-2xl mb-1">{m.icon}</div>
                <div className="text-xl font-extrabold font-poppins mb-1" style={{ color: m.color }}>{m.val}</div>
                <p className="text-xs text-gray-500 leading-snug">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute top-28 right-6 sm:right-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-indigo-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          28 hrs/mo Saved on Avg
        </motion.div>
        <motion.div className="absolute bottom-24 left-4 sm:left-14 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-emerald-400 shadow-lg" style={{ zIndex: 10 }}
          animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live in 4 Weeks
        </motion.div>
      </section>



      {/* § 2 AUTOMATION TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">6 Business Areas We Automate</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTOMATION_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-5 border border-white/6 hover:border-indigo-500/20 transition-all" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1">{t.tools.map((tool) => <span key={tool} className="text-xs px-2 py-0.5 rounded border border-white/8 text-gray-600">{tool}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 3 TECH STACK */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">Tools & Technologies We Use</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-xl p-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: t.color }} />
                <div><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-xs text-gray-600">{t.cat}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 4 PROCESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Audit to Live Automations in 4 Weeks</h2></div>
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

      {/* § 5 CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Automations That Changed These Businesses</h2></div>
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

      {/* § 6 WHY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">Why Rankston for AI Automation</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w) => <div key={w.title} className="rounded-2xl p-6 border border-white/6" style={{ background: 'rgba(17,24,39,0.85)' }}><div className="text-3xl mb-3">{w.icon}</div><h3 className="text-sm font-bold text-white mb-2">{w.title}</h3><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      {/* § 7 FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold font-poppins text-white">AI Automation FAQs</h2></div>
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

      <IndustriesSection serviceSlug="ai-automation" />
      {/* CTA */}
      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${AC}12, rgba(236,72,153,0.08))`, border: `1px solid ${AC}20` }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-2">Ready to Get 28+ Hours Back Per Month?</h2>
            <p className="text-gray-500 text-sm mb-6">Free automation audit — we identify your top 5 automation opportunities and estimate the ROI of each.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${AC}, #EC4899)` }}>
              Get Free Automation Audit →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
