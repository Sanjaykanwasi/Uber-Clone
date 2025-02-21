import React from "react";
import car from "../Images/car.webp";
import car2 from "../Images/car2.jpeg";
import bike from "../Images/bike.webp";
import auto from "../Images/auto.webp";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-3 text-center  top-0 absolute w-[94%] "
      >
        <i className=" ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      {/* Car 1 */}
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex w-full items-center mb-2 p-3 justify-between border-3 border-gray-200 active:border-black rounded-xl"
      >
        <img className="h-12" src={car} alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Premier{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h4 className="font-medium text-sm">2 min away</h4>
          <p className="font-normal text-gray-700 text-xs">
            Comfortable sedan rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">₹300</h2>
      </div>
      {/* Car 2 */}
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex w-full items-center mb-2 p-3 justify-between border-3 border-gray-200 active:border-black rounded-xl"
      >
        <img className="h-12" src={car2} alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h4 className="font-medium text-sm">2 min away</h4>
          <p className="font-normal text-gray-700 text-xs">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">₹200</h2>
      </div>
      {/* Bike */}
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex w-full items-center mb-2 p-3 justify-between border-3 border-gray-200 active:border-black rounded-xl"
      >
        <img className="h-12" src={bike} alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h4 className="font-medium text-sm">5 min away</h4>
          <p className="font-normal text-gray-700 text-xs">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">₹50</h2>
      </div>
      {/* Auto */}
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
        }}
        className="flex w-full items-center mb-2 p-3 justify-between border-3 border-gray-200 active:border-black  rounded-xl"
      >
        <img className="h-12" src={auto} alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>2
            </span>
          </h4>
          <h4 className="font-medium text-sm">3 min away</h4>
          <p className="font-normal text-gray-700 text-xs">
            Affordable auto rides
          </p>
        </div>
        <h2 className="font-semibold text-xl">₹100</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
