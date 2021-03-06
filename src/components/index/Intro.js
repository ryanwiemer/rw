import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5em 1.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    min-height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    align-items: center;
    justify-items: center;
    padding: 0 3em;
  }
`

const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-gap: 0.75em;
    padding: 0;
    grid-column: 1 / -1;
  }
`

const Title = styled.h2`
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0 0 2rem 0;
    font-size: 3em;
    max-width: 800px;
  }
`

const Button = styled(Link)`
  position: relative;
  font-size: 1em;
  display: inline-block;
  text-decoration: none;
  transition: 0.3s background, 0.3s color;
  background: ${(props) => props.theme.colors.primary};
  padding: 0.5em 2em;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.reverseText};
  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: white;
  }
  @media (hover: none) {
    background: ${(props) => props.theme.colors.primary} !important;
    color: ${(props) => props.theme.colors.reverseText} !important;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.15em;
  }
`

const Notification = styled(motion.div)`
  background: ${(props) => props.theme.colors.accent};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
  color: white;
  position: absolute;
  top: -1em;
  right: -1em;
  font-size: 0.65em;
  width: 2em;
  height: 2em;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: 50%;
`

const Number = styled(motion.span)``

const Intro = (props) => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    const timer =
      counter < 5 && setInterval(() => setCounter(counter + 1), 4000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <Wrapper>
      <Container>
        <Title
          dangerouslySetInnerHTML={{
            __html: props.text,
          }}
        />
        <Button to="/about/">
          Learn more{' '}
          <Notification
            initial={{ opacity: 0, zoom: 0.75 }}
            animate={{ opacity: 1, zoom: 1 }}
            transition={{
              duration: 0.25,
              delay: 1.5,
            }}
          >
            <Number
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 1.5,
              }}
            >
              {counter}
            </Number>
          </Notification>
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Intro
