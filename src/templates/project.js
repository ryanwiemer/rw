import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Hero from '../components/Hero'
import ProjectDetails from '../components/ProjectDetails'
import ProjectLinks from '../components/ProjectLinks'
import ImageList from '../components/ImageList'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const ProjectTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
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
    <Layout>
      <Helmet>
        <title>{`${title} - Ryan Wiemer`}</title>
        <meta name="description" content={description.internal.content} />
        <meta property="og:title" content={`${title} - Ryan Wiemer`} />
        <meta
          property="og:description"
          content={description.internal.content}
        />
        <meta
          property="og:url"
          content={`https://www.ryanwiemer.com/${slug}/`}
        />
        <meta property="og:image" content={cover.fluid.src} />
      </Helmet>
      <Container>
        <Hero image={cover} title={title} />
        <ProjectLinks previous={previous} next={next} />
        <ProjectDetails
          description={description}
          awards={awards}
          url={url}
          source={source}
        />
        <Video video={video} thumbnail={thumbnail} />
        <ImageList images={images} />
      </Container>
      <Footer up />
    </Layout>
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
      description {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`

export default ProjectTemplate
