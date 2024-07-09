import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//     const isAuthenticated = request.cookies.get('isAuthenticated')?.value
//
//     if (isAuthenticated && !request.nextUrl.pathname.startsWith('/users')) {
//         return Response.redirect(new URL('/users', request.url))
//     }
//
//     if (!isAuthenticated && !request.nextUrl.pathname.startsWith('/login')) {
//         return Response.redirect(new URL('/login', request.url))
//     }
// }

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get('isAuthenticated');
    const publicPaths = ['/', '/login', '/register'];
    const path = request.nextUrl.pathname;

    // Redirect unauthenticated users trying to access non-public routes to the login page
    if (!isAuthenticated && !publicPaths.includes(path)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow through any other requests (authenticated users or public routes)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};