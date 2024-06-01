/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NnGQZ7M9Tj6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import { useState ,useEffect} from 'react';



export default function Component() {
  const [totalFreelancers, setTotalFreelancers] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    <div className="flex w-full h-screen">
    <div
      className={`fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%] h-[100%]`}
    >
      <div className="flex flex-col gap-6">
        <button
          onClick={toggleMenu}
          className="md:hidden p-5 absolute text-xl top-0 right-0 z-50"
        >
          X
        </button>

        <nav class="flex flex-col gap-2 h-full">
        <div class="flex items-center gap-4">
          <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
            <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
          </span>
          <div class="grid gap-1">
            <h1 class="text-xl font-semibold md:text-2xl">Jared Palmer</h1>
            <p class="text-sm text-gray-700 dark:text-gray-400">Software Engineer</p>
          </div>
        </div>
        <Link href={"/companydashboard"} className="flex items-center mt-10 gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
         
        Dashboard
       </Link>

       <Link href={"/companydashboard/personalinfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
         
        Profile
       </Link>

       <Link href={"/companydashboard/professionalinfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
         
       professional info
       </Link>

       <Link href={"/companydashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
         
        Projects
       </Link>
       <Link href={"/companydashboard/viewfreelancer"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800 ">
         
         View Freelancer
        </Link>
         
          
          
        </nav>
      </div>
    </div>

    <div className="flex flex-col w-full text-white ">
      <header className="bg-gray-900 shadow-sm dark:bg-gray-900">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
            
            <div className="">
            <h1 className="text-3xl font-bold tracking-tight text-white dark:text-gray-100">Freelancer Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white dark:text-gray-400"
              >
                <path d="M2 20h.01"></path>
                <path d="M7 20v-4"></path>
                <path d="M12 20v-8"></path>
                <path d="M17 20V8"></path>
                <path d="M22 4v16"></path>
              </svg>
            </button>
            <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white dark:text-gray-400"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
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