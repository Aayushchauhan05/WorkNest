import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
<div class="flex min-h-screen">
  <div class="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div class="flex flex-col gap-2">
      <div class="flex h-[60px] items-center px-6">
        <a class="flex items-center gap-2 font-semibold" href="#">
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
            class="w-6 h-6"
          >
            <line x1="22" x2="2" y1="6" y2="6"></line>
            <line x1="22" x2="2" y1="18" y2="18"></line>
            <line x1="6" x2="6" y1="2" y2="22"></line>
            <line x1="18" x2="18" y1="2" y2="22"></line>
          </svg>
          <span class="">Acme Inc</span>
        </a>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-4 text-sm font-medium">
          <Link
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={"/companydashboard"}
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
              class="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
          </Link>
          <a
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
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
              class="h-4 w-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Projects
          </a>
          <a
            class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
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
              class="h-4 w-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Freelancers
          </a>
          <a
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
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
              class="h-4 w-4"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Settings
          </a>
        </nav>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <header class="flex h-16 items-center px-4 border-b shrink-0 md:px-6">
      <a class="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
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
          class="w-6 h-6"
        >
          <line x1="22" x2="2" y1="6" y2="6"></line>
          <line x1="22" x2="2" y1="18" y2="18"></line>
          <line x1="6" x2="6" y1="2" y2="22"></line>
          <line x1="18" x2="18" y1="2" y2="22"></line>
        </svg>
        <span class="sr-only">Acme Inc</span>
      </a>
      <div class="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full ml-auto">
          <img
            src="/placeholder.svg"
            width="32"
            height="32"
            class="rounded-full border"
            alt="Avatar"
            style={{"aspect-ratio": 32 / 32, "object-fit": "cover"}}
          />
          <span class="sr-only">Toggle user menu</span>
        </button>
      </div>
    </header>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
      <div class="max-w-6xl w-full mx-auto flex items-center justify-between">
        <div class="grid gap-1">
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-gray-500 dark:text-gray-400">View and manage your hired freelancers.</p>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Add Freelancer
        </button>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
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
              class="w-8 h-8"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <div class="grid gap-1">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Website Project</h3>
              <p class="text-sm text-muted-foreground">3 Freelancers</p>
            </div>
          </div>
          <div class="p-6 grid gap-4">
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">John Doe</div>
                <div class="text-gray-500 dark:text-gray-400">john.doe@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Jane Ahn</div>
                <div class="text-gray-500 dark:text-gray-400">jane.ahn@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Sarah Mayer</div>
                <div class="text-gray-500 dark:text-gray-400">sarah.mayer@example.com</div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
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
              class="w-8 h-8"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <div class="grid gap-1">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Documentation Project
              </h3>
              <p class="text-sm text-muted-foreground">2 Freelancers</p>
            </div>
          </div>
          <div class="p-6 grid gap-4">
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Lisa Wang</div>
                <div class="text-gray-500 dark:text-gray-400">lisa.wang@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Michael Johnson</div>
                <div class="text-gray-500 dark:text-gray-400">michael.johnson@example.com</div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="space-y-1.5 p-6 flex flex-row items-center gap-4">
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
              class="w-8 h-8"
            >
              <rect width="7" height="18" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
            </svg>
            <div class="grid gap-1">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Mobile App Project
              </h3>
              <p class="text-sm text-muted-foreground">4 Freelancers</p>
            </div>
          </div>
          <div class="p-6 grid gap-4">
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Emily Gomez</div>
                <div class="text-gray-500 dark:text-gray-400">emily.gomez@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Ryan Davis</div>
                <div class="text-gray-500 dark:text-gray-400">ryan.davis@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Kimberly Sato</div>
                <div class="text-gray-500 dark:text-gray-400">kimberly.sato@example.com</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div class="grid gap-1">
                <div class="font-semibold">Jae Lee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
    </>
  )
}

export default page