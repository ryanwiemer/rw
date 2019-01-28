import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 66%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`

const Title = styled.h2`
  font-size: 1em;
  line-height: 1.3;
  margin: 0 0 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
`

const BlogList = props => {
  return (
    <Wrapper>
      <Title>
        Duis pretium pharetra lacinia. Cras et ultrices felis. In lobortis
        dapibus ligula, eget faucibus tellus congue vel. Suspendisse potenti.
        Duis tempus elementum mi sit amet efficitur.
      </Title>
    </Wrapper>
  )
}

export default BlogList
