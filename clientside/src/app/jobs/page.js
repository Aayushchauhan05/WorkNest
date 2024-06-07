// Use `useEffect` and `useState` from 'react' instead of 'react-hooks'
import React, { useEffect, useState } from "react";
// Import Link from 'next/link'
import Link from "next/link";
// Import Filter from the correct path
import Filter from "@/components/Filter/Filter";

// Function name should be capitalized
function Page() {
  // Initialize state for job listings and filters
  const [jobListings, setJobListings] = useState([]);
  const [filters, setFilters] = useState({
    jobType: "All",
    experienceLevel: "All",
    budget: "All",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Handle filter change
  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      jobType: "All",
      experienceLevel: "All",
      budget: "All",
    });
  };

  // Filter jobs based on current filters
  const filterJobs = () => {
    let filtered = jobListings;

    if (filters.jobType !== "All") {
      filtered = filtered.filter((job) => job.jobType === filters.jobType);
    }

    if (filters.experienceLevel !== "All") {
      filtered = filtered.filter(
        (job) => job.experienceLevel === filters.experienceLevel
      );
    }

    if (filters.budget !== "All") {
      filtered = filtered.filter((job) => job.priceRange === filters.budget);
    }

    setFilteredJobs(filtered);
  };

  // Fetch job listings data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/Allproject`
        );
        const data = await response.json();
        setJobListings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update filtered jobs when filters change
  useEffect(() => {
    filterJobs();
  }, [filters, jobListings]);

  return (
    <>
      <div className="">
        <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Freelance Jobs</h1>
          </div>
        </header>
        <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
          <Filter onFilterChange={handleFilterChange} resetFilters={resetFilters} />
          <div className="col-span-1 md:col-span-9">
            {filteredJobs.map((job, index) => (
              <Link href={`/jobs/${index}`} key={index}>
                <div className="relative overflow-hidden text-black bg-white border rounded-lg shadow-sm group">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col p-6 space-y-4">
                      <h3 className="text-lg font-bold text-center">{job.title}</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Client:</span>
                          <span>{job.client}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-500">Due Date:</span>
                          <span>{job.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 p-6 bg-gray-100 border-t">
                      <div className="text-sm text-gray-600">Budget: {job.budget}</div>
                      <h1
                        className={`inline-flex items-center justify-center w-[50%] h-10 bg-cyan-800 rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3`}
                      >
                        Bid
                      </h1>
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-opacity bg-white rounded-lg opacity-0 group-hover:opacity-20"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
