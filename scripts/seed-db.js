/**
 * scripts/seed-db.js — Migrate blog-posts.json → blog-db.json
 *
 * Run: node scripts/seed-db.js
 * Converts the existing 104 hardcoded blog posts into the new JSON database format.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Read source data
const originals = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'blog-posts.json'), 'utf-8'));

// Import blog generator to get all posts (original + generated)
const { getAllBlogPosts } = await import(path.join(ROOT, 'data', 'blog-generator.js'));
const allPosts = getAllBlogPosts(originals);

console.log(`📦 Found ${allPosts.length} total blog posts to migrate...`);

// Convert content blocks to HTML
function contentToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks
    .map((block) => {
      switch (block.type) {
        case 'intro':
          return `<p class="intro"><em>${block.text}</em></p>`;
        case 'h2':
          return `<h2>${block.text}</h2>`;
        case 'h3':
          return `<h3>${block.text}</h3>`;
        case 'paragraph':
          return `<p>${block.text}</p>`;
        case 'image':
          return `<figure><img src="${block.src}" alt="${block.alt || ''}" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;
        case 'list':
          return `<ul>${(block.items || []).map((i) => `<li>${i}</li>`).join('')}</ul>`;
        default:
          return `<p>${block.text || ''}</p>`;
      }
    })
    .join('\n');
}

// Build database
const db = {
  posts: allPosts.map((post, i) => ({
    id: i + 1,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: contentToHtml(post.content),
    featuredImage: post.thumbnail || '',
    featuredImageAlt: post.title,
    author: post.author || 'Rankston SEO Team',
    category: post.category || 'SEO',
    tags: post.tags || [],
    status: 'published',
    metaTitle: `${post.title} | Rankston Blog`,
    metaDescription: post.excerpt || '',
    readTime: post.readTime || '5 min read',
    publishDate: post.publishedAt || new Date().toISOString().split('T')[0],
    createdAt: `${post.publishedAt || '2025-10-01'}T00:00:00.000Z`,
    updatedAt: new Date().toISOString(),
  })),
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
  nextId: allPosts.length + 1,
};

// Write
const outputPath = path.join(ROOT, 'data', 'blog-db.json');
fs.writeFileSync(outputPath, JSON.stringify(db, null, 2), 'utf-8');

console.log(`✅ Migrated ${db.posts.length} posts to ${outputPath}`);
console.log(`   Next ID: ${db.nextId}`);
console.log(`   Categories: ${db.categories.join(', ')}`);
