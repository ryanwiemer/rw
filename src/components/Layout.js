import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { pageFade } from '../styles/poses'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Transition = posed.div(pageFade)

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
      <PoseGroup animateOnMount preEnterPose="initial">
        <Transition key={props.location.pathname}>
          {children} <Footer up={props.location.pathname !== '/'} />
        </Transition>
      </PoseGroup>
      <GlobalStyle />
    </div>
  </ThemeProvider>
)

export default Layout
