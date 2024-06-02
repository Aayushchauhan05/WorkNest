/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4jMkUS78aI5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination"

export default function Component() {
  const [filters, setFilters] = useState({
    skills: [],
    rate: { min: 0, max: 500 },
    availability: "all",
  })
  const [view, setView] = useState("grid")
  const freelancers = [
    {
      id: 1,
      name: "John Doe",
      skills: ["React", "Node.js", "MongoDB"],
      rate: 75,
      available: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: ["Vue.js", "Laravel", "MySQL"],
      rate: 85,
      available: false,
    },
    {
      id: 3,
      name: "Bob Johnson",
      skills: ["Python", "Django", "PostgreSQL"],
      rate: 90,
      available: true,
    },
    {
      id: 4,
      name: "Alice Williams",
      skills: ["Angular", "Ruby on Rails", "Redis"],
      rate: 95,
      available: true,
    },
    {
      id: 5,
      name: "Tom Davis",
      skills: ["PHP", "WordPress", "MySQL"],
      rate: 80,
      available: false,
    },
    {
      id: 6,
      name: "Sarah Wilson",
      skills: ["Java", "Spring", "PostgreSQL"],
      rate: 100,
      available: true,
    },
  ]
  const filteredFreelancers = useMemo(() => {
    return freelancers.filter((freelancer) => {
      const skillsMatch = filters.skills.every((skill) => freelancer.skills.includes(skill))
      const rateMatch = freelancer.rate >= filters.rate.min && freelancer.rate <= filters.rate.max
      const availabilityMatch =
        filters.availability === "all" ||
        (filters.availability === "available" && freelancer.available) ||
        (filters.availability === "unavailable" && !freelancer.available)
      return skillsMatch && rateMatch && availabilityMatch
    })
  }, [filters])
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 ">
        <div className="flex-shrink-0 w-64 p-6 text-white border-r border-gray-200 bg-cyan-950 dark:bg-gray-800 dark:border-gray-700 h-[100vh] ">
          <h2 className="mb-4 text-lg font-bold">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-bold">Skills</h3>
              <div className="space-y-2 ">
                {["React", "Node.js", "Vue.js", "Laravel", "Python", "Angular"].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <Checkbox 
                      id={`skill-${skill}`}
                      checked={filters.skills.includes(skill)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFilters({
                            ...filters,
                            skills: [...filters.skills, skill],
                          })
                        } else {
                          setFilters({
                            ...filters,
                            skills: filters.skills.filter((s) => s !== skill),
                          })
                        }
                      }}
                    />
                    <Label htmlFor={`skill-${skill}`} className="ml-2 font-medium">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold">Hourly Rate</h3>
              <div />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-bold">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div />
                  <Label htmlFor="availability-all" className="ml-2 font-medium">
                    All
                  </Label>
                </div>
                <div className="flex items-center">
                  <div />
                  <Label htmlFor="availability-available" className="ml-2 font-medium">
                    Available
                  </Label>
                </div>
                <div className="flex items-center">
                  <div />
                  <Label htmlFor="availability-unavailable" className="ml-2 font-medium">
                    Unavailable
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold">Freelancers</h2>
              <p className="text-gray-500 dark:text-gray-400">{filteredFreelancers.length} freelancers found</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant={view === "grid" ? "primary" : "outline"} onClick={() => setView("grid")}>
                <Grid3x3Icon className="w-5 h-5" />
              </Button>
              <Button variant={view === "list" ? "primary" : "outline"} onClick={() => setView("list")}>
                <ListIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div
            className={`grid gap-6 ${
              view === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredFreelancers.map((freelancer) => (
              <div
                key={freelancer.id}
                className={`bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden ${
                  view === "list" ? "flex" : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 ${
                    view === "list" ? "w-32 h-32" : "h-40"
                  } bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
                >
                  <UserIcon className="w-12 h-12 text-gray-400" />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-lg font-bold">{freelancer.name}</h3>
                  <div className="flex items-center mb-2 space-x-2">
                    {freelancer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mb-2 space-x-2">
                    <DollarSignIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 dark:text-gray-400">${freelancer.rate}/hr</span>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                    disabled={!freelancer.available}
                  >
                    {freelancer.available ? "Hire" : "Unavailable"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}