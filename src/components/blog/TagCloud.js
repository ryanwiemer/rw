import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Twemoji from 'react-twemoji'

const List = styled.ul`
  margin: 1rem 0 0 0;
  line-height: 1.6;
`
const Tag = styled.li`
  font-size: 1em;
  display: inline-block;
  margin: 0 0.5rem 0 0;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  @media (hover: none) {
    text-decoration: none;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`

const TagCloud = () => (
  <StaticQuery
    query={tagQuery}
    render={data => {
      const tags = data.allContentfulTag.edges
      return (
        <List>
          <Twemoji options={{ className: 'emoji' }} noWrapper>
            {tags.map(({ node: tag }) => (
              <Tag key={tag.id}>
                <Link to={`/tag/${tag.slug}/`}>
                  🏷️
                  {tag.title}
                </Link>
              </Tag>
            ))}
          </Twemoji>
        </List>
      )
    }}
  />
)

const tagQuery = graphql`
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
