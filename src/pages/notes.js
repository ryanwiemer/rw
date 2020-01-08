import React from 'react'
import SEO from '../components/general/SEO'
import PostList from '../components/templates/PostList'
import { graphql } from 'gatsby'

const NotesPage = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <>
      <SEO
        title="Notes"
        description="A small collection of thoughts about the web, technology and other related topics"
      />
      <PostList posts={posts} />
    </>
  )
}

export const query = graphql`
  query {
    allContentfulPost(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          date(formatString: "MMMM DD, YYYY")
          cover {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          content {
            childMarkdownRemark {
              html
              excerpt(format: PLAIN)
            }
          }
        }
      }
    }
  }
`

export default NotesPage
