

function page() {
  return (
   <>
   
   <div class="flex min-h-screen w-full">
     <div class="bg-gray-900 text-gray-50 p-6 hidden md:block">
       <div class="flex flex-col gap-6">
         <div class="flex items-center gap-4">
           <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
             <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
           </span>
           <div>
             <h2 class="text-lg font-semibold">John Doe</h2>
             <p class="text-gray-400">Freelance Designer</p>
           </div>
         </div>
         <nav class="flex flex-col gap-2">
           <a class="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors" href="#">
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
               class="w-5 h-5"
             >
               <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
               <polyline points="9 22 9 12 15 12 15 22"></polyline>
             </svg>
             Dashboard
           </a>
           <a class="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors" href="#">
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
               class="w-5 h-5"
             >
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg>
             Profile
           </a>
           <a class="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors" href="#">
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
               class="w-5 h-5"
             >
               <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
               <rect width="20" height="14" x="2" y="6" rx="2"></rect>
             </svg>
             Projects
           </a>
           <a class="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors" href="#">
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
               class="w-5 h-5"
             >
               <line x1="12" x2="12" y1="2" y2="22"></line>
               <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
             </svg>
             Earnings
           </a>
           <a class="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-800 transition-colors" href="#">
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
               class="w-5 h-5"
             >
               <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
               <circle cx="12" cy="12" r="3"></circle>
             </svg>
             Settings
           </a>
         </nav>
       </div>
     </div>
     <div class="flex flex-col w-full">
       <header class="bg-white dark:bg-gray-900 shadow-sm">
         <div class="container mx-auto py-4 px-6 flex items-center justify-between">
           <div class="flex items-center gap-4">
             <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
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
                 class="w-6 h-6 text-gray-500 dark:text-gray-400"
               >
                 <line x1="4" x2="20" y1="12" y2="12"></line>
                 <line x1="4" x2="20" y1="6" y2="6"></line>
                 <line x1="4" x2="20" y1="18" y2="18"></line>
               </svg>
             </button>
             <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
               <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
             </span>
             <div>
               <h1 class="text-xl font-bold text-gray-900 dark:text-gray-50">John Doe</h1>
               <p class="text-gray-500 dark:text-gray-400">Freelance Designer</p>
             </div>
           </div>
           <div class="flex items-center gap-4">
             <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                 class="w-6 h-6 text-gray-500 dark:text-gray-400"
               >
                 <path d="M2 20h.01"></path>
                 <path d="M7 20v-4"></path>
                 <path d="M12 20v-8"></path>
                 <path d="M17 20V8"></path>
                 <path d="M22 4v16"></path>
               </svg>
             </button>
             <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                 class="w-6 h-6 text-gray-500 dark:text-gray-400"
               >
                 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                 <circle cx="12" cy="12" r="3"></circle>
               </svg>
             </button>
           </div>
         </div>
       </header>
       <main class="flex-1 container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
           <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
             <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Profile</h3>
             <a class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
               Edit
             </a>
           </div>
           <div class="p-6 grid gap-4">
             <div>
               <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">John Doe</h3>
               <p class="text-gray-500 dark:text-gray-400">johndoe@example.com</p>
             </div>
             <div>
               <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Skills</h3>
               <div class="flex flex-wrap gap-2">
                 <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                   UI Design
                 </div>
                 <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                   Branding
                 </div>
                 <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                   Web Development
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
           <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
             <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Pending Projects</h3>
             <a class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
               View All
             </a>
           </div>
           <div class="p-6 grid gap-4">
             <div class="flex items-center justify-between">
               <div>
                 <h3 class="text-4xl font-bold text-gray-900 dark:text-gray-50">12</h3>
                 <p class="text-gray-500 dark:text-gray-400">Pending Projects</p>
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
                 class="w-10 h-10 text-gray-500 dark:text-gray-400"
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
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
           <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
             <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Completed Projects</h3>
             <a class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
               View All
             </a>
           </div>
           <div class="p-6 grid gap-4">
             <div class="flex items-center justify-between">
               <div>
                 <h3 class="text-4xl font-bold text-gray-900 dark:text-gray-50">28</h3>
                 <p class="text-gray-500 dark:text-gray-400">Completed Projects</p>
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
                 class="w-10 h-10 text-gray-500 dark:text-gray-400"
               >
                 <circle cx="12" cy="12" r="10"></circle>
                 <path d="m9 12 2 2 4-4"></path>
               </svg>
             </div>
           </div>
         </div>
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
           <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
             <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Earnings</h3>
             <a class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
               View All
             </a>
           </div>
           <div class="p-6 grid gap-4">
             <div class="flex items-center justify-between">
               <div>
                 <h3 class="text-4xl font-bold text-gray-900 dark:text-gray-50">$12,345</h3>
                 <p class="text-gray-500 dark:text-gray-400">Total Earnings</p>
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
                 class="w-10 h-10 text-gray-500 dark:text-gray-400"
               >
                 <line x1="12" x2="12" y1="2" y2="22"></line>
                 <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
               </svg>
             </div>
           </div>
         </div>
       </main>
       <section class="bg-white dark:bg-gray-900 shadow-sm">
         <div class="container mx-auto py-8 px-6">
           <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Pending Projects</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
               <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project A</h3>
                 <a
                   class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="#"
                 >
                   View
                 </a>
               </div>
               <div class="p-6 grid gap-4">
                 <div>
                   <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                   <p class="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p class="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                   </div>
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p class="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
               <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project B</h3>
                 <a
                   class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="#"
                 >
                   View
                 </a>
               </div>
               <div class="p-6 grid gap-4">
                 <div>
                   <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                   <p class="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p class="text-gray-500 dark:text-gray-400">June 15, 2023</p>
                   </div>
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p class="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
               <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project C</h3>
                 <a
                   class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="#"
                 >
                   View
                 </a>
               </div>
               <div class="p-6 grid gap-4">
                 <div>
                   <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Branding Campaign</h3>
                   <p class="text-gray-500 dark:text-gray-400">Client: DEF Ltd.</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p class="text-gray-500 dark:text-gray-400">July 1, 2023</p>
                   </div>
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p class="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section class="bg-white dark:bg-gray-900 shadow-sm">
         <div class="container mx-auto py-8 px-6">
           <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Completed Projects</h2>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
               <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project X</h3>
                 <a
                   class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="#"
                 >
                   View
                 </a>
               </div>
               <div class="p-6 grid gap-4">
                 <div>
                   <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                   <p class="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                     <p class="text-gray-500 dark:text-gray-400">April 15, 2023</p>
                   </div>
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p class="text-green-500 dark:text-green-400">Completed</p>
                   </div>
                 </div>
               </div>
             </div>
             <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
               <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project Y</h3>
                 <a
                   class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="#"
                 >
                   View
                 </a>
               </div>
               <div class="p-6 grid gap-4">
                 <div>
                   <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                   <p class="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                 </div>
                 <div class="flex items-center justify-between">
                   <div>
                     <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                     <p class="text-gray-500 dark:text-gray-400">May 30, 2023</p>
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