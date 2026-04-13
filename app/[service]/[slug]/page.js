import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import services from '../../../data/services.json';
import locations from '../../../data/locations.json';
import ukLocations from '../../../data/uk-locations.json';
import subServices from '../../../data/sub-services.js';
import SubServicePage from '../../../components/SubServicePage';
import StateHubPage from '../../../components/state-pages/StateHubPage';
import SEOLocationPage from '../../../components/seo/SEOLocationPage';
import LeadForm from '../../../components/LeadForm';
import { buildStateContent } from '../../../data/state-content-generator.js';
import { buildUKContent } from '../../../data/uk-content-generator.js';

const SEO_PAGES_DIR = path.join(process.cwd(), 'data', 'seo-automation', 'pages');

function getSeoPage(serviceSlug, slug) {
  // Try exact match first (USA legacy)
  const legacyFileName = `${serviceSlug}--${slug}.json`;
  const legacyFilePath = path.join(SEO_PAGES_DIR, legacyFileName);
  if (fs.existsSync(legacyFilePath)) {
    return JSON.parse(fs.readFileSync(legacyFilePath, 'utf-8'));
  }

  // Try country-prefixed files (e.g. uk--seo-services--london.json)
  if (fs.existsSync(SEO_PAGES_DIR)) {
    const files = fs.readdirSync(SEO_PAGES_DIR);
    const matchingFile = files.find(f => f.endsWith(`--${serviceSlug}--${slug}.json`));
    if (matchingFile) {
      return JSON.parse(fs.readFileSync(path.join(SEO_PAGES_DIR, matchingFile), 'utf-8'));
    }
  }

  return null;
}

function getAllSeoPages() {
  if (!fs.existsSync(SEO_PAGES_DIR)) return [];
  return fs.readdirSync(SEO_PAGES_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(SEO_PAGES_DIR, f), 'utf-8')));
}

/* ------------------------------------------------------------------ */
/*  generateStaticParams – emit BOTH state slugs AND sub-service slugs */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  const params = [];

  // USA State pages: /[service]/[stateSlug]
  services.forEach((svc) => {
    locations.forEach((stateData) => {
      params.push({ service: svc.slug, slug: stateData.stateSlug });
    });
  });

  // UK Region pages: /[service]/[ukRegionSlug]
  services.forEach((svc) => {
    ukLocations.forEach((regionData) => {
      params.push({ service: svc.slug, slug: regionData.stateSlug });
    });
  });

  // Sub-service pages: /[service]/[subSlug]
  for (const [serviceSlug, subs] of Object.entries(subServices)) {
    for (const sub of subs) {
      params.push({ service: serviceSlug, slug: sub.slug });
    }
  }

  // SEO automation pages: /[service]/[location-cluster-slug]
  const seoPages = getAllSeoPages();
  for (const p of seoPages) {
    params.push({ service: p.serviceSlug, slug: p.locationSlug });
  }

  return params;
}

/* ------------------------------------------------------------------ */
/*  Helpers to determine the slug type                                */
/* ------------------------------------------------------------------ */
function findState(slug) {
  return locations.find((s) => s.stateSlug === slug);
}

// ── UK region lookup ───────────────────────────────────────────────
function findUKRegion(slug) {
  return ukLocations.find((r) => r.stateSlug === slug) || null;
}

function findSubService(serviceSlug, slug) {
  const subs = subServices[serviceSlug];
  if (!subs) return null;
  return subs.find((s) => s.slug === slug) || null;
}

