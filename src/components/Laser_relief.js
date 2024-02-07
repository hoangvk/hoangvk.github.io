import React from 'react'
import {picoway, cryogenic, valveControl, nozzle, footPedal, onOff} from '../components/Data'

function Laser_relief() {
  return (
    <div>
      <h1>LASER RELIEF</h1>
      <p><strong>Introduction: </strong>Laser removes tattoos by producing pulses of light energy, which will penetrate the skin, heat up and cause the pigment colors to shatter into tiny fragments. One of the biggest concerns for patients is the pain of the process. A potential solution is Laser Relief, which is the project that I owned end-to-end and worked on throughout my internship term at Fade Away Laser Tattoo Removal, developing a cost-effective pain numbing device for use during laser tattoo removal treatments. <br/><br/>
      <strong>Problem statement: </strong> The project addresses the challenge of tattoo removal, recognizing that various ink colors require different laser wavelength for effective treatment. Meanwhile, cryotherapy utilizing liquid nitrogen plays a crucial role in minimizing pain and promoting post-treatment healing by triggering beneficial physiological responses to cold. However, mishandling of cryogen spray may result in cold injuries to the skin tissues. 
      Given the precision required in laser procedures and potential difficulties in handling two devices simultaneously, the project aims to automate and simplify the devices' usage.
      <div class ='design-concepts-container'>
        <img src={picoway} class='design-concepts'></img>
        <img src={cryogenic} class='design-concepts'></img>
      </div>
      <strong>Implementations: </strong>First, since the human-controlled cryogenic tank introduces the possibility of operational inconsistencies, touch sensors and an Elegoo UNO R3 board was implemented to automatically control the valve opening of the cryogenic tank. There are two touch sensors, each correspond to a predefined patttern of delivering pulses and time delay. Below is a top view of the first prototype for the valve control system. <br/>
      <img src={valveControl} class='modal-imgs' style={{width:'60%'}}></img><br/>
      Next, to incorporate real-time monitoring for skin temperature and the distance form the cryogenic nozzle to the skin, a temperature sensor, a ToF sensor and an LCD are used for data collection and display. These components, controlled by a seperate Arduino board, along with the cryogenic nozzle are chosen to be attached to the laser handpiece as shown below, since this configuration prevents time delay and inconvenience caused by switching equipment during treatment. 
      <img src={nozzle} class='modal-imgs' style={{width:'45%'}}></img><br/>
      The operation of the cryogenic tank involves activating the foot pedal for liquid nitrogen pumping. The force applied to the pedal prompts it to descend during usage and rise when not in use. Leveraging this movement, the on/off mechanism for the real-time response components is implemented using a photoresistor (LDR) paired with a laser diode. In this setup, the LDR and laser are positioned facing each other within the foot pedal. The programming of the system ensures that other components only become operational when the LDR is activated by light (indicating the pedal lowering due to stepping), a design choice made to minimize battery consumption. Finally, a push button is integrated to activate and deactivate the whole system. The configuration and functioning of the on/off mechanism for the real-time response components are as illustrated.
      <div class ='design-concepts-container'>
        <img src={footPedal} class='design-concepts'></img>
        <img src={onOff} class='design-concepts'></img>
      </div>
      To enhance the prototype's user-friendliness and automation, an I2C interface is implemented for seamless communication between the two development boards.The nRF24L01 transceiver module is chosen for wireless data transfer between Arduino boards, due to its low power consumption (12mA), an extended transmission range, reliability, ease of integration and low cost. The module is configured so that the push button responsible for activating or deactivating the real-time response system now also manages the power supply for the valve control system. As a result, the valve control system will remain inactive until its board receives the "on" signal from the sensor board, which minimizes manual interventions during operation.
      </p>
    </div>
  )
}

export default Laser_relief
