import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const toggleMenu = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.toggle('open--menu');
}

const closeMenu = () => {
  const wrapper = document.getElementById('wrapper');
  wrapper.classList.remove('open--menu');
}

const Menu = () => {
    return (
      <header>
          <button className="toggle" onClick={toggleMenu}>
            <span className="toggle__label">Menu</span>
            <div className="toggle__icon">
              <span></span>
              <span></span>
            </div>
          </button>
          <nav>
            <ul className="site-nav">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/galleries" onClick={closeMenu}>Galleries</Link></li>
              <li><Link to="/investment" onClick={closeMenu}>Investment</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
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
