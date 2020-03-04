import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/general/SEO'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
  }

  section {
    margin: 0 0 2rem 0;
    border-radius: 3px;
    border: 2px solid ${props => props.theme.colors.secondary};

    padding: 1em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      padding: 2em;
    }
  }

  h2,
  h3 {
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.15;
    margin: 3rem 0 0;
  }

  h2 {
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1.5555em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 2.074em;
    }
  }

  h3 {
    font-size: 1.296em;
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.728em;
    }
  }

  #typography h2 {
    margin: 0 0 -3rem 0;
  }
`
const Layout = props => (
  <>
    <SEO
      title="Style Guide"
      description="A simple page showing the typography and colors used on the website"
    />
    <Wrapper>{props.children}</Wrapper>
  </>
)

export default Layout
