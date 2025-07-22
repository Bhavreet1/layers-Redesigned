import { useState } from "react";
import "./app.css";
import "./performance.css";
import NavBar from "./components/NavBar";
import Preloader from "./pages/home/preLoader/Preloader";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from "lenis/react";
const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const [showPreloader, setShowPreloader] = useState(false);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <div>
      <ReactLenis root />
      <NavBar />
      <div className="relative z-10">
        <MainRoutes />
      </div>
      {/* Spacer div to push footer below main content */}
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default App;
