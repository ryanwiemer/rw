import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BgImg from '../components/background'
import Helmet from 'react-helmet'

class IndexPage extends React.Component {

constructor (props) {
    super(props)
    this.state = {
      expandContent: false
    };
    this.expandContent = this.expandContent.bind(this);
  }

expandContent() {
  this.setState({
    expandContent: !this.state.expandContent
  });
}

render () {

  const projects = this.props.data.allContentfulProject.edges;
  const page = this.props.data.contentfulHome;

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

      <section className={(this.state.expandContent ? "bio bio--expanded grid" : "bio grid")}>

        <div className="bio__img cell cell--third">
          <BgImg height={'40vh'} sizes={page.profileImage.sizes} alt={page.profileImage.title} title={page.profileImage.title} />
        </div>

        <div  className="bio__container cell cell--two-thirds">
          <div  className="bio__text bio__text--short cell" dangerouslySetInnerHTML={{ __html: page.bioShort.childMarkdownRemark.html }}/>
          <div className="bio__text bio__text--long cell" dangerouslySetInnerHTML={{ __html: page.bioLong.childMarkdownRemark.html }}/>
          <button className="btn" onClick={this.expandContent}>read {(this.state.expandContent ? "less" : "more")}</button>
        </div>

      </section>

      <section className="work">
        <ul className="work__list">
          {projects.map(({ node: project, index }) => (
            <li key={project.id} className="grid">
                <div className="cell cell--half">
                  <h4 className="work__title">{project.title}</h4>
                  <div className="work__description" dangerouslySetInnerHTML={{ __html: project.description.childMarkdownRemark.html }} />
                  {project.awards && (
                    <ul className="work__awards">

                    </ul>
                  )}
                </div>
                <div className="cell cell--half">
                  {project.url && (<a className="work__live cell" href={project.url} target="_blank"><span></span>View Site</a>)}
                  <Link className="work__read cell" to={project.slug}>Info</Link>
                </div>
            </li>
            ))}
        </ul>
      </section>

    </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
  toggleBio: PropTypes.func
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
          description {
            childMarkdownRemark {
              html
            }
          }
          date
          url
          sourceCode
          awards
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
