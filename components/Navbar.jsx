'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon, XMarkIcon, ArrowRightIcon, ChevronRightIcon,
  ChevronLeftIcon, ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';

/* ─────────────────────────────────────────────────────────
   Service catalog (matches services.json)
───────────────────────────────────────────────────────── */
const services = [
  {
    id: 'seo-services',        href: '/seo-services',
    label: 'SEO / AIO / GEO',  short: 'Rank on Google, AI & beyond',
    icon: '🔍', color: '#10B981', group: 'Search',
  },
  {
    id: 'gmb-optimization',    href: '/gmb-optimization',
    label: 'GMB Optimization',  short: 'Dominate the Google Map Pack',
    icon: '📍', color: '#22C55E', group: 'Search',
  },
  {
    id: 'ppc-advertising',     href: '/ppc-advertising',
    label: 'PPC Advertising',   short: 'Google Ads & Meta Ads ROI',
    icon: '📈', color: '#06B6D4', group: 'Advertising',
  },
  {
    id: 'social-media-marketing', href: '/social-media-marketing',
    label: 'Social Media',      short: 'Grow & monetise your audience',
    icon: '📲', color: '#EC4899', group: 'Advertising',
  },
  {
    id: 'content-marketing',   href: '/content-marketing',
    label: 'Content Marketing', short: 'Content that ranks & converts',
    icon: '✍️', color: '#F59E0B', group: 'Creative',
  },
  {
    id: 'graphic-designing',   href: '/graphic-designing',
    label: 'Graphic Designing', short: 'Visuals that stop the scroll',
    icon: '🎨', color: '#8B5CF6', group: 'Creative',
  },
  {
    id: 'video-editing',       href: '/video-editing',
    label: 'Video Editing',     short: 'Reels, ads & brand films',
    icon: '🎬', color: '#F97316', group: 'Creative',
  },
  {
    id: 'web-development',     href: '/web-development',
    label: 'Web Development',   short: 'WordPress & enterprise sites',
    icon: '💻', color: '#3B82F6', group: 'Technology',
  },
  {
    id: 'ai-automation',       href: '/ai-automation',
    label: 'AI Automation',     short: 'Automate. Scale. Dominate.',
    icon: '🤖', color: '#6366F1', group: 'Technology',
  },
  {
    id: 'chatbot-development', href: '/chatbot-development',
    label: 'Chatbot Development', short: 'WhatsApp, IG & web bots 24/7',
    icon: '💬', color: '#14B8A6', group: 'Technology',
  },
];

const serviceGroups = [
  { title: 'Search & Visibility', ids: ['seo-services', 'gmb-optimization'] },
  { title: 'Advertising',         ids: ['ppc-advertising', 'social-media-marketing'] },
  { title: 'Creative',            ids: ['content-marketing', 'graphic-designing', 'video-editing'] },
  { title: 'Technology',          ids: ['web-development', 'ai-automation', 'chatbot-development'] },
];

const byId = Object.fromEntries(services.map((s) => [s.id, s]));

