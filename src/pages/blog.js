import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/general/SEO'
import Container from '../components/general/Container'
import BlogList from '../components/blog/BlogList'
import BlogTile from '../components/blog/BlogTile'

const BlogPage = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <>
      <Helmet>
        <body className="page--blog" />
      </Helmet>
      <SEO
        title="Blog"
        description="A sporadic collection of thoughts mostly about the web"
      />
      <Container minHeight>
        <BlogList>
          {posts.map(({ node: post }) => (
            <BlogTile key={post.id} {...post} />
          ))}
        </BlogList>
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
          body {
            childMarkdownRemark {
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
