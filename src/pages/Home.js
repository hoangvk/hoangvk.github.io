import React, { useRef, useEffect, useState } from "react";
import {profilePic, drawing} from '../components/media/Data' 
import {TypeAnimation } from 'react-type-animation';
import Modal1 from '../components/dep/Modal1';
import Modal2 from '../components/dep/Modal2';
import Map from '../components/dep/Maps';
import Bookshelf from '../components/dep/Bookshelf';
import BackToUp from '@uiw/react-back-to-top';
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import Timeline from '../components/dep/Timeline'
// import Images from '../components/ImageSwapper';
// import Gallery from '../components/Gallery'
// import {projectImages} from '../components/Data'

import Cookies from '../components/dep/FortuneCookies';

function Home() {
  const $dom = useRef(null);
  const [element, setElement]= useState();
  useEffect(() => setElement($dom.current), [])

  return (
    <div className="wrapper" ref={$dom}>
    <section class='home-content-container' id ="about-me">
        {/* <div class='home-images'><Images /></div> */}
        <img src= {profilePic} class='home-images' style={{width:'60%', borderRadius:"170px"}} alt="profile pic"></img>
        <div class='home-text'>
          <h1 class='home-welcome'><TypeAnimation 
          sequence={[
            `Hi! I'm Hoang. Thanks for stopping by 😊`,
            1000,
            "",
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: 'inherit' }}
          repeat={Infinity}
          /></h1>
          <p>I am a Mechatronics Engineering student graduating in 2024 from the University of Waterloo. 
            Through academic learning and co-op experiences, I have gained versatile skills and a solid foundation in mechatronic design,
            system integration and hands-on manufacturing expertise.<br/><br/>
            With experience in both startup and large corporate environments, I’ve honed my ability to adapt to fast-paced work settings and effectively communicate with cross-functional departments. My passion lies in developing products that not only generate meaningful value but also leave a lasting impact!<br/><br/>
            I am open to any engineering new grad opportunities. Let's<a href="mailto:hoangvukhue@gmail.com" class="link" style={{fontWeight:"bold"}}>get in touch!</a></p>
        </div>
    </section>
    {/* <Gallery images={projectImages}/> */}
    <section class = 'featured-projects' id ="experience">
    <h1 class='title'>Projects</h1>
      <p class='subtitle'>Here are some projects I've completed so far 😎. I'm excited to add more to the list:</p>
      <p class='subtitle' style={{marginTop:"-30px"}}>Solidworks | AutoCAD | 3D Printing | Laser Cutting | Machining | Arduino<br/></p>
      <Modal1/><br/><br/>
      <Modal2/>
    </section>
    <section>
    <h1 class ="title heading" style={{marginTop:'20px',marginBottom:'-45px'}}>Work Experience</h1>
      <Timeline/>
    </section>
    <section id = 'interests'>
      <h1 class='title' style={{marginTop:'-70px'}}>Travel</h1>
      <p class='subtitle'>I love travelling and below are all the cities I visited, marked by their airport codes ✈️🔎🗺️😄</p>
      <Map/>
    </section>
    <section>
      <h1 class ="title">Bookshelf</h1>
      <p class='subtitle' style={{marginBottom: '-22px'}}>I want to read more 😅, feel free to recommend any book for me below (any genre is welcomed): </p>
      <Bookshelf/>
    </section>
    <section>
      <h1 class ="title" style={{marginTop:'155px'}}>Other Interests</h1>
      <p class='subtitle' style={{marginBottom: '-22px'}}>I want to explore animation and editing video 🎞️, and I enjoy drawing occasionally 🎨 </p>
      <img src={drawing} class='drawing'/>
    </section>
    {/* <section> */}
      {/* <h1 class ="title" style={{marginTop:'155px', visibility:'hidden'}}>Fortune Cookies</h1> */}
      {/* <p class="subtitle">Fortune cookies always bring me joy. Click on the cookie to get a quote 😊 </p> */}
      {/* <Cookies/> */}
    {/* </section> */}
    <BackToUp top={0} element={$dom.current} style={{ float: 'right',position:'fixed',bottom:'65px',right:'41px' }}>Top</BackToUp>
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

export default Home
