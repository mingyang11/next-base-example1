import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  console.log(121212);

  const r = await fetch('https://api.zhihur.com/admin/auth/sign_in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = r.json();
  return NextResponse.json({
    data,
  });
}
