import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonials.css";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade } from "swiper";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import AVT1 from "../../assets/victor.jpg";
import AVT2 from "../../assets/vickfrank_selfie.jpg";
import AVT3 from "../../assets/friends.jpg";
import AVT4 from "../../assets/plarafy.jpg";

const data = [
  {
    avatar: AVT1,
    name1: "John Doe",
    review: '"His work is excellent, delivers quality work and always on time"',
  },
  {
    avatar: AVT2,
    name1: "Jane Doe",
    review:
      '"Am looking forward to working with you again. Its been great. Thank you "',
  },
  {
    avatar: AVT3,
    name1: "Vincent Koech",
    review: '" You never disappoint nice work keep it up."',
  },
  {
    avatar: AVT4,
    name1: "Rose Njeri",
    review: '"His work is excellent, delivers quality work and always on time"',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clients that I have worked with</h5>
      <h2>Comments</h2>

      <div className="container testimonials__container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="myswiper"
        >
          ...
          {data.map(({ avatar, name1, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name1}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
