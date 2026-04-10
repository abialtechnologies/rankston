/**
 * /api/admin/auth — Simple session-based admin authentication
 *
 * POST: Login with password → returns token
 * GET: Validate existing token
 *
 * Set ADMIN_PASSWORD in .env.local
 */

import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory token store (resets on server restart — fine for single-user admin)
const activeSessions = new Map();
const TOKEN_TTL = 24 * 60 * 60 * 1000; // 24 hours

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

function cleanExpired() {
  const now = Date.now();
  for (const [token, exp] of activeSessions) {
    if (exp < now) activeSessions.delete(token);
  }
}

/** POST — Login */
export async function POST(request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'rankston2026';

    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    cleanExpired();
    const token = generateToken();
    activeSessions.set(token, Date.now() + TOKEN_TTL);

    return NextResponse.json({ token, message: 'Login successful' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

/** GET — Validate token */
export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  cleanExpired();
  const exp = activeSessions.get(token);

  if (!exp || exp < Date.now()) {
    activeSessions.delete(token);
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  return NextResponse.json({ valid: true });
}
