import React from 'react'
import styled from '@emotion/styled'
require('../../styles/prism-material-light.css')

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.body};
  width: 100%;
  margin: 0 auto;
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.75em;
    > * {
      grid-column: 3 / span 8;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    > * {
      grid-column: 4 / span 6;
    }
  }

  *:last-child {
    margin-bottom: 0;
  }

  .left {
    grid-row: span 3;
    align-self: start;
    grid-column: 1 / span 2;
    @media screen and (min-width: ${props => props.theme.responsive.large}) {
      grid-column: 1 / span 3;
    }
  }

  .right {
    grid-row: span 3;
    align-self: start;
    grid-column: 11 / span 2;
    @media screen and (min-width: ${props => props.theme.responsive.large}) {
      grid-column: 10 / span 3;
    }
  }

  .full {
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      grid-column: 1 / -1;
    }
  }

  .big {
    grid-column: 2 / -2;
    @media screen and (min-width: ${props => props.theme.responsive.large}) {
      grid-column: 3 / -3;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${props => props.theme.fontWeights.semiBold};
    line-height: 1.15;
    margin: 0 0 1.25rem;
  }

  h1 {
    font-size: 1.866em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 2.488em;
    }
  }

  h2 {
    font-size: 1.5555em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 2.074em;
    }
  }

  h3 {
    font-size: 1.296em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.728em;
    }
  }

  h4 {
    font-size: 1.08em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.44em;
    }
  }

  h5 {
    font-size: 1em;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.2em;
    }
  }

  small,
  .text_small {
    font-size: 0.9em;
  }

  p {
    margin-bottom: 1.25em;
  }

  ul,
  ol {
    line-height: 1.5;
    margin-bottom: 1.25em;
    padding: 0 0 0 1rem;
    li {
      position: relative;
    }
  }

  ul {
    li {
      list-style: disc;
    }
  }

  ol {
    li {
      list-style: decimal;
      &:last-of-type {
        margin: 0;
      }
    }
  }

  .task-list-item {
    list-style: none;
    margin: 0 0 0 -1rem;
  }

  input[type='checkbox'] {
    appearance: checkbox;
    position: relative;
    top: -1px;
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.secondary};
    margin: 0 0 1.25em 0;
  }

  blockquote {
    background: ${props => props.theme.colors.muted};
    border-radius: 3px;
    margin-bottom: 1.25em;
    padding: 1em;
    p:last-of-type {
      margin: 0;
    }
  }

  strong,
  b {
    font-weight: ${props => props.theme.fontWeights.bold};
  }

  em,
  i {
    font-style: italic;
  }

  pre {
    text-shadow: none !important;
    border: 0 !important;
    margin: 0 0 1.25em 0 !important;
    border-radius: 3px !important;
    background: ${props => props.theme.colors.code} !important;
    code,
    span {
      text-shadow: none !important;
      background: ${props => props.theme.colors.code} !important;
      padding: 0 !important;
    }
  }

  code {
    font-family: 'Lucida Console', Monaco, monospace;
    font-size: 0.9em !important;
    padding: 0.25em !important;
    background: ${props => props.theme.colors.code} !important;
    color: ${props => props.theme.colors.text} !important;
    opacity: 1;
  }

  td,
  th {
    padding: 0;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
    margin-bottom: 1.25em;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    vertical-align: center !important;
    border: 1px solid ${props => props.theme.colors.muted};
    padding: 0.75em;
  }

  td {
    line-height: 1.5;
  }

  table tr {
    background: ${props => props.theme.colors.background};
    border-top: 1px solid ${props => props.theme.colors.muted};
  }

  table tr:nth-of-type(2n) {
    background: ${props => props.theme.colors.code};
  }

  img,
  iframe,
  .gatsby-resp-iframe-wrapper {
    margin-bottom: 1.25em;
  }

  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Content = props => {
  if (props.markdown) {
    return (
      <Wrapper
        {...props}
        dangerouslySetInnerHTML={{
          __html: props.markdown.childMarkdownRemark.html,
        }}
      />
    )
  }
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Content
