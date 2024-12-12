import React from 'react'
import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { captainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(captainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };
    
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    if (res.status === 200) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("captain-token", data.token);
      navigate("/captain-home");
    }
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
