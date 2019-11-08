const path = require(`path`)

// Schema Customization
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
    type Body @infer {
      childMarkdownRemark: ChildMarkdownRemark
    }
    type ChildMarkdownRemark @infer {
      html: String
    }
    type ContentfulLetter implements Node @infer {
      slug: String
      title: String
      position: String
      slug: String
      color: String
      logo: ContentfulAsset
      images: ContentfulAsset
      body: Body
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each project
  const projectsQuery = await graphql(`
    {
      allContentfulProject(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            slug
            date
          }
        }
      }
    }
  `)

  const projects = projectsQuery.data.allContentfulProject.edges
  projects.forEach((edge, i) => {
    const prev = i === 0 ? null : projects[i - 1].node
    const next = i === projects.length - 1 ? null : projects[i + 1].node
    createPage({
      path: `/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: edge.node.slug,
        prev,
        next,
      },
    })
  })

  // Create a page for each blog post
  const postsQuery = await graphql(`
    {
      allContentfulPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            slug
            date
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((edge, i) => {
    const prev = i === 0 ? null : posts[i - 1].node
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    createPage({
      path: `/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.slug,
        prev,
        next,
      },
    })
  })

  // Create a page for each tag on the blog
  const tagsQuery = await graphql(`
    {
      allContentfulTag {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const tags = tagsQuery.data.allContentfulTag.edges
  tags.forEach((edge, i) => {
    createPage({
      path: `/tag/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // Create a page for each letter
  const lettersQuery = await graphql(`
    {
      allContentfulLetter {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const letters = lettersQuery.data.allContentfulLetter.edges
  letters.forEach((edge, i) => {
    createPage({
      path: `/letter/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/letter.js`),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
