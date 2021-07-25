import React from 'react'
import SEO from '../components/general/SEO'
import Content from '../components/templates/Content'
import Profile from '../components/about/Profile'
import BigText from '../components/about/BigText'
import { graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'

const AboutPage = ({ data }) => {
  const title = data.contentfulPage.title
  const cover = data.contentfulPage.cover
  const content = data.contentfulPage.content
  const ogImage = getSrc(cover)

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
