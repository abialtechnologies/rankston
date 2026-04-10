'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState('password'); // 'password' | 'otp'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  /* ── Step 1: Submit email + password ── */
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.step === 'otp') {
        setStep('otp');
        setMessage(data.message);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  /* ── Step 2: Submit OTP ── */
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('admin_token', data.token);
        if (data.refreshToken) localStorage.setItem('admin_refresh', data.refreshToken);
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid OTP');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
      />

      <form
        onSubmit={step === 'password' ? handlePasswordSubmit : handleOtpSubmit}
        className="relative w-full max-w-md rounded-2xl border border-white/8 p-8"
        style={{
          background: 'linear-gradient(145deg, rgba(17,24,39,0.95), rgba(10,15,26,0.98))',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <Image
              src="/logo-icon.png"
              alt="Rankston"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-xl font-poppins">Rankston</span>
          </div>
          <h1 className="text-2xl font-bold text-white font-poppins mb-2">
            {step === 'password' ? 'Admin Login' : 'Verify OTP'}
          </h1>
          <p className="text-gray-500 text-sm">
            {step === 'password'
              ? 'Enter your credentials to access the dashboard'
              : 'Enter the code sent to your email'}
          </p>
        </div>

        {/* Success message */}
        {message && step === 'otp' && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
            ✓ {message}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* ── Step 1: Email + Password ── */}
        {step === 'password' && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rankston.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
              />
            </div>
          </>
        )}

        {/* ── Step 2: OTP ── */}
        {step === 'otp' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="otp">
              Verification Code
            </label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6,8}"
              maxLength={8}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 8))}
              placeholder="000000"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-center text-2xl tracking-[0.5em] font-mono placeholder:text-gray-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
            />
            <p className="text-xs text-gray-600 mt-2 text-center">
              Check <span className="text-emerald-400">{email}</span> for the 6-digit code
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? step === 'password' ? 'Verifying...' : 'Checking OTP...'
            : step === 'password' ? 'Continue →' : 'Verify & Login'}
        </button>

        {/* Back button on OTP step */}
        {step === 'otp' && (
          <button
            type="button"
            onClick={() => { setStep('password'); setOtp(''); setError(''); setMessage(''); }}
            className="w-full mt-3 py-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back to login
          </button>
        )}

        <div className="flex items-center gap-2 justify-center mt-6">
          <div className="w-2 h-2 rounded-full transition-colors" style={{ background: step === 'password' ? '#10b981' : 'rgba(255,255,255,0.15)' }} />
          <div className="w-2 h-2 rounded-full transition-colors" style={{ background: step === 'otp' ? '#10b981' : 'rgba(255,255,255,0.15)' }} />
        </div>

        <p className="text-center text-xs text-gray-700 mt-4">
          2-Factor Authentication • Rankston CMS
        </p>
      </form>
    </div>
  );
}
