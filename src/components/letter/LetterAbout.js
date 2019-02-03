import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  padding: 0 0 6rem;
  width: 100%;
`

const BgImg = styled(Img)`
  height: 100%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Title = styled.h2`
  display: none;
  text-align: center;
  text-transform: capitalize;
  line-height: 1.2;
  font-weight: bold;
  margin: 0 0 2rem 0;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2.5em;
  }
`

const List = styled.ul`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    justify-content: space-between;
  }
`

const Item = styled.div`
  flex: 0 0 32%;
  margin: 0 0 1rem 0;
`

const Caption = styled.span`
  text-align: center;
  display: block;
  color: gray;
  padding: 0.5rem;
`

const LetterAbout = props => {
  return (
    <Wrapper id="about">
      <Title>A little bit about me</Title>
      <List>
        <Item>
          <BgImg
            fluid={props.images[0].fluid}
            alt={props.images[0].title}
            backgroundColor={'#212121'}
          />
          <Caption>Proud dog parent</Caption>
        </Item>
        <Item>
          <BgImg
            fluid={props.images[1].fluid}
            alt={props.images[1].title}
            backgroundColor={'#212121'}
          />
          <Caption>Bay Area dweller since 2013</Caption>
        </Item>
        <Item>
          <BgImg
            fluid={props.images[1].fluid}
            alt={props.images[1].title}
            backgroundColor={'#212121'}
          />
          <Caption>Lorem ipsum dolor set amer</Caption>
        </Item>
      </List>
    </Wrapper>
  )
}

export default LetterAbout
