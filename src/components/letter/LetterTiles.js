import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 32%;
    align-self: flex-start;
    position: sticky;
    top: 1rem;
  }
`

const Tile = styled.div`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  margin: 0 0 1rem 0;
  &:hover {
    h3 {
      text-decoration: underline;
    }
    span {
      color: white;
    }
  }
  span {
    color: gray;
    font-size: 1.1em;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.25em;
    }
  }
`

const Title = styled.h3`
  padding: 1.5em 0.5em;
  font-weight: bold;
  font-size: 1.1em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`

const LetterTiles = props => {
  return (
    <Wrapper>
      <Tile>
        <a
          href="https://www.dropbox.com/s/j2oosw8hlru4b20/Ryan%20Wiemer%20-%20Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>View Resume</Title>
          <span>&#8599;</span>
        </a>
      </Tile>
      <Tile>
        <a
          href="https://www.ryanwiemer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title>View Portfolio</Title>
          <span>&#8599;</span>
        </a>
      </Tile>
    </Wrapper>
  )
}

export default LetterTiles
