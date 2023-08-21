import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth > 1023 ? (
        <>
          <div className="grid grid-cols-6 px-10 py-10 w-[100vw] bg-black opacity-90 text-white gap-8">
            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Products</h3>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Relational Database
              </p>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Graph database
              </p>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Graph-based Solution
              </p>
            </div>
            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Use Cases</h3>
            </div>
            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Services</h3>
            </div>
            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Resources</h3>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Documentation
              </p>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Learn
              </p>
            </div>

            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Blog</h3>
            </div>
            <div className="border-2 border-red-800 flex flex-col">
              <h3 className="uppercase font-bold">Company</h3>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                About Us
              </p>
              <p className="text-semibold hover:text-blue-700 cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          <div className="flex justify-between w-screen px-12 bg-black opacity-90 text-gray-400 text-sm py-4">
            <div>
              <span>&copy; 2023 by Kgotso Makhalimele</span>
            </div>
            <div className="flex justify-between gap-1">
             
                <SocialIcons />
              
              <span className="hover:text-blue-700 cursor-pointer">
                Contact
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center bg-black opacity-90 text-gray-400 text-sm py-4">
          <span>&copy; 2023 by Kgotso Makhalimele</span>
        </div>
      )}
    </>
  );
};

export default Footer;
