import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from './src/components/Layout'

const transitionDelay = 300

const Transition = posed.div({
  enter: { opacity: 1, delay: transitionDelay, beforeChildren: true },
  exit: { opacity: 0 },
})

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources
  return (
    <Layout>
      <PoseGroup>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  )
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
