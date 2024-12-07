import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    console.log(captainData);
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
          <h3 className="text-base font-semibold mb-2">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2  border w-full font-medium text-base placeholder:test-sm"
            placeholder="email@gmail.com"
          />

          <h3 className="text-base font-semibold mb-2">Enter Your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2  border w-full font-medium text-base placeholder:test-sm"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full font-medium text-base placeholder:test-sm">
            Login
          </button>
        </form>
        <p className="text-center font-semibold">
          Join a fleet?
          <Link className="text-blue-600" to="/captain-signup">
            Sign up as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to="/login" className="bg-[#d5622d] text-white flex justify-center items-center font-semibold mb-5 rounded px-4 py-2 w-full font-medium text-base placeholder:test-sm">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
