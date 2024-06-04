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
        <VerticalNav isMenuOpen={isMenuOpen} isActive={"professionalinfo"} toggleMenu={toggleMenu} isCompanyDashboard={true} userName={"ayush badoria"} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Professional Info"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}

          />
          <div class="flex-1 justify-center items-center bg-black dark:bg-gray-800/40 p-4 md:p-10 ">
            <div class="container max-w-6xl grid gap-8">
              <section>
             
                <div class="grid gap-6">
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="job-title"
                    >
                      Job Title
                    </label>
                    <input
                      class="flex h-10 w-full bg-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="job-title"
                      value="Software Engineer"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="company"
                    >
                      Company
                    </label>
                    <input
                      class="flex h-10 w-full bg-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="company"
                      value="Acme Inc"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="industry"
                    >
                      Industry
                    </label>
                    <input
                      class="flex h-10 w-full bg-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="industry"
                      value="Technology"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="years-experience"
                    >
                      Years of Experience
                    </label>
                    <input
                      class="flex h-10 bg-black w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="years-experience"
                      type="number"
                      value="5"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="skills"
                    >
                      Skills
                    </label>
                    <textarea
                      class="flex min-h-[80px] bg-black  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="skills"
                    >
                      JavaScript, React, Node.js, SQL, Git
                    </textarea>
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="certifications"
                    >
                      Certifications
                    </label>
                    <textarea
                      class="flex min-h-[80px] w-full bg-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="certifications"
                    >
                      AWS Certified Developer, Scrum Master Certified
                    </textarea>
                  </div>
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
                      class="flex h-10 w-full rounded-md bg-black  border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      class="flex h-10 w-full rounded-md bg-black  border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        class="flex h-10 w-full bg-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="social"
                        type="text"
                        value="@jaredpalmer"
                      />
                      <button class="inline-flex items-center bg-cyan-900  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                      <button class="inline-flex items-center bg-cyan-900  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 class="text-lg font-semibold mb-4">Account Settings</h2>
                <div class="grid gap-6">
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="password"
                    >
                      Password
                    </label>
                    <div class="flex items-center gap-2">
                      <input
                        class="flex h-10 w-full rounded-md bg-black border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="password"
                        type="password"
                        value="********"
                      />
                      <button class="inline-flex items-center bg-cyan-900  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page