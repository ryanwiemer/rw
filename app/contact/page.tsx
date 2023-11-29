import { draftMode } from 'next/headers'
import { getPageBySlug } from '@/lib/api'
import AnimatedText from '@/components/animated-text'
import ContactDetails from '@/components/contact-details'

export async function generateMetadata() {
  const { isEnabled } = draftMode()
  const page = await getPageBySlug('contact', isEnabled)
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
  const page = await getPageBySlug('contact', isEnabled)

  return (
    <section className="container pt-[25vh] pb-24 md:grid grid-cols-12 gap-6 items-center">
      <div className="col-span-6">
        <div className="text-4xl md:text-6xl font-extrabold tracking-tight relative">
          <div className="relative inline-block">
            <AnimatedText el="h1" text={page.heading} />
          </div>
        </div>
        <div className="mb-10 col-span-12 text-lg md:text-xl text-muted-foreground">
          <AnimatedText word el="h2" text={page.subheading} />
        </div>
        <div className="md:grid grid-cols-12 col-span-12 gap-6 ">
          <div className="col-span-12 text-lg mb-10">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  )
}
