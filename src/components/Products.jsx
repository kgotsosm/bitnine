import React from "react";
import agens from "../assets/agenssql.png";

const Products = () => {
  return (
    <div className="my-4">
      <div className="flex justify-center items-center">
        <img src={agens} alt="AgensSQL Logo" className="w-220 my-4" />
      </div>
      <div className="grid md:grid-cols-2 px-4 gap-8">
        <div className="flex justify-space items-center gap-4 p-2 shadow-md">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/3d-fluency/188/security-checked.png"
            alt="security-checked"
          />
          <div className="flex-flex-row">
            <h3 className="font-semibold text-xl md:text-2xl text-background tracking-wider">
              Data Security
            </h3>
            <p className="text-lg md:text-xl text-background">
              Various features are added to ensure security and stability of
              data{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-space items-center gap-4 p-2 shadow-md">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/3d-fluency/188/data-configuration.png"
            alt="data-configuration"
          />
           <div className="flex-flex-row">
            <h3 className="font-semibold text-xl md:text-2xl text-background tracking-wider">
              High Availability
            </h3>
            <p className="text-lg md:text-xl text-background">
              Standby server minimizes downtime by restoring the system
            </p>
          </div>
        </div>
        <div>
        <div className="flex justify-space items-center gap-4 p-2 shadow-md">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/3d-fluency/188/control-panel.png" alt="control-panel"
          />
           <div className="flex-flex-row">
            <h3 className="font-semibold text-xl md:text-2xl text-background tracking-wider">
              Monitoring
            </h3>
            <p className="text-lg md:text-xl text-background">
              Monitoring dashboard to track key metrics
            </p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex justify-space items-center gap-4 p-2 shadow-md">
          <img
            width="100"
            src="https://img.icons8.com/3d-fluency/94/hub.png" alt="hub"
            />
           <div className="flex-flex-row">
            <h3 className="font-semibold text-xl md:text-2xl  tracking-wider">
              Data Sharding
            </h3>
            <p className="text-lg md:text-xl text-background">
              Distribute dataset across multiple databases
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
