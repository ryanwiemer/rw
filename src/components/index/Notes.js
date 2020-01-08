import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Sticky from './Sticky'
import { Link } from 'gatsby'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
    display: block;
    text-align: center;
    padding: 2.5em 3em;
  }
`

const Container = styled.div`
  display: inline-block;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0 auto;
    text-align: center;
  }
`

const Text = styled(motion.p)`
  display: inline-block;
  line-height: 1.5;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.2em;
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

const TypeWritter = styled(motion.div)`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0;
  animation: blink-caret 0.75s step-end infinite;
  width: 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    border-right: 0.15em solid ${props => props.theme.colors.accent};
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${props => props.theme.colors.accent};
    }
  }
`

const Notes = props => {
  return (
    <Sticky
      height="1500px"
      cover
      disableOnMobile
      render={({ progress }) => {
        let width = scale(progress, 0, 100)
        return (
          <>
            <Wrapper>
              <Container>
                <TypeWritter style={{ width: `${width}%` }}>
                  <Text>
                    Occasionally I <Link to="/notes/">write</Link> about web
                    development, tech and more.
                  </Text>
                </TypeWritter>
              </Container>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Notes
