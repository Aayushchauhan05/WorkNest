'use client'
import React, { useState, useEffect } from "react";
import Filter from "@/components/Filter/Filter";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [filters, setFilters] = useState({
    skills: "All",
    hourlyRate: "All",
    availability: "All",
  });
  const [freelancerListings, setFreelancerListings] = useState([]);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [filterKey, setFilterKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setFilters((prevFilters) => {
      if (name === "skills") {
        let newSkills;
        if (value === "All") {
          newSkills = [];
        } else {
          newSkills = Array.isArray(prevFilters.skills) ? [...prevFilters.skills] : [];
          const index = newSkills.indexOf(value);
          if (index === -1) {
            newSkills.push(value);
          } else {
            newSkills.splice(index, 1);
          }
        }
        return { ...prevFilters, skills: newSkills };
      } else {
        return { ...prevFilters, [name]: value };
      }
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
  
    if (filters.skills !== "All" && filters.skills.length > 0) {
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
    <div className="w-screen mx-auto">
      <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold fixed">Freelancers</h1>
        </div>
      </header>
      <div className="container grid grid-cols-1 gap-6 py-8 mx-auto text-white bg-black md:grid-cols-12">
      <div className={`sticky md:fixed w-auto h-[50rem] transition-transform transform md:translate-y-0 col-span-1 p-6 rounded px-2-lg shadow-md bg-cyan-700 md:col-span-3  md:translate-x-0 ${isMenuOpen ? "translate-y-0" : "translate-y-full mt-[10rem] md:mt-0"}`}>
          <Filter
            key={filterKey}
            onFilterChange={handleFilterChange}
            isfreelancerPortal={false}
          />
          <button
            className="bg-red-600 mt-5 p-2 rounded-md"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="col-span-1 md:col-span-9  gap-6 md:ml-80 grid grid-cols-1 md:grid-cols-3 ">
  {filteredFreelancers.map((freelancer) => (
    <div
      key={freelancer.id}
      className="relative overflow-hidden w-auto text-gray-800 bg-white border rounded-lg shadow-2xl"
    >
      <div className="flex flex-col justify-between w-72 h-full">
        <div className="flex flex-col p-6 space-y-4">
          <h3 className="text-lg font-bold text-center">{freelancer.name}</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Skills:</span>
              <span>{freelancer.skills.join(", ")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-400">Rate:</span>
              <span>${freelancer.rate}/hr</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 bg-gray-200 border-t border-gray-700">
          <div className="text-sm text-gray-500">Availability: {freelancer.available ? "Available" : "Unavailable"}</div>
          <Button
            variant="primary"
            className="w-20 bg-cyan-800 text-white hover:bg-cyan-700"
            disabled={!freelancer.available}
          >
            {freelancer.available ? "Hire" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
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
  );
}
