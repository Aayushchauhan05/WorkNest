"use client";
import Link from "next/link";
import { useState } from 'react';

import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";

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
     <main className="container grid gap-8 px-6 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3">

          <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Company Overview</h3>
            </div>
            <div className="grid gap-4 p-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Freelancers Hired</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">3</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Total Money Spent</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">$0</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Pending Projects</h3>
              <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                View All
              </a>
            </div>
            <div className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">1</h3>
                  <p className="text-gray-500 dark:text-gray-400">Pending Projects</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10 text-gray-500 dark:text-gray-400"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="border rounded-lg shadow-sm min-h-72 bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Completed Projects</h3>
              <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                View All
              </a>
            </div>
            <div className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">0</h3>
                  <p className="text-gray-500 dark:text-gray-400">Completed Projects</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10 text-gray-500 dark:text-gray-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="border rounded-lg shadow-sm min-h-72 bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Earnings</h3>
              <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                View All
              </a>
            </div>
            <div className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">$0</h3>
                  <p className="text-gray-500 dark:text-gray-400">Total Earnings</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-10 h-10 text-gray-500 dark:text-gray-400"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div></>
  )
}

export default page