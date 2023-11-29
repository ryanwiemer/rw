import { draftMode } from 'next/headers'
import { getAllProjects, getPageBySlug } from '@/lib/api'
import IntroPromo from '@/components/intro-promo'
import AboutPromo from '@/components/about-promo'
import WorkPromo from '@/components/work-promo'
import { getPlaiceholder } from 'plaiceholder'

export async function generateMetadata() {
  const { isEnabled } = draftMode()
  const page = await getPageBySlug('home', isEnabled)
  return {
    description: page.description,
    openGraph: {
      images: [page.cover.url],
      videos: [page.videosCollection.items[0].url],
    },
  }
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const page = await getPageBySlug('home', isEnabled)
  const allProjects = await getAllProjects(isEnabled)

  // Generate the base64 for the blur-up effect for each project
  await Promise.all(
    allProjects.map(async (project) => {
      const buffer = await fetch(project.screenshot.url).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
      })
      const { base64 } = await getPlaiceholder(buffer, { size: 10 })
      project.screenshot.base64 = base64
    })
  )

  return (
    <>
      <IntroPromo
        heading={page.heading}
        subheading={page.subheading}
        videos={page.videosCollection.items}
      />
      <WorkPromo projects={allProjects} />
      <AboutPromo content={page.content} />
    </>
  )
}
