import React from 'react'
import '../css/Footer.css'
import { MdEmail } from "react-icons/md"
import { MdOutlinePhoneAndroid } from "react-icons/md"

function Footer() {
  return (
    <footer class="social-media">
      {/* <p class='copyright'>© 2024 by Hoang Vu</p> */}
      <p class='copyright'>
        <a href="mailto:hoangvukhue@gmail.com"><MdEmail class ="icon"/> hoangvukhue@gmail.com </a>
        | <MdOutlinePhoneAndroid class="icon"/>437-601-5608 
      </p>
      {/* <ul class="social-media">
        <li><a href="https://www.linkedin.com/in/hoang-vu-1705b919b/"><FaLinkedin/> LinkedIn</a></li>
        <li><a href="mailto:hoangvukhue@gmail.com"><MdEmail/> hoangvukhue@gmail.com</a></li>
        <li><a href="https://github.com/hoangvk"><FaGithub/> Github</a></li>
        <li><p><FaRegCopyright />by Hoang Vu</p></li>
      </ul>
       */}
    </footer>
  )
}

export default Footer
