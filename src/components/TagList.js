import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { appear, delayChildren } from '../styles/poses'

const List = styled(posed.ul(delayChildren))``

const Tag = styled(posed.li(appear))`
  display: inline-block;
  margin: 0 1rem 0 0;
  &:last-child {
    margin: 0;
  }
  a {
    display: inline-block;
    text-transform: capitalize;
    border: 2px solid ${props => props.theme.colors.secondary};
    color: white;
    padding: 1em;
    border-radius: 2px;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      padding: 0.9em;
    }
    &:hover {
      color: ${props => props.theme.colors.base};
      background: white;
      border-color: white;
    }
    @media (hover: none) {
      color: white !important;
      background: transparent !important;
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
