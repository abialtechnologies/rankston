'use client';
import { useState, useEffect } from 'react';
import translations from '../i18n/translations.json';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
];

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState('en');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('rankston_locale') || 'en';
    setCurrent(saved);
  }, []);

  const handleSelect = (code) => {
    setCurrent(code);
    localStorage.setItem('rankston_locale', code);
    setOpen(false);
    // Apply RTL for Arabic
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
  };

  const active = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-base">{active.flag}</span>
        <span className="font-medium hidden sm:inline">{active.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 rounded-xl border border-white/10 overflow-hidden shadow-xl"
            style={{ background: 'rgba(17,24,39,0.98)', backdropFilter: 'blur(20px)', minWidth: 160 }}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-white/5 text-left ${current === lang.code ? 'text-white' : 'text-gray-400'}`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
                {current === lang.code && (
                  <svg className="w-3.5 h-3.5 ml-auto text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
