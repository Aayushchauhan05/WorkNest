'use client'
import Link from "next/link";
import { useState } from "react";
import userIcon from '../../public/user.svg';

import { Button } from "@/components/ui/button";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming initially user is logged in
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed flex items-center w-screen h-16 px-[1rem] md:px-[5rem] bg-black justify-between">
        <h3 className="logo text-white text-2xl ">Dehix</h3>
        <div className="hidden md:flex h-auto text-white min-w-96 navlink justify-evenly first:bg-red-500">
          <Link href={"/"}>Home</Link>
          <Link href={"/jobs"} className="text-red-500 ">Jobs</Link>
          <Link href={"/freelancerDashboard"}>Dashboard</Link>
        </div>
        <div className="flex Login_register justify-evenly w-36">
          {isLoggedIn ? (
            <>
               <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" >
            <Link href="/freelancerDashboard/profile">
         
              
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            
    
            </Link>
            </div>
             <Button  onClick={handleLogout} className="ml-7 hidden md:block">
             logout
           </Button></>
          ) : (
            <>
              <Button asChild className="mx-4 hidden md:block">
                <Link href="/login" >Login</Link>
              </Button>
              <Button asChild className="mx-4 hidden md:block">
                <Link href="/logout">Register</Link>
              </Button>
            </>
          )}
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden h-[30rem] text-2xl p-20 text-white w-screen navlink ml-[-1rem] first:bg-red-500 flex flex-col items-center justify-center mt-[34rem] absolute bg-black">
            <Link href={"/"} className="py-2">Home</Link>
            <Link href={"/jobs"} className="text-red-500 py-2">Jobs</Link>
            <Link href={"/freelancerDashboard"} className="py-2">Dashboard</Link>
            {!isLoggedIn?<><Link href="/login" className=" py-2">Login</Link>
            <Link href="/logout" className="py-2">Register</Link></>:<> <h2 onClick={handleLogout} className="py-2">Logout</h2></>}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
