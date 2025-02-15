import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-center bg-cover bg-[url(https://images.hdqwalls.com/download/ipad-air-gradient-sk-1080x1920.jpg)] p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={"/"}>
          <img
            className="w-15 mb-7"
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
        </Link>
        <div className="mb-7">
          <p className="text-2xl font-bold">Welcome to User Login</p>
        </div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
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
            Login
          </button>
        </form>
        <p className="text-center">
          New here?
          <Link to="/signup">
            {" "}
            <span className="text-blue-400"> Create New Account</span>
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captainlogin"
          className="bg-cyan-900 flex justify-center items-center font-semibold mb-5 rounded px-4 py-2 w-full "
        >
          <p className="text-white">Sign in as Captain</p>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
