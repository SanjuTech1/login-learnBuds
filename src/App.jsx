import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import LoginPage from "./components/LoginPage";
import CardPage from "./components/CardPage";
import "./index.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cards" element={<CardPage />} />
    </Routes>
  );
};

export default App;
