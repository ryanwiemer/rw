import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import LetterIntro from '../components/letter/LetterIntro'
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
  const { title, body, cover, logo, faq } = data.contentfulLetter

  return (
    <>
      <SEO title={title} image={cover} />
      <Container minHeight>
        <LetterIntro title={title} logo={logo} />
        <Wrapper>
          <LetterTiles />
          <LetterBody body={body} faq={faq} />
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
      logo {
        title
        fluid(maxWidth: 1000) {
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
