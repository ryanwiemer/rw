import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear } from '../../styles/poses'

const Wrapper = styled(posed.li(appear))`
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 2px;
  margin: 0 0 1rem 0;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
`

const Cover = styled(Img)`
  width: 32%;
  height: 100%;
  position: absolute !important;
  border-top-left-radius: 2px !important;
  border-bottom-left-radius: 2px !important;
  top: 0;
  bottom: 0;
  left: 0;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Details = styled.div`
  flex: 0 0 65%;
  padding: 2rem 1rem;
`

const Title = styled.h2`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
  }
`

const Date = styled.span`
  color: gray;
  font-size: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`
const BlogTile = ({ slug, cover, title, date, ...props }) => {
  return (
    <Wrapper>
      <StyledLink to={`/${slug}/`}>
        <Cover
          fluid={cover.fluid}
          alt={cover.title}
          backgroundColor={'#212121'}
        />
        <Details>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Details>
      </StyledLink>
    </Wrapper>
  )
}

export default BlogTile
