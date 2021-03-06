import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5em 1.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    min-height: calc(100vh - 60px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    align-items: center;
    justify-items: center;
    padding: 0 3em;
  }
`

const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-gap: 0.75em;
    padding: 0;
    grid-column: 1 / -1;
  }
`

const Title = styled.h2`
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0 0 2rem 0;
    font-size: 3em;
    max-width: 800px;
  }
`

const Button = styled(Link)`
  position: relative;
  font-size: 1em;
  display: inline-block;
  text-decoration: none;
  transition: 0.3s background, 0.3s color;
  background: ${(props) => props.theme.colors.primary};
  padding: 0.5em 2em;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.reverseText};
  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: white;
  }
  @media (hover: none) {
    background: ${(props) => props.theme.colors.primary} !important;
    color: ${(props) => props.theme.colors.reverseText} !important;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.15em;
  }
`

const Notification = styled.span`
  background: ${(props) => props.theme.colors.accent};
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
  color: white;
  position: absolute;
  top: -0.75em;
  right: -0.75em;
  font-size: 0.75em;
  width: 1.75em;
  height: 1.75em;
  border: 1px solid white;
  border-radius: 50%;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
  }
`

const Intro = (props) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
          />
          <Button to="/about/">
            Learn more <Notification>1</Notification>
          </Button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Intro
