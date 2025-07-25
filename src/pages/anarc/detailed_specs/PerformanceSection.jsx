import React, { useState, useEffect } from "react";
import AnimatedContent from "../../../animations/AnimatedContent";
const PerformanceSection = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [chipsetLoaded, setChipsetLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const bgImg = new Image();
    bgImg.onload = () => setBackgroundLoaded(true);
    bgImg.src = "./anarc/bg3.webp";

    // Preload chipset image
    const chipsetImg = new Image();
    chipsetImg.onload = () => setChipsetLoaded(true);
    chipsetImg.src = "/anarc/Layers_Chipset.webp";
  }, []);

  return (
    <section
      className={`w-full min-h-screen relative transition-opacity duration-500 ${
        backgroundLoaded ? "opacity-100" : "opacity-90"
      }`}
      style={{
        backgroundImage: backgroundLoaded ? "url('./anarc/bg3.webp')" : "none",
        backgroundColor: backgroundLoaded ? "transparent" : "#1a1a1a",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-14 min-h-screen relative">
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
          <h1 className="text-4xl md:text-6xl lg:text-[8rem] font-bold font-[aeonic] text-white text-center mb-8 md:mb-16">
            Performance
          </h1>
        </AnimatedContent>

        {/* Desktop Layout - Hidden on mobile and tablet */}
        <div className="hidden xl:block">
          {/* Main Chipset Image - Center with Glassmorphism */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pt-20">
            <AnimatedContent
              distance={40}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              threshold={0.1}
              delay={0.5}
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <img
                  src={
                    chipsetLoaded
                      ? "/anarc/Layers_Chipset.webp"
                      : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  }
                  alt="Performance Chipset"
                  className={`w-80 h-80 object-contain transition-opacity duration-500 ${
                    chipsetLoaded ? "opacity-100" : "opacity-50"
                  }`}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </AnimatedContent>
          </div>

          {/* Left Side Text Cards */}
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
            delay={1}
          >
            <div className="absolute top-1/3 left-12 transform -translate-y-1/2">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 max-w-xs text-center shadow-xl text-white text-lg font-semibold">
                <span className="text-2xl text-white/60 mr-2">&ldquo;</span>
                Smooth, lag-free navigation
                <span className="text-2xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </div>
          </AnimatedContent>

          <div className="absolute bottom-1/3 left-28 transform translate-y-1/2">
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
              delay={1.5}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 max-w-xs text-center shadow-xl text-white text-lg font-semibold">
                <span className="text-2xl text-white/60 mr-2">&ldquo;</span>
                Power-efficient and speed
                <span className="text-2xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Side Text Card */}
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
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
              delay={2}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 max-w-xs text-center shadow-xl text-white text-lg font-semibold">
                <span className="text-2xl text-white/60 mr-2">&ldquo;</span>
                Reliable tracking that flows as effortlessly as your day
                <span className="text-2xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </AnimatedContent>
          </div>
        </div>

        {/* Tablet Layout - Hidden on mobile and desktop */}
        <div className="hidden md:block xl:hidden">
          {/* Main Chipset Image - Slightly left with Glassmorphism */}
          <AnimatedContent
            distance={40}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.8}
            threshold={0.1}
            delay={0.5}
          >
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-5 pt-12">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                <img
                  src={
                    chipsetLoaded
                      ? "/anarc/Layers_Chipset.webp"
                      : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  }
                  alt="Performance Chipset"
                  className={`w-56 h-56 object-contain transition-opacity duration-500 ${
                    chipsetLoaded ? "opacity-100" : "opacity-50"
                  }`}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedContent>

          {/* Top Left Text Card - moved up */}
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={1}
          >
            <div className="absolute top-1/4 left-4 transform -translate-y-1/2">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 max-w-xs text-center shadow-xl text-white text-base font-semibold">
                <span className="text-xl text-white/60 mr-2">&ldquo;</span>
                Smooth, lag-free navigation
                <span className="text-xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Bottom Left Text Card - moved down by 6-8 */}
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={1.3}
          >
            <div className="absolute bottom-1/4 left-8 transform translate-y-1/2">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 max-w-xs text-center shadow-xl text-white text-base font-semibold">
                <span className="text-xl text-white/60 mr-2">&ldquo;</span>
                Power-efficient and speed
                <span className="text-xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Right Text Card - higher z-index than image */}
          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
            delay={1.6}
          >
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 max-w-xs text-center shadow-xl text-white text-base font-semibold">
                <span className="text-xl text-white/60 mr-2">&ldquo;</span>
                Reliable tracking that flows as effortlessly as your day
                <span className="text-xl text-white/60 ml-2">&rdquo;</span>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Mobile Layout - Stacked vertically */}
        <div className="block md:hidden">
          {/* Main Chipset Image - Center */}
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.8}
            threshold={0.1}
            delay={0.5}
          >
            <div className="flex justify-center mb-8 pt-8">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                <img
                  src={
                    chipsetLoaded
                      ? "/anarc/Layers_Chipset.webp"
                      : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  }
                  alt="Performance Chipset"
                  className={`w-48 h-48 object-contain transition-opacity duration-500 ${
                    chipsetLoaded ? "opacity-100" : "opacity-50"
                  }`}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedContent>

          {/* Text Cards - Stacked vertically */}
          <div className="space-y-6 px-4">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
              delay={1}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 text-center shadow-xl text-white text-sm font-semibold">
                <span className="text-lg text-white/60 mr-2">&ldquo;</span>
                Smooth, lag-free navigation
                <span className="text-lg text-white/60 ml-2">&rdquo;</span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
              delay={1.3}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 text-center shadow-xl text-white text-sm font-semibold">
                <span className="text-lg text-white/60 mr-2">&ldquo;</span>
                Power-efficient and speed
                <span className="text-lg text-white/60 ml-2">&rdquo;</span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
              delay={1.6}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 text-center shadow-xl text-white text-sm font-semibold">
                <span className="text-lg text-white/60 mr-2">&ldquo;</span>
                Reliable tracking that flows as effortlessly as your day
                <span className="text-lg text-white/60 ml-2">&rdquo;</span>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
