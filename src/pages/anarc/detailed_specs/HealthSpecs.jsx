import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const healthImages = [
  '/anarc/health/1_986fecbd-e97c-4ebe-8be6-102312f2369d.png',
  '/anarc/health/Activity_ring_CARD3.png',
  '/anarc/health/Breathe.png',
  '/anarc/health/Sp02_3.png',
  '/anarc/health/Step_CARD2.png',
];

const HealthSpecs = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 font-[aeonic]">
          Health
        </h2>
        
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-full"
            breakpoints={{
              640: {
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
            {healthImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img
                    src={image}
                    alt={`Health feature ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="autoplay-progress absolute right-4 bottom-4 z-10 flex items-center justify-center w-12 h-12 font-bold text-xs text-white">
            <svg viewBox="0 0 48 48" ref={progressCircle} className="absolute w-full h-full">
              <circle 
                cx="24" 
                cy="24" 
                r="20" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="4"
              />
              <circle 
                cx="24" 
                cy="24" 
                r="20" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="4"
                strokeDasharray="125.664"
                strokeDashoffset="calc(125.664 * (1 - var(--progress, 0)))"
                strokeLinecap="round"
                className="transition-stroke-dashoffset duration-100 ease-linear"
              />
            </svg>
            <span ref={progressContent} className="relative">5s</span>
          </div>
        </div>
        
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(0, 0, 0, 0.2);
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #1e40af;
            width: 30px;
            border-radius: 5px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #1e40af;
            padding: 20px;
          }
          .swiper-slide {
            padding: 20px 0;
          }
          .autoplay-progress {
            background: rgba(30, 64, 175, 0.8);
            border-radius: 50%;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HealthSpecs;