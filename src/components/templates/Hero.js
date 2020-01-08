import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { scale } from '../../utils/utils'
import Globe from '../../icons/Globe'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 0 1.5em;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    align-items: center;
    justify-items: start;
    padding: 0 3em;
  }
`

const Cover = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -2;
  transform-origin: center bottom;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100%;
    max-height: 70vh;
  }
`

const Height = styled.div`
  display: block;
  padding-bottom: 66.67%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 70vh;
    padding: 0;
  }
`

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Text = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 3 / span 8;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-column: 4 / span 6;
  }
`

const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.15;
  padding: 2.5rem 0 0.5rem;
  font-size: 1.866em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.488em;
  }
`
const Date = styled.h2`
  font-size: 0.9em;
  opacity: 0.5;
`

const Category = styled.h2`
  font-size: 0.9em;
  opacity: 0.5;
`

const Live = styled.a`
  transition: 0.3s color;
  margin: 0 0 0.5rem 0;
  display: inline-block;
  white-space: nowrap;
  color: ${props => props.theme.colors.text};
  font-size: 0.9em;
  border-radius: 3px;
  svg {
    transition: 0.3s fill;
    fill: ${props => props.theme.colors.text};
    margin: 0 0.5rem 0 0;
  }
  &:hover {
    color: ${props => props.theme.colors.accent};
    svg {
      fill: ${props => props.theme.colors.accent};
    }
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.text} !important;
    svg {
      fill: ${props => props.theme.colors.text} !important;
    }
  }
`

const Hero = props => {
  return (
    <>
      <ScrollAnimation
        render={({ progress }) => {
          let zoom = scale(progress, 1, 1.05)
          return (
            <>
              <Height />
              <Cover
                style={{
                  scale: zoom,
                }}
              >
                <BgImg
                  sizes={{
                    ...props.image.fluid,
                    aspectRatio: 3 / 2,
                  }}
                  alt={props.image.title}
                />
              </Cover>
            </>
          )
        }}
      />
      <Wrapper>
        <Text>
          <Title>{props.title}</Title>
          {props.url && (
            <Live href={props.url} target="_blank" rel="noopener noreferrer">
              <Globe />
              {props.url}
            </Live>
          )}
          {props.date && <Date>{props.date}</Date>}
          {props.category && <Category>{props.category}</Category>}
        </Text>
      </Wrapper>
    </>
  )
}

export default Hero
