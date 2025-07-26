import React, { useState } from "react";
import Maintenance from "../Maintenance";
import { useCart } from "../../contexts/CartContext";

const MobileSkins = () => {
  const { addToCart, toggleCart } = useCart();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [error, setError] = useState("");

  const handleAddToCart = () => {
    // Reset previous error
    setError("");

    // Validate selections
    if (!selectedBrand) {
      setError("Please select a brand");
      return;
    }
    if (!selectedModel) {
      setError("Please select a model");
      return;
    }

    const selectedBundleDetails = bundles.find((b) => b.id === selectedBundle);
    const selectedDesignDetails = designs[selectedDesign];

    // Create cart item
    const cartItem = {
      id: `${selectedBrand}-${selectedModel}-${selectedDesign}-${Date.now()}`, // Unique ID for the cart item
      title: `${selectedBrand} ${selectedModel} Skin - ${selectedDesignDetails.name}`,
      brand: selectedBrand,
      model: selectedModel,
      design: selectedDesignDetails.name,
      quantity: selectedBundleDetails.quantity,
      price: selectedBundleDetails.price,
      image: selectedDesignDetails.image,
      type: "mobile-skin",
    };

    // Add to cart and show cart
    addToCart(cartItem);
    toggleCart(); // Open the cart drawer after adding item
  };

  const brands = ["Apple", "Samsung", "OnePlus", "Google", "Xiaomi"];
  const models = {
    Apple: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 14"],
    Samsung: [
      "Galaxy S24 Ultra",
      "Galaxy S24",
      "Galaxy S23 Ultra",
      "Galaxy S23",
    ],
    OnePlus: ["OnePlus 12", "OnePlus 11", "OnePlus 10 Pro"],
    Google: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro"],
    Xiaomi: ["Mi 14 Ultra", "Mi 14", "Mi 13 Pro"],
  };

  const bundles = [
    { id: 1, quantity: 1, price: 599, label: "Mobile Skin" },
    { id: 2, quantity: 2, price: 799, label: "Mobile Skin" },
    { id: 3, quantity: 3, price: 999, label: "Mobile Skin" },
  ];

  const designs = [
    { id: 1, name: "Floral Pattern", image: "/assets/design1.jpg" },
    { id: 2, name: "Abstract Blue", image: "/assets/design2.jpg" },
    { id: 3, name: "Wood Texture", image: "/assets/design3.jpg" },
    { id: 4, name: "Marble Green", image: "/assets/design4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-4 py-12 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Build Your Skin</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Preview */}
          <div className="bg-gray-200 rounded-2xl p-4 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
            <div className="relative">
              <div className="w-48 sm:w-64 h-[380px] sm:h-[500px] bg-gradient-to-br from-amber-100 to-amber-200 rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl">
                {/* Phone mockup with floral pattern */}
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60">
                    <div
                      className="w-full h-full bg-repeat"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    ></div>
                  </div>

                  {/* Camera module */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-4 h-4 bg-black bg-opacity-40 rounded-full"></div>
                        <div className="w-4 h-4 bg-black bg-opacity-40 rounded-full"></div>
                        <div className="w-4 h-4 bg-black bg-opacity-40 rounded-full"></div>
                        <div className="w-2 h-2 bg-black bg-opacity-40 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Brand label */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-black text-opacity-60 font-bold text-lg">
                      LAYERS
                    </span>
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

              <p className="text-sm text-gray-600">
                If your device is not found here, please{" "}
                <button className="text-blue-600 underline">click here</button>{" "}
                to find custom skin for your device.
              </p>
            </div>

            {/* Pricing Bundles */}
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  Upto 40% savings on bundles
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                      selectedBundle === bundle.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                        Buy {bundle.quantity}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        {bundle.label}
                      </p>
                      <p className="text-lg sm:text-2xl font-bold text-blue-600">
                        ₹{bundle.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Selection */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Choose Your Design
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
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
                    <div
                      className={`w-full h-full ${
                        index === 0
                          ? "bg-gradient-to-br from-amber-200 to-amber-300"
                          : index === 1
                          ? "bg-gradient-to-br from-blue-200 to-purple-300"
                          : index === 2
                          ? "bg-gradient-to-br from-amber-800 to-amber-900"
                          : "bg-gradient-to-br from-green-400 to-emerald-500"
                      }`}
                    >
                      {/* Pattern overlay */}
                      <div className="w-full h-full opacity-60">
                        <div
                          className="w-full h-full bg-repeat"
                          style={{
                            backgroundImage:
                              index === 0
                                ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                : index === 1
                                ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                                : index === 2
                                ? `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                                : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-colors text-base sm:text-lg"
            >
              Add to Cart - ₹
              {bundles.find((b) => b.id === selectedBundle)?.price}
            </button>
          </div>
        </div>
      </div>
      <Maintenance />
    </div>
  );
};

export default MobileSkins;
