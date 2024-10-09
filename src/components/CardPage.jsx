import React, { useState } from "react";
import YesNoModal from "./YesNoModal";
import Card from "./Card";
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
      <h2 className="text-2xl font-bold mb-4">Services</h2>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <Card
          title="Plumber"
          description="5 km away"
          imageUrl={Plumber}
          onButtonClick={handleOpenModal}
        />
        <Card
          title="Doctor"
          description="2 km away"
          imageUrl={Doctor}
          onButtonClick={handleOpenModal}
        />
        <Card
          title="Photographer"
          description="10 km away"
          imageUrl={Photo}
          onButtonClick={handleOpenModal}
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
