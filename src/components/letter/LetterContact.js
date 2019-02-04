import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Title = styled.h3`
  text-transform: capitalize;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
  span:before {
    content: '5';
    float: left;
    margin: 0 0.5em 0 0;
  }
  span:after {
    content: '';
    height: 1px;
    width: 40px;
    background: white;
    margin: 0.6em 0.5em 0 0;
    float: left;
  }
`

const LetterQualifications = props => {
  return (
    <Wrapper {...props}>
      <Title>
        <span /> Contact
      </Title>
    </Wrapper>
  )
}

export default LetterQualifications
