import React from "react";
import BlurText from "../../animations/BlurText";
import FadeContent from "../../animations/FadeContent";
import { motion } from "framer-motion";

const boxItems = [
  "Premium quality materials",
  "Handcrafted with care",
  "Eco-friendly packaging",
  "Lifetime warranty",
];

const BoxContent = () => {
  return (
    <section className="min-h-screen w-full bg-white font-[aeonic] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="overflow-hidden">
            <BlurText
              text="What's Inside?"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
            Every package is carefully curated with attention to detail and
            quality.
          </p>

          <ul className="space-y-6 mt-12">
            {boxItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center group"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <FadeContent className="w-full h-full">
          <div className="relative aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="./anarc/content_inside_box.webp"
                alt="Premium box content"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -inset-4 border border-gray-200 rounded-2xl pointer-events-none" />
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default BoxContent;
