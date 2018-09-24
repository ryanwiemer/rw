import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Work from '../components/Work'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges
  const about = data.contentfulAbout

  return (
    <Layout>
      <Helmet>
        <meta property="og:image" content={about.cover.fluid.src} />
      </Helmet>
      <Container>
        <Work projects={projects} />
      </Container>
      <Footer />
    </Layout>
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
    contentfulAbout {
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
