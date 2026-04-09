'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import {
  EnvelopeIcon, UserIcon, GlobeAltIcon, CheckCircleIcon,
  PhoneIcon, ArrowRightIcon, ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import services from '../data/services.json';

const promises = [
  { icon: '⚡', text: 'Audit delivered in 24 hours — no waiting' },
  { icon: '🔍', text: 'We find exactly where your growth is stuck' },
  { icon: '🗺️', text: 'You get a clear 90-day plan, not a sales pitch' },
  { icon: '🔒', text: 'Zero spam. Zero pressure. No commitment.' },
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'lead',
          name: data.name,
          email: data.email,
          website: data.website,
          service: data.service,
          whatsapp: data.whatsapp,
          botField: data.botField,
          sourcePage: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      const responseData = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(responseData?.error || 'Failed to submit the form.');
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      // Display the backend validation error to the user
      setError('root', { message: err.message || 'An unexpected error occurred. Please try again.' });
    }
  };

  const inputCls = (hasError) =>
    `w-full bg-white/4 border ${hasError ? 'border-red-500/50' : 'border-white/8'} rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/6 transition-all duration-200`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{ padding: '6rem 1rem' }}
      aria-label="Contact and Lead Capture"
    >
      {/* Layered ambient glows */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: '20%', left: '20%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="absolute pointer-events-none" style={{ bottom: '10%', right: '15%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-emerald-500/60" /> Talk To Us Once <span className="w-4 h-px bg-emerald-500/60" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight">
            You don&apos;t have to buy anything.{' '}
            <span className="gradient-text">Just let us show you what&apos;s possible.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Fill in the form and we&apos;ll send you a detailed, honest analysis of your online presence within 24 hours. No pitch, no pressure &mdash; just clarity on what&apos;s actually holding you back.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — trust + contact */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Promise cards */}
            <div className="space-y-3">
              {promises.map((p, i) => (
                <motion.div
                  key={p.text}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/6"
                  style={{ background: 'rgba(17,24,39,0.7)', backdropFilter: 'blur(12px)' }}
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-sm text-gray-300">{p.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/6 my-2" />

            {/* Contact methods */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Prefer to talk directly?</p>
              <a href="tel:+18005551234" id="contact-phone-link"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/6 hover:border-emerald-500/25 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">+1 (800) 555-1234</span>
              </a>
              <a href="mailto:support@rankston.com" id="contact-email-link"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/6 hover:border-blue-500/25 hover:bg-blue-500/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <EnvelopeIcon className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">support@rankston.com</span>
              </a>
            </div>

            {/* Social proof */}
            <div className="p-4 rounded-xl border border-emerald-500/15 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                <span className="text-xs text-gray-500 ml-1">4.9 / 5</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed italic">
                "The audit alone was worth more than what we paid other agencies for full campaigns."
              </p>
              <p className="text-xs text-gray-600 mt-2">— Marcus T., E-commerce CEO</p>
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Gradient border wrapper */}
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.4), rgba(59,130,246,0.2), rgba(139,92,246,0.1))', padding: 1, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />

              <div className="relative rounded-2xl p-7 sm:p-8" style={{ background: 'rgba(17,24,39,0.92)', backdropFilter: 'blur(20px)' }}>
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #10B981, #3B82F6, #8B5CF6)' }} />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-emerald-500/30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <CheckCircleIcon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white font-poppins mb-3">You're All Set! 🎉</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                        Our team will review your info and deliver your free audit within 24 hours. Check your inbox!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} noValidate>
                      <h3 className="text-xl font-bold text-white font-poppins mb-6">Get Your Free Audit</h3>
                      
                      {/* Honeypot Field */}
                      <input type="text" {...register('botField')} className="hidden" tabIndex="-1" autoComplete="off" />

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1.5">Full Name *</label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input id="name" type="text" placeholder="John Smith"
                              className={inputCls(errors.name)}
                              {...register('name', { required: 'Required' })} />
                          </div>
                          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5">Business Email *</label>
                          <div className="relative">
                            <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input id="email" type="email" placeholder="john@company.com"
                              className={inputCls(errors.email)}
                              {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
                          </div>
                          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        {/* Website */}
                        <div>
                          <label htmlFor="website" className="block text-xs font-medium text-gray-500 mb-1.5">Website URL *</label>
                          <div className="relative">
                            <GlobeAltIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input id="website" type="url" placeholder="https://yourwebsite.com"
                              className={inputCls(errors.website)}
                              {...register('website', { required: 'Required' })} />
                          </div>
                          {errors.website && <p className="mt-1 text-xs text-red-400">{errors.website.message}</p>}
                        </div>

                        {/* WhatsApp (Optional) */}
                        <div>
                          <label htmlFor="whatsapp" className="block text-xs font-medium text-gray-500 mb-1.5">WhatsApp (Optional)</label>
                          <div className="relative">
                            <ChatBubbleLeftRightIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input id="whatsapp" type="tel" placeholder="+1234567890"
                              className={inputCls(errors.whatsapp)}
                              {...register('whatsapp', { 
                                validate: (val) => {
                                  if (!val) return true;
                                  try {
                                    const pn = parsePhoneNumberWithError(val);
                                    if (!pn.isValid()) return 'Invalid phone number format';
                                    return true;
                                  } catch (e) {
                                    return 'Use format: +CountryCode Number';
                                  }
                                }
                              })} />
                          </div>
                          {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp.message}</p>}
                        </div>
                      </div>

                      {/* Service select */}
                      <div className="mb-6">
                        <label htmlFor="service" className="block text-xs font-medium text-gray-500 mb-1.5">Service Interested In *</label>
                        <select id="service"
                          className={`w-full bg-white/4 border ${errors.service ? 'border-red-500/50' : 'border-white/8'} rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer`}
                          {...register('service', { required: 'Please select a service' })}
                        >
                          <option value="" className="bg-gray-900">Select a service…</option>
                          {services.map((s) => <option key={s.id} value={s.id} className="bg-gray-900">{s.title}</option>)}
                          <option value="all" className="bg-gray-900">Full Growth Package</option>
                        </select>
                        {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
                      </div>

                      {/* Submit */}
                      <button
                        id="lead-form-submit"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 text-sm group"
                      >
                        {isSubmitting ? (
                          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                        ) : (
                          <>Get My Free Audit <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-600 mt-3">No spam. No commitments. Results in 24 hours.</p>
                      {errors.root && <p className="mt-2 text-center text-xs text-red-400">{errors.root.message}</p>}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
