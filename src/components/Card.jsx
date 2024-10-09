import React from "react";
import Button from "./Button";

const Card = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-12 h-12 rounded-full mr-4 mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <Button onClick={onButtonClick} className="mt-auto">
        Book Now
      </Button>
    </div>
  );
};

export default Card;
