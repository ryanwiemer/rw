import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import posed from 'react-pose'
import { appear } from '../styles/poses'
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
