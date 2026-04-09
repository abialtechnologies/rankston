import Link from 'next/link';
import Image from 'next/image';
import originals from '../../data/blog-posts.json';
import { getAllBlogPosts } from '../../data/blog-generator.js';
const blogPosts = getAllBlogPosts(originals);

export const metadata = {
  title: 'Digital Marketing Blog | Insights, Case Studies & Guides | Rankston',
  description: 'Expert digital marketing insights, case studies, and strategy guides from the Rankston team. Learn SEO, PPC, SMM, AI automation tactics that actually work.',
  alternates: { canonical: 'https://rankston.com/blog' },
};

const categoryStyle = {
  SEO:             'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'AI Automation': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  PPC:             'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Social Media':  'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">Blog</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-orange-500/60" /> Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
            Marketing Insights &{' '}
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            No-fluff strategies, case studies, and tactics from the team that's generated $94M+ in client revenue.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <article
            className="relative rounded-2xl overflow-hidden border border-white/6 hover:border-emerald-500/25 transition-all duration-300"
            style={{ background: 'rgba(17,24,39,0.8)' }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-60 lg:h-80 overflow-hidden">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/60 lg:block hidden" />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle[featured.category] || 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
                  {featured.category}
                </span>
                <span className="absolute top-4 right-4 text-xs font-semibold text-white/80 bg-black/40 border border-white/10 px-2.5 py-1 rounded-full">
                  Featured
                </span>
              </div>
              {/* Content */}
              <div className="p-7 lg:p-10 flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-bold font-poppins text-white leading-snug mb-3 group-hover:text-emerald-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-5">
                  <span>{new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 group-hover:gap-2.5 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Rest of posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article
                className="h-full rounded-2xl overflow-hidden border border-white/6 hover:border-emerald-500/20 transition-all duration-300"
                style={{ background: 'rgba(17,24,39,0.8)' }}
                itemScope itemType="https://schema.org/BlogPosting"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryStyle[post.category] || 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2
                    className="text-white font-bold font-poppins text-sm leading-snug mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2"
                    itemProp="headline"
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <time itemProp="datePublished" dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* ── INTERNAL LINKING — Service Pages ─────────────────────────
            Strengthens the blog → service page authority flow.
            Every blog visitor sees these links = crawlable signal to Google.
        ──────────────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-white/6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-5">Explore Our Services</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/seo-services',           label: 'SEO Services' },
              { href: '/ppc-advertising',         label: 'PPC & Google Ads' },
              { href: '/web-development',         label: 'Web Development' },
              { href: '/social-media-marketing',  label: 'Social Media Marketing' },
              { href: '/content-marketing',       label: 'Content Marketing' },
              { href: '/gmb-optimization',        label: 'Google My Business' },
              { href: '/graphic-designing',       label: 'Graphic Design' },
              { href: '/video-editing',           label: 'Video Editing' },
              { href: '/ai-automation',           label: 'AI Automation' },
              { href: '/chatbot-development',     label: 'Chatbot Development' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 text-xs font-medium rounded-full border border-white/8 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/25 transition-all"
                style={{ background: 'rgba(17,24,39,0.85)' }}
              >
                {s.label} →
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-700 mt-4">
            Looking for specific help?{' '}
            <Link href="/resources/seo-vs-google-ads-which-is-better" className="text-emerald-500 hover:underline">Compare SEO vs Google Ads</Link>
            {' '}or{' '}
            <Link href="/contact" className="text-emerald-500 hover:underline">get a free strategy call →</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

