import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const IndexPage = () => {

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

        <h2>Hello there!</h2>
        <p>
          My name is Ryan Wiemer and I am an account manager that enjoys working on web or interactive projects. While client calls and scrum meetings take up most of my day I strive to keep my development skills sharp with open source and other side projects.
        </p>

        <button>learn more</button>

        <p>
          I've been lucky enough to manage projects for some cool folks such as Cooley, Pacific Union, ProSight and many, many more. Unfortuanatley due to ongoing development or other legal obligations I can't show it here. 
        </p>


      </section>


    </div>
  )
}

export default IndexPage
