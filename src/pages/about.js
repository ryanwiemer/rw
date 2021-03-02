import React from 'react'
import SEO from '../components/general/SEO'
import Bio from '../components/about/Bio'
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
  const title = data.contentfulPage.title
  const cover = data.contentfulPage.cover
  const content = data.contentfulPage.content.childMarkdownRemark

  let ogImage
  try {
    ogImage = cover.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO title={title} description={content.excerpt} image={ogImage} />
      <Bio title={title} cover={cover} content={content} />
    </>
  )
}

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "about" }) {
      title
      slug
      cover {
        title
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
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
`

export default AboutPage
