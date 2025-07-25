import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = window.lenis;

    // Step 1: Kill previous scroll triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Step 2: Scroll to top
    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // Step 3: Delay before restarting Lenis and refreshing animations
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true); // Full refresh
      lenis?.start?.();
    }, 100); // Use 100ms to ensure all new elements are mounted

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
