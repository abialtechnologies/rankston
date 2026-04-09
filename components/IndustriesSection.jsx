'use client';
import industryMap from '../data/service-industries.json';

export default function IndustriesSection({ serviceSlug }) {
  const data = industryMap[serviceSlug];
  if (!data || !data.industries?.length) return null;
  const AC = data.accentColor || '#10B981';

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: AC }}
          >
            <span className="w-4 h-px" style={{ background: AC }} /> Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
            {data.label} Strategies Built for Your Industry
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Every industry has unique challenges, buyer journeys, and competitive dynamics.
            Click your industry for a strategy built specifically for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.industries.map((ind) => (
            <a
              key={ind.slug}
              href={`/${serviceSlug}/industry/${ind.slug}`}
              className="group rounded-2xl p-5 border border-white/6 hover:border-white/20 transition-all hover:shadow-lg"
              style={{ background: 'rgba(17,24,39,0.85)' }}
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3
                className="text-sm font-bold text-white mb-1 transition-colors"
                style={{ '--accent': AC }}
              >
                {ind.name}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">
                {ind.tagline}
              </p>
              <span className="text-xs font-semibold" style={{ color: AC }}>
                View strategy →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
