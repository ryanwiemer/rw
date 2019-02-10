import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2rem;
`

const BgImg = styled(Img)`
  width: 100%;
  z-index: -1;
  height: auto;
  max-height: 600px;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(
      rgba(18, 18, 18, 0) 0%,
      rgba(18, 18, 18, 0.1) 70%,
      rgba(18, 18, 18, 0.7) 85%,
      rgba(18, 18, 18, 0.8) 90%,
      rgba(18, 18, 18, 0.9) 95%,
      rgba(18, 18, 18, 1) 100%
    );
  }
`

const Overflow = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 0.5rem 0;
`

const Title = styled(posed.div(appear))`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  text-transform: capitalize;
  font-weight: bold;
  color: white;
  font-size: 2em;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 3em;
  }
  h2 {
    max-width: 1000px;
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <Overflow>
        <Title>
          <h2>{props.title}</h2>
        </Title>
      </Overflow>
      <BgImg
        fluid={props.image.fluid}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={'#212121'}
      />
    </Wrapper>
  )
}

export default Hero
