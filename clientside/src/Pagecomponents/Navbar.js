'use client';
import Link from "next/link";
import { useState } from "react";
import userIcon from '../../public/user.svg';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/context";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const { isloggedin, isfreelancer } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed flex items-center w-screen h-16 px-[1rem] md:px-[5rem] bg-black justify-between z-50">
        <h3 className="text-2xl text-white logo">Dehix</h3>
        <div className="hidden h-auto text-white md:flex min-w-[50vw] navlink justify-evenly first:bg-red-500">
        
     {!isloggedin?<> <Link href={"/"}>Home</Link>
  
      <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link></>:null}
              {  isloggedin && !isfreelancer ?<Link href={"/hire"} >Hire</Link>:<Link href={"/jobs"} >Jobs</Link>}
          {isloggedin && isfreelancer ? (
            <>
              <Link href={"/freelancerDashboard"}>Dashboard</Link>
              <Link href={"/freelancerDashboard/personalInfo"}>Profile</Link>
              
              <Link href={"/freelancerDashboard/projects"}>Projects</Link>
             
            </>
            
          ) : isloggedin && !isfreelancer ? (
            <><Link href={"/companydashboard"}>Dashboard</Link>
            <Link href={"/companydashboard/personalinfo"}> Profile</Link>
             
              <Link href={"/companydashboard/projects"}>Projects</Link>
            </>
           
          ) : null}
          <button disable="true"><strong>Wallet(soon)</strong></button>
        </div>
        <div className="flex Login_register justify-evenly w-38">
          {isloggedin ? (
            <>
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 z-50 rounded-full dark:bg-gray-600">
                <Link href="/freelancerDashboard/profile">
                  <svg className="absolute w-12 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
              <Button className="hidden ml-7 md:block">
                <Link href={"/logout"}>Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="hidden mx-2 md:block">
                <Link href="/login">Login</Link>
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
        <IoMdMenu size={30}   color="white" />
        </button>
        {isMenuOpen && (
          <div className="md:hidden h-[30rem] text-2xl  text-white w-screen navlink ml-[-1rem] first:bg-red-500 flex flex-col z-50 items-center justify-center mt-[34rem] absolute bg-black">
            <Link href={"/"} className="py-2">Home</Link>
            <Link href={"/"} className="py-2">About</Link>
            <Link href={"/"} className="py-2">Contect</Link>
            <Link href={"/jobs"} className="py-2 text-red-500">Jobs</Link>
            <Link href={"/"} className="py-2">Wallet(soon)</Link>
           
            {!isloggedin ? (
              <>
                <Link href="/login" className="py-2">Login</Link>
           
                  <Link href="/FreelancerRegister" className="py-2">Register As Freelancer</Link>
               
                
                  <Link href="/BusinessRegister" className="py-2">Register As Business</Link>
           
              </>
            ) : (
              <div className="py-2 text-white flex flex-col items-center">
              <Link href={"/freelancerDashboard"} className="py-2">Dashboard</Link>
             
              <Link href={"/logout"} className="py-2">Logout</Link>
              </div>
              
            )}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
