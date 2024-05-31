"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const authcontext = createContext();

export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isloggedin, setIsloggedin] = useState(false);
  const [isfreelancer,setfreelancer]=useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Update isloggedin whenever the token changes
    setIsloggedin(!!token);
  }, [token]);

  const authtoken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <authcontext.Provider value={{ token, setToken, authtoken, logout, isloggedin,setfreelancer,isfreelancer }}>
      {children}
    </authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authcontext);
};
