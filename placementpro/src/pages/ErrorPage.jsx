import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="error-handling-container">
      <h1>404</h1>
      <h4>Page Not Found</h4>
      <Link to='/'>
      <button className='goHome'>Go Home</button>
      </Link>
    </div>
  )
}

export default ErrorPage
