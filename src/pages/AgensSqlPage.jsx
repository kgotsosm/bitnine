import React from "react";
import Navbar from "../components/Navbar";
import AgensSqlPreview from "../components/AgensSqlPreview";

const AgensSqlPage = () => {
  return (
    <>
      <Navbar />
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
