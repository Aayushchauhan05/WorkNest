"use client"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useEffect ,useState} from "react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function page() {
  const [jobListings,setjob] = useState([])

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

  useEffect(() => {
    filterJobs();
  }, [filters]);

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
      if (filters.budget === "$0 - $500") {
        filtered = filtered.filter((job) => job.priceRange === "$0 - $500");
      } else if (filters.budget === "$500 - $2,000") {
        filtered = filtered.filter((job) => job.priceRange === "$500 - $2,000");
      } else if (filters.budget === "$2,000+") {
        filtered = filtered.filter((job) => job.priceRange === "$2,000+");
      }
    }

    setFilteredJobs(filtered);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/Allproject`);
      const data = await response.json();
      
        console.log(data);
        if (response.ok) {
          setFilteredJobs(data.data)
        }
      
    } catch (error) {
      if (isMounted) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
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
          <div className="sticky w-auto h-screen col-span-1 p-6 rounded-lg shadow-md bg-cyan-800 md:col-span-3 top-24">
            <h2 className="mb-4 text-lg font-bold">Job Categories</h2>
            <ul className="space-y-2">
              <li>
                <label className="text-sm text-white hover:text-gray-300">
                  <input
                    type="radio"
                    name="jobType"
                    onChange={() =>
                      handleFilterChange("jobType", "Web Development")
                    }
                  />
                  Web Development
                </label>
              </li>
              <li>
                <label className="text-sm text-white hover:text-gray-300">
                  <input
                    type="radio"
                    name="jobType"
                    onChange={() =>
                      handleFilterChange("jobType", "Graphic Design")
                    }
                  />
                  Graphic Design
                </label>
              </li>
              <li>
                <label className="text-sm text-white hover:text-gray-300">
                  <input
                    type="radio"
                    name="jobType"
                    onChange={() =>
                      handleFilterChange("jobType", "Content Writing")
                    }
                  />
                  Content Writing
                </label>
              </li>
              <li>
                <label className="text-sm text-white hover:text-gray-300">
                  <input
                    type="radio"
                    name="jobType"
                    onChange={() =>
                      handleFilterChange("jobType", "Virtual Assistant")
                    }
                  />
                  Virtual Assistant
                </label>
              </li>
              <li>
                <label className="text-sm text-white hover:text-gray-300">
                  <input
                    type="radio"
                    name="jobType"
                    onChange={() => handleFilterChange("jobType", "Marketing")}
                  />
                  Marketing
                </label>
              </li>
            </ul>

            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-gray-100 h-[1px] w-full my-6"
            ></div>

            <div className="grid gap-4">
              <h3 className="text-lg font-bold">Filters</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    className="text-base font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="experience"
                  >
                    Experience Level
                  </label>
                  <div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="experience-entry"
                        className="peer "
                        onClick={() =>
                          handleFilterChange("experienceLevel", "Entry Level")
                        }
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="experience-entry"
                      >
                        Entry Level
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="experience-intermediate"
                        className="peer "
                        onClick={() =>
                          handleFilterChange("experienceLevel", "Intermediate")
                        }
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="experience-intermediate"
                      >
                        Intermediate
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="experience-expert"
                        className="peer "
                        onClick={() =>
                          handleFilterChange("experienceLevel", "Expert")
                        }
                      />
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="experience-expert"
                      >
                        Expert
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-base font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="budget"
                  >
                    Budget
                  </label>
                  <div
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    className="grid gap-2"
                    id="budget"
                    tabIndex="0"
                    style={{ outline: "none" }}
                  >
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        role="radio"
                        aria-checked="true"
                        data-state="checked"
                        className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="budget-0-500"
                        onClick={() =>
                          handleFilterChange("budget", "$0 - $500")
                        }
                      ></button>
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="budget-0-500"
                      >
                        $0 - $500
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        role="radio"
                        aria-checked="false"
                        data-state="unchecked"
                        className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="budget-500-2000"
                        onClick={() =>
                          handleFilterChange("budget", "$500 - $2,000")
                        }
                      ></button>
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="budget-500-2000"
                      >
                        $500 - $2,000
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        role="radio"
                        aria-checked="false"
                        data-state="unchecked"
                        className="w-4 h-4 border rounded-full aspect-square border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="budget-2000"
                        onClick={() => handleFilterChange("budget", "$2,000+")}
                      ></button>
                      <label
                        className="text-sm font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="budget-2000"
                      >
                        $2,000+
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() =>
                      setFilters({
                        jobType: "All",
                        experienceLevel: "All",
                        budget: "All",
                      })
                    }
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-9">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
             
             <Link href={`/jobs/${job._id}`}>   <div
                  key={job._id}
                  className="relative overflow-hidden text-black bg-white border rounded-lg shadow-sm group"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col p-6 space-y-4">
                      <h3 className="text-lg font-bold text-center ">
                       {`${job.projectName}`}
                      </h3>

                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Company Name</span>
                          <span>{job.CompanyName}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-500">
                            Start Date:
                          </span>
                          <span>{job.Start}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-500">
                            End Date:
                          </span>
                          <span>{job.End}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 p-6 bg-gray-100 border-t">
                      <div className="text-sm text-gray-600">
                        Freelancer Required: {job.TotalNeedOffreelancer}
                      </div>
                      <h1   className={`inline-flex items-center justify-center w-[50%] h-10 bg-cyan-800  rounded-md text-sm font-medium text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 py-3`}>Bid</h1>
                     
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-opacity bg-white rounded-lg opacity-0 group-hover:opacity-20"></div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
