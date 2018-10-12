import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear, delayChildren } from '../styles/poses'
import Up from '../components/Up'

const List = styled(posed.ul(delayChildren))`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 4rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`

const Item = styled(posed.li(appear))`
  color: white;
  font-weight: bold;
  a {
    margin: 0 1rem 0 0;
  }
`

const Footer = props => (
  <List>
    <Item>
      <a href="mailto:ryan@ryanwiemer.com">Email</a>
      <a
        href="https://twitter.com/ryanwiemer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </Item>
    {props.up && (
      <Item>
        <Up />
      </Item>
    )}
  </List>
)

export default Footer
