import React from 'react'
import Helmet from 'react-helmet'
import Work from '../components/Work'
import Container from '../components/Container'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges
  const about = data.contentfulAbout

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={about.cover.sizes.src} />
      </Helmet>
      <Container>
        <Work projects={projects} />
      </Container>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          id
          date
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
    contentfulAbout {
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
