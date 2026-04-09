import { NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'es', 'ar', 'de'];
// Paths that should never be locale-redirected
const SKIP_PATHS = ['/api', '/_next', '/favicon', '/robots', '/sitemap', '/og-image'];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, and Next.js internals
  if (SKIP_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Read the Accept-Language header to suggest locale (NOT redirect — just pass as header)
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLocale = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase().split('-')[0])
    .find((code) => SUPPORTED_LOCALES.includes(code)) || 'en';

  // Attach detected locale as a response header (can be read by client banner)
  const response = NextResponse.next();
  response.headers.set('x-detected-locale', preferredLocale);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
