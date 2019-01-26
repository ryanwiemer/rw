import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Hero from './Hero'
import TagList from './TagList'
import Container from './Container'
import ProjectLinks from './ProjectLinks'
import { appear, delayChildren } from '../styles/poses'

const Wrapper = styled(posed.div(delayChildren))`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

const Content = styled(posed.div(appear))`
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
  img {
    margin: 0 0 2rem 0;
  }
`

const SideBar = styled(posed.div(appear))`
  padding: 1rem 0 2rem;
  position: sticky;
  top: 1rem;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
`

const Date = styled.div`
  margin: 0 0 1rem 0;
  color: gray;
`

const PostLong = props => {
  return (
    <>
      <Hero title={props.title} image={props.cover} />
      <Container>
        <ProjectLinks previous={props.previous} next={props.next} />
        <Wrapper>
          <Content
            dangerouslySetInnerHTML={{
              __html: props.content.childContentfulRichText.html,
            }}
          />
          <SideBar>
            <Date>Posted on {props.date}</Date>
            {props.tags && <TagList tags={props.tags} />}
          </SideBar>
        </Wrapper>
      </Container>
    </>
  )
}

export default PostLong
