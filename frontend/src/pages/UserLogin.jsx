import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form onSubmit={(e) => submitHandler(e)} action="">
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2  border w-full text-lg placeholder:test-base"
            placeholder="email@gmail.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2  border w-full text-lg placeholder:test-base"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:test-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New to Uber?
          <Link className="text-blue-600" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] text-white flex justify-center items-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:test-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
