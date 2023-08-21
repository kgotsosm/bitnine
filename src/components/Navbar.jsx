import React, { useState } from "react";
import logo from "../assets/b_logo.png";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  let Links = [
    { name: "Products", link: "/" },
    { name: "Use Cases", link: "/" },
    { name: "Services", link: "/" },
    { name: "Resources", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Company", link: "/" },
    { name: "IR", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className=" w-full sticky z-[10] top-0 left-0 shadow">
      <div className="md:flex items-center justify-between bg-white  py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static uppercase bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-3 transition-all duration-300 ease-out ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <div key={index}>
              <li
                
                className=" border-b border-gray-200 md:border-none md:ml-8 md:text-md text-sm md:my-0 py-5 "
              >
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
              className="bg-blue-800 px-4 md:px-6 hover:text-white py-2 text-sm md:text-md rounded md:ml-2 text-yellow-400 md:my-0 my-2"
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
