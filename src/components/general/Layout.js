import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Helmet } from 'react-helmet'
import { globalStyles } from '../../styles/globalStyles.js'
import Transition from './Transition'
import Menu from './Menu'

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
  padding: 60px 0 0 0;
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <>
      <Global styles={globalStyles} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Skip href="#main" id="skip-navigation">
        Skip to content
      </Skip>
      <Menu />
      <Transition {...props}>
        <Root>{props.children}</Root>
      </Transition>
    </>
  )
}

export default Layout
