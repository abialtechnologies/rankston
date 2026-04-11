'use client';

import Link from 'next/link';

export default function SEOLocationPage({ page, relatedPages = [] }) {
  const { content, seo, serviceTitle, serviceSlug, location } = page;

  return (
    <div className="min-h-screen pt-24">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10,15,26,1) 0%, rgba(17,24,39,1) 100%)',
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(16,185,129,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${serviceSlug}`} className="hover:text-white transition-colors capitalize">
              {serviceTitle}
            </Link>
            <span>/</span>
            <span className="text-emerald-400">{location}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">{location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
            {content.h1}
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.heroParagraph }}
          />

          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
              style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}
            >
              Get Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://calendly.com/rankston"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/25 font-medium text-sm transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Content Sections ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {content.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-5">
              {section.h2}
            </h2>
            <div className="text-gray-400 leading-relaxed space-y-4">
              {section.body.split('\n\n').map((para, j) => (
                <p
                  key={j}
                  className="text-base"
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                      .replace(/^• /, ''),
                  }}
                />
              ))}
            </div>
            {i < content.sections.length - 1 && (
              <div className="mt-12 h-px bg-white/5" />
            )}
          </section>
        ))}

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/6 overflow-hidden"
                style={{ background: 'rgba(17,24,39,0.8)' }}
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-white font-medium hover:text-emerald-400 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg
                    className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: content.faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              }),
            }}
          />
        </section>

        {/* ── Internal Links — Related Pages ── */}
        {relatedPages.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-white font-poppins mb-5">
              {serviceTitle} in Other US States
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {relatedPages.map((rel, i) => (
                <Link
                  key={i}
                  href={rel.url}
                  className="px-4 py-3 rounded-xl border border-white/6 text-sm text-gray-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                  style={{ background: 'rgba(17,24,39,0.6)' }}
                >
                  {serviceTitle} in {rel.location} →
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 100%)',
            border: '1px solid rgba(16,185,129,0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3 relative">
            {content.cta.heading}
          </h2>
          <p className="text-gray-500 mb-6 relative max-w-md mx-auto">
            {content.cta.subheading}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 relative">
            <a
              href={content.cta.buttonLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
              style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}
            >
              {content.cta.buttonText}
            </a>
            <a
              href={content.cta.secondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 font-medium text-sm transition-all"
            >
              {content.cta.secondaryText}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
