import React, {useEffect, useState} from 'react'
import './ImageSwapper.css'
import {appleCrisp, scoutingRobert, deckoShuffo, valveControl} from '../media/Data'

const images = [appleCrisp, scoutingRobert, deckoShuffo,valveControl];

function ImageSwapper() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div>
            <img class='swapper' src={images[currentIndex]} />
        </div>
    )
}

export default ImageSwapper
