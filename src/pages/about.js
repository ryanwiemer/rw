import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../styles/poses'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Wrapper = styled(posed.div(appear))`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const Card = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 32%;
  }
`

const Bio = styled.div`
  font-size: 1em;
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
    flex: 0 0 65%;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
    font-size: 1.5em;
    margin: 0 0 1rem 0;
  }
  p {
    margin: 0 0 2rem 0;
  }
  a {
    border-bottom: 0.09em solid ${props => props.theme.colors.secondary};
    transition: 0.3s border-color;
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const AboutPage = ({ data }) => {
  const { cover, bio } = data.contentfulAbout

  return (
    <>
      <Helmet>
        <body className="page--about" />
      </Helmet>
      <SEO title="About" description={bio.internal.content} image={cover} />
      <Container minHeight>
        <Wrapper>
          <Card>
            <Img
              fluid={cover.fluid}
              alt={cover.title}
              backgroundColor={'#212121'}
            />
          </Card>
          <Bio
            dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}
          />
        </Wrapper>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    contentfulAbout {
      title
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
      bio {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default AboutPage
