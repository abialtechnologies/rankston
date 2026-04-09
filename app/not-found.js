import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Rankston',
  description: 'The page you\'re looking for doesn\'t exist. Return to Rankston to find the digital marketing help you need.',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black font-poppins gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold text-white font-poppins mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          Looks like this page went off the grid. Let's get you back to growing your business.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
