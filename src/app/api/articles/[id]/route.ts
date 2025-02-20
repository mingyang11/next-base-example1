import { NextResponse } from 'next/server';
import db from '@/db';

interface IParams {
  params: { id: string };
}
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const index = posts.findIndex((post) => post.id === params.id);
    posts.splice(index, 1);
  });
  return NextResponse.json({
    code: 0,
    success: true,
  });
}

// update
export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json();
  await db.update(({ posts }) => {
    const index = posts.findIndex((post) => post.id === params.id);
    posts[index] = { ...posts[index], ...data };
  });

  return NextResponse.json({
    code: 0,
    success: true,
    data: data.id,
  });
}

export async function GET(request: Request, { params }: IParams) {
  const data = db.data.posts.find((item) => item.id === params.id);

  return NextResponse.json({
    code: 0,
    success: true,
    data: data,
  });
}
