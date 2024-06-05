"use client";
import Link from "next/link";
import { useState } from 'react';

import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";
import Card from "@/components/Card/Card";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
  
  <div className="flex w-full h-screen ">
  <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"dashboard"} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"}/>
      <div className="flex flex-col w-full">
      <Header 
        companyName="Company XYZ"
        pageName="Dashboard"
        isCompanydashboard={true} 
        toggleMenu={toggleMenu}
      />
        <main className="md:pl-64 lg:pl-72 flex gap-4">
        <div className="w-2/3">  <Card isDashboard={true} isProjectDashboard={true}/></div>
       <Card isDashboard={true} isProfileDashboard={true}/>
        </main>
     
      </div>
    </div></>
  )
}

export default page