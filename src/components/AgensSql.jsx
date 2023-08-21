import React from "react";
import agens from "../assets/agenssql.png";

const Button = ({ text }) => {
  return (
    <div className="bg-blue-800 px-6 py-2 text-md text-white hover:text-yellow-400 transition-all ease-in duration-200 cursor-pointer rounded font-semibold">
      {text}
    </div>
  );
};

function AgensSql() {
  return (
    <div className="bg-white py-24">
      <div className="flex flex-col justify-center items-center">
        <img className="pt-5 md:pt-18 pb-10" src={agens} />
        <div className="md:w-1/2 px-8">
          <p className="text-xl font-bold text-gray-700 text-center">
            An integration of Bitnine’s DB technology and PG expertise
          </p>
          <p className="text-center md:text-[16px] text-sm md:pb-5  text-gray-600 pt-3 ">
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise and knowledge accumulated through database
            research and development.
          </p>
          <p className="text-center text-sm md:text-[16px] md:pb-5   text-gray-600 pt-3">
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures the efficiency and scalability of data
            management.
          </p>
          <p className="text-center text-sm md:text-[16px]  text-gray-600 pt-3 px-10">
            Get AgensSQL now for stable operation and management services at a
            reduced maintenance cost.
          </p>
          <div className="pt-20 flex flex-row justify-evenly uppercase mx-2 md:mx-0 space-x-2 md:space-x-10">
          <Button text="Contact" />
          <Button text="Brochure" />
          <Button text="Blog" />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default AgensSql;
