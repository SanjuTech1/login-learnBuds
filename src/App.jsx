import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import LoginPage from "./components/LoginPage"; // Adjust the import path
import "./index.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
