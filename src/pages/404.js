import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

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
  font-weight: bold;
  a {
    font-size: 2em;
    font-size: 4vw;
    border-bottom: .09em solid #414141;
    transition: .3s border-color;
    &:hover{
      border-color: white;
    }
    @media (hover: none) {
      border-color: #414141 !important;
    }
  }
`

const Title = styled.h2`
  margin: 0 0 2rem 0;
  margin: 0 0 4vw 0;
  font-size: 4em;
  font-size: 10vw;
`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
    </Helmet>
    <Container>
      <Wrapper>
        <Title>Page Not Found</Title>
        <p><a href="/">Return Home</a></p>
      </Wrapper>
    </Container>
  </div>
)

export default NotFoundPage
