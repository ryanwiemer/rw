import React from 'react'
import styled from 'styled-components'
import ProjectLinks from './ProjectLinks'
import posed from 'react-pose'
import { appear, delayChildren } from '../styles/poses'
import TagList from './TagList'
import Container from './Container'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 128px);
`

const Box = styled.div`
  width: 100%;
  border-radius: 2px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 2rem 0;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 3em;
  }
`

const Content = styled.div`
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
    text-decoration: underline;
  }
`

const Main = styled(posed.div(appear))`
  flex: 0 0 66%;
`

const SideBar = styled(posed.div(appear))`
  flex: 0 0 38%;
  padding: 1rem 0 2rem;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`

const Date = styled.div`
  color: gray;
  margin: 0 0 1rem 0;
`

const PostShort = props => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Main>
            <Title>{props.title}</Title>
            <ProjectLinks previous={props.previous} next={props.next} />
            <Content
              dangerouslySetInnerHTML={{
                __html: props.content.childContentfulRichText.html,
              }}
            />
          </Main>
          <SideBar>
            <Date>Posted on {props.date}</Date>
            {props.tags && <TagList tags={props.tags} />}
          </SideBar>
        </Box>
      </Wrapper>
    </Container>
  )
}

export default PostShort
