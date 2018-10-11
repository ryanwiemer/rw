import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from './src/components/Layout'

const transitionDelay = 300

const Transition = posed.div({
  enter: { opacity: 1, delay: transitionDelay, beforeChildren: true },
  exit: { opacity: 0 },
})

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      <PoseGroup>
        <Transition key={props.location.pathname}>{element}</Transition>
      </PoseGroup>
    </Layout>
  )
}
