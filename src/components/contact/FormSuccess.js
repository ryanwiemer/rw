import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
  position: relative;
  padding: 2em;
  background: ${props => props.theme.colors.muted};
  border-radius: 3px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 5 / span 8;
    display: grid;
    max-width: 750px;
    align-items: center;
    justify-items: center;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-column: 7 / span 6;
  }
`

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

const SVG = styled.svg`
  margin: 0 0 1rem 0;
  display: block;
  width: 60px;
  path {
    stroke: ${props => props.theme.colors.accent};
    stroke-width: 4;
  }
`

const Message = styled(motion.p)`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 1.15;
`

const FormSuccess = props => (
  <Wrapper {...props}>
    <Container>
      <SVG viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="5"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1,
          }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 0.25, delay: 0.25 }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          d="M14,26 L 22,33 L 35,16"
          strokeDasharray="0 1"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 0.25, delay: 0.5 }}
        />
      </SVG>
      <Message
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.25, delay: 0.75 }}
      >
        Message sent!
      </Message>
    </Container>
    {props.children}
  </Wrapper>
)

export default FormSuccess
