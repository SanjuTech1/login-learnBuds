import React from "react";
import "./InputField.css";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  return (
    <div className="input-container">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
