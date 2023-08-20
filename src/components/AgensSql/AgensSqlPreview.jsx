import React from "react";
import { Link, useLocation } from "react-router-dom";
import agens from "../../assets/agenssql.png";
import { details } from "./data";

const AgensSqlPreview = () => {
  const location = useLocation();
  const renderButton = location.pathname === "/";

  return (
    <>
      <div className="flex justify-center items-center">
        <img src={agens} alt="AgensSQL Logo" className="w-200 mb-8" />
      </div>
      <div className='text-center mb-10'>
        <h2 className='text-gray-900 font-mono font-semibold text-2xl lg:text-3xl'>Key Features</h2>
        <p className='text-lg my-2'>Manage your data with Agens Enterprise Package</p>
      </div>
        <div className="grid md:grid-cols-2 mb-6 px-6 lg:px-24 gap-8">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex justify-space items-center gap-4 p-2 shadow-md bg-blue-gray-200 shadow-blue-800"
            >
              <img width="100" height="100" src={item.image} alt={item.alt} />
              <div className="flex flex-col">
                {" "}
               
                <h3 className="font-semibold text-xl md:text-2xl text-background tracking-wider">
                  {item.heading}
                </h3>
                <p className="text-lg md:text-xl text-background">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      <div className="flex justify-center">
        <Link to="/agenssql">
          {renderButton && (
            <button className="bg-blue-600 border-none rounded-md w-[60vw] md:h-20 p-2 mt-8 md:w-[40vw]">
              View Details
            </button>
          )}
        </Link>
      </div>
    </>
  );
};

export default AgensSqlPreview;
