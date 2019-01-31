import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))``

const Title = styled.h2`
  font-size: 3em;
  font-weight: bold;
`

const LetterIntro = props => {
  return (
    <Wrapper>
      <Title>Ryan + {props.title}</Title>
    </Wrapper>
  )
}

export default LetterIntro
