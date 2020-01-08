import React from 'react'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'
import Discuss from '../components/templates/Discuss'
import Preview from '../components/templates/Preview'
import SEO from '../components/general/SEO'

const PostTemplate = ({ pageContext }) => {
  const { title, date, cover, previous, content, slug } = pageContext

  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://www.ryanwiemer.com/${slug}/`
  )}`

  return (
    <>
      <SEO
        title={title}
        description={content.childMarkdownRemark.excerpt}
        image={cover.ogimg.src}
      />
      <Hero title={title} date={date} image={cover} />
      <Content markdown={content} />
      <Discuss title={title} URL={discussUrl} />
      <Preview post={previous} />
    </>
  )
}

export default PostTemplate
