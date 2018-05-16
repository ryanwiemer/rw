import React from 'react'
import styled from 'styled-components'

const ExternalLink = styled.a`
  display: inline-block;
  font-size: 1em;
  text-transform: capitalize;
  border: 2px solid ${props => props.theme.colors.secondary};
  color: white;
  padding: 1em;
  border-radius: 2px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
    padding: 0.9em;
  }
  &:hover {
    color: ${props => props.theme.colors.base};
    background: white;
    border-color: white;
  }
  @media (hover: none) {
    color: white !important;
    background: transparent !important;
    border-color: ${props => props.theme.colors.secondary} !important;
  }
`

const Button = props => {
  return (
    <ExternalLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </ExternalLink>
  )
}

export default Button
