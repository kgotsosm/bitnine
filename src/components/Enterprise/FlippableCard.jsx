import React from "react";
import { data } from './data.js'

export default function FlippableCard({ data }) {
  return (
    <>
      {data.map((card, index) => (
        <div className="flip-card md:w-3/4 w-full h-20 mt-2" key={index}>
          <div className="flip-card-inner ">
            <div className="flip-card-front flex justify-center items-center border-[#0082cb] border-2 rounded-lg hover:border-none transition-all duration-500">
              <p className="text-lg text-[#0082cb]">{card.title}</p>
            </div>
            <div className="flip-card-back rounded-lg text-start flex items-center">
              <ol className="list-disc px-5 md:px-10 text-sm ">
                {card.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
