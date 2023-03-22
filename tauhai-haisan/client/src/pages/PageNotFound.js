import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import pic1 from '../image/pic1.jpg'

const PageNotFound = () => {
  return (
    <Layout title={"Page not found"}>
        <div className='pnf'>
        <img src={pic1} alt="test" width="300" height="200"/>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Ops! Page Not Found</h2>
          <Link to="/" className="pnf-btn">
            Go Back
          </Link>
        </div>
    </Layout>
  )
}

export default PageNotFound