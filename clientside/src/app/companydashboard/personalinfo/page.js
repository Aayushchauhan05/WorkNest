
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <>
      <div class="flex w-full min-h-screen">
        <div class="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 border-r">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14">
                <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
              </span>
              <div class="grid gap-1">
                <h1 class="text-xl font-semibold md:text-2xl">Jared Palmer</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <nav class="flex flex-col gap-2">
              <Link
                href={"companydashboard/personalinfo"}
                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
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
                  class="h-5 w-5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Personal Info
              </Link>
              <Link
                href={"companydashboard /professionalinfo"}
                class="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors"
              >
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
                  class="h-5 w-5"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                Professional Info
              </Link>
              <Link
                href={"companydashboard/viewfreelancer"}
                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
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
                  class="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                Freelancer
              </Link>
              <Link
                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                href={"companydashboard/projects"}
              >
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
                  class="h-5 w-5"
                >
                  <path d="M5 7 3 5"></path>
                  <path d="M9 6V3"></path>
                  <path d="m13 7 2-2"></path>
                  <circle cx="9" cy="13" r="3"></circle>
                  <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path>
                  <path d="M16 16h2"></path>
                </svg>
                Projects
              </Link>
            </nav>
          </div>
        </div>
        <div class="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-4 md:p-10">
          <div class="container max-w-6xl grid gap-8">
            <section>
              <h2 class="text-lg font-semibold mb-4">Bio</h2>
              <div class="prose prose-sm dark:prose-invert">
                <p>
                  I'm a software engineer with a passion for building beautiful and functional web applications. I've been
                  working in the industry for the past 5 years, and I'm always excited to learn new technologies and
                  techniques.
                </p>
              </div>
            </section>
            <section>
              <h2 class="text-lg font-semibold mb-4">Contact</h2>
              <div class="grid gap-6">
                <div class="grid gap-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    type="email"
                    value="jared@example.com"
                  />
                </div>
                <div class="grid gap-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="phone"
                  >
                    Phone
                  </label>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    type="tel"
                    value="+1 (555) 555-5555"
                  />
                </div>
                <div class="grid gap-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="social"
                  >
                    Social Media
                  </label>
                  <div class="flex items-center gap-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="social"
                      type="text"
                      value="@jaredpalmer"
                    />
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                        class="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"></button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div></>
  )
}

export default page