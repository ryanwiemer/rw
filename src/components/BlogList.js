import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear, slideUp, staggerChildren } from '../styles/poses'

const List = styled(posed.ul(staggerChildren))`
  width: 66%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
  a {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`

const Item = styled(posed.li(appear))`
  background: ${props => props.theme.colors.tertiary};
  padding: 2rem 1rem;
  border-radius: 2px;
`

const Title = styled.h2`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
`

const Date = styled.span`
  color: gray;
`

const BlogList = props => {
  return (
    <List>
      {props.posts.map(({ node: post }) => (
        <Link to={`/${post.slug}/`} key={post.id}>
          <Item featured={post.featured}>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </Item>
        </Link>
      ))}
    </List>
  )
}

export default BlogList
