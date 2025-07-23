import { useRef, useMemo } from "react";
import { useScroll, motion, useInView, useTransform } from "motion/react";
import { Link } from "react-router-dom";

const Section3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Single useInView for the entire section to reduce re-renders
  const sectionInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  // Product data with route mapping
  const products = [
    {
      id: 1,
      title: "Mobile Skins",
      description: "Premium protection with style for your mobile devices",
      img: "/products/mobile1.webp",
      features: ["Precision Cut", "Bubble-Free", "Residue-Free Removal"],
      alignment: "right",
      route: "/skins/mobile",
    },
    {
      id: 2,
      title: "Laptop Skins",
      description: "Transform your laptop with our premium vinyl skins",
      img: "/products/laptop1.webp",
      features: ["Durable Material", "Easy Application", "Custom Designs"],
      alignment: "left",
      route: "/skins/laptop",
    },
    {
      id: 3,
      title: "iPad Skins",
      description: "Sleek protection for your iPad with stunning designs",
      img: "/products/ipad1.webp",
      features: [
        "Perfect Fit",
        "Anti-Fingerprint",
        "Wireless Charging Compatible",
      ],
      alignment: "right",
      route: "/skins/ipad",
    },
    {
      id: 4,
      title: "Anarc Skins",
      description: "Exclusive designs for the modern tech enthusiast",
      img: "/products/anarc1.webp",
      features: ["Limited Edition", "Artist Collaboration", "Premium Finish"],
      alignment: "left",
      route: "/skins/anarc",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving Triangles */}
        <motion.div
          className="absolute top-20 left-10 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-blue-200/40"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute top-1/3 right-20 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-blue-300/30"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-400/25"
          animate={{
            rotate: [180, 540],
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-blue-200/50 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            borderColor: [
              "rgba(147, 197, 253, 0.5)",
              "rgba(59, 130, 246, 0.7)",
              "rgba(147, 197, 253, 0.5)",
            ],
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/3 w-12 h-12 bg-blue-100/60 rounded-full"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.4, 1],
            backgroundColor: [
              "rgba(219, 234, 254, 0.6)",
              "rgba(147, 197, 253, 0.8)",
              "rgba(219, 234, 254, 0.6)",
            ],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            backgroundColor: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Morphing Squares */}
        <motion.div
          className="absolute top-40 right-1/4 w-10 h-10 bg-blue-200/40 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["8px", "50%", "8px", "50%", "8px"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Floating Particles - Reduced and Optimized */}
        {useMemo(
          () =>
            [...Array(40)].map((_, i) => {
              const left = 20 + i * 20;
              const top = 30 + i * 15;
              const xMovement = i % 2 === 0 ? 15 : -15;

              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, xMovement, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: "easeInOut",
                  }}
                />
              );
            }),
          []
        )}

        {/* Hexagon */}
        <motion.div
          className="absolute top-3/4 left-20 w-14 h-14 border border-blue-300/40"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* Background Stars - More Visible */}
        {useMemo(
          () =>
            [...Array(25)].map((_, i) => {
              const left = (i % 5) * 20 + Math.random() * 15; // Grid distribution
              const top = Math.floor(i / 5) * 20 + Math.random() * 15;
              const size = Math.random() * 4 + 3; // 3-7px (much larger)
              const delay = Math.random() * 3;
              const duration = 2 + Math.random() * 2; // 2-4s (faster)

              return (
                <motion.div
                  key={`star-${i}`}
                  className="absolute bg-blue-500/80 rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: `0 0 ${size * 3}px rgba(59, 130, 246, 0.5)`,
                    filter: "brightness(1.2)",
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  }}
                />
              );
            }),
          []
        )}

        {/* Floating Particles - Highly Visible */}
        {useMemo(
          () =>
            [...Array(15)].map((_, i) => {
              const left = (i % 5) * 20 + Math.random() * 15;
              const top = Math.floor(i / 5) * 33 + Math.random() * 25;
              const delay = Math.random() * 2;

              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-4 h-4 bg-blue-400/70 rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
                    filter: "brightness(1.3)",
                  }}
                  animate={{
                    y: [0, -50, 0],
                    x: [0, Math.sin(i) * 25, 0],
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.6, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  }}
                />
              );
            }),
          []
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {products.map((product, index) => {
          // Use the section's inView state instead of individual ones
          const productRef = useRef(null);
          const isInView = sectionInView;

          return (
            <motion.div
              key={product.id}
              ref={productRef}
              className={`flex flex-col lg:flex-row items-center justify-between min-h-[33vh] py-16 ${
                product.alignment === "left" ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Text Content */}
              <motion.div
                className={`w-full lg:w-1/2 ${
                  product.alignment === "right" ? "lg:pr-12" : "lg:pl-12"
                }`}
                initial={{
                  opacity: 0,
                  x: product.alignment === "right" ? -50 : 50,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : {
                        opacity: 0,
                        x: product.alignment === "right" ? -50 : 50,
                      }
                }
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              >
                <motion.h3
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-[Zumme]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed font-[aeonic]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {product.description}
                </motion.p>

                {/* Features List */}
                <motion.div
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                >
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.8 + featureIndex * 0.1,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          backgroundColor: ["#3b82f6", "#1d4ed8", "#3b82f6"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: featureIndex * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-gray-700 font-[aeonic]">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={product.route}
                    className="group relative button overflow-hidden inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Explore {product.title}</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Container */}
              <motion.div
                className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${
                  product.alignment === "right" ? "lg:pl-12" : "lg:pr-12"
                }`}
                initial={{
                  opacity: 0,
                  x: product.alignment === "right" ? 50 : -50,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : {
                        opacity: 0,
                        x: product.alignment === "right" ? 50 : -50,
                      }
                }
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <div className="relative group">
                  {/* Decorative Background */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl opacity-50"
                    animate={{
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Glowing Border */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-30 blur-sm"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Image Placeholder */}
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Actual Image */}
                    {product.img ? (
                      <img
                        src={product.img}
                        alt={`${product.title} image`}
                        className="w-full h-full object-cover z-10"
                        onError={(e) => {
                          console.log(`Failed to load image: ${product.img}`);
                          e.target.style.display = "none";
                        }}
                      />
                    ) : null}

                    {/* Placeholder Content - Always Visible for Demo */}
                    <div className="placeholder-content absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                      <motion.div
                        className="text-center"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className="w-20 h-20 mx-auto mb-4 bg-blue-200 rounded-lg flex items-center justify-center"
                          animate={{
                            scale: [1, 1.1, 1],
                            backgroundColor: ["#dbeafe", "#bfdbfe", "#dbeafe"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </motion.div>
                        <p className="text-blue-600 font-semibold text-lg">
                          {product.title}
                        </p>
                        <p className="text-blue-500 text-sm mt-2">
                          Premium Quality Image
                        </p>
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-blue-400 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-blue-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-blue-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-blue-400 rounded-br-lg"></div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Divider */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]),
        }}
      />
    </section>
  );
};

export default Section3;
