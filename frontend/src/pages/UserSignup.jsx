import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {userDataContext} from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  

  const { user, setUser } = React.useContext(userDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (res.status === 201) {
      const data = res.data;
      
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <h3 className="text-base font-semibold mb-2">What's your Name?</h3>

          <div className=" flex gap-2  mb-5">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-[#eeeeee] rounded px-4 py-2  border w-1/2 font-medium text-base placeholder:test-sm"
              placeholder="First Name"
            />

            <input
              type="text"
            
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2  border w-1/2 font-medium text-base placeholder:test-sm"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base font-semibold mb-2">What's your email?</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2  border w-full font-medium text-base placeholder:test-sm"
            placeholder="email@gmail.com"
          />

          <h3 className="text-base font-semibold mb-2">Enter Your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2  border w-full font-medium text-base placeholder:test-sm"
            placeholder="Password"
          />

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full font-medium text-base placeholder:test-sm">
            Sign Up
          </button>
        </form>
        <p className="text-center font-semibold">
          Already have an account?
          <Link className="text-blue-600" to="/login">
            Sign in
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
