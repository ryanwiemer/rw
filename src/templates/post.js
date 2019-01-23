import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import PostLong from '../components/PostLong'
import PostShort from '../components/PostShort'
import ProjectLinks from '../components/ProjectLinks'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const { title, cover, date, content, featured, tags } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <>
      <SEO title={title} image={cover} />
      <Container>
        <ProjectLinks previous={previous} next={next} />
        {featured && (
          <PostLong
            title={title}
            date={date}
            cover={cover}
            content={content}
            tags={tags}
          />
        )}
        {!featured && (
          <PostShort title={title} date={date} content={content} tags={tags} />
        )}
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
      featured
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
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

export default PostTemplate
