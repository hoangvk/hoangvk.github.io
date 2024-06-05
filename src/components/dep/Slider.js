import '../css/Slider.css'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { useState } from 'react'

const ImagesSlider = props => {
    const [activeThumb, setActiveThumb] = useState()

    return <>
        <Swiper
            loop={true}
            // spaceBetween={5}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="project images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={5}
            slidesPerView={5}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
            
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index} >
                        <div className="product-images-slider-thumbs-wrapper" >
                            <img src={item} alt="project images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}

ImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImagesSlider