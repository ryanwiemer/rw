import React from 'react'
import SEO from '../components/general/SEO'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: calc(100vh - 60px);
    padding: 2.5em 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.15;
  font-size: 1.866em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.488em;
  }
`

const NotFoundPage = () => (
  <>
    <SEO title="Page Not Found" />
    <Wrapper>
      <Title>Page Not Found</Title>
    </Wrapper>
  </>
)

export default NotFoundPage
