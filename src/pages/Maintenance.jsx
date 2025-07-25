import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const lottieFile = "../../public/Website_maintenance.lottie"; 

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-[300px] md:w-[60%]">
        <DotLottieReact
          src="/Website_maintenance.lottie"
          autoplay
          loop
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1 className="text-3xl font-bold mt-6 text-center">
        Page Under Development 🚧
      </h1>
      <p className="text-center mt-2 text-gray-400">
        We're working on something awesome. Come back soon!
      </p>
    </div>
  );
};

export default Maintenance;
