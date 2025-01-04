
"use client"; 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional styles
import "swiper/css/pagination"; // Optional styles
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

import img1 from '../../public/hook.png'
import img2 from '../../public/nextjs.png'
import img3 from '../../public/setup.png'


const Carousel = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Slides visible at a time
        navigation // Show navigation arrows
        pagination={{ clickable: true }} // Enable pagination
      >
        {/* Add slides */}
        <SwiperSlide>
          <Image
            src={img1}
            alt="Slide 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-center transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img2}
            alt="Slide 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-center transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img3}
            alt="Slide 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-center transition-transform duration-300 hover:scale-110"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
