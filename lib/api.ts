const PROJECT_GRAPHQL_FIELDS = `
  slug
  title
  heading
  description
  cover {
    url
    title
    description
  }
  screenshot {
    url
    title
    description
  }
  date
  content {
    json
  }
  role
  client
  category
  year
  technology
  url
  imagesCollection {
    items {
      url
      title
      description
    }
  }
`

const PAGE_GRAPHQL_FIELDS = `
  slug
  title
  description
  heading
  subheading
  cover {
    url
    title
    description
  }
  videosCollection {
    items {
      url
      title
      description
    }
  }
  imagesCollection {
    items {
      url
      title
      description
    }
  }
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          url
          description
        }
      }
    }
  }
`

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['contentfulData'] },
    }
  ).then((response) => response.json())
}

//Projects
function extractProject(fetchResponse: any): any {
  return fetchResponse?.data?.projectCollection?.items?.[0]
}

function extractProjectEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.projectCollection?.items
}

export async function getPreviewProjectBySlug(
  slug: string | null
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
        projectCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
  )
  return extractProject(entry)
}

export async function getAllProjects(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        projectCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractProjectEntries(entries)
}

export async function getProjectAndNextProject(
  slug: string,
  preview: boolean
): Promise<any> {
  const project = await fetchGraphQL(
    `query {
        projectCollection(where: { slug: "${slug}" }, preview: ${
          preview ? 'true' : 'false'
        }, limit: 1) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  )

  const allProjects = await fetchGraphQL(
    `query {
        projectCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
          preview ? 'true' : 'false'
        }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  )

  const allProjectEntries = extractProjectEntries(allProjects)
  const currentProjectDate = new Date(extractProject(project).date)
  const nextProject =
    allProjectEntries
      .filter((project) => new Date(project.date) < currentProjectDate)
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))[0] || null
  return {
    project: extractProject(project),
    nextProject,
  }
}

// Get Page by Slug
function extractPage(fetchResponse: any): any {
  return fetchResponse?.data?.pageCollection?.items?.[0]
}

export async function getPreviewPageBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
  )
  return extractPage(entry)
}

export async function getPageBySlug(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
        pageCollection(where: { slug: "${slug}" }, preview: ${
          preview ? 'true' : 'false'
        }, limit: 1) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  )
  return extractPage(entry)
}
