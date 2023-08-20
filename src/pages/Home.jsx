import React from "react";
import { Navbar, Hero, Products } from '../components'

export default function Home({ session }) {
 
  return (
    <div className='bg-gray-100'>
      <Navbar session={session}/>
      <Hero />
      <Products />
    </div>
  );
}
