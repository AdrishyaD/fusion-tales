import { NextResponse } from 'next/server';

// Note: This API route is a stub for Cloudflare Pages compatibility.
// Images are served directly from the /public directory.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name) return new NextResponse("Missing name", { status: 400 });

  return new NextResponse("Use /public assets directly", { status: 410 });
}
