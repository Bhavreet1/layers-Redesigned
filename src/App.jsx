import { useState } from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Preloader from "./pages/home/preLoader/Preloader";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(false);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <div>
      <NavBar />
      <div className="mt-20">
        <MainRoutes />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
