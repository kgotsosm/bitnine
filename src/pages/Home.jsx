import React from "react";
import Navbar from '../components/Navbar/Navbar'
import {  Hero, Products } from '../components'

export default function Home({ session }) {
 
  return (
    <>
      <Navbar session={session}/>
      <Hero />
      <Products />
    </>
  );
}
