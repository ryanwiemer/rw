import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="footer">
    <ul className="grid">
      <li className="cell cell--middle">Copyright &copy; {new Date().getFullYear()} Ryan Wiemer</li>
      <li className="cell cell--middle">Bulit with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and <a href="https://www.contentful.com/" target="_blank">Contentful</a></li>
    </ul>
  </footer>
)

export default Footer
