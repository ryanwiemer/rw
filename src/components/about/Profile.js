import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import Sticky from './Sticky'
import { scale } from '../../utils/utils'

const Wrapper = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
    grid-gap: 0.75em;
    padding: 2.5em 3em;
  }
`

const Container = styled.div`
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 3 / -3;
  }
`

const Text = styled(motion.p)`
  display: inline-block;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1em;
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.reverseText};
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    font-size: 1.2em;
  }
  a {
    transition: 0.3s color;
    color: ${(props) => props.theme.colors.text};
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
    @media (hover: none) {
      color: ${(props) => props.theme.colors.text} !important;
    }
  }
`

const Card = styled(motion.ul)`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    z-index: -1;
    width: 50%;
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`

const Item = styled(motion.li)``

const StyledImg = styled(Img)`
  width: 100%;
`

const Work = (props) => {
  return (
    <Sticky
      height="1500px"
      cover
      disableOnMobile
      render={({ progress }) => {
        let fadeOut = scale(progress, 1, -0.1)
        let fadeIn = scale(progress, 0, 1)
        let magnify = scale(progress, 0.9, 1)
        let translateX = '-50%'
        let translateY = '-50%'
        return (
          <>
            <Wrapper>
              <Container>
                <Text
                  style={{
                    opacity: fadeOut,
                  }}
                >
                  {props.title}
                </Text>
              </Container>
              <Card
                style={{
                  translateY: translateY,
                  translateX: translateX,
                }}
              >
                <Item
                  style={{
                    opacity: fadeOut,
                  }}
                >
                  <StyledImg
                    fluid={{
                      ...props.cover.fluid,
                      aspectRatio: 1 / 1,
                    }}
                  />
                </Item>
              </Card>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

export default Work
