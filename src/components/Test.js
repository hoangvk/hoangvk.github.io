import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import './Slider.css'
import i1 from '../images/1.png';
import i2 from '../images/2.png';
import i3 from '../images/3.png';
import i4 from '../images/4.png';
import i5 from '../images/5.png';
import i6 from '../images/6.png';
import i7 from '../images/7.png';
import i8 from '../images/8.png';
import i9 from '../images/9.png';
import i10 from '../images/10.png';
import i11 from '../images/11.png';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


function Slider() {
    let count = 0;
    const slides = [i11, i10, i9, i8, i7, i6, i5, i4, i3, i2, i1];
    const[currentIndex, setCurrentIndex] =useState(0);
    const sliderLength = slides.length;

    const [activeThumb, setActiveThumb] = useState()
    const [allImages, setAllImages] = useState(slides);

    
        const handleOnNextClick=() =>{
            count = (currentIndex+1)%sliderLength;
            setCurrentIndex(count);
        };
        
        const handleOnPrevClick=() =>{
            count = (currentIndex + sliderLength -1)%sliderLength;
            setCurrentIndex(count);
        };

    return (
        <Swiper class='slider-container'>
            {/* <img className='slider' src={slides[currentIndex]}/> */}
            <img className='slider' src={currentIndex}/>
            <div class='btn-holder'>
                <button class='btn' onClick={handleOnPrevClick}><GrPrevious/></button>
                <button class='btn' onClick={handleOnNextClick}><GrNext /></button>
            </div>
            <div class='thumbnail'>
                {
                    allImages.map((img) =>{
                        return <img class='items'
                            onClick={() => setCurrentIndex(img)}
                            src={img}
                            style={img===currentIndex? {border:'solid #687EFF', height:'70px'} : {}}/>
                })}
            </div>

        </Swiper>
  )
}

export default Slider


