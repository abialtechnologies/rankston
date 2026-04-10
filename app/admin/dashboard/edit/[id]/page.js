'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RichEditor = dynamic(() => import('../../../../../components/admin/RichEditor'), { ssr: false });

export default function EditBlogPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [token, setToken] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  /* ── Form state ── */
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [featuredImageAlt, setFeaturedImageAlt] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [publishDate, setPublishDate] = useState('');

  /* ── Load post ── */
  useEffect(() => {
    const t = localStorage.getItem('admin_token');
    if (!t) { router.push('/admin'); return; }
    setToken(t);

    // Load post + metadata
    Promise.all([
      fetch(`/api/admin/posts/${id}`, { headers: { Authorization: `Bearer ${t}` } }).then((r) => r.json()),
      fetch('/api/admin/posts?limit=1', { headers: { Authorization: `Bearer ${t}` } }).then((r) => r.json()),
    ]).then(([postData, metaData]) => {
      const p = postData.post;
      if (!p) { router.push('/admin/dashboard'); return; }

      setTitle(p.title || '');
      setSlug(p.slug || '');
      setExcerpt(p.excerpt || '');
      setContent(p.content || '');
      setFeaturedImage(p.featuredImage || '');
      setFeaturedImageAlt(p.featuredImageAlt || '');
      setAuthor(p.author || '');
      setCategory(p.category || '');
      setTags((p.tags || []).join(', '));
      setMetaTitle(p.metaTitle || '');
      setMetaDescription(p.metaDescription || '');
      setStatus(p.status || 'draft');
      setPublishDate(p.publishDate ? p.publishDate.slice(0, 16) : '');

      setCategories(metaData.categories || []);
      setAuthors(metaData.authors || []);
      setLoading(false);
    });
  }, [id, router]);

  /* ── Featured image upload ── */
  const handleFeaturedUpload = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const data = await res.json();

    if (res.ok) {
      setFeaturedImage(data.url);
      if (!featuredImageAlt) setFeaturedImageAlt(title || file.name);
    } else {
      alert(data.error || 'Upload failed');
    }
  }, [token, title, featuredImageAlt]);

  /* ── Save ── */
  const handleSave = async (saveStatus) => {
    if (!title.trim()) { alert('Title is required'); return; }
    setSaving(true);

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          featuredImage,
          featuredImageAlt,
          author,
          category,
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || excerpt,
          status: saveStatus,
          publishDate: saveStatus === 'published' ? (publishDate || new Date().toISOString()) : publishDate || null,
        }),
      });

      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        const err = await res.json();
        alert(err.error || 'Save failed');
      }
    } catch {
      alert('Save error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading post...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 border-b border-white/6" style={{ background: 'rgba(10,15,26,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-gray-400 hover:text-white transition-colors text-sm">
              ← Back to Dashboard
            </Link>
            <span className="text-gray-700 text-sm">Editing: {title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={saving}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saving ? 'Saving...' : status === 'published' ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Main editor area ── */}
        <div className="lg:col-span-2 space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog post title..."
            className="w-full text-3xl font-bold text-white bg-transparent border-none outline-none placeholder:text-gray-700 font-poppins"
          />
          <RichEditor content={content} onChange={setContent} token={token} />
        </div>

        {/* ── Sidebar settings ── */}
        <div className="space-y-5">
          {/* Featured Image */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">Featured Image</h3>
            {featuredImage ? (
              <div className="relative mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featuredImage} alt={featuredImageAlt} className="w-full rounded-lg" />
                <button onClick={() => setFeaturedImage('')} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 text-white text-xs flex items-center justify-center hover:bg-red-500">×</button>
              </div>
            ) : (
              <label className="block w-full py-8 border-2 border-dashed border-white/10 rounded-xl text-center cursor-pointer hover:border-emerald-500/30 transition-colors">
                <span className="text-gray-500 text-sm">Click to upload</span>
                <input type="file" accept="image/*" onChange={handleFeaturedUpload} className="hidden" />
              </label>
            )}
            <input type="text" value={featuredImageAlt} onChange={(e) => setFeaturedImageAlt(e.target.value)} placeholder="Alt text" className="w-full mt-2 px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40" />
          </div>

          {/* Slug */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">URL Slug</h3>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white focus:outline-none focus:border-emerald-500/40" />
          </div>

          {/* Excerpt */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">Excerpt</h3>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Short description..." rows={3} className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40 resize-none" />
          </div>

          {/* Author & Category */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">Author & Category</h3>
            <select value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full mb-3 px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white focus:outline-none focus:border-emerald-500/40">
              {authors.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white focus:outline-none focus:border-emerald-500/40">
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Tags */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">Tags</h3>
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="SEO, Marketing (comma separated)" className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40" />
            {tags && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.split(',').map((t, i) => t.trim() && (
                  <span key={i} className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">{t.trim()}</span>
                ))}
              </div>
            )}
          </div>

          {/* SEO */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">SEO Settings</h3>
            <input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta title" className="w-full mb-3 px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40" />
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Meta description..." rows={3} className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40 resize-none" />
            <p className="text-xs text-gray-600 mt-1">{(metaDescription || '').length}/160</p>
          </div>

          {/* Schedule */}
          <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <h3 className="text-white text-sm font-semibold mb-3">Schedule</h3>
            <input type="datetime-local" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/8 text-white focus:outline-none focus:border-emerald-500/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
