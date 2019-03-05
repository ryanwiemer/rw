import React from 'react'
import styled from 'styled-components'
import Twemoji from 'react-twemoji'

const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 32%;
    align-self: flex-start;
    position: sticky;
    top: 1rem;
  }
  img {
    margin: 0 0.75rem 0 0;
  }
`

const Tile = styled.a`
  font-weight: bold;
  font-size: 1.1em;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  margin: 0 0 1rem 0;
  padding: 1.5em 0.5em;
  &:hover {
    text-decoration: underline;
    span {
      color: white;
    }
  }
  span {
    font-weight: normal;
    color: gray;
    font-size: 1.1rem;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`

const LetterTiles = props => {
  return (
    <Wrapper>
      <Tile
        href="https://www.dropbox.com/s/j2oosw8hlru4b20/Ryan%20Wiemer%20-%20Resume.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twemoji options={{ className: 'emoji' }} noWrapper>
          <p>📄View Resume</p>
        </Twemoji>
        <span>&#8599;</span>
      </Tile>
      <Tile
        href="https://www.ryanwiemer.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twemoji options={{ className: 'emoji' }} noWrapper>
          <p>🖥️View Portfolio</p>
        </Twemoji>
        <span>&#8599;</span>
      </Tile>
    </Wrapper>
  )
}

export default LetterTiles
