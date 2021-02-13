import React from 'react'
import SEO from '../components/general/SEO'
import Intro from '../components/index/Intro'
import Work from '../components/index/Work'
import Notes from '../components/index/Notes'
import LatestPost from '../components/index/LatestPost'
import Offline from '../components/index/Offline'
import Contact from '../components/index/Contact'

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const page = data.contentfulPage
  const post = data.allContentfulPost.edges[0].node
  const projects = data.allContentfulProject.edges
  return (
    <>
      <SEO />
      <Intro />
      <Work projects={projects} />
      <Notes />
      <LatestPost post={post} />
      <Offline image={page.cover} />
      <Contact />
    </>
  )
}

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "index" }) {
      title
      slug
      cover {
        title
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
    allContentfulPost(limit: 1, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allContentfulProject(limit: 1, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          cover {
            title
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
