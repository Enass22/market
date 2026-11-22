"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { CategoryType } from "@/types/allCategorie.types";

export default function SwiperSlider({ data} : {data: CategoryType} ) {
  const [selectedImage, setselectedImage] = useState(data.imageCover);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center">
          <div className="w-full md:w-1/4">
            <img
              src={selectedImage}
              alt={data.title}
              className="w-full h-auto"
            />
            <Swiper
              spaceBetween={0}
              slidesPerView={4}
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {data.images.map((image) => (
                <SwiperSlide key={image} onClick={() => setselectedImage(image)}>
                  <img src={image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl text-green-600 font-semibold">
              {data.title}
            </h2>
            <p className="my-3">{data.description}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="star-left ">
                <span>{data.price}EGP</span>
              </div>
              <div className="star-right">
                <span className="flex items-center">
                  {data.ratingsAverage}
                  <Star size={16} className="fill-yellow-300 text-yellow-300" />
                </span>
              </div>
            </div>
            <Button className="w-full my-3 bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer hidden group-hover:block">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}