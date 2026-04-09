'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ── Data ─────────────────────────────────────────────────── */
const SERVICES = [
  { label: 'SEO / AIO / GEO',       href: '/seo-services',           icon: '🔍', color: '#10B981' },
  { label: 'GMB Optimization',       href: '/gmb-optimization',       icon: '📍', color: '#22C55E' },
  { label: 'PPC Advertising',        href: '/ppc-advertising',        icon: '📈', color: '#06B6D4' },
  { label: 'Social Media Marketing', href: '/social-media-marketing', icon: '📲', color: '#EC4899' },
  { label: 'Content Marketing',      href: '/content-marketing',      icon: '✍️', color: '#F59E0B' },
  { label: 'Graphic Designing',      href: '/graphic-designing',      icon: '🎨', color: '#8B5CF6' },
  { label: 'Video Editing',          href: '/video-editing',          icon: '🎬', color: '#F97316' },
  { label: 'Web Development',        href: '/web-development',        icon: '💻', color: '#3B82F6' },
  { label: 'AI Automation',          href: '/ai-automation',          icon: '🤖', color: '#6366F1' },
  { label: 'Chatbot Development',    href: '/chatbot-development',    icon: '💬', color: '#14B8A6' },
];

const COMPANY = [
  { label: 'About Us',   href: '/about' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/contact' },
  { label: 'Services',   href: '/services' },
];

const LEGAL = [
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',  href: '/terms' },
];

const CONTACT = [
  { icon: '✉️', label: 'support@rankston.com', href: 'mailto:support@rankston.com' },
  { icon: '📞', label: '+1 (800) 555-1234',  href: 'tel:+18005551234' },
  { icon: '📅', label: 'Book a Call',        href: 'https://calendly.com/rankston', ext: true },
];

const SOCIALS = [
  {
    label: 'LinkedIn', href: 'https://linkedin.com/company/rankston', color: '#0A66C2',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM.02 8h4.96v14H.02V8zm7.9 0h4.76v1.91h.07c.66-1.25 2.28-2.56 4.69-2.56 5.01 0 5.94 3.3 5.94 7.59V22h-4.96v-6.22c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.38 1.62-2.38 3.29V22H7.92V8z" /></svg>,
  },
  {
    label: 'X / Twitter', href: 'https://twitter.com/rankston', color: '#E7E9EA',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'Instagram', href: 'https://instagram.com/rankston', color: '#E1306C',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    label: 'Facebook', href: 'https://facebook.com/rankston', color: '#1877F2',
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
];

const STATS = [
  { val: '500+',  label: 'Clients' },
  { val: '25+',   label: 'Countries' },
  { val: '$94M+', label: 'Revenue' },
  { val: '4.9★',  label: 'Rating' },
];

/* ── Component ─────────────────────────────────────────────── */
export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [year] = useState(new Date().getFullYear());

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050810 0%, #020305 100%)' }}
      aria-label="Site Footer"
    >
      {/* ── Ambient glows ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ top: '-10%', left: '-5%', width: 800, height: 800, background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        <div className="absolute" style={{ bottom: '5%', right: '-5%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translateX(-50%)', width: 1000, height: 300, background: 'radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ── Rainbow top border ── */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #10B981 20%, #3B82F6 40%, #8B5CF6 60%, #EC4899 80%, transparent)' }} />

      {/* ══════════════════════════════════
          SECTION 1 — Newsletter CTA
      ══════════════════════════════════ */}
      <div className="relative w-full px-4 sm:px-8 pt-14 pb-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(99,102,241,0.06) 50%, rgba(59,130,246,0.08) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
          >
            {/* Bg decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.15), transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, rgba(99,102,241,0.12), transparent 60%)' }} />

            <div className="relative grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Free Weekly Growth Tips
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white leading-tight mb-3">
                  Stay ahead of{' '}
                  <span style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    the algorithm.
                  </span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  SEO updates, AI marketing moves, and case studies — straight to your inbox. No spam, ever.
                </p>
              </div>
              <div>
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold text-sm"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    You&apos;re subscribed — welcome aboard!
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!email) return;
                      try {
                        await fetch('/api/lead', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ formType: 'newsletter', email }),
                        });
                      } catch {}
                      setSubscribed(true);
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-emerald-500/40 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                      style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}
                    >
                      Subscribe →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 2 — Main Footer Grid
      ══════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column — spans 4 cols */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="Rankston Home">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Rankston logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xl font-extrabold font-poppins text-white tracking-tight">
                RANKSTON
              </span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              A worldwide digital marketing agency helping 500+ businesses grow with SEO, paid ads, web development, AI automation, and more.
            </p>

            {/* Stats mini-row */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl px-3 py-2.5 text-center border border-white/6"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <p className="text-sm font-extrabold font-poppins" style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.val}
                  </p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 border border-white/6 hover:text-white transition-all duration-200"
                  style={{ '--hover-color': s.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.background = s.color + '12'; e.currentTarget.style.color = s.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column — spans 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2.5 text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}
                    >
                      {s.icon}
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column — Company + Contact — spans 4 cols */}
          <div className="lg:col-span-4 space-y-8">
            {/* Company links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Company</h3>
              <ul className="space-y-2">
                {COMPANY.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</h3>
              <ul className="space-y-3">
                {CONTACT.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.ext ? '_blank' : undefined}
                      rel={c.ext ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-white transition-colors group"
                    >
                      <span className="text-base">{c.icon}</span>
                      <span className="group-hover:underline underline-offset-2">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free Audit CTA */}
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.05))', border: '1px solid rgba(16,185,129,0.20)' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.2), transparent 70%)' }} />
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1.5">100% Free — No Commitment</p>
              <p className="text-white font-semibold text-sm mb-1">Get Your Marketing Audit</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">A full breakdown of your SEO, ads, and growth gaps — delivered in 24 hours.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}
              >
                Get Free Audit →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 3 — Bottom Bar
      ══════════════════════════════════ */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700 text-center sm:text-left">
            © {year} Rankston. All rights reserved. Worldwide Digital Marketing Agency.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
                {l.label}
              </Link>
            ))}
            <span className="text-xs text-gray-700">·</span>
            <span className="text-xs text-gray-700">Made with ❤️ for growth</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
