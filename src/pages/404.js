import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/general/SEO'
import Container from '../components/general/Container'

const Content = styled.div`
  height: 100%;
  min-height: calc(100vh - 128px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2em 0;
  a {
    font-size: 1.1em;
    border-bottom: 0.09em solid #414141;
    transition: 0.3s border-color;
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: #414141 !important;
    }
  }
`

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 1rem 0;
  font-size: 2.5em;
`

const NotFoundPage = () => (
  <>
    <Helmet>
      <body className="page--404" />
    </Helmet>
    <SEO title="Page Not Found" description="" />
    <Container minHeight>
      <Content>
        <div>
          <Title>Page Not Found</Title>
          <p>
            <Link to="/">Return Home</Link>
          </p>
        </div>
      </Content>
    </Container>
  </>
)

export default NotFoundPage
