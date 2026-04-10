/**
 * lib/db.js — JSON File-Based Blog Database
 *
 * Simple, zero-dependency database using a JSON file.
 * Supports 10,000+ posts with instant read/write.
 * File: /data/blog-db.json
 */

import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'blog-db.json');

/** Default empty database structure */
const DEFAULT_DB = {
  posts: [],
  categories: [
    'SEO',
    'PPC',
    'Social Media',
    'AI Automation',
    'Web Development',
    'Content Marketing',
    'GMB Optimization',
    'Digital Marketing',
  ],
  authors: [
    'Rankston SEO Team',
    'Rankston PPC Team',
    'Rankston AI Team',
    'Rankston Social Team',
    'Rankston Content Team',
    'Rankston Web Team',
  ],
  nextId: 1,
};

/* ── Helpers ────────────────────────────────────────── */

function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      writeDB(DEFAULT_DB);
      return DEFAULT_DB;
    }
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return DEFAULT_DB;
  }
}

function writeDB(data) {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

/* ── Post CRUD ──────────────────────────────────────── */

/**
 * Get all posts, optionally filtered by status.
 * Returns newest first.
 */
export function getAllPosts({ status, page = 1, limit = 50 } = {}) {
  const db = readDB();
  let posts = [...db.posts];

  if (status) posts = posts.filter((p) => p.status === status);

  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const total = posts.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paginated = posts.slice(start, start + limit);

  return { posts: paginated, total, totalPages, page };
}

/**
 * Get published posts for the public blog.
 */
export function getPublishedPosts({ page = 1, limit = 12 } = {}) {
  const db = readDB();
  const now = new Date();

  const posts = db.posts
    .filter((p) => {
      if (p.status !== 'published') return false;
      if (p.publishDate && new Date(p.publishDate) > now) return false;
      return true;
    })
    .sort((a, b) => new Date(b.publishDate || b.createdAt) - new Date(a.publishDate || a.createdAt));

  const total = posts.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const paginated = posts.slice(start, start + limit);

  return { posts: paginated, total, totalPages, page };
}

/**
 * Get a single post by ID.
 */
export function getPostById(id) {
  const db = readDB();
  return db.posts.find((p) => p.id === Number(id)) || null;
}

/**
 * Get a single published post by slug.
 */
export function getPostBySlug(slug) {
  const db = readDB();
  return db.posts.find((p) => p.slug === slug && p.status === 'published') || null;
}

/**
 * Get all published slugs (for generateStaticParams).
 */
export function getAllPublishedSlugs() {
  const db = readDB();
  return db.posts
    .filter((p) => p.status === 'published')
    .map((p) => p.slug);
}

/**
 * Create a new post.
 */
export function createPost(data) {
  const db = readDB();
  const now = new Date().toISOString();

  const post = {
    id: db.nextId,
    title: data.title || 'Untitled',
    slug: data.slug || slugify(data.title || 'untitled'),
    excerpt: data.excerpt || '',
    content: data.content || '',
    featuredImage: data.featuredImage || '',
    featuredImageAlt: data.featuredImageAlt || '',
    author: data.author || 'Rankston SEO Team',
    category: data.category || 'SEO',
    tags: data.tags || [],
    status: data.status || 'draft',
    metaTitle: data.metaTitle || data.title || '',
    metaDescription: data.metaDescription || data.excerpt || '',
    readTime: data.readTime || estimateReadTime(data.content || ''),
    publishDate: data.publishDate || (data.status === 'published' ? now : null),
    createdAt: now,
    updatedAt: now,
  };

  db.posts.push(post);
  db.nextId += 1;
  writeDB(db);

  return post;
}

/**
 * Update a post by ID.
 */
export function updatePost(id, data) {
  const db = readDB();
  const idx = db.posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;

  const existing = db.posts[idx];
  const updated = {
    ...existing,
    ...data,
    id: existing.id, // never change ID
    createdAt: existing.createdAt, // never change creation date
    updatedAt: new Date().toISOString(),
    readTime: data.content ? estimateReadTime(data.content) : existing.readTime,
  };

  db.posts[idx] = updated;
  writeDB(db);

  return updated;
}

/**
 * Delete a post by ID.
 */
export function deletePost(id) {
  const db = readDB();
  const idx = db.posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return false;

  db.posts.splice(idx, 1);
  writeDB(db);

  return true;
}

/* ── Categories & Authors ───────────────────────────── */

export function getCategories() {
  const db = readDB();
  return db.categories;
}

export function getAuthors() {
  const db = readDB();
  return db.authors;
}

/* ── Utilities ──────────────────────────────────────── */

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

function estimateReadTime(html) {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export { readDB, writeDB };
