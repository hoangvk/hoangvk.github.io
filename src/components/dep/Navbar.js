import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import Resume from './Resume'

function Navbar() {
  return (
    <header> 
      <h1 class="name">HV</h1>
      <nav>      
          <ul class="nav_links">
            <li><a href="#about-me">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><Resume/></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar

