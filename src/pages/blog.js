import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import Container from '../components/Container'
import BlogList from '../components/BlogList'
import BlogTile from '../components/BlogTile'

const BlogPage = ({ data }) => {
  const posts = data.allContentfulPost.edges

  console.log(posts)

  return (
    <>
      <Helmet>
        <body className="page--blog" />
      </Helmet>
      <SEO title="Blog" />
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