/* ─────────────────────────────────────────────────────────
   Mini SVG icons for main nav
───────────────────────────────────────────────────────── */
const NavIcons = {
  home:    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  grid:    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  chart:   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  bolt:    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  book:    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
  mail:    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

/* ─────────────────────────────────────────────────────────
   Desktop Mega Menu
───────────────────────────────────────────────────────── */
function MegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute left-1/2 top-full mt-3 z-50"
      style={{ transform: 'translateX(-50%)', width: 'min(860px, 92vw)' }}
    >
      {/* Arrow tip */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-gray-900 border-l border-t border-white/10" />

      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: 'rgba(10,14,26,0.97)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Top accent */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #10B981 30%, #3B82F6 70%, transparent 100%)' }} />

        <div className="grid grid-cols-3 gap-0">
          {/* Service groups — 3 cols */}
          <div className="col-span-2 grid grid-cols-2 gap-0 divide-x divide-white/5">
            {serviceGroups.map((group) => (
              <div key={group.title} className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3 px-2">{group.title}</p>
                <div className="space-y-0.5">
                  {group.ids.map((id) => {
                    const s = byId[id];
                    if (!s) return null;
                    return (
                      <Link
                        key={id}
                        href={s.href}
                        onClick={onClose}
                        className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200"
                      >
                        <span
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0 transition-transform duration-200 group-hover:scale-110"
                          style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                        >
                          {s.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-none mb-0.5">{s.label}</p>
                          <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors leading-none truncate">{s.short}</p>
                        </div>
                        <ArrowRightIcon
                          className="w-3 h-3 text-gray-700 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all ml-auto shrink-0"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right CTA panel */}
          <div className="p-5 flex flex-col justify-between border-l border-white/5">
            {/* Free audit box */}
            <div
              className="rounded-xl p-4 mb-3 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(59,130,246,0.08) 100%)', border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.2), transparent 70%)' }} />
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">100% Free</p>
              <p className="text-sm font-semibold text-white mb-1">Marketing Audit</p>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">Get a full breakdown of your SEO, ads, and competitors — in 24 hours.</p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onClose(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-lg gradient-bg hover:opacity-90 transition-opacity"
              >
                Get Free Audit <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>

            {/* Stats */}
            <div className="space-y-2">
              {[
                { val: '500+', label: 'Clients Worldwide' },
                { val: '312%', label: 'Avg Traffic Growth' },
                { val: '24h',  label: 'Audit Delivery' },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between px-1">
                  <span className="text-xs text-gray-600">{s.label}</span>
                  <span className="text-sm font-bold gradient-text">{s.val}</span>
                </div>
              ))}
            </div>

            {/* View all */}
            <Link
              href="/services"
              onClick={onClose}
              className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 transition-colors border border-white/8 hover:border-emerald-500/30 rounded-lg py-2"
            >
              View all services <ArrowUpRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Mobile Drawer — 3-layer slide system
   Layer 0: Main nav
   Layer 1: Services list
   Layer 2: Service detail
───────────────────────────────────────────────────────── */
function MobileDrawer({ open, onClose }) {
  const [layer, setLayer] = useState(0);
  const [activeService, setActiveService] = useState(null);

  // Reset to layer 0 when drawer closes
  useEffect(() => {
    if (!open) setTimeout(() => setLayer(0), 350);
  }, [open]);

  const smoothScroll = useCallback((href) => {
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 320);
  }, [onClose]);

  const slideVariants = {
    enter:  (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };
  const slideTransition = { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] };

  const mainNavItems = [
    { label: 'Home',     href: '/',        icon: NavIcons.home, isLink: true },
    { label: 'Services', href: '#services', icon: NavIcons.grid, isServices: true },
    { label: 'Results',  href: '#results',  icon: NavIcons.chart },
    { label: 'Process',  href: '#process',  icon: NavIcons.bolt },
    { label: 'Blog',     href: '/blog',     icon: NavIcons.book, isLink: true },
    { label: 'Contact',  href: '/contact',  icon: NavIcons.mail, isLink: true },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 bottom-0 z-50 overflow-hidden flex flex-col"
            style={{
              width: 'min(340px, 92vw)',
              background: 'rgba(10,14,26,0.98)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Top accent line */}
            <div className="h-px w-full shrink-0" style={{ background: 'linear-gradient(90deg, transparent, #10B981, #3B82F6, transparent)' }} />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/6 shrink-0">
              <div className="flex items-center gap-2.5">
                {layer > 0 && (
                  <motion.button
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                    onClick={() => setLayer((l) => l - 1)}
                    className="w-7 h-7 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </motion.button>
                )}
                <span className="text-sm font-semibold text-white">
                  {layer === 0 ? 'Menu' : layer === 1 ? 'Our Services' : activeService?.label}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Layers — animated slide */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="popLayout" custom={layer}>

                {/* ── Layer 0: Main nav ── */}
                {layer === 0 && (
                  <motion.div
                    key="layer0"
                    custom={-1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="p-4 space-y-1">
                      {mainNavItems.map((item) => (
                        item.isServices ? (
                          <button
                            key={item.label}
                            onClick={() => setLayer(1)}
                            className="group w-full flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-white/5 transition-all text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                {item.icon}
                              </span>
                              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-600 bg-white/5 rounded-full px-2 py-0.5">10</span>
                              <ChevronRightIcon className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </button>
                        ) : item.isLink ? (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-white/5 transition-all"
                          >
                            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 group-hover:text-emerald-400 group-hover:border-emerald-500/25 transition-all">
                              {item.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                          </Link>
                        ) : (
                          <button
                            key={item.label}
                            onClick={() => smoothScroll(item.href)}
                            className="group w-full flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-white/5 transition-all text-left"
                          >
                            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 group-hover:text-emerald-400 group-hover:border-emerald-500/25 transition-all">
                              {item.icon}
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                          </button>
                        )
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="p-4 pt-0">
                      <div className="border-t border-white/6 pt-4">
                        <a
                          href="#contact"
                          onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }}
                          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gradient-bg text-white text-sm font-semibold shadow-lg shadow-emerald-500/20"
                        >
                          Get Free Audit <ArrowRightIcon className="w-4 h-4" />
                        </a>
                        <a
                          href="https://calendly.com/rankston"
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/8 text-gray-400 hover:text-white text-sm font-medium transition-all mt-2"
                        >
                          Book a Call <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── Layer 1: Services grid ── */}
                {layer === 1 && (
                  <motion.div
                    key="layer1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="p-4">
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-3 px-1">Tap a service to learn more</p>
                      {serviceGroups.map((group) => (
                        <div key={group.title} className="mb-4">
                          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1.5 px-1">{group.title}</p>
                          <div className="space-y-0.5">
                            {group.ids.map((id) => {
                              const s = byId[id];
                              if (!s) return null;
                              return (
                                <button
                                  key={id}
                                  onClick={() => { setActiveService(s); setLayer(2); }}
                                  className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
                                >
                                  <span
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform duration-200 group-hover:scale-110"
                                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                                  >
                                    {s.icon}
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{s.label}</p>
                                    <p className="text-xs text-gray-600 truncate">{s.short}</p>
                                  </div>
                                  <ChevronRightIcon className="w-3.5 h-3.5 text-gray-700 group-hover:text-emerald-400 transition-all shrink-0" />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── Layer 2: Service detail ── */}
                {layer === 2 && activeService && (
                  <motion.div
                    key="layer2"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <div className="p-5">
                      {/* Hero block */}
                      <div
                        className="rounded-2xl p-5 mb-5 relative overflow-hidden"
                        style={{ background: `${activeService.color}12`, border: `1px solid ${activeService.color}30` }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${activeService.color}25, transparent 70%)` }} />
                        <span className="text-4xl mb-3 block">{activeService.icon}</span>
                        <h3 className="text-lg font-bold text-white font-poppins mb-1">{activeService.label}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{activeService.short}</p>
                      </div>

                      {/* Features preview */}
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">What's included</p>
                      <ul className="space-y-2 mb-6">
                        {[
                          'Full strategy & roadmap',
                          'Dedicated account manager',
                          'Monthly performance reports',
                          'Real-time dashboard access',
                        ].map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: activeService.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* CTAs */}
                      <div className="space-y-2">
                        <Link
                          href={activeService.href}
                          onClick={onClose}
                          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                          style={{ background: `linear-gradient(135deg, ${activeService.color}, #3B82F6)` }}
                        >
                          Learn More <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <a
                          href="#contact"
                          onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }}
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white text-sm font-medium transition-all"
                        >
                          Get Free Audit
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Layer progress dots */}
            <div className="flex items-center justify-center gap-1.5 py-3 shrink-0">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  animate={{ width: i === layer ? 20 : 6, height: 6, background: i === layer ? '#10B981' : 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Navbar
───────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [megaOpen,    setMegaOpen]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMegaOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home',     href: '/',        icon: NavIcons.home,  isLink: true },
    { label: 'Services', href: '/services', icon: NavIcons.grid,  isLink: true, isServices: true },
    { label: 'Blog',     href: '/blog',     icon: NavIcons.book,  isLink: true },
    { label: 'About',    href: '/about',    icon: NavIcons.chart, isLink: true },
    { label: 'Contact',  href: '/contact',  icon: NavIcons.mail, isLink: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'}`}
        role="banner"
      >
        <div className={`relative w-full max-w-6xl mx-4 transition-all duration-300 ${scrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
          <nav
            className={`flex items-center justify-between gap-4 px-4 py-2 rounded-full border transition-all duration-300 ${
              scrolled ? 'bg-gray-900/96 backdrop-blur-2xl border-white/10' : 'bg-gray-900/80 backdrop-blur-lg border-white/10'
            }`}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 pl-1 group" aria-label="Rankston home">
              <img
                src="/logo-icon.png"
                alt="Rankston"
                className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-85"
                style={{ maxWidth: 160 }}
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {/* Home */}
              <li>
                <Link href="/" className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/8 transition-all text-sm font-medium">
                  <span className="w-5 h-5 rounded-md bg-white/8 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors text-gray-400 group-hover:text-emerald-400">{NavIcons.home}</span>
                  Home
                </Link>
              </li>

              {/* Services with mega menu */}
              <li
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-sm font-medium ${megaOpen ? 'text-white bg-white/8' : 'text-gray-300 hover:text-white hover:bg-white/8'}`}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${megaOpen ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/8 group-hover:bg-emerald-500/20 text-gray-400 group-hover:text-emerald-400'}`}>
                    {NavIcons.grid}
                  </span>
                  Services
                  <motion.svg
                    className="w-3 h-3 text-gray-500"
                    animate={{ rotate: megaOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
                </AnimatePresence>
              </li>

              {/* Other nav links: Blog / About / Contact */}
              {navLinks.slice(2).map((link) => (
                <li key={link.label}>
                  {link.isLink ? (
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/8 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors text-gray-400 group-hover:text-emerald-400">{link.icon}</span>
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => smoothScroll(e, link.href)}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/8 transition-all text-sm font-medium"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/8 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors text-gray-400 group-hover:text-emerald-400">{link.icon}</span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2 shrink-0 pr-1">
              <LanguageSwitcher />
              <Link
                href="/contact"
                id="nav-cta-audit"
                className="px-4 py-1.5 text-sm font-semibold rounded-full gradient-bg text-white hover:opacity-90 transition-opacity shadow-sm shadow-emerald-500/20"
              >
                Get Free Audit
              </Link>
              <Link
                href="/contact"
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center border border-white/10"
                aria-label="Contact us"
              >
                <ArrowRightIcon className="w-3.5 h-3.5 text-white -rotate-45" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              id="mobile-menu-btn"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              className="md:hidden w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-white transition-colors mr-1 border border-white/10"
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><XMarkIcon className="w-4 h-4" /></motion.span>
                  : <motion.span key="bars" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Bars3Icon className="w-4 h-4" /></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer — outside header so it's full-screen */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
