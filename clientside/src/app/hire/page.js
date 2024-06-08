'use client'
import React, { useState, useEffect } from "react";
import Filter from "@/components/Filter/Filter";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [filters, setFilters] = useState({
    skills: [],
    hourlyRate: "All",
    availability: "All",
  });
  const [freelancerListings, setFreelancerListings] = useState([]);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [filterKey, setFilterKey] = useState(0);

  const freelancers = [
    {
      id: 1,
      name: "John Doe",
      skills: ["React", "Node.js", "MongoDB"],
      rate: 15,
      available: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: ["Vue.js", "Laravel", "MySQL"],
      rate: 120,
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
  ];

  useEffect(() => {
    setFreelancerListings(freelancers);
    setFilteredFreelancers(freelancers);
  }, []);

  useEffect(() => {
    filterFreelancers();
  }, [filters, freelancerListings]);

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => {
    setFilters({
      skills: 'All',
      hourlyRate: "All",
      availability: "All",
    });
    setFilterKey((prevKey) => prevKey + 1);
  };

  const filterFreelancers = () => {
    let filtered = [...freelancerListings];

    if (filters.hourlyRate !== "All") {
      filtered = filtered.filter((freelancer) => {
        const rate = parseFloat(filters.hourlyRate);
        if (filters.hourlyRate.includes("+")) {
          return freelancer.rate >= rate;
        } else {
          const [minRate, maxRate] = filters.hourlyRate.split("-").map(Number);
          return freelancer.rate >= minRate && freelancer.rate <= maxRate;
        }
      });
    }

    if (Array.isArray(filters.skills) && filters.skills.length > 0) {
      filtered = filtered.filter((person) => {
        return filters.skills.some((skill) => person.skills.includes(skill));
      });
    }

    if (filters.availability !== "All") {
      const available = filters.availability === true; 
      filtered = filtered.filter((freelancer) => freelancer.available === available);
    }

    setFilteredFreelancers(filtered);
  };

  return (
    <div className="">
      <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">Freelancers</h1>
        </div>
      </header>
      <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
        <div className="sticky w-auto h-auto col-span-1 p-6 rounded shadow-md bg-cyan-700 md:col-span-3 top-24">
          <Filter
            key={filterKey}
            onFilterChange={handleFilterChange}
            isjobPortal={false}
          />
          <button
            className="bg-red-600 mt-5 p-2 rounded-md"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="col-span-1 md:col-span-9">
          {filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden mb-4"
            >
              <div className="flex flex-col p-4">
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
                  <span className="text-gray-500 dark:text-gray-400">
                    ${freelancer.rate}/hr
                  </span>
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
  );
}
