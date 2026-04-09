'use client';
import { useState, useCallback } from 'react';

const SERVICES = [
  { id: 'seo',           label: 'SEO / AIO / GEO',        avgRoas: 8,  avgCpl: 38 },
  { id: 'ppc',           label: 'PPC Advertising',         avgRoas: 4.8, avgCpl: 42 },
  { id: 'social',        label: 'Social Media Marketing',  avgRoas: 3.5, avgCpl: 22 },
  { id: 'web',           label: 'Website Development',     avgRoas: 5.2, avgCpl: 55 },
  { id: 'gmb',           label: 'GMB Optimization',        avgRoas: 6.1, avgCpl: 18 },
  { id: 'content',       label: 'Content Marketing',       avgRoas: 7.3, avgCpl: 30 },
  { id: 'ai',            label: 'AI Automation',           avgRoas: 9.1, avgCpl: 60 },
  { id: 'chatbot',       label: 'Chatbot Development',     avgRoas: 6.8, avgCpl: 40 },
];

function fmt(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${Math.round(n)}`;
}

export default function ROICalculator() {
  const [spend, setSpend] = useState(2000);
  const [serviceId, setServiceId] = useState('seo');
  const [convRate, setConvRate] = useState(2);
  const [avgDeal, setAvgDeal] = useState(500);
  const [calculated, setCalculated] = useState(false);

  const svc = SERVICES.find((s) => s.id === serviceId);

  const calculate = useCallback(() => setCalculated(true), []);

  // Projections
  const projectedLeads = Math.round((spend / svc.avgCpl));
  const projectedRevenue = projectedLeads * (convRate / 100) * avgDeal * 12;
  const projectedRoas = projectedRevenue / (spend * 12);
  const roiPct = ((projectedRevenue - spend * 12) / (spend * 12)) * 100;

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 text-emerald-400">
            <span className="w-4 h-px bg-emerald-400" /> Free ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white">
            What Could Your Marketing Return?
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
            Adjust the inputs below to see projected leads, revenue, and ROAS based on Rankston&rsquo;s average client results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── INPUTS ── */}
          <div className="rounded-2xl p-6 border border-white/8" style={{ background: 'rgba(17,24,39,0.95)' }}>
            <h3 className="text-sm font-bold text-white mb-6">Your Business Details</h3>

            {/* Service selector */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Service You Need
              </label>
              <select
                value={serviceId}
                onChange={(e) => { setServiceId(e.target.value); setCalculated(false); }}
                className="w-full rounded-xl px-4 py-3 text-sm text-white border border-white/10 focus:outline-none focus:border-emerald-500/50 transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-gray-900">{s.label}</option>
                ))}
              </select>
            </div>

            {/* Monthly budget */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Monthly Budget — <span className="text-emerald-400">${spend.toLocaleString()}/mo</span>
              </label>
              <input
                type="range" min="500" max="20000" step="250"
                value={spend}
                onChange={(e) => { setSpend(Number(e.target.value)); setCalculated(false); }}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-700 mt-1">
                <span>$500</span><span>$20,000</span>
              </div>
            </div>

            {/* Conversion rate */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Lead-to-Sale Conversion Rate — <span className="text-emerald-400">{convRate}%</span>
              </label>
              <input
                type="range" min="0.5" max="25" step="0.5"
                value={convRate}
                onChange={(e) => { setConvRate(Number(e.target.value)); setCalculated(false); }}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-700 mt-1">
                <span>0.5%</span><span>25%</span>
              </div>
            </div>

            {/* Avg deal size */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Average Deal / Order Value — <span className="text-emerald-400">${avgDeal}</span>
              </label>
              <input
                type="range" min="50" max="10000" step="50"
                value={avgDeal}
                onChange={(e) => { setAvgDeal(Number(e.target.value)); setCalculated(false); }}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-700 mt-1">
                <span>$50</span><span>$10,000</span>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}
            >
              Calculate My ROI →
            </button>
          </div>

          {/* ── RESULTS ── */}
          <div className="rounded-2xl p-6 border border-white/8 flex flex-col" style={{ background: 'rgba(17,24,39,0.95)' }}>
            <h3 className="text-sm font-bold text-white mb-6">Your 12-Month Projection</h3>

            {calculated ? (
              <>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl p-4 border border-emerald-500/20" style={{ background: 'rgba(16,185,129,0.05)' }}>
                    <p className="text-xs text-gray-600 mb-1">Projected Leads/mo</p>
                    <p className="text-2xl font-extrabold text-emerald-400 font-poppins">{projectedLeads}</p>
                    <p className="text-xs text-gray-700 mt-0.5">avg ${svc.avgCpl} cost/lead</p>
                  </div>
                  <div className="rounded-xl p-4 border border-blue-500/20" style={{ background: 'rgba(59,130,246,0.05)' }}>
                    <p className="text-xs text-gray-600 mb-1">Projected Annual Revenue</p>
                    <p className="text-2xl font-extrabold text-blue-400 font-poppins">{fmt(projectedRevenue)}</p>
                    <p className="text-xs text-gray-700 mt-0.5">based on {convRate}% close rate</p>
                  </div>
                  <div className="rounded-xl p-4 border border-violet-500/20" style={{ background: 'rgba(139,92,246,0.05)' }}>
                    <p className="text-xs text-gray-600 mb-1">Projected ROAS</p>
                    <p className="text-2xl font-extrabold text-violet-400 font-poppins">{projectedRoas.toFixed(1)}x</p>
                    <p className="text-xs text-gray-700 mt-0.5">revenue / ad spend</p>
                  </div>
                  <div className="rounded-xl p-4 border border-yellow-500/20" style={{ background: 'rgba(245,158,11,0.05)' }}>
                    <p className="text-xs text-gray-600 mb-1">Annual ROI</p>
                    <p className="text-2xl font-extrabold text-yellow-400 font-poppins">+{Math.round(roiPct)}%</p>
                    <p className="text-xs text-gray-700 mt-0.5">on {fmt(spend * 12)} invested</p>
                  </div>
                </div>
                {/* Disclaimer */}
                <p className="text-xs text-gray-700 leading-relaxed mt-auto">
                  * Projections are based on Rankston&rsquo;s average client performance for <strong className="text-gray-500">{svc.label}</strong>. Individual results vary by industry, competition, and starting position. Request a free audit for a personalized forecast.
                </p>
                <a
                  href="#contact"
                  className="mt-4 block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}
                >
                  Get My Personalized Forecast →
                </a>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl" style={{ background: 'rgba(16,185,129,0.1)' }}>
                  📊
                </div>
                <p className="text-gray-500 text-sm max-w-xs">
                  Fill in your details on the left and click &ldquo;Calculate My ROI&rdquo; to see your projected leads, revenue, and ROAS.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
