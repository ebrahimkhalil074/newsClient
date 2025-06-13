 
 
/* eslint-disable @next/next/no-img-element */
 
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade,Pagination, Autoplay } from "swiper/modules";

export default function Slider2() {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
  ];

  return (
    <div className="w-full max-w-sm mx-auto relative z-10">
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="rounded overflow-hidden"
        effect="fade"
        modules={[EffectFade,  Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              alt={`Slide ${idx + 1}`}
              className="w-full h-56 md:h-64 lg:h-72 object-cover rounded"
              src={src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
