import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  padding: 0 0 0 2em;
  position: sticky;
  top: 0;
`

const Title = styled.h3`
  margin: 0 0 1rem 0;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: white;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
`

const TagList = props => {
  return (
    <List>
      <Title>Tags</Title>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
