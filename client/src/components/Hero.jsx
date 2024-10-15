
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "../styles/style.css"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import heroImg01 from "../assets/hero/hero-1.png";
import heroImg02 from "../assets/hero/hero-2.png";

const Hero = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          
           
        >
            <SwiperSlide> <img src={heroImg01} alt='Hero' /> </SwiperSlide>
            <SwiperSlide> <img src={heroImg02} alt='Hero' /> </SwiperSlide>
            <SwiperSlide> <img src={heroImg01} alt='Hero' /> </SwiperSlide>
            <SwiperSlide> <img src={heroImg02} alt='Hero' /> </SwiperSlide>
           
        </Swiper>
    );
};

export default Hero;