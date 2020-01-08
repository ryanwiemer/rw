import React from 'react'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'
import ImageList from '../components/templates/ImageList'
import SEO from '../components/general/SEO'
import Preview from '../components/templates/Preview'
import Video from '../components/templates/Video'
import Highlights from '../components/templates/Highlights'

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

  return (
    <>
      <SEO
        title={title}
        description={content.childMarkdownRemark.excerpt}
        image={cover.ogimg.src}
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
