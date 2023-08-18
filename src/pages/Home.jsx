import React from "react";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Products from "../components/Products";

export default function Home({ session }) {
 // console.log(session);
 
  return (
    <>
      <Navbar session={session}/>
      <Hero />
      <Products />
    </>
  );
}
