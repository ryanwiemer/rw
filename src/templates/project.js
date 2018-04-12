import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from 'lodash.find'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Hero from '../components/Hero'
import ProjectDetails from '../components/ProjectDetails'
import ProjectLinks from '../components/ProjectLinks'
import ImageList from '../components/ImageList'
import Video from '../components/Video'
import Footer from  '../components/Footer'

const ProjectTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    description,
    cover,
    url,
    source,
    awards,
    images,
    video,
    thumbnail
  } = data.contentfulProject;

  const projectIndex = find(
    data.allContentfulProject.edges,
    ({ node: project }) => project.id === id
  );

  return(
    <div>
      <Helmet>
        <title>{`${title} - Ryan Wiemer`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Ryan Wiemer`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://www.ryanwiemer.com/${slug}/`} />
        <meta property="og:image" content={cover.sizes.src} />
      </Helmet>
      <Container>
        <Hero
          image={cover}
          title={title}
        />
        <ProjectLinks previous={projectIndex.previous} next={projectIndex.next} />
        <ProjectDetails
          description={description}
          awards={awards}
          url={url}
          source={source}
        />
        <Video video={video} thumbnail={thumbnail}/>
        <ImageList images={images}/>
      </Container>
      <Footer up/>
    </div>
    )
  }

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      title
      id
      slug
      date
      url
      source
      awards
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      thumbnail {
        title
        sizes {
          src
        }
      }
      images {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
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
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC })  {
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
