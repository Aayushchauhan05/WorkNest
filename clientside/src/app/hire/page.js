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
            className="p-2 mt-5 bg-red-600 rounded-md"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
        <div className="col-span-1 mb-10 md:col-span-9">
          {filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer._id}
              className="mb-4 overflow-hidden text-black bg-white rounded-lg shadow-md dark:bg-gray-950"
            >
              <div className="flex flex-col p-4">
                <h3 className="text-lg font-bold">{freelancer?.firstName}</h3>
                <div className="flex items-center mb-2 space-x-2">
                  {(freelancer.skills || []).map((skill) => (
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
                    {`${10}/hr`}
                  </span>
                </div>
                <Link href={`/hire/${freelancer._id}`}
                  variant="primary"
                  className="w-full bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                 
                >
                  hire
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className={`bg-cyan-700 z-50 left-0 bottom-0 w-full hover:bg-cyan-700 text-white font-bold px-20 py-4 rounded fixed md:hidden`}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
