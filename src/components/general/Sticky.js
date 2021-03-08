import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { clamp, getOffsetTop } from '../../utils/utils'

/*
  NOTES:
    This component is adapted from Narative's codebase. Full credit to them for the idea.
    https://github.com/narative/narative.co/blob/master/src/components/Sticky/Sticky.tsx

  USAGE:
    <Sticky
      heigt="2000px"
      cover
      render={({ progress }) => {
        return (
          <p>Element will be sticky for 2000px</p>
        )
      }}
    />
*/

function Sticky({ cover, height, render, top, disableOnMobile }) {
  const [position, setPosition] = useState(0)
  const [progress, setProgress] = useState(0)
  const element = useRef()

  useEffect(() => {
    function handleScroll() {
      const $el = element.current
      if ($el) {
        const scrollPosition = window.pageYOffset || window.scrollY
        const topOfElement = getOffsetTop($el)
        const topOfElementRelativeToDoc = $el.getBoundingClientRect().top
        const heightOfElement = $el.getBoundingClientRect().height
        const scrollPositionRelativeToContainer =
          scrollPosition - topOfElementRelativeToDoc
        const viewportHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )
        const position =
          scrollPositionRelativeToContainer < 0
            ? 0
            : scrollPositionRelativeToContainer

        const menuHeight = 60
        const progressOverElement =
          (scrollPosition - (topOfElement - menuHeight)) /
            (heightOfElement - viewportHeight) || 0

        const progress = clamp(progressOverElement, 0, 1)
        setPosition(position)
        setProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [element])

  return (
    <div ref={element}>
      <StickyDuration height={height} isDisabled={disableOnMobile}>
        <StickyItemContainer>
          <StickyItem top={top} cover={cover} isDisabled={disableOnMobile}>
            {render({ progress, position })}
          </StickyItem>
        </StickyItemContainer>
      </StickyDuration>
    </div>
  )
}

export default Sticky

const StickyDuration = styled.div`
  height: ${props => (props.isDisabled ? '100%' : props.height)};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: ${props => props.height || '100vh'};
  }
`

const StickyItemContainer = styled.div`
  height: 100%;
`

const StickyItem = styled.div`
  position: ${props => (props.isDisabled ? 'static' : 'sticky')};
  display: ${props => (props.isDisabled ? 'block' : 'flex')};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    top: ${props => props.top || 0};
    min-height: initial;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
    width: 100%;
    ${props => props.cover && 'overflow-y: hidden;'};
    height: ${props => (props.cover ? '100vh' : 'initial')};
    position: sticky;
    display: flex;
  }
`
