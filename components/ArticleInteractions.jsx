'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Reaction types ─── */
const REACTIONS = [
  { key: 'like',       emoji: '👍', label: 'Like',       color: '#3B82F6' },
  { key: 'love',       emoji: '❤️', label: 'Love',       color: '#EF4444' },
  { key: 'insightful', emoji: '💡', label: 'Insightful', color: '#F59E0B' },
  { key: 'wow',        emoji: '😮', label: 'Wow',        color: '#8B5CF6' },
  { key: 'haha',       emoji: '😂', label: 'Haha',       color: '#10B981' },
];

const SHARE_PLATFORMS = [
  { key: 'twitter',   label: 'Twitter / X',  color: '#E7E9EA', bg: '#1a1a1a', getUrl: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` },
  { key: 'facebook',  label: 'Facebook',      color: '#fff',    bg: '#1877F2', getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  { key: 'linkedin',  label: 'LinkedIn',      color: '#fff',    bg: '#0A66C2', getUrl: (url, title) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}` },
  { key: 'whatsapp',  label: 'WhatsApp',      color: '#fff',    bg: '#25D366', getUrl: (url, title) => `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}` },
];

/* ─── Reaction bar ─── */
function ReactionBar({ slug }) {
  const storageKey = `reactions_${slug}`;
  const [counts,       setCounts]       = useState({ like: 24, love: 11, insightful: 8, wow: 5, haha: 3 });
  const [userReaction, setUserReaction] = useState(null);
  const [showPicker,   setShowPicker]   = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (saved.counts)       setCounts(saved.counts);
      if (saved.userReaction) setUserReaction(saved.userReaction);
    } catch {}
  }, [storageKey]);

  const persist = (newCounts, newReaction) => {
    try { localStorage.setItem(storageKey, JSON.stringify({ counts: newCounts, userReaction: newReaction })); } catch {}
  };

  const handleReact = (key) => {
    let newCounts = { ...counts };
    let newReaction = userReaction;

    if (userReaction === key) {
      // Toggle off
      newCounts[key] = Math.max(0, newCounts[key] - 1);
      newReaction = null;
    } else {
      if (userReaction) newCounts[userReaction] = Math.max(0, newCounts[userReaction] - 1);
      newCounts[key] = (newCounts[key] || 0) + 1;
      newReaction = key;
    }
    setCounts(newCounts);
    setUserReaction(newReaction);
    setShowPicker(false);
    persist(newCounts, newReaction);
  };

  const totalReactions = Object.values(counts).reduce((a, b) => a + b, 0);
  const activeReaction = REACTIONS.find((r) => r.key === userReaction);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Main react button */}
      <div className="relative">
        <button
          onMouseEnter={() => setShowPicker(true)}
          onMouseLeave={() => setShowPicker(false)}
          onClick={() => !userReaction && handleReact('like')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
            userReaction
              ? 'border-opacity-50 text-white'
              : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
          }`}
          style={userReaction ? { borderColor: activeReaction?.color + '60', background: activeReaction?.color + '15', color: activeReaction?.color } : { background: 'rgba(255,255,255,0.04)' }}
        >
          <span className="text-base">{activeReaction ? activeReaction.emoji : '👍'}</span>
          <span>{activeReaction ? activeReaction.label : 'React'}</span>
        </button>

        {/* Picker popup */}
        {showPicker && (
          <div
            onMouseEnter={() => setShowPicker(true)}
            onMouseLeave={() => setShowPicker(false)}
            className="absolute bottom-full left-0 mb-2 flex items-center gap-1 px-2 py-2 rounded-2xl border border-white/10 shadow-2xl z-20"
            style={{ background: 'rgba(15,20,35,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {REACTIONS.map((r) => (
              <button
                key={r.key}
                onClick={() => handleReact(r.key)}
                title={r.label}
                className="group flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:bg-white/8 transition-all"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform block leading-none">{r.emoji}</span>
                <span className="text-[9px] text-gray-600 group-hover:text-gray-400">{r.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reaction summary */}
      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <span className="flex -space-x-1">
          {REACTIONS.filter((r) => counts[r.key] > 0).slice(0, 3).map((r) => (
            <span key={r.key} className="text-base leading-none">{r.emoji}</span>
          ))}
        </span>
        {totalReactions > 0 && <span>{totalReactions} reactions</span>}
      </div>
    </div>
  );
}

/* ─── Share section ─── */
function ShareSection({ title, slug }) {
  const [shareCount, setShareCount] = useState(47);
  const [copied,     setCopied]     = useState(false);
  const [showPanel,  setShowPanel]  = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : `https://rankston.com/blog/${slug}`;

  const handleShare = (platform) => {
    const p = SHARE_PLATFORMS.find((x) => x.key === platform);
    if (!p) return;
    window.open(p.getUrl(url, title), '_blank', 'noopener,noreferrer,width=600,height=500');
    setShareCount((c) => c + 1);
    setShowPanel(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setShareCount((c) => c + 1);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPanel((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 hover:border-white/20 transition-all text-sm text-gray-400 hover:text-white"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
        <span className="text-xs text-gray-600 bg-white/6 rounded-full px-2 py-0.5">{shareCount}</span>
      </button>

      {showPanel && (
        <div
          className="absolute bottom-full left-0 mb-2 w-56 rounded-2xl border border-white/10 shadow-2xl z-20 overflow-hidden"
          style={{ background: 'rgba(15,20,35,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="p-2 space-y-0.5">
            {SHARE_PLATFORMS.map((p) => (
              <button
                key={p.key}
                onClick={() => handleShare(p.key)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/6 transition-all text-left group"
              >
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0" style={{ background: p.bg, color: p.color }}>
                  {p.key === 'twitter' ? 'X' : p.key === 'facebook' ? 'f' : p.key === 'linkedin' ? 'in' : 'W'}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{p.label}</span>
              </button>
            ))}
            <div className="border-t border-white/6 pt-1 mt-1">
              <button onClick={copyLink} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/6 transition-all text-left group">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/8 shrink-0">
                  {copied
                    ? <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    : <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  }
                </span>
                <span className={`text-sm transition-colors ${copied ? 'text-emerald-400' : 'text-gray-400 group-hover:text-white'}`}>
                  {copied ? 'Copied!' : 'Copy link'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Comments ─── */
function CommentsSection({ slug }) {
  const storageKey = `comments_${slug}`;
  const defaultComments = [
    { id: 1, name: 'James K.',     avatar: 'JK', color: '#10B981', text: 'Incredibly detailed breakdown. This is exactly the kind of case study content the industry needs.', date: '2 days ago',  likes: 12 },
    { id: 2, name: 'Sarah M.',     avatar: 'SM', color: '#3B82F6', text: 'Applied some of these tactics last month — already seeing improvements in our traffic. Thanks for sharing!', date: '3 days ago',  likes: 8  },
    { id: 3, name: 'Ahmed R.',     avatar: 'AR', color: '#8B5CF6', text: 'The ROI numbers here are insane. Would love to see a follow-up on the link building strategy specifically.', date: '1 week ago', likes: 5  },
  ];

  const [comments,     setComments]     = useState(defaultComments);
  const [name,         setName]         = useState('');
  const [text,         setText]         = useState('');
  const [likedIds,     setLikedIds]     = useState(new Set());
  const [submitting,   setSubmitting]   = useState(false);
  const [submitted,    setSubmitted]    = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (saved.comments?.length) setComments(saved.comments);
      if (saved.likedIds)         setLikedIds(new Set(saved.likedIds));
    } catch {}
  }, [storageKey]);

  const persist = (c, l) => {
    try { localStorage.setItem(storageKey, JSON.stringify({ comments: c, likedIds: [...l] })); } catch {}
  };

  const handleLike = (id) => {
    const newLiked = new Set(likedIds);
    const newComments = comments.map((c) => {
      if (c.id !== id) return c;
      if (newLiked.has(id)) { newLiked.delete(id); return { ...c, likes: c.likes - 1 }; }
      newLiked.add(id);
      return { ...c, likes: c.likes + 1 };
    });
    setLikedIds(newLiked);
    setComments(newComments);
    persist(newComments, newLiked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);

    // Get email from the optional email field
    const emailField = e.target.querySelector('input[type="email"]');
    const commentEmail = emailField?.value || '';

    // Send to API
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'comment',
          name: name.trim(),
          email: commentEmail,
          comment: text.trim(),
          articleSlug: slug,
          articleTitle: typeof window !== 'undefined' ? document.title : slug,
        }),
      });
    } catch {}

    const initials = name.trim().split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#06B6D4'];
    const newComment = {
      id: Date.now(), name: name.trim(), avatar: initials,
      color: colors[Math.floor(Math.random() * colors.length)],
      text: text.trim(), date: 'Just now', likes: 0,
    };
    const updated = [newComment, ...comments];
    setComments(updated);
    persist(updated, likedIds);
    setName(''); setText('');
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div id="comments">
      <h3 className="text-xl font-bold text-white font-poppins mb-6">
        {comments.length} Comments
      </h3>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-8 rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(17,24,39,0.7)' }}>
        <p className="text-sm font-medium text-gray-300 mb-4">Leave a comment</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input
            type="text" placeholder="Your name *" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
            required
          />
          <input
            type="email" placeholder="Email (optional, not shown)"
            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
          />
        </div>
        <textarea
          placeholder="Share your thoughts…" value={text} onChange={(e) => setText(e.target.value)}
          rows={3} required
          className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/40 transition-colors resize-none mb-3"
        />
        <div className="flex items-center justify-between">
          {submitted && <span className="text-sm text-emerald-400">Comment posted!</span>}
          {!submitted && <span />}
          <button
            type="submit" disabled={submitting}
            className="flex items-center gap-2 px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {submitting ? (
              <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Posting…</>
            ) : 'Post Comment'}
          </button>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            {/* Avatar */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
              style={{ background: c.color }}
            >
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="rounded-2xl rounded-tl-none px-4 py-3 border border-white/6" style={{ background: 'rgba(17,24,39,0.8)' }}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-semibold text-white">{c.name}</span>
                  <span className="text-xs text-gray-600">{c.date}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{c.text}</p>
              </div>
              {/* Like button */}
              <button
                onClick={() => handleLike(c.id)}
                className={`mt-1.5 ml-2 flex items-center gap-1.5 text-xs transition-colors ${likedIds.has(c.id) ? 'text-blue-400' : 'text-gray-600 hover:text-gray-400'}`}
              >
                <svg className="w-3.5 h-3.5" fill={likedIds.has(c.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                {likedIds.has(c.id) ? 'Liked' : 'Like'} · {c.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function ArticleInteractions({ title, slug }) {
  return (
    <div className="mt-10 space-y-8">
      {/* Divider */}
      <div className="h-px bg-white/6" />

      {/* Reactions + Share row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ReactionBar slug={slug} />
        <ShareSection title={title} slug={slug} />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/6" />

      {/* Comments */}
      <CommentsSection slug={slug} />
    </div>
  );
}
