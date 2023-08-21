import React from "react";
import enterprise from "../../assets/agens-enterprise.png";

export default function EnterprisePack() {
  return (
    <div className="py-20 bg-slate-100">
      <div className="flex flex-col justify-center md:flex-row px-5 md:pt-10">
       
          <img src={enterprise} alt="" className="mt-5" />
       
      </div>
    </div>
  );
}
