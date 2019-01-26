import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
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

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>
            <span>#</span>
            {tag.title}
          </Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
