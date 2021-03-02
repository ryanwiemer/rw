import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Sticky from './Sticky'
import { Link } from 'gatsby'
import { scale } from '../../utils/utils'

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

const Container = styled(motion.div)`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-gap: 0.75em;
    padding: 0;
    grid-column: 1 / -1;
  }
`

const Title = styled.h1`
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 3em;
    max-width: 800px;
  }
`

const Box = styled.div`
  width: 400px;
  height: 400px;
  background: gray;
  display: none;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
  }
`

const Text = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
  }
`

const Button = styled(Link)`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.25em;
  transition: 0.3s color;
  color: ${(props) => props.theme.colors.text};
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (hover: none) {
    color: ${(props) => props.theme.colors.text} !important;
  }
`

const Intro = (props) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Box />
          <Title
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
          />
          <Button to="/about/"> Learn more</Button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Intro
