import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../styles/poses'

const Wrapper = styled(posed.a(appear))`
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  padding: 2em;
  border-radius: 2px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  p {
    color: gray;
    line-height: 1.6;
  }
  em {
    color: white;
    font-weight: bold;
  }
  svg {
    width: 16px;
    fill: white;
  }
  &:hover {
    em {
      text-decoration: underline;
    }
  }
`

const Promotion = props => {
  return (
    <Wrapper
      href="https://twitter.com/ryanwiemer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>
        Tell me why I'm wrong on Twitter <em>@ryanwiemer</em>
      </p>
    </Wrapper>
  )
}

export default Promotion
