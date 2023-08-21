import React from "react";
import { Navbar, AgensSql, EnterprisePack, KeyFeatures, PackageDetails, Footer } from "../components";

const MainContent = ({ session }) => {
  return (
    <>
      <Navbar session={session} />
      <AgensSql />
      <EnterprisePack />
      <KeyFeatures />
      <PackageDetails />
      <Footer />
    </>
  );
};

export default MainContent;
