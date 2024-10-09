import React from "react";
import Button from "./Button"; // Import the Button component

const YesNoModal = ({ show, onClose, onYes, onNo }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times; {/* Close icon */}
        </button>
        <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
        <div className="flex justify-around">
          <Button onClick={onYes} className="bg-blue-500 text-white">
            Yes
          </Button>
          <Button onClick={onNo} className="bg-red-500 text-white">
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YesNoModal;
