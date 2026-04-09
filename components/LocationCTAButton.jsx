'use client';

/**
 * Client component for CTA buttons that need smooth scroll (onClick)
 * Avoids hydration errors in Server Components
 */

import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LocationCTAButton({ label, id }) {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href="#contact"
      id={id}
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-6 py-3.5 gradient-bg text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-opacity"
    >
      {label}
      <ArrowRightIcon className="w-4 h-4" />
    </a>
  );
}
