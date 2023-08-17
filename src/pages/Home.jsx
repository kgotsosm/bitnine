import React from "react";
import { supabase } from "../supabaseClient";
import { Button } from "@material-tailwind/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { dummy } from './data.js'

export default function Home({ session }) {

  return (
    <>
      <div className="h-[10vh] w-screen">
        <Navbar session={session}/>
      </div>
      <div className="grid grid-cols-9 gap-1 h-[80vh] mt-1">
        <div className="bg-background col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7 w-full overflow-y-scroll z-0" >
          <div className="col-span-4">
            <h1 className="text-4xl sticky text-gray-700 md:text-6xl font-semibold m-4">Page Heading</h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mb-0 h-[9.35vh]">
        Footer
      </div>
    </>
  );
}
