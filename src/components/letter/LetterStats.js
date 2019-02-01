import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.div(appear))`
  width: 100%;
`

const Title = styled.h3`
  line-height: 1.2;
  font-size: 1.25em;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

const List = styled.ul`
  position: relative;
  line-height: 1.6;
  span {
    font-weight: bold;
  }
`

const Item = styled.li`
  counter-increment: my-counter;
  margin: 0 0 1rem 1.5rem;
  &:last-child {
    margin: 0 0 0 1.5rem;
  }
  &::before {
    position: absolute;
    left: 0;
    content: counter(my-counter) '. ';
    font-weight: bold;
  }
`

const LetterStats = props => {
  return (
    <Wrapper>
      <Title>What I Bring To The Team</Title>
      <List>
        <Item>
          <span>5+ Years of Agency Experience</span> — I've worked on web
          project both big and small
        </Item>
        <Item>
          <span>Project Management Expertise</span> — I've closed more Jira
          tickets than I can count
        </Item>
        <Item>
          <span>Data Driven</span> — I get a kick out of focus groups, user
          testing, A/B testing and more
        </Item>
        <Item>
          <span>Located Nearby</span> — I live in Oakland, CA and commute daily
          to San Francisco
        </Item>
      </List>
    </Wrapper>
  )
}

export default LetterStats
