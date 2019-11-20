import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import BlogList from '../components/blog/BlogList'
import BlogTile from '../components/blog/BlogTile'

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.25em;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
  span {
    font-weight: normal;
    color: gray;
  }
`

const TagTemplate = ({ pageContext }) => {
  const { title, post } = pageContext
  const posts = orderBy(
    post,
    // eslint-disable-next-line
    [object => new moment(object.dateISO)],
    ['desc']
  )
  const numberOfPosts = posts.length

  return (
    <>
      <SEO title={title} description={`View blog posts tagged as ${title}`} />
      <Container minHeight>
        <Title>
          {numberOfPosts} Tagged as {title}
        </Title>
        <BlogList>
          {posts.map(post => (
            <BlogTile key={post.id} {...post} />
          ))}
        </BlogList>
      </Container>
    </>
  )
}

export default TagTemplate
