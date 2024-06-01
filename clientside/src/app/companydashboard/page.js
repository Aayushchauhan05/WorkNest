"use client";
import Link from "next/link";
import { useState } from 'react';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
  
  <div className="flex w-full h-screen ">
   <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50 ">X</button>
           
            <nav class="flex flex-col gap-2 h-screen">
            <div class="flex items-center gap-4">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
                <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
              </span>
              <div class="grid gap-1">
                <h1 class="text-xl font-semibold md:text-2xl">Jared Palmer</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <Link href={"/companydashboard"} className="flex items-center mt-10 gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800 ">
             
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
           <Link href={"/companydashboard/viewfreelancer"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
             
             View Freelancer
            </Link>
             
              
              
            </nav>
          </div>
        </div>
      <div className="flex flex-col w-full">
        <header className="bg-gray-900 shadow-sm dark:bg-gray-900">
          <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex items-center gap-4">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500 dark:text-gray-400">
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                </button>
              <span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
                <img className="w-full h-full aspect-square" src="/placeholder-user.jpg" />
              </span>
              <div className="">
                <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">Acme Inc.</h1>
                <p className="text-cyan-500 dark:text-gray-400">Company Dashboard</p>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6 text-white dark:text-gray-400"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="container grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Company Overview</h3>
            </div>
            <div className="grid gap-4 p-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Freelancers Hired</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">42</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Total Money Spent</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">$125,678</p>
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
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">12</h3>
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
          <div className="border rounded-lg min-h-72 shadow-sm bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Completed Projects</h3>
              <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                View All
              </a>
            </div>
            <div className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">28</h3>
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
          <div className="border rounded-lg min-h-72 shadow-sm bg-card text-card-foreground" data-v0-t="card">
            <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Earnings</h3>
              <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                View All
              </a>
            </div>
            <div className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">$12,345</h3>
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
        <section className=" shadow-sm dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="mb-6 text-2xl font-bold text-white dark:text-gray-50">Pending Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project A</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>

              <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project B</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-green-500 dark:text-yellow-400">Completed</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>

              <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project C</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-red-500 dark:text-yellow-400">rejected</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>

              <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project A</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>
              
            </div>
          </div>
        </section>
        <section className=" shadow-sm dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="mb-6 text-2xl font-bold text-white dark:text-gray-50">Completed Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project x</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>

              <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project Y</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>


              <div className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
                    <h3 className="text-lg font-bold text-center ">Project Z</h3>
                    <Link
                    className="text-sm text-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </Link>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                       
                      </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                        <p className="text-gray-500 dark:text-gray-400">ABC Inc</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <span className=" font-medium">Due Date:</span>
                        <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                  <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-green-500 dark:text-yellow-400">Completed</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div></>
  )
}

export default page