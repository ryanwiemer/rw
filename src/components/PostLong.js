import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

const Wrapper = styled.div``

const Content = styled.div`
  margin: 0 0 2rem 0;
  max-width: 650px;
  p {
    line-height: 1.6;
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
  }
  a {
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    margin: 0 0 2rem 0;
  }
  h3 {
    font-size: 1.5em;
  }
`

const PostLong = props => {
  return (
    <>
      <Hero title={props.title} image={props.cover} />
      <Wrapper>
        <Content
          dangerouslySetInnerHTML={{
            __html: props.content.childContentfulRichText.html,
          }}
        />
      </Wrapper>
    </>
  )
}

export default PostLong
