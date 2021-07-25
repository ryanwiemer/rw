import React from 'react'
import SEO from '../components/general/SEO'
import Intro from '../components/index/Intro'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  const text = data.contentfulPage.content.childMarkdownRemark.internal.content
  const cover = data.contentfulPage.cover
  const ogImage = getSrc(cover)

  return (
    <>
      <SEO image={ogImage} />
      <Intro text={text} />
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
      }
      content {
        childMarkdownRemark {
          html
          internal {
            content
          }
        }
      }
    }
  }
`

export default IndexPage
