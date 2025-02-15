import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      number: number,
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setNumber("");
  };
  return (
    <div>
      <div className="p-7 bg-center bg-cover bg-[url(https://images.hdqwalls.com/download/ipad-air-gradient-sk-1080x1920.jpg)] h-screen flex flex-col justify-between">
        <div>
          <Link to={"/"}>
            <img
              className="w-15 mb-7"
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
              alt=""
            />
          </Link>
          <div className="mb-7">
            <p className="text-2xl font-bold">Welcome to Captain Signup</p>
          </div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2 ">Enter your name</h3>
            <div className="flex gap-4">
              <input
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 "
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
              <input
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 "
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 ">Enter your number</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full "
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="Number"
            />

            <h3 className="text-lg font-medium mb-2 ">
              Enter your email address
            </h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <h3 className="text-lg font-medium mb-2 ">Enter your password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2 w-full ">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have a account?
            <Link to="/captainlogin" className="text-blue-600">
              {" "}
              Login in here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-center">Created by Sanjay with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignin;
