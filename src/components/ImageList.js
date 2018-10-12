import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Reveal from 'react-reveal/Reveal'

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
            <Reveal>
              <Img
                fluid={image.fluid}
                alt={image.title}
                title={image.title}
                backgroundColor={'#414141'}
              />
            </Reveal>
          </li>
        ))}
    </List>
  )
}

export default ImageList
