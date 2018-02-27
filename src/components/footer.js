import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wordmark = styled.img`
  max-width: 100px;
  opacity: .8;
`

const Footer = () => (
  <footer className="footer">
    <ul className="grid">
      <li className="cell cell--middle">Copyright &copy; {new Date().getFullYear()} Ryan Wiemer</li>
      <li className="cell cell--middle">
        <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><Wordmark src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" alt="Powered by Contentful" /></a>
      </li>
    </ul>
  </footer>
)

export default Footer
