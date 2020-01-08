import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import Sticky from './Sticky'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  display: none;
  position: relative;
  width: 100%;
  padding: 0 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75em;
    padding: 2.5em 3em;
  }
`

const Container = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 3 / -3;
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`

const Background = styled(motion.div)`
  position: relative;
  display: block;
  background: ${props => props.theme.colors.muted};
  padding: 2rem 1rem;
  border-radius: 3px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 'date date  heading heading heading heading';
    grid-column-gap: 1.5em;
  }
  span {
    line-height: 1;
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
  }
  &:hover {
    h2 {
      color: ${props => props.theme.colors.accent};
    }
  }
  @media (hover: none) {
    h2 {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Heading = styled.h2`
  transition: color 0.3s;
  margin: 0 0 1rem 0;
  font-size: 1.296em;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: 1.15;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-area: heading;
    margin: 0;
  }
`

const Date = styled.p`
  font-size: 0.9em;
  opacity: 0.5;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-area: date;
  }
`

const Big = styled(motion.h3)`
  display: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    opacity: 0;
    font-weight: 600;
    font-size: 30vw;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    line-height: 0.75;
    letter-spacing: -2vw;
    padding-right: 2vw;
    -webkit-text-stroke: 2px ${props => props.theme.colors.accent};
    color: transparent;
  }
`

const Writing = props => {
  return (
    <Sticky
      height="1500px"
      cover
      disableOnMobile
      render={({ progress }) => {
        let fade = scale(progress, 0, 1)
        let slowFade = scale(progress, 0.9, 1)
        let big = scale(progress, 600, 800)

        return (
          <>
            <Wrapper>
              <Container>
                <StyledLink to={`/${props.post.slug}/`}>
                  <Background style={{ opacity: slowFade }}>
                    <Heading>{props.post.title}</Heading>
                    <Date>{props.post.date}</Date>
                    <span>&#8599;</span>
                  </Background>
                </StyledLink>
              </Container>
              <Big style={{ opacity: fade, fontWeight: big }}>NOTES</Big>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Writing
