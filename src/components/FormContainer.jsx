// FormContainer.js

import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div
      className="max-w-sm mx-auto p-5 rounded-lg shadow-lg"
      style={{ backgroundColor: "#d9d9db" }}
    >
      {children}
    </div>
  );
};

export default FormContainer;
