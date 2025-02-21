import React from "react";
import car from "../Images/car.webp";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriverPanel(false);
        }}
        className="p-3 text-center  top-0 absolute w-[94%] "
      >
        <i className=" ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-14" src={car} alt="" />
        <div className="text-right">
          <h2 className="text-lg font-medium">Mayank Rawat</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">UK17 M 6969</h4>
          <p className="text-sm text-gray-700">Hyundai Creta</p>
        </div>
      </div>
      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-4 p-3 border-b-2 border-gray-300">
            <i className="ri-map-pin-line text-lg"></i>
            <div>
              <h3 className="text-base font-medium">L-86, Durga Colony</h3>
              <p className="text-sm -mt-1">Roorkee, Uttarakhand</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border-b-2 border-gray-300">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-base font-medium">L-86, Durga Colony</h3>
              <p className="text-sm -mt-1">Roorkee, Uttarakhand</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 ">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-base font-medium">₹200</h3>
              <p className="text-sm -mt-1">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
