import React from 'react'
import './Navbar.css'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='n'>
    <div className='n-logo'><a href="#">{"<₹ohit/>"}</a></div>
    <div className="menu">
    <ul className='n-menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">TechStacks</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>        
        <li><a href="#">Resume</a></li>                
     </ul>
     <div className='n-menu-btn'>{<HiMenu style={{fontSize:'30px'}}/>}</div>
    </div>
    </div>
  )
}

export default Navbar
