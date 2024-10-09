import React from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "./InputField";
import Button from "./Button";
import Checkbox from "./Checkbox";

const LoginPage = () => {
  return (
    <div
      className="max-w-sm mx-auto p-5 rounded-lg shadow-lg"
      style={{ backgroundColor: "#d9d9db" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-darkGray">
        Enter user details
      </h2>

      <div className="relative mb-4">
        <Input
          type="text"
          className="pl-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          placeholder="FullName"
        />
      </div>

      <div className="relative mb-4">
        <Input
          type="text"
          className="pl-12 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          placeholder="Address"
        />
      </div>
      <div className="relative mb-4">
        <Input type="text" placeholder="Phone " />
      </div>
      <div className="flex items-center mb-4">
        <Checkbox label="Accept and Conitune" />
      </div>
      <Button type="submit"> Continue </Button>
    </div>
  );
};

export default LoginPage;
