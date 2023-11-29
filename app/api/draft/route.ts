import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPreviewProjectBySlug } from '../../../lib/api'
import { getPreviewPageBySlug } from '../../../lib/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  const project = await getPreviewProjectBySlug(slug)
  const page = await getPreviewPageBySlug(slug)

  if (!project || !page) {
    return new Response('Invalid slug', { status: 401 })
  }

  draftMode().enable()

  if (project) {
    redirect(`/work/${project.slug}`)
  }
  if (page) {
    redirect(`/${page.slug}`)
  }
}
