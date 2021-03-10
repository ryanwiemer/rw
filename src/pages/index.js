import React from 'react'
import SEO from '../components/general/SEO'
import Intro from '../components/index/Intro'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const text = data.contentfulPage.content.childMarkdownRemark.internal.content
  const cover = data.contentfulPage.cover
  let ogImage
  try {
    ogImage = cover.ogimg.src
  } catch (error) {
    ogImage = null
  }

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
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
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
