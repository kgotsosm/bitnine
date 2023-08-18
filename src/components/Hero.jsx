import React from "react";
import database from "../assets/database.webp";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-gray-100 flex flex-col justify-between ">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-4 gap-5 mx-3">
          <h1 className="text-6xl md:text-8xl text-background font-bold font-inter">
            Bitnine
          </h1>
          <p className="text-teal-400 font-medium text-xl md:text-2xl py-2">
            Home of the world's first RDB+GDB multi-model graph database product
          </p>
          <button className="bg-blue-900 border-none py-3 my-2 rounded-md w-[300px] lg:w-[440px] hover:opacity-90">
            Sign In
          </button>
        </div>
        <div className="hidden md:block">
          <img src={database} alt="Database" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
