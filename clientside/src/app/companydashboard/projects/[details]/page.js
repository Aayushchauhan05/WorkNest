"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useEffect } from "react"

export default function Component() {
  const fetchdata= async ()=>{
    try {
    const{token}=useAuth();
      const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api`,{
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
    <div className="flex min-h-[100dvh]">
      <div className="flex flex-col gap-6 p-6 text-white bg-gray-900">
        <Link href={"/companydashboard"} className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <Grid3x3Icon className="w-6 h-6" />
          <span>Dashboard</span>
        </Link>
        <div className="flex-1 space-y-4">
          <h3 className="text-sm font-medium text-gray-400">Project</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href={"companydashboard/projects"}
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              prefetch={false}
            >
              <FileIcon className="w-5 h-5" />
              <span>Project Details</span>
            </Link>
            <Link
              href={"companydashboard/viewfreelancer"}
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              prefetch={false}
            >
              <UsersIcon className="w-5 h-5" />
              <span>Project Team</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              prefetch={false}
            >
              <FileTextIcon className="w-5 h-5" />
              <span className="pl-30px">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  prefetch={false}
                >
                  <FileTextIcon className="w-5 h-5" />
                  <span>Project Files</span>
                </Link>
              </span>
            </Link>
           
          </nav>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <header className="px-6 py-4 text-white bg-gray-900">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Project Roadmap</h1>
            <div className="flex items-center gap-4">
              <Button variant="secondary" size="sm">
                Edit Project
              </Button>
              <Button variant="primary" size="sm">
                Share Project
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 py-10 pl-10 bg-white">
          <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
            <div className="col-span-2 space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-500">Start Date</p>
                    <p>June 1, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">End Date</p>
                    <p>August 31, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Status</p>
                    <p className="font-medium text-green-500">In Progress</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Budget</p>
                    <p>$50,000</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Description</h2>
                <p className="text-gray-700 dark:text-gray-400">
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
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-xl font-bold">Project Files</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileIcon className="w-6 h-6 text-gray-500" />
                      <div>
                        <p className="font-medium">Project Proposal.pdf</p>
                        <p className="text-sm text-gray-500">Last updated: June 5, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileIcon className="w-6 h-6 text-gray-500" />
                      <div>
                        <p className="font-medium">Project Timeline.xlsx</p>
                        <p className="text-sm text-gray-500">Last updated: July 15, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="flex items-center gap-2">
                      <FileIcon className="w-6 h-6 text-gray-500" />
                      <div>
                        <p className="font-medium">Project Budget.pdf</p>
                        <p className="text-sm text-gray-500">Last updated: August 1, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function FileTextIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function Grid3x3Icon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}