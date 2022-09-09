import React from 'react'
import './Navbar.css';
 const Navbar = () => {
  return(
    <div className="navbar  ">
      <div className="box-container c-flex">
        <div className="logo">
        <i class="fa-solid fa-bookmark"></i> <span>courses</span>
        </div>
        <div className="nav">
        <ul>
          <li>create</li>
          <li>read</li>
          <li>update</li>
          <li>delete</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar;
