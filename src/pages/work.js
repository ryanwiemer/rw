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
        description="Selected design, development and project management work for web focused projects"
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
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
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
