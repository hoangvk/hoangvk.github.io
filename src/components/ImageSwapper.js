import React, {useEffect, useState} from 'react';
import i1 from '../images/apple_crisp.png';
import i2 from '../images/decko_shuffo.jpg';
import i3 from '../images/scouting_robert.jpg';
import './ImageSwapper.css'

const images = [i1, i2, i3];

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
