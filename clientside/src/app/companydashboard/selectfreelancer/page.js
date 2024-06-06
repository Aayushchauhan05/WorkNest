
"use client"

import  React, { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState({
    status: "all",
    sort: "newest",
  })
  const handleSearch = (e) => setSearch(e.target.value)
  const handleFilter = (key, value) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }))
  }
  const applications = useMemo(
    () =>
      [
        {
          id: "APP001",
          name: "John Doe",
          email: "john@example.com",
          resume: "/resume-john.pdf",
          status: "pending",
        },
        {
          id: "APP002",
          name: "Jane Smith",
          email: "jane@example.com",
          resume: "/resume-jane.pdf",
          status: "accepted",
        },
        {
          id: "APP003",
          name: "Bob Johnson",
          email: "bob@example.com",
          resume: "/resume-bob.pdf",
          status: "rejected",
        },
        {
          id: "APP004",
          name: "Sarah Lee",
          email: "sarah@example.com",
          resume: "/resume-sarah.pdf",
          status: "pending",
        },
        {
          id: "APP005",
          name: "Tom Wilson",
          email: "tom@example.com",
          resume: "/resume-tom.pdf",
          status: "accepted",
        },
        {
          id: "APP006",
          name: "Emily Davis",
          email: "emily@example.com",
          resume: "/resume-emily.pdf",
          status: "rejected",
        },
      ]
        .filter((app) => {
          const searchValue = search.toLowerCase()
          return app.name.toLowerCase().includes(searchValue) || app.email.toLowerCase().includes(searchValue)
        })
        .sort((a, b) => {
          if (filter.sort === "newest") {
            return b.id.localeCompare(a.id)
          } else {
            return a.id.localeCompare(b.id)
          }
        })
        .filter((app) => {
          if (filter.status === "all") {
            return true
          } else {
            return app.status === filter.status
          }
        }),
    [search, filter],
  )
  return (
    <div className="container px-4 py-8 mx-auto md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 left-3 top-1/2" />
            <Input
              type="text"
              placeholder="Search applications..."
              value={search}
              onChange={handleSearch}
              className="py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-5 h-5" />
                <span>Filter</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filter.status === "all"}
                onCheckedChange={() => handleFilter("status", "all")}
              >
                All
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.status === "pending"}
                onCheckedChange={() => handleFilter("status", "pending")}
              >
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.status === "accepted"}
                onCheckedChange={() => handleFilter("status", "accepted")}
              >
                Accepted
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filter.status === "rejected"}
                onCheckedChange={() => handleFilter("status", "rejected")}
              >
                Rejected
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={filter.sort} onValueChange={(value) => handleFilter("sort", value)}>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>
                  <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                    View Resume
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={app.status === "pending" ? "warning" : app.status === "accepted" ? "success" : "danger"}
                  >
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {app.status === "pending" && (
                      <>
                        <Button
                          variant="success"
                          size="sm"
                          className="text-white bg-green-500 hover:bg-green-600"
                          onClick={() => console.log("Accepted", app.id)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="text-white bg-red-500 hover:bg-red-600"
                          onClick={() => console.log("Rejected", app.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    {app.status === "accepted" && (
                      <Button
                        variant="danger"
                        size="sm"
                        className="text-white bg-red-500 hover:bg-red-600"
                        onClick={() => console.log("Rejected", app.id)}
                      >
                        Reject
                      </Button>
                    )}
                    {app.status === "rejected" && (
                      <Button
                        variant="success"
                        size="sm"
                        className="text-white bg-green-500 hover:bg-green-600"
                        onClick={() => console.log("Accepted", app.id)}
                      >
                        Accept
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}