import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.ul`
  background: ${props => props.theme.colors.background};
  width: 100%;
  margin: -1.5em auto 0;
  padding: 0 1.5em 2.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em 2.5em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.75em;
    > * {
      grid-column: 3 / span 8;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    > * {
      grid-column: 4 / span 6;
    }
  }
`

const List = styled.ul`
  padding: 0 0 0 1rem;
`

const Item = styled.li`
  list-style: disc;
`

const Highlights = props => {
  return (
    <Wrapper>
      <List>
        {props.highlights.map((highlight, index) => (
          <Item key={index}>{highlight}</Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default Highlights
