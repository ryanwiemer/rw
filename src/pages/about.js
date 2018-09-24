import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

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

const Wrapper = styled.div`
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
  const { title, cover, bio } = data.contentfulAbout

  return (
    <Layout>
      <Helmet>
        <title>About - Ryan Wiemer</title>
        <meta property="og:title" content="About - Ryan Wiemer" />
        <meta property="og:url" content="https://www.ryanwiemer.com/about/" />
        <meta property="og:image" content={cover.fluid.src} />
      </Helmet>
      <Container>
        <Hero image={cover} position="50% 100%" />
        <Wrapper>
          <Title>Hello 👋</Title>
          <Bio
            dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}
          />
        </Wrapper>
      </Container>
      <Footer />
    </Layout>
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
