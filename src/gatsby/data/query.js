module.exports.data = {
  posts: `{
  allContentfulPost(sort: {date: DESC}) {
    edges {
      node {
        title
        id
        slug
        date(formatString: "MMMM DD, YYYY")
        content {
          childMarkdownRemark {
            html
            excerpt(format: PLAIN)
          }
        }
        cover {
          title
          gatsbyImageData(width: 1800, placeholder: BLURRED, aspectRatio: 1.75)
        }
      }
    }
  }
}`,
  projects: `{
  allContentfulProject(sort: {date: DESC}) {
    edges {
      node {
        title
        id
        slug
        date(formatString: "MMMM DD, YYYY")
        category
        content {
          childMarkdownRemark {
            html
            excerpt(format: PLAIN)
          }
        }
        highlights
        url
        video {
          id
          title
          file {
            url
          }
        }
        images {
          title
          gatsbyImageData(width: 1800, placeholder: BLURRED)
        }
        cover {
          title
          gatsbyImageData(width: 1800, placeholder: BLURRED, aspectRatio: 1.75)
        }
      }
    }
  }
}`,
}
