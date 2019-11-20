import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import NavLinks from '../components/general/NavLinks'
import Hero from '../components/general/Hero'
import PostBody from '../components/post/PostBody'
import PostSideBar from '../components/post/PostSideBar'
import { delayChildren } from '../styles/poses'
require('prismjs/themes/prism-tomorrow.css')

const Wrapper = styled(posed.div(delayChildren))`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

const PostTemplate = ({ pageContext }) => {
  const { title, cover, date, body, tags, slug, prev, next } = pageContext
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://www.ryanwiemer.com/${slug}/`
  )}`

  return (
    <>
      <SEO
        title={title}
        image={cover}
        description={body.childMarkdownRemark.excerpt}
      />
      <Hero title={title} image={cover} />
      <Container>
        <NavLinks previous={prev} next={next} />
        <Wrapper>
          <PostBody body={body} discussUrl={discussUrl} />
          <PostSideBar date={date} tags={tags} />
        </Wrapper>
      </Container>
    </>
  )
}

export default PostTemplate
