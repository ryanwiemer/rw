import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import Sticky from './Sticky'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1.5em;
  display: block;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    padding: 2.5em 3em;
  }
`

const TextContainer = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    z-index: 2;
    display: block;
    grid-column: 3 / -3;
  }
`

const Text = styled(motion.p)`
  width: 100%;
  line-height: 1.5;
  font-size: 1em;
  z-index: -1;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.2em;
  }
  a {
    transition: 0.3s color;
    color: ${(props) => props.theme.colors.text};
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${(props) => props.theme.colors.text} !important;
    }
  }
`
const PhotoContainer = styled(motion.div)`
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    opacity: 1 !important;
    transform: perspective(0) rotateX(0deg) rotateY(0deg) !important;
  }
`
const Photo = styled(motion.div)`
  display: block;
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    z-index: 1;
    width: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Writing = (props) => {
  return (
    <Sticky
      cover
      disableOnMobile
      height="1750px"
      render={({ progress }) => {
        let fadeOut = scale(progress, 1, -2)
        let tiltX = scale(progress, 10, 0)
        let tiltY = scale(progress, 7.5, 0)
        let fadeIn = scale(progress, -1, 2)

        return (
          <>
            <Wrapper>
              <Photo>
                <PhotoContainer
                  style={{
                    transform: `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                    opacity: fadeIn,
                  }}
                >
                  <Img
                    alt={props.image.title}
                    fluid={{
                      ...props.image.fluid,
                      aspectRatio: 1.5 / 1,
                    }}
                  />
                </PhotoContainer>
              </Photo>
              <TextContainer>
                <Text style={{ opacity: fadeOut }}>
                  When not online I can usually be found exploring the Bay Area
                  with my wife{' '}
                  <a
                    href="https://www.kirstennoelle.com/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kirsten
                  </a>{' '}
                  and our two dogs.
                </Text>
              </TextContainer>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Writing
