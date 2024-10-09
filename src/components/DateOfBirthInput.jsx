import React from "react";
import Input from "./InputField";

const DateOfBirthInput = ({ dob, onChange }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor="dob" className="block mb-1 text-darkGray">
        Date of Birth
      </label>
      <Input
        type="date"
        id="dob"
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        value={dob}
        onChange={onChange}
      />
    </div>
  );
};

export default DateOfBirthInput;
