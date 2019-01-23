import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear, delayChildren } from '../styles/poses'
import TagList from './TagList'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 128px);
`

const Box = styled.div`
  width: 100%;
  max-width: 650px;
  background: ${props => props.theme.colors.tertiary};
  padding: 2em;
`

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

const Date = styled.div`
  font-size: 1em;
  margin: 0 0 2rem 0;
`

const Content = styled.div`
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
`

const PostShort = props => {
  return (
    <Wrapper>
      <Box>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Content
          dangerouslySetInnerHTML={{
            __html: props.content.childContentfulRichText.html,
          }}
        />
      </Box>
      {props.tags && <TagList tags={props.tags} />}
    </Wrapper>
  )
}

export default PostShort
