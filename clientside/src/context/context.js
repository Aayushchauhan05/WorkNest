"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const authcontext = createContext();

export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isloggedin, setIsloggedin] = useState(false);
  const [isfreelancer, setfreelancer] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const freelancer = localStorage.getItem("freelancer");

    if (storedToken) {
      setToken(storedToken);
    }

    if (freelancer) {
      setfreelancer(freelancer === "true");
    }
  }, []);

  useEffect(() => {
    setIsloggedin(!!token);
  }, [token]);

  useEffect(() => {
    if (isfreelancer !== null) {
      localStorage.setItem("freelancer", isfreelancer);
    }
  }, [isfreelancer]);

  const authtoken = (token, freelancercheck) => {
    localStorage.setItem("token", token);
    setToken(token);
    localStorage.setItem("freelancer", freelancercheck);
    setfreelancer(freelancercheck);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setfreelancer(null);
  };

  return (
    <authcontext.Provider value={{ token, setToken, authtoken, logout, isloggedin, setfreelancer, isfreelancer }}>
      {children}
    </authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authcontext);
};
