import React from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { setUser, setToken, navigate } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
