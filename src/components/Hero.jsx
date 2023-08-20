import React from "react";
import database from "../assets/database.webp";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] mt-4 mb-0 bg-slate-200 flex flex-col justify-between ">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-4 gap-5 mx-3">
          <h1 className="text-6xl md:text-8xl text-background font-medium font-inter">
            bitnine
          </h1>
          <p className="text-teal-700 font-medium text-xl md:text-2xl py-2">
            Home of the world's first RDB+GDB multi-model graph database product
          </p>
          
        </div>
        <div className="px-4">
          <img src={database} alt="Database" className="md:w-full rounded-sm shadow-blue-200 shadow-md"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
