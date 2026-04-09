import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Rankston — Worldwide Digital Marketing Agency',
  description: 'Rankston is a worldwide digital marketing agency offering SEO, Web Development, Social Media, Graphic Design, Video Editing, GMB, PPC, AI Automation, and Chatbot Development. 500+ clients served across 25+ countries.',
  alternates: { canonical: 'https://rankston.com/about' },
};

const stats = [
  { value: '500+',  label: 'Clients Worldwide' },
  { value: '312%',  label: 'Avg Traffic Growth' },
  { value: '$94M+', label: 'Revenue Generated' },
  { value: '25+',   label: 'Countries Served' },
];

const values = [
  {
    title: 'Results Over Promises',
    desc: 'We measure every campaign by one metric: did it grow your business? Everything else is noise.',
    color: '#10B981',
    icon: '🎯',
  },
  {
    title: 'Total Transparency',
    desc: "You always know where your money goes, what we're doing, and what results it's producing — in a live dashboard, updated daily.",
    color: '#3B82F6',
    icon: '🔍',
  },
  {
    title: 'Worldwide, Local Focus',
    desc: 'We serve businesses globally but understand the nuances of every local market — from Houston to Dubai to Sydney.',
    color: '#8B5CF6',
    icon: '🌍',
  },
  {
    title: 'AI-First Approach',
    desc: 'We integrate cutting-edge AI into everything — content, automation, chatbots, ad targeting — so your business always has an edge.',
    color: '#F59E0B',
    icon: '🤖',
  },
  {
    title: 'No Lock-Ins',
    desc: "We work month-to-month. You stay because we deliver — not because you're contractually trapped. That's how we prefer it.",
    color: '#EC4899',
    icon: '🔓',
  },
  {
    title: 'One Team, Full Stack',
    desc: 'From SEO to social media to web development — you get one team that handles everything. No outsourcing, no middlemen.',
    color: '#06B6D4',
    icon: '⚡',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Rankston Founded',
    desc: 'Started with 3 people and a single client. The mission: deliver agency-quality marketing at a price any business could afford.',
    color: '#10B981',
  },
  {
    year: '2021',
    title: '50 Clients. First $1M in Revenue Generated',
    desc: 'Crossed 50 active clients. Generated our first $1M in measurable revenue for our client base combined.',
    color: '#3B82F6',
  },
  {
    year: '2022',
    title: 'Went Worldwide',
    desc: 'Expanded from the US to the UK, UAE, Australia, Canada, and beyond. Started serving clients in 15+ countries.',
    color: '#8B5CF6',
  },
  {
    year: '2023',
    title: 'Launched AI Automation & Chatbot Services',
    desc: 'Added two new services ahead of the AI curve — AI Automation Workflows and Custom Chatbot Development. Both became top-sellers.',
    color: '#F59E0B',
  },
  {
    year: '2024',
    title: '500+ Clients. $94M Revenue Generated',
    desc: 'Hit a major milestone: 500+ active and past clients, $94M+ in measurable client revenue, and a 4.9-star average rating.',
    color: '#EC4899',
  },
  {
    year: '2025–Now',
    title: 'AIO / GEO — SEO for the AI Era',
    desc: 'Became one of the first agencies to formally offer AI Overview Optimization (AIO) and Generative Engine Optimization (GEO) — getting clients cited by ChatGPT, Perplexity, and AI Overviews.',
    color: '#06B6D4',
  },
];

const services = [
  'SEO / AIO / GEO', 'Website Development', 'Social Media Marketing',
  'Graphic Designing', 'Video Editing', 'Content Marketing',
  'GMB Optimization', 'PPC Advertising', 'AI Automation', 'Chatbot Development',
];

const serviceColors = ['#10B981','#3B82F6','#8B5CF6','#F97316','#06B6D4','#EC4899','#F59E0B','#EF4444','#84CC16','#A855F7'];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 py-8 mb-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">About</span>
        </nav>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-5">
              <span className="w-4 h-px bg-emerald-500/60" /> Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-5">
              We grow businesses online.{' '}
              <span className="gradient-text">Worldwide.</span>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Rankston was founded with one clear mission: give businesses of every size access to the same world-class digital marketing that only big brands used to afford. We started with 3 people. Today, we're a worldwide team serving 500+ businesses across 25+ countries.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              From a local bakery in Texas to an enterprise SaaS platform in Dubai — we've worked with all of them, and we've delivered results for all of them. No shortcuts, no outsourcing, no empty promises. Just real work that grows real businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
                Our Services
              </Link>
              <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-gray-300 hover:text-white hover:border-white/25 font-medium rounded-xl transition-all text-sm">
                Get Free Audit
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative rounded-2xl overflow-hidden h-80 lg:h-96"
            style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Rankston team working"
              fill
              className="object-cover opacity-70"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-emerald-500/25 bg-gray-950/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white">500+ Active Clients Worldwide</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-2xl p-6 border border-white/6"
              style={{ background: 'rgba(17,24,39,0.7)' }}
            >
              <div className="text-3xl font-extrabold gradient-text font-poppins mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-emerald-500/60" /> Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
              From 3 people to 500+ clients
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-white/6 -translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-950 mt-1.5" style={{ background: item.color }} />
                  {/* Card */}
                  <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div
                      className="rounded-2xl p-5 border border-white/6 relative overflow-hidden"
                      style={{ background: 'rgba(17,24,39,0.8)' }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: item.color }} />
                      <span className="text-xs font-bold uppercase tracking-widest mb-1 block" style={{ color: item.color }}>{item.year}</span>
                      <h3 className="text-white font-bold font-poppins text-sm mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-emerald-500/60" /> How We Operate
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 border border-white/6 relative overflow-hidden"
                style={{ background: 'rgba(17,24,39,0.8)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: v.color }} />
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <h3 className="text-base font-bold text-white font-poppins mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services we offer */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-8 text-center">
            Everything We Offer
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((s, i) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-2 rounded-full border border-white/8 text-gray-300"
                style={{ background: `${serviceColors[i % serviceColors.length]}10` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center mb-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
            Ready to work with us?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Start with a free audit. No commitment, no pressure — just a clear picture of where your online growth is stuck and how to fix it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20 text-sm">
              Get Your Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/12 text-gray-300 hover:text-white hover:border-white/25 font-medium rounded-xl transition-all text-sm">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
