import React, { useState } from "react";
import Maintenance from "../Maintenance";
const AnarcSkins = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(0);

  const designs = [
    { id: 1, name: "Carbon Fiber", color: "bg-gray-900", pattern: "carbon" },
    {
      id: 2,
      name: "Rose Gold",
      color: "bg-gradient-to-br from-pink-300 to-rose-400",
      pattern: "solid",
    },
    { id: 3, name: "Midnight Black", color: "bg-black", pattern: "matte" },
    {
      id: 4,
      name: "Ocean Blue",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      pattern: "gradient",
    },
    {
      id: 5,
      name: "Forest Green",
      color: "bg-gradient-to-br from-green-600 to-emerald-500",
      pattern: "textured",
    },
    {
      id: 6,
      name: "Sunset Orange",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      pattern: "vibrant",
    },
    {
      id: 7,
      name: "Arctic White",
      color: "bg-gradient-to-br from-gray-100 to-white",
      pattern: "clean",
    },
    {
      id: 8,
      name: "Purple Haze",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      pattern: "cosmic",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="px-4 py-10">
        <div className="h-fit mb-10 mt-20 lg:mt-0 border-2 border-blue-600 rounded-4xl lg:scale-80 relative">
          <video
            className="w-full h-full rounded-4xl object-contain"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              console.error("Main video failed to load:", e);
              // e.target.style.display = "none";
              // e.target.nextElementSibling.style.display = "flex";
            }}
          >
            <source src="/anarc_skin.webm" type="video/webm" />
            
  
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Watch Preview */}
            <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
              <div className="relative">
                {/* Watch mockup */}
                <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-6 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-full relative overflow-hidden border-4 border-gray-700">
                    {/* Watch skin pattern */}
                    <div
                      className={`w-full h-full ${
                        designs[selectedDesign]?.color || "bg-gray-900"
                      } relative`}
                      style={{
                        backgroundImage:
                          designs[selectedDesign]?.pattern === "carbon"
                            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.4'%3E%3Cpath d='M0 0h30v30H0zm30 30h30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`
                            : designs[selectedDesign]?.pattern === "textured"
                            ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='15'/%3E%3C/g%3E%3C/svg%3E")`
                            : "none",
                      }}
                    >
                      {/* Watch interface elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white text-3xl font-bold mb-2">
                            12:34
                          </div>
                          <div className="text-white text-sm opacity-70 mb-4">
                            Friday, Dec 15
                          </div>
                          <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search icon */}
                <button className="absolute -top-4 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Configuration Panel */}
            <div className="space-y-8">
              {/* Design Selection */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Choose Your Design
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {designs.map((design, index) => (
                    <button
                      key={design.id}
                      onClick={() => setSelectedDesign(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedDesign === index
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-full h-full relative">
                        {/* Watch shape preview */}
                        <div className="w-full h-full bg-gray-100 p-3 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border-2 border-gray-300 relative overflow-hidden">
                            <div
                              className={`w-full h-full ${design.color} relative`}
                              style={{
                                backgroundImage:
                                  design.pattern === "carbon"
                                    ? `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.4'%3E%3Cpath d='M0 0h15v15H0zm15 15h15v15H15z'/%3E%3C/g%3E%3C/svg%3E")`
                                    : design.pattern === "textured"
                                    ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='8'/%3E%3C/g%3E%3C/svg%3E")`
                                    : "none",
                              }}
                            >
                              {/* Mini time display */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-xs font-bold">
                                  12:34
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Design name */}
                        <div className="absolute bottom-1 left-1 right-1">
                          <p className="text-xs font-medium text-gray-700 text-center bg-white bg-opacity-90 rounded px-1 py-0.5">
                            {design.name}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Premium Features
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Precision cut for perfect fit
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bubble-free application
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Residue-free removal
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Water and scratch resistant
                  </li>
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full max-w-90 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg hover:shadow-xl">
                Add to Cart - ₹899
              </button>
            </div>
          </div>
        </div>
      </div>
      <Maintenance/>
    </section>
  );
};

export default AnarcSkins;
