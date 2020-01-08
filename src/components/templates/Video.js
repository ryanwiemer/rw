import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: none;
  background: ${props => props.theme.colors.background};
  padding: 0 1.5em 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em 2em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.75em;
  }
  video {
    width: 100%;
    background: ${props => props.theme.colors.muted};
    pointer-events: none;
    border: 2px solid ${props => props.theme.colors.secondary};
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      grid-column: 2 / span 10;
    }
    @media screen and (min-width: ${props => props.theme.responsive.large}) {
      grid-column: 3 / span 8;
    }
  }
`

const Video = props => {
  return (
    <Wrapper>
      <video
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        src={props.video.file.url}
      />
    </Wrapper>
  )
}

export default Video
