import { notFound }         from 'next/navigation';
import services              from '../../../../data/services.json';
import locations             from '../../../../data/locations.json';
import buildCityContent      from '../../../../data/city-content-generator.js';
import { buildStateContent } from '../../../../data/state-content-generator.js';
import CityPage              from '../../../../components/city-pages/CityPage';

/* ── 10 × 161 = 1,610 static city pages ── */
export async function generateStaticParams() {
  const params = [];
  services.forEach((svc) => {
    locations.forEach((stateData) => {
      stateData.cities.forEach((cityData) => {
        params.push({ service: svc.slug, slug: stateData.stateSlug, city: cityData.citySlug });
      });
    });
  });
  return params;
}

function findState(slug)              { return locations.find((s) => s.stateSlug === slug); }
function findCity(stateData, citySlug){ return (stateData.cities || []).find((c) => c.citySlug === citySlug); }

/* ── Metadata ── */
export async function generateMetadata({ params }) {
  const { service, slug, city: citySlug } = await params;
  const svc       = services.find((s) => s.slug === service);
  const stateData = findState(slug);
  if (!svc || !stateData) return { title: 'Not Found' };
  const cityData = findCity(stateData, citySlug);
  if (!cityData) return { title: 'Not Found' };

  const title = `${svc.title} in ${cityData.city}, ${stateData.stateAbbr} | Rankston`;
  const desc  = `Looking for ${svc.title.toLowerCase()} in ${cityData.city}? Rankston helps ${cityData.city} businesses grow with proven digital strategies. Free strategy call available.`;
  const url   = `https://rankston.com/${service}/${slug}/${citySlug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title, description: desc, url,
      siteName: 'Rankston', type: 'website',
      images: [{ url: `https://rankston.com/og/${service}-${citySlug}.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

/* ── Page component ── */
export default async function CityServicePage({ params }) {
  const { service, slug, city: citySlug } = await params;
  const svc       = services.find((s) => s.slug === service);
  if (!svc) notFound();
  const stateData = findState(slug);
  if (!stateData) notFound();
  const cityData  = findCity(stateData, citySlug);
  if (!cityData) notFound();

  const content      = buildCityContent(service, stateData, cityData);
  const stateContent = buildStateContent(service, stateData);
  const nearbyCities = (stateData.cities || []).filter((c) => c.citySlug !== citySlug).slice(0, 8);

  /* ── JSON-LD schemas ── */
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://rankston.com' },
      { '@type': 'ListItem', position: 2, name: svc.title,          item: `https://rankston.com/${service}` },
      { '@type': 'ListItem', position: 3, name: stateData.state,    item: `https://rankston.com/${service}/${slug}` },
      { '@type': 'ListItem', position: 4, name: cityData.city,      item: `https://rankston.com/${service}/${slug}/${citySlug}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:        `${svc.title} in ${cityData.city}`,
    description:  content.heroSub,
    provider: {
      '@type': 'Organization',
      name:    'Rankston',
      url:     'https://rankston.com',
      logo:    'https://rankston.com/logo.png',
    },
    areaServed: {
      '@type': 'City',
      name:    cityData.city,
      containedIn: { '@type': 'State', name: stateData.state },
    },
    serviceType: svc.title,
    url: `https://rankston.com/${service}/${slug}/${citySlug}`,
  };

  const localBiz = {
    '@context': 'https://schema.org',
    '@type':    'LocalBusiness',
    name:        `Rankston — ${svc.title} ${cityData.city}`,
    description: `Professional ${svc.title} services for businesses in ${cityData.city}, ${stateData.state}`,
    url:         `https://rankston.com/${service}/${slug}/${citySlug}`,
    areaServed: {
      '@type': 'City',
      name:    cityData.city,
      containedInPlace: { '@type': 'State', name: stateData.state },
    },
    address: {
      '@type':          'PostalAddress',
      addressLocality:   cityData.city,
      addressRegion:     stateData.stateAbbr,
      postalCode:        (cityData.zipcodes || [])[0] || '',
      addressCountry:   'US',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200' },
  };

  const faqSchema = content.faqs.length > 0 ? {
    '@context':  'https://schema.org',
    '@type':     'FAQPage',
    mainEntity:   content.faqs.map((f) => ({
      '@type': 'Question',
      name:    f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <CityPage
        svc={svc}
        stateData={stateData}
        cityData={cityData}
        content={content}
        stateContent={stateContent}
        nearbyCities={nearbyCities}
      />
    </>
  );
}
