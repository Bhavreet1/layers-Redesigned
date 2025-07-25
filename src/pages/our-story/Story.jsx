import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../../animations/ScrollReveal";
import BlurText from "../../animations/BlurText";
import FadeContent from "../../animations/FadeContent";
import AnimatedContent from "../../animations/AnimatedContent";

const StorySection = ({ content, media, reverse = false, index = 0 }) => {
  const ref = useRef(null);

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-16 lg:gap-24 mb-40 lg:mb-48`}
    >
      <div className="w-full lg:w-1/2 relative">
        {/* Decorative element */}
        <div
          className={`absolute -top-8 ${
            reverse ? "-right-8" : "-left-8"
          } w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-xl`}
        ></div>

        <ScrollReveal
          containerClassName="mb-8 relative z-10"
          textClassName="text-gray-800 leading-[1.4] text-lg lg:text-4xl font-medium tracking-wide"
          baseOpacity={0.15}
          baseRotation={1.5}
          blurStrength={2}
          rotationEnd="bottom-=10% bottom"
          wordAnimationEnd="bottom-=5% bottom"
        >
          {content}
        </ScrollReveal>

        {/* Subtle accent line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-8 ${
            reverse ? "ml-auto" : ""
          }`}
        />
      </div>

      <div className="w-full lg:w-1/2 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 60,
            rotateY: reverse ? -15 : 15,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group"
          style={{ perspective: "1000px" }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          {media.type === "image" ? (
            <img
              src={media.src}
              alt={media.alt}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          ) : (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto group-hover:scale-110 transition-transform duration-1000"
            >
              Your browser does not support the video tag.
            </video>
          )}

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
        </motion.div>
      </div>
    </div>
  );
};

const Story = () => {
  const storySection = [
    {
      content:
        "Chaos challenges us to find new inspiration. And rejects the user manual of this-is-how-it-has-always-been-done. Do your own thing, it says. Find your own place.",
      media: {
        type: "image",
        src: "/story/story 1.jpg",
        alt: "Creative chaos and inspiration",
      },
    },
    {
      content:
        "Chaos has its own mess and methods. The source of light-bulbs and bright ideas. Crazy experiments and accidental genius.",
      media: {
        type: "image",
        src: "/story/skins bg.jpg",
        alt: "Creative process and experimentation",
      },
      reverse: true,
    },
  ];

  const storySectionAcarc = [
    {
      content:
        "Anarc Watch challenges conventional timekeeping to find new inspiration. And rejects the user manual of this-is-how-time-has-always-been-measured. Do your own timing, it says. Find your own rhythm.",
      media: {
        type: "image",
        src: "/story/anarc1.1.jpg",
        alt: "Anarc Watch creative timekeeping and inspiration",
      },
    },
    {
      content:
        "Anarc Watch has its own mess and methods of time. The source of revolutionary timepieces and bright chronological ideas. Crazy horological experiments and accidental watchmaking genius.",
      media: {
        type: "image",
        src: "/story/anarc 1.2.jpg",
        alt: "Anarc Watch creative process and experimentation",
      },
      reverse: true,
    },
  ];

  return (
    <>
      <section className="relative bg-white font-[aeonic] min-h-screen py-24 lg:py-40 px-4 sm:px-6 lg:px-8 w-full text-gray-800 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-15 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BlurText
                text="Our Story"
                className="mb-16  text-5xl lg:text-8xl font-bold text-gray-900 tracking-tight"
                delay={300}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-full flex justify-center items-center text-center">
                <BlurText
                  className="text-3xl lg:text-6xl text-gray-600 max-w-5xl mx-auto leading-[1.3] font-light"
                  text="A journey through creative chaos, meaningful innovation, and the beautiful mess of creation."
                  delay={200}
                />
              </div>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "22%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="h-1 bg-blue-600 rounded-full mx-auto mt-16"
            />
          </div>

          <AnimatedContent>
            <section className="pb-20 pt-4 px-4 ">
              <h1 className=" flex justify-center text-center text-5xl lg:text-8xl font-bold text-gray-900 font-[aeonic] py-10 ">
                Layers
                <FadeContent>
                  <span className="bg-clip-text text-transparent bg-[url('/skins/texture2.png')]  bg-cover bg-center">
                    &nbsp;Skin's
                  </span>
                </FadeContent>
              </h1>
              <div className="max-w-6xl bg-white mx-auto">
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl  relative">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/j_18UV939DM?si=G-PQGFbIVUiGH77z"
                      title="Our Story - The Beginning"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 animate-pulse"></div>
                  <div
                    className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg rotate-45 opacity-40 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-35 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </section>
          </AnimatedContent>

          {/* First Story Section - Chaos */}
          <div className="space-y-0">
            {storySection.map((section, index) => (
              <StorySection
                key={`chaos-${index}`}
                content={section.content}
                media={section.media}
                reverse={section.reverse || false}
                index={index}
              />
            ))}
          </div>
        <hr/>
          {/* Anarc Section */}
          <section className="py-14 px-4 my-32">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h1 className=" flex justify-center text-center text-6xl lg:text-8xl font-bold text-blue-600 font-[aeonic] py-10 ">
                  <FadeContent>
                    Anarc Watch
                  </FadeContent>
                </h1>
              </div>

              <div className="relative w-full max-w-5xl mx-auto">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fOwU3Iav72c?si=CdcuPP1lnjzPNuKh" 
                    title="Embracing Creative Chaos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Video frame decoration */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-purple-500 to-pink-500 opacity-30 pointer-events-none"></div>
                </div>

                {/* Chaotic floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-25 animate-pulse"></div>
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg rotate-45 opacity-30 animate-bounce"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-35 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg rotate-12 opacity-25 animate-bounce"
                  style={{
                    animationDuration: "4s",
                    animationDelay: "2s",
                  }}
                ></div>
                <div
                  className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/4 -right-10 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg rotate-45 opacity-25 animate-bounce"
                  style={{
                    animationDuration: "2.5s",
                    animationDelay: "1.5s",
                  }}
                ></div>
              </div>

              {/* Chaos-themed call to action */}
              <div className="text-center mt-20">
                <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-10 py-6 shadow-lg">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">
                    Where Chaos Meets Creation
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Second Story Section - Anarc Watch */}
          <div className="space-y-0">
            {storySectionAcarc.map((section, index) => (
              <StorySection
                key={`anarc-${index}`}
                content={section.content}
                media={section.media}
                reverse={section.reverse || false}
                index={index}
              />
            ))}
          </div>

          {/* Closing Section */}
          <div className="mt-48 text-center relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl opacity-30 blur-xl"></div>

            <div className="relative z-10 py-16">
              <ScrollReveal
                containerClassName="mb-16"
                textClassName="text-3xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight"
                baseOpacity={0.1}
                baseRotation={1}
                blurStrength={3}
                rotationEnd="bottom-=15% bottom"
                wordAnimationEnd="bottom-=10% bottom"
              >
                This is our story. This is our chaos. This is our creation.
              </ScrollReveal>

              <ScrollReveal
                containerClassName="mb-12"
                textClassName="text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
                baseOpacity={0.2}
                baseRotation={0.5}
                blurStrength={2}
                rotationEnd="bottom-=10% bottom"
                wordAnimationEnd="bottom-=5% bottom"
              >
                Where every idea begins with a spark of beautiful disorder, and
                every innovation emerges from the courage to embrace the
                unknown.
              </ScrollReveal>

              {/* Final decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-2 mt-12"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;