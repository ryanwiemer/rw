import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/general/SEO'
import WorkList from '../components/templates/WorkList'
import { getSrc } from 'gatsby-plugin-image'

const WorkPage = ({ data }) => {
  const projects = data.allContentfulProject.edges
  const ogImage = getSrc(projects[0].node.cover)

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
            gatsbyImageData(width: 1000, placeholder: BLURRED, aspectRatio: 1)
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
