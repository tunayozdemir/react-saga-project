import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css"
import "../Shared/Swiper/Swiper.scss"

const LoginSwiper = () => {
  SwiperCore.use([Pagination, Autoplay]);

  const data = [
    "/images/login.png",
    "/images/login.png",
    "/images/login.png"
  ]

  return <div className="swiper-content">
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      autoplay={{
        "delay": 8000,
        "disableOnInteraction": false

      }}
    >
      {data && data.map((item, key) => {
        return <SwiperSlide key={key}>
          <img src={item} alt="" />
        </SwiperSlide>
      })}

    </Swiper>
  </div>
}

export default LoginSwiper;