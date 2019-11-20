const path = require(`path`)
const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // A test query used to determine if content exists or not
  const testQuery = await graphql(query.data.test)

  // Create the index page as well as a page for each project
  if (testQuery.data.allContentfulProject.edges.length >= 1) {
    const projectsQuery = await graphql(query.data.projects)
    const projects = projectsQuery.data.allContentfulProject.edges
    createPage({
      path: `/`,
      component: path.resolve(`./src/templates/projects.js`),
      context: {
        projects,
      },
    })
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
  } else {
    console.log('No Projects Created')
  }

  // Create a blog page as well as individual blog post pages
  if (testQuery.data.allContentfulPost.edges.length >= 1) {
    const postsQuery = await graphql(query.data.posts)
    const posts = postsQuery.data.allContentfulPost.edges
    createPage({
      path: `/blog/`,
      component: path.resolve(`./src/templates/posts.js`),
      context: {
        posts,
      },
    })
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
  } else {
    console.log('No Blog Posts Created')
  }

  // Create a page for each tag on the blog
  if (
    testQuery.data.allContentfulTag.edges.length >= 1 &&
    testQuery.data.allContentfulPost.edges.length >= 1
  ) {
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
  } else {
    console.log('No Tags Created')
  }

  // Create a page for each letter
  if (testQuery.data.allContentfulLetter.edges.length >= 1) {
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
  } else {
    console.log('No Letters Created')
  }
}
