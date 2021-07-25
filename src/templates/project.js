import React from 'react'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'
import ImageList from '../components/templates/ImageList'
import SEO from '../components/general/SEO'
import Preview from '../components/templates/Preview'
import Video from '../components/templates/Video'
import Highlights from '../components/templates/Highlights'
import { getSrc } from 'gatsby-plugin-image'

const ProjectTemplate = ({ pageContext }) => {
  const {
    title,
    category,
    images,
    cover,
    previous,
    content,
    video,
    url,
    highlights,
  } = pageContext

  const ogImage = getSrc(cover)

  return (
    <>
      <SEO
        title={title}
        description={content.childMarkdownRemark.excerpt}
        image={ogImage}
      />
      <Hero title={title} category={category} image={cover} url={url} />
      <Content markdown={content} />
      {highlights && <Highlights highlights={highlights} />}
      {video && <Video video={video} />}
      <ImageList images={images} />
      <Preview post={previous} />
    </>
  )
}

export default ProjectTemplate
