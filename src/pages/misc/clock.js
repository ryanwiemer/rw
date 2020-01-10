import React, { useState, useEffect } from 'react'
import SEO from '../../components/general/SEO'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: calc(100vh - 60px);
    padding: 2.5em 3em;
  }
`

const Time = styled.h2`
  color: white;
  display: inline-block;
  position: relative;
  font-size: 2em;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.15;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 6em;
  }
`

const Circle = styled(motion.div)`
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.colors.accent},
    #8b4e04
  );
  z-index: -2;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid ${props => props.theme.colors.muted};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    position: absolute;
    width: 45vw;
    height: 45vw;
    min-height: 500px;
    min-width: 500px;
  }
`

const Line = styled(motion.div)`
  position: absolute;
  z-index: 0;
  width: 2px;
  height: 300px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 45vw;
    min-height: 500px;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: white;
    opacity: 0.5;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -9px;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.accent};
    border-radius: 50%;
    display: none;
  }
`

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  const time = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  const seconds = date.toLocaleTimeString([], {
    second: '2-digit',
  })

  const rotate = seconds * 6

  return (
    <>
      <SEO title="Clock" description="A very simple clock made for fun" />
      <Wrapper>
        <Circle>
          <Line style={{ rotate: rotate }} />
          <Time>{time}</Time>
        </Circle>
      </Wrapper>
    </>
  )
}

export default Clock
