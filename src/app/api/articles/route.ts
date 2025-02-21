// import { NextRequest } from 'next/server';

import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
    query: query,
  });
}
