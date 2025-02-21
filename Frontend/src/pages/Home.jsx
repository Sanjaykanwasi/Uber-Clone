import React from "react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicles from "../components/ConfirmedVehicles";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const confirmVehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelVehicleFoundRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmVehiclePanel, setConfirmVehiclePanel] = useState(false);
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  // For Address panel
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
          padding: 20,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  // For Car Panel
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  // For Confirmed Car Panel
  useGSAP(
    function () {
      if (confirmVehiclePanel) {
        gsap.to(confirmVehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmVehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmVehiclePanel]
  );

  // For Looking for driver panel
  useGSAP(
    function () {
      if (vehicleFoundPanel) {
        gsap.to(panelVehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(panelVehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFoundPanel]
  );

  // For Waiting for driver panel
  useGSAP(
    function () {
      if (waitingForDriverPanel) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-15 ml-7 pt-7 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt=""
      />
      {/* Image Section */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
        />
      </div>
      {/* Search Section */}
      <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className="h-[25%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-3xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Cab</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-9 rounded-full bg-black"></div>
            <input
              className="bg-[#eee] py-2 px-8 rounded-lg w-full mt-5"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              type="text"
              placeholder="Add a pick-up point"
            />
            <input
              className="bg-[#eee] py-2 px-8 rounded-lg w-full mt-5"
              type="text"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>
      {/* New panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 pt-12"
      >
        <VehiclePanel
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={confirmVehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmedVehicles
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setVehicleFoundPanel={setVehicleFoundPanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={panelVehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFoundPanel={setVehicleFoundPanel} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default Home;
