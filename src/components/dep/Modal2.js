import React, { useState } from "react"
import "../css/Modal.css"
import {W2R_cradle, deckoShuffo, valveControl, portfolio} from '../media/Data'
import Bottleneck from '../projects/W2R_Bottleneck'
import Portfolio from '../projects/Portfolio'
import Decko_shuffo from '../projects/Decko_shuffo'
import Laser_relief from '../projects/Laser_relief'

export default function Modal2() {
  const [modal1, setModal1] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  const [modal2, setModal2] = useState(false);

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const [modal3, setModal3] = useState(false);

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  const [modal4, setModal4] = useState(false);

  const toggleModal4 = () => {
    setModal4(!modal4);
  };

  if(modal1 || modal2 || modal3 || modal4) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div class="flex-container">
      {/* W2R Bottleneck Elimination */}
      <div class="display-projects-2">
        <button onClick={toggleModal1} className="btn-modal">BOTTLENECK ELIMINATION</button>
        {modal1 && (
          <div className="modal">
            <div onClick={toggleModal1} className="overlay"></div>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal1}>&times;</button>
              <Bottleneck/>
            </div>
          </div>
        )}
        <img src={W2R_cradle} class='profile-pic'></img>
      </div>
      {/* Personal Website */}
      <div class="display-projects-2">
        <button onClick={toggleModal2} className="btn-modal">PORTFOLIO</button>
        {modal2 && (
          <div className="modal">
            <div onClick={toggleModal2} className="overlay"></div>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal2}>&times;</button>
              <Portfolio/>
            </div>
          </div>
        )}
        <img src={portfolio} class='profile-pic'></img>
      </div>
      {/* Pain management device */}
      <div class="display-projects-2">
        <button onClick={toggleModal3} className="btn-modal">LASER RELIEF</button>
        {modal3 && (
          <div className="modal">
            <div onClick={toggleModal3} className="overlay"></div>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal3}>&times;</button>
              <Laser_relief/>
            </div>
          </div>
        )}
        <img src={valveControl} class='profile-pic'></img>
      </div>
      {/* Robot shuffle card */}
      <div class="display-projects-2">
        <button onClick={toggleModal4} className="btn-modal">DECKO SHUFFO</button>
        {modal4 && (
          <div className="modal">
            <div onClick={toggleModal4} className="overlay"></div>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal4}>&times;</button>
              <Decko_shuffo/>
            </div>
          </div>
        )}
        <img src={deckoShuffo} class='profile-pic'></img>
      </div>
    </div>
  );
}