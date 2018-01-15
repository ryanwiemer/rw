import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Menu = () => {
    return (
      <header>
        <nav>
          <ul className="site-nav">
            <li><Link to="/">&larr; About + Projects</Link></li>
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
