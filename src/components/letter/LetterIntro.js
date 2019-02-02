import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  margin: 0 0 4rem 0;
`

const BgImg = styled(Img)`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 300px;
    height: calc(100vh - 128px);
    & > img {
      object-fit: cover !important;
      object-position: 50% 50% !important;
    }
  }
`

const Scroll = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  line-height: 64px;
  font-weight: bold;
`

const LetterIntro = props => {
  return (
    <Wrapper>
      <BgImg
        fluid={props.cover.fluid}
        alt={props.cover.title}
        title={props.cover.title}
      />
      <Scroll>Please Scroll ↓</Scroll>
    </Wrapper>
  )
}

export default LetterIntro
