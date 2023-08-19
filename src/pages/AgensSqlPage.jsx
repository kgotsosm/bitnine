import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AgensSqlPreview from "../components/AgensSqlPreview";

const AgensSqlPage = ({ session }) => {
  return (
    <>
      <Navbar session={session}/>
      <div className="flex flex-row mt-20">
        <div>
          <div className="">
            <AgensSqlPreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgensSqlPage;
