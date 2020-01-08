import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Sticky from './Sticky'
import { Link } from 'gatsby'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5em 1.5em 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: -60px 0 0 0;
    min-height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    align-items: center;
    justify-items: center;
    padding: 0 3em;
  }
`

const Container = styled(motion.div)`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    grid-column: 1 / -1;
    display: grid;
  }
`

const Big = styled.h1`
  font-size: 2em;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.15;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 6em;
  }
`

const Scroll = styled(motion.div)`
  justify-self: start;
  font-size: 0.9em;
  margin: 1rem 0 0 0;
  display: none;
  color: ${props => props.theme.colors.text};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: inline-block;
  }
`

const Mobile = styled(motion.div)`
  display: block;
  margin: 2em 0 1em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Intro = props => {
  return (
    <Sticky
      height="1000px"
      top="60px"
      cover
      disableOnMobile
      render={({ progress }) => {
        let fade = scale(progress, 1, 0)

        return (
          <>
            <Wrapper>
              <Container style={{ opacity: fade }} exit={{ opacity: 1 }}>
                <Big>Hi, I'm Ryan.</Big>
                <Scroll
                  animate={{ y: 5, opacity: 0.5 }}
                  transition={{
                    yoyo: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                >
                  <span>↓</span> Scroll to learn more.
                </Scroll>

                <Mobile aria-hidden="true">
                  I'm passionate about helping clients make{' '}
                  <Link to="/work/">cool things</Link> on the web. Occasionally
                  I <Link to="/notes/">write</Link> about web development, tech
                  and more. When not online I can usually be found exploring the
                  Bay Area with my wife{' '}
                  <a
                    href="https://www.kirstennoelle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kirsten
                  </a>{' '}
                  and our two dogs.
                </Mobile>
              </Container>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Intro
