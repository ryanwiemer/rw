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
  test: `{
    allContentfulProject {
        edges {
          node {
            title
          }
        }
      }
    allContentfulPost {
        edges {
          node {
            title
          }
        }
      }
    allContentfulTag {
        edges {
          node {
            title
          }
        }
      }
    allContentfulLetter {
        edges {
          node {
            title
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
            date
            url
            source
            awards
            role
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
            description {
              childMarkdownRemark {
                html
                excerpt(format: PLAIN)
              }
            }
            thumbnail {
              title
              fluid {
                src
              }
            }
            images {
              title
              fluid(maxWidth: 1800) {
                ${Fluid}
              }
            }
            video {
              id
              title
              file {
                url
              }
            }
          }
        }
      }
    }`,
  posts: `{
      allContentfulPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            title
            id
            slug
            date(formatString: "MMMM DD, YYYY")
            tags {
              title
              slug
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
            body {
              childMarkdownRemark {
                html
                excerpt(format: PLAIN)
              }
            }
          }
        }
      }
    }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          title
          id
          slug
          post {
            id
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            dateISO: date(formatString: "YYYY-MM-DD")
            cover {
              title
              fluid(maxWidth: 1800) {
                ${Fluid}
              }
            }
          }
        }
      }
    }
  }`,
  letters: `{
    allContentfulLetter {
      edges {
        node {
          title
          id
          position
          slug
          color
          logo {
            title
            fluid(maxWidth: 600) {
              ${Fluid}
            }
          }
          images {
            title
            description
            id
            fluid(maxWidth: 1200) {
              ${Fluid}
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }`,
}
