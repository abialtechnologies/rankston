'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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
          company: data.company,
          service: data.service,
          message: data.message,
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
      setError('root', { message: err.message || 'An unexpected error occurred. Please try again.' });
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          We've received your enquiry and will be in touch within 24 hours. Keep an eye on your inbox!
        </p>
      </div>
    );
  }

  const inputCls = (hasError) =>
    `w-full bg-white/4 border ${hasError ? 'border-red-500/50' : 'border-white/8'} rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/6 transition-all`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot Field */}
      <input type="text" {...register('botField')} className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">Full Name *</label>
          <input type="text" placeholder="John Smith" className={inputCls(errors.name)}
            {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">Email Address *</label>
          <input type="email" placeholder="john@company.com" className={inputCls(errors.email)}
            {...register('email', { required: 'Email required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">WhatsApp (Optional)</label>
          <input type="tel" placeholder="+1234567890" className={inputCls(errors.whatsapp)}
            {...register('whatsapp', { 
              validate: (val) => {
                if (!val) return true;
                try {
                  const { parsePhoneNumberWithError } = require('libphonenumber-js');
                  const pn = parsePhoneNumberWithError(val);
                  if (!pn.isValid()) return 'Invalid WhatsApp number format';
                  return true;
                } catch (e) {
                  return 'Use format: +CountryCode Number';
                }
              }
            })} />
          {errors.whatsapp && <p className="mt-1 text-xs text-red-500">{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">Service You Need</label>
          <select className={`w-full bg-white/4 border ${errors.service ? 'border-red-500/50' : 'border-white/8'} rounded-xl py-3 px-4 text-gray-300 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/6 transition-all appearance-none`}
            {...register('service')}
          >
            <option value="" className="text-gray-900">Select a service...</option>
            <option className="text-gray-900">SEO / AIO / GEO</option>
            <option className="text-gray-900">Web Development</option>
            <option className="text-gray-900">Social Media Marketing</option>
            <option className="text-gray-900">PPC Advertising</option>
            <option className="text-gray-900">Graphic Design</option>
            <option className="text-gray-900">Video Editing</option>
            <option className="text-gray-900">Content Marketing</option>
            <option className="text-gray-900">GMB Optimization</option>
            <option className="text-gray-900">AI Automation</option>
            <option className="text-gray-900">Chatbot Development</option>
            <option className="text-gray-900">Not sure — just enquiring</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">Company / Website</label>
        <input type="text" placeholder="mycompany.com" className={inputCls(false)} {...register('company')} />
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-1.5">Your Message *</label>
        <textarea rows={5} placeholder="Tell us about your business and what you'd like help with..." className={`${inputCls(errors.message)} resize-none`}
          {...register('message', { required: 'Please provide a message' })} />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {errors.root && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
          {errors.root.message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 py-4 text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity disabled:opacity-60" style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)', boxShadow: '0 8px 32px rgba(16,185,129,0.25)' }}>
        {isSubmitting ? 'Sending...' : <>Send Message <ArrowRightIcon className="w-4 h-4" /></>}
      </button>

      <p className="text-center text-xs text-gray-700">
        By sending this form you agree to our <Link href="/privacy" className="text-gray-500 hover:text-gray-300 underline">Privacy Policy</Link>. No spam, ever.
      </p>
    </form>
  );
}
