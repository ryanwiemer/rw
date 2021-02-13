import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import Pin from '../../icons/Pin'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  margin: 0 0 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
  }
`

const Header = styled.div`
  margin: 0 0 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0 0 4em 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5em;
  }
`

const Title = styled.h1`
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.488em;
    grid-column: span 2;
  }
`

const List = styled.ul`
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
`
const Item = styled.li``

const PostLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2em 0;
    display: grid;
    justify-items: baseline;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 'date heading heading description description description';
    grid-column-gap: 1.5em;
  }
  &:hover {
    h2 {
      color: ${(props) => props.theme.colors.accent};
    }
    p {
      opacity: 0.5;
    }
  }
  @media (hover: none) {
    h2 {
      color: ${(props) => props.theme.colors.text} !important;
    }
    p {
      opacity: 1 !important;
    }
  }
`

const Heading = styled.h2`
  transition: color 0.3s;
  margin: 0 0 1rem 0;
  font-size: 1.296em;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: 1.15;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0;
    grid-area: heading;
  }
`

const Description = styled.p`
  transition: opacity 0.3s;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    max-width: 700px;
    margin: 0;
    grid-area: description;
  }
`

const Date = styled.p`
  font-size: 0.9em;
  opacity: 0.5;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-area: date;
  }
`

const Pinned = styled.div`
  color: ${(props) => props.theme.colors.accent};
  font-size: 0.9em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-area: date;
  }
  span {
    background: ${(props) => props.theme.colors.muted};
    padding: 0.25em 0.5em;
    border-radius: 3px;
  }
  svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`

const WorkList = (props) => {
  return (
    <Wrapper>
      <Header>
        <Title>Latest Notes</Title>
      </Header>
      <List>
        {props.posts.map(({ node: post }) => (
          <Item key={post.id}>
            <PostLink to={`/${post.slug}/`}>
              <Heading>{post.title}</Heading>
              <Description>
                {post.content.childMarkdownRemark.excerpt}
              </Description>
              {post.date && <Date>{post.date}</Date>}
              {post.pinned === true && (
                <Pinned>
                  <span>
                    <Pin />
                    Pinned
                  </span>
                </Pinned>
              )}
            </PostLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default WorkList
