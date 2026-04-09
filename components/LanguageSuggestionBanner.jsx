'use client';
import { useState, useEffect } from 'react';

const LANGUAGE_MAP = {
  en: { label: 'English',  flag: '🇬🇧' },
  es: { label: 'Spanish',  flag: '🇪🇸' },
  ar: { label: 'Arabic',   flag: '🇸🇦' },
  de: { label: 'German',   flag: '🇩🇪' },
};

function detectLocale() {
  if (typeof navigator === 'undefined') return null;
  const lang = navigator.language || navigator.languages?.[0] || '';
  const code = lang.split('-')[0].toLowerCase();
  if (['es', 'ar', 'de'].includes(code)) return code;
  return null;
}

export default function LanguageSuggestionBanner() {
  const [show, setShow] = useState(false);
  const [suggestedLocale, setSuggestedLocale] = useState(null);

  useEffect(() => {
    const dismissed = localStorage.getItem('rankston_banner_dismissed');
    const saved = localStorage.getItem('rankston_locale');
    if (dismissed || saved) return;

    const locale = detectLocale();
    if (locale && locale !== 'en') {
      setSuggestedLocale(locale);
      setShow(true);
    }
  }, []);

  const handleSwitch = () => {
    localStorage.setItem('rankston_locale', suggestedLocale);
    localStorage.setItem('rankston_banner_dismissed', '1');
    document.documentElement.dir = suggestedLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = suggestedLocale;
    setShow(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('rankston_banner_dismissed', '1');
    setShow(false);
  };

  if (!show || !suggestedLocale) return null;

  const lng = LANGUAGE_MAP[suggestedLocale];

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/10 shadow-2xl text-sm"
      style={{ background: 'rgba(17,24,39,0.97)', backdropFilter: 'blur(24px)', maxWidth: 'calc(100vw - 2rem)' }}
      role="alert"
      aria-live="polite"
    >
      <span className="text-2xl shrink-0">{lng.flag}</span>
      <p className="text-gray-300">
        View this site in <span className="text-white font-semibold">{lng.label}</span>?
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleSwitch}
          className="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}
        >
          Switch
        </button>
        <button
          onClick={handleDismiss}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
