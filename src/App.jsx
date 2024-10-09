// src/App.jsx
import React from "react";
import SignInForm from "./components/SignInForm";
import "./index.css";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <SignInForm />
      <LoginPage />
    </div>
  );
};

export default App;
