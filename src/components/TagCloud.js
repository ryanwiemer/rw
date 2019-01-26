import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const List = styled.ul`
  margin: 1rem 0 0 0;
  line-height: 1.6;
`
const Tag = styled.li`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  @media (hover: none) {
    text-decoration: none;
  }
  span {
    color: gray;
    margin: 0 0.1rem 0 0;
  }
`

const TagCloud = () => (
  <StaticQuery
    query={tagQuery}
    render={data => {
      const tags = data.allContentfulTag.edges
      return (
        <List>
          {tags.map(({ node: tag }) => (
            <Tag key={tag.id}>
              <Link to={`/tag/${tag.slug}/`}>
                <span>#</span>
                {tag.title}
              </Link>
            </Tag>
          ))}
        </List>
      )
    }}
  />
)

export const tagQuery = graphql`
  query {
    allContentfulTag {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`

export default TagCloud
