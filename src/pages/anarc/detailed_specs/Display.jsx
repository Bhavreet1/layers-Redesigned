import React from "react";
import AnimatedContent from "../../../animations/AnimatedContent";

const Display = () => {
  return (
    <section className="min-h-screen bg-[#F3F1ED] py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.1}
          delay={0.2}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-extralight text-gray-900 mb-8 tracking-tight">
              Display
            </h2>
            <p className="text-xl text-gray-500 max-w-lg mx-auto">
              AMOLED brilliance meets 60Hz fluidity
            </p>
          </div>
        </AnimatedContent>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* AMOLED Display Video */}
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={0.5}
          >
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-700 shadow-xl">
                <div className="bg-[#F3F1ED] m-4 rounded-2xl">
                  <video
                    src="./videos/watch3.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[400px] object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
                  AMOLED
                </h3>
                <p className="text-gray-600 text-base max-w-sm mx-auto">
                  True blacks, infinite contrast, and vibrant colors that pop in any light
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* 60Hz Refresh Rate Video */}
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={0.7}
          >
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-700 shadow-xl">
                <div className="bg-[#F3F1ED] m-4 rounded-2xl">
                  <video
                    src="./videos/watch2.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[400px] object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
                  60Hz Refresh
                </h3>
                <p className="text-gray-600 text-base max-w-sm mx-auto">
                  Buttery smooth scrolling and instant touch response for seamless interaction
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Bottom Feature Highlight */}
        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={true}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.1}
          delay={1}
        >
          <div className="text-center mt-24">
            <div className="inline-flex scale-110 shadow-2xl items-center space-x-3 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-700 text-xl font-light tracking-wide">
                 Always-On Ready
              </span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Display;