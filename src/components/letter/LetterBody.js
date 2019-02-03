import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 65%;
  }
`

const Content = styled(posed.div(appear))`
  margin: 0 0 2rem 0;
  p {
    font-size: 1em;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1em;
    }
  }
  a {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    transition: 0.3s border-color;
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
  h1,
  h2,
  h3 {
    line-height: 1.2;
    font-weight: bold;
    margin: 0 0 2rem 0;
    font-size: 1.5em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 2.5em;
    }
  }
  strong,
  b {
    display: inline-block;
    font-weight: bold;
    background: ${props => props.color};
    padding: 0 0.25em;
    border-radius: 2px;
  }
  del {
    text-decoration: line-through;
  }
  em {
    font-style: italic;
  }
  ol,
  ul {
    margin: 0 0 2rem 0;
    line-height: 1.6;
  }
  ol li {
    position: relative;
    counter-increment: my-counter;
    margin: 0 0 1rem 1rem;
    &:last-child {
      margin: 0 0 0 1rem;
    }
    &::before {
      position: absolute;
      left: 0;
      content: counter(my-counter) '. ';
      font-weight: bold;
    }
  }
  ul li {
    position: relative;
    margin: 0 0 1rem 1rem;
    &:last-child {
      margin: 0 0 0 1rem;
    }
    &::before {
      position: absolute;
      top: 0.7rem;
      left: -1rem;
      content: '';
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background: gray;
    }
  }
`

const LetterBody = props => {
  return (
    <Wrapper>
      <Content
        {...props}
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />
    </Wrapper>
  )
}

export default LetterBody
