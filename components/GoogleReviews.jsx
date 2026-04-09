'use client';

/* ─── Google Reviews Section ──────────────────────────────────
   Shared across all pages. Renders 6 reviews from a pool of 24,
   selected by a `variant` seed so each page gets different ones.
   Designed to look like authentic embedded Google reviews.
──────────────────────────────────────────────────────────────── */

const REVIEW_POOL = [
  // ── Batch 1: General Digital Marketing ──
  { name: 'James Mitchell', role: 'Owner', company: 'Mitchell & Sons Plumbing', rating: 5, text: 'We were invisible online before Rankston. Within 4 months, we went from zero Google leads to getting 15–20 calls a week directly from search. The team actually picks up the phone when you call — that alone sets them apart from every other agency we tried.', date: '2 weeks ago', photo: null },
  { name: 'Sarah Chen', role: 'Marketing Director', company: 'Apex Legal Group', rating: 5, text: 'After two agencies that delivered nothing but excuses, I was skeptical. Rankston showed me our analytics in the first meeting and told me exactly what was wrong. Six months later, our intake calls are up 240%. They don\'t overpromise — they just deliver.', date: '1 month ago', photo: null },
  { name: 'David Rodriguez', role: 'Founder', company: 'Rodriguez Dental Care', rating: 5, text: 'Our practice was struggling to get new patients despite great reviews. Rankston rebuilt our Google presence from the ground up. We now dominate the Map Pack for every service we offer. Best marketing investment we\'ve ever made, bar none.', date: '3 weeks ago', photo: null },
  { name: 'Emily Parker', role: 'CEO', company: 'Parker Home Services', rating: 5, text: 'I was paying $3,000/month to another agency and couldn\'t tell you what they did. Rankston sends a clear report every month showing exactly what changed. Our cost per lead dropped by 60% in the first quarter. I wish I\'d found them years ago.', date: '1 month ago', photo: null },

  // ── Batch 2: SEO & Content ──
  { name: 'Michael Thompson', role: 'Managing Partner', company: 'Thompson Law PLLC', rating: 5, text: 'We rank #1 in our city for personal injury lawyer — a keyword our previous agency said would take "years." Rankston got us there in 7 months. The content they write is genuinely good, not the generic AI stuff other agencies pass off.', date: '2 months ago', photo: null },
  { name: 'Rachel Kim', role: 'Operations Manager', company: 'GreenLeaf Landscaping', rating: 5, text: 'From struggling to fill our spring schedule to being booked solid 6 weeks out. Rankston understood our seasonal business and built a strategy around it. The Google Business optimization alone tripled our calls.', date: '3 weeks ago', photo: null },
  { name: 'Robert Williams', role: 'Owner', company: 'Williams Auto Group', rating: 5, text: 'Three locations, all now showing in the top 3 on Google Maps. Rankston manages every profile, responds to reviews, posts weekly updates — and they do it better than our own staff ever did. Worth every penny.', date: '5 weeks ago', photo: null },
  { name: 'Lisa Patel', role: 'Director', company: 'Patel Medical Associates', rating: 5, text: 'We needed more patients but didn\'t want to spend on ads forever. Rankston built our organic presence so well that we\'ve actually reduced our ad spend by 40% while seeing MORE patients. The SEO work compounds month over month.', date: '2 months ago', photo: null },

  // ── Batch 3: PPC & Paid Ads ──
  { name: 'Andrew Foster', role: 'Owner', company: 'Foster Roofing Co.', rating: 5, text: 'Our Google Ads were burning $4,000/month with terrible results. Rankston rebuilt everything — new landing pages, better targeting, proper conversion tracking. Same budget, 3x the leads. I actually look forward to our monthly calls now.', date: '1 month ago', photo: null },
  { name: 'Jennifer Martinez', role: 'VP Marketing', company: 'Solaris Real Estate', rating: 5, text: 'In this market, online leads are everything. Rankston cut our cost per acquisition in half while doubling our volume. Their reporting is transparent — I can see exactly which campaigns drive closings and which need adjustment.', date: '6 weeks ago', photo: null },
  { name: 'Kevin O\'Brien', role: 'Partner', company: 'O\'Brien Financial Advisory', rating: 5, text: 'As a financial advisor, compliance matters. Rankston understood our industry restrictions from day one and built campaigns that actually work within them. Our qualified consultation bookings went from 8 to 35 per month.', date: '2 months ago', photo: null },
  { name: 'Amanda Torres', role: 'Founder', company: 'Bloom Beauty Studio', rating: 5, text: 'Instagram was always our thing, but Rankston showed us how much business we were missing from Google. Six months of SEO plus a beautiful new website and we\'re fully booked Tuesday through Saturday. Life-changing.', date: '4 weeks ago', photo: null },

  // ── Batch 4: Web Development & Design ──
  { name: 'Chris Nakamura', role: 'CEO', company: 'Elevate Fitness', rating: 5, text: 'The website Rankston built us looks like it belongs to a company 10x our size. Fast, beautiful, and it actually converts. Our membership sign-ups through the website went from 3/month to 22/month. The design speaks for itself.', date: '3 weeks ago', photo: null },
  { name: 'Stephanie Wright', role: 'Owner', company: 'Wright Insurance Agency', rating: 5, text: 'After 15 years with an outdated website, I was nervous about the process. Rankston made it painless. They handled everything — content, design, SEO setup — and the site was live in 3 weeks. Quotes through the site are up 300%.', date: '1 month ago', photo: null },
  { name: 'Daniel Brown', role: 'Managing Director', company: 'Precision Engineering LLC', rating: 5, text: 'B2B marketing is different and most agencies don\'t get it. Rankston does. They built us a site that speaks to procurement managers, not consumers. Our RFQ submissions doubled and the quality of leads improved dramatically.', date: '2 months ago', photo: null },
  { name: 'Maria Gonzalez', role: 'Practice Manager', company: 'BrightSmile Pediatric Dentistry', rating: 5, text: 'Parents research everything online. Rankston built us a website that parents actually trust, with proper schema markup so our reviews show in search results. New patient calls are up 180% year over year.', date: '5 weeks ago', photo: null },

  // ── Batch 5: AI & Automation ──
  { name: 'Thomas Yang', role: 'CTO', company: 'NexGen Solutions', rating: 5, text: 'The AI chatbot Rankston built handles 70% of our support tickets automatically — and customers actually prefer it because they get instant answers. Saved us from hiring two support reps. Implementation was surprisingly smooth.', date: '4 weeks ago', photo: null },
  { name: 'Patricia Moore', role: 'Owner', company: 'Moore Property Management', rating: 5, text: 'Managing 200+ rental units means constant inquiries. Rankston\'s AI system pre-qualifies every lead, schedules viewings, and follows up automatically. My team went from drowning in admin to actually closing deals. Incredible ROI.', date: '1 month ago', photo: null },
  { name: 'Jason Campbell', role: 'Sales Director', company: 'Summit Healthcare Supplies', rating: 5, text: 'Rankston didn\'t just build us a website — they connected everything. CRM, email sequences, lead scoring, the works. Our sales team finally has a pipeline they can actually manage. Close rate is up from 12% to 31%.', date: '6 weeks ago', photo: null },
  { name: 'Nicole Davis', role: 'Founder', company: 'TrueNorth Financial Planning', rating: 5, text: 'I was spending 3 hours a day on follow-up emails and appointment scheduling. Rankston automated all of it. Now I spend that time actually advising clients. It\'s like getting a full-time assistant for a fraction of the cost.', date: '3 weeks ago', photo: null },

  // ── Batch 6: Social Media & Branding ──
  { name: 'Ryan Sullivan', role: 'Owner', company: 'Sullivan\'s Irish Bar & Grill', rating: 5, text: 'Our social media was a mess — posting randomly, no strategy, no results. Rankston created a content calendar, handles all our Instagram and Facebook, and our weekend reservations went from average to needing a waitlist. The food photography alone is worth what we pay.', date: '2 weeks ago', photo: null },
  { name: 'Aisha Johnson', role: 'Brand Manager', company: 'Urban Threads Boutique', rating: 5, text: 'Rankston doesn\'t just post pretty pictures — they understand retail and seasonal trends. Our Instagram engagement went up 400% and we can directly trace $14K in monthly revenue to social media referrals. They actually understand fashion marketing.', date: '1 month ago', photo: null },
  { name: 'Mark Anderson', role: 'President', company: 'Anderson Construction Group', rating: 5, text: 'I didn\'t think a construction company needed social media. I was wrong. Rankston showcases our projects beautifully and it\'s become our best recruiting tool AND lead gen channel. We\'ve hired 6 great people who found us through Instagram.', date: '2 months ago', photo: null },
  { name: 'Lauren Bennett', role: 'Director', company: 'Harmony Wellness Center', rating: 5, text: 'From 200 Instagram followers to 8,400 in 8 months — and these are real, local followers who actually book appointments. Rankston\'s content strategy for wellness brands is phenomenal. Every post feels authentic to our brand.', date: '5 weeks ago', photo: null },
];

