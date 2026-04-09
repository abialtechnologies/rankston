import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Terms of Service | Rankston',
  description: 'Terms and conditions for using Rankston services and website.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-28 pb-20 relative px-4" style={{ background: '#030712' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeftIcon className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">Terms of <span className="gradient-text">Service</span></h1>
        <p className="text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 shadow-xl" style={{ background: 'rgba(17,24,39,0.7)', backdropFilter: 'blur(16px)' }}>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and utilizing the website and services operated by Rankston ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our site and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Rankston provides digital marketing solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Search Engine Optimization (SEO & GEO)</li>
              <li>Pay-Per-Click Advertising (PPC)</li>
              <li>Website & Application Development</li>
              <li>AI Automation & Chatbot Solutions</li>
              <li>Content and Social Media Marketing</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              All services provided are subject to individual client agreements and proposals, which supercede these general terms where explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              Other than the content you own, under these Terms, Rankston and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website. Re-distribution, modification, or scraping of our intellectual property is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Fair Use and Limitations</h2>
            <p className="text-gray-400 leading-relaxed">
              You are specifically restricted from: publishing any website material in any other media without prior consent; selling, sublicensing and/or otherwise commercializing any website material; using this website in any way that is or may be damaging to this website or to the brand reputation of Rankston; engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-400 leading-relaxed">
              This website is provided "as is," with all faults, and Rankston makes no express or implied representations or warranties of any kind related to this website or the materials contained on this website. While our strategies are based on industry best practices, we cannot guarantee specific ranking or revenue milestones via third-party platforms (like Google or Meta) as their algorithms are proprietary and constantly evolving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law & Jurisdiction</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms will be governed by and interpreted in accordance with standard international business laws, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.
            </p>
          </section>

          <section className="pt-4 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              For any clarifications relating to these Terms, please reach out to us at <a href="mailto:support@rankston.com" className="text-emerald-400 hover:underline">support@rankston.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
