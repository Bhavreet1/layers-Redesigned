import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const Testimonials = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Create a tall container to enable scroll-based animation
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start center", "end center"],
  });

  // Horizontal scroll transforms for different screen sizes
  const xMobile = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-890%"]); // Mobile
  const xTablet = useTransform(scrollYProgress, [0.1, 0.9], ["10%", "-465%"]); // Tablet
  const xDesktop = useTransform(scrollYProgress, [0.1, 0.9], ["10%", "-250%"]); // Desktop/Laptop

  // You can adjust these values:
  // Mobile: ["10%", "-200%"]
  // Tablet: ["10%", "-220%"]
  // Desktop: ["10%", "-250%"]

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Small Business Owner",
      company: "TechStart Inc.",
      rating: 5,
      testimonial:
        "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration. The results exceeded our expectations.",
      imageUrl: "./woman.png",
    },
    {
      name: "David Patel",
      title: "Project Manager",
      company: "Innovation Labs",
      rating: 5,
      testimonial:
        "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality. Absolutely game-changing!",
      imageUrl: "./man.png",
    },
    {
      name: "Emily Carter",
      title: "Operations Manager",
      company: "Global Solutions",
      rating: 5,
      testimonial:
        "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
      imageUrl: "./woman.png",
    },
    {
      name: "Michael Chen",
      title: "Creative Director",
      company: "Design Studio",
      rating: 5,
      testimonial:
        "Outstanding quality and attention to detail. The team delivered exactly what we envisioned and more. Highly recommended for any creative project.",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Lisa Rodriguez",
      title: "Marketing Director",
      company: "Brand Builders",
      rating: 5,
      testimonial:
        "Exceptional service and results that speak for themselves. Our engagement rates have increased by 300% since implementing their strategies.",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      title: "Tech Lead",
      company: "Future Systems",
      rating: 5,
      testimonial:
        "The technical expertise and innovative approach impressed our entire development team. They solved complex challenges with elegant solutions.",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anna Thompson",
      title: "CEO",
      company: "StartUp Ventures",
      rating: 5,
      testimonial:
        "From concept to execution, the professionalism and quality of work was outstanding. They helped transform our vision into reality.",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Robert Kim",
      title: "Product Manager",
      company: "Tech Innovations",
      rating: 5,
      testimonial:
        "Incredible attention to user experience and functionality. The final product exceeded all our requirements and user feedback has been phenomenal.",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sophie Martinez",
      title: "UX Designer",
      company: "Creative Agency",
      rating: 5,
      testimonial:
        "The design process was collaborative and insightful. They understood our brand perfectly and delivered designs that truly represent our values.",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Alex Turner",
      title: "Business Analyst",
      company: "Data Insights Co.",
      rating: 5,
      testimonial:
        "The analytical approach and data-driven solutions provided clear ROI. Our decision-making process has become significantly more efficient.",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <div ref={scrollContainerRef} className="relative h-[600vh]  ">
      <section
        ref={containerRef}
        className="sticky top-0 h-screen  bg-gradient-to-t from-slate-900 via-[#0c053c] to-indigo-900 text-white overflow-hidden"
      >
        {/* Enhanced Geometric Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-90">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-white to-transparent"
                style={{ left: `${(i + 1) * 8.33}%` }}
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scaleY: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ top: `${(i + 1) * 12.5}%` }}
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scaleX: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 border-2 border-white/10 rounded-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              borderColor: [
                "rgba(255,255,255,0.1)",
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute top-1/2 right-20 w-32 h-32 border-2 border-white/10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: [0, -360],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="h-screen flex flex-col justify-center z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl lg:text-[6rem] font-bold mb-6 font-[Zumme] bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              What people say
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-[aeonic]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover what our satisfied customers have to say
              <br />
              about their experiences with our products/services.
            </motion.p>
            <motion.div
              className="mt-8 text-blue-200 text-sm font-[aeonic]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              ↓ Scroll to explore testimonials →
            </motion.div>
          </motion.div>

          {/* Horizontal Scrolling Testimonials */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex space-x-8 p-6 will-change-transform"
              style={{
                x:
                  typeof window !== "undefined"
                    ? window.innerWidth < 768
                      ? xMobile
                      : window.innerWidth < 1024
                      ? xTablet
                      : xDesktop
                    : xDesktop,
              }}
            >
              {testimonials.map((testimonial, index) => (
                // <motion.div
                //     key={index}
                //     className="group min-w-[90vw] sm:max-w-[420px] bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all hover:border-white/50"
                //     initial={{ opacity: 0, y: 50 }}
                //     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                //     transition={{
                //         duration: 0.3,

                //         ease: "easeOut"
                //     }}
                //     whileHover={{
                //         scale: 1.03,
                //         y: -15,
                //         transition: { duration: 0.3 }
                //     }}
                // >

                //     {/* Content */}
                //     <div className="relative z-10">
                //         {/* Profile Section */}
                //         <div className="flex items-center mb-6">
                //             <motion.div
                //                 className="relative"
                //                 whileHover={{ scale: 1.1 }}
                //                 transition={{ duration: 0.3 }}
                //             >
                //                 <div className="absolute inset-0 rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300" />
                //                 <img
                //                     src={testimonial.imageUrl}
                //                     alt={`${testimonial.name}'s profile`}
                //                     className="relative w-20 h-20 rounded-full object-cover"
                //                 />
                //             </motion.div>
                //             <div className="ml-6">
                //                 <h3 className="text-2xl text-white mb-1 font-[Zumme] tracking-[.2rem]">
                //                     {testimonial.name}
                //                 </h3>
                //                 <p className="text-blue-200 text-base font-[aeonic] mb-1">
                //                     {testimonial.title}
                //                 </p>
                //                 <p className="text-blue-300 text-sm font-[aeonic] opacity-80">
                //                     {testimonial.company}
                //                 </p>
                //             </div>
                //         </div>

                //         {/* Star Rating */}
                //         <StarRating rating={testimonial.rating} />

                //         {/* Testimonial Text */}
                //         <motion.div
                //             className="relative"
                //             initial={{ opacity: 0 }}
                //             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                //             transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                //         >
                //             <div className="absolute -top-4 -left-2 text-white/20 text-6xl font-serif leading-none">
                //                 "
                //             </div>
                //             <p className="text-blue-50 leading-relaxed font-[aeonic] text-base pl-6 relative z-10">
                //                 {testimonial.testimonial}
                //             </p>
                //             <div className="absolute -bottom-4 -right-2 text-white/20 text-6xl font-serif leading-none rotate-180">
                //                 "
                //             </div>
                //         </motion.div>

                //         {/* Decorative Elements */}
                //         <div className="absolute top-6 right-6 w-8 h-8 border border-white/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                //         <div className="absolute bottom-6 left-6 w-6 h-6 border border-white/20 rotate-45 opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                //     </div>
                // </motion.div>
                <motion.div
                key={index}
                className="group min-w-[90vw] sm:max-w-[420px] sm:min-w-[400px]  bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all hover:border-white/50"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
                whileHover={{
                    scale: 1.03,
                    y: -15,
                    transition: { duration: 0.3 }
                }}
            >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    {/* Profile Section */}
                    <div className="flex items-center mb-4 sm:mb-6 flex-shrink-0">
                        <motion.div
                            className="relative flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300" />
                            <img
                                src={testimonial.imageUrl}
                                alt={`${testimonial.name}'s profile`}
                                className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
                            />
                        </motion.div>
                        <div className="ml-3 sm:ml-4 lg:ml-6 min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl text-white mb-1 font-[Zumme] tracking-[.2rem] truncate">
                                {testimonial.name}
                            </h3>
                            <p className="text-blue-200 text-sm sm:text-base font-[aeonic] mb-1 truncate">
                                {testimonial.title}
                            </p>
                            <p className="text-blue-300 text-xs sm:text-sm font-[aeonic] opacity-80 truncate">
                                {testimonial.company}
                            </p>
                        </div>
                    </div>
            
                    {/* Star Rating */}
                    <div className="mb-4 sm:mb-6 flex-shrink-0">
                        <StarRating rating={testimonial.rating} />
                    </div>
            
                    {/* Testimonial Text */}
                    <motion.div
                        className="relative flex-1 flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    >
                        <div className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-white/20 text-3xl sm:text-5xl lg:text-6xl font-serif leading-none">
                            "
                        </div>
                        <div className="text-blue-50 leading-relaxed font-[aeonic] text-sm sm:text-base pl-3 sm:pl-4 lg:pl-6 pr-3 sm:pr-4 lg:pr-6 relative z-10 flex-1">
                            <p className={`break-words ${testimonial.testimonial.length > 150 ? 'sm:line-clamp-4 md:line-clamp-none' : ''}`}>
                                {testimonial.testimonial}
                            </p>
                            {testimonial.testimonial.length > 150 && (
                                <button className="text-blue-300 hover:text-blue-200 text-xs mt-2 underline sm:inline md:hidden transition-colors duration-200">
                                    Show more...
                                </button>
                            )}
                        </div>
                        <div className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 text-white/20 text-3xl sm:text-5xl lg:text-6xl font-serif leading-none rotate-180">
                            "
                        </div>
                    </motion.div>
            
                    {/* Decorative Elements */}
                    <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-white/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 border border-white/20 rotate-45 opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
            </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
