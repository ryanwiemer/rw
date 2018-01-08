import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Menu = () => {
    return (
      <header>
        <nav>
          <ul className="site-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Menu

Menu.propTypes = {
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
}
