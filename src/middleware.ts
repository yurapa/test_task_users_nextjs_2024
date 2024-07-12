import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated');
  const publicPaths = ['/', '/login', '/register', '/forgot'];
  const path = request.nextUrl.pathname;

  if (!isAuthenticated && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
