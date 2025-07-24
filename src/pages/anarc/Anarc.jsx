import React from "react";
import AnimatedContent from "../../animations/AnimatedContent";
import BlurText from "../../animations/BlurText";
import SpotlightCard from "../../animations/SpotlightCard";
import { Autoplay } from "swiper/modules";
import ShinyText from "../../animations/ShineText";
import { Link } from "react-router-dom";
import MainSpecsSlide from "./section 4/MainSpecsSlide";
import Display from "./detailed_specs/Display";
import PerformanceSection from "./detailed_specs/PerformanceSection";

const Anarc = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden pb-12 text-black">
      {/* section 1 - hero */}
      <section className="hero flex flex-col justify-center items-center h-fit px-2 py-20">
        <BlurText
          text="Unleashing Chaos — The Anarc"
          delay={250}
          animateBy="words"
          direction="top"
          className="relative pt-8   z-1 text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold font-[aeonic] text-white/90 max-w-6xl"
        />
        <div>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={2.5}
          >
            <img
              src="./anarc/hero.webp"
              className="max-w-[90vw] lg:-translate-y-10 object-contain pt-8 lg:pt-0"
              alt="hero image"
              draggable="false"
            />
          </AnimatedContent>
        </div>
      </section>
      {/* video showcase */}
      <section className="video-showcase py-10 h-fit min-h-[80vh] flex flex-col lg:flex-row items-center overflow-hidden">
        <div className="w-full lg:w-[60%] flex justify-center items-center">
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={1.5}
          >
            <video
              className="object-cover w-full max-w-none scale-90 lg:scale-75 rounded-4xl"
              src="./videos/Anarc1.webm"
              autoPlay
              muted
              loop
            />
          </AnimatedContent>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <BlurText
            delay={300}
            animateBy="words"
            direction="top"
            text="Designed to be different ."
            className="w-full p-8 md:p-12 lg:p-16 text-4xl md:text-7xl lg:text-7xl xl:text-8xl leading-tight z-1 text-center font-bold font-[aeonic] text-white/90 max-w-4xl"
          />
        </div>
      </section>
      {/* section 3 buy */}

      <section className="buy min-h-[80vh]  flex flex-col justify-evenly items-center">
        <ShinyText
          disabled={false}
          speed={5}
          className="px-6 font-[aeonic] text-5xl pb-8 md:px-8 md:text-6xl  font-black text-center"
          text="Are you ready to be an agent of chaos?"
        />

        <div className="wrapper flex flex-col lg:flex-row justify-evenly items-center gap-8 lg:gap-0">
          <SpotlightCard
            className="custom-spotlight-card flex flex-col bg-neutral-900/60 w-[90%] md:w-[75%] lg:w-[25%] "
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img
              src="./anarc/watch1.webp"
              alt="watch green"
              className=" translate-x-2.5"
            />
            <h3 className="text-white/50 text-3xl font-bold font-[aeonic] text-center">
              Earthy Urban
            </h3>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[90%] flex flex-col md:w-[75%] lg:w-[25%]  bg-neutral-900/30 "
            spotlightColor="rgba(255, 225, 255, 0.2)"
          >
            <img
              src="./anarc/watch2.web["
              alt="watch green"
              className="scale-115"
              draggable="false"
            />

            <h3 className="text-white/20 text-3xl font-bold font-[aeonic] text-center">
              Dark Brilliance
            </h3>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card w-[93%] md:w-[80%] flex flex-col lg:w-[25%]  bg-neutral-900/60 scale-95"
            spotlightColor="rgba(195, 167, 41, 0.4)"
          >
            <img
              src="./anarc/watch3.webp"
              alt="watch green"
              className="scale-84 "
              draggable="false"
            />
            <h3 className="text-white/70 text-3xl font-bold font-[aeonic] text-center">
              Frost Blaze
            </h3>
          </SpotlightCard>
        </div>
        <Link to="/anarc/buy">
          <button className="group relative px-10 py-4 bg-white/10 rounded-xl border-1 mt-6 border-white/50 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 active:duration-75">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <ShinyText
                text="Buy Now"
                speed={3}
                className="text-xl font-thin  font-[aeonic] text-white"
              />
            </div>
          </button>
        </Link>
      </section>

      {/* section 4  main product specs */}
      <MainSpecsSlide />

      {/* section 5 display */}
      <Display />
      {/* section 6 Performance Section */}
      <PerformanceSection />
    </div>
  );
};

export default Anarc;
