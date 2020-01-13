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

const Controls = styled.div`
  padding: 0;
  position: fixed;
  bottom: 1.5em;
  left: 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    left: 2.5em;
  }
`

const Label = styled.label`
  cursor: pointer;
  user-select: none;
  opacity: ${props => (props.active ? '1' : '.25')};
`

const Circle = styled(motion.div)`
  background: linear-gradient(
    -60deg,
    hsla(218, 50%, 31%, 1) 0%,
    hsla(277, 51%, 12%, 1) 76%,
    hsla(277, 41%, 9%, 1) 100%
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

const SecondHand = styled(Hand)`
  &::before {
    height: 50%;
  }
`

const MinuteHand = styled(Hand)`
  &::before {
    height: 40%;
    top: 10%;
  }
`

const HourHand = styled(Hand)`
  &::before {
    height: 30%;
    top: 20%;
  }
`

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const [seconds, setSeconds] = useState(false)
  const [minutes, setMinutes] = useState(true)
  const [hours, setHours] = useState(true)
  const [digits, setDigits] = useState(false)
  const [full, setFull] = useState(false)

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
  function toggleFull() {
    setFull(!full)
    // Add fullscreen logic here
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
  const rotateHours = currenHours * 15

  return (
    <>
      <SEO title="Clock" description="A very simple clock made for fun" />
      <Wrapper>
        <Circle>
          {hours && <HourHand style={{ rotate: rotateHours }} />}
          {minutes && <MinuteHand style={{ rotate: rotateMinutes }} />}
          {seconds && <SecondHand style={{ rotate: rotateSeconds }} />}
          {digits && <Time>{time}</Time>}
        </Circle>
        <Controls>
          <input
            type="checkbox"
            id="digits"
            name="digits"
            onClick={toggleDigits}
          />
          <Label htmlFor="digits" active={digits}>
            Digits
          </Label>
          <input
            type="checkbox"
            id="hours"
            name="hours"
            onClick={toggleHours}
          />
          <Label htmlFor="hours" active={hours}>
            Hours
          </Label>
          <input
            type="checkbox"
            id="minutes"
            name="minutes"
            onClick={toggleMinutes}
          />
          <Label htmlFor="minutes" active={minutes}>
            Minutes
          </Label>
          <input
            type="checkbox"
            id="seconds"
            name="seconds"
            onClick={toggleSeconds}
          />
          <Label htmlFor="seconds" active={seconds}>
            Seconds
          </Label>
          <input type="checkbox" id="full" name="full" onClick={toggleFull} />
          <Label htmlFor="full" active={full}>
            Fullscreen
          </Label>
        </Controls>
      </Wrapper>
    </>
  )
}

export default Clock
