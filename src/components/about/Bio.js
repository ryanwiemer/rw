import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import DefaultStyles from '../templates/DefaultStyles'

const Wrapper = styled.div`
  padding: 0 1.5em 2.5em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0.75em;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
  }
`

const Info = styled.div`
  padding: 1.5em 0 0 0;
  grid-column: 1 / span 12;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 0;
    display: grid;
    grid-column-gap: 1.5em;
    grid-template-columns: repeat(12, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    grid-column: 2 / span 10;
  }
`

const Cover = styled(Img)`
  margin: 0 0 1.5em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 7 / span 6;
    min-height: 350px;
    max-height: 75vh;
  }
`

const Text = styled(DefaultStyles)`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 1 / span 6;
  }
`

const Title = styled.h1`
  margin: 0 0 1rem 0;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 1.15;
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 2.488em;
  }
`

const Bio = (props) => {
  return (
    <Wrapper>
      <Info>
        <Text
          dangerouslySetInnerHTML={{
            __html: props.content.html,
          }}
        />
        <Cover fluid={props.cover.fluid} alt={props.cover.title} />
      </Info>
    </Wrapper>
  )
}

export default Bio
