import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  height: 100%;
  min-height: 75vh;
  padding: 6rem 0;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  em {
    display: inline-block;
    font-weight: bold;
    background: ${props => props.brandColor};
    padding: 0 0.25rem;
    border-radius: 2px;
  }
`

const Title = styled.h3`
  text-transform: capitalize;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
  span::before {
    content: '1';
    float: left;
    margin: 0 0.5em 0 0;
  }
  span::after {
    content: '';
    height: 1px;
    width: 40px;
    background: white;
    margin: 0.6em 0.5em 0 0;
    float: left;
  }
`

const Content = styled.div`
  max-width: 1000px;
  line-height: 1.3;
  font-size: 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.5em;
  }
`

const LetterIntro = props => {
  return (
    <Wrapper {...props}>
      <div>
        <Title>
          <span /> Introduction
        </Title>
        <Content>
          Hi, my name is Ryan Wiemer. I'm a digital marketer with a passion for
          web design and development. This webpage is my cover letter for the
          position of <em>{props.position} </em> at {props.company}.
        </Content>
      </div>
    </Wrapper>
  )
}

export default LetterIntro
