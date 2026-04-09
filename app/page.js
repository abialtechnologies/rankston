import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import SectionReveal from '../components/SectionReveal';

const WhyRankston  = dynamic(() => import('../components/WhyRankston'));
const Services     = dynamic(() => import('../components/Services'));
const ROICalculator = dynamic(() => import('../components/ROICalculator'));
const CaseStudies  = dynamic(() => import('../components/CaseStudies'));
const Process      = dynamic(() => import('../components/Process'));
const Blog         = dynamic(() => import('../components/Blog'));
const LeadForm     = dynamic(() => import('../components/LeadForm'));


/**
 * Homepage metadata — concise, keyword-rich for USA businesses
 */
export const metadata = {
  title: 'Rankston — #1 Digital Marketing Agency Worldwide | SEO, PPC, AI',
  description:
    'Rankston is a worldwide digital marketing agency helping businesses grow with SEO, AIO, GEO, PPC, web development, content marketing, AI automation, and chatbot development. Get your free audit today.',
  alternates: {
    canonical: 'https://rankston.com',
    languages: {
      'en': 'https://rankston.com',
      'es': 'https://rankston.com/es',
      'ar': 'https://rankston.com/ar',
      'de': 'https://rankston.com/de',
      'x-default': 'https://rankston.com',
    },
  },
  openGraph: {
    title: 'Rankston — #1 Digital Marketing Agency Worldwide',
    description: 'Dominate Google, AI search engines, and convert more. Get your free marketing audit today.',
    url: 'https://rankston.com',
  },
};

/**
 * LocalBusiness JSON-LD schema for the homepage
 */
const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rankston',
  url: 'https://rankston.com',
  logo: 'https://rankston.com/logo.png',
  description: 'USA digital marketing agency specializing in SEO, PPC, web development, content marketing, and AI automation.',
  telephone: '+1-800-555-1234',
  email: 'support@rankston.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  areaServed: 'US',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://linkedin.com/company/rankston',
    'https://twitter.com/rankston',
    'https://facebook.com/rankston',
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Page sections with scroll-reveal */}
      <Hero />

      <SectionReveal step={2} totalSteps={7}>
        <WhyRankston />
      </SectionReveal>

      <SectionReveal step={3} totalSteps={7}>
        <Services />
      </SectionReveal>

      {/* ROI Calculator — interactive lead-gen section */}
      <SectionReveal step={4} totalSteps={7}>
        <ROICalculator />
      </SectionReveal>

      <SectionReveal step={5} totalSteps={7}>
        <CaseStudies />
      </SectionReveal>

      <SectionReveal step={6} totalSteps={7}>
        <Process />
      </SectionReveal>

      <SectionReveal step={7} totalSteps={8} showStep={false}>
        <Blog />
      </SectionReveal>

      <SectionReveal step={8} totalSteps={8} showStep={false}>
        <LeadForm />
      </SectionReveal>
    </>
  );
}
