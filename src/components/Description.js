import React from 'react'
import { Link } from 'react-router-dom'
const Description = () => {
  return (
      <div className="page1">
          <h1>House Product</h1>
          <img src="house_image_url" alt="House" />
          <Link to="/select-parts">
              <button className='start'>START</button>
          </Link>
      </div>
  )
}

export default Description
