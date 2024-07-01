import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/site, /api/uploadthing']);

// Middleware function to handle redirection
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the request is for the root path
  if (pathname === '/' && !isPublicRoute(req)) {
    // Redirect to the login page
    return NextResponse.redirect(new URL('/agency/sign-in', req.url));
  }

  // For all other paths, do nothing (proceed to the requested resource)
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};