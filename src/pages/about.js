import React from 'react'
import SEO from '../components/general/SEO'
import Content from '../components/templates/Content'
import Profile from '../components/about/Profile'
import BigText from '../components/about/BigText'
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
  const title = data.contentfulPage.title
  const cover = data.contentfulPage.cover
  const content = data.contentfulPage.content

  let ogImage
  try {
    ogImage = cover.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO title="About" description={content.excerpt} image={ogImage} />
      <BigText title={title} />
      <Profile cover={cover} />
      <Content markdown={content} />
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
        gatsbyImageData(
          width: 1800
          placeholder: BLURRED
          aspectRatio: 1
          quality: 100
        )
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
