'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Status badge colors ─── */
const statusColors = {
  published: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  draft: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  scheduled: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState('blogs');
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [newsSource, setNewsSource] = useState('');
  const [newsMessage, setNewsMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0 });
  const [token, setToken] = useState('');

  const getToken = useCallback(() => {
    const t = localStorage.getItem('admin_token');
    if (!t) { router.push('/admin'); return ''; }
    return t;
  }, [router]);

  /* ─── Fetch posts ─── */
  useEffect(() => {
    const t = getToken();
    if (!t) return;
    setToken(t);

    fetch('/api/admin/posts?limit=100', {
      headers: { Authorization: `Bearer ${t}` },
    })
      .then((r) => {
        if (r.status === 401) { localStorage.removeItem('admin_token'); router.push('/admin'); return null; }
        return r.json();
      })
      .then((data) => {
        if (!data) return;
        setPosts(data.posts || []);
        const all = data.total || 0;
        const pub = (data.posts || []).filter((p) => p.status === 'published').length;
        setStats({ total: all, published: pub, drafts: all - pub });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [getToken, router]);

  /* ─── Fetch news ─── */
  const loadNews = () => {
    const t = getToken();
    if (!t) return;
    fetch('/api/admin/apify', { headers: { Authorization: `Bearer ${t}` } })
      .then((r) => r.json())
      .then((data) => {
        setNews(data.articles || []);
        setNewsSource(data.source || '');
        setNewsMessage(data.message || '');
      });
  };

  useEffect(() => {
    if (tab === 'news') loadNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  /* ─── Delete post ─── */
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    await fetch(`/api/admin/posts/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setStats((s) => ({ ...s, total: s.total - 1 }));
  };

  /* ─── Logout ─── */
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 border-b border-white/6" style={{ background: 'rgba(10,15,26,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="Rankston" width={32} height={32} className="rounded-lg" />
            <span className="text-white font-bold font-poppins">Rankston CMS</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/seo"
              className="px-4 py-2 rounded-lg border border-emerald-500/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/10 transition-colors"
            >
              🔍 SEO Intelligence
            </Link>
            <Link
              href="/admin/dashboard/create"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              + Create Blog
            </Link>
            <button onClick={handleLogout} className="px-3 py-2 rounded-lg text-gray-400 hover:text-white text-sm transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Posts', value: stats.total, color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20' },
            { label: 'Published', value: stats.published, color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/20' },
            { label: 'Drafts', value: stats.drafts, color: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/20' },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl border ${s.border} p-5`} style={{ background: `linear-gradient(135deg, ${s.color.split(' ')[0].replace('from-', '')}, transparent)` }}>
              <p className="text-gray-500 text-xs font-medium mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-white font-poppins">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl bg-white/5 inline-flex">
          {[
            { key: 'blogs', label: 'My Blogs' },
            { key: 'news', label: 'Latest News' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === t.key
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ──── Tab: My Blogs ──── */}
        {tab === 'blogs' && (
          <div className="space-y-2">
            {posts.length === 0 ? (
              <div className="text-center py-16 text-gray-600">
                <p className="text-lg mb-2">No blog posts yet</p>
                <Link href="/admin/dashboard/create" className="text-emerald-400 hover:underline">
                  Create your first post →
                </Link>
              </div>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-white/12 transition-colors"
                  style={{ background: 'rgba(17,24,39,0.6)' }}
                >
                  {/* Featured image thumbnail */}
                  {post.featuredImage && (
                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate">{post.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.publishDate ? new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'No date'}</span>
                      <span>·</span>
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[post.status] || 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
                    {post.status}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/admin/dashboard/edit/${post.id}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-blue-400 hover:bg-blue-400/10 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 hover:bg-red-400/10 transition-colors"
                    >
                      Delete
                    </button>
                    {post.status === 'published' && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:bg-white/5 transition-colors"
                      >
                        View
                      </Link>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* ──── Tab: Latest News ──── */}
        {tab === 'news' && (
          <div>
            {newsMessage && (
              <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                {newsMessage}
              </div>
            )}
            <div className="space-y-2">
              {news.length === 0 ? (
                <div className="text-center py-16 text-gray-600">Loading news...</div>
              ) : (
                news.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-emerald-500/20 transition-colors"
                    style={{ background: 'rgba(17,24,39,0.6)' }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-400 text-xs">📰</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate">{article.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
                        <span>{article.source}</span>
                        <span>·</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 hover:text-emerald-400 transition-colors">→</span>
                  </a>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
