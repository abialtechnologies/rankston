'use client';

/**
 * SectionReveal — Hydration-safe scroll-triggered reveal
 *
 * Strategy: renders children immediately (no SSR wrapper), then
 * a useEffect attaches a native IntersectionObserver. When the
 * section enters the viewport:
 *   1. A CSS progress bar sweeps across the top (400ms)
 *   2. The content <div> gets class "sr-revealed" which triggers
 *      the CSS keyframe animation (opacity 0→1, translateY 32→0)
 *
 * Zero hydration risk — all DOM manipulation happens in useEffect.
 */

import { useRef, useEffect, useState } from 'react';

/* Inject global CSS once */
const STYLE_ID = 'section-reveal-styles';
function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
    .sr-content {
      opacity: 1;
      transform: translateY(0);
    }
    .sr-content.sr-idle {
      opacity: 0;
      transform: translateY(32px);
      transition: none;
    }
    .sr-content.sr-revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
      transition: opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
                  transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
    }

    /* Top progress bar */
    #sr-bar {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, #10B981 0%, #3B82F6 60%, #8B5CF6 100%);
      box-shadow: 0 0 8px rgba(16,185,129,0.5);
      transform-origin: left center;
      transform: scaleX(0);
      opacity: 0;
      z-index: 9999;
      pointer-events: none;
      transition: none;
    }
    #sr-bar.sr-bar-active {
      opacity: 1;
      animation: sr-sweep 0.42s cubic-bezier(0.4,0,0.2,1) forwards;
    }
    @keyframes sr-sweep {
      from { transform: scaleX(0); opacity: 1; }
      to   { transform: scaleX(1); opacity: 0; }
    }

    /* Step dots */
    .sr-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      margin-bottom: 16px;
    }
    .sr-dot {
      height: 5px;
      border-radius: 9999px;
      transition: all 0.4s ease;
    }
    .sr-dots-label {
      font-size: 10px;
      color: #4B5563;
      font-family: monospace;
      margin-left: 4px;
    }
  `;
  document.head.appendChild(el);
}

/* Singleton bar element */
function getBar() {
  let bar = document.getElementById('sr-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'sr-bar';
    document.body.appendChild(bar);
  }
  return bar;
}

function sweepBar() {
  const bar = getBar();
  bar.classList.remove('sr-bar-active');
  // Force reflow to restart animation
  void bar.offsetWidth;
  bar.classList.add('sr-bar-active');
}

export default function SectionReveal({
  children,
  step,
  totalSteps = 6,
  showStep = true,
  className = '',
}) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const dotsRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    injectStyles();

    const content = contentRef.current;
    const wrapper = wrapperRef.current;
    if (!content || !wrapper) return;

    // Start hidden on client
    content.classList.add('sr-idle');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            // 1. Sweep the bar
            sweepBar();
            // 2. After bar finishes, reveal content
            setTimeout(() => {
              content.classList.remove('sr-idle');
              content.classList.add('sr-revealed');
              setRevealed(true);
            }, 420);
          }
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {/* Step indicator — rendered after reveal to avoid flash */}
      {step && showStep && revealed && (
        <div ref={dotsRef} className="sr-dots">
          {Array.from({ length: totalSteps }, (_, i) => (
            <span
              key={i}
              className="sr-dot"
              style={{
                width: i + 1 === step ? '20px' : '6px',
                background:
                  i + 1 === step
                    ? '#10B981'
                    : i + 1 < step
                    ? 'rgba(16,185,129,0.35)'
                    : 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
          <span className="sr-dots-label">{step}/{totalSteps}</span>
        </div>
      )}

      {/* Content wrapper — starts as sr-idle on client, transitions to sr-revealed */}
      <div ref={contentRef} className="sr-content">
        {children}
      </div>
    </div>
  );
}
