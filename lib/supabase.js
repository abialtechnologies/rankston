/**
 * lib/supabase.js — Supabase Client Setup
 *
 * Browser client (anon key) — for auth in client components
 * Server client (service_role) — for storage uploads and admin ops
 */

import { createClient } from '@supabase/supabase-js';

/* ── Browser Client (client components) ── */
let browserClient = null;

export function getSupabaseBrowserClient() {
  if (browserClient) return browserClient;
  
  browserClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );

  return browserClient;
}

/* ── Server Client (API routes — service_role key) ── */
export function getSupabaseServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
