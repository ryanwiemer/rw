import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterHero from '../components/letter/LetterHero'
import LetterIntro from '../components/letter/LetterIntro'
import LetterAbout from '../components/letter/LetterAbout'
import LetterMain from '../components/letter/LetterMain'

const letterTemplate = ({ data, pageContext }) => {
  const { title, position, body, color, images, logo } = data.contentfulLetter

  return (
    <>
      <SEO
        title={title}
        description={`My cover letter for the position of ${position} at ${title}`}
      />
      <LetterHero logo={logo} brandColor={color} />
      <Container minHeight>
        <LetterIntro company={title} position={position} brandColor={color} />
        <LetterAbout images={images} />
        <LetterMain company={title} body={body} brandColor={color} />
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
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        title
        description
        id
        fluid(maxWidth: 1200) {
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
