import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  margin: 0 0 1rem 0;
  background: ${props => props.theme.colors.tertiary};
  padding: 7.5% 10%;
  video {
    background: ${props => props.theme.colors.base};
    pointer-events: none;
    width: 100%;
    border: 1rem solid ${props => props.theme.colors.base};
    border-radius: 0.5rem;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: block;
  }
`

const Video = props => {
  return (
    <div>
      {props.video && (
        <Wrapper>
          <video
            preload="auto"
            loop
            autoPlay
            muted
            playsInline
            src={props.video.file.url}
            poster={props.thumbnail.fluid.src}
          />
        </Wrapper>
      )}
    </div>
  )
}

export default Video
