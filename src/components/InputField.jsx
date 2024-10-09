import React from "react";
import "./InputField.css"; // Import the CSS file

const InputField = ({ type, placeholder, icon }) => {
  return (
    <div className="input-container">
      {icon && <span className="input-icon">{icon}</span>}
      <input type={type} placeholder={placeholder} className="input-field" />
    </div>
  );
};

export default InputField;
