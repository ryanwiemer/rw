import { draftMode } from 'next/headers'
import { getPageBySlug } from '@/lib/api'
import HeroAlt from '@/components/hero-alt'
import { Markdown } from '@/lib/markdown'
import { getPlaiceholder } from 'plaiceholder'

export async function generateMetadata() {
  const { isEnabled } = draftMode()
  const page = await getPageBySlug('about', isEnabled)
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      images: [page.cover.url],
    },
  }
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const page = await getPageBySlug('about', isEnabled)

  // Generate the base64 for the blur-up effect for each image
  await Promise.all(
    page.imagesCollection.items.map(async (image: any) => {
      if (!image.url.endsWith('.mp4')) {
        const buffer = await fetch(image.url).then(async (res) => {
          return Buffer.from(await res.arrayBuffer())
        })
        const { base64 } = await getPlaiceholder(buffer, { size: 10 })
        image.base64 = base64
      }
    })
  )

  return (
    <>
      <HeroAlt
        heading={page.heading}
        subheading={page.subheading}
        images={page.imagesCollection.items} // Use the updated images array
      />
      <div className="grid grid-cols-12 gap-6 container">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 my-24">
          <Markdown content={page.content} />
        </div>
      </div>
    </>
  )
}
