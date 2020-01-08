import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Sticky from './Sticky'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em 1.5em 2.5em;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    padding: 2.5em 3em;
  }
`

const Container = styled.div`
  padding: 1em 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    grid-column: 3 / -3;
  }
`

const Text = styled(motion.p)`
  font-size: 2em;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.15;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    text-align: center;
    font-size: 4em;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
  span {
    margin: 0 1rem 0 0;
  }
  em {
    text-decoration: underline;
  }
`

const Emoji = styled(motion.span)`
  display: inline-block;
  margin: 0 1rem 0 0;
`

const Writing = props => {
  return (
    <Sticky
      cover
      disableOnMobile
      render={({ progress }) => {
        return (
          <>
            <Wrapper>
              <Container>
                <Text>
                  <Link to="/contact/">
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
                    <em>Say Hi Back</em>
                  </Link>
                </Text>
              </Container>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Writing
