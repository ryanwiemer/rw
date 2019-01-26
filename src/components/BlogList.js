import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
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

const Item = styled(posed.li(appear))`
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  margin: 0 0 1rem 0;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
`

const Cover = styled(Img)`
  width: 32%;
  height: 100%;
  position: absolute !important;
  top: 0;
  bottom: 0;
  left: 0;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Details = styled.div`
  flex: 0 0 65%;
  padding: 2rem 1rem;
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
    <Wrapper>
      <List>
        {props.posts.map(({ node: post }) => (
          <Item key={post.id}>
            <StyledLink to={`/${post.slug}/`} key={post.id}>
              <Cover
                fluid={post.cover.fluid}
                alt={post.cover.title}
                title={post.cover.title}
                backgroundColor={'#212121'}
              />
              <Details>
                <Title>{post.title}</Title>
                <Date>{post.date}</Date>
              </Details>
            </StyledLink>
          </Item>
        ))}
      </List>
      {props.promotion && <Promotion />}
    </Wrapper>
  )
}

export default BlogList
