import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import Container from '../components/Container'
import BlogList from '../components/BlogList'

const BlogPage = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <>
      <Helmet>
        <body className="page--blog" />
      </Helmet>
      <SEO title="Blog" />
      <Container>
        <BlogList posts={posts} />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulPost(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          date(formatString: "MMMM DD, YYYY")
          featured
          content {
            childContentfulRichText {
              html
            }
          }
          cover {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default BlogPage
