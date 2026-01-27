"use client";
import React from "react";
import brandShape from "../../../public/assets/imgs/brand/shape/brand-shape-01.png";
//swiper
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import brand_data from "@/data/brand-data";
import Image from "next/image";

const BrandSection = () => {
  return (
    <>
      {/* -- brand area start -- */}

      <div className="brand__area brand-space p-relative">
        <div
          className="counter__bg include-bg is-bg-none"
          style={{ backgroundImage: `url(${brandShape.src})` }}
        ></div>
        <div
          className="brand__wrapper style-two wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="swiper brand__active">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                roundLengths={true}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {brand_data.slice(12, 20).map((item: any) => (
                  <SwiperSlide key={item.id}>
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <Image src={item.image} alt="image not found" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* -- brand area end -- */}
    </>
  );
};

export default BrandSection;
