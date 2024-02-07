
import React from 'react'
import './Gallery.css'
import {Link} from 'react-router-dom';
import {projectImages} from './Data'

const Gallery = props => {
    return (
    <div class='gallery'>
      {projectImages.map((item, index) => {
        return(
            <div class='pics'key = {index} >
                <Link to="/project"><img src={item} style={{width:'100%'}} /></Link>
            </div>
        )
      })}
    </div>
  )
}

export default Gallery


