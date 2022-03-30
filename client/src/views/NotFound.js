import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center alin-items-center">
          <h4 className="text-center mb-2 mb-sm-5 mt-5">Page Not Found</h4>
          {/* blcok img */}
          <img
            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
            src="/images/not-found.png"
            alt="Not Found"
          />
          {/* to homepage */}
          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFound
