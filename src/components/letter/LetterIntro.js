import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  min-height: 300px;
  height: calc(85vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  line-height: 1.2;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
`

const Logo = styled(Img)`
  width: 100%;
  max-width: 200px;
  margin: 0 0 0 1rem;
  display: inline-block !important;
`

const LetterIntro = props => {
  return (
    <Wrapper>
      <Title>Ryan 🤝 </Title>
      <Logo
        fluid={props.logo.fluid}
        alt={props.logo.title}
        title={props.logo.title}
      />
    </Wrapper>
  )
}

export default LetterIntro
