import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterIntro from '../components/letter/LetterIntro'
import LetterBody from '../components/letter/LetterBody'
// import Hero from '../components/general/Hero'

const letterTemplate = ({ data, pageContext }) => {
  const { title, body, cover } = data.contentfulLetter

  return (
    <>
      <SEO title={title} image={cover} />
      <Container minHeight>
        <LetterIntro title={title} />
        <LetterBody body={body} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulLetter(slug: { eq: $slug }) {
      title
      slug
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
