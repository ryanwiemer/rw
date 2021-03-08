import React from 'react'
import styled from '@emotion/styled'
import DefaultStyles from './DefaultStyles'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 0.75em;
    > * {
      grid-column: 3 / span 8;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    > * {
      grid-column: 4 / span 6;
    }
  }

  *:last-child {
    margin-bottom: 0;
  }
`

const Content = (props) => {
  if (props.markdown) {
    return (
      <DefaultStyles>
        <Wrapper
          {...props}
          dangerouslySetInnerHTML={{
            __html: props.markdown.childMarkdownRemark.html,
          }}
        />
      </DefaultStyles>
    )
  }
  return (
    <DefaultStyles>
      <Wrapper {...props}>{props.children}</Wrapper>
    </DefaultStyles>
  )
}

export default Content
