import React, { useState, useEffect } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(userDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};
export default UserProtectWrapper;
