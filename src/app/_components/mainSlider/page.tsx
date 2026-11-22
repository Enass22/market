"use client";
import React from "react";
import Image from "next/image";
import hiImage from "../../../../public/image/hi.jpg.jpeg";
import twoImage from "../../../../public/image/two.jpg.jpeg";
import thereImage from "../../../../public/image/there.jpg.jpeg";
import fourImage from "../../../../public/image/four.jpg.jpeg";
import eightImage from "../../../../public/image/eight.jpg.jpeg";
import sixImage from "../../../../public/image/six.jpg.jpeg";
import sevenImage from "../../../../public/image/seven.jpg.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function MainSlider() {
  return (
    <>
      <div className="w-[90%] mx-auto flex items-center  my-5">
        <div className="w-3/4 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <Image
                src={sevenImage}
                alt="image"
                className="w-full h-[400px]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={thereImage}
                alt="image"
                className="w-full h-[400px]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={fourImage}
                alt="image"
                className="w-full h-[400px]  rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/4 ">
          <Image
            src={sixImage}
            alt="image"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <Image
            src={eightImage}
            alt="image"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
