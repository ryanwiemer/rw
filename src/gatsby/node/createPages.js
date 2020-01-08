const query = require('../data/query')
const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each post
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const selected = post.node
    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node
    createPage({
      path: `/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        ...selected,
        previous,
        next,
      },
    })
  })

  // Create a page for each project
  const projectsQuery = await graphql(query.data.projects)
  const projects = projectsQuery.data.allContentfulProject.edges
  projects.forEach((project, i) => {
    const selected = project.node
    const previous = i === projects.length - 1 ? null : projects[i + 1].node
    const next = i === 0 ? null : projects[i - 1].node
    createPage({
      path: `/${project.node.slug}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        ...selected,
        previous,
        next,
      },
    })
  })
}
