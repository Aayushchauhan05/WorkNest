import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
<div class="flex flex-col md:flex-row min-h-screen">
  <div class="bg-cyan-700 text-white p-6 flex flex-col md:w-64">
    <div class="flex items-center fixed top-20 gap-4 mb-8">
      <div class="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center text-2xl font-bold">JD</div>
      <h1 class="text-xl font-bold">John Doe</h1>
    </div>
    {/* <nav class="flex flex-col justify-evenly space-y-4">
     
     
     
    </nav> */}

<nav className="flex flex-col gap-2 fixed top-36 w-auto h-screen">
           <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="/freelancerDashboard">
          
             Dashboard
           </Link>
           
           <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="/freelancerDashboard">
        Applied
      </Link>
      <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="/freelancerDashboard">
        profile
      </Link>
         </nav>
  </div>
  <div class="flex-1  bg-gray-900 p-6 md:p-8">
    <h2 class="text-2xl font-bold mb-6 text-cyan-600">Your Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex-col space-y-1.5 bg-gray-900 text-white p-4 flex items-center justify-between">
          <h3 class="text-lg font-bold">Website Redesign</h3>
          <div class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Active</div>
        </div>
        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Client:</span>
            <span>Acme Inc.</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Due Date:</span>
            <span>June 30, 2023</span>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-blue-500 hover:text-blue-600">
            View Details
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex-col space-y-1.5 bg-gray-900 text-white p-4 flex items-center justify-between">
          <h3 class="text-lg font-bold">Mobile App Development</h3>
          <div class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">In Progress</div>
        </div>
        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Client:</span>
            <span>Globex Corp.</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Due Date:</span>
            <span>August 15, 2023</span>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-blue-500 hover:text-blue-600">
            View Details
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex-col space-y-1.5 bg-gray-900 text-white p-4 flex items-center justify-between">
          <h3 class="text-lg font-bold">Branding and Logo Design</h3>
          <div class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Overdue</div>
        </div>
        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Client:</span>
            <span>Stark Industries</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Due Date:</span>
            <span>May 1, 2023</span>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-blue-500 hover:text-blue-600">
            View Details
          </button>
        </div>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex-col space-y-1.5 bg-gray-900 text-white p-4 flex items-center justify-between">
          <h3 class="text-lg font-bold">Social Media Marketing</h3>
          <div class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Active</div>
        </div>
        <div class="p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-gray-500 font-medium">Client:</span>
            <span>Stark Industries</span>
          </div>
          <div class="flex items-center justify-between"></div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default page