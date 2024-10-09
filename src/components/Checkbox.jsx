// src/components/Checkbox.jsx
import React from "react";

const Checkbox = ({ label }) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox" /> {label}
    </label>
  );
};

export default Checkbox;
