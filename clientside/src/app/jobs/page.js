'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Filter from "@/components/Filter/Filter";

function Page() {
  const [jobListings, setJobListings] = useState([
    {
      title: "Frontend Developer",
      client: "Client A",
      dueDate: "2024-07-01",
      jobType: "Web Development",
      experienceLevel: "Intermediate",
      priceRange: "$500 - $2,000",
    },
    {
      title: "Graphic Designer",
      client: "Client B",
      dueDate: "2024-08-01",
      jobType: "Graphic Design",
      experienceLevel: "Expert",
      priceRange: "$2,000+",
    },
    {
      title: "Content Writer",
      client: "Client C",
      dueDate: "2024-09-01",
      jobType: "Content Writing",
      experienceLevel: "Entry Level",
      priceRange: "$0 - $500",
    },
    {
      title: "Virtual Assistant",
      client: "Client D",
      dueDate: "2024-10-01",
      jobType: "Virtual Assistant",
      experienceLevel: "Intermediate",
      priceRange: "$500 - $2,000",
    },
    {
      title: "Marketing Specialist",
      client: "Client E",
      dueDate: "2024-11-01",
      jobType: "Marketing",
      experienceLevel: "Expert",
      priceRange: "$2,000+",
    },
    {
      title: "UI/UX Designer",
      client: "Client F",
      dueDate: "2024-12-01",
      jobType: "Graphic Design",
      experienceLevel: "Intermediate",
      priceRange: "$500 - $2,000",
    },
  ]);

  const [filters, setFilters] = useState({
    jobType: "All",
    experienceLevel: "All",
    budget: "All",
  });

  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => {
    setFilters({
      jobType: "All",
      experienceLevel: "All",
      budget: "All",
    });
  };

  useEffect(() => {
    filterJobs();
  }, [filters,jobListings]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/Allproject`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

   
 

  return (
    <>
      <div className="">
        <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Freelance Jobs</h1>
          </div>
        </header>
        <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
          <Filter onFilterChange={handleFilterChange} resetFilters={resetFilters} isjobPortal={true}/>
          <div className="col-span-1 md:col-span-9">
            {filteredJobs.map((job) => (
              <Link href={`/jobs/1`} key={job.title}>
                <div className="relative overflow-hidden text-black bg-white border rounded-lg shadow-sm group">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col p-6 space-y-4">
                      <h3 className="text-lg font-bold text-center ">{job.title}</h3>
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
                      <div className="text-sm text-gray-600">Budget: {job.priceRange}</div>
                      <h1 className="inline-flex items-center justify-center w-[50%] h-10 bg-cyan-800 rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3">Bid</h1>
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
