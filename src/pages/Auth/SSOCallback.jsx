import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const SSOCallback = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        // Successfully signed in, redirect to home
        navigate("/", { replace: true });
      } else {
        // Something went wrong, redirect to sign in
        navigate("/sign-in", { replace: true });
      }
    }
  }, [isSignedIn, isLoaded, navigate]);

  // Show loading while processing
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
};

export default SSOCallback;
