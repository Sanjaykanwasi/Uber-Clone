import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-center bg-cover bg-[url(https://images.hdqwalls.com/download/couple-kiss-in-cyber-city-qc-1440x2560.jpg)] h-screen pt-7 flex justify-between flex-col w-full">
        <img
          className="w-15 ml-7"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt=""
        />
        <div className="bg-yellow-200 pb-7 py-5 px-5">
          <h2 className="text-2xl font-bold">
            Get Started with Uber by Sanjay
          </h2>
          <Link
            className="w-full flex justify-center items-center mt-5 py-3 rounded bg-black"
            to="/login"
          >
            <p className="text-white">Continue</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
