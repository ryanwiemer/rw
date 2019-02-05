import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  padding: 0 0 6rem;
  width: 100%;
`

const BgImg = styled(Img)`
  height: 0;
  padding-bottom: 125%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
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
    content: '2';
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
  line-height: 1.3;
  display: block;
  color: gray;
  padding: 0.5rem 0;
`

const LetterAbout = props => {
  return (
    <Wrapper>
      <Title>
        <span /> A little bit about myself
      </Title>
      <List>
        {props.images.map(image => (
          <Item key={image.id}>
            <BgImg
              fluid={image.fluid}
              alt={image.title}
              backgroundColor={'#212121'}
            />
            <Caption>{image.description}</Caption>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default LetterAbout
