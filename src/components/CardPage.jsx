import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-white">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CardPage = () => {
  const cardData = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
  ];

  return (
    <div className="max-w-lg mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Reusable Card Components</h2>
      <div className="grid grid-cols-1 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
