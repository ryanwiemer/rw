import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  min-height: 300px;
  height: calc(100vh - 64px);
  background: ${props => props.color};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-weight: bold;
  display: block;
  text-align: center;
  padding: 1rem;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.5em;
  }
`

const Plus = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  svg {
    margin: 1rem;
    stroke: black;
  }
`

const Logo = styled(Img)`
  width: 200px;
  height: 100%;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex row;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    align-items: center;
  }
`

const LetterHero = props => {
  return (
    <Wrapper {...props}>
      <Content>
        <Title>Ryan Wiemer</Title>
        <Plus>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Plus>
        <Logo
          fluid={props.logo.fluid}
          alt={props.logo.title}
          title={props.logo.title}
        />
      </Content>
    </Wrapper>
  )
}

export default LetterHero
