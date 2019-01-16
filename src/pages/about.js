import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import { appear } from '../styles/poses'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.2;
  font-size: 2em;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
    width: 32%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 3em;
  }
`

const Wrapper = styled(posed.div(appear))`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const Bio = styled.div`
  font-size: 1.25em;
  line-height: 1.5;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.5em;
    line-height: 1.4;
    width: 65%;
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
      <SEO title="About - Ryan Wiemer" image={cover} />
      <Container>
        <Hero image={cover} position="50% 100%" />
        <Wrapper>
          <Title>Hello 👋</Title>
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
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default AboutPage
