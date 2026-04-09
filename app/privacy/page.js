import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Privacy Policy | Rankston',
  description: 'Our privacy practices and how we protect your data at Rankston.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-28 pb-20 relative px-4" style={{ background: '#030712' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeftIcon className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">Privacy <span className="gradient-text">Policy</span></h1>
        <p className="text-gray-400 mb-10">Last updated: April 2026</p>

        <div className="rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 shadow-xl" style={{ background: 'rgba(17,24,39,0.7)', backdropFilter: 'blur(16px)' }}>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              At Rankston, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect About You</h2>
            <p className="text-gray-400 leading-relaxed mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li><strong>Identity and Contact Data:</strong> includes your name, email address, telephone numbers, and company information submitted through our forms.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Personal Data</h2>
            <p className="text-gray-400 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: 
              <br /><br />
              (a) Where we need to perform the contract we are about to enter into or have entered into with you. <br />
              (b) Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests. <br />
              (c) Where we need to comply with a legal or regulatory obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Anti-Spam & Automated Processing</h2>
            <p className="text-gray-400 leading-relaxed">
              In order to protect our platform from automated abuse, we utilize honeypot systems and content filtration validation. Form submissions that exhibit automated behavior or contain suspicious patterns may be automatically rejected by our server without being permanently stored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Details</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <br /><br />
              <a href="mailto:support@rankston.com" className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 font-medium transition-all">support@rankston.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
