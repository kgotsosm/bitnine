import React from "react";
import { supabase } from "../supabaseClient";
import { Button } from "@material-tailwind/react";
import Sidebar from '../components/Sidebar'

export default function Home({ session }) {
  return (
    <>
      <div className="grid grid-cols-8 gap-1 h-[90vh]">
        <div className="col-span-2 bg-gray-300 ">
          <Sidebar />
        </div>
        <div className="col-span-6 bg-white">Main</div>
      </div>
      <div className="bg-yellow-400 h-[10vh]">Footer</div>
    </>
  );
}