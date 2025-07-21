// hero carousel

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "motion/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Mobile (320px and up)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Small tablets (480px and up)
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Tablets (768px and up)
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          // Small laptops (1024px and up)
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          // Large screens (1200px and up)
          1200: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          // Extra large screens (1400px and up)
          1400: {
            slidesPerView: 1.2,
            spaceBetween: 35,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="hero-swiper custom-cursor-swiper"
      >
        <SwiperSlide className="border-2 border-blue-600">
          <motion.img
            initial={{ opacity: 0,borderRadius:100,scale:.7 }}
            animate={{ opacity: 1,borderRadius:20,scale:1 }}
            transition={{
              duration: .7,
              ease: [0.25, 0.1, 0.25, 1]
             }}

            src="./heroCarousel/ANARC.png"
            alt="image mobile skin"
            className="carousel-image2 slide-large  "
          />
        </SwiperSlide>
        <SwiperSlide className="border-2 border-blue-600  shadow">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: .7,
              ease: [0.25, 0.1, 0.25, 1]
             }}
            src="./heroCarousel/desktop_banner__May_designs.png"
            alt="image anarc"
            className="carousel-image carousel-image2 slide-large"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./heroCarousel/Desktop_iPad_Skins_banner.png"
            alt="image ipad skin"
            className="carousel-image carousel-image3 slide-large"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./heroCarousel/Desktop_Laptop_Skins_banner.webp"
            alt="image laptop skin"
            className="carousel-image carousel-image4 slide-large"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
