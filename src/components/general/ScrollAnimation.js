import React, { useEffect, useRef, useState } from 'react'
import { clamp, getOffsetTop } from '../../utils/utils'

/*
  NOTES:
    This component tracks the progress of a given element once
    the top is visibile (0) until the bottom is out of view (1).

  CAVEATS:
    * This factors in the 60px height of the fixed menu bar
    * This includes any margins or padding so be sure to take that into consideration.

  USAGE:
    <ScrollAnimation
      render={({ progress }) => {
        return (
          <p>element with the scroll progress being tracked</p>
        )
      }}
    />
*/

function ScrollAnimation({ render }) {
  const [progress, setProgress] = useState(0)
  const element = useRef()
  useEffect(() => {
    function handleScroll() {
      const $el = element.current
      if ($el) {
        const scrollPosition = window.pageYOffset || window.scrollY
        const topOfElement = getOffsetTop($el)
        const heightOfElement = $el.getBoundingClientRect().height
        const menuHeight = 60
        const progressOverElement =
          (scrollPosition - (topOfElement - menuHeight)) / heightOfElement || 0
        const progress = clamp(progressOverElement, 0, 1)
        setProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [element])

  return <div ref={element}>{render({ progress })}</div>
}

export default ScrollAnimation
