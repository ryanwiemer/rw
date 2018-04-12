import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'
import favicon from '../images/favicon.ico'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import globals from '../styles/global'
import theme from '../styles/theme'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Ryan Wiemer</title>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="description" content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry." />
        <meta property="og:title" content="Ryan Wiemer" />
        <meta property="og:description" content="Ryan Wiemer is an account manager based in Oakland, CA working in the web industry." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ryan Wiemer" />
        <meta property="og:url" content="https://www.ryanwiemer.com" />
      </Helmet>
      <Menu/>
      {children()}
    </div>
  </ThemeProvider>
)

export default TemplateWrapper
