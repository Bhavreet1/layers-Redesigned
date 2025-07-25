import React, { useState } from "react";
import Maintenance from "../Maintenance";

const LaptopSkins = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(0);

  const brands = ["Apple", "Dell", "HP", "Lenovo", "ASUS", "Microsoft"];
  const models = {
    Apple: [
      'MacBook Air 13"',
      'MacBook Air 15"',
      'MacBook Pro 14"',
      'MacBook Pro 16"',
    ],
    Dell: ["XPS 13", "XPS 15", "Inspiron 15", "Latitude 14"],
    HP: ["Spectre x360", "Pavilion 15", "EliteBook 14", "Envy 13"],
    Lenovo: ["ThinkPad X1", "IdeaPad 5", "Yoga 7i", "Legion 5"],
    ASUS: ["ZenBook 14", "VivoBook 15", "ROG Strix", "TUF Gaming"],
    Microsoft: ["Surface Laptop 5", "Surface Pro 9", "Surface Book 3"],
  };

  const designs = [
    { id: 1, name: "Black Fluid", color: "bg-black", pattern: "fluid" },
    { id: 2, name: "Baby Pink", color: "bg-pink-200", pattern: "solid" },
    { id: 3, name: "Black Crack", color: "bg-gray-900", pattern: "crack" },
    {
      id: 4,
      name: "Astro Rainbow",
      color: "bg-gradient-to-r from-purple-500 to-green-400",
      pattern: "astro",
    },
    { id: 5, name: "Black Smoke", color: "bg-gray-800", pattern: "smoke" },
    {
      id: 6,
      name: "Chaos",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      pattern: "chaos",
    },
    {
      id: 7,
      name: "Chaos",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      pattern: "chaos2",
    },
    {
      id: 8,
      name: "Shikara",
      color: "bg-gradient-to-br from-amber-100 to-amber-200",
      pattern: "shikara",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Build Your Laptop And iPad Skins</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Preview */}
          <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
            <div className="relative">
              {/* Laptop mockup */}
              <div className="w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 shadow-2xl transform rotate-12">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-xl relative overflow-hidden">
                  {/* Laptop skin pattern */}
                  <div
                    className="w-full h-full opacity-80"
                    style={{
                      backgroundImage:
                        selectedDesign === 0
                          ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-8-6-12-12-12s-12 4-12 12 6 12 12 12 12-4 12-12zm0 0c0 8 6 12 12 12s12-4 12-12-6-12-12-12-12 4-12 12z'/%3E%3C/g%3E%3C/svg%3E")`
                          : selectedDesign === 1
                          ? "none"
                          : selectedDesign === 2
                          ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23666' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20zm20 20h20v20H40zM0 40h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`
                          : `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundColor:
                        selectedDesign === 0
                          ? "#000"
                          : selectedDesign === 1
                          ? "#fbb6ce"
                          : selectedDesign === 2
                          ? "#1f2937"
                          : selectedDesign === 3
                          ? "#8b5cf6"
                          : selectedDesign === 4
                          ? "#374151"
                          : selectedDesign === 5
                          ? "#f97316"
                          : selectedDesign === 6
                          ? "#fbbf24"
                          : "#fef3c7",
                    }}
                  >
                    {/* Apple logo for certain designs */}
                    {selectedDesign === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-10 bg-gray-600 rounded-full opacity-60"></div>
                      </div>
                    )}
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

          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Device Selection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Your Device
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <select
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    setSelectedModel("");
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Brand</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedBrand}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="">Select Model</option>
                  {selectedBrand &&
                    models[selectedBrand]?.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>

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
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                      selectedDesign === index
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="w-full h-full relative">
                      {/* Laptop shape preview */}
                      <div className="w-full h-full bg-gray-100 p-2">
                        <div
                          className={`w-full h-full rounded-lg ${design.color} relative overflow-hidden`}
                          style={{
                            backgroundImage:
                              design.pattern === "fluid"
                                ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-8-6-12-12-12s-12 4-12 12 6 12 12 12 12-4 12-12zm0 0c0 8 6 12 12 12s12-4 12-12-6-12-12-12-12 4-12 12z'/%3E%3C/g%3E%3C/svg%3E")`
                                : design.pattern === "crack"
                                ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23666' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20zm20 20h20v20H40zM0 40h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`
                                : design.pattern === "smoke"
                                ? `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23555' fill-opacity='0.3'%3E%3Cpath d='M25 25c0-10-8-15-15-15s-15 5-15 15 8 15 15 15 15-5 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
                                : design.pattern === "chaos"
                                ? `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.2'%3E%3Cpath d='M0 0h10v10H0zm10 10h10v10H10zm10 10h10v10H20z'/%3E%3C/g%3E%3C/svg%3E")`
                                : design.pattern === "chaos2"
                                ? `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.3'%3E%3Ccircle cx='12' cy='12' r='8'/%3E%3C/g%3E%3C/svg%3E")`
                                : design.pattern === "shikara"
                                ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.2'%3E%3Cpath d='M20 0L30 20L20 40L10 20z'/%3E%3C/g%3E%3C/svg%3E")`
                                : "none",
                          }}
                        >
                          {/* Apple logo for Baby Pink */}
                          {design.name === "Baby Pink" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-3 h-4 bg-gray-600 rounded-full opacity-60"></div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Design name */}
                      <div className="absolute bottom-1 left-1 right-1">
                        <p className="text-xs font-medium text-gray-700 text-center bg-white bg-opacity-80 rounded px-1 py-0.5">
                          {design.name}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Maintenance/>
    </div>
  );
};

export default LaptopSkins;
