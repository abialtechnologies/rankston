import { notFound } from 'next/navigation';
import services from '../../../../data/services.json';
import { NICHES, buildNicheContent } from '../../../../data/niche-content-generator.js';
import NichePage from '../../../../components/NichePage';

/* ── generateStaticParams ─────────────────────────────────────── */
export async function generateStaticParams() {
  const params = [];
  services.forEach((svc) => {
    NICHES.forEach((niche) => {
      params.push({ service: svc.slug, niche: niche.slug });
    });
  });
  return params;
}

/* ── generateMetadata ─────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { service, niche: nicheSlug } = await params;
  const svc = services.find((s) => s.slug === service);
  const niche = NICHES.find((n) => n.slug === nicheSlug);
  if (!svc || !niche) return { title: 'Not Found' };

  const title = `${svc.title} for ${niche.label} | Rankston`;
  const desc = `Rankston delivers specialized ${svc.title.toLowerCase()} for ${niche.label.toLowerCase()} across the USA. Industry-specific strategies, proven results, no long-term contracts.`;
  const url = `https://rankston.com/${svc.slug}/for/${niche.slug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, siteName: 'Rankston', type: 'website' },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ServiceNichePage({ params }) {
  const { service, niche: nicheSlug } = await params;
  const svc = services.find((s) => s.slug === service);
  const niche = NICHES.find((n) => n.slug === nicheSlug);
  if (!svc || !niche) notFound();

  const content = buildNicheContent(service, nicheSlug);

  /* JSON-LD */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${svc.title} for ${niche.label}`,
    description: `Specialized ${svc.title.toLowerCase()} services for ${niche.label.toLowerCase()} in the USA.`,
    provider: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
    serviceType: `${svc.title} for ${niche.label}`,
    areaServed: { '@type': 'Country', name: 'United States' },
    url: `https://rankston.com/${svc.slug}/for/${niche.slug}`,
  };

  const faqSchema = content?.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <NichePage svc={svc} niche={niche} content={content} />
    </>
  );
}
