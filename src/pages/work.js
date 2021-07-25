import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/general/SEO'
import WorkList from '../components/templates/WorkList'

const WorkPage = ({ data }) => {
  const projects = data.allContentfulProject.edges
  let ogImage

  try {
    ogImage = projects[0].node.cover.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title="Work"
        description="Selected work by digital marketer Ryan Wiemer"
        image={ogImage}
      />
      <WorkList projects={projects} />
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          category
          cover {
            title
            gatsbyImageData(width: 1000, placeholder: BLURRED, aspectRatio: 1.5)
            ogimg: resize(width: 1000) {
              src
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

export default WorkPage
