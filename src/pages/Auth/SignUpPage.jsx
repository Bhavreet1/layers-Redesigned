import React, { useEffect } from "react";
import { SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center bg-white p-12">
        <div className="w-full max-w-md">
          <SignUp
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/2 bg-blue-600 ">
        <img
          src="./logo-2.0.svg"
          alt="Login visual"
          className="object-cover scale-75 w-full"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
