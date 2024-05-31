'use client'
import Link from "next/link";
import { useState } from "react";
import userIcon from '../../public/user.svg';

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/context";

function Navbar() {
  const {isloggedin,isfreelancer} = useAuth() 
  const [isMenuOpen,setIsMenuOpen] = useState(false); 

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed flex items-center w-screen h-16 px-[1rem] md:px-[5rem] z-50 bg-black justify-between">
        <h3 className="logo text-white text-2xl ">Dehix</h3>
        <div className="hidden md:flex h-auto text-white min-w-96 navlink justify-evenly first:bg-red-500">
          <Link href={"/"}>Home</Link>
          <Link href={"/jobs"} className="text-red-500 ">Jobs</Link>
          {isloggedin && isfreelancer==true ?<Link href={"/freelancerDashboard"}>Dashboard</Link>:isloggedin && !isfreelancer?<Link href={"/companydashboard"}>Dashboard</Link>:<p>Login to acess dashboard</p>}
        </div>
        <div className="flex Login_register justify-evenly w-38 ">
          {isloggedin ? (
            <>
               <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" >
            <Link href="/freelancerDashboard/profile">
         
              
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            
    
            </Link>
            </div>
             <Button  className="hidden ml-7 md:block">
             <Link href={"/logout"}>logout</Link>
           </Button></>
          ) : (
            <>
              <Button asChild className="hidden mx-2 md:block">
                <Link href="/login" >Login</Link>
              </Button>
              <Button asChild className="hidden mx-2 md:block">
                <Link href="/FreelancerRegister">Register As Freelancer</Link>
              </Button>
              <Button asChild className="hidden mx-2 md:block">
                <Link href="/BusinessRegister">Register As Business</Link>
              </Button>
            </>
          )}
        </div>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden h-[30rem] text-2xl p-20 text-white w-screen navlink ml-[-1rem] first:bg-red-500 flex flex-col items-center justify-center mt-[34rem] absolute bg-black">
            <Link href={"/"} className="py-2">Home</Link>
            <Link href={"/jobs"} className="py-2 text-red-500">Jobs</Link>
            <Link href={"/freelancerDashboard"} className="py-2">Dashboard</Link>
            {!isloggedin?<><Link href="/login" className="py-2 ">Login</Link>
            <Button asChild className="hidden mx-2 md:block">
                <Link href="/FreelancerRegister" className="text-white">Register As Freelancer</Link>
              </Button>
              <Button asChild className="hidden mx-2 text-white md:block ">
                <Link href="/BusinessRegister" className="text-white">Register As Business</Link>
              </Button></>:<> <h2 className="py-2 text-white "> <Link>Logout</Link> </h2></>}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
