import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import logo from '../assets/b_logo.png'

export default function Navbar({ session }) {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


  return (
    <div className="w-screen h-[80px] z-10 bg-gray-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
        <img src={logo} alt='bitnine logo' className='w-40'/>
          <ul className="hidden md:flex">
            <li>Products</li>
            <li>Use Cases</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
          <div className="hidden md:flex pr-4">
            {session ? (
              <button
                className="text-semibold px-6 py-2 rounded-md"
                onClick={() => supabase.auth.signOut()}
              >
                Sign Out
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="md:hidden" onClick={handleNav}>
            {!nav ? (<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>) : (<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>)}
              
        </div>
      </div>
        {!nav ?  "" : (<ul className='absolute bg-gray-200 w-full px-8'>
                <li className='border-b-2 border-gray-300 w-full'>Products</li>
                <li className='border-b-2 border-gray-300 w-full'>Use Cases</li>
                <li className='border-b-2 border-gray-300 w-full'>Services</li>
                <li className='border-b-2 border-gray-300 w-full'>Blog</li>
            
                <div className="flex flex-col m-2">
                    {session ? (
                    <button
                        className="text-semibold px-6 py-2 rounded-md"
                        onClick={() => supabase.auth.signOut()}
                    >
                        Sign Out
                    </button>
                    ) : (
                    ""
                    )}
                </div>
            </ul>)}
            
    </div>
    
  );
}
