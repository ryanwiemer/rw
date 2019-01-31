import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
  display: block;
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  padding: 2em;
  border-radius: 2px;
  p {
    color: gray;
    line-height: 1.6;
  }
  em {
    color: white;
    font-weight: bold;
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
