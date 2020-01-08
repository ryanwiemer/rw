import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/general/SEO'
import WorkList from '../components/templates/WorkList'

const WorkPage = ({ data }) => {
  const projects = data.allContentfulProject.edges

  return (
    <>
      <SEO
        title="Selected Work"
        description="Selected design, development and project management work for web focused projects"
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
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
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
