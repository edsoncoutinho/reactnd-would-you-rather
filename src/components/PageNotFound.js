import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <p>404</p>
      <p>Page Not Found</p>
      <Link to="/">Return to Home Page</Link>
    </div>
  )
}

export default PageNotFound