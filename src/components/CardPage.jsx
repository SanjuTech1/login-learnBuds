import React, { useState } from "react";
import YesNoModal from "./YesNoModal";
import Card from "./Card"; // Import the Card component
import Plumber from "../assets/plumber.jpg";
import Doctor from "../assets/Doctor.jpg";
import Photo from "../assets/Photo.jpg";

const CardPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleYes = () => {
    console.log("User clicked Yes");
    setShowModal(false);
  };

  const handleNo = () => {
    console.log("User clicked No");
    setShowModal(false);
  };

  return (
    <div className="max-w-lg mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Services </h2>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Pass the image URL and button click handler to the Card component */}
        <Card
          title="Plumber"
          description="5 km away"
          imageUrl={Plumber}
          onButtonClick={handleOpenModal} // Pass the modal open handler
        />
        <Card
          title="Doctor"
          description="2 km away"
          imageUrl={Doctor}
          onButtonClick={handleOpenModal} // Pass the modal open handler
        />
        <Card
          title="Photographer"
          description="10 km away"
          imageUrl={Photo}
          onButtonClick={handleOpenModal} // Pass the modal open handler
        />
      </div>

      <YesNoModal
        show={showModal}
        onClose={handleCloseModal}
        onYes={handleYes}
        onNo={handleNo}
      />
    </div>
  );
};

export default CardPage;
