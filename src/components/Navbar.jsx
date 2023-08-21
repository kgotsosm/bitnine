import React, { useState } from "react";
import logo from "../assets/bitnine-logo.png";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import SocialIcons from "./SocialIcons";
import { Input } from "@material-tailwind/react";
import Translate from './Translate'

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  let Links = [
    { name: "Products", link: "/prod" },
    { name: "Use Cases", link: "/use" },
    { name: "Services", link: "/serv" },
    { name: "Resources", link: "/res" },
    { name: "Blog", link: "/blog" },
    { name: "Company", link: "/comp" },
    { name: "IR", link: "/ir" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-[10] top-0 left-0 shadow">
      <div className="hidden lg:flex justify-end bg-black w-full text-gray-100 pt-2 px-6 space-x-3">
        <Translate />
        <div className="w-72">
          <Input variant="outlined" placeholder="Search" className="bg-gray-800 text-gray-200 px-2" />
        </div>
        <p className="uppercase hover:text-blue-700 cursor-pointer">Contact</p>
        <SocialIcons />
      </div>

      <div className="md:flex items-center justify-between bg-black text-white  py-4 md:px-10 px-7">
        <div className=" cursor-pointer flex items-center ">
          <img src={logo} alt="logo" className="w-24 md:w-60" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static uppercase text-white bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-3 transition-all duration-300 ease-out ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <div key={index}>
              <li className=" border-b border-gray-200 md:border-none md:ml-8 md:text-md text-sm md:my-0 py-5 ">
                <a href={link.link} className=" hover:text-yellow-400 ">
                  {link.name}
                </a>
              </li>
            </div>
          ))}
          <div className="flex flex-row md:flex-none space-x-2">
            <div className="bg-blue-800 px-4 md:px-6 text-white py-2 text-sm md:text-md rounded md:ml-8 hover:text-yellow-400 md:my-0 my-2 cursor-pointer">
              Try Free
            </div>
            <button
              className="bg-blue-800 uppercase px-4 md:px-6 hover:text-white py-2 text-sm md:text-md rounded md:ml-2 text-yellow-400 md:my-0 my-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
