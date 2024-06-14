'use client'
import React, { useState, useEffect } from "react";
import Filter from "@/components/Filter/Filter";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

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

  useEffect(() => {
    fetchdata();
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

  const fetchdata = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/allFreelancer`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const freelancers = response.data.user;
      console.log(freelancers)
      setFreelancerListings(freelancers);
      setFilteredFreelancers(freelancers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen mx-auto">
      <header className="sticky top-0 z-10 w-full px-6 py-4 text-white bg-black">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold ">Freelancers</h1>
        </div>
      </header>
      <div className="container flex flex-col md:flex-row gap-6 py-8 mx-auto text-white bg-black">
        <div className={`w-full md:w-1/4 h-full p-6 bg-cyan-700 fixed md:sticky top-10 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="md:sticky md:top-30">
            <Filter
              key={filterKey}
              onFilterChange={handleFilterChange}
              isfreelancerPortal={false}
            />
            <button
              className="p-2 mt-5 bg-red-600 rounded-md"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 ml-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFreelancers.map((freelancer) => (
              <div
                key={freelancer._id}
                className="mb-4 overflow-hidden text-black  rounded-lg shadow-md dark:bg-gray-950"
              >
                <div className="relative mt-2 overflow-hidden text-black bg-gray-200 border rounded-lg shadow-2xl group">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col p-6 space-y-4">
                      <h3 className="text-lg font-bold text-center">{freelancer?.firstName}</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Price:</span>
                          <span> <span className="text-gray-500 dark:text-gray-400">
                              {`${10}/hr`}
                            </span></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 p-6 bg-gray-200 border-t border-gray-700">
                      {(freelancer.skills || []).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      <Link href={`/hire/${freelancer._id}`} className="inline-flex items-center justify-center w-[20%] h-10 bg-cyan-800 rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3">
                        Hire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            className={`bg-cyan-700 z-50 left-0 bottom-0 w-full hover:bg-cyan-700 text-white font-bold px-20 py-4 rounded fixed md:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
