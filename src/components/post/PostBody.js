import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'
require('prismjs/themes/prism-tomorrow.css')

const Wrapper = styled(posed.div(appear))`
  margin: 1rem 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 65%;
  }
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
    font-size: 1.5em;
    line-height: 1.2;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  strong,
  b {
    font-weight: bold;
  }
  del {
    text-decoration: line-through;
  }
  em {
    font-style: italic;
  }
  blockquote {
    font-style: italic;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  ul,
  ol {
    margin: 0 0 2rem 0;
  }
  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  pre {
    margin: 0 0 2em 0 !important;
    border-radius: 2px;
    span {
      background: inherit !important;
    }
  }
`

const PostBody = props => {
  return (
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html,
      }}
    />
  )
}

export default PostBody
