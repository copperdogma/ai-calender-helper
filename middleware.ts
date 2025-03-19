import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add routes that should be protected
const protectedRoutes = [
  '/dashboard',
  '/calendar',
  '/settings',
];

// Add routes that should be accessible only to non-authenticated users
const authRoutes = [
  '/login',
  '/signup',
];

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;

  // Check if the route should be protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Check if the route is an auth route (login/signup)
  const isAuthRoute = authRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // If no session and trying to access protected route, redirect to login
  if (!session && isProtectedRoute) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // If has session and trying to access auth route, redirect to dashboard
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes (we'll handle auth in the API routes themselves)
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|api/).*)',
  ],
}; 