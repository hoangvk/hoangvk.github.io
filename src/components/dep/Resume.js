import React, { useState } from "react"
import '../css/Modal.css'
import pdf from '../media/Resume.pdf'

function Resume() {
    const [modal1, setModal1] = useState(false);

    const toggleModal1 = () => {
      setModal1(!modal1);
    };
    
    if(modal1) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    return (
      <div class='resume-wrap'>
        <button onClick={toggleModal1} className="btn-resume">Resume</button>
        {modal1 && (
          <div className="modal">
            <div onClick={toggleModal1} className="overlay"></div>
            <div className="modal-content">
              {/* <button className="close-modal" onClick={toggleModal1}>&times;</button> */}
              <div class='pdf-container'>
                <iframe src={pdf} class='pdf'/>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}

export default Resume
