import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const secret = requestHeaders.get('x-vercel-reval-key')

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  // Revalidate the cache for all of the data pulled from Contentful in lib/api.ts
  revalidateTag('posts')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
