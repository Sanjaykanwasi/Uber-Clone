import React from "react";
import car from "../Images/car.webp";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-4 top-4 h-10 w-10 flex items-center justify-center rounded-full  bg-white"
      >
        <i className="ri-home-4-line text-xl font-bold"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-3">
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
        <button className="w-full mt-5 bg-black rounded-2xl p-2 text-white font-semibold">
          Pay Amount
        </button>
      </div>
    </div>
  );
};

export default Riding;
