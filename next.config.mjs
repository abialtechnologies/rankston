/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Production safety ────────────────────────────────
  reactStrictMode: true,

  // ── Compression ──────────────────────────────────────
  compress: true,

  // ── Image optimization ───────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // ── HTTP headers for performance ─────────────────────
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Static HTML pages — short cache with revalidation for fast TTFB
        source: '/:path((?!api|_next|videos|icons).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        // Font files — immutable long cache
        source: '/_next/static/:path(.+\\.woff2?)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // ── 301 Redirects — fixes Search Console 404 errors ─
  async redirects() {
    return [
      // /ppc-advertising/google-ads → service main page
      {
        source: '/ppc-advertising/google-ads',
        destination: '/ppc-advertising',
        permanent: true,
      },
      // /web-development/shopify → service main page
      {
        source: '/web-development/shopify',
        destination: '/web-development',
        permanent: true,
      },
      // /web-development/industry/pet-care → closest valid industry
      {
        source: '/web-development/industry/pet-care',
        destination: '/web-development/industry/ecommerce',
        permanent: true,
      },
      // /ar (Arabic locale) → home
      {
        source: '/ar',
        destination: '/',
        permanent: true,
      },
      // /de (German locale) → home
      {
        source: '/de',
        destination: '/',
        permanent: true,
      },
      // Catch-all for any other locale codes that may appear
      {
        source: '/:locale(ar|de|fr|es|zh|ja|ko|pt|it|nl|ru|tr|pl|sv|da|fi|no)',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // ── Experimental ─────────────────────────────────────
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@heroicons/react',
    ],
  },
};

export default nextConfig;
