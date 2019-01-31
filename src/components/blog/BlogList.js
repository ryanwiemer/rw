import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Promotion from './Promotion'
import TagCloud from './TagCloud'
import { staggerChildren, appear } from '../../styles/poses'

const Wrapper = styled(posed.div(staggerChildren))`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const List = styled.ul`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 66%;
  }
`

const SideBar = styled(posed.div(appear))`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
    position: sticky;
    top: 1rem;
  }
`

const BlogList = props => {
  return (
    <Wrapper>
      <List>{props.children}</List>
      <SideBar>
        <Promotion />
        <TagCloud tags={props.tags} />
      </SideBar>
    </Wrapper>
  )
}

export default BlogList
