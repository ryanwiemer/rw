import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
    grid-gap: 0.75em;
    padding: 2.5em 3em 0;
  }
`

const Card = styled.div`
  width: 100%;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 3 / -3;
    max-width: 650px;
  }
`

const Profile = (props) => {
  return (
    <Wrapper>
      <Card>
        <Img
          fluid={{
            ...props.cover.fluid,
            aspectRatio: 1 / 1,
          }}
        />
      </Card>
    </Wrapper>
  )
}

export default Profile
