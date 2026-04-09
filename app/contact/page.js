import Link from 'next/link';
import {
  EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon,
  ArrowRightIcon, ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us | Get a Free Marketing Audit | Rankston',
  description: 'Get in touch with Rankston\'s digital marketing team. Request a free audit, ask a question, or start your project today. We respond within 24 hours.',
  alternates: { canonical: 'https://rankston.com/contact' },
};

const contactMethods = [
  {
    icon: EnvelopeIcon,
    label: 'Email Us',
    value: 'support@rankston.com',
    href: 'mailto:support@rankston.com',
    color: '#10B981',
    desc: 'We reply within 24 hours, always.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    label: 'WhatsApp',
    value: '+1 (800) 555-1234',
    href: 'https://wa.me/18005551234',
    color: '#25D366',
    desc: 'Chat with us instantly on WhatsApp.',
  },
  {
    icon: MapPinIcon,
    label: 'Our Office',
    value: 'Worldwide — Fully Remote',
    href: null,
    color: '#3B82F6',
    desc: 'We serve clients across 25+ countries.',
  },
  {
    icon: ClockIcon,
    label: 'Business Hours',
    value: 'Mon – Fri, 9am – 6pm EST',
    href: null,
    color: '#8B5CF6',
    desc: 'We\'re also available on weekends for urgent queries.',
  },
];

const faqs = [
  {
    q: 'How long does it take to get a response?',
    a: 'We respond to all enquiries within 24 hours. Most get a reply the same day.',
  },
  {
    q: 'Is the free audit actually free?',
    a: 'Yes, completely. No credit card, no commitment. We analyse your SEO, ads, and online presence and send you a detailed report.',
  },
  {
    q: 'Do you work with businesses outside the US?',
    a: 'Absolutely — we serve 500+ clients across 25+ countries. All our work is done remotely.',
  },
  {
    q: 'Can I start with just one service?',
    a: 'Yes. Many clients start with one service and expand over time. There are no minimum commitments.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 py-8 mb-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">Contact</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-5">
            <span className="w-4 h-px bg-emerald-500/60" /> Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
            Let&apos;s talk about{' '}
            <span className="gradient-text">growing your business</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Send us a message, book a call, or just ask a question. There&apos;s no pressure — we&apos;re here to help.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">

          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-5 border border-white/6 relative overflow-hidden"
                style={{ background: 'rgba(17,24,39,0.8)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: m.color }} />
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
                  >
                    <m.icon className="w-5 h-5" style={{ color: m.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: m.color }}>{m.label}</p>
                    {m.href ? (
                      <a href={m.href} className="text-white font-semibold text-sm hover:underline">{m.value}</a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{m.value}</p>
                    )}
                    <p className="text-gray-600 text-xs mt-0.5">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust badges */}
            <div
              className="rounded-2xl p-5 border border-emerald-500/15"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(59,130,246,0.04))' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Why businesses choose us</p>
              {[
                '✓ Free audit — no credit card needed',
                '✓ Month-to-month, cancel anytime',
                '✓ 500+ clients across 25+ countries',
                '✓ Response guaranteed in 24 hours',
              ].map((t) => (
                <p key={t} className="text-sm text-gray-400 mb-2">{t}</p>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 border border-white/8"
              style={{ background: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(16px)' }}
            >
              <h2 className="text-xl font-extrabold font-poppins text-white mb-1">Send us a message</h2>
              <p className="text-gray-600 text-sm mb-7">We&apos;ll get back to you within 24 hours. No pitch, just honest help.</p>

              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl p-6 border border-white/6"
                style={{ background: 'rgba(17,24,39,0.7)' }}
              >
                <h3 className="text-white font-semibold font-poppins text-sm mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="rounded-2xl p-10 text-center mb-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.06) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-3">
            Prefer to see our work first?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Browse our services, read case studies, or check out how we&apos;ve helped businesses like yours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20 text-sm">
              See All Services <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 border border-white/12 text-gray-300 hover:text-white hover:border-white/25 font-medium rounded-xl transition-all text-sm">
              Read Case Studies
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
