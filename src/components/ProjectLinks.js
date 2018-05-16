import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  a {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    margin: 0 1rem 0 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      border: none;
      position: fixed;
      top: 50%;
      color: white;
      transform-origin: center;
    }
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const PreviousLink = styled(Link)`
  left: 0.25rem;
  transform: rotate(-90deg);
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    left: 1.25rem;
  }
`

const NextLink = styled(Link)`
  right: -0.5rem;
  transform: rotate(90deg);
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    right: 0.5rem;
  }
`

const ProjectLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <PreviousLink to={`/${props.previous.slug}/`}>Prev</PreviousLink>
      )}
      {props.next && <NextLink to={`/${props.next.slug}/`}>Next</NextLink>}
    </Wrapper>
  )
}

export default ProjectLinks
