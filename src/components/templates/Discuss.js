import React from 'react'
import styled from '@emotion/styled'
import Twitter from '../../icons/Twitter'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 0 1.5em 2.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em 2.5em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const Container = styled.p`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 3 / span 8;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-column: 4 / span 6;
  }
`

const StyledLink = styled.a`
  display: inline-block;
  transition: color 0.3s;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  span {
    font-weight: ${props => props.theme.fontWeights.normal};
  }
  &:hover {
    color: ${props => props.theme.colors.accent};
    svg {
      fill: ${props => props.theme.colors.accent};
    }
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.text} !important;
    svg {
      fill: ${props => props.theme.colors.text} !important;
    }
  }
  svg {
    fill: ${props => props.theme.colors.text};
    transition: fill 0.3s;
    margin: 0 0.5rem 0 0;
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <Container>
        <StyledLink href={props.URL} target="_blank" rel="noopener noreferrer">
          <Twitter /> Discuss <em>&ldquo;{props.title}&rdquo;</em> on Twitter
        </StyledLink>
      </Container>
    </Wrapper>
  )
}

export default Hero
