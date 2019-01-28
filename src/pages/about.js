import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../styles/poses'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-height: calc(100vh - 128px);
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  a {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    transition: 0.3s border-color;
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
  strong,
  b {
    font-weight: bold;
  }
`

const Card = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
    flex: 0 0 32%;
    margin: 0;
  }
  a {
    font-weight: bold;
    margin: 0 1rem 0 0;
  }
  .gatsby-image-wrapper {
    margin: 0 0 1rem 0;
  }
`

const Bio = styled(posed.div(appear))`
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 65%;
  }
  h1,
  h2,
  h3 {
    line-height: 1;
    font-weight: bold;
    margin: 0 0 1rem 0;
    font-size: 2em;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2.5em;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 3em;
    }
  }
  p {
    font-size: 1em;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1em;
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
            <a
              href="https://www.dropbox.com/s/j2oosw8hlru4b20/Ryan%20Wiemer%20-%20Resume.pdf?dl=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/ryanwiemer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
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
