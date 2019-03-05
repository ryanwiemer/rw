import React from 'react'
import styled from 'styled-components'
import Twemoji from 'react-twemoji'
import LetterQualifications from './LetterQualifications'
import LetterContact from './LetterContact'

const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 65%;
  }
`

const Content = styled.div`
  margin: 0 0 6rem 0;
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
`

const LetterBody = props => {
  return (
    <Wrapper>
      <Twemoji options={{ className: 'emoji' }} noWrapper>
        <Content
          {...props}
          dangerouslySetInnerHTML={{
            __html: props.body.childMarkdownRemark.html,
          }}
        />
      </Twemoji>
      <LetterQualifications {...props} />
      <LetterContact {...props} />
    </Wrapper>
  )
}

export default LetterBody
