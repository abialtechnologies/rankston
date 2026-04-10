import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPublishedSlugs } from '../../../lib/db.js';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle || `${post.title} | Rankston Blog`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `https://rankston.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

const categoryStyle = {
  SEO:             'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'AI Automation': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  PPC:             'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Social Media':  'text-pink-400 bg-pink-400/10 border-pink-400/20',
  'Web Development': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Content Marketing': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'GMB Optimization': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  'Digital Marketing': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Article JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.metaDescription,
    image: post.featuredImage || undefined,
    author: { '@type': 'Organization', name: post.author || 'Rankston' },
    publisher: { '@type': 'Organization', name: 'Rankston', logo: { '@type': 'ImageObject', url: 'https://rankston.com/logo.png' } },
    datePublished: post.publishDate || post.createdAt,
    dateModified: post.updatedAt || post.publishDate,
    mainEntityOfPage: `https://rankston.com/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-emerald-400 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle[post.category] || 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-600">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-poppins leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author + date */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-white/6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">{(post.author || 'R')[0]}</span>
          </div>
          <div>
            <p className="text-gray-300 font-medium">{post.author}</p>
            <p className="text-gray-600 text-xs">
              {new Date(post.publishDate || post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* Content — HTML from TipTap */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-poppins prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-400 prose-p:leading-relaxed
            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:my-8
            prose-blockquote:border-l-emerald-500/60 prose-blockquote:text-gray-400 prose-blockquote:italic
            prose-strong:text-white
            prose-li:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl border border-emerald-500/20" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.05))' }}>
          <h3 className="text-xl font-bold text-white font-poppins mb-2">Ready to grow your business?</h3>
          <p className="text-gray-400 text-sm mb-4">Get a free digital marketing audit from the Rankston team.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm"
          >
            Get Free Audit →
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
