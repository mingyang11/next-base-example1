import { NextRequest } from 'next/server';

export const config = {
  matcher: '/about/:path*',
};

export function middleware(requet: NextRequest) {
  console.log(requet.nextUrl.pathname, '🐮');
}
