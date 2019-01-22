import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import { appear } from '../styles/poses'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Button from '../components/Button'

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.2;
  font-size: 2em;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
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

const SideBar = styled.div`
  margin: 0 0 1rem 0;
  a {
    margin: 0 1rem 1rem 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 32%;
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
      <SEO title="About" description={bio.internal.content} image={cover} />
      <Container>
        <Hero image={cover} position="50% 100%" />
        <Wrapper>
          <SideBar>
            <Title>Hello 👋</Title>
            <Button href="https://github.com/ryanwiemer">View GitHub</Button>
            <Button href="https://www.dropbox.com/s/j2oosw8hlru4b20/Ryan%20Wiemer%20-%20Resume.pdf?dl=0">
              View Resume
            </Button>
          </SideBar>
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
