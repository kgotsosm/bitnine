import React from "react";
import { Navbar, AgensSqlPreview, AgensSqlDBEngine } from "../../components";
import agensLogo from "../../assets/agenssql.png";
import enterprise from "../../assets/agens-enterprise.png";
import { details, dbEngine } from './data.js'

const AgensSqlPage = ({ session }) => {
  return (
    <>
      <div className="w-full fixed top-0 h-24">
        <Navbar session={session}/>
      </div>
      <div className="h-[100vh] mt-24 flex flex-col justify-center items-center py-2 lg:mb-0 mb-20">
        <img src={agensLogo} alt="AgensSQL Logo" className="md:w-100 w-80" />

        <h3 className="text-center font-bold text-lg px-2 lg:text-2xl py-3 font-monda">
          {details.heading}
        </h3>
        <p className="px-4 text-center py-3 font-medium font-monda">{details.first}</p>
        <p className="px-4 text-center py-3 font-medium font-monda">{details.second}</p>
        <p className="px-4 text-center py-3 font-medium font-monda">{details.third}</p>
      </div>
      <div className="mt-24 lg:mt-0 bg-light-blue-50 py-14">
        <AgensSqlPreview />
      </div>
      <div className="flex justify-center items-center my-4 px-3">
          <img src={enterprise} alt="Agens Enterprise diagram"/>
        </div>
      <div className="h-[80vh] mt-24 flex flex-col items-center py-4 gap-2 lg:mb-0 mb-20">
        <h3 className="text-gray-900 font-mono font-semibold text-2xl lg:text-3xl font-monda">
          {dbEngine.heading}
        </h3>
        <h4 className="px-4 text-center py-3 font-semibold font-monda underline">{dbEngine.subheading}</h4>
        <p className="px-8 text-center py-3 font-medium font-inter">{dbEngine.description}</p>
        <div className="">
          <AgensSqlDBEngine />
        </div>
      </div>
    </>
  );
};

export default AgensSqlPage;
