import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  padding: 4rem 0;
  min-height: 100vh;
  width: 100%;
`

const BgImg = styled(Img)`
  width: 100%;
  min-height: 300px;
  height: calc(100vh - 128px);
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Title = styled.h2`
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

const SubTitle = styled.h2`
  font-size: 2em;
`

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
  }
`

const Item = styled(Img)`
  margin: 0 0 2rem 0;
  flex: 0 0 32%;
`

const LetterAbout = props => {
  return (
    <Wrapper id="about">
      <List>
        <Item
          fluid={props.images[0].fluid}
          alt={props.images[0].title}
          backgroundColor={'#212121'}
        />
        <Item
          fluid={props.images[1].fluid}
          alt={props.images[1].title}
          backgroundColor={'#212121'}
        />
        <Item
          fluid={props.images[1].fluid}
          alt={props.images[1].title}
          backgroundColor={'#212121'}
        />
      </List>
    </Wrapper>
  )
}

export default LetterAbout
