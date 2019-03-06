import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Twemoji from 'react-twemoji'
import Button from '../project/Button'
import { appear } from '../../styles/poses'
require('prismjs/themes/prism-tomorrow.css')

const Wrapper = styled(posed.div(appear))`
  margin: 1rem 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 65%;
  }
`

const Content = styled.div`
  p {
    font-size: 1em;
    line-height: 1.6;
    margin: 0 0 2rem 0;
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
    margin: -1.5rem 0 2rem 0;
  }
  ul {
    li {
      font-size: 1em;
      position: relative;
      margin: 0 0 0.5rem 1rem;
      &:last-child {
        margin: 0 0 0 1rem;
      }
      &::before {
        position: absolute;
        top: 0.5rem;
        left: -1rem;
        content: '';
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background: gray;
      }
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        font-size: 1.1em;
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
  video {
    width: 100%;
  }
  iframe {
    margin: 0 0 2rem 0;
  }
`

const PostBody = props => {
  return (
    <Wrapper>
      <Twemoji options={{ className: 'emoji' }} noWrapper>
        <Content
          dangerouslySetInnerHTML={{
            __html: props.body.childMarkdownRemark.html,
          }}
        />
      </Twemoji>
      <Button href={props.discussUrl}>Discuss On Twitter</Button>
    </Wrapper>
  )
}

export default PostBody