/* ------------------------------------------------------------------ */
/*  generateMetadata                                                  */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }) {
  const { service, slug } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) return { title: 'Not Found' };

  // Try USA state page first
  const stateData = findState(slug);
  if (stateData) {
    const title = `${svc.title} in ${stateData.state} | Rankston`;
    const desc  = `Looking for ${svc.title.toLowerCase()} in ${stateData.state}? Rankston helps businesses in ${stateData.cities.slice(0,3).map(c=>c.city).join(', ')} grow with proven ${svc.title.toLowerCase()} strategies. Get a free audit today.`;
    const url   = `https://rankston.com/${svc.slug}/${stateData.stateSlug}`;
    return {
      title,
      description: desc,
      alternates: { canonical: url },
      openGraph: {
        title,
        description: desc,
        url,
        siteName: 'Rankston',
        type: 'website',
        images: [{ url: `https://rankston.com/og/${svc.slug}-${stateData.stateSlug}.jpg`, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: desc,
      },
    };
  }

  // Try UK region page
  const ukRegion = findUKRegion(slug);
  if (ukRegion) {
    const title = `${svc.title} in ${ukRegion.state} | Rankston UK`;
    const desc  = `Looking for ${svc.title.toLowerCase()} in ${ukRegion.state}? Rankston helps businesses across ${ukRegion.state} — from ${ukRegion.cities[0]?.city || 'major cities'} to smaller markets — grow with proven UK digital marketing strategies. Get a free audit today.`;
    const url   = `https://rankston.com/${svc.slug}/${ukRegion.stateSlug}`;
    return {
      title,
      description: desc,
      alternates: { canonical: url },
      openGraph: {
        title,
        description: desc,
        url,
        siteName: 'Rankston',
        type: 'website',
        images: [{ url: `https://rankston.com/og/${svc.slug}-${ukRegion.stateSlug}.jpg`, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: desc,
      },
    };
  }

  // Try sub-service page
  const sub = findSubService(service, slug);
  if (sub) {
    return {
      title: `${sub.label} | ${svc.title} | Rankston`,
      description: sub.desc,
      alternates: { canonical: `https://rankston.com/${service}/${slug}` },
      openGraph: {
        title: `${sub.label} | Rankston`,
        description: sub.desc,
        url: `https://rankston.com/${service}/${slug}`,
      },
    };
  }

  // Try SEO automation page
  const seoPage = getSeoPage(service, slug);
  if (seoPage) {
    return {
      title: seoPage.seo.metaTitle,
      description: seoPage.seo.metaDescription,
      alternates: { canonical: seoPage.seo.canonical },
      openGraph: {
        title: seoPage.seo.metaTitle,
        description: seoPage.seo.metaDescription,
        url: seoPage.seo.canonical,
      },
    };
  }

  return { title: 'Not Found' };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default async function ServiceSlugPage({ params }) {
  const { service, slug } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) notFound();

  const AC = svc.accentColor || '#10B981';

  // ── USA State page ─────────────────────────────────────────────────
  const stateData = findState(slug);
  if (stateData) {
    const content = buildStateContent(service, stateData);

    /* ── Breadcrumb schema ── */
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://rankston.com' },
        { '@type': 'ListItem', position: 2, name: svc.title,   item: `https://rankston.com/${svc.slug}` },
        { '@type': 'ListItem', position: 3, name: stateData.state, item: `https://rankston.com/${svc.slug}/${stateData.stateSlug}` },
      ],
    };

    /* ── Service schema ── */
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${svc.title} in ${stateData.state}`,
      description: content?.heroSub || `Professional ${svc.title.toLowerCase()} services for businesses in ${stateData.state}.`,
      provider: {
        '@type': 'Organization',
        name: 'Rankston',
        url: 'https://rankston.com',
        logo: 'https://rankston.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: 'English',
        },
      },
      areaServed: {
        '@type': 'State',
        name: stateData.state,
        containsPlace: (stateData.cities || []).slice(0, 5).map(c => ({
          '@type': 'City',
          name: c.city,
        })),
      },
      serviceType: svc.title,
      url: `https://rankston.com/${svc.slug}/${stateData.stateSlug}`,
    };

    /* ── FAQ schema (feeds AI Overview & GEO directly) ── */
    const faqItems = (content?.faqs || []).map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }));
    const faqSchema = faqItems.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems,
    } : null;

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        {faqSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        )}
        <StateHubPage svc={svc} stateData={stateData} content={content} />
      </>
    );
  }

  // ── UK Region page ─────────────────────────────────────────────────
  const ukRegion = findUKRegion(slug);
  if (ukRegion) {
    const content = buildUKContent(service, ukRegion);

    /* ── Breadcrumb schema ── */
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://rankston.com' },
        { '@type': 'ListItem', position: 2, name: svc.title,     item: `https://rankston.com/${svc.slug}` },
        { '@type': 'ListItem', position: 3, name: ukRegion.state, item: `https://rankston.com/${svc.slug}/${ukRegion.stateSlug}` },
      ],
    };

    /* ── Service schema ── */
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${svc.title} in ${ukRegion.state}`,
      description: content?.heroSub || `Professional ${svc.title.toLowerCase()} services for businesses across ${ukRegion.state}.`,
      provider: {
        '@type': 'Organization',
        name: 'Rankston',
        url: 'https://rankston.com',
        logo: 'https://rankston.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: 'en-GB',
        },
      },
      areaServed: {
        '@type': 'Country',
        name: ukRegion.country === 'uk' ? 'United Kingdom' : ukRegion.state,
        containsPlace: (ukRegion.cities || []).slice(0, 5).map(c => ({
          '@type': 'City',
          name: c.city,
        })),
      },
      serviceType: svc.title,
      url: `https://rankston.com/${svc.slug}/${ukRegion.stateSlug}`,
    };

    /* ── FAQ schema ── */
    const faqItems = (content?.faqs || []).map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }));
    const faqSchema = faqItems.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems,
    } : null;

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        {faqSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        )}
        <StateHubPage svc={svc} stateData={ukRegion} content={content} />
      </>
    );
  }


  // ── Sub-service page ──────────────────────────────────────────────
  const subs = subServices[service];
  const sub2 = subs ? subs.find((s) => s.slug === slug) : null;
  if (sub2) {
    const related = subs.filter((s) => s.slug !== slug).slice(0, 4);
    return (
      <>
        <SubServicePage sub={sub2} service={svc} related={related} />
        <div id="contact"><LeadForm /></div>
      </>
    );
  }

  // ── SEO Automation page ───────────────────────────────────────────
  const seoPage = getSeoPage(service, slug);
  if (seoPage) {
    const allSeoPages = getAllSeoPages();
    const relatedPages = allSeoPages
      .filter(p => p.serviceSlug === service && p.locationSlug !== slug)
      .slice(0, 6)
      .map(p => ({
        title: `${p.serviceTitle} in ${p.location}`,
        url: `/${p.serviceSlug}/${p.locationSlug}`,
        location: p.location,
      }));
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoPage.seo.schema) }} />
        <SEOLocationPage page={seoPage} relatedPages={relatedPages} />
      </>
    );
  }

  notFound();
}
