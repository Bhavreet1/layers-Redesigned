import React, { useState, useEffect, useRef } from "react";
import FadeContent from "../../../animations/FadeContent";
import { gsap } from "gsap";

const MainSpecsSlide = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const liquidBgRef = useRef(null);
  const buttonsRef = useRef([]);

  // Specs data array
  const specsData = [
    {
      heading: "Display",
      sideQuote:
        "Bold visuals, deep contrasts – a 1.85″\n AMOLED display with Always-On Display\n that never misses a moment.",
      imageLink: "./anarc/hero.webp",
    },
    {
      heading: "Crown",
      sideQuote:
        "Precision engineered crown\nHaptic feedback technology\nSmooth rotation control",
      imageLink: "./anarc/Crown_2.webp",
    },
    {
      heading: "Strap",
      sideQuote:
        "Premium liquid silicone\nBreathable design\nComfortable all-day wear",
      imageLink: "./anarc/STRAP_2.webp",
    },
  ];

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % specsData.length);
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [specsData.length]);

  const handleTabClick = (index) => {
    setActiveSlide(index);
    animateLiquidBackground(index);
  };

  const animateLiquidBackground = (index) => {
    if (!buttonsRef.current[index] || !liquidBgRef.current) return;

    // Use requestAnimationFrame to ensure DOM is stable
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const button = buttonsRef.current[index];
        const container = button?.parentElement;

        if (!button || !container) return;

        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const x = buttonRect.left - containerRect.left;
        const width = buttonRect.width;

        gsap.to(liquidBgRef.current, {
          x: x,
          width: width,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          transformOrigin: "left center",
        });

        // Add liquid morphing effect with slight delay
        gsap.to(liquidBgRef.current, {
          scaleY: 1.1,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
          delay: 0.1,
        });
      });
    });
  };

  // Initialize liquid background position
  useEffect(() => {
    const initializeLiquidBg = () => {
      if (buttonsRef.current[0] && liquidBgRef.current) {
        const button = buttonsRef.current[0];
        const container = button.parentElement;

        if (!button || !container) return;

        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        gsap.set(liquidBgRef.current, {
          x: buttonRect.left - containerRect.left,
          width: buttonRect.width,
          height: buttonRect.height,
        });
      }
    };

    // Wait for layout to be stable
    setTimeout(initializeLiquidBg, 100);
  }, []);

  // Animate when activeSlide changes (for auto-swipe) with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animateLiquidBackground(activeSlide);
    }, 50); // Small delay to ensure DOM is stable

    return () => clearTimeout(timeoutId);
  }, [activeSlide]);

  return (
    <section className="specs-slide min-h-[85vh] bg-black flex flex-col justify-center items-center py-16 pb-6 lg:py-30">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeContent
              key={`image-${activeSlide}`}
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="relative w-fit max-w-lg bg-transparent rounded-3xl border overflow-hidden shadow-[0_20px_70px_-30px_rgba(255,255,255,0.3)]">
                <img
                  src={specsData[activeSlide].imageLink}
                  alt={specsData[activeSlide].heading}
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeContent>
          </div>

          {/* Text content */}
          <div className="w-full md:pl-30 lg:w-1/2 flex flex-col justify-center">
            <FadeContent
              key={`text-${activeSlide}`}
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="text-6xl lg:text-7xl font-black font-[aeonic] text-white mb-8">
                {specsData[activeSlide].heading}
              </h2>
              <div className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                {specsData[activeSlide].sideQuote
                  .split("\n")
                  .map((line, index) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  ))}
              </div>
            </FadeContent>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="relative flex justify-center mt-20 md:mt-30 gap-4 md:gap-14 ">
          {/* Liquid background */}
          <div
            ref={liquidBgRef}
            className="absolute top-0 left-0 bg-white rounded-full transition-colors duration-300"
            style={{
              height: "100%",
              zIndex: 1,
            }}
          />

          {specsData.map((spec, index) => (
            <button
              key={index}
              ref={(el) => (buttonsRef.current[index] = el)}
              onClick={() => handleTabClick(index)}
              className={`relative hover:cursor-pointer px-5 md:px-8 py-3 rounded-full border-1 font-[aeonic] font-medium transition-all duration-300 ${
                activeSlide === index
                  ? "text-black border-white z-10"
                  : "bg-transparent text-white/70 border-white/30 hover:border-white/60 hover:text-white z-10"
              }`}
            >
              {spec.heading}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSpecsSlide;
