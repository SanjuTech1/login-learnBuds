import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1d1f2a] text-white transition duration-200 px-4 py-2 rounded-[30px] w-full"
    >
      {children}
    </button>
  );
};

export default Button;
