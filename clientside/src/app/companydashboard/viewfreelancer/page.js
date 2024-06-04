/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NnGQZ7M9Tj6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import { useState ,useEffect} from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";



export default function Component() {
  const [totalFreelancers, setTotalFreelancers] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [freelancers, setFreelancers] = useState([
    {
      id: 1,
      name: "Rohan Patil",
      skills: ["JavaScript", "React", "Node.js"],
      hourlyRate: 5,
      hoursWorked: 80,
    },
    {
      id: 2,
      name: "Rani Sharma",
      skills: ["Python", "Django", "SQL"],
      hourlyRate: 9,
      hoursWorked: 60,
    },
    {
      id: 3,
      name: "Amit Trivedi",
      skills: ["Java", "Spring", "Hibernate"],
      hourlyRate: 7,
      hoursWorked: 70,
    },
  
   
  ])
  useEffect(() => {
    setTotalFreelancers(freelancers.length)
  }, [freelancers])
  return (
    <div className="flex w-full h-screen ">
    <VerticalNav isMenuOpen={isMenuOpen} isActive={"viewfreelancers"} toggleMenu={toggleMenu} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"} />
    <div className="flex flex-col w-full">
      <Header
        companyName="Company XYZ"
        pageName="Freelancer Page"
        isCompanydashboard={true}
        toggleMenu={toggleMenu}

      />
      
    <main className="container pt-5 text-white">
    <section className="p-6 mb-8 bg-gray-700 rounded-lg shadow-md dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
            <div className="p-4 bg-gray-900 rounded-lg  dark:bg-gray-800">
              <h2 className="mb-2 text-2xl font-bold text-gray-100 dark:text-gray-100">Total Freelancers</h2>
              <p className="text-4xl font-bold text-gray-100 dark:text-gray-100">{totalFreelancers}</p>
            </div>
          </div>
        </section>
        <section className="p-6 bg-gray-700 rounded-lg shadow-md dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-100 dark:text-gray-100">Freelancer List</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-gray-100 bg-gray-900 dark:bg-gray-800 dark:text-gray-100">
                  <th className="px-4 py-3 font-bold text-left">Name</th>
                  <th className="px-4 py-3 font-bold text-left">Skills</th>
                  <th className="px-4 py-3 font-bold text-left">Hourly Rate</th>
                  <th className="px-4 py-3 font-bold text-left">Hours Worked</th>
                </tr>
              </thead>
              <tbody>
                {freelancers.map((freelancer) => (
                  <tr key={freelancer.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3">{freelancer.name}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-sm text-gray-100 bg-gray-900 rounded-md dark:bg-gray-800 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">${freelancer.hourlyRate}/hr</td>
                    <td className="px-4 py-3">{freelancer.hoursWorked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    </main>
      </div>
    </div>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}