import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Anarc from "../pages/anarc/Anarc";
import SignInPage from "../pages/Auth/SignInPage";
import SignUpPage from "../pages/Auth/SignUpPage";
import SSOCallback from "../pages/Auth/SSOCallback";
import MobileSkins from "../pages/skins/MobileSkins";
import LaptopSkins from "../pages/skins/LaptopSkins";
import Story from "../pages/our-story/Story";
import AnarcSkins from "../pages/skins/AnarcSkins";
import Accessories from "../pages/Accessories";
import Cart from "../pages/Cart";
import IpadSkins from "../pages/skins/IpadSkins";

// Lazy load components
const Home = lazy(() => import("../pages/home/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const dotsContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
};

const dotStyleBase = {
  height: "20px",
  width: "20px",
  marginRight: "10px",
  borderRadius: "10px",
  backgroundColor: "#b3d4fc",
  animation: "pulse 1.5s infinite ease-in-out",
};

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <style>
      {`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            background-color: #b3d4fc;
            box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
          }
          50% {
            transform: scale(1.2);
            background-color: #6793fb;
            box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
          }
          100% {
            transform: scale(0.8);
            background-color: #b3d4fc;
            box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
          }
        }
        `}
    </style>
    <section style={dotsContainerStyle}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            ...dotStyleBase,
            marginRight: i === 4 ? 0 : "10px",
            animationDelay: `${-0.3 + i * 0.2}s`,
          }}
        />
      ))}
    </section>
  </div>
);

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes className="mt-10">
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<PageNotFound />} />
        <Route path="/anarc" element={<Anarc />} />
        <Route path="/skins/mobile" element={<MobileSkins />} />
        <Route path="/skins/laptop" element={<LaptopSkins />} />
        <Route path="/skins/ipad" element={<IpadSkins />} />
        <Route path="/skins/anarc" element={<AnarcSkins />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in/sso-callback" element={<SSOCallback />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
