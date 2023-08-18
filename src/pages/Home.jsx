import React from "react";
import { supabase } from "../supabaseClient";
import { Button } from "@material-tailwind/react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function Home({ session }) {
 console.log(session);
 
  return (
    <>
      <div className="h-[10vh] w-screen">
        <TopNav session={session}/>
      </div>
      <div className="grid grid-cols-9 gap-1 h-[80vh] p-4 bg-gray-100">
        <div className="col-span-9 w-fullz -0" >
            <h1 className="text-4xl text-gray-700 md:text-6xl font-semibold">Page Heading</h1>
          <div>
            Content
          </div>
        </div>
      </div>
    </>
  );
}
