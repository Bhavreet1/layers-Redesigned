import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";

// Cart Sidebar Component
export const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-40"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full rounded-4xl max-w-md bg-white/90 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 ">
              <h2 className="text-xl font-bold text-white">
                Shopping Cart ({totalItems})
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    className="w-24 h-24 text-blue-600/60 mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 13h6"
                      opacity="0.5"
                    />
                    <circle
                      cx="12"
                      cy="15"
                      r="1"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-gray-400 text-sm">
                    Add some products to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#390F0F] truncate mb-1">
                          {item.name}
                        </h3>
                        <p className="text-base text-blue-600 font-bold mb-2">
                          ₹{item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center mt-2 space-x-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-lg bg-blue-300 text-white cursor-pointer hover:bg-blue-400/90 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-bold"
                          >
                            −
                          </button>

                          <span className="text-lg font-bold min-w-[3rem] text-center text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-lg bg-blue-300 text-white cursor-pointer hover:bg-blue-400/90 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 hover:text-red-700 flex-shrink-0"
                        title="Remove item"
                      >
                        <svg
                          className="w-5 h-5 stroke-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t-2 border-gray-200 p-4 bg-[#f4f3fe] space-y-4">
                {/* Clear Cart Button */}
                <button
                  onClick={clearCart}
                  className="clear-cart-btn w-full py-2 text-sm text-red-300 hover:text-red-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 border border-red-200"
                >
                  Clear Cart
                </button>

                {/* Total */}
                <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-lg font-semibold text-[#282525]">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    ₹{totalPrice}
                  </span>
                </div>

                {/* Checkout Button */}
                <button className="proceed-btn w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Cart Page Component
function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg text-gray-600">
            {totalItems > 0
              ? `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-32 h-32 text-gray-300 mx-auto mb-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Add some products to get started!
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder-image.jpg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600 mb-4">
                        ₹{item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            −
                          </button>
                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal ({totalItems} items)
                    </span>
                    <span className="font-semibold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{totalPrice}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-red-600 hover:text-red-700 py-2 font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
