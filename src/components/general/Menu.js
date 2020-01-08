import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import ColorSwitch from './ColorSwitch'

const Header = styled.header`
  font-family: ${props => props.theme.fonts.body};
  background: ${props => props.theme.colors.background};
  transition: max-height 0.5s cubic-bezier(0.52, 0.16, 0.24, 1), border 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: ${props => (props.open ? '100%' : '60px')};
  width: 100%;
  z-index: 99;
  border-width: ${props => (props.open ? '0' : '1px')};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-height: 60px;
    border-width: 0;
  }
`
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em;
    display: block;
  }
`

const List = styled.ul`
  position: relative;
  padding: 0;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75rem;
    justify-items: end;
  }
`

const Item = styled(motion.li)`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1em;
    padding: 0;
    position: relative;
    line-height: 60px;
    opacity: 1 !important;
    pointer-events: auto;
  }
  &:first-of-type {
    font-size: 1em;
    text-transform: capitalize;
    text-align: left;
    padding: 0;
    pointer-events: auto;
    line-height: 60px;
    opacity: 1 !important;
    font-weight: ${props => props.theme.fontWeights.bold};
    position: fixed;
    left: 1.5em;
    top: 0;
    margin: 0;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      position: relative;
      left: 0;
      margin: 0;
      grid-column: 1 / span 8;
      justify-self: start;
    }
  }
  a {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: color 0.3s;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Toggle = styled.button`
  margin: 0;
  padding: 0;
  z-index: 999;
  transition: transform 0.3s;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5rem;
  width: 1.5rem;
  height: 60px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }
  span {
    transition: all 0.3s;
    display: block;
    background: ${props => props.theme.colors.text};
    width: 100%;
    height: 2px;
  }
  span:first-of-type {
    transform: rotate(${props => (props.open ? '45deg' : '0')})
      translateY(${props => (props.open ? '0' : '.35rem')});
  }
  span:nth-of-type(2n) {
    transform: rotate(${props => (props.open ? '-45deg' : '0')})
      translateY(${props => (props.open ? '0' : '-.35rem')});
    position: relative;
    bottom: ${props => (props.open ? '2px' : '0')};
  }
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
    document.documentElement.classList.toggle('contain')
  }

  function close() {
    setIsOpen(false)
    document.documentElement.classList.remove('contain')
  }

  const itemVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
        staggerChildren: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Header open={isOpen}>
      <Nav>
        <Toggle open={isOpen} onClick={toggle} aria-label="Toggle Menu">
          <span />
          <span />
        </Toggle>
        <List open={isOpen}>
          <Item
            initial={false}
            variants={itemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/" onClick={close}>
              Ryan Wiemer
            </Link>
          </Item>
          <Item
            initial={false}
            variants={itemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/work/" onClick={close}>
              Work
            </Link>
          </Item>
          <Item
            initial={false}
            variants={itemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/notes/" onClick={close}>
              Notes
            </Link>
          </Item>
          <Item
            initial={false}
            variants={itemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/contact/" onClick={close}>
              Contact
            </Link>
          </Item>
          <Item
            initial={false}
            variants={itemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <ColorSwitch />
          </Item>
        </List>
      </Nav>
    </Header>
  )
}

export default Menu
