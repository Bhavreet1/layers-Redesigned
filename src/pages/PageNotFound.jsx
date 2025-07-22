import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen w-full flex bg-white flex-col items-center select-none justify-center">
      <div className="w-96 h-96">
        <DotLottieReact
          src="/error-404.lottie"
          loop
          autoplay
          onError={() => console.log("Lottie animation failed to load")}
        />
      </div>
      <h1 className="text-black text-6xl md:text-8xl font-bold font-[zumme] mt-4">
        Page Not <span className="text-[#FF5A5F]">Found</span>{" "}
      </h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default PageNotFound;
