import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Navbar() {
  return (
    <header> 
      <h1 class="name">HOANG VU</h1>
      <nav>      
          <ul class="nav_links">
            {/* <li><Link to="/">Home</Link></li> */}
            {/* <li><Link to="/project">Projects</Link></li> */}
            <li><a href="https://www.linkedin.com/in/hoang-vu-1705b919b/"><FaLinkedin/></a></li>
            <li><a href="mailto:hoangvukhue@gmail.com"><MdEmail/></a></li>
            <li><a href="https://github.com/hoangvk"><FaGithub/></a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar

