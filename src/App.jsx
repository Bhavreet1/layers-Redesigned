import { useState } from "react";
import "./app.css";
import "./performance.css";
import NavBar from "./components/NavBar";
import Preloader from "./pages/preLoader/Preloader";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: true,
      }}
    >
      <NavBar />
      <div className="relative z-10">
        <MainRoutes />
      </div>
      <div className="h-screen" />
      <Footer />
    </ReactLenis>
  );
};

export default App;
