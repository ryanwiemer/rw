import React from 'react'
import styled from 'styled-components'
import LetterBody from './LetterBody'
import LetterTiles from './LetterTiles'

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
    content: '3';
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

const LetterMain = props => {
  return (
    <>
      <Title>
        <span />
        Why I'm Interested in {props.company}
      </Title>
      <Wrapper>
        <LetterBody {...props} />
        <LetterTiles />
      </Wrapper>
    </>
  )
}

export default LetterMain
