"use client"

import { createContext, useContext } from "react";

export const authcontext= createContext();

export const Authprovider=({children})=>{



    return <authcontext.Provider value={{}}>{children}</authcontext.Provider>
}

export const useAuth=()=>{
    return useContext(authcontext);
}