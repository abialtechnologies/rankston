/**
 * /api/admin/auth — HMAC-based stateless admin authentication
 *
 * POST: Login with password → returns signed token
 * GET:  Validate existing token
 *
 * Tokens are self-validating (HMAC) — survive server restarts.
 * Set ADMIN_PASSWORD in .env.local
 */

import { NextResponse } from 'next/server';
import crypto from 'crypto';

const TOKEN_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

function getSecret() {
  // Use ADMIN_PASSWORD as the signing secret (or a dedicated SECRET env var)
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || 'rankston2026';
}

function createToken() {
  const expires = Date.now() + TOKEN_TTL;
  const payload = `${expires}`;
  const sig = crypto.createHmac('sha256', getSecret()).update(payload).digest('hex');
  // Format: expires.signature (base64url-safe)
  return Buffer.from(`${payload}.${sig}`).toString('base64url');
}

function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    const [payload, sig] = decoded.split('.');
    if (!payload || !sig) return false;

    // Verify signature
    const expected = crypto.createHmac('sha256', getSecret()).update(payload).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))) return false;

    // Check expiry
    const expires = parseInt(payload, 10);
    return Date.now() < expires;
  } catch {
    return false;
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

    const token = createToken();
    return NextResponse.json({ token, message: 'Login successful' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

/** GET — Validate token */
export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  return NextResponse.json({ valid: true });
}

export { verifyToken };
