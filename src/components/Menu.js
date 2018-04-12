import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
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
    text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    display: inline-block;
    margin: 0 0 0 1.5rem;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }
`

const activeLinkStyle = {
  borderBottom: "2px solid white"
};

const Menu = () => {
    return (
      <Nav>
        <List>
          <li><Link to="/">Ryan Wiemer</Link></li>
          <li><Link to="/" activeStyle={activeLinkStyle} exact>Work</Link></li>
          <li><Link to="/about/" activeStyle={activeLinkStyle}>About</Link></li>
        </List>
      </Nav>
    )
}

export default Menu
