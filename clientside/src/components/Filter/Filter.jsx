import { useState } from 'react';

const Filter = ({ onFilterChange, resetFilters }) => {
  const handleFilterChange = (name, value) => {
    onFilterChange(name, value);
  };

  return (
    <div className="sticky w-auto h-screen col-span-1 p-6 rounded-lg shadow-md bg-cyan-800 md:col-span-3 top-24">
      <h2 className="mb-4 text-lg font-bold">Job Categories</h2>
      <ul className="space-y-2">
        <li>
          <label className="text-sm text-white hover:text-gray-300">
            <input
              type="radio"
              name="jobType"
              onChange={() => handleFilterChange("jobType", "Web Development")}
            />
            Web Development
          </label>
        </li>
        <li>
          <label className="text-sm text-white hover:text-gray-300">
            <input
              type="radio"
              name="jobType"
              onChange={() => handleFilterChange("jobType", "Graphic Design")}
            />
            Graphic Design
          </label>
        </li>
        <li>
          <label className="text-sm text-white hover:text-gray-300">
            <input
              type="radio"
              name="jobType"
              onChange={() => handleFilterChange("jobType", "Content Writing")}
            />
            Content Writing
          </label>
        </li>
        <li>
          <label className="text-sm text-white hover:text-gray-300">
            <input
              type="radio"
              name="jobType"
              onChange={() => handleFilterChange("jobType", "Virtual Assistant")}
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
                  onClick={() => handleFilterChange("experienceLevel", "Expert")}
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
                  onClick={() => handleFilterChange("budget", "$0 - $500")}
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
                  onClick={() => handleFilterChange("budget", "$500 - $2,000")}
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
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
