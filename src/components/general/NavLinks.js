import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0 0 0;
  span {
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

const Previous = styled.span`
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  transform: rotate(-90deg) !important;
  left: 0.25rem;
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    left: 1.25rem;
  }
`

const Next = styled.span`
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  transform: rotate(90deg) !important;
  right: -0.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    right: 0.5rem;
  }
`

const NavLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <Previous>
          <Link to={`/${props.previous.slug}/`}>Prev</Link>
        </Previous>
      )}
      {props.next && (
        <Next>
          <Link to={`/${props.next.slug}/`}>Next</Link>
        </Next>
      )}
    </Wrapper>
  )
}

export default NavLinks
