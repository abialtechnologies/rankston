'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

/* ── Badge colors ── */
const intentColors = {
  transactional: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  commercial: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  informational: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
};

const tierColors = {
  A: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/30',
  B: 'text-blue-300 bg-blue-500/20 border-blue-500/30',
  C: 'text-gray-500 bg-gray-500/10 border-gray-500/20',
};

const pageTypeColors = {
  service_page: 'text-purple-400 bg-purple-400/10',
  blog: 'text-orange-400 bg-orange-400/10',
  city_page: 'text-cyan-400 bg-cyan-400/10',
  unassigned: 'text-gray-500 bg-gray-500/10',
};

const SERVICES = [
  { slug: 'seo-services', label: 'SEO' },
  { slug: 'ppc-advertising', label: 'PPC' },
  { slug: 'gmb-optimization', label: 'GMB' },
  { slug: 'social-media-marketing', label: 'Social Media' },
  { slug: 'web-development', label: 'Web Dev' },
  { slug: 'ai-automation', label: 'AI Automation' },
  { slug: 'content-marketing', label: 'Content' },
  { slug: 'graphic-designing', label: 'Design' },
  { slug: 'video-editing', label: 'Video' },
  { slug: 'chatbot-development', label: 'Chatbots' },
];

export default function SEODashboard() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [stats, setStats] = useState({ total: 0, avgVolume: 0, avgDifficulty: 0, intents: {} });
  const [analyzing, setAnalyzing] = useState(false);
  const [runningPipeline, setRunningPipeline] = useState(false);
  const [generatingIds, setGeneratingIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');

  // Filters
  const [service, setService] = useState('');
  const [intent, setIntent] = useState('');
  const [tier, setTier] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('lead_score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const getToken = useCallback(() => {
    const t = localStorage.getItem('admin_token');
    if (!t) { router.push('/admin'); return ''; }
    return t;
  }, [router]);

  /* ── Load keywords ── */
  const loadKeywords = useCallback(async (t) => {
    const tkn = t || token;
    if (!tkn) return;

    const params = new URLSearchParams({
      page: String(page),
      limit: '50',
      sort: sortBy,
      order: sortOrder,
    });

    if (service) params.set('service', service);
    if (intent) params.set('intent', intent);
    if (tier) params.set('tier', tier);
    if (search) params.set('search', search);

    const res = await fetch(`/api/admin/seo/keywords?${params}`, {
      headers: { Authorization: `Bearer ${tkn}` },
    });

    if (res.status === 401) { router.push('/admin'); return; }
    const data = await res.json();

    setKeywords(data.keywords || []);
    setStats(data.stats || {});
    setTotal(data.total || 0);
    setTotalPages(data.totalPages || 1);
    setLoading(false);
  }, [token, page, sortBy, sortOrder, service, intent, tier, search, router]);

  useEffect(() => {
    const t = getToken();
    if (!t) return;
    setToken(t);
    loadKeywords(t);
  }, [getToken, loadKeywords]);

  /* ── Process: cleanup + score + tier ── */
  const handleProcess = async () => {
    if (!confirm('Run Quality Control Pipeline?\n\n• Remove junk/low-value keywords\n• Score for lead potential\n• Assign Tiers (A/B/C)\n• Smart clustering\n\nCost: $0.00 (local processing)')) return;
    setProcessing(true);
    setMessage('⚙️ Processing 75k+ keywords...');

    try {
      const res = await fetch('/api/admin/seo/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.error) {
        setMessage(`❌ ${data.error}`);
      } else {
        setMessage(`✅ Processed: Tier A: ${data.tiers?.A || 0} | Tier B: ${data.tiers?.B || 0} | Tier C: ${data.tiers?.C || 0} | Clusters: ${data.clusters || 0} | ${data.recommendation}`);
      }
      loadKeywords();
    } catch {
      setMessage('❌ Processing error');
    } finally {
      setProcessing(false);
    }
  };

  /* ── Toggle Approve ── */
  const handleToggleApprove = async (id, currentVal) => {
    try {
      // Optimistic update
      setKeywords(keywords.map(kw => kw.id === id ? { ...kw, approved: !currentVal } : kw));
      await fetch('/api/admin/seo/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ id, approved: !currentVal }),
      });
    } catch {
      setMessage('❌ Failed to update approval status');
      loadKeywords(token); // revert on fail
    }
  };

  /* ── Generate Page ── */
  const handleGenerate = async (kw) => {
    if (!kw.approved) return alert('Keyword must be approved first.');
    if (generatingIds.size >= 5) {
      return alert('Rate limit active: Please wait for current batch (max 5) to finish before queuing more.');
    }
    
    setGeneratingIds(prev => new Set([...prev, kw.id]));
    setMessage(`🤖 AI is writing landing page for "${kw.keyword}"...`);
    try {
      const res = await fetch('/api/admin/seo/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ keyword_id: kw.id }),
      });
      const data = await res.json();
      if (data.error) setMessage(`❌ ${data.error}`);
      else setMessage(`✅ Generated and Published! Slug: /solutions/${data.slug}`);
    } catch {
      setMessage('❌ Generation failed');
    } finally {
      setGeneratingIds(prev => {
        const next = new Set(prev);
        next.delete(kw.id);
        return next;
      });
    }
  };

  /* ── Export CSV ── */
  const handleExport = () => {
    const params = new URLSearchParams({ export: 'csv', sort: sortBy, order: sortOrder });
    if (service) params.set('service', service);
    if (intent) params.set('intent', intent);
    if (tier) params.set('tier', tier);
    if (search) params.set('search', search);
    window.open(`/api/admin/seo/keywords?${params}`, '_blank');
  };

  /* ── Sort ── */
  const handleSort = (col) => {
    if (sortBy === col) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(col);
      setSortOrder('desc');
    }
    setPage(1);
  };

  const SortIcon = ({ col }) => {
    if (sortBy !== col) return <span className="text-gray-700 ml-1">↕</span>;
    return <span className="text-emerald-400 ml-1">{sortOrder === 'desc' ? '↓' : '↑'}</span>;
  };

  return (
    <div className="min-h-screen">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/6" style={{ background: 'rgba(10,15,26,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="Rankston" width={32} height={32} className="rounded-lg" />
            <span className="text-white font-bold font-poppins">SEO Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/admin/dashboard" className="px-3 py-2 rounded-lg text-gray-400 hover:text-white text-sm transition-colors">
              ← Dashboard
            </Link>
            <button
              onClick={handleProcess}
              disabled={processing}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {processing ? '⏳ Processing...' : '⚡ Process & Score'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Message */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm whitespace-pre-wrap">
            {message}
          </div>
        )}

        {/* ── Stats Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Total Keywords', value: total.toLocaleString(), bg: 'border-white/10' },
            { label: '🅰️ Tier A', value: keywords.filter((k) => k.tier === 'A').length || '—', bg: 'border-emerald-500/30' },
            { label: '🅱️ Tier B', value: keywords.filter((k) => k.tier === 'B').length || '—', bg: 'border-blue-500/30' },
            { label: 'Avg Lead Score', value: keywords.length ? (keywords.reduce((s, k) => s + (k.lead_score || 0), 0) / keywords.length).toFixed(1) : '0', bg: 'border-purple-500/30' },
            { label: 'Transactional', value: stats.intents?.transactional || 0, bg: 'border-yellow-500/30' },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl border ${s.bg} p-4`} style={{ background: 'rgba(17,24,39,0.6)' }}>
              <p className="text-gray-500 text-xs font-medium mb-1">{s.label}</p>
              <p className="text-xl font-bold text-white font-poppins">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-wrap gap-2 mb-4">
          <select value={service} onChange={(e) => { setService(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/40">
            <option value="">All Services</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.label}</option>)}
          </select>

          <select value={tier} onChange={(e) => { setTier(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/40">
            <option value="">All Tiers</option>
            <option value="A">🅰️ Tier A (Immediate)</option>
            <option value="B">🅱️ Tier B (Future)</option>
            <option value="C">🅲 Tier C (Archive)</option>
          </select>

          <select value={intent} onChange={(e) => { setIntent(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/40">
            <option value="">All Intents</option>
            <option value="transactional">Transactional</option>
            <option value="commercial">Commercial</option>
            <option value="informational">Informational</option>
          </select>

          <input
            type="text" placeholder="Search keywords..." value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40 flex-1 min-w-[180px]"
          />

          <button onClick={handleExport}
            className="px-3 py-2 rounded-lg border border-white/10 text-gray-300 text-sm hover:bg-white/5">
            📥 CSV
          </button>
        </div>

        {/* ── Tier Quick Filters ── */}
        <div className="flex gap-2 mb-4">
          {['', 'A', 'B', 'C'].map((t) => (
            <button key={t} onClick={() => { setTier(t); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${tier === t ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-gray-500 border border-white/5 hover:text-gray-300'}`}>
              {t === '' ? 'All' : `Tier ${t}`}
              {t === 'A' && ' ⭐'}
            </button>
          ))}
        </div>

        {/* ── Keywords Table ── */}
        <div className="rounded-xl border border-white/8 overflow-hidden" style={{ background: 'rgba(17,24,39,0.6)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/6">
                  {[
                    { key: 'keyword', label: 'Keyword' },
                    { key: 'tier', label: 'Tier' },
                    { key: 'lead_score', label: 'Lead Score' },
                    { key: 'search_volume', label: 'Volume' },
                    { key: 'keyword_difficulty', label: 'KD' },
                    { key: 'cpc', label: 'CPC' },
                    { key: 'intent', label: 'Intent' },
                    { key: 'page_type', label: 'Page Type' },
                    { key: 'actions', label: 'Actions' },
                  ].map((col) => (
                    <th key={col.key}
                      onClick={() => handleSort(col.key)}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors whitespace-nowrap">
                      {col.label}<SortIcon col={col.key} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={8} className="px-4 py-12 text-center text-gray-600">Loading...</td></tr>
                ) : keywords.length === 0 ? (
                  <tr><td colSpan={8} className="px-4 py-12 text-center text-gray-600">
                    No keywords found. Run the pipeline first.
                  </td></tr>
                ) : keywords.map((kw) => (
                  <tr key={kw.id} className={`border-b border-white/4 hover:bg-white/3 transition-colors ${kw.tier === 'A' ? 'bg-emerald-500/[0.03]' : ''}`}>
                    <td className="px-4 py-3 text-white font-medium max-w-[280px] truncate">{kw.keyword}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tierColors[kw.tier] || tierColors.C}`}>
                        {kw.tier || 'C'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-bold font-mono ${(kw.lead_score || 0) >= 50 ? 'text-emerald-400' : (kw.lead_score || 0) >= 25 ? 'text-blue-400' : 'text-gray-500'}`}>
                        {(kw.lead_score || 0).toFixed(0)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300 text-right font-mono">{kw.search_volume?.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-mono ${kw.keyword_difficulty > 70 ? 'text-red-400' : kw.keyword_difficulty > 40 ? 'text-yellow-400' : 'text-emerald-400'}`}>
                        {kw.keyword_difficulty?.toFixed(0)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300 text-right font-mono">${kw.cpc?.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${intentColors[kw.intent] || 'text-gray-400'}`}>
                        {kw.intent}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${pageTypeColors[kw.page_type] || 'text-gray-400'}`}>
                        {kw.page_type?.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => handleToggleApprove(kw.id, kw.approved)}
                          className={`px-2 py-1 rounded text-xs font-semibold border transition-colors ${
                            kw.approved 
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                              : 'bg-white/5 text-gray-500 border-white/10 hover:text-gray-300'
                          }`}
                        >
                          {kw.approved ? 'Approved' : 'Approve'}
                        </button>
                        
                        {kw.tier === 'A' && (
                          <button
                            onClick={() => handleGenerate(kw)}
                            disabled={!kw.approved || generatingIds.has(kw.id)}
                            className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                              !kw.approved 
                                ? 'opacity-30 cursor-not-allowed hidden' 
                                : generatingIds.has(kw.id)
                                  ? 'bg-blue-500/20 text-blue-400 cursor-wait'
                                  : 'bg-emerald-500 text-white hover:opacity-90'
                            }`}
                          >
                            {generatingIds.has(kw.id) ? 'Writing...' : 'Generate Page'}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/6">
              <span className="text-xs text-gray-500">
                Page {page} of {totalPages} ({total.toLocaleString()} keywords)
              </span>
              <div className="flex gap-1">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                  className="px-3 py-1 rounded text-xs text-gray-400 hover:text-white disabled:opacity-30">← Prev</button>
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}
                  className="px-3 py-1 rounded text-xs text-gray-400 hover:text-white disabled:opacity-30">Next →</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
