import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Hero from '../components/Hero'
import ProjectDetails from '../components/ProjectDetails'
import ProjectLinks from '../components/ProjectLinks'
import ImageList from '../components/ImageList'
import Video from '../components/Video'
import SEO from '../components/SEO'

const ProjectTemplate = ({ data, pageContext }) => {
  const {
    title,
    description,
    cover,
    url,
    source,
    awards,
    images,
    video,
    thumbnail,
  } = data.contentfulProject

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <>
      <SEO
        title={title}
        image={cover}
        description={description.internal.content}
      />
      <Hero image={cover} />
      <Container>
        <ProjectLinks previous={previous} next={next} />
        <ProjectDetails
          description={description}
          awards={awards}
          url={url}
          source={source}
          title={title}
        />
        <Video video={video} thumbnail={thumbnail} />
        <ImageList images={images} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      slug
      date
      url
      source
      awards
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
      description {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        title
        fluid {
          src
        }
      }
      images {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      video {
        id
        title
        file {
          url
        }
      }
    }
  }
`

export default ProjectTemplate
