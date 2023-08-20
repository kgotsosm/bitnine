import React, { useState } from "react";
import { dbEngCards } from "./dbengine.js";

const AgensSqlDBEngine = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="grid lg:grid-cols-3 gap-9">
      {dbEngCards.map((card, index) => (
        <div className="h-full" key={index}>
          <div
            className={`col-span-1 shadow-lg h-62 w-80 rounded-md bg-blue-gray-100 py-4 ${
              hoveredCard === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === index ? (
              <ul className="text-left mt-2 list-image-none sm:list-image-checkmark">
                {card.description.map((item, itemIndex) => (
                  <li key={itemIndex} className='text-left px-3 py-1 fade-in'>{item}</li>
                ))}
              </ul>
            ) : (
              <>
                <h3 className="text-center mt-4 font-bold">{card.title}</h3>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-30 h-30 mx-auto mt-4"
                />
              </>
            )}
          </div>
        </div>
      ))}
      {/* <div className='bg-green-400 h-20 w-20'> </div> */}
    </div>
  );
};

export default AgensSqlDBEngine;
