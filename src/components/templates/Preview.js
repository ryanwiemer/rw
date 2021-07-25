import React from 'react'
import styled from '@emotion/styled'
import Link from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.muted};
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const Text = styled.div`
  display: block;
  margin: 1em 0 0 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0;
  }
`

const Title = styled.h3`
  display: block;
  font-size: 1.08em;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: 1.15;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.44em;
  }
`

const SubTitle = styled.span`
  font-size: 0.9em;
  display: block;
  margin: 0 0 1em 0;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.text} !important;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.text};
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 3 / span 8;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5em;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    grid-column: 4 / span 6;
  }
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (hover: none) {
    color: ${(props) => props.theme.colors.text} !important;
  }
`

const Preview = (props) => {
  return (
    <>
      {props.post && (
        <Wrapper>
          <StyledLink to={`/${props.post.slug}/`}>
            {props.post.cover && (
              <GatsbyImage image={props.post.cover.gatsbyImageData} />
            )}
            <Text>
              <SubTitle>Next</SubTitle>
              <Title>{props.post.title}</Title>
            </Text>
          </StyledLink>
        </Wrapper>
      )}
    </>
  )
}

export default Preview
