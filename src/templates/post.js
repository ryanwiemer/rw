import React from 'react'
import { graphql } from 'gatsby'
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

const PostTemplate = ({ data, pageContext }) => {
  const { title, cover, date, body, tags, slug } = data.contentfulPost
  const previous = pageContext.prev
  const next = pageContext.next
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
        <NavLinks previous={previous} next={next} />
        <Wrapper>
          <PostBody body={body} discussUrl={discussUrl} />
          <PostSideBar date={date} tags={tags} />
        </Wrapper>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      date(formatString: "MMMM DD, YYYY")
      tags {
        title
        id
        slug
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

export default PostTemplate
