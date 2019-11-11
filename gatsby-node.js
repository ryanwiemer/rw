const path = require(`path`)
const query = require('./src/data/query')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each project
  const projectsQuery = await graphql(query.data.projects)
  const projects = projectsQuery.data.allContentfulProject.edges
  projects.forEach((project, i) => {
    const prev = i === 0 ? null : projects[i - 1].node
    const next = i === projects.length - 1 ? null : projects[i + 1].node
    const selected = project.node
    createPage({
      path: `/${project.node.slug}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        ...selected,
        prev,
        next,
      },
    })
  })

  // Create a page for each blog post
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const prev = i === 0 ? null : posts[i - 1].node
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const selected = post.node
    createPage({
      path: `/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        ...selected,
        prev,
        next,
      },
    })
  })

  // Create a page for each tag on the blog
  const tagsQuery = await graphql(query.data.tags)
  const tags = tagsQuery.data.allContentfulTag.edges
  tags.forEach((tag, i) => {
    const selected = tag.node
    createPage({
      path: `/tag/${tag.node.slug}/`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        ...selected,
      },
    })
  })

  // Create a page for each letter
  try {
    const lettersQuery = await graphql(query.data.letters)
    const letters = lettersQuery.data.allContentfulLetter.edges
    letters.forEach((letter, i) => {
      const selected = letter.node
      createPage({
        path: `/letter/${letter.node.slug}/`,
        component: path.resolve(`./src/templates/letter.js`),
        context: {
          ...selected,
        },
      })
    })
  } catch (error) {
    console.log('No letters created')
  }
}
