import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
    grid-column: 1 / span 4;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    grid-column: 1 / span 6;
  }
`

const List = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0 0 0 1rem;
`

const Item = styled.li`
  list-style: disc;
  &:last-of-type {
    margin: 0;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.text};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Heading = styled.h2`
  margin: 0 0 1rem 0;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 1.15;
  font-size: 1.08em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.296em;
  }
`

const Text = styled.p`
  margin: 0 0 2rem 0;
`

const FormSocial = () => {
  return (
    <Wrapper>
      <Text>
        Got something to say? Let me know and I will do my best to respond back.
        😊
      </Text>
      <Heading>Social Media</Heading>
      <List>
        <Item>
          <a
            href="https://github.com/ryanwiemer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Item>
        <Item>
          <a
            href="https://twitter.com/ryanwiemer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/in/ryanwiemer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Item>
      </List>
    </Wrapper>
  )
}

export default FormSocial
