import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null); 
  const [token, setToken] = useState(null); 
  const location = useLocation();
  const navigate = useNavigate();

  // Load user & token from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
  }, []);

  // Set axios default header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const fetchIsAdmin = async () => {
    if (!token) return; // Prevent call if token not ready
    try {
      const { data } = await axios.get("/api/admin/is-admin");
      setIsAdmin(data.isAdmin);

      if (!data.isAdmin && location.pathname.startsWith("/admin")) {
        navigate("/");
        toast.error("You are not authorized to access admin dashboard");
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
      toast.error("Failed to check admin status");
    }
  };

  useEffect(() => {
    if (user && token) {
      fetchIsAdmin();
    }
  }, [user, token]);

  const value = {
    axios,
    user,
    token,
    setUser,
    setToken,
    navigate,
    isAdmin,
    fetchIsAdmin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
