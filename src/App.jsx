import { useState, useEffect } from "react";
import "./app.css";
import "./performance.css";
import NavBar from "./components/NavBar";
import Preloader from "./pages/preLoader/Preloader";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { CartProvider } from "./contexts/CartContext";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const updateScroll = (time) => {
      window.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
    };
  }, []);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <CartProvider>
      <ReactLenis
        root
        options={{
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          smoothTouch: true,
        }}
        className="w-screen overflow-hidden"
      >
        <NavBar />
        <div className="relative z-10">
          <MainRoutes />
        </div>
        <div className="h-screen" />
        <Footer />
      </ReactLenis>
    </CartProvider>
  );
};

export default App;
