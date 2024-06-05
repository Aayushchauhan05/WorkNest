import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import Link from "next/link";

const Card = ({ isDashboard, isProjectDashboard, isProfileDashboard, isEarningDashboard, isProjectCard, isExperienceCard }) => {
  const [isCompleted, setIsCompleted] = useState(true);

  const handleProjectClick = (completed) => {
    if (isCompleted !== completed) {
        setIsCompleted(completed);
      }
  
  };

  return (
    <div>
      {isDashboard && (
        <>
          {isProjectDashboard && (
            <div className="bg-gray-800 text-white mt-5 rounded-lg w-full h-[30rem] flex items-center gap-5 flex-col shadow-md p-6">
              <h2 className="text-2xl font-bold">Projects</h2>
              <div className="bg-gray-900 w-full h-12 p-2 rounded-lg flex items-center justify-around">
                <div
                  className={`h-full w-1/2 flex gap-2 items-center cursor-pointer justify-center text-xl rounded-lg transition-colors duration-300 ${isCompleted ? 'bg-white text-green-800' : 'text-white'}`}
                  onClick={() => handleProjectClick(true)}
                >
                  <AiOutlineCheckCircle /> Completed
                </div>
                <div
                  className={`h-full w-1/2 flex gap-2 items-center cursor-pointer justify-center text-xl rounded-lg transition-colors duration-300 ${!isCompleted ? 'bg-white text-red-800' : 'text-white'}`}
                  onClick={() => handleProjectClick(false)}
                >
                  <AiOutlineClockCircle /> Pending
                </div>
              </div>
              {isCompleted ? (
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-4">
                    <Link href={"#"} className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                      View All
                    </Link>
                  </div>
                  <div className="w-full flex items-center justify-between mt-4  px-10 pt-20">
                    <div className="flex flex-col items-center justify-around">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-gray-500 text-3xl">Completed Projects</p>
                    </div>
                    <AiOutlineCheckCircle size={100} />
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="w-full flex items-center justify-center mt-4">
                    <Link href={"#"} className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                      View All
                    </Link>
                  </div>
                  <div className="w-full flex items-center justify-between mt-4  px-10 pt-20">
                    <div className="flex flex-col items-center justify-around">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-gray-500 text-3xl">Pending Projects</p>
                    </div>
                    <AiOutlineClockCircle size={100}  />
                  </div>
                </div>
              )}
            </div>
          )}
          {isProfileDashboard && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">User Profile</h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Username</span>
                <span className="text-lg font-semibold text-blue-500">JohnDoe123</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Email</span>
                <span className="text-lg font-semibold text-blue-500">johndoe@example.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Member Since</span>
                <span className="text-lg font-semibold text-blue-500">2022-01-01</span>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Edit Profile
                </button>
              </div>
            </div>
          )}
          {isEarningDashboard && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Earnings Overview</h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">Total Earnings</span>
                <span className="text-lg font-semibold text-blue-500">$10,000</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">This Month</span>
                <span className="text-lg font-semibold text-blue-500">$2,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Last Month</span>
                <span className="text-lg font-semibold text-blue-500">$3,000</span>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {isProjectCard && <div>project card</div>}
      {isExperienceCard && <div>Experience card</div>}
    </div>
  );
};

export default Card;
