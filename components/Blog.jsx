'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import blogPosts from '../data/blog-posts.json';

const categoryStyle = {
  SEO:             { pill: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25', bar: '#10B981' },
  'AI Automation': { pill: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',         bar: '#06B6D4' },
  PPC:             { pill: 'text-violet-400 bg-violet-500/10 border-violet-500/25',   bar: '#8B5CF6' },
  'Social Media':  { pill: 'text-pink-400 bg-pink-500/10 border-pink-500/25',         bar: '#EC4899' },
};
const defaultStyle = { pill: 'text-gray-400 bg-white/5 border-white/10', bar: '#6B7280' };

function SpotlightCard({ children, color, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: '50%', y: '30%' });
  const [hov, setHov] = useState(false);
  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: `${((e.clientX - r.left) / r.width) * 100}%`, y: `${((e.clientY - r.top) / r.height) * 100}%` });
  }, []);
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{ background: 'rgba(17,24,39,0.8)', backdropFilter: 'blur(16px)', border: `1px solid ${hov ? color + '55' : 'rgba(255,255,255,0.06)'}`, boxShadow: hov ? `0 8px 40px ${color}22` : 'none' }}
      onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hov ? 1 : 0, background: `radial-gradient(220px circle at ${pos.x} ${pos.y}, ${color}22, transparent 70%)` }} />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300" style={{ background: color, opacity: hov ? 0.6 : 0 }} />
      {children}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="blog" ref={ref} className="relative overflow-hidden" style={{ padding: '6rem 1rem' }} aria-label="Blog and Resources">
      <div aria-hidden className="absolute pointer-events-none" style={{ bottom: '20%', right: '10%', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-orange-500/60" /> Resources <span className="w-4 h-px bg-orange-500/60" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight">
              Marketing Insights &amp;{' '}
              <span className="gradient-text">Case Studies</span>
            </h2>
          </div>
          <Link href="/blog" id="blog-view-all-link"
            className="group flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors shrink-0 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full px-4 py-2"
          >
            View all articles
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Featured post + grid */}
        <div className="grid lg:grid-cols-5 gap-4 mb-4">

          {/* Featured card with real image */}
          {blogPosts[0] && (() => {
            const post = blogPosts[0];
            const style = categoryStyle[post.category] || defaultStyle;
            return (
              <motion.article
                custom={0} variants={cardVariants} initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="lg:col-span-3"
                itemScope itemType="https://schema.org/BlogPosting"
              >
                <SpotlightCard color={style.bar} className="h-full group">
                  <Link href={`/blog/${post.slug}`} id={`blog-post-${post.id}-featured`} className="flex flex-col h-full">
                    {/* Real thumbnail image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width:1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                      <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${style.pill}`}>
                        {post.category}
                      </span>
                      <span className="absolute bottom-4 left-4 text-xs font-bold text-white/60 uppercase tracking-widest">Featured</span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-xl font-poppins leading-snug mb-3 group-hover:text-emerald-400 transition-colors" itemProp="headline">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1" itemProp="description">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3.5 h-3.5" />
                            <time itemProp="datePublished" dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </time>
                          </span>
                          <span className="flex items-center gap-1"><ClockIcon className="w-3.5 h-3.5" />{post.readTime}</span>
                        </div>
                        <span className="text-xs font-medium text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read more <ArrowRightIcon className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </SpotlightCard>
              </motion.article>
            );
          })()}

          {/* Secondary cards with real thumbnails */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {blogPosts.slice(1, 3).map((post, i) => {
              const style = categoryStyle[post.category] || defaultStyle;
              return (
                <motion.article
                  key={post.id}
                  custom={i + 1} variants={cardVariants} initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="flex-1"
                  itemScope itemType="https://schema.org/BlogPosting"
                >
                  <SpotlightCard color={style.bar} className="h-full group">
                    <Link href={`/blog/${post.slug}`} id={`blog-post-${post.id}`} className="flex h-full p-5 gap-4">
                      {/* Real thumbnail */}
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="80px"
                        />
                        <div className="absolute inset-0 bg-gray-950/20" />
                      </div>
                      <div className="flex flex-col justify-between min-w-0">
                        <div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${style.pill} mb-2 inline-block`}>{post.category}</span>
                          <h3 className="text-white font-bold text-sm font-poppins leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors" itemProp="headline">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                          <ClockIcon className="w-3 h-3" />{post.readTime}
                        </div>
                      </div>
                    </Link>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Tags row */}
        <motion.div
          className="flex flex-wrap gap-2 mt-6"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-xs text-gray-600 mr-1 self-center">Popular topics:</span>
          {['SEO Strategy', 'Local SEO', 'AI Marketing', 'Google Ads', 'Lead Gen', 'Content'].map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-white/4 border border-white/6 rounded-full px-3 py-1 hover:border-emerald-500/25 hover:text-gray-300 cursor-pointer transition-all">
              #{tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
