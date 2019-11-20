import React from 'react'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import Hero from '../components/general/Hero'
import NavLinks from '../components/general/NavLinks'
import ProjectDetails from '../components/project/ProjectDetails'
import ImageList from '../components/project/ImageList'
import Video from '../components/project/Video'

const ProjectTemplate = ({ pageContext }) => {
  const {
    title,
    description,
    role,
    cover,
    url,
    source,
    awards,
    images,
    video,
    thumbnail,
    prev,
    next,
  } = pageContext

  return (
    <>
      <SEO
        title={title}
        image={cover}
        description={description.childMarkdownRemark.excerpt}
      />
      <Hero image={cover} title={title} />
      <Container>
        <NavLinks previous={prev} next={next} />
        <ProjectDetails
          description={description}
          role={role}
          awards={awards}
          url={url}
          source={source}
        />
        <Video video={video} thumbnail={thumbnail} />
        <ImageList images={images} />
      </Container>
    </>
  )
}

export default ProjectTemplate
