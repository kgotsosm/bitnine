import React from "react";
import { Navbar, AgensSql, EnterprisePack, KeyFeatures, PackageDetails } from "../components";


const MainContent = ({ session }) => {
  return (
    <>
      <Navbar session={session} />
      <AgensSql />
      <EnterprisePack />
      <KeyFeatures />
      <PackageDetails />
    </>
  );
};

export default MainContent;
