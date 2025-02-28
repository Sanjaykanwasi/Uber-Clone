import React from "react";
import "remixicon/fonts/remixicon.css";
import driver from "../Images/driver.jpg";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex item-center justify-start gap-4">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={driver}
            alt=""
          />
          <h4 className="text-lg font-medium">Rocket Singh</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹2000</h4>
          <p className="text-sm font-medium text-gray-700">Earned</p>
        </div>
      </div>
      <div className="flex items-start bg-gray-200 rounded-xl mt-4 p-4 gap-5 justify-center">
        <div className="text-center">
          <i className="ri-time-line text-2xl font-thin"></i>
          <h5 className="text-lg mb-2 font-medium ">20.4</h5>
          <p className="text-sm text-gray-700 ">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-2xl font-thin"></i>
          <h5 className="text-lg mb-2 font-medium ">55Km</h5>
          <p className="text-sm text-gray-700 ">Distance Covered</p>
        </div>
        <div className="text-center">
          <i className="ri-file-chart-fill text-2xl font-thin"></i>
          <h5 className="text-lg mb-2 font-medium ">20</h5>
          <p className="text-sm text-gray-700 ">Total Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
