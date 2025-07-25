import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
const Accessories = () => {
  const { addToCart } = useCart();

  const accessories = [
    {
      id: 1,
      name: "Tangerine Rush",
      price: "₹1,199",
      description: "Fluoroelastomer Arc",
      image:
        "https://www.layers.shop/cdn/shop/files/Tangerine_Rush_1_transparent.png?v=1753085407&width=990",
      imageHover:
        "https://www.layers.shop/cdn/shop/files/TangerineRush_3.png?v=1753085407&width=990",
      category: "straps",
      colors: ["#FF7300"], // Tangerine
    },
    {
      id: 2,
      name: "Black Reserve",
      price: "₹999",
      description: "Leather Arc",
      image: "https://www.layers.shop/cdn/shop/files/Black_Reserve_Strap.png?v=1752732770&width=990",
      imageHover:"https://www.layers.shop/cdn/shop/files/blackreserve_3.png?v=1752732770&width=990",
      category: "straps",
      colors: ["#000000"],
    },
    {
      id: 3,
      name: "Gunmetal Black",
      price: "₹999",
      description: "Metallic Arc",
      image: "https://www.layers.shop/cdn/shop/files/image_fb227e14-c3ac-444b-9983-8ad5a49d498b.png?v=1731514022&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Gunmetal_Black_2_1.png?v=1753356494&width=990",
      category: "straps",
      colors: ["#2B2B2B"],
    },
    {
      id: 4,
      name: "Chrome Silver",
      price: "₹999",
      description: "Metallic Arc (Tech Burner)",
      image: "https://www.layers.shop/cdn/shop/files/image_1.png?v=1731514810&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Chrome_Silver_2_1.png?v=1753355134&width=990",
      category: "straps",
      colors: ["#C0C0C0"],
    },
    {
      id: 5,
      name: "Midnight Black",
      price: "₹799",
      description: "Magnetic Silicon Arc",
      image: "https://www.layers.shop/cdn/shop/files/Midnight_Black_1_65381296-c0a0-4a77-9391-07aa11575879.png?v=1731511569&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Midnight_Black_2_be20a7d7-c74a-4a03-bcc8-22069903b341.png?v=1753356494&width=990",
      category: "straps",
      colors: ["#000000"],
    },
    {
      id: 6,
      name: "Slate Grey",
      price: "₹799",
      description: "Magnetic Silicon Arc",
      image: "https://www.layers.shop/cdn/shop/files/Slate_grey_1_1.png?v=1731511662&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Slate_Grey_2_76f20697-8cdd-4612-a77e-174aef5f30f7.png?v=1753355134&width=990",
      category: "straps",
      colors: ["#757477"],
    },
    {
      id: 7,
      name: "Charcoal Black",
      price: "₹1,199",
      description: "Fluoroelastomer Arc",
      image: "https://www.layers.shop/cdn/shop/files/Charcoal_Black_1_1.png?v=1731511698&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Charcoal_Black_3_c4d56386-5a21-4dc2-81af-8a1ed0306006.png?v=1753356494&width=990",
      category: "straps",
      colors: ["#141414"],
    },
    {
      id: 8,
      name: "Indigo Blue",
      price: "₹1,199",
      description: "Fluoroelastomer Arc",
      image: "https://www.layers.shop/cdn/shop/files/image_1.jpg?v=1731514964&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Indigo_Blue_3_894c6ccc-eefd-49ef-8f43-7c312c09936d.png?v=1731507428&width=990",
      category: "straps",
      colors: ["#262A46"],
    },
    {
      id: 9,
      name: "Stone Grey",
      price: "₹1,199",
      description: "Fluoroelastomer Arc",
      image: "https://www.layers.shop/cdn/shop/files/Stone_grey_1_c8cf052a-1a41-49ca-ad17-192039efb363.png?v=1731511775&width=990",
      imageHover: "https://www.layers.shop/cdn/shop/files/Stone_grey_3_57330055-2248-4898-b2d6-4c44b6be7e2f.png?v=1753355134&width=990",
      category: "straps",
      colors: ["#6D6D6F"],
    },
    {
      id: 10,
      name: "Sable Black",
      price: "₹799",
      description: "Liquid Silicone Arc",
      image: "https://www.layers.shop/cdn/shop/files/b1_c8c6a9b9-c94b-4ce3-9ca2-892a9fe9d570.png?v=1745484062&width=990",
      
      category: "straps",
      colors: ["#26282A"],
    },
    {
      id: 11,
      name: "Castleton Green",
      price: "₹799",
      description: "Liquid Silicone Arc",
      image: "https://www.layers.shop/cdn/shop/files/g1.png?v=1745484639&width=990",
      category: "straps",
      colors: ["#315950"],
    },
    {
      id: 12,
      name: "Alabaster White",
      price: "₹799",
      description: "Liquid Silicone Arc",
      image: "https://www.layers.shop/cdn/shop/files/w1.png?v=1745484887&width=990",
      category: "straps",
      colors: ["#BBBCB7"],
    },
  ];

  const moreAccessories = [
    {
      id: 1,
      name: 'Screen Guard',
      subtitle: 'Tempered Glass',
      price: '₹299',
      image: 'https://www.layers.shop/cdn/shop/files/ScreenGuard.png?v=1751646320&width=990',
    },
    {
      id: 2,
      name: 'Charger',
      subtitle: 'Fast Charging Cable',
      price: '₹399',
      image: 'https://www.layers.shop/cdn/shop/files/Charger_300875c5-61c3-4251-ac55-e1d7133f7839.png?v=1751646741&width=990',
    },
  ];
  

  const filteredStraps = accessories.filter(
    (item) => item.category === "straps"
  );
  const otherAccessories = accessories.filter(
    (item) => item.category !== "straps"
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[aeonic]">
            Anarc Accessories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your Anarc experience with our premium selection of
            accessories
          </p>
        </motion.div>

        {/* Straps Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[aeonic]">
            Straps & Bands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStraps.map((item) => {
              const [hovered, setHovered] = useState(false);
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}

                >
                  <div className="h-80 bg-[#F8F8F8] flex items-center justify-center p-4">
                    <img
                      src={
                        hovered && item.imageHover
                          ? item.imageHover
                          : item.image
                      }
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-all duration-300"
                      onError={(e) => {
                        // Create a simple SVG placeholder
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiM5QjlCOUIiLz4KPHJlY3QgeD0iMTUwIiB5PSIxNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSIjOUI5QjlCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFuYXJjIEFjY2Vzc29yeTwvdGV4dD4KPC9zdmc+";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {item.price}
                      </span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: parseInt(
                              item.price.replace("₹", "").replace(",", "")
                            ),
                            image: item.image,
                            category: item.category,
                            description: item.description,
                          })
                        }
                        className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                    {item.colors && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Available colors:
                        </p>
                        <div className="flex space-x-2">
                          {item.colors.map((color, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full border border-gray-200"
                              style={{ backgroundColor: color }}
                              title={`Color ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Other Accessories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[aeonic]">
            Essential Accessories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moreAccessories.map((item) => {
              const [hovered, setHovered] = useState(false);
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="h-80 bg-gray-100 flex items-center justify-center p-6">
                    <img
                      src={
                        hovered && item.imageHover
                          ? item.imageHover
                          : item.image
                      }
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        // Create a simple SVG placeholder for accessories
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMzAiIGZpbGw9IiM5QjlCOUIiLz4KPHJlY3QgeD0iMTUwIiB5PSIxNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSIjOUI5QjlCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFuYXJjIEFjY2Vzc29yeTwvdGV4dD4KPC9zdmc+";
                      }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.features && (
                      <ul className="mb-4 space-y-1">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <span className="text-2xl font-bold text-gray-900">
                        {item.price}
                      </span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: parseInt(
                              item.price.replace("₹", "").replace(",", "")
                            ),
                            image: item.image,
                            category: item.category,
                            description: item.description,
                          })
                        }
                        className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Accessories;
