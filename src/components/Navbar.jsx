import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="left">
        <h1>Great Quotes</h1>
      </div>
      <div className="right">
        <ul>
          <li><Link to="" ><h2>All Quotes</h2></Link></li>
          <li><Link><h2>Add a quote</h2></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
