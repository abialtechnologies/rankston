import servicesData from '../../data/services.json';
import Link from 'next/link';

export const metadata = {
  title: 'All Digital Marketing Services | Rankston',
  description: 'Explore all 10 Rankston services: SEO/AIO/GEO, Web Development, Social Media Marketing, Graphic Design, Video Editing, Content Marketing, GMB Optimization, PPC, AI Automation & Chatbot Development. Worldwide.',
  alternates: { canonical: 'https://rankston.com/services' },
};

const groupDefs = [
  { title: 'Search & Visibility', ids: ['seo-aio-geo', 'gmb-optimization'], icon: '🔍' },
  { title: 'Advertising',         ids: ['ppc-advertising', 'social-media-marketing'], icon: '📣' },
  { title: 'Creative Services',   ids: ['graphic-designing', 'video-editing', 'content-marketing'], icon: '🎨' },
  { title: 'Technology',          ids: ['web-development', 'ai-automation', 'chatbot-development'], icon: '💻' },
];

export default function ServicesPage() {
  const byId = Object.fromEntries(servicesData.map((s) => [s.id, s]));

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">Services</span>
        </nav>

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-emerald-500/60" /> What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
            All Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            10 premium digital marketing services for businesses worldwide — from local startups to enterprise brands. Every service is results-focused, transparent, and delivered with a dedicated team.
          </p>
        </div>

        {/* Service groups */}
        <div className="space-y-14">
          {groupDefs.map((group) => (
            <div key={group.title}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h2 className="text-lg font-bold text-white font-poppins">{group.title}</h2>
                <div className="flex-1 h-px bg-white/6 ml-2" />
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.ids.map((id) => {
                  const s = byId[id];
                  if (!s) return null;
                  return (
                    <div
                      key={id}
                      className="group relative rounded-2xl p-6 border border-white/6 hover:border-opacity-40 transition-all duration-300 overflow-hidden"
                      style={{ background: 'rgba(17,24,39,0.8)', '--accent': s.accentColor }}
                    >
                      {/* Top accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: s.accentColor }} />
                      {/* Corner glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at top right, ${s.accentColor}20, transparent 70%)` }} />

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                        style={{ background: `${s.accentColor}15`, border: `1px solid ${s.accentColor}30` }}
                      >
                        {id === 'seo-aio-geo' ? '🔍' : id === 'gmb-optimization' ? '📍' : id === 'ppc-advertising' ? '📈' : id === 'social-media-marketing' ? '📲' : id === 'content-marketing' ? '✍️' : id === 'graphic-designing' ? '🎨' : id === 'video-editing' ? '🎬' : id === 'web-development' ? '💻' : id === 'ai-automation' ? '🤖' : '💬'}
                      </div>

                      <h3 className="text-base font-bold text-white font-poppins mb-2 group-hover:text-white transition-colors" style={{ '--tw-text-opacity': 1 }}>
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>

                      {/* Result stat */}
                      <div className="mt-auto pt-3 border-t border-white/6">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-gray-600">{s.results.metric}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-gray-600 line-through text-xs">{s.results.before}</span>
                          <span className="font-bold" style={{ color: s.accentColor }}>{s.results.after}</span>
                          <span className="text-xs text-gray-700 ml-auto">{s.results.period}</span>
                        </div>
                      </div>

                      {/* Link */}
                      <Link
                        href={`/${s.slug}`}
                        className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        style={{ color: s.accentColor }}
                      >
                        Learn more
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3 relative">
            Not sure which service is right for you?
          </h2>
          <p className="text-gray-500 mb-6 relative max-w-md mx-auto">
            Get a free marketing audit and we'll tell you exactly where your biggest opportunities are.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 relative">
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20 text-sm">
              Get Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
            <a href="https://calendly.com/rankston" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-gray-300 hover:text-white hover:border-white/25 font-medium rounded-xl transition-all text-sm">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
