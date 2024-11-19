import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Navigate Your Career with Confidence</h1>
                <p className="mb-5">
                Empower your future with Career Compass – your ultimate guide to career growth. 
        Explore expert advice, personalized insights, and tools to unlock your potential 
        and achieve your dreams.
                </p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Navigate Your Career with Confidence</h1>
                <p className="mb-5">
                Empower your future with Career Compass – your ultimate guide to career growth. 
        Explore expert advice, personalized insights, and tools to unlock your potential 
        and achieve your dreams.
                </p>
              
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Navigate Your Career with Confidence</h1>
                <p className="mb-5">
                Empower your future with Career Compass – your ultimate guide to career growth. 
        Explore expert advice, personalized insights, and tools to unlock your potential 
        and achieve your dreams.
                </p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
