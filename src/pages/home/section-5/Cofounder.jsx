import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Cofounder = memo(() => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Simplified parallax transforms for better performance
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={containerRef}
      className="co-founder bg-white flex flex-col py-12 lg:py-2 lg:flex-row w-full max-w-full overflow-hidden min-h-screen"
    >
      <motion.div
        className="left w-full lg:w-1/2 h-full lg:h-full p-4 sm:p-8 lg:p-20 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ y: leftY }}
      >
        <motion.div
          className="founders-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            draggable={false}
            src="./founders_2.webp"
            className="inverted-radius object-cover w-full h-full"
            alt="co-founders"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="right w-full lg:w-1/2 h-fit lg:h-full p-4 sm:p-8 lg:p-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ y: rightY }}
      >
        <div className="inverted-radius w-full h-full p-6 sm:p-8 lg:p-12 bg-[#2a5ddb] rounded-4xl">
          <motion.h2
            className="text-2xl pt-2 sm:text-3xl lg:text-4xl text-white tracking-wider font-[zumme] font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place.
          </motion.h2>
          <br />
          <motion.h3
            className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-[aeonic]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness.
            <br />
            <br />
            Chaos unsettles those who can't deal with it. We chase it.
          </motion.h3>
          <br />
          <br />
          <motion.h3
            className="font-[league] w-fit py-2 px-4 text-white text-base sm:text-lg lg:text-xl tracking-wider rounded-2xl bg-blue-900"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(30 58 138)",
              transition: { duration: 0.3 },
            }}
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
});

Cofounder.displayName = "Cofounder";

export default Cofounder;
