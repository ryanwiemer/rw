import React from 'react'
import Link from 'gatsby-link'

const Menu = () => {
    return (
      <header>
        <nav>
          <ul className="site-nav">
            <li><h1><Link to="/">Ryan Wiemer</Link></h1></li>
            <li><a target="_blank" href="https://github.com/ryanwiemer">GitHub</a></li>
            <li><a href="mailto:ryan@ryanwiemer.com">Email</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Menu
