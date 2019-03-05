import React from 'react'
import styled from 'styled-components'
import Twemoji from 'react-twemoji'

const Wrapper = styled.div`
  padding: 0 0 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 0 6rem;
  }
`

const Title = styled.h3`
  text-transform: capitalize;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
  span::before {
    content: '5';
    float: left;
    margin: 0 0.5em 0 0;
  }
  span::after {
    content: '';
    height: 1px;
    width: 40px;
    background: white;
    margin: 0.6em 0.5em 0 0;
    float: left;
  }
`

const Content = styled.p`
  margin: 0 0 2rem 0;
  font-size: 1em;
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`

const Email = styled.a`
  position: relative;
  display: block;
  text-align: center;
  background: ${props => props.theme.colors.tertiary};
  padding: 1.5em;
  border-radius: 2px;
  font-weight: bold;
  font-size: 1.1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: inline-block;
    padding: 1.5em 3em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
  &:hover {
    text-decoration: underline;
    span {
      color: white;
    }
  }
  span {
    font-weight: normal;
    color: gray;
    font-size: 1.1rem;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.25rem;
    }
  }
  img {
    margin: 0 0.75rem 0 0;
  }
`

const LetterQualifications = props => {
  return (
    <Wrapper>
      <Title>
        <span /> How to get in touch
      </Title>
      <Content>
        Send me an email to schedule a chat in person or over the phone.
      </Content>
      <Email href="mailto:ryan@ryanwiemer.com">
        <Twemoji options={{ className: 'emoji' }} noWrapper>
          <p>✉️ryan@ryanwiemer.com</p>
        </Twemoji>{' '}
        <span>&#8599;</span>
      </Email>
    </Wrapper>
  )
}

export default LetterQualifications
