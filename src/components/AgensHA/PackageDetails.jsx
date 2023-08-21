import React from "react";
import agensha from "../../assets/agensha.png";
import HaCard from "./HaCard";
import { data } from "./data";

function PackageDetails() {
  return (
    <div className="py-6 bg-slate-50">
      <p className="pt-20 md:text-3xl text-2xl font-bold text-gray-900 text-center px-5">
        Agens Enterprise Package
      </p>
      <p className="text-center text-sm md:text-[16px] md:pb-5   text-gray-600 pt-3 px-5">
        Agens Enterprise Package comes with a high availability management
        server that supports backup and data monitoring dashboard that helps
        enterprise customers manage their data efficiently.
      </p>
      <div className="flex flex-col md:flex-row md:px-20 px-5 py-10 justify-center">
        <div className="md:w-1/2 pb-10">
          <p className="md:text-2xl text-xl font-bold text-gray-600 text-center">
            Agens HA Manager
          </p>
          <p className="text-center">
            <span className="text-blue-400 font-semibold">HA Clustering</span> – Failover/Failback, Load-balancing
          </p>
          <img src={agensha} alt="" className="mt-5" />
          <p className="text-center mt-5 text-lg text-gray-600">Replication</p>
        </div>
        <div className="md:w-1/2 pb-10">
          <p className=" md:text-2xl text-xl font-bold text-gray-600 text-center">
            Agens Enterprise Manager{" "}
          </p>
          <div className="flex flex-col items-center mt-5">
            <HaCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
