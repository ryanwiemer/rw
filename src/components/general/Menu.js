import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
  a {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid transparent;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    display: inline-block;
    margin: 0 0 0 1.25rem;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }
`

const Menu = () => {
  return (
    <Nav id="nav" role="navigation">
      <List>
        <li>
          <Link to="/">Ryan Wiemer</Link>
        </li>
        <li>
          <Link to="/" className="link--work">
            Work
          </Link>
        </li>
        <li>
          <Link to="/about/" className="link--about">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog/" className="link--blog">
            Blog
          </Link>
        </li>
      </List>
    </Nav>
  )
}

export default Menu
