/**
 * /api/lead — handles all form submissions from the website
 * 
 * Sends email notifications to rankstonleads@gmail.com
 * using Nodemailer with Gmail SMTP.
 * 
 * Env vars required:
 *   GMAIL_USER     — rankstonleads@gmail.com
 *   GMAIL_APP_PASS — Gmail App Password (not your login password)
 * 
 * To generate an App Password:
 *   1. Go to myaccount.google.com → Security → 2-Step Verification
 *   2. At the bottom, click "App passwords"
 *   3. Generate one for "Mail" → copy the 16-char password
 *   4. Set it as GMAIL_APP_PASS in your .env.local
 */
import nodemailer from 'nodemailer';

const RECIPIENT = 'rankstonleads@gmail.com';

/* ── Create reusable transporter ── */
function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || RECIPIENT,
      pass: process.env.GMAIL_APP_PASS || '',
    },
  });
}

/* ── Email templates by form type ── */
function buildEmail(data) {
  const { formType, whatsapp } = data;
  const whatsappRow = whatsapp ? `<tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">WhatsApp</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;"><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #25D366; font-weight: bold;">${whatsapp}</a></td></tr>` : '';

  switch (formType) {
    case 'lead': {
      const subject = `🔥 New Lead — ${data.name} (${data.service || 'General'})`;
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10B981, #3B82F6); padding: 20px 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🎯 New Lead Submission</h1>
          </div>
          <div style="background: #111827; padding: 30px; border: 1px solid #1f2937; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 120px;">Name</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px; font-weight: bold;">${data.name}</td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Email</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;"><a href="mailto:${data.email}" style="color: #10B981;">${data.email}</a></td></tr>
              ${whatsappRow}
              ${data.company ? `<tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Company</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;">${data.company}</td></tr>` : ''}
              ${data.website ? `<tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Website</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;"><a href="${data.website}" style="color: #3B82F6;" target="_blank">${data.website}</a></td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Service</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;">${data.service || 'Not specified'}</td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Source Page</td><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">${data.sourcePage || 'Unknown'}</td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Submitted At</td><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
            </table>
            ${data.message ? `<div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;"><p style="margin: 0; color: #D1D5DB; font-size: 14px; line-height: 1.6;">${data.message}</p></div>` : ''}
            <div style="margin-top: 20px; padding: 15px; background: #10B98115; border: 1px solid #10B98130; border-radius: 8px;">
              <p style="margin: 0; color: #10B981; font-size: 13px; font-weight: bold;">⚡ Action Required</p>
              <p style="margin: 5px 0 0; color: #9CA3AF; font-size: 12px;">Respond within 24 hours to maximize conversion. This lead expects a free audit.</p>
            </div>
          </div>
        </div>
      `;
      return { subject, html };
    }

    case 'newsletter': {
      const subject = `📧 New Newsletter Subscriber — ${data.email}`;
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8B5CF6, #3B82F6); padding: 20px 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">📧 New Newsletter Subscriber</h1>
          </div>
          <div style="background: #111827; padding: 30px; border: 1px solid #1f2937; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 120px;">Email</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;"><a href="mailto:${data.email}" style="color: #8B5CF6;">${data.email}</a></td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Subscribed At</td><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
            </table>
            <p style="margin-top: 15px; color: #6B7280; font-size: 12px;">Add this email to your newsletter list / email marketing platform.</p>
          </div>
        </div>
      `;
      return { subject, html };
    }

    case 'whatsapp': {
      const subject = `🟢 WhatsApp Request — ${data.number}`;
      const sanitizedNum = data.number.replace(/[^0-9+]/g, '');
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #25D366, #128C7E); padding: 20px 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">🟢 New WhatsApp Request</h1>
          </div>
          <div style="background: #111827; padding: 30px; border: 1px solid #1f2937; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 120px;">WhatsApp Number</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px; font-weight: bold;">${data.number}</td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Source URL</td><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;"><a href="${data.sourcePage}" style="color: #25D366;">${data.sourcePage}</a></td></tr>
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Submitted At</td><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); border-radius: 8px;">
              <p style="margin: 0; color: #25D366; font-size: 13px; font-weight: bold;">⚡ Action Required</p>
              <p style="margin: 5px 0 15px; color: #9CA3AF; font-size: 12px;">A lead requested to be contacted via WhatsApp. Click below to chat with them immediately.</p>
              <a href="https://wa.me/${sanitizedNum}" style="display: inline-block; background: #25D366; color: white; text-decoration: none; font-weight: bold; padding: 10px 15px; border-radius: 6px; font-size: 14px;">Message on WhatsApp</a>
            </div>
          </div>
        </div>
      `;
      return { subject, html };
    }

    case 'comment': {
      const subject = `💬 New Blog Comment — ${data.name} on "${data.articleTitle}"`;
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #F59E0B, #EC4899); padding: 20px 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">💬 New Blog Comment</h1>
          </div>
          <div style="background: #111827; padding: 30px; border: 1px solid #1f2937; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 120px;">Name</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px; font-weight: bold;">${data.name}</td></tr>
              ${data.email ? `<tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Email</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;"><a href="mailto:${data.email}" style="color: #F59E0B;">${data.email}</a></td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #9CA3AF; font-size: 13px;">Article</td><td style="padding: 10px 0; color: #F9FAFB; font-size: 15px;">${data.articleTitle || data.articleSlug}</td></tr>
            </table>
            <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
              <p style="margin: 0; color: #D1D5DB; font-size: 14px; line-height: 1.6;">${data.comment}</p>
            </div>
            <p style="margin-top: 12px; color: #6B7280; font-size: 12px;">Posted at ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
          </div>
        </div>
      `;
      return { subject, html };
    }

    default:
      return {
        subject: `📬 New Form Submission — ${data.formType || 'Unknown'}`,
        html: `<pre style="font-family: monospace; background: #111; color: #eee; padding: 20px; border-radius: 8px;">${JSON.stringify(data, null, 2)}</pre>`,
      };
  }
}

import { parsePhoneNumberWithError } from 'libphonenumber-js';

/* ── API Route Handler ── */
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.formType) {
      return Response.json({ error: 'Missing formType' }, { status: 400 });
    }

    // 1. HONEYPOT TRAP (Bot blocking) - If honeypot exists and is filled, silently discard.
    if (data.botField) {
      console.warn('Bot trap triggered! Hidden botField was filled.');
      return Response.json({ success: true, message: 'Fake success for bot' });
    }

    // 2. GIBBERISH / SPAM DETECTION
    const isGibberish = (str) => {
      if (!str) return false;
      const lowered = str.toLowerCase();
      // Repeated same character 4+ times (aaaa, bbbbb)
      if (/(.)\1{4,}/.test(lowered)) return true;
      // Link spam
      const urlMatches = lowered.match(/(http|www|\.com|\.net|\.org)/g);
      if (urlMatches && urlMatches.length > 2) return true;
      // Banned words common in SEO form spam
      if (/crypto|bitcoin|casino|viagra|buy followers|buy traffic|click here|porn/i.test(lowered)) return true;
      return false;
    };

    if (isGibberish(data.name) || isGibberish(data.message) || isGibberish(data.comment)) {
      console.warn('Fake lead detected (gibberish or spam keywords).');
      return Response.json({ error: 'System flagged this message as spam. Please remove links/restricted words and try again.' }, { status: 400 });
    }

    // 3. WHATSAPP TELECOM NUMBER VALIDATION
    if (data.whatsapp && data.whatsapp.trim() !== '') {
      try {
        const phoneNumber = parsePhoneNumberWithError(data.whatsapp);
        if (!phoneNumber.isValid()) {
          return Response.json({ error: 'Invalid WhatsApp number format. Ensure country code is correct.' }, { status: 400 });
        }
        // Normalize to international E.164 format for safe mailing
        data.whatsapp = phoneNumber.format('E.164');
      } catch (e) {
        return Response.json({ error: 'Failed to recognize WhatsApp phone number format.' }, { status: 400 });
      }
    }

    const { subject, html } = buildEmail(data);

    // If GMAIL_APP_PASS is not set, log and return success (dev mode)
    if (!process.env.GMAIL_APP_PASS) {
      console.log('📧 [DEV MODE] Email would be sent:');
      console.log('   To:', RECIPIENT);
      console.log('   Subject:', subject);
      console.log('   Data:', JSON.stringify(data, null, 2));
      return Response.json({ success: true, mode: 'dev' });
    }

    // Send email
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Rankston Leads" <${process.env.GMAIL_USER || RECIPIENT}>`,
      to: RECIPIENT,
      subject,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
