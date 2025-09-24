// Card.jsx
import React from "react";

function Card({ title, description, image, buttonText, onButtonClick, navyColor = "#0B1F3A" }) {
  return (
    <div className="flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4 border border-gray-300"
      />
      <h3 className="text-lg font-semibold mb-2" style={{ color: navyColor }}>
        {title}
      </h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <button
        onClick={onButtonClick}
        className="bg-[#0B1F3A] hover:bg-[#071426] text-white font-semibold py-2 rounded-md shadow transition-colors duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
