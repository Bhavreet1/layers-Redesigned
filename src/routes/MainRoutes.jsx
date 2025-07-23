import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Anarc from "../pages/anarc/Anarc";

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
        <Route path="/anarc" element={<Anarc/>} />
        <Route path="/skins/mobile" element={<PageNotFound />} />
        <Route path="/skins/laptop" element={<PageNotFound />} />
        <Route path="/skins/ipad" element={<PageNotFound />} />
        <Route path="/skins/anarc" element={<PageNotFound />} />
        <Route path="/accessories" element={<PageNotFound />} />
        <Route path="/our-story" element={<PageNotFound />} />
        <Route path="/cart" element={<PageNotFound />} />
        <Route path="/login" element={<PageNotFound />} />
        <Route path="/register" element={<PageNotFound />} />
        <Route path="/profile" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
