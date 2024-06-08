import React, { useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const ExperienceForm = ({ onClose, onSubmit }) => {
  const [position, setPosition] = useState("");
  const [durationInYears, setDurationInYears] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
  
    const experienceData = {
      position,
      durationInYears,
      location,
      company,
      employmentType,
      duration,
      description,
    };
  
    onSubmit(experienceData);
  
    onClose();
  };

  return (
    <div className="flex fixed items-center justify-center h-screen w-screen p-6 mt-0 z-50 text-black">
      <form onSubmit={handleExperienceSubmit} className="w-auto  bg-gray-800 rounded-lg shadow-lg p-20">
        <div className="flex flex-col items-start space-y-4 w-full">
          <div className="flex flex-col w-full">
            <p className="mb-2 text-lg font-semibold text-white">Add Experience</p>
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <input
              type="text"
              placeholder="Duration (in years)"
              value={durationInYears}
              onChange={(e) => setDurationInYears(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <input
              type="text"
              placeholder="Employment Type"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <input
              type="text"
              placeholder="Duration (e.g., MM/YYYY - MM/YYYY)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-cyan-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 w-full text-white rounded-md bg-cyan-800 hover:bg-cyan-700"
          >
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
