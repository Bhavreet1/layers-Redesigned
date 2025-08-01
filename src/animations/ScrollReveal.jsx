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

    const scroller = scrollContainerRef?.current || document.body;

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    if (window.lenis) {
      window.lenis.on('scroll', updateScrollTrigger);
    }

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true,
    });

    // Animate rotation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    // Animate opacity
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity },
      {
        opacity: 1,
        ease: 'none',
        stagger: wordStagger,
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: 'top bottom-=10%',
          end: wordAnimationEnd,
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      }
    );

    // Animate blur if enabled
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: 'blur(0px)',
          ease: 'none',
          stagger: wordStagger,
          scrollTrigger: {
            trigger: el,
            scroller: scroller,
            start: 'top bottom-=10%',
            end: wordAnimationEnd,
            scrub: 1,
            invalidateOnRefresh: true,
            refreshPriority: -1,
          },
        }
      );
    }

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', updateScrollTrigger);
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    wordStagger,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
