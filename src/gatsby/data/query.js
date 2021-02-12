// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
const Fluid = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

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
            fluid(maxWidth: 1800) {
              ${Fluid}
            }
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
            fluid(maxWidth: 1800) {
              ${Fluid}
            }
          }
          cover {
            title
            fluid(maxWidth: 1800) {
              ${Fluid}
            }
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
