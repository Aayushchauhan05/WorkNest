/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NnGQZ7M9Tj6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Component() {
  const [totalFreelancers, setTotalFreelancers] = useState(0)
  const [freelancers, setFreelancers] = useState([
    {
      id: 1,
      name: "John Doe",
      skills: ["JavaScript", "React", "Node.js"],
      hourlyRate: 50,
      hoursWorked: 80,
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: ["Python", "Django", "SQL"],
      hourlyRate: 45,
      hoursWorked: 60,
    },
    {
      id: 3,
      name: "Bob Johnson",
      skills: ["Java", "Spring", "Hibernate"],
      hourlyRate: 55,
      hoursWorked: 70,
    },
    {
      id: 4,
      name: "Sarah Lee",
      skills: ["PHP", "Laravel", "MySQL"],
      hourlyRate: 40,
      hoursWorked: 90,
    },
    {
      id: 5,
      name: "Tom Wilson",
      skills: ["Ruby", "Ruby on Rails", "PostgreSQL"],
      hourlyRate: 60,
      hoursWorked: 75,
    },
    {
      id: 6,
      name: "Emily Davis",
      skills: ["C#", ".NET", "SQL Server"],
      hourlyRate: 50,
      hoursWorked: 85,
    },
    {
      id: 7,
      name: "Michael Brown",
      skills: ["Swift", "iOS", "Xcode"],
      hourlyRate: 65,
      hoursWorked: 65,
    },
    {
      id: 8,
      name: "Olivia Anderson",
      skills: ["Kotlin", "Android", "Firebase"],
      hourlyRate: 45,
      hoursWorked: 80,
    },
  ])
  useEffect(() => {
    setTotalFreelancers(freelancers.length)
  }, [freelancers])
  return (
    <div className="flex w-full min-h-screen bg-cyan-100 dark:bg-black">
      <div className="w-64 p-6 mr-8 text-white bg-black rounded-lg shadow-md md:p-10">
        <nav className="space-y-4">
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800" prefetch={false}>
            <UserIcon className="w-5 h-5" />
            <span>Freelancers</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800" prefetch={false}>
            <UserIcon className="w-5 h-5" />
            <span>Personal Info</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800" prefetch={false}>
            <UserIcon className="w-5 h-5" />
            <span>Professional Info</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800" prefetch={false}>
            <UserIcon className="w-5 h-5" />
            <span>Projects</span>
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-6 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Freelancer Dashboard</h1>
        </header>
        <section className="p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
            <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Total Freelancers</h2>
              <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">{totalFreelancers}</p>
            </div>
          </div>
        </section>
        <section className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Freelancer List</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
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
                            className="px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300"
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