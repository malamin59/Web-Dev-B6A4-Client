"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ReviewData from "./ReviewData";

interface ReviewSliderProps {
  reviews: any[];
}

export default function ReviewSlider({
  reviews,
}: ReviewSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={800}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={24}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewData review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}