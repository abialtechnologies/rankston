import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import originals from '../../../data/blog-posts.json';
import { getAllBlogPosts } from '../../../data/blog-generator.js';
import ArticleInteractions from '../../../components/ArticleInteractions';

const blogPosts = getAllBlogPosts(originals);

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Rankston Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://rankston.com/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [post.thumbnail] },
  };
}

const categoryStyle = {
  SEO:             'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'AI Automation': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  PPC:             'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Social Media':  'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

function renderBlock(block, i) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={i} className="text-lg text-gray-300 leading-relaxed font-medium border-l-2 border-emerald-500/60 pl-4 italic">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 key={i} className="text-2xl font-bold text-white font-poppins mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={i} className="text-gray-400 leading-relaxed text-base">
          {block.text}
        </p>
      );
    case 'image':
      return (
        <figure key={i} className="my-8">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 760px"
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.id !== post.id && (p.serviceSlug === post.serviceSlug || p.category === post.category))
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
    publisher: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com', logo: { '@type': 'ImageObject', url: 'https://rankston.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rankston.com/blog/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rankston.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rankston.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://rankston.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="min-h-screen pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12" itemScope itemType="https://schema.org/BlogPosting">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-emerald-400 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle[post.category] || 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-600">{post.readTime}</span>
          <span className="text-xs text-gray-600">·</span>
          <time className="text-xs text-gray-600" dateTime={post.publishedAt} itemProp="datePublished">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
          <span className="text-xs text-gray-600">·</span>
          <span className="text-xs text-gray-600" itemProp="author">{post.author}</span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white leading-tight mb-6"
          itemProp="headline"
        >
          {post.title}
        </h1>

        {/* Hero thumbnail */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width:768px) 100vw, 760px"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
        </div>

        {/* Article content */}
        <div className="space-y-5 prose-custom" itemProp="articleBody">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-white/4 border border-white/8 rounded-full px-3 py-1">
              #{tag}
            </span>
          ))}
        </div>

        {/* Reactions + Share + Comments */}
        <ArticleInteractions title={post.title} slug={post.slug} />
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="h-px bg-white/6 mb-10" />
          <h3 className="text-lg font-bold text-white font-poppins mb-6">More Articles</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-white/6 hover:border-emerald-500/20 transition-all" style={{ background: 'rgba(17,24,39,0.8)' }}>
                  <div className="relative h-32 overflow-hidden">
                    <Image src={p.thumbnail} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">{p.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{p.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}\n\n      {/* ── RELATED SERVICES — blog post → service page internal links ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="h-px bg-white/6 mb-8" />
        <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Related Services</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/seo-services',           label: '🔍 SEO Services' },
            { href: '/ppc-advertising',         label: '💰 PPC & Google Ads' },
            { href: '/web-development',         label: '💻 Web Development' },
            { href: '/social-media-marketing',  label: '📱 Social Media Marketing' },
            { href: '/content-marketing',       label: '✍️ Content Marketing' },
            { href: '/gmb-optimization',        label: '📍 Google My Business' },
            { href: '/ai-automation',           label: '🤖 AI Automation' },
            { href: '/chatbot-development',     label: '💬 Chatbot Development' },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/8 text-gray-500 hover:text-emerald-400 hover:border-emerald-500/25 transition-all"
              style={{ background: 'rgba(17,24,39,0.85)' }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

