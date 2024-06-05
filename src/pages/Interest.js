import React, { useRef, useEffect, useState } from "react";
import Map from '../components/dep/Maps';
import Bookshelf from '../components/dep/Bookshelf';
import BackToUp from '@uiw/react-back-to-top';
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

import Cookies from '../components/dep/FortuneCookies';

function Interest() {
  const $dom = useRef(null);
  const [element, setElement]= useState();
  useEffect(() => setElement($dom.current), [])

  return (
    <div className="wrapper" ref={$dom}>
        <BackToUp top={0} element={$dom.current} style={{ float: 'right',position:'fixed',bottom:'65px',right:'41px' }}>Top</BackToUp>
      <section id = 'map-section'>
        <h1 class='title' style={{paddingLeft: '37px'}}>Travel</h1>
        <p class='subtitle'>I love travelling and below are all the cities I visited, marked by their airport codes ✈️🔎🗺️😄</p>
        <Map/>
      </section>
      <section id= 'book-shelf' class="bookshelf">
        <h1 class ="title">Bookshelf</h1>
        <p class='subtitle' style={{marginBottom: '-22px'}}>I want to read more 😅, feel free to recommend any book for me below (any genre is welcomed): </p>
        <Bookshelf/>
      </section>
      <section>
        <h1 class ="title" style={{marginTop:'155px'}}>Fortune Cookies</h1>
        <Cookies/>
      </section>
      <div class="contact-sidebar">
          <ul class="contact-list">
            <li><a href="https://www.linkedin.com/in/hoang-vu-1705b919b/"><FaLinkedin/></a></li>
            <li><a href="mailto:hoangvukhue@gmail.com"><MdEmail/></a></li>
            <li><a href="https://github.com/hoangvk"><FaGithub/></a></li>
          </ul>
      </div>
    </div>
  )
}

export default Interest
