import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import Footer from '../components/footer'

import '../stylesheets/style.scss'

const TemplateWrapper = ({ children, location }) => (
  <div id="wrapper">

    <Helmet>
      <title>Ryan Wiemer</title>
      <link rel="icon" href={favicon} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <meta name="description" content="RW" />
      <meta property="og:title" content="RW" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="RW" />
      <meta property="og:url" content="https://www.ryanwiemer.com" />
    </Helmet>

    <section className="container">
      {children()}
    </section>

    <Footer/>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
