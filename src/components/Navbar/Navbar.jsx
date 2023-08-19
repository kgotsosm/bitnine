import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import logo from "../../assets/b_logo.png";
import NavLinks from "./NavLinks";

export default function Navbar({ session }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="bg-white mx-6 lg:mx-10">
      <div className="flex items-center font-medium justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Bitnine logo"
              className="w-40 md:cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="py-7 px-3 inline-block">
              Products
            </Link>
          </li>
          <li>
            {" "}
            {/* Add more menu items as needed */}
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            {" "}
            {/* Add more menu items as needed */}
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <NavLinks />
        </ul>
        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-blue-gray-500 hover:bg-blue-gray-800 text-white font-semibold border-blue-200 rounded-md p-3"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
