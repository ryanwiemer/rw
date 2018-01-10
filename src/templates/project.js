import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'

const ProjectTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    description,
    cover,
    images
  } = data.contentfulProject;

  const projectIndex = find(
    data.allContentfulProject.edges,
    ({ node: project }) => project.id === id
  );

  return(
    <div>

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
      <div className="project-cover">
        <Img sizes={cover.sizes} alt={cover.title} title={cover.title} backgroundColor={"#f1f1f1"} />
      </div>
      <div className="project-info">
        <div className="project-info__left">
          <h2 className="project-info-title">Details</h2>
          {projectIndex.previous && (<Link className="project-previous" to={projectIndex.previous.slug}>Previous</Link>)}
          {projectIndex.next && (<Link className="project-next" to={projectIndex.next.slug}>Next</Link>)}
        </div>
        <div className="project-info__right">
          <div className="project-description" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
        </div>
      </div>
      <ul className="project-images">
        {images && (
          images.map((images, index) => (
            <li key={index}>
              <Img sizes={images.sizes} alt={images.title} title={images.title} outerWrapperClassName={images.description} backgroundColor={"#f1f1f1"} />
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
      date(formatString: "M.DD.YYYY")
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
