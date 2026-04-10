/**
 * /api/admin/upload — Image Upload Handler
 *
 * POST: Upload image file → saves to /public/uploads/blog/
 * Returns the public URL for embedding in editor
 */

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'blog');
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

function checkAuth(request) {
  const auth = request.headers.get('authorization');
  return auth?.startsWith('Bearer ') && auth.length > 20;
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Validate size
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Image too large. Max 5MB.' }, { status: 400 });
    }

    // Validate type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid image type' }, { status: 400 });
    }

    // Create upload directory
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    // Generate unique filename
    const ext = file.name.split('.').pop();
    const timestamp = Date.now();
    const safeName = file.name
      .replace(/\.[^.]+$/, '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .substring(0, 40);
    const filename = `${timestamp}-${safeName}.${ext}`;

    // Write file
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(UPLOAD_DIR, filename);
    fs.writeFileSync(filePath, buffer);

    // Return public URL
    const url = `/uploads/blog/${filename}`;

    return NextResponse.json({ url, filename, size: file.size });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
