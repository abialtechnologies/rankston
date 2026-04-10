'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

/* ── Intent badge colors ── */
const intentColors = {
  transactional: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  commercial: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  informational: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
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
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [runningPipeline, setRunningPipeline] = useState(false);
  const [message, setMessage] = useState('');

  // Filters
  const [service, setService] = useState('');
  const [intent, setIntent] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('opportunity_score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Fetch trigger
  const [fetchService, setFetchService] = useState('SEO');
  const [fetchLocation, setFetchLocation] = useState('United States');
  const [showFetchModal, setShowFetchModal] = useState(false);

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
  }, [token, page, sortBy, sortOrder, service, intent, search, router]);

  useEffect(() => {
    const t = getToken();
    if (!t) return;
    setToken(t);
    loadKeywords(t);
  }, [getToken, loadKeywords]);

  /* ── Fetch new keywords from DataForSEO ── */
  const handleFetch = async () => {
    if (!confirm(`Fetch keywords for "${fetchService}" in "${fetchLocation}"?\nThis will cost ~$0.15-0.20 in DataForSEO credits.`)) return;
    setFetching(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/seo/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ service: fetchService, location: fetchLocation }),
      });
      const data = await res.json();
      setMessage(data.message || data.error || 'Done');
      setShowFetchModal(false);
      loadKeywords();
    } catch {
      setMessage('Fetch error');
    } finally {
      setFetching(false);
    }
  };

  /* ── Re-analyze keywords (FREE) ── */
  const handleAnalyze = async () => {
    setAnalyzing(true);
    try {
      const res = await fetch('/api/admin/seo/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ service: service || undefined }),
      });
      const data = await res.json();
      setMessage(`${data.message}: ${data.keywordsUpdated} updated, ${data.clustersCreated} clusters`);
      loadKeywords();
    } catch {
      setMessage('Analysis error');
    } finally {
      setAnalyzing(false);
    }
  };

  /* ── Run full automated pipeline ── */
  const handleRunPipeline = async () => {
    if (!confirm('Run full SEO pipeline for ALL services?\n\nThis will:\n1. Fetch base keywords (~$0.50)\n2. Expand with 50 states + cities (FREE)\n3. Score & classify all keywords\n\nEstimated cost: ~$0.50')) return;
    setRunningPipeline(true);
    setMessage('🚀 Running pipeline... this may take 2-3 minutes');
    try {
      const res = await fetch('/api/admin/seo/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setMessage(`✅ ${data.message} | Cost: ${data.totalCost}`);
      loadKeywords();
    } catch {
      setMessage('❌ Pipeline error');
    } finally {
      setRunningPipeline(false);
    }
  };

  /* ── Export CSV ── */
  const handleExport = () => {
    const params = new URLSearchParams({ export: 'csv', sort: sortBy, order: sortOrder });
    if (service) params.set('service', service);
    if (intent) params.set('intent', intent);
    if (search) params.set('search', search);
    window.open(`/api/admin/seo/keywords?${params}&token=${token}`, '_blank');
  };

  /* ── Sort handler ── */
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
              onClick={handleRunPipeline}
              disabled={runningPipeline}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {runningPipeline ? '⏳ Running...' : '🚀 Run Pipeline'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ── Message ── */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            {message}
          </div>
        )}

        {/* ── Stats Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Total Keywords', value: total.toLocaleString(), color: 'blue' },
            { label: 'Avg Volume', value: stats.avgVolume?.toLocaleString() || '0', color: 'emerald' },
            { label: 'Avg KD', value: stats.avgDifficulty?.toFixed(1) || '0', color: 'yellow' },
            { label: 'Transactional', value: stats.intents?.transactional || 0, color: 'purple' },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl border border-${s.color}-500/20 p-4`} style={{ background: 'rgba(17,24,39,0.6)' }}>
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
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40 flex-1 min-w-[200px]"
          />

          <button onClick={handleAnalyze} disabled={analyzing}
            className="px-3 py-2 rounded-lg border border-white/10 text-gray-300 text-sm hover:bg-white/5 disabled:opacity-50">
            {analyzing ? 'Analyzing...' : '⚡ Re-Analyze'}
          </button>

          <button onClick={handleExport}
            className="px-3 py-2 rounded-lg border border-white/10 text-gray-300 text-sm hover:bg-white/5">
            📥 Export CSV
          </button>
        </div>

        {/* ── Keywords Table ── */}
        <div className="rounded-xl border border-white/8 overflow-hidden" style={{ background: 'rgba(17,24,39,0.6)' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/6">
                  {[
                    { key: 'keyword', label: 'Keyword' },
                    { key: 'search_volume', label: 'Volume' },
                    { key: 'keyword_difficulty', label: 'KD' },
                    { key: 'cpc', label: 'CPC' },
                    { key: 'intent', label: 'Intent' },
                    { key: 'opportunity_score', label: 'Score' },
                    { key: 'page_type', label: 'Page Type' },
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
                  <tr><td colSpan={7} className="px-4 py-12 text-center text-gray-600">Loading...</td></tr>
                ) : keywords.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-12 text-center text-gray-600">
                    No keywords yet. Click &quot;+ Fetch Keywords&quot; to start.
                  </td></tr>
                ) : keywords.map((kw) => (
                  <tr key={kw.id} className="border-b border-white/4 hover:bg-white/3 transition-colors">
                    <td className="px-4 py-3 text-white font-medium max-w-[300px] truncate">{kw.keyword}</td>
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
                    <td className="px-4 py-3 text-right">
                      <span className={`font-bold font-mono ${kw.opportunity_score > 100 ? 'text-emerald-400' : kw.opportunity_score > 30 ? 'text-blue-400' : 'text-gray-400'}`}>
                        {kw.opportunity_score?.toFixed(0)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${pageTypeColors[kw.page_type] || 'text-gray-400'}`}>
                        {kw.page_type?.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/6">
              <span className="text-xs text-gray-500">
                Page {page} of {totalPages} ({total.toLocaleString()} keywords)
              </span>
              <div className="flex gap-1">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                  className="px-3 py-1 rounded text-xs text-gray-400 hover:text-white disabled:opacity-30">
                  ← Prev
                </button>
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}
                  className="px-3 py-1 rounded text-xs text-gray-400 hover:text-white disabled:opacity-30">
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── Fetch Modal ── */}
      {showFetchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowFetchModal(false)}>
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 p-6"
            style={{ background: 'linear-gradient(145deg, rgba(17,24,39,0.98), rgba(10,15,26,0.99))' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-white mb-4 font-poppins">Fetch Keywords from DataForSEO</h2>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Service</label>
              <select value={fetchService} onChange={(e) => setFetchService(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm">
                {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.label}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">Location</label>
              <select value={fetchLocation} onChange={(e) => setFetchLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm">
                {['United States', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Dallas', 'Austin', 'Columbus', 'San Diego', 'San Antonio'].map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
              ⚠️ This will cost approximately <strong>$0.15-0.20</strong> in DataForSEO credits.
            </div>

            <div className="flex gap-2">
              <button onClick={() => setShowFetchModal(false)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 text-gray-300 text-sm hover:bg-white/5">
                Cancel
              </button>
              <button onClick={handleFetch} disabled={fetching}
                className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50">
                {fetching ? 'Fetching...' : 'Fetch Keywords'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
