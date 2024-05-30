import Link from "next/link"

function page() {
  // const initailVariables={
  //   firstName:"",
  //   lastName:"",
  //   companyName:"",
  //   companySize:"",
  // }
  return (
    <>
    <div className="flex w-full min-h-screen">
      <div className="hidden p-6 bg-gray-900 text-gray-50 md:block">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
              <img className="w-full h-full aspect-square" src="/placeholder-user.jpg" />
            </span>
            <div>
            
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-gray-400">CEO, Acme Inc.</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="#">
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
                className="w-5 h-5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </a>
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="#">
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
                className="w-5 h-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </a>
            <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href={"/companydashboard/viewfreelancer"}>
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
                className="w-5 h-5"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              Employees
            </Link>
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="#">
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
                className="w-5 h-5"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Finances
            </a>
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="#">
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
                className="w-5 h-5"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Settings
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="bg-white shadow-sm dark:bg-gray-900">
          <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground md:hidden">
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
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
              <span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
                <img className="w-full h-full aspect-square" src="/placeholder-user.jpg" />
              </span>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50">Acme Inc.</h1>
                <p className="text-gray-500 dark:text-gray-400">Company Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
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
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                >
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                  <path d="M17 20V8"></path>
                  <path d="M22 4v16"></path>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground">
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
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
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
          <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
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
          <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
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
        <section className="bg-white shadow-sm dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">Pending Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project A</h3>
                  <a
                    className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="grid gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                    <p className="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                      <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project B</h3>
                  <a
                    className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="grid gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                    <p className="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                      <p className="text-gray-500 dark:text-gray-400">June 15, 2023</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project C</h3>
                  <a
                    className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="grid gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Branding Campaign</h3>
                    <p className="text-gray-500 dark:text-gray-400">Client: DEF Ltd.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                      <p className="text-gray-500 dark:text-gray-400">July 1, 2023</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white shadow-sm dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">Completed Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project X</h3>
                  <a
                    className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="grid gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                    <p className="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                      <p className="text-gray-500 dark:text-gray-400">April 15, 2023</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                      <p className="text-green-500 dark:text-green-400">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project Y</h3>
                  <a
                    className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    View
                  </a>
                </div>
                <div className="grid gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                    <p className="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                      <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div></>
  )
}

export default page