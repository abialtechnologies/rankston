import { notFound } from 'next/navigation';
import { RESOURCE_PAGES, getResourcePage, getRelatedResources } from '../../../data/resource-pages.js';
import ResourcePage from '../../../components/ResourcePage';

/* ── Static params ─────────────────────────────────────────────── */
export async function generateStaticParams() {
  return RESOURCE_PAGES.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ──────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) return { title: 'Not Found' };

  const url = `https://rankston.com/resources/${slug}`;
  return {
    title: `${page.title} | Rankston`,
    description: page.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.metaDesc, url, siteName: 'Rankston', type: 'article' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.metaDesc },
  };
}

/* ── Page ──────────────────────────────────────────────────────── */
export default async function ResourceSlugPage({ params }) {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) notFound();

  const related = getRelatedResources(slug, 3);

  /* FAQ schema */
  const faqSchema = page.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  /* Article schema */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.metaDesc,
    author: { '@type': 'Organization', name: 'Rankston' },
    publisher: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
    url: `https://rankston.com/resources/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ResourcePage page={page} related={related} />
    </>
  );
}
