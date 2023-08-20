import React from "react";
import { Navbar, AgensSqlPreview } from "../components";

const AgensSqlPage = ({ session }) => {
  return (
    <>
    <Navbar session={session} className='sticky top-0' />
    <div className='bg-blue-gray-100'>
      <div className="flex flex-row lg:mx-10">
        <div className=''>
          <AgensSqlPreview />
        </div>
      </div>
    </div>
    </>
  );
};

export default AgensSqlPage;
