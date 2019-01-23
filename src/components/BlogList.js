import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear, slideUp, staggerChildren } from '../styles/poses'

const List = styled(posed.ul(staggerChildren))`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
`

const Item = styled.li`
  width: 100%;
  margin: 0 0 1.5rem 0;
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
        <Item key={post.id} featured={post.featured}>
          <Link to={`/${post.slug}/`}>
            <Title>{post.title}</Title>
            <Date>{post.date}</Date>
          </Link>
        </Item>
      ))}
    </List>
  )
}

export default BlogList
