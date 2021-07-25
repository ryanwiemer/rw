import React from 'react'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'
import Discuss from '../components/templates/Discuss'
import Preview from '../components/templates/Preview'
import SEO from '../components/general/SEO'
import { getSrc } from 'gatsby-plugin-image'

const PostTemplate = ({ pageContext }) => {
  const { title, date, cover, previous, content, slug } = pageContext
  const ogImage = getSrc(cover)
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://www.ryanwiemer.com/${slug}/`
  )}`

  return (
    <>
      <SEO
        title={title}
        description={content.childMarkdownRemark.excerpt}
        image={ogImage}
      />
      <Hero title={title} date={date} image={cover} />
      <Content markdown={content} />
      <Discuss title={title} URL={discussUrl} />
      <Preview post={previous} />
    </>
  )
}

export default PostTemplate
