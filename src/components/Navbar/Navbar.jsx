import React, { useState } from "react";
import logo from "../../assets/bitnine-logo.png";
import { supabase } from "../../supabase/supabaseClient";
import SocialIcons from "../SocialIcons";
import { Input } from "@material-tailwind/react";
import Translate from "../Translate";
import { links as navLinks } from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { links } = navLinks;

  return (
    <nav className="fixed w-full z-[10] top-0 left-0 shadow">
      <div className="hidden lg:flex justify-end bg-black w-full text-gray-100 pt-2 px-6 space-x-3">
        <Translate />
        <div className="w-72">
          <Input
            variant="outlined"
            placeholder="Search"
            className="bg-gray-800 text-gray-200 px-2"
          />
        </div>
        <p className="uppercase hover:text-blue-700 cursor-pointer">Contact</p>
        <SocialIcons />
      </div>

      <div className="lg:flex items-center justify-between bg-black text-white  py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center ">
          <img src={logo} alt="logo" className="w-24 md:w-60" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          {open ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static uppercase text-white bg-black lg:z-auto z-[-1] left-0 w-full lg:w-auto md:pl-0 pl-3 transition-all duration-300 ease-out ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {navLinks.map((link, index) => (
            <div key={index} className="dropdown">
              <li className="border-b border-gray-200 md:border-none md:ml-8 md:text-md text-sm md:my-0 py-5">
                {link.name === "Products" ? (
                  <div className="relative group">
                    <a
                      className="hover:text-yellow-400 cursor-pointer"
                    >
                      Products
                    </a>
                    <ul className="dropdown-menu capitalize mt-5">
                      <li className="py-2">
                        <a
                          className="hover:text-yellow-400 hover:block"
                        >
                          Relational Database
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          className="hover:text-yellow-400"
                        >
                          Graph Database
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : link.name === "Resources" ? (
                  <div className="relative group">
                    <a
                      className="hover:text-yellow-400 cursor-pointer"
                    >
                      Resources
                    </a>
                    <ul className="dropdown-menu capitalize mt-5">
                      <li className="py-2">
                        <a
                          className="hover:text-yellow-400 hover:block"
                        >
                          Documentation
                        </a>
                      </li>
                      <li className="py-2">
                        <a 
                          className="hover:text-yellow-400">
                          Learn
                        </a>
                      </li>
                    </ul>
                  </div>
                )  : link.name === "Company" ? (
                  <div className="relative group">
                    <a
                      className="hover:text-yellow-400 cursor-pointer"
                    >
                      Company
                    </a>
                    <ul className="dropdown-menu capitalize mt-5 ">
                      <li className="py-2">
                        <a
                          className="hover:text-yellow-400 hover:block "
                        >
                          About Us
                        </a>
                      </li>
                      <li className="py-2">
                        <a 
                          className="hover:text-yellow-400">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="hover:text-yellow-400">
                    {link.name}
                  </p>
                )}
              </li>
            </div>
          ))}

          <div className="flex flex-row md:flex-none space-x-2">
            <a href="https://bitnine.net/agensgraph-downloads/" target="blank">
              <button className="bg-blue-800 px-4 md:px-6 text-white py-2 text-sm uppercase  md:text-md rounded md:ml-8 hover:text-yellow-400 md:my-0 my-2 cursor-pointer">
                Try Free
              </button>
            </a>
            <button
              className="bg-blue-800 uppercase px-4 md:px-6 hover:text-white py-2 text-sm md:text-md rounded md:ml-2 text-yellow-400 md:my-0 my-2"
              onClick={() => supabase.auth.signOut()}
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
