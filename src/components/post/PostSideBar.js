import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import TagList from './TagList'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
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

const PostSideBar = props => {
  return (
    <Wrapper>
      <Date>Posted on {props.date}</Date>
      {props.tags && <TagList tags={props.tags} />}
    </Wrapper>
  )
}

export default PostSideBar
