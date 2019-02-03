import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  height: 100%;
  min-height: 75vh;
  padding: 4rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  em {
    display: inline-block;
    font-weight: bold;
    background: ${props => props.color};
    padding: 0 0.5em;
    border-radius: 2px;
  }
`

const Title = styled.h3`
  font-weight: bold;
  margin: 0 0 2rem 0;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.5em;
  }
`

const Content = styled.div`
  max-width: 675px;
  font-size: 1.25em;
  line-height: 1.5;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
`

const LetterIntro = props => {
  return (
    <Wrapper {...props}>
      <div>
        <Title>👋 Hi, I'm Ryan Wiemer</Title>
        <Content>
          I'm a digital marketer with a passion for web design and development.
          This webpage is my cover letter for the open position of{' '}
          <em>{props.position}</em> at {props.title}.
        </Content>
      </div>
    </Wrapper>
  )
}

export default LetterIntro
