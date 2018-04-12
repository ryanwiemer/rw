import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Container from  '../components/Container'
import Footer from  '../components/Footer'
import Button from '../components/Button'
import Hero from '../components/Hero'

const Cover = styled.div`
  margin: 0 0 2rem 0;
`

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
    border-bottom: .09em solid ${props => props.theme.colors.secondary};
    transition: .3s border-color;
    &:hover{
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const AboutPage  = ({data}) =>  {

  const {
     title,
     id,
     cover,
     bio,
   } = data.contentfulAbout;

  return (
    <div>
      <Helmet>
        <title>About - Ryan Wiemer</title>
        <meta name="description" content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry." />
        <meta property="og:title" content="About - Ryan Wiemer" />
        <meta property="og:url" content="https://www.ryanwiemer.com/about/" />
        <meta property="og:image" content={cover.sizes.src} />
      </Helmet>
      <Container>
        <Hero
          image={cover}
          position="50% 100%"
        />
        <Wrapper>
          <Title>Hello 👋</Title>
          <Bio dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}/>
        </Wrapper>
      </Container>
      <Footer/>
    </div>
    )
  }

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      id
      cover {
       title
       sizes(maxWidth: 1800) {
         ...GatsbyContentfulSizes_withWebp_noBase64
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
