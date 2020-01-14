import React, { useState, useEffect } from 'react'
import SEO from '../../components/general/SEO'
import styled from '@emotion/styled'
import { motion, transform } from 'framer-motion'

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
  overflow: hidden;
  position: relative;
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

const Gradient = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 400%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgb(60, 180, 241) 0%,
    rgb(91, 177, 228) 25%,
    rgb(222, 210, 222) 46%,
    rgb(222, 210, 222) 50%,
    rgb(184, 162, 200) 59%,
    rgb(69, 81, 155) 76%,
    rgb(44, 39, 93) 98%,
    rgb(32, 27, 81) 100%
  );
`

const Hand = styled(motion.div)`
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
    background: white;
    opacity: 0.5;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
  }
`

const SecondHand = styled(Hand)`
  &::before {
    height: 50%;
  }
`

const MinuteHand = styled(Hand)`
  width: 4px;
  &::before {
    height: 40%;
    top: 10%;
    border-radius: 2px;
  }
`

const HourHand = styled(Hand)`
  width: 8px;
  &::before {
    height: 30%;
    top: 20%;
    border-radius: 4px;
  }
`

const Controls = styled.div`
  padding: 0;
  position: fixed;
  bottom: 1.5em;
  left: 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    left: 2.5em;
  }
`

const Button = styled.button`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  user-select: none;
  opacity: ${props => (props.active ? '1' : '.25')};
`

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const [seconds, setSeconds] = useState(false)
  const [minutes, setMinutes] = useState(true)
  const [hours, setHours] = useState(true)
  const [digits, setDigits] = useState(false)

  function toggleSeconds() {
    setSeconds(!seconds)
  }
  function toggleMinutes() {
    setMinutes(!minutes)
  }
  function toggleHours() {
    setHours(!hours)
  }
  function toggleDigits() {
    setDigits(!digits)
  }

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

  const hour24 = date.toLocaleTimeString([], {
    hour: 'numeric',
    hour12: false,
  })

  const currentSeconds = date.toLocaleTimeString([], {
    second: '2-digit',
  })

  const currentMinutes = date.toLocaleTimeString([], {
    minute: '2-digit',
  })

  const currenHours = date.toLocaleTimeString([], {
    hour: 'numeric',
    hour12: false,
  })

  const rotateSeconds = currentSeconds * 6
  const rotateMinutes = currentMinutes * 6
  const rotateHours = currenHours * 30
  const exactMinute = Number(hour24) * 60 + Number(currentMinutes)
  const gradientPosition = transform(exactMinute, [0, 720, 1440], [0, -300, 0])

  return (
    <>
      <SEO title="Clock" description="A very simple clock made for fun" />
      <Wrapper>
        <Circle>
          <Gradient style={{ top: `${gradientPosition}%` }} />
          {hours && <HourHand style={{ rotate: rotateHours }} />}
          {minutes && <MinuteHand style={{ rotate: rotateMinutes }} />}
          {seconds && <SecondHand style={{ rotate: rotateSeconds }} />}
          {digits && <Time>{time}</Time>}
        </Circle>
        <Controls>
          <Button onClick={toggleDigits} active={digits}>
            Digits
          </Button>
          <Button onClick={toggleHours} active={hours}>
            Hours
          </Button>
          <Button onClick={toggleMinutes} active={minutes}>
            Minutes
          </Button>
          <Button onClick={toggleSeconds} active={seconds}>
            Seconds
          </Button>
        </Controls>
      </Wrapper>
    </>
  )
}

export default Clock
