import { useState } from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Preloader from "./pages/home/preLoader/Preloader";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <div>
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
