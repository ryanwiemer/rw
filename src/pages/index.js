import React from 'react'
import SEO from '../components/general/SEO'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

const Wrapper = styled.div`
  padding: 0 1.5em 2.5em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.75em;
  min-height: calc(100vh - 60px);
  align-items: center;
  justify-items: center;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 0 3em 2.5em;
  }
`

const Info = styled.div`
  padding: 1.5em 0 0 0;
  grid-column: 1 / span 12;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 0;
    display: grid;
    grid-column-gap: 0.75em;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / span 10;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    grid-column: 3 / span 8;
  }
`

const Cover = styled(Img)`
  border-radius: 3px;
  background: gray;
  height: 400px;
  margin: 0 0 1.5em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0;
    grid-column: 1 / span 4;
  }
`

const Text = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 5 / span 8;
  }
  p {
    margin: 0 0 1.5em 0;
  }
`

const Title = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.15;
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.488em;
  }
`

const HomePage = ({ data }) => {
  const image = data.contentfulPage.cover

  return (
    <>
      <SEO />
      <Wrapper>
        <Info>
          <Cover fluid={image.fluid} alt={image.title} />
          <Text>
            <p>
              Suspendisse sit amet augue ligula. Sed accumsan quam et tortor
              commodo, at consequat ipsum luctus. Phasellus sed felis turpis.
              Vestibulum sem ipsum, vehicula nec dolor eget, ultricies vehicula
              dui. Mauris vel turpis nunc. Vestibulum sem velit.
            </p>
            <Link to="/about">Learn More</Link>
          </Text>
        </Info>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "index" }) {
      title
      slug
      cover {
        title
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default HomePage
