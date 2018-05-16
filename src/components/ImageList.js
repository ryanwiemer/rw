import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const List = styled.ul`
  li {
    margin: 0 0 1rem 0;
    padding: 7.5% 10%;
    background: ${props => props.theme.colors.tertiary};
    &:last-child {
      margin: 0;
    }
  }
`

const ImageList = props => {
  return (
    <List>
      {props.images &&
        props.images.map((image, index) => (
          <li key={index}>
            <Img
              sizes={image.sizes}
              alt={image.title}
              title={image.title}
              backgroundColor={'#272727'}
            />
          </li>
        ))}
    </List>
  )
}

export default ImageList
