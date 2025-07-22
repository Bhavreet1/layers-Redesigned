import React from "react";
import { motion, useInView } from "motion/react";

const Cofounder = () => {
  return (
    <section className="co-founder bg-white flex flex-col py-12 lg:py-2 lg:flex-row w-full max-w-full  overflow-hidden min-h-screen">
      <motion.div
        className="left w-full lg:w-1/2 h-full lg:h-full p-4  sm:p-8 lg:p-20 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Small floating particles around the image */}
        <div
          className="floating-element floating-particle"
          style={{ top: "10%", left: "3%", animationDelay: "0s" }}
        ></div>
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
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
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
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inverted-radius w-full h-full p-6 sm:p-8 lg:p-12 bg-[#2a5ddb] rounded-4xl ">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider font-[zumme] font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place.
          </motion.h2>
          <br />
          <br />
          <motion.h3
            className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-[aeonic]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "rgb(30 58 138)" }}
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
