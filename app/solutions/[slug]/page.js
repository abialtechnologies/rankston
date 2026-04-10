import { notFound } from 'next/navigation';
import { getSupabaseServerClient } from '../../../../lib/supabase.js';
import Link from 'next/link';

/* ── Force dynamic rendering instead of static since DB might update ── */
export const dynamic = 'force-dynamic';

/* ── Dynamic Metadata ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const supabase = getSupabaseServerClient();

  const { data: pageData } = await supabase
    .from('seo_pages')
    .select('meta_title, meta_description, keyword')
    .eq('slug', slug)
    .single();

  if (!pageData) return { title: 'Not Found' };

  return {
    title: pageData.meta_title || `${pageData.keyword} | Rankston Solutions`,
    description: pageData.meta_description,
    openGraph: {
      title: pageData.meta_title || `${pageData.keyword} | Rankston Solutions`,
      description: pageData.meta_description,
      url: `https://rankston.com/solutions/${slug}`,
      siteName: 'Rankston',
    },
  };
}

/* ── Dynamic Page Component ── */
export default async function HubSolutionPage({ params }) {
  const { slug } = await params;
  const supabase = getSupabaseServerClient();

  const { data: pageData } = await supabase
    .from('seo_pages')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!pageData || !pageData.published) notFound();

  // Internal linking - Fetch 2 random service pages to link internally
  const { data: relatedServices } = await supabase
    .from('seo_keywords')
    .select('service')
    .eq('id', pageData.keyword_id)
    .single();
    
  let internalLinkHTML = '';
  if (relatedServices?.service) {
    internalLinkHTML = `
      <div class="mt-8 pt-8 border-t border-gray-800">
        <h4 class="text-white font-semibold mb-4">Related Specialized Services:</h4>
        <div class="flex gap-4">
          <a href="/${relatedServices.service}" class="text-emerald-400 hover:text-emerald-300 underline font-medium">Explore ${relatedServices.service.replace('-', ' ')} overview</a>
        </div>
      </div>
    `;
  }

  // FAQ Schema
  let faqSchema = null;
  if (pageData.faqs && Array.isArray(pageData.faqs) && pageData.faqs.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pageData.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
  }

  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      
      <main className="min-h-screen bg-[#0A0F1A]">
        {/* ── 1. Hero Section ── */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Specialized Solution
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white font-poppins">
                {pageData.h1}
              </h1>
              
              <div className="text-xl text-gray-400 leading-relaxed font-inter" dangerouslySetInnerHTML={{ __html: pageData.intro }} />

              <div className="flex justify-center gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                  Get a Free Proposal
                </Link>
                <Link href="/contact" className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
                  Speak to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Services Overview & Benefits ── */}
        <section className="py-24 bg-[#0d1322]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6 text-gray-300 leading-relaxed prose prose-invert prose-emerald max-w-none">
                <h2 className="text-3xl font-bold text-white font-poppins mb-6">Expert Solutions Tailored to You</h2>
                <div dangerouslySetInnerHTML={{ __html: pageData.services_overview }} />
              </div>
              
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white font-poppins mb-6">Why Choose Rankston?</h3>
                <div className="space-y-4 text-gray-300 prose prose-invert prose-ul:space-y-4 prose-li:marker:text-emerald-500" dangerouslySetInnerHTML={{ __html: pageData.benefits }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Process + Local Context ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white font-poppins mb-8">Our Delivery Process</h2>
                <div className="prose prose-invert text-gray-400 max-w-none" dangerouslySetInnerHTML={{ __html: pageData.process }} />
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500/[0.05] to-blue-500/[0.05] border border-white/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px]" />
                <h3 className="text-2xl font-bold text-white font-poppins mb-6 relative z-10">Local & Strategic Context</h3>
                <div className="prose prose-invert text-gray-300 max-w-none relative z-10" dangerouslySetInnerHTML={{ __html: pageData.local_context }} />
              </div>
            </div>
            
            {/* Internal Links Injection */}
            <div dangerouslySetInnerHTML={{ __html: internalLinkHTML }} />
          </div>
        </section>

        {/* ── 4. FAQs ── */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <section className="py-24 bg-[#0d1322]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white font-poppins mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-400">Everything you need to know about our specialized services.</p>
              </div>
              
              <div className="space-y-4">
                {pageData.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#111827] border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white font-poppins mb-3">{faq.q}</h3>
                    <p className="text-gray-400 leading-relaxed font-inter">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* ── 5. Final CTA ── */}
        <section className="py-24 relative overflow-hidden text-center border-t border-white/5">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
              <h2 className="text-4xl font-bold text-white font-poppins mb-6">Ready to Dominate Search?</h2>
              <p className="text-xl text-gray-400 mb-10">Partner with Rankston to drive explosive organic growth and high-quality leads.</p>
              <Link href="/contact" className="px-10 py-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                Book a Free Strategy Session
              </Link>
           </div>
        </section>
      </main>
    </>
  );
}
