import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  ${props =>
    props.minHeight &&
    css`
      min-height: calc(100vh - 128px);
    `};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`

const Container = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Container
