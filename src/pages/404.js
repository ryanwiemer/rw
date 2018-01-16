import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <div className="error grid grid--center">
      <div className="cell">
        <h2>Error 404</h2>
        <p>Sorry, that page can't be found. Please return <Link to="/">home</Link>.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
