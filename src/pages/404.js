import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const Container = styled.div`
  height: 100%;
  background: #121212;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  text-align: center;
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
      <title>404 - Page Not Found</title>
    </Helmet>
    <Container>
      <Wrapper>
        <Title>Page Not Found</Title>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </Wrapper>
    </Container>
  </>
)

export default NotFoundPage
