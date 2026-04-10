/**
 * /api/admin/auth — 2-Factor Authentication
 *
 * Step 1: POST { email, password }        → validates password, sends OTP to email
 * Step 2: POST { email, otp }             → verifies OTP, returns session token
 * GET:    Validate existing session token
 */

import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase.js';

/** POST — Login (2 steps) */
export async function POST(request) {
  try {
    const body = await request.json();
    const supabase = getSupabaseServerClient();

    // ── Step 2: Verify OTP ──
    if (body.otp && body.email) {
      const { data, error } = await supabase.auth.verifyOtp({
        email: body.email,
        token: body.otp,
        type: 'email',
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 401 });
      }

      return NextResponse.json({
        token: data.session?.access_token,
        refreshToken: data.session?.refresh_token,
        user: { email: data.user?.email, id: data.user?.id },
        message: 'Login successful — Welcome!',
      });
    }

    // ── Step 1: Validate password, then send OTP ──
    if (body.email && body.password) {
      // First validate password via Supabase Auth
      const { data: signIn, error: signErr } = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password,
      });

      if (signErr) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }

      // Sign out immediately — we need OTP verification first
      await supabase.auth.signOut();

      // Now send OTP to email
      const { error: otpErr } = await supabase.auth.signInWithOtp({
        email: body.email,
        options: {
          shouldCreateUser: false,
        },
      });

      if (otpErr) {
        return NextResponse.json({ error: otpErr.message }, { status: 500 });
      }

      return NextResponse.json({
        step: 'otp',
        message: 'Password verified. OTP sent to your email.',
      });
    }

    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

/** GET — Validate session token */
export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }

  return NextResponse.json({ valid: true, user: { email: user.email, id: user.id } });
}

/** Helper to verify token (used by other API routes) */
export function verifyToken(token) {
  // For Supabase JWT tokens, they are self-validating
  // We do a lightweight check here, full validation happens via getUser
  if (!token || token.length < 20) return false;
  try {
    // Supabase JWTs are base64url encoded with 3 parts
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString());
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
