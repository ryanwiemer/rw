import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 0 6rem 0;
  em {
    display: inline-block;
    font-weight: bold;
    background: ${props => props.brandColor};
    padding: 0 0.25em;
    border-radius: 2px;
  }
`

const List = styled.ul`
  line-height: 1.6;
`

const Item = styled.li`
  font-size: 1em;
  position: relative;
  margin: 0 0 1rem 1rem;
  &:last-child {
    margin: 0 0 0 1rem;
  }
  &::before {
    position: absolute;
    top: 0.7rem;
    left: -1rem;
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: gray;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`

const Title = styled.h3`
  text-transform: capitalize;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
  span::before {
    content: '4';
    float: left;
    margin: 0 0.5em 0 0;
  }
  span::after {
    content: '';
    height: 1px;
    width: 40px;
    background: white;
    margin: 0.6em 0.5em 0 0;
    float: left;
  }
`

const LetterQualifications = props => {
  return (
    <Wrapper {...props}>
      <Title>
        <span /> What I bring to the team
      </Title>
      <List>
        <Item>
          <em>5 Years Of Agency Experience</em> — I've worked on projects both
          big and small mostly focused on the web.
        </Item>
        <Item>
          <em>Project Management Expertise</em> — I'm comfortable overseeing
          teams and bringing together various groups to achieve a common goal.
        </Item>
        <Item>
          <em>An Eye For Design</em> — While I'm not a full time designer I'm no
          slouch either. I've even designed a few smaller sites that have earned
          online recognition.
        </Item>
        <Item>
          <em>Technical Ownership</em> — I love technical challenges and pride
          myself on keeping up with the changing landscape of the web. I'm
          active on GitHub and contribute often to open source projects.
        </Item>
      </List>
    </Wrapper>
  )
}

export default LetterQualifications
