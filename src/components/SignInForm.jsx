import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogo from "../assets/google.svg";
import AppleLogo from "../assets/apple.svg";
import Input from "./InputField";
import Button from "./Button";
import Checkbox from "./Checkbox";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="max-w-sm mx-auto p-5 rounded-lg shadow-lg"
      style={{ backgroundColor: "#d9d9db" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-darkGray">Service Connect</h2>
      <h3 className="text-lg mb-4 text-darkGray">Getting Started..!</h3>

      <div className="relative mb-4">
        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />{" "}
        <Input
          type="email"
          className="pl-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
      </div>

      <div className="relative mb-4">
        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

        <Input
          type={showPassword ? "text" : "password"}
          className="pl-12 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />

        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      <div className="relative mb-4">
        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

        <Input
          type="password"
          className="pl-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary" // Add padding to the left of the input
        />
      </div>

      <div className="flex items-center mb-4">
        <Checkbox label="Agree to Terms & Conditions" />
      </div>

      <Button>Sign In</Button>

      <p className="mt-4 text-center text-darkGray">Or Continue With</p>

      <div className="flex justify-center space-x-4 mt-2">
        <img src={GoogleLogo} alt="Google Logo" width={40} height={40} />

        <img src={AppleLogo} alt="Apple Logo" width={40} height={40} />
      </div>

      <p className="mt-4 text-center text-darkGray">
        Already have an Account?{" "}
        <a href="#" className="text-primary">
          SIGN IN
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
