import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Work from '../components/Work'
import Container from '../components/Container'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges

  return (
    <>
      <SEO />
      <Helmet>
        <body className="page--work" />
      </Helmet>
      <Container minHeight>
        <Work projects={projects} />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          date
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

export default IndexPage
