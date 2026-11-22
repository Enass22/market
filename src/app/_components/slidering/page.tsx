'use client'
import React from 'react'
import { getAllCategories } from "@/app/api/allCategory.api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


export default function Slidering({ data }) {
  console.log( 'allCategories', data);
  return (
    <>
     

        <Swiper
          spaceBetween={0}
          slidesPerView={7}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((category) => <SwiperSlide>
            <img
              src={category.image}
              alt={category.name}
              className="h-50 w-full"
            />
          </SwiperSlide> )}
          
        </Swiper>
      
    </>
  )
}
