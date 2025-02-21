import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  // Sample array of locations
  const locations = [
    "L-86, Durga Colony, Roorkee, Uttarakhand",
    "Flat No 1239, GBP Crest, Kharar, Punjab",
    "House No 68, Ashok Nagar, Roorkee, Uttarakhand",
    "J-56, Durga Colony, Roorkee, Uttarakhand",
    "K-16, Durga Colony, Roorkee, Uttarakhand",
  ];

  return (
    <div>
      {/* Sample Data for now */}
      {locations.map(function (element, index) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex border-2  border-white active:border-black p-3 rounded-xl  gap-5 items-center justify-start"
          >
            <h2 className="bg-[#eee] h-12 w-12 rounded-full flex items-center justify-center">
              <i className="ri-home-line text-2xl"></i>
            </h2>
            <h4 className="font-medium">{element}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
