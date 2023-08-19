import React from "react";
import { Navbar, AgensSqlPreview } from "../components";

const AgensSqlPage = ({ session }) => {
  return (
    <>
      <Navbar session={session} />
      <div className="flex flex-row bg-blue-gray-100">
        <div>
          <AgensSqlPreview />
        </div>
      </div>
    </>
  );
};

export default AgensSqlPage;
