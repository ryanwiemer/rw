import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1.866em;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.488em;
    margin: 0 0 4rem 0;
  }
`

const Header = () => (
  <header>
    <Title>Style Guide</Title>
  </header>
)

export default Header
