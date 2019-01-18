import React from 'react'
import styled from 'styled-components'
if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill()
  window.__forceSmoothScrollPolyfill__ = true
}

const Arrow = styled.button`
  color: white;
  font-weight: bold;
  cursor: pointer;
`

const scrollUp = () => {
  scroll({ top: 0, left: 0, behavior: 'smooth' })
}

const Up = () => <Arrow onClick={scrollUp}>&uarr;</Arrow>

export default Up
