import React, { useEffect } from "react";
import { Navbar, AgensSql, EnterprisePack, Features, PackageDetails, Footer } from "../components";

const MainContent = ({session}) => {

  return (
    <>
      <Navbar />
      <AgensSql />
      <EnterprisePack />
      <Features />
      <PackageDetails />
      <Footer />
    </>
  );
};

export default MainContent;
