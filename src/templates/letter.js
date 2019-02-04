import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterHero from '../components/letter/LetterHero'
import LetterIntro from '../components/letter/LetterIntro'
import LetterAbout from '../components/letter/LetterAbout'
import LetterMain from '../components/letter/LetterMain'

const letterTemplate = ({ data, pageContext }) => {
  const {
    title,
    position,
    body,
    cover,
    color,
    images,
    logo,
  } = data.contentfulLetter

  return (
    <>
      <SEO title={title} image={cover} />
      <LetterHero logo={logo} color={color} />
      <Container minHeight>
        <LetterIntro title={title} position={position} color={color} />
        <LetterAbout images={images} />
        <LetterMain title={title} body={body} color={color} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulLetter(slug: { eq: $slug }) {
      title
      position
      slug
      color
      logo {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      images {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

export default letterTemplate
