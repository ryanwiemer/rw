import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import Container from '../components/Container'

const ContactPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <body className="page--contact" />
      </Helmet>
      <SEO title="Contact" />
      <Container>Contact</Container>
    </>
  )
}

export default ContactPage
