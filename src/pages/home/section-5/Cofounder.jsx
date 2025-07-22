import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Cofounder = () => {
  const containerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyTimer, setStickyTimer] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    let scrollTimeout;
    let lastScrollTime = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const now = Date.now();
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in the center of viewport
      const isInCenter =
        rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.7;

      if (isInCenter && !isSticky) {
        setIsSticky(true);
        lastScrollTime = now;

        // Clear any existing timer
        if (stickyTimer) clearTimeout(stickyTimer);

        // Set timer to release sticky after 2 seconds
        const timer = setTimeout(() => {
          setIsSticky(false);
        }, 2000);

        setStickyTimer(timer);
      }

      // Prevent rapid scrolling from bypassing the sticky effect
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isSticky && now - lastScrollTime > 2000) {
          setIsSticky(false);
        }
      }, 100);
    };

    // Throttled scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (stickyTimer) clearTimeout(stickyTimer);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isSticky, stickyTimer]);

  // Create slow parallax transforms
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Slow opacity changes
  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.9]
  );
  const rightOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.9]
  );

  return (
    <section
      ref={containerRef}
      className={`co-founder bg-white flex flex-col py-12 lg:py-2 lg:flex-row w-full max-w-full overflow-hidden min-h-screen ${
        isSticky ? "sticky-section" : ""
      }`}
      style={{
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? "0" : "auto",
        zIndex: isSticky ? 10 : "auto",
      }}
    >
      <motion.div
        className="left w-full lg:w-1/2 h-full lg:h-full p-4 sm:p-8 lg:p-20 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          y: leftY,
          opacity: leftOpacity,
        }}
      >
        {/* Small floating particles around the image */}
        <motion.div
          className="floating-element floating-particle"
          style={{
            top: "10%",
            left: "3%",
            animationDelay: "0s",
            y: useTransform(scrollYProgress, [0, 1], [0, -10]),
          }}
        ></motion.div>

        <div
          className="floating-element floating-particle"
          style={{ top: "25%", left: "1%", animationDelay: "2s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "40%", left: "6%", animationDelay: "4s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "60%", left: "2%", animationDelay: "1s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "80%", left: "5%", animationDelay: "3s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "15%", right: "4%", animationDelay: "1.5s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "35%", right: "2%", animationDelay: "3.5s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "55%", right: "7%", animationDelay: "0.5s" }}
        ></div>
        <div
          className="floating-element floating-particle"
          style={{ top: "75%", right: "3%", animationDelay: "2.5s" }}
        ></div>
        {/* Bigger floating elements for visual hierarchy */}
        <div
          className="floating-element floating-ring"
          style={{ top: "5%", left: "8%", animationDelay: "1s" }}
        ></div>
        <div
          className="floating-element floating-square"
          style={{ top: "85%", right: "10%", animationDelay: "2.5s" }}
        ></div>
        <div
          className="floating-element floating-diamond"
          style={{ top: "30%", right: "9%", animationDelay: "4s" }}
        ></div>
        <motion.div
          className="founders-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          style={{ y: imageY }}
        >
          <img
            draggable={false}
            src="./founders_2.webp"
            className="inverted-radius object-cover w-full h-full"
            alt="co-founders"
          />
        </motion.div>
      </motion.div>
      {/* right */}
      <motion.div
        className="right w-full lg:w-1/2 h-fit lg:h-full p-4 sm:p-8 lg:p-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
        }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          y: rightY,
          opacity: rightOpacity,
        }}
      >
        <div className="inverted-radius w-full h-full p-6 sm:p-8 lg:p-12 bg-[#2a5ddb] rounded-4xl ">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider font-[zumme] font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            style={{ y: textY }}
          >
            At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place.
          </motion.h2>
          <br />
          <br />
          <motion.h3
            className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-[aeonic]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -25]) }}
          >
            Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness.
            <br />
            <br />
            Chaos unsettles those who can’t deal with it. We chase it.
          </motion.h3>
          <br />
          <br />
          <motion.h3
            className="font-[league] w-fit py-2 px-4 text-white text-base sm:text-lg lg:text-xl tracking-wider rounded-2xl bg-blue-900"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(30 58 138)",
              transition: { duration: 0.3 },
            }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -15]) }}
          >
            <p className="py-2 sm:py-4 px-2 font-bold text-lg sm:text-xl lg:text-2xl underline underline-offset-4 tracking-widest">
              Neel & Shlok
            </p>
            <span className="text-sm sm:text-base lg:text-lg">
              - Co-founders of Layers
            </span>
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Cofounder;
