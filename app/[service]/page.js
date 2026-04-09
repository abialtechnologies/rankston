import { notFound } from 'next/navigation';
import services from '../../data/services.json';
import serviceDetail from '../../data/service-detail.json';
import LeadForm from '../../components/LeadForm';
import SEOPage from '../../components/service-pages/SEOPage';
import WebDevPage from '../../components/service-pages/WebDevPage';
import PPCPage from '../../components/service-pages/PPCPage';
import SMMPage from '../../components/service-pages/SMMPage';
import GMBPage from '../../components/service-pages/GMBPage';
import GraphicDesignPage from '../../components/service-pages/GraphicDesignPage';
import VideoEditingPage from '../../components/service-pages/VideoEditingPage';
import ContentMarketingPage from '../../components/service-pages/ContentMarketingPage';
import AIAutomationPage from '../../components/service-pages/AIAutomationPage';
import ChatbotPage from '../../components/service-pages/ChatbotPage';
import GenericServicePage from '../../components/service-pages/GenericServicePage';

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) return { title: 'Not Found' };
  return {
    title: `${svc.title} Services | Rankston — Worldwide`,
    description: svc.description,
    alternates: { canonical: `https://rankston.com/${svc.slug}` },
    openGraph: {
      title: `${svc.title} | Rankston`,
      description: svc.description,
      url: `https://rankston.com/${svc.slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const svc = services.find((s) => s.slug === service);
  if (!svc) notFound();

  const detail = serviceDetail[svc.slug];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.longDescription,
    provider: { '@type': 'Organization', name: 'Rankston', url: 'https://rankston.com' },
    areaServed: 'Worldwide',
    url: `https://rankston.com/${svc.slug}`,
  };

  const renderPage = () => {
    switch (svc.slug) {
      case 'seo-services':
        return <SEOPage svc={svc} />;
      case 'web-development':
        return <WebDevPage svc={svc} />;
      case 'ppc-advertising':
        return <PPCPage svc={svc} />;
      case 'social-media-marketing':
        return <SMMPage svc={svc} />;
      case 'gmb-optimization':
        return <GMBPage svc={svc} />;
      case 'graphic-designing':
        return <GraphicDesignPage svc={svc} />;
      case 'video-editing':
        return <VideoEditingPage svc={svc} />;
      case 'content-marketing':
        return <ContentMarketingPage svc={svc} />;
      case 'ai-automation':
        return <AIAutomationPage svc={svc} />;
      case 'chatbot-development':
        return <ChatbotPage svc={svc} />;
      default:
        return detail ? <GenericServicePage svc={svc} detail={detail} /> : null;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {renderPage()}
      <div id="contact">
        <LeadForm />
      </div>
    </>
  );
}
