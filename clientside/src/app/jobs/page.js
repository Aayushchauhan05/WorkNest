'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Filter from "@/components/Filter/Filter";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filters, setFilters] = useState({
    jobType: "All",
    experienceLevel: "All",
    budget: "All",
  });
  const [jobListings, setJobListings] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterKey, setFilterKey] = useState(0);

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

  useEffect(() => {
    filterJobs();
  }, [filters, jobListings]);

  useEffect(() => {
    filterJobs();
  }, [filters]);

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
    setFilterKey(prevKey => prevKey + 1);
  };

  const filterJobs = () => {
    let filtered = Array.isArray(jobListings) ? [...jobListings] : [];
  
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
  

  return (
    <>
      <div>
        <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Freelance Jobs</h1>
          </div>
        </header>
        <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
        <div className={`sticky w-auto h-[50rem] transition-transform transform md:translate-y-0 col-span-1 p-6 rounded px-2-lg shadow-md bg-cyan-700 md:col-span-3  md:translate-x-0 ${isMenuOpen ? "translate-y-0" : "translate-y-full mt-[10rem] md:mt-0"}`}>
         <Filter
          key={filterKey} 
            onFilterChange={handleFilterChange}
       
            isjobPortal={true}
          />
          <button className="bg-red-600 mt-5 p-2 rounded-md" onClick={() => {
            resetFilters()
            setFilterKey(prevKey => prevKey + 1)}}>
        Reset Filters
      </button>
         </div>
          
          

          <div className="col-span-1 md:col-span-9">
            {Array.isArray(filteredJobs) &&
              filteredJobs.map((job, index) => (
                <Link href={`/jobs/${index}`} key={index}>
              <div className="relative mt-2 overflow-hidden text-black bg-gray-200 border rounded-lg shadow-2xl group">


  <div className="flex flex-col justify-between h-full">
    <div className="flex flex-col p-6 space-y-4">
  <h3 className="text-lg font-bold text-center">{job.title}</h3>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-medium">Client:</span>
          <span>{job.client}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-400">Due Date:</span>
          <span>{job.dueDate}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between text-gray-700 p-6 bg-gray-200 border-t border-gray-700">
      <div className="text-sm text-gray-400">Budget: {job.budget}</div>
      <button className="inline-flex items-center justify-center w-[10%] h-10 bg-cyan-800 rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3">
        Bid
      </button>
    </div>
  </div>
</div>

                </Link>
              ))}
          </div>

          <div>
          <button
            className="bg-cyan-700 z-50 left-0 bottom-0 w-full hover:bg-cyan-700 text-white font-bold px-20 py-4 rounded fixed md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Filter
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Page;
