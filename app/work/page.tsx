import { draftMode } from 'next/headers'
import { getAllProjects, getPageBySlug } from '@/lib/api'
import ProjectList from '@/components/project-list'
import { getPlaiceholder } from 'plaiceholder'

export async function generateMetadata() {
  const { isEnabled } = await draftMode()
  const page = await getPageBySlug('work', isEnabled)
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      images: [page.cover.url],
    },
  }
}

export default async function ProjectPage() {
  const { isEnabled } = await draftMode()
  const allProjects = await getAllProjects(isEnabled)
  const page = await getPageBySlug('work', isEnabled)

  // Generate the base64 for the blur-up effect for each project
  await Promise.all(
    allProjects.map(async (project) => {
      try {
        const buffer = await fetch(project.screenshot.url).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        )
        const { base64 } = await getPlaiceholder(buffer, { size: 10 })
        project.screenshot.base64 = base64
      } catch {}
    })
  )

  return (
    <>
      <section className="pt-[25vh] pb-24 container min-h-screen">
        <ProjectList
          heading={page.heading}
          subheading={page.subheading}
          items={allProjects}
        />
      </section>
    </>
  )
}
