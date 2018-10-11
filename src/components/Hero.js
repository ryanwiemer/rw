import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'

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

const AnimatedTitle = posed.h2({
  enter: {
    width: 'auto',
    color: '#ffffff',
    height: 'auto',
    y: 0,
    transition: {
      color: { duration: 300, delay: 300 },
      default: { duration: 300 },
    },
  },
  exit: {
    height: 0,
    y: '1rem',
    color: '#121212',
    delay: 300,
  },
})

const Title = styled(AnimatedTitle)`
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

const Hero = props => {
  return (
    <Wrapper>
      <BgImg
        fluid={props.image.fluid}
        height={props.height}
        position={props.position}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={'#272727'}
      />
      {props.title && <Title>{props.title}</Title>}
    </Wrapper>
  )
}

export default Hero
