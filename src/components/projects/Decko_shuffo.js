import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ImagesSlider from '../dep/Slider'
import {shuffleImages} from '../media/Data'

function Decko_shuffo() {
  return (
    <div>
      <h1>DECKO SHUFFO</h1>
      <p>Decko Shuffo is our first year design initiative. We devised and constructed a robot utilizing the lego EV3 Robot, 
        TETRIX robot components and programmed the system using RobotC language within a team of four. A Lazy Susan and a wheel
        are used to turn the robot when dealing cards. The robot successfully shuffles and deals cards based on selected games and entered player numbers. 
        Please swipe the thumbnail for photos of the final result.<br/><br/></p>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <div style={{width: '77%', marginBottom:'15px'}}>
            <ImagesSlider images={shuffleImages} />
            </div>
        </div>
    </div>
  )
}

export default Decko_shuffo
