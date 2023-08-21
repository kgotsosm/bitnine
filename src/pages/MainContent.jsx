import React, { useEffect } from "react";
import { Navbar, AgensSql, EnterprisePack, KeyFeatures, PackageDetails, Footer } from "../components";

const MainContent = ({session}) => {

  return (
    <>
      <Navbar />
      <AgensSql />
      <EnterprisePack />
      <KeyFeatures />
      <PackageDetails />
      <Footer />
    </>
  );
};

export default MainContent;
