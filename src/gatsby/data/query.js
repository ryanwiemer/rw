module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [date], order: DESC }) {
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
            gatsbyImageData(width: 1800, placeholder: NONE, aspectRatio: 1.5)
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
        }
      }
    }
  }`,
  projects: `{
    allContentfulProject(sort: { fields: [date], order: DESC }) {
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
            gatsbyImageData(width: 1800, placeholder: BLURRED, aspectRatio: 1.5)
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
        }
      }
    }
  }`,
}
