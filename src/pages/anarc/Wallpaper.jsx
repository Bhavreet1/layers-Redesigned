import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "../../animations/BlurText";

// Array of wallpaper image paths
const wallpapers = [
  "/anarc/wallpaper/watchface_1.png",
  "/anarc/wallpaper/watchface_2_1.png",
  "/anarc/wallpaper/watchface_3_1.png",
  "/anarc/wallpaper/watchface_4_1.png",
  "/anarc/wallpaper/watchface_5_1.png",
  "/anarc/wallpaper/watchface_7_1.png",
  "/anarc/wallpaper/watchface_8_1.png",
  "/anarc/wallpaper/watchface_9_1.png",
  "/anarc/wallpaper/watchface_10_1.png",
  "/anarc/wallpaper/watchface_11_1.png",
  "/anarc/wallpaper/watchface_12_1.png",
];

const Wallpaper = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full flex flex-col justify-center items-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <BlurText text="Static. Dynamic. Analogue." delay={500} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"/>
                
              
              {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Analogue.
              </h1> */}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Your Watchface Says It All
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Express in 150+ styles
              </p>
            </div>
          </div>

          {/* Right side - Wallpaper grid */}
          <div className="w-full ">
            <div className="grid grid-cols-4 gap-3 md:gap-8">
              {wallpapers.slice(0, 12).map((wallpaper, index) => (
                <motion.div
                  key={index}
                  className="relative  overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(wallpaper)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={wallpaper}
                    alt={`Watchface ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show more button */}
            <div className="text-center mt-8">
              <button className="px-8 cursor-pointer py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                View All 150+ Styles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src={selectedImage}
                  alt="Enlarged watchface"
                  className="w-full max-h-[70vh] object-contain rounded-2xl"
                />

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Watchface Preview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Available on Anarc smartwatch
                  </p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>

              <button
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Wallpaper;
