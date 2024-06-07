"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation';
import VerticalNav from "@/components/VerticalNav/VerticalNav"
import Header from "@/components/Header/Header"

export default function Component({params}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter(); 
  console.log(params)
  const fetchdata= async ()=>{
    try {
   
    const token= localStorage.getItem("token")
      const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Senddatatocompany`,{
        method:"GET",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const data=await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
  fetchdata()
  },[])
  return (
    <div className="flex w-full h-screen text-white">
        <VerticalNav
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        isCompanyDashboard={true}
          userName={'ayush badoria'}
          userProfession={'Software Developer'}
        />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Projects"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <main className="container md:pl-72 flex items-center justify-center w-screen">
     
          <div className="container flex flex-col md:flex-row">
          <section className="flex flex-col items-center md:ml-5 mt-5 justify-center  p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
            <div className="col-span-2 space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-400">Start Date</p>
                    <p>June 1, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">End Date</p>
                    <p>August 31, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Status</p>
                    <p className="font-medium text-green-500">In Progress</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Budget</p>
                    <p>$50,000</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Description</h2>
                <p className="text-gray-400 dark:text-gray-400">
                  This project aims to develop a new e-commerce platform for our company. The platform will feature a
                  modern and user-friendly design, with advanced search and filtering capabilities, as well as a robust
                  inventory management system. The project will also include the integration of various payment
                  gateways, and a comprehensive analytics dashboard to track sales and customer behavior.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Team</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="Sofia Davis" />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sofia Davis</p>
                      <p className="text-sm text-gray-500">Project Manager</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="Liam Nguyen" />
                      <AvatarFallback>LN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Liam Nguyen</p>
                      <p className="text-sm text-gray-500">Lead Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="Olivia Martin" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Olivia Martin</p>
                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="Isabella Nguyen" />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Isabella Nguyen</p>
                      <p className="text-sm text-gray-500">QA Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
            <section className="flex flex-col items-start md:ml-5 mt-5 justify-start w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold">Freelancer Applied</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col items-center justify-between p-4 bg-gray-900 rounded-lg dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                    
                      <div>
                        <p className="font-medium">adom walter</p>
                        <p className="text-sm text-gray-500">Last updated: June 5, 2023</p>
                      </div>
                    </div>
                    <button className="bg-cyan-700 px-3 py-2 mt-3 rounded" >
                      Allot Project
                    </button>
                  </div>
              
                </div>
              </div>
            </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

