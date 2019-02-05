import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { delayChildren, fade } from '../../styles/poses'

const List = styled(posed.ul(delayChildren))`
  li {
    margin: 0 0 1rem 0;
    padding: 7.5% 10%;
    background: ${props => props.theme.colors.tertiary};
    &:last-child {
      margin: 0;
    }
  }
`

const Item = styled(posed.li(fade))`
  margin: 0 0 1rem 0;
  padding: 7.5% 10%;
  background: ${props => props.theme.colors.tertiary};
  &:last-child {
    margin: 0;
  }
`

const ImageList = props => {
  return (
    <List>
      {props.images &&
        props.images.map((image, index) => (
          <Item key={index}>
            <Img
              fluid={image.fluid}
              alt={image.title}
              title={image.title}
              backgroundColor={'#212121'}
            />
          </Item>
        ))}
    </List>
  )
}

export default ImageList
