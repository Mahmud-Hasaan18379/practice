import React from 'react'
import { NavLink } from 'react-router'
import './Page.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/' className='navs'>HOME</NavLink>
      <NavLink to='/contact' className='navs'>CONTACT</NavLink>
      <NavLink to='/blogs' className='navs'>BLOGS</NavLink>
      <NavLink to='/privecy'  className='navs'>PRIVECY</NavLink>
    </nav>
  )
}

export default NavBar