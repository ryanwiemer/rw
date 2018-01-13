import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BgImg from '../components/background'
import Helmet from 'react-helmet'

const IndexPage = ({data}) => {

  const projects = data.allContentfulProject.edges;
  const page = data.contentfulHome;

  return (
    <div>

      <Helmet>
        <title>Ryan Wiemer</title>
        <meta name="description" content="RW" />
        <meta property="og:title" content="RW"/>
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <section className="bio grid">

        <div className="bio__img cell cell--third">
          <BgImg height={'40vh'} sizes={page.profileImage.sizes} alt={page.profileImage.title} title={page.profileImage.title} />
        </div>

        <div  className="bio__container cell cell--two-thirds">
          <div  className="bio__text bio__text--short cell" dangerouslySetInnerHTML={{ __html: page.bioShort.childMarkdownRemark.html }}/>
          <div className="bio__text bio__text--long cell" dangerouslySetInnerHTML={{ __html: page.bioLong.childMarkdownRemark.html }}/>
          <button className="btn">read more</button>
        </div>

      </section>

      <section className="work">
        <ul className="work__list grid grid--wrap">
          {projects.map(({ node: project, index }) => (
            <li key={project.id} className="cell cell--third">
              <Link to={project.slug}>
                <BgImg height={'50vh'} sizes={project.cover.sizes} alt={project.cover.title} title={project.cover.title} backgroundColor={"#f1f1f1"} />
                <h4>{project.title}</h4>
              </Link>
            </li>
            ))}
        </ul>
      </section>

    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    contentfulHome {
      title
      profileImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bioShort {
        childMarkdownRemark {
          html
        }
      }
      bioLong {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProject(limit: 1000, sort: {fields: [date], order: DESC}) {
      edges {
        node {
          title
          slug
          id
          date
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default IndexPage
