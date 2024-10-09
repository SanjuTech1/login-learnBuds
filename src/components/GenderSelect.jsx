// GenderSelect.js

import React from "react";
import "./InputField.css";

const GenderSelect = ({ value, onChange }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor="gender" className="block mb-1 text-darkGray">
        Gender
      </label>
      <div className="input-container">
        <select
          id="gender"
          className="input-field appearance-none"
          value={value}
          onChange={onChange}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="input-icon">&#9660;</span>
      </div>
    </div>
  );
};

export default GenderSelect;
