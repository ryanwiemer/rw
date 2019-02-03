import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterIntro from '../components/letter/LetterIntro'
import LetterAbout from '../components/letter/LetterAbout'
import LetterBody from '../components/letter/LetterBody'
import LetterTiles from '../components/letter/LetterTiles'

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
`

const letterTemplate = ({ data, pageContext }) => {
  const { title, body, cover, color, images, logo } = data.contentfulLetter

  return (
    <>
      <SEO title={title} image={cover} />
      <LetterIntro logo={logo} color={color} />
      <Container minHeight>
        <LetterAbout images={images} />
        <Wrapper>
          <LetterTiles />
          <LetterBody body={body} color={color} />
        </Wrapper>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulLetter(slug: { eq: $slug }) {
      title
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
