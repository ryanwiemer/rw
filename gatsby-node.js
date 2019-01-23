const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProjects = new Promise((resolve, reject) => {
    graphql(`
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
    `).then(result => {
      const projects = result.data.allContentfulProject.edges

      projects.forEach((edge, i) => {
        const prev = i === 0 ? null : projects[i - 1].node
        const next = i === projects.length - 1 ? null : projects[i + 1].node
        createPage({
          path: edge.node.slug,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
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
    `).then(result => {
      const posts = result.data.allContentfulPost.edges

      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: edge.node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadProjects, loadPosts])
}
