import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import WorkList from '../components/index/WorkList'

const projectsTemplate = ({ pageContext }) => {
  const { projects } = pageContext

  return (
    <>
      <SEO />
      <Helmet>
        <body className="page--work" />
      </Helmet>
      <Container minHeight>
        <WorkList projects={projects} />
      </Container>
    </>
  )
}

export default projectsTemplate
