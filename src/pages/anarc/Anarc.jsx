import React from "react";
import AnimatedContent from "../../animations/AnimatedContent";
import BlurText from "../../animations/BlurText";

const Anarc = () => {
  return (
    <div className="bg-black min-h-screen pb-12 text-black">
      {/* section 1 - hero */}
      <section className="hero flex flex-col justify-center items-center h-screen">
        <BlurText
          text="Unleashing Chaos — The Anarc"
          delay={250}
          animateBy="words"
          direction="top"
          className="relative pt-8 px-4 -top-[2rem] lg:top-[20%] z-1 text-7xl  text-center font-bold font-[aeonic] text-white/90"
        />
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
            className="h-full scale-90 pt-20 lg:pt-0 object-cover w-full"
            alt="hero image"
            draggable="false"
          />
        </AnimatedContent>
      </section>
      <section className="video-showcase  min-h-[80vh]  flex flex-col lg:flex-row  items-center">
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
          delay={2.5}
        >
        <video className="object-cover lg:-translate-x-[2rem] w-[100%] lg:w-[60%] scale-90 lg:scale-75  rounded-4xl " src="./videos/Anarc1.webm" autoPlay  muted loop></video>
        </AnimatedContent>
        <BlurText
         delay={300}
         animateBy="words"
         direction="top"
        text="Designed to be different ."
        className="w-full p-[8vw] pl-[5vw] text-[18vw] leading-[20vw] lg:leading-[12vh] lg:w-1/2 z-1   lg:text-[5vw]  text-center font-bold font-[aeonic] text-white/90"
        />
      </section> 
    </div>
  );
};

export default Anarc;
