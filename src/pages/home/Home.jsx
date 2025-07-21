import React from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import Carousel from "./Carousel/Carousel";
import "./home.css";
import Section3 from "./section-3/Section3";
import Testimonials from "./testimonials/Testimonials";

// Enhanced Video Section Component
const VideoSection = () => {
  const videoSectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(videoSectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={videoSectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-200 via-blue-200 to-slate-300 overflow-hidden rounded-[4rem]"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Morphing blob background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={isInView ? {
            background: [
              "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #1d4ed8 0%, transparent 60%)",
              "radial-gradient(circle at 50% 20%, #2563eb 0%, transparent 40%)",
              "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%)"
            ]
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isInView ? {
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            } : {}}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-600/30 rounded-full"
          animate={isInView ? {
            rotate: 360,
            scale: [1, 1.2, 1],
            borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(29, 78, 216, 0.6)", "rgba(59, 130, 246, 0.3)"]
          } : {}}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-600/20 rounded-lg"
          animate={isInView ? {
            rotate: -360,
            y: [-10, 10, -10],
            backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(29, 78, 216, 0.4)", "rgba(59, 130, 246, 0.2)"]
          } : {}}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            backgroundColor: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-blue-400/50 rotate-45"
          animate={isInView ? {
            rotate: [45, 405],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          } : {}}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* New morphing hexagon */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-blue-500/40"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
          animate={isInView ? {
            rotate: [0, 120, 240, 360],
            scale: [1, 1.4, 0.8, 1],
            opacity: [0.4, 0.8, 0.2, 0.4],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Pulsing rings */}
        <motion.div
          className="absolute bottom-20 right-1/4 w-40 h-40 border border-blue-300/20 rounded-full"
          animate={isInView ? {
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-12 py-12">

        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 font-[Zumme] leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Forged in
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              stainless steel.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg font-[aeonic]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unmatched design and a functional crown with haptics that keeps up with you.
          </motion.p>

          {/* Feature Points */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Fitness, on point.', 'Seamless Performance', 'Infinite Possibilities'].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-black/80 font-[aeonic]">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="group relative px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore More</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Right Video Container */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Video Frame with Blue Accent */}
          <div className="relative">
            {/* Decorative Frame */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-200 rounded-2xl shadow-2xl shadow-blue-900 opacity-75"
              animate={isInView ? {
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1],
              } : {}}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-50 blur-sm"
              animate={isInView ? {
                opacity: [0.3, 0.7, 0.3],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Video Container */}
            <motion.div
              className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                className="w-full h-[300px] lg:h-[400px] xl:h-[600px] object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://cdn.shopify.com/videos/c/o/v/448e536db93240bcbd5697edfacdfa6a.webm"
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />

              {/* Play Button Overlay (decorative) */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600/80 rounded-full flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-blue-400 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-blue-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-blue-400 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-blue-400 rounded-br-lg"></div>
          </div>

          {/* Floating Stats */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-sm font-semibold">HD Quality</div>
            <div className="text-xs opacity-80">700 nits Display</div>
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-sm font-semibold">60 FPS</div>
            <div className="text-xs opacity-80">Smooth Motion</div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

// Layer's Skin Text Reveal Component
const LayersTextReveal = () => {
  const textRevealRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRevealRef,
    offset: ["start end", "end start"],
  });

  // Text to reveal word by word
  const words = ["Layers", "Skin", "Defines", "Premium", "Experience"];

  // Create opacity transforms for each word based on scroll progress - Fixed timing
  const wordOpacities = words.map((_, index) => {
    const start = (index * 0.12) + 0.05; // Better spacing
    const end = start + 0.12; // Adequate reveal duration
    return useTransform(scrollYProgress, [start, end, 1], [0, 1, 1]);
  });

  // Create scale transforms for dramatic effect
  const wordScales = words.map((_, index) => {
    const start = (index * 0.12) + 0.05;
    const end = start + 0.12;
    return useTransform(scrollYProgress, [start, end], [0.5, 1]);
  });

  // Create blur transforms for smooth reveal
  const wordBlurs = words.map((_, index) => {
    const start = (index * 0.12) + 0.05;
    const end = start + 0.12;
    return useTransform(scrollYProgress, [start, end], [10, 0]);
  });

  // Create dynamic glow effect that moves from word to word
  const wordGlows = words.map((_, index) => {
    const start = (index * 0.12) + 0.05;
    const end = start + 0.15;
    const nextStart = ((index + 1) * 0.12) + 0.05;
    return useTransform(
      scrollYProgress,
      [start, end, Math.min(nextStart, 0.8)],
      ["0 0 30px rgba(255,255,255,0.3)", "0 0 60px rgba(59,130,246,0.8)", "0 0 30px rgba(255,255,255,0.3)"]
    );
  });



  return (
    <section
      ref={textRevealRef}
      className="relative w-full h-[300vh] bg-navy-900"
      style={{ backgroundColor: '#1e293b' }} // navy blue background
    >
      {/* Sticky container for text */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Clean Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1d0f51] to-slate-800"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.3, 0.6, 1],
              [
                "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                "linear-gradient(135deg, #1e293b 0%, #1e3a8a 30%, #0f172a 100%)",
                "linear-gradient(135deg, #1e3a8a 0%, #3730a3 40%, #1e293b 100%)",
                "linear-gradient(135deg, #3730a3 0%, #1d4ed8 50%, #1e3a8a 100%)"
              ]
            )
          }}
        />

        {/* Subtle animated overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.3]),
            background: `
              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(147, 197, 253, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 20% 70%, rgba(29, 78, 216, 0.06) 0%, transparent 40%)
            `,
          }}
        />

        {/* Enhanced Floating Background Elements with Particles */}
        <div className="absolute inset-0">
          {/* Floating particles that react to scroll */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Morphing energy waves */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              background: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [
                  "radial-gradient(ellipse at 10% 20%, #3b82f6 0%, transparent 70%)",
                  "radial-gradient(ellipse at 90% 80%, #1d4ed8 0%, transparent 60%)",
                  "radial-gradient(ellipse at 50% 50%, #2563eb 0%, transparent 80%)"
                ]
              )
            }}
          />

          {/* Enhanced Circle with pulsing effect */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              borderColor: ["rgba(255,255,255,0.1)", "rgba(59,130,246,0.3)", "rgba(255,255,255,0.1)"]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              borderColor: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Enhanced Square with morphing */}
          <motion.div
            className="absolute bottom-32 right-32 w-48 h-48 border border-white/5 rounded-lg rotate-45"
            animate={{
              rotate: [45, 405],
              opacity: [0.1, 0.3, 0.1],
              borderRadius: ["8px", "24px", "8px"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Enhanced Octagon with color shifting */}
          <motion.div
            className="absolute top-1/3 right-20 w-40 h-40 border border-white/8"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.4, 0.1],
              borderColor: ["rgba(255,255,255,0.08)", "rgba(59,130,246,0.2)", "rgba(255,255,255,0.08)"]
            }}
            transition={{
              rotate: { duration: 35, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              borderColor: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Enhanced floating square with trail effect */}
          <motion.div
            className="absolute top-1/2 left-10 w-32 h-32 bg-white/5 rounded-lg"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 90, 180, 270, 360],
              backgroundColor: ["rgba(255,255,255,0.05)", "rgba(59,130,246,0.1)", "rgba(255,255,255,0.05)"]
            }}
            transition={{
              y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              backgroundColor: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Enhanced top octagon with breathing effect */}
          <motion.div
            className="absolute top-16 right-1/4 w-24 h-24 border-2 border-white/6"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
            }}
            animate={{
              rotate: [-360, 0],
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 28, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Enhanced small square with complex motion */}
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/3 rounded-md rotate-12"
            animate={{
              rotate: [12, 102, 192, 282, 372],
              scale: [1, 1.2, 1],
              x: [0, 20, -20, 0],
              borderRadius: ["6px", "50%", "6px"],
            }}
            transition={{
              rotate: { duration: 22, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* New diamond shape */}
          <motion.div
            className="absolute top-3/4 right-1/3 w-16 h-16 border border-blue-400/20 rotate-45"
            animate={{
              rotate: [45, 405],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -25, 0],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Floating triangle */}
          <motion.div
            className="absolute top-1/4 left-3/4 w-12 h-12 border border-white/15"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.5, 0.15],
              x: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        {/* Main text container */}
        <div className="relative z-10 text-center px-6">
          {/* Reveal text word by word */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="text-white font-[Zumme] font-bold select-none"
                style={{
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  opacity: wordOpacities[index],
                  scale: wordScales[index],
                  filter: `blur(${wordBlurs[index]}px)`,
                  textShadow: wordGlows[index],
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle that appears after main text */}
          <motion.p
            className="text-white text-lg lg:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
              y: useTransform(scrollYProgress, [0.5, 0.7], [30, 0]),
            }}
          >
            Crafted with precision, designed for perfection. Every detail matters in creating
            the ultimate user experience that transcends ordinary boundaries.
          </motion.p>

          {/* Decorative line that grows */}
          <motion.div
            className="mx-auto mt-12 bg-white/30 rounded-full"
            style={{
              width: useTransform(scrollYProgress, [0.8, 1], ["0%", "60%"]),
              height: "2px",
            }}
          />
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {words.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [index / words.length, (index + 1) / words.length],
                    ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
                  ),
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-16 right-8 text-white/50 text-sm"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]),
          }}
        >
          <div className="flex items-center space-x-2">
            <span>Scroll to reveal</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Product Showcase Section Component


const Home = () => {
  const scrollTriggerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTriggerRef,
    offset: ["start end", "end start"],
  });

  // Responsive transform values with viewport-based units
  // Left div: slides in from left, exits by rotating and scaling down
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["-50vw", "0vw", "0vw", "0vw"]
  );
  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const leftRotate = useTransform(scrollYProgress, [0.5, 0.75], [0, 180]);
  const leftScale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);

  // Right div: slides in from right, exits by moving up and fading
  const rightX = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.5, 0.75],
    ["50vw", "0vw", "0vw", "0vw"]
  );
  const rightY = useTransform(scrollYProgress, [0.5, 0.75], ["0vh", "-50vh"]);
  const rightOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.6, 0.8],
    [0, 1, 1, 0]
  );

  // Center div: fades up, exits by expanding and fading
  const centerY = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 0.75],
    ["20vh", "0vh", "0vh", "0vh"]
  );
  const centerOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const centerScale = useTransform(scrollYProgress, [0.5, 0.75], [1, 2]);

  // Text: fades up, exits by spinning and shrinking
  const textY = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 0.75],
    ["15vh", "0vh", "0vh", "-20vh"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const textScale = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 0.75],
    [0.8, 1, 1, 0.2]
  );
  const textRotate = useTransform(scrollYProgress, [0.5, 0.75], [0, 360]);

  return (
    <div className="home w-full">
      {/* Carousel Section */}
      <Carousel />
      {/* arrow down with scrolling chaos background */}
      <section className="relative flex h-25 mt-6 ">
        {/* Scrolling Chaos Background Text */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <motion.div
            className="text-gray-300 font-[Zumme] font-bold select-none pointer-events-none whitespace-nowrap opacity-20"
            style={{
              fontSize: "clamp(4rem, 12vw, 8rem)",
              lineHeight: "1",
            }}
            animate={{
              x: [0, -2000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Feel the <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span> Feel the{" "}
            <span className="text-blue-600">CHAOS</span>
          </motion.div>
        </div>

        {/* Arrow and text content */}
        <div className="relative z-10 flex justify-center top-30 lg:top-4  left-1/2 ">
          <svg className="arrows ml-4">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
          </svg>
        </div>
      </section>


      {/* Transparent Scroll Trigger - 400vh height for stronger scroll tracking */}
      {/* section 2 */}

      <section
        ref={scrollTriggerRef}
        className="relative w-full h-[400vh] bg-transparent"
      >
        {/* Fixed Anarc Section - Always visible during animation */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center  overflow-hidden">
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[400px]">
            {/* Left div - slides in from left, exits by rotating and scaling down */}
            <motion.div
              className="absolute top-0 left-0 w-[35%] sm:w-[32%] md:w-[30%] h-[16%] sm:h-[28%] md:h-[30%] bg-blue-600 z-10"
              style={{
                x: leftX,
                opacity: leftOpacity,
                rotate: leftRotate,
                scale: leftScale,
              }}
            />

            {/* Center div - fades up, exits by expanding and fading */}
            <motion.div
              className="absolute top-[25%] sm:top-[28%] md:top-[30%] left-[10%] sm:left-[12%] md:left-[15%] h-[50%] sm:h-[44%] md:h-[40%] w-[80%] sm:w-[76%] md:w-[70%] bg-blue-600 z-0"
              style={{
                y: centerY,
                opacity: centerOpacity,
                scale: centerScale,
              }}
            />

            {/* Right div - slides in from right, exits by moving up and fading */}
            <motion.div
              className="absolute bottom-0 right-0 w-[35%] sm:w-[32%] md:w-[30%] h-[16%] sm:h-[28%] md:h-[30%] bg-blue-600 z-10"
              style={{
                x: rightX,
                y: rightY,
                opacity: rightOpacity,
              }}
            />

            {/* Text - fades up, exits by spinning and shrinking */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                y: textY,
                opacity: textOpacity,
                scale: textScale,
                rotate: textRotate,
              }}
            >
              <h2 className="text-white text-6xl sm:text-6xl md:text-7xl lg:text-9xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-bold select-none px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 rounded-lg font-[Zumme] whitespace-nowrap">
                A N A R C
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/*section 2 - Video Section */}
      <div className="p-6">
        <VideoSection />
      </div>

      {/* section - 3 Layer's Skin Text Reveal Section */}
      <LayersTextReveal />
      {/* section - 3 content - Enhanced Product Showcase */}
      <Section3 />

      {/*section 4- testimonals */}
      <Testimonials />

      {/* section - 5 cofounder */}
      <section className="co-founder flex flex-col md:flex-row w-full h-screen">
        <div className="left w-full md:w-1/2 h-full p-3 md:p-20 relative">
          {/* Small floating particles around the image */}
          <div className="floating-element floating-particle" style={{ top: '10%', left: '3%', animationDelay: '0s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '25%', left: '1%', animationDelay: '2s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '40%', left: '6%', animationDelay: '4s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '60%', left: '2%', animationDelay: '1s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '80%', left: '5%', animationDelay: '3s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '15%', right: '4%', animationDelay: '1.5s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '35%', right: '2%', animationDelay: '3.5s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '55%', right: '7%', animationDelay: '0.5s' }}></div>
          <div className="floating-element floating-particle" style={{ top: '75%', right: '3%', animationDelay: '2.5s' }}></div>

          {/* Bigger floating elements for visual hierarchy */}
          <div className="floating-element floating-ring" style={{ top: '5%', left: '8%', animationDelay: '1s' }}></div>
          <div className="floating-element floating-square" style={{ top: '85%', right: '10%', animationDelay: '2.5s' }}></div>
          <div className="floating-element floating-diamond" style={{ top: '30%', right: '9%', animationDelay: '4s' }}></div>

          <div className="founders-image-container">
            <img draggable={false} src="./founders_2.webp" className="inverted-radius  object-cover w-full h-full" alt="co-founders" />
          </div>
        </div>
        <div className="right w-1/2 h-full md:p-20">
          <div className="inverted-radius w-full h-full bg-[#2a5ddb] rounded-4xl ">

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
