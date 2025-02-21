import React from "react";
import car from "../Images/car.webp";
import "remixicon/fonts/remixicon.css";

const ConfirmedVehicles = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmVehiclePanel(false);
        }}
        className="p-3 text-center  top-0 absolute w-[94%] "
      >
        <i className=" ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>
      <div className="flex justify-between gap-2 flex-col items-center">
        <img className="h-24" src={car} alt="" />
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
        <button
          onClick={() => {
            props.setVehicleFoundPanel(true);
            props.setConfirmVehiclePanel(false);
            props.setVehiclePanelOpen(false);
          }}
          className="w-full mt-5 bg-black rounded-2xl p-2 text-white font-semibold"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedVehicles;
