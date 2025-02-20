import { NextRequest, NextResponse } from 'next/server';
import db from '@/db';

interface IParams {
  params: { id: string };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || '';
  const pageNum = Number(searchParams.get('pageNum')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;

  const data = db.data.posts;

  const filterData = query
    ? data.filter((item) => {
        const { id, ...rest } = item;
        return Object.values(rest).some((el) => el.includes(query));
      })
    : data;

  const total = filterData.length;

  const startIndex = (pageNum - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const returnData = filterData.slice(startIndex, endIndex);
  return NextResponse.json({
    code: 0,
    success: true,
    data: returnData,
    total: total,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  await db.update(({ posts }) =>
    posts.unshift({
      ...data,
      id: (Math.random() * 1000000).toString(),
    })
  );
  return NextResponse.json({
    code: 0,
    success: true,
    data: data,
  });
}
