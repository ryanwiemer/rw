import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0, transition: { duration: 300 } },
})

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props
    return (
      <PoseGroup>
        <RouteContainer key={location.key}>{children}</RouteContainer>
      </PoseGroup>
    )
  }
}

export default Transition
