import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const List = styled.ul`
  background: ${props => props.theme.colors.background};
  padding: 0 1.5em 2.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em 2.5em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.75em;
  }
`

const Item = styled.li`
  margin: 0 0 2em 0;
  border: 2px solid ${props => props.theme.colors.secondary};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 2 / span 10;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-column: 3 / span 8;
  }
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
            <Img fluid={image.fluid} alt={image.title} />
          </Item>
        ))}
    </List>
  )
}

export default ImageList
