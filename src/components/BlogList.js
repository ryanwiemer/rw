import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Promotion from './Promotion'
import { appear, staggerChildren } from '../styles/poses'

const Wrapper = styled(posed.div(staggerChildren))`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const List = styled(posed.ul(staggerChildren))`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 66%;
  }
`

const BlogList = props => {
  return (
    <Wrapper>
      <List>{props.children}</List>
      <Promotion />
    </Wrapper>
  )
}

export default BlogList
