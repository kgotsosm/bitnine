import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import formLogo from '../assets/b_logo.png'

export default function Auth() {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
            <img 
                src={formLogo} 
                alt="Logo" 
                className="mb-4 border-b-1px"
                />
          <ul className="flex mb-4">
            <li className="mr-6">
              <button
                className={`py-2 px-4 font-semibold rounded-t-md focus:outline-none ${
                  activeTab === "signup" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("signup")}
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                className={`py-2 px-4 font-semibold  rounded-t-md focus:outline-none ${
                  activeTab === "login" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("login")}
              >
                Log In
              </button>
            </li>
          </ul>
          {activeTab === "signup" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"
                  required
                >
                  Password
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                  Sign Up
                </button>
              </div>
            </div>
          )}
          {activeTab === "login" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Log In</h2>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                  Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}
