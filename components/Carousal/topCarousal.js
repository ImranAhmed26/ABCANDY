import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y } from "swiper";

import Image01 from "../../public/assets/Images/image01.png";
import Image02 from "../../public/assets/Images/image02.png";
import Image03 from "../../public/assets/Images/image03.png";

// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MainCarousalCard from "../common/mainCarousalCard";

export default function App() {
  return (
    <>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardConstant.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <MainCarousalCard
                title={item.title}
                date={item.date}
                category={item.category}
                image={item.image}
                text={item.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const cardConstant = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "10 June 2023",
    category: "DESIGN AND CREATIVE",
    image: Image02,
    text: "  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis  volutpat est...",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "10 June 2023",
    category: "DESIGN AND CREATIVE",
    image: Image01,
    text: "  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis  volutpat est...",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "10 June 2023",
    category: "DESIGN AND CREATIVE",
    image: Image03,
    text: "  Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis  volutpat est...",
  },
];
