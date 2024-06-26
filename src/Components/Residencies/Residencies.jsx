import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import './residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'


export default function Residencies() {
  return (
    <section id='residencies' className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choises</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />

                                <span className="secondaryText r-price">
                                    <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                </span>

                                <span classNam  e='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}


const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="r-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}