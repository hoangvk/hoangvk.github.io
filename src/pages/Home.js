import React, { useRef, useEffect, useState } from "react";
import {profilePic} from '../components/Data' 
import { TypeAnimation } from 'react-type-animation';
import Modal from '../components/Modal';
import Resume from '../components/Resume';
// import Images from '../components/ImageSwapper';
// import Gallery from '../components/Gallery'
// import {projectImages} from '../components/Data'
import BackToUp from '@uiw/react-back-to-top';

function Home() {
  const $dom = useRef(null);
  const [element, setElement]= useState();
  useEffect(() => setElement($dom.current), [])
  return (
    <div className="wrapper" ref={$dom}>
    <div class='home-content-container'>
        {/* <div class='home-images'><Images /></div> */}
        <img src= {profilePic} class='home-images' style={{width:'100%'}}></img>
        <div class='home-text'>
          <h1 class='home-welcome'><TypeAnimation 
          sequence={[
            `Hello, welcome to my website! 😊`,
            1000,
            "",
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: 'inherit' }}
          repeat={Infinity}
          /></h1>
          <p>I am a Mechatronics Engineering student graduating in April 2024 from the University of Waterloo. 
            Through academic learning and co-op experiences, I have gained versatile skills and a solid foundation in mechatronic design,
            system integration and hands-on manufacturing expertise.<br/><br/>
            Having experience working in both startup and large corporate environments, I am capable of adapting to fast-paced work settings 
            and communicate effectively with cross-functional departments. I am passionate about developing products that generate meaningful value and leave a lasting impact!</p>
        </div>
        
    </div>
    {/* <Gallery images={projectImages}/> */}
    <div class = 'featured-projects'>
    <h1 class='title'>Projects</h1>
      <p class='skills'>Solidworks | 3D Printing | Laser Cutting | Manufacturing | Arduino | PCB Design <br/></p>
      <Modal/>
    </div>
    <h1 class='title'>Resume</h1>
    <Resume/>
    <BackToUp top={0} element={$dom.current} style={{ float: 'right' }}>Top</BackToUp>
    </div>
  )
}

export default Home
