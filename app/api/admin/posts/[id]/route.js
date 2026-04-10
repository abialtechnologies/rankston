/**
 * /api/admin/posts/[id] — Single Post Operations
 *
 * GET:    Get single post by ID
 * PUT:    Update post
 * DELETE: Delete post
 */

import { NextResponse } from 'next/server';
import { getPostById, updatePost, deletePost } from '../../../../../lib/db.js';

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  return auth?.startsWith('Bearer ') && auth.length > 20;
}

/** GET — Get single post */
export async function GET(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ post });
}

/** PUT — Update post */
export async function PUT(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const data = await request.json();
    const post = updatePost(id, data);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post, message: 'Post updated' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

/** DELETE — Delete post */
export async function DELETE(request, { params }) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const success = deletePost(id);

  if (!success) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Post deleted' });
}
