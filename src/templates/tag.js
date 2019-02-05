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

const TagTemplate = ({ data }) => {
  const { title } = data.contentfulTag
  const posts = orderBy(
    data.contentfulTag.post,
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

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        dateISO: date(formatString: "YYYY-MM-DD")
        cover {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default TagTemplate
