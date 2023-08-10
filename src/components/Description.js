import React from 'react'
import { Link } from 'react-router-dom'
import house from '../assets/house.webp';
const Description = () => {
  return (
      <div className="page">
          <h1>House Product</h1>
          <img src={house} alt="House" />
          <Link to="/select-parts">
              <button className='start'>START</button>
          </Link>
      </div>
  )
}

export default Description
