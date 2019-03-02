import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/general/Container'
import SEO from '../components/general/SEO'
import Hero from '../components/general/Hero'
import NavLinks from '../components/general/NavLinks'
import ProjectDetails from '../components/project/ProjectDetails'
import ImageList from '../components/project/ImageList'
import Video from '../components/project/Video'

const ProjectTemplate = ({ data, pageContext }) => {
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
  } = data.contentfulProject

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <>
      <SEO
        title={title}
        image={cover}
        description={description.childMarkdownRemark.excerpt}
      />
      <Hero image={cover} title={title} />
      <Container>
        <NavLinks previous={previous} next={next} />
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
      role
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
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
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
