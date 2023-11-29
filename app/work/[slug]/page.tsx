import { Markdown } from '@/lib/markdown'
import { draftMode } from 'next/headers'
import { getPlaiceholder } from 'plaiceholder'
import Hero from '../../../components/hero'
import { getAllProjects, getProjectAndNextProject } from '@/lib/api'
import ImageList from '@/components/image-list'
import Preview from '@/components/preview'
import { MousePointerClick } from 'lucide-react'

export async function generateStaticParams() {
  const allProjects = await getAllProjects(false)

  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { project } = await getProjectAndNextProject(params.slug, isEnabled)

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.cover.url],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { project, nextProject } = await getProjectAndNextProject(
    params.slug,
    isEnabled
  )

  // Generate the base64 for the blur-up effect for the cover image
  const coverBuffer = await fetch(project.cover.url).then(async (res) => {
    return Buffer.from(await res.arrayBuffer())
  })
  const { base64: coverBase64 } = await getPlaiceholder(coverBuffer, {
    size: 10,
  })
  project.cover.base64 = coverBase64

  // Generate the base64 for the blur-up effect for each image
  await Promise.all(
    project.imagesCollection.items.map(async (image: any) => {
      if (!image.url.endsWith('.mp4')) {
        const buffer = await fetch(image.url).then(async (res) => {
          return Buffer.from(await res.arrayBuffer())
        })
        const { base64 } = await getPlaiceholder(buffer, { size: 10 })
        image.base64 = base64
      }
    })
  )
  // Generate the base64 for the blur-up effect for the next project's cover image
  if (nextProject) {
    const nextCoverBuffer = await fetch(nextProject.cover.url).then(
      async (res) => {
        return Buffer.from(await res.arrayBuffer())
      }
    )
    const { base64: nextCoverBase64 } = await getPlaiceholder(nextCoverBuffer, {
      size: 10,
    })
    nextProject.cover.base64 = nextCoverBase64
  }

  return (
    <>
      <Hero heading={project.heading} image={project.cover} />
      <section className="z-20 bg-background">
        <div className="min-h-[50vh] py-24">
          <div className="container lg:grid lg:grid-cols-12">
            <div className="md:grid grid-cols-12 col-span-10 col-start-2">
              <h2 className="col-span-4 text-2xl text-muted-foreground pb-4 md:pb-0">
                Overview
              </h2>
              <div className="col-span-8 text-lg">
                {project.content && <Markdown content={project.content} />}
                <ul className="mt-12">
                  {project.role && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-t border-b">
                      <span className="text-muted-foreground">My Role</span>
                      <h3 className="inline-block text-right">
                        {project.role}
                      </h3>
                    </li>
                  )}
                  {project.client && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-b">
                      <span className="text-muted-foreground">Client</span>
                      <h3 className="inline-block text-right">
                        {project.client}
                      </h3>
                    </li>
                  )}
                  {project.category && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-b">
                      <span className="text-muted-foreground">Category</span>
                      <h3 className="inline-block text-right">
                        {project.category} Project
                      </h3>
                    </li>
                  )}
                  {project.year && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-b">
                      <span className="text-muted-foreground">Year</span>
                      <h3 className="inline-block text-right">
                        {project.year}
                      </h3>
                    </li>
                  )}
                  {project.technology && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-b">
                      <span className="text-muted-foreground">Technology</span>
                      <h3 className="inline-block text-right">
                        {project.technology}
                      </h3>
                    </li>
                  )}
                  {project.url && (
                    <li className="grid grid-cols-2 gap-4 justify-between py-4 border-b">
                      <span className="text-muted-foreground">Website</span>
                      <a
                        href={project.url}
                        className="text-right underline text-lg hover:opacity-70 transition-opacity duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Live{' '}
                        <MousePointerClick
                          size={18}
                          className="ml-2 inline-block relative -top-[2px]"
                        />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-12 gap-4 pb-24 container">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10">
            <ImageList images={project.imagesCollection} />
          </div>
        </div>
      </section>
      {nextProject && (
        <Preview
          heading={nextProject.heading}
          url={nextProject.slug}
          image={nextProject.cover}
        />
      )}
    </>
  )
}
