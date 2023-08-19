import React from "react";
import { Navbar, Hero, Products } from '../components'

export default function Home({ session }) {
 
  return (
    <>
      <Navbar session={session}/>
      <Hero />
      <Products />
    </>
  );
}
