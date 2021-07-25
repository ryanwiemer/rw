import React from 'react'
import SEO from '../components/general/SEO'
import PostList from '../components/templates/PostList'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

const NotesPage = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const ogImage = getSrc(posts[0].node.cover)

  return (
    <>
      <SEO
        title="Notes"
        description="A small collection of thoughts about the web, technology and other related topics"
        image={ogImage}
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
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              aspectRatio: 1.75
            )
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
