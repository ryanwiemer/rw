import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const IndexPage = ({data}) => {

  const projects = data.allContentfulProject.edges;
  console.log(projects);

  return (
    <div>

      <Helmet>
        <title>RW</title>
        <meta name="description" content="RW" />
        <meta property="og:title" content="RW"/>
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <section className="bio">
        <div className="bio__intro bio__intro--small grid">
          <div className="bio__intro__img cell">
            <img />
          </div>
          <div className="bio__intro__text cell">
            <h2>Hello there!</h2>
            <p>My name is Ryan Wiemer and I am an account manager that enjoys working on web and interactive projects. While client calls and scrum meetings take up most of my day I strive to keep my development skills sharp with open source and side projects.</p>
            <button className="btn">learn more</button>
          </div>
        </div>
        <div className="bio__intro bio__intro--large">
          <div className="bio__intro__text cell">
            <p>
               Nullam fringilla nulla vel pretium semper. Nunc ut mi semper metus aliquam maximus sed at metus. In laoreet metus sit amet interdum ullamcorper. Vestibulum posuere pharetra purus, eu sollicitudin orci. Fusce non libero ut augue ultrices tempus. Integer id faucibus nunc. In eget orci id nisi faucibus.
            </p>
            <p>
              Aenean blandit consequat magna iaculis euismod. Donec sodales magna finibus enim ultricies luctus. Nullam scelerisque hendrerit tellus, eget interdum elit ornare et. Sed id diam ullamcorper dui fermentum malesuada. Etiam faucibus finibus dui id pretium. Vestibulum tempor consequat cursus. Curabitur scelerisque magna sed elit dignissim commodo. Fusce quis augue accumsan, tristique odio a, commodo ligula.
            </p>
          </div>
        </div>
      </section>

      <section className="work">
        <h2>Side Projects</h2>
        <h3>Things I've made outside of my 9 - 5. <span className="emoji emoji--briefcase">💼</span></h3>
        <ul className="work__list">
          {projects.map(({ node: project, index }) => (
            <li key={project.id}>
              <Link to={project.slug}>
                <Img sizes={project.cover.sizes} alt={project.cover.title} title={project.cover.title} backgroundColor={"#f1f1f1"} />
                <h4>view gallery</h4>
              </Link>
            </li>
            ))}
        </ul>
      </section>

    </div>
  )
}

export const query = graphql`
  query ProjectQuery {
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
