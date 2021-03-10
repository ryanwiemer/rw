import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import ScrollAnimation from '../general/ScrollAnimation'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    height: 75vh;
    width: 100%;
  }
`

const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 0.75em;
    padding: 2.5rem 3rem;
    z-index: -1;
  }
`

const Title = styled(motion.h1)`
  display: inline-block;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  padding: 2.5rem 1.5rem 1.5rem;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 3em;
    margin: 0 auto;
    grid-column: 1 / -1;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
`

const Emoji = styled(motion.div)`
  display: inline-block;
  margin: 0 1rem 0 0;
`

const BigText = (props) => {
  return (
    <ScrollAnimation
      render={({ progress }) => {
        let fadeOut = scale(progress, 1, 0)
        let zoom = scale(progress, 1, 1.05)
        return (
          <Wrapper>
            <Container>
              <Title
                style={{
                  opacity: fadeOut,
                  scale: zoom,
                }}
              >
                <Emoji
                  animate={{ rotate: 25 }}
                  transition={{
                    yoyo: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                >
                  👋
                </Emoji>
                {props.title}
              </Title>
            </Container>
          </Wrapper>
        )
      }}
    />
  )
}

export default BigText
