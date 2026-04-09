'use client';

import { useEffect } from 'react';

export default function TawkProvider() {
  useEffect(() => {
    // Only run on the browser
    if (typeof window === 'undefined') return;

    // Define Tawk API globally
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Prevent multiple injections
    if (document.getElementById('tawk-to-script')) return;

    const s1 = document.createElement("script");
    s1.id = "tawk-to-script";
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69d729d666239b1c36ac76cf/1jlo7msg3';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    // Append to document head
    document.head.appendChild(s1);

    return () => {
      // Optional cleanup if needed (Tawk.to persists across page views usually)
    };
  }, []);

  return null; // This component doesn't render any UI itself
}
