import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import favicon from '../images/favicon.ico'
import Menu from '../components/Menu'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import posed, { PoseGroup } from 'react-pose'

const transitionDuration = 300
const transitionDelay = 350

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: transitionDuration } },
})

const Layout = ({ children, ...props }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Ryan Wiemer</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry."
        />
        <meta property="og:title" content="Ryan Wiemer" />
        <meta
          property="og:description"
          content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ryan Wiemer" />
        <meta property="og:url" content="https://www.ryanwiemer.com" />
      </Helmet>
      <Menu />
      <PoseGroup>
        <Transition key={props.location.pathname}>{children}</Transition>
      </PoseGroup>
      <GlobalStyle />
    </div>
  </ThemeProvider>
)

export default Layout
