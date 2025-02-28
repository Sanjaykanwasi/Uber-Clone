import React from "react";
import driver from "../Images/driver.jpg";
import "remixicon/fonts/remixicon.css";

const RidePopUp = (props) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-3 text-center  top-0 absolute w-[94%] "
      >
        <i className=" ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Ride for You</h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-200 rounded-2xl">
        <div className="flex items-center gap-4 ">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={driver}
            alt=""
          />
          <h2 className="text-xl font-medium">Mayank Rawat</h2>
        </div>
        <h5 className="text-lg font-semibold">1.5Km</h5>
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
        <div className="flex w-full mt-5 items-center justify-between">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className="bg-black rounded-2xl p-3 px-10 text-white font-semibold"
          >
            Accept
          </button>
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="mt-0.5 bg-gray-500 rounded-2xl p-3 px-10 text-white font-semibold"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
