import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2rem;
`

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    max-height: 600px;
    height: auto;
    @media (min-width: ${props => props.theme.responsive.small}) {
      height: ${props => props.height || 'auto'};
    }
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
  }
`

const Title = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${props => props.theme.colors.base};
  padding: 1rem 1.5rem 0 0;
  color: white;
  z-index: 2;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 3em;
  }
`

const Hero = (props) => {
  return (
    <Wrapper>
      <BgImg sizes={props.image.sizes} height={props.height} position={props.position} alt={props.image.title} title={props.image.title} backgroundColor={"#272727"} />
      {props.title && (<Title>{props.title}</Title>)}
    </Wrapper>
  )
}

export default Hero
