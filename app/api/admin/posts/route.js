/**
 * /api/admin/posts — Blog Posts CRUD
 *
 * GET:  List all posts with pagination & status filter
 * POST: Create a new post
 */

import { NextResponse } from 'next/server';
import { getAllPosts, createPost, getCategories, getAuthors } from '../../../../lib/db.js';
import { verifyToken } from '../auth/route.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  const token = auth?.replace('Bearer ', '');
  return token ? verifyToken(token) : false;
}

/** GET — List posts */
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || undefined;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '50', 10);

  const result = getAllPosts({ status, page, limit });
  const categories = getCategories();
  const authors = getAuthors();

  return NextResponse.json({ ...result, categories, authors });
}

/** POST — Create post */
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const post = createPost(data);
    return NextResponse.json({ post, message: 'Post created' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
