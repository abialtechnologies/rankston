import { notFound } from 'next/navigation';
import services from '../../../../data/services.json';
import IndustryPage from '../../../../components/IndustryPage';
import LeadForm from '../../../../components/LeadForm';

// ─── Per-service industry data (modular JS files — richer data) ───────────
import seoIndustries from '../../../../data/industries/seo-services';
import gmbIndustries from '../../../../data/industries/gmb-optimization';
import ppcIndustries from '../../../../data/industries/ppc-advertising';

// ─── JSON fallback for all other services ─────────────────────────────────
import industryMapJson from '../../../../data/service-industries.json';

const serviceIndustriesMap = {
  'seo-services': seoIndustries,
  'gmb-optimization': gmbIndustries,
  'ppc-advertising': ppcIndustries,
  // Additional JS-file-backed services can be registered here as they are created
};

function getIndustriesData(serviceSlug) {
  // Prefer modular JS file (richer data); fall back to JSON for remaining services
  return serviceIndustriesMap[serviceSlug] || industryMapJson[serviceSlug] || { label: '', accentColor: '#10B981', industries: [] };
}


export async function generateStaticParams() {
  const params = [];

  // JS-file-backed services (richer data)
  for (const [serviceSlug, data] of Object.entries(serviceIndustriesMap)) {
    for (const industry of data.industries) {
      params.push({ service: serviceSlug, industrySlug: industry.slug });
    }
  }

  // JSON-backed services (all remaining services in service-industries.json)
  for (const [serviceSlug, data] of Object.entries(industryMapJson)) {
    if (serviceIndustriesMap[serviceSlug]) continue; // already handled above
    for (const industry of (data.industries || [])) {
      params.push({ service: serviceSlug, industrySlug: industry.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const { service, industrySlug } = await params;
  const svc = services.find((s) => s.slug === service);
  const svcIndustries = getIndustriesData(service);
  const industry = svcIndustries?.industries.find((i) => i.slug === industrySlug);
  if (!svc || !industry) return { title: 'Not Found' };

  const title = `${svc.shortTitle || svc.title} for ${industry.name} | Rankston`;
  const description = `${industry.heroSubtitle.slice(0, 140)} Free audit.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://rankston.com/${svc.slug}/industry/${industry.slug}`,
    },
    openGraph: { title, description, url: `https://rankston.com/${svc.slug}/industry/${industry.slug}` },
  };
}

export default async function IndustryServicePage({ params }) {
  const { service, industrySlug } = await params;
  const svc = services.find((s) => s.slug === service);
  const svcIndustries = getIndustriesData(service);
  const industry = svcIndustries?.industries.find((i) => i.slug === industrySlug);
  if (!svc || !industry) notFound();

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rankston.com' },
        { '@type': 'ListItem', position: 2, name: svc.title, item: `https://rankston.com/${svc.slug}` },
        { '@type': 'ListItem', position: 3, name: industry.name, item: `https://rankston.com/${svc.slug}/industry/${industry.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: industry.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${svc.title} for ${industry.name}`,
      description: industry.heroSubtitle,
      provider: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
      audience: { '@type': 'Audience', audienceType: industry.name },
      url: `https://rankston.com/${svc.slug}/industry/${industry.slug}`,
    },
  ];

  const siblingIndustries = svcIndustries.industries.filter((i) => i.slug !== industrySlug);

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <IndustryPage svc={svc} industry={industry} siblingIndustries={siblingIndustries} />
      <div id="contact">
        <LeadForm />
      </div>
    </>
  );
}