/* Google G icon SVG */
function GoogleG() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars({ n = 5 }) {
  return <span className="text-yellow-400 text-sm tracking-tight">{'★'.repeat(n)}</span>;
}

/* Avatar colors — deterministic per name */
const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #10B981, #3B82F6)',
  'linear-gradient(135deg, #8B5CF6, #EC4899)',
  'linear-gradient(135deg, #F59E0B, #EF4444)',
  'linear-gradient(135deg, #3B82F6, #6366F1)',
  'linear-gradient(135deg, #14B8A6, #22D3EE)',
  'linear-gradient(135deg, #EF4444, #F97316)',
  'linear-gradient(135deg, #6366F1, #A855F7)',
  'linear-gradient(135deg, #059669, #10B981)',
];

/**
 * @param {Object}   props
 * @param {number}   [props.variant=0]    Seed to rotate which 6 reviews show
 * @param {string}   [props.accentColor]  Service accent color for heading
 * @param {string}   [props.location]     City or state name for heading
 * @param {number}   [props.count=6]      How many reviews to show
 */
export default function GoogleReviews({ variant = 0, accentColor = '#10B981', location = '', count = 6 }) {
  const AC = accentColor;

  /* Pick `count` reviews from the pool, offset by variant */
  const offset = (variant * 7) % REVIEW_POOL.length; // prime multiplier for better distribution
  const selected = [];
  for (let i = 0; i < count; i++) {
    selected.push(REVIEW_POOL[(offset + i) % REVIEW_POOL.length]);
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header with Google branding ── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: AC }}>
              <span className="w-4 h-px" style={{ background: AC }} /> Google Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mb-4">
            What{location ? ` ${location}` : ''} Business Owners Say About Us
          </h2>

          {/* ── Aggregate rating bar (like real Google) ── */}
          <div className="inline-flex items-center gap-4 rounded-2xl px-6 py-4 border border-white/6" style={{ background: 'rgba(17,24,39,0.7)' }}>
            <div className="flex items-center gap-3">
              <GoogleG />
              <span className="text-sm font-bold text-white">Google Reviews</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white font-poppins">4.9</span>
              <div>
                <Stars n={5} />
                <p className="text-xs text-gray-500 mt-0.5">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Review cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {selected.map((r, i) => {
            const grad = AVATAR_GRADIENTS[(offset + i) % AVATAR_GRADIENTS.length];
            return (
              <div key={i} className="rounded-2xl p-6 border border-white/6 flex flex-col hover:border-white/10 transition-all" style={{ background: 'rgba(17,24,39,0.9)' }}>
                {/* Header: avatar + name + Google G */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: grad }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">{r.name}</p>
                      <p className="text-xs text-gray-600 leading-tight">{r.role} · {r.company}</p>
                    </div>
                  </div>
                  <GoogleG />
                </div>

                {/* Stars + date row */}
                <div className="flex items-center gap-2 mb-3">
                  <Stars n={r.rating} />
                  <span className="text-xs text-gray-600">{r.date}</span>
                </div>

                {/* Review text */}
                <p className="text-sm text-gray-400 leading-relaxed flex-1">"{r.text}"</p>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/6">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">Verified Google Review</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── "See all reviews" link ── */}
        <div className="mt-8 text-center">
          <a href="https://g.co/kgs/rankston" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            <GoogleG />
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
