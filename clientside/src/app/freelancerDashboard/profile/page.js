import { useAuth } from '@/context/context'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function page() {
  const[useinfo,setuserinfo]=useState([])
  const{token}=useAuth()
const router= useRouter()
  useEffect( async ()=>{
try {
  const response = await axios.get(`${NEXT_PUBLIC_BACKEND_HOST}/api/freelancerprofile`,{
    headers:{
      "Authorization":` Bearer ${token}`
    }
  })
  setuserinfo(response)
  console.log(response)
} catch (error) {
  console.log(error)
}
  },[router])
  return (
    <>
<div class="flex min-h-[100dvh] dark:bg-gray-950 dark:text-white pt-7">
  <div class="bg-cyan-700 dark:bg-gray-900 p-4 md:p-10 flex flex-col gap-8">
    <a class="flex items-center gap-2 text-lg font-semibold sm:text-base" href="#">
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
        class="w-6 h-6 text-cyan-400"
      >
        <line x1="22" x2="2" y1="6" y2="6"></line>
        <line x1="22" x2="2" y1="18" y2="18"></line>
        <line x1="6" x2="6" y1="2" y2="22"></line>
        <line x1="18" x2="18" y1="2" y2="22"></line>
      </svg>
      <span class="sr-only">Acme Inc</span>
    </a>
    <nav class="font-medium flex flex-col items-start gap-2 text-sm">
      <Link class="text-cyan-400 font-bold" href={"/freelancerDashboard"}>
        Dashboard
      </Link>
      <Link class="text-gray-400 dark:text-gray-400" href={"/freelancerDashboard/projects"}>
        Projects
      </Link>
     
    </nav>
    <div class="flex items-center gap-4 md:gap-2 lg:gap-4">
      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full text-cyan-400">
        <img
          src="/placeholder.svg"
          width="32"
          height="32"
          class="rounded-full"
          alt="Avatar"
          style={{"aspect-ratio": 32 / 32,"object-fit": "cover"}}
        />
        <span class="sr-only">Toggle user menu</span>
      </button>
    </div>
  </div>
  <main class="flex-1 bg-gray-950 dark:bg-gray-950 p-4 md:p-10 grid gap-8">
    <div class="flex items-center space-x-4 mb-8">
      <span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 border-2 border-cyan-400">
        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
      </span>
      <div>
        <h1 class="text-2xl font-bold text-cyan-400">Jared Palmer</h1>
        <p class="text-gray-400 dark:text-gray-400">@jwatson213</p>
      </div>
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-lg border text-card-foreground shadow-sm bg-white dark:bg-cyan-400" data-v0-t="card">
        <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-950 dark:text-gray-950">About</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-gray-950 dark:text-gray-950 border-gray-950 dark:border-gray-950 hover:bg-gray-950/10 dark:hover:bg-gray-950/10">
            Edit
          </button>
        </div>
        <div class="p-6">
          <p class="text-gray-950 dark:text-gray-950">
            I'm a software engineer, and I love to code! I'm passionate about building innovative products that
            solve real-world problems.
          </p>
        </div>
      </div>
      <div class="rounded-lg border text-card-foreground shadow-sm bg-white dark:bg-cyan-400" data-v0-t="card">
        <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-950 dark:text-gray-950">Contact</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-gray-950 dark:text-gray-950 border-gray-950 dark:border-gray-950 hover:bg-gray-950/10 dark:hover:bg-gray-950/10">
            Edit
          </button>
        </div>
        <div class="p-6 space-y-2">
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">jwatson213@example.com</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">+1 (555) 555-5555</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <line x1="2" x2="5" y1="12" y2="12"></line>
              <line x1="19" x2="22" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="2" y2="5"></line>
              <line x1="12" x2="12" y1="19" y2="22"></line>
              <circle cx="12" cy="12" r="7"></circle>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">San Francisco, CA</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">Joined in October 2021</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border text-card-foreground shadow-sm bg-white dark:bg-cyan-400" data-v0-t="card">
        <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-950 dark:text-gray-950">Social</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-gray-950 dark:text-gray-950 border-gray-950 dark:border-gray-950 hover:bg-gray-950/10 dark:hover:bg-gray-950/10">
            Edit
          </button>
        </div>
        <div class="p-6 space-y-2">
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">@jwatson213</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">jwatson213</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">Jared Palmer</p>
          </div>
          <div class="flex items-center space-x-2">
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
              class="h-5 w-5 text-gray-950 dark:text-gray-950"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <p class="text-gray-950 dark:text-gray-950">@jwatson213</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border text-card-foreground shadow-sm bg-white dark:bg-cyan-400" data-v0-t="card">
        <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-950 dark:text-gray-950">Skills</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-gray-950 dark:text-gray-950 border-gray-950 dark:border-gray-950 hover:bg-gray-950/10 dark:hover:bg-gray-950/10">
            Edit
          </button>
        </div>
        <div class="p-6 flex flex-wrap gap-2">
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            JavaScript
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            React
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Node.js
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            TypeScript
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Git
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            SQL
          </div>
        </div>
      </div>
      {/* <div class="rounded-lg border text-card-foreground shadow-sm bg-cyan-700 dark:bg-cyan-400" data-v0-t="card">
        <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-950 dark:text-gray-950">Interests</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 text-gray-950 dark:text-gray-950 border-gray-950 dark:border-gray-950 hover:bg-gray-950/10 dark:hover:bg-gray-950/10">
            Edit
          </button>
        </div>
        <div class="p-6 flex flex-wrap gap-2">
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Coding
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Reading
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Traveling
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Photography
          </div>
          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-gray-950 text-cyan-400 dark:bg-gray-950 dark:text-cyan-400">
            Hiking
          </div>
        </div>
      </div> */}
    </div>
  </main>
</div>
    </>
  )
}

export default page