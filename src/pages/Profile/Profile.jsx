import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { FaUser, FaBox, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="bg-white p-6 py-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <p className="text-gray-900">
                  {user?.fullName || "Not provided"}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <p className="text-gray-900">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Member Since
                </label>
                <p className="text-gray-900">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
            <div className="text-center text-gray-500 py-8">
              <FaBox className="mx-auto text-4xl mb-2" />
              <p>No orders yet</p>
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Your Wishlist</h3>
            <div className="text-center text-gray-500 py-8">
              <FaHeart className="mx-auto text-4xl mb-2" />
              <p>Your wishlist is empty</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {user?.fullName?.[0] ||
                  user?.primaryEmailAddress?.emailAddress?.[0]}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user?.fullName || "Welcome"}
              </h2>
              <p className="text-gray-600">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === "profile"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            } transition-colors duration-150 flex-1 sm:flex-none justify-center sm:justify-start`}
          >
            <FaUser className="mr-2" />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === "orders"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            } transition-colors duration-150 flex-1 sm:flex-none justify-center sm:justify-start`}
          >
            <FaBox className="mr-2" />
            <span>Orders</span>
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === "wishlist"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            } transition-colors duration-150 flex-1 sm:flex-none justify-center sm:justify-start`}
          >
            <FaHeart className="mr-2" />
            <span>Wishlist</span>
          </button>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Sign Out Button */}
        <div className="mt-6">
          <button
            onClick={handleSignOut}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150"
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
