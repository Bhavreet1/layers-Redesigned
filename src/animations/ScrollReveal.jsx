import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom+=200% bottom",
  wordAnimationEnd = "bottom+=300% bottom",
  wordStagger = 0.1
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Function to update ScrollTrigger when Lenis updates
    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    // Listen for Lenis scroll events if Lenis is available
    if (window.lenis) {
      window.lenis.on('scroll', updateScrollTrigger);
    }

    // Configure ScrollTrigger to work with Lenis
    ScrollTrigger.config({
      // Disable ScrollTrigger's default scroll handling since Lenis handles it
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true,
    });

    const scroller = scrollContainerRef?.current || document.body;

    // Slower rotation animation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: 1, // Slightly smoothed scrub for better Lenis integration
          invalidateOnRefresh: true,
          refreshPriority: -1, // Lower priority to avoid conflicts
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    // Slower opacity animation
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: wordStagger,
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: 'top bottom-=10%',
          end: wordAnimationEnd,
          scrub: 1, // Slightly smoothed scrub
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      }
    );

    // Slower blur animation
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: wordStagger,
          scrollTrigger: {
            trigger: el,
            scroller: scroller,
            start: 'top bottom-=10%',
            end: wordAnimationEnd,
            scrub: 1, // Slightly smoothed scrub
            invalidateOnRefresh: true,
            refreshPriority: -1,
          },
        }
      );
    }

    // Cleanup function
    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', updateScrollTrigger);
      }
      
      // Kill only ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, wordStagger]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;