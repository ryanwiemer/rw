import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'
import Menu from '../components/menu'

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
    images
  } = data.contentfulProject;

  const projectIndex = find(
    data.allContentfulProject.edges,
    ({ node: project }) => project.id === id
  );

  return(
    <div>

    <Menu/>

    <Helmet>
      <title>{title} - Ryan Wiemer</title>
      <meta name="description" content={title} />
      <meta property="og:title" content={title + " - Ryan Wiemer"}/>
      <meta property="og:image" content={cover.sizes.src} />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:url" content={"https://www.ryanwiemer.com" + slug} />
    </Helmet>

    <div className="project">
      <div className="project__cover">
        <Img sizes={cover.sizes} alt={cover.title} title={cover.title} backgroundColor={"#272727"} />
        <h1 className="project__title">{title}</h1>
      </div>
      <div className="project__links">
        {projectIndex.previous && (<Link className="project__previous" to={projectIndex.previous.slug}>Prev</Link>)}
        {projectIndex.next && (<Link className="project__next" to={projectIndex.next.slug}>Next</Link>)}
      </div>
      <div className="project__info grid">
        <div className="cell">
          <div className="project__description cell" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
          {awards && (
            <ul className="work__awards">
              {awards.map(({ awards, index }) => (
                <li key={index}>{awards}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="cell">
            {url && (<a className="work__site btn" href={url} target="_blank"><span></span>View Site</a>)}
          {source && (<a className="work__source btn" href={source} target="_blank">Source</a>)}
        </div>
      </div>
      <ul className="project__images">
        {images && (
          images.map((images, index) => (
            <li key={index}>
              <Img sizes={images.sizes} alt={images.title} title={images.title} outerWrapperClassName={images.description} backgroundColor={"#272727"} />
            </li>
          ))
        )}
      </ul>
    </div>
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
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
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
            title
          }
          next {
            slug
            title
            cover {
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_noBase64
              }
            }
          }
        }
      }
  }
`

export default ProjectTemplate
