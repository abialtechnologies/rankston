import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import TawkProvider from '../components/TawkProvider';
import './globals.css';
import LayoutShell from '../components/LayoutShell';
import LanguageSuggestionBanner from '../components/LanguageSuggestionBanner';

/**
 * Root fonts — Inter as primary, Poppins for headings
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

/**
 * Default metadata (overridden per-page via generateMetadata)
 */
export const metadata = {
  metadataBase: new URL('https://rankston.com'),
  title: {
    default: 'Rankston — #1 Digital Marketing Agency Worldwide',
    template: '%s | Rankston Digital Marketing',
  },
  description:
    'Rankston helps businesses worldwide dominate Google, AI search, and generate leads with data-driven SEO, PPC, AIO, GEO, AI automation, and high-converting web design.',
  keywords: [
    'digital marketing agency', 'SEO services', 'PPC advertising',
    'web development', 'content marketing', 'AI automation',
    'lead generation', 'Rankston', 'AIO optimization', 'GEO optimization',
  ],
  authors: [{ name: 'Rankston Team', url: 'https://rankston.com' }],
  creator: 'Rankston',
  publisher: 'Rankston',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
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
    type: 'website',
    locale: 'en_US',
    url: 'https://rankston.com',
    siteName: 'Rankston',
    title: 'Rankston — #1 Digital Marketing Agency Worldwide',
    description: 'Data-driven SEO, PPC, AI automation, and web development that delivers measurable ROI.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rankston Digital Marketing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rankston — #1 Digital Marketing Agency Worldwide',
    description: 'Data-driven SEO, PPC, AI automation, and web development that delivers measurable ROI.',
    creator: '@rankston',
    images: ['/og-image.jpg'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rankston.com/#organization',
  name: 'Rankston',
  url: 'https://rankston.com',
  logo: 'https://rankston.com/logo.png',
  description: 'Rankston is a full-service digital marketing agency headquartered in the USA, offering SEO, local SEO, PPC, Google Ads, web development, social media marketing, content marketing, GMB optimization, AI automation, and chatbot development. Serving 500+ businesses across all 50 US states.',
  foundingDate: '2020',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  knowsAbout: [
    'Search Engine Optimization', 'Local SEO', 'Technical SEO', 'AI Overviews Optimization',
    'Generative Engine Optimization', 'Google Business Profile Optimization', 'Pay-Per-Click Advertising',
    'Google Ads Management', 'Facebook Ads', 'Social Media Marketing', 'Content Marketing',
    'Web Development', 'WordPress Development', 'Shopify Development', 'AI Automation',
    'Marketing Automation', 'Chatbot Development', 'Conversion Rate Optimization',
    'Email Marketing', 'Link Building', 'Keyword Research', 'E-commerce SEO',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services USA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google My Business Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC & Google Ads Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development & Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation & Chatbots' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing' } },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic', 'Spanish', 'German'],
    areaServed: 'US',
  },
  sameAs: [
    'https://www.facebook.com/rankston',
    'https://twitter.com/rankston',
    'https://www.linkedin.com/company/rankston',
    'https://www.instagram.com/rankston',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://rankston.com/#website',
  url: 'https://rankston.com',
  name: 'Rankston',
  publisher: { '@id': 'https://rankston.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://rankston.com/blog?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0VLH52T1S7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0VLH52T1S7');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="text-white antialiased overscroll-none">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>

        <LanguageSuggestionBanner />
        <LayoutShell>{children}</LayoutShell>
        
        {/* Tawk.to Live Chat & AI integration */}
        <TawkProvider />
      </body>
    </html>
  );
}
