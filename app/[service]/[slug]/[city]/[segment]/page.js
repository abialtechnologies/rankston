import { notFound } from 'next/navigation';
import services from '../../../../../data/services.json';
import locations from '../../../../../data/locations.json';
import { SEGMENTS, TOP_CITIES_FOR_SEGMENTS, getSegment } from '../../../../../data/city-segments.js';
import buildCityContent from '../../../../../data/city-content-generator.js';
import CitySegmentPage from '../../../../../components/CitySegmentPage';

/* ── Static params — top cities × 5 segments × 10 services ── */
export async function generateStaticParams() {
  const params = [];
  services.forEach((svc) => {
    locations.forEach((stateData) => {
      stateData.cities
        .filter((c) => TOP_CITIES_FOR_SEGMENTS.includes(c.citySlug))
        .forEach((cityData) => {
          SEGMENTS.forEach((seg) => {
            params.push({
              service: svc.slug,
              slug: stateData.stateSlug,
              city: cityData.citySlug,
              segment: seg.slug,
            });
          });
        });
    });
  });
  return params;
}

function findState(slug) { return locations.find((s) => s.stateSlug === slug); }
function findCity(stateData, citySlug) { return (stateData.cities || []).find((c) => c.citySlug === citySlug); }

/* ── Metadata ── */
export async function generateMetadata({ params }) {
  const { service, slug, city: citySlug, segment: segSlug } = await params;
  const svc       = services.find((s) => s.slug === service);
  const stateData = findState(slug);
  if (!svc || !stateData) return { title: 'Not Found' };
  const cityData = findCity(stateData, citySlug);
  const seg      = getSegment(segSlug);
  if (!cityData || !seg) return { title: 'Not Found' };

  const title = `${svc.title} for ${seg.label} in ${cityData.city}, ${stateData.stateAbbr} | Rankston`;
  const introText = seg.intro(svc.shortTitle || svc.title, cityData.city, stateData.state);
  const desc  = `${svc.title} services for ${seg.label.toLowerCase()} in ${cityData.city}, ${stateData.state}. ${introText.slice(0, 140)}...`;
  const url   = `https://rankston.com/${service}/${slug}/${citySlug}/${segSlug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, siteName: 'Rankston', type: 'website' },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

/* ── Page ── */
export default async function CitySegmentRoute({ params }) {
  const { service, slug, city: citySlug, segment: segSlug } = await params;
  const svc       = services.find((s) => s.slug === service);
  if (!svc) notFound();
  const stateData = findState(slug);
  if (!stateData) notFound();
  const cityData  = findCity(stateData, citySlug);
  if (!cityData) notFound();
  const seg       = getSegment(segSlug);
  if (!seg) notFound();

  const content     = buildCityContent(service, stateData, cityData);
  const nearbyCities = (stateData.cities || []).filter((c) => c.citySlug !== citySlug).slice(0, 6);
  const otherSegs    = SEGMENTS.filter((s) => s.slug !== segSlug);

  // Resolve the intro function server-side — functions cannot be passed to Client Components
  const introText = seg.intro(svc.shortTitle || svc.title, cityData.city, stateData.state);
  const segFaqs   = seg.faqs || [];
  const segData = {
    slug:    seg.slug,
    label:   seg.label,
    icon:    seg.icon,
    intro:   introText,          // plain string, not a function
    painPoints: seg.painPoints,
    stats:   seg.stats,
    faqs:    segFaqs,
  };

  /* ── Schemas ── */
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',          item: 'https://rankston.com' },
      { '@type': 'ListItem', position: 2, name: svc.title,       item: `https://rankston.com/${service}` },
      { '@type': 'ListItem', position: 3, name: stateData.state, item: `https://rankston.com/${service}/${slug}` },
      { '@type': 'ListItem', position: 4, name: cityData.city,   item: `https://rankston.com/${service}/${slug}/${citySlug}` },
      { '@type': 'ListItem', position: 5, name: seg.label,       item: `https://rankston.com/${service}/${slug}/${citySlug}/${segSlug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${svc.title} for ${seg.label} in ${cityData.city}`,
    description: introText,
    provider: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
    areaServed: { '@type': 'City', name: cityData.city, containedIn: { '@type': 'State', name: stateData.state } },
    serviceType: `${svc.title} for ${seg.label}`,
    url: `https://rankston.com/${service}/${slug}/${citySlug}/${segSlug}`,
  };

  /* ── FAQ schema — feeds Google rich results + AI Overview ── */
  const faqSchema = segFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: segFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <CitySegmentPage
        svc={svc}
        stateData={stateData}
        cityData={cityData}
        seg={segData}
        content={content}
        nearbyCities={nearbyCities}
        otherSegs={otherSegs.map(s => ({ slug: s.slug, label: s.label, icon: s.icon }))}
      />
    </>
  );
}
