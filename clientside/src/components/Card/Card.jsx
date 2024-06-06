import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

const Card = ({ isDashboard, isProjectDashboard, isProfileDashboard, isEarningDashboard, isProjectCard, isExperienceCard }) => {
  const [isCompleted, setIsCompleted] = useState(true);

  const handleProjectClick = (completed) => {
    if (isCompleted !== completed) {
      setIsCompleted(completed);
    }
  };

  return (
    <div className="">
      {isDashboard && (
        <>
          {isProjectDashboard && (
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-6  max-w-96 flex flex-col items-center">
              <h2 className="text-2xl font-bold">Projects</h2>
              <div className="bg-gray-900 w-full h-12 p-2 rounded-lg flex items-center justify-around mt-4">
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
                <div className="w-full mt-4 flex flex-col items-center">
                  <Link href="#" className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                    View All
                  </Link>
                  <div className="flex items-center justify-between mt-4 w-full px-10 pt-20">
                    <div className="flex flex-col items-center">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-gray-500 text-3xl">Completed Projects</p>
                    </div>
                    <AiOutlineCheckCircle size={100} />
                  </div>
                </div>
              ) : (
                <div className="w-full mt-4 flex flex-col items-center">
                  <Link href="#" className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                    View All
                  </Link>
                  <div className="flex items-center justify-between mt-4 w-full px-10 pt-20">
                    <div className="flex flex-col items-center">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-gray-500 text-3xl">Pending Projects</p>
                    </div>
                    <AiOutlineClockCircle size={100} />
                  </div>
                </div>
              )}
            </div>
          )}
          {isProfileDashboard && (
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 max-w-96 h-full flex flex-col items-center">
              <h2 className="text-2xl font-bold">Profile</h2>
              <h2>Ayush Badoria</h2>
              <Link href="#" className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                Edit
              </Link>
              <div className="flex flex-col gap-3 mt-4 items-center">
                <div className="flex items-center"><h2>Software Developer</h2></div>
                <div className="flex items-center"><h2>ayushbadoria@gmail.com</h2></div>
                <div className="flex items-center pt-10"><h2>Skills</h2></div>
                <div className="flex flex-wrap gap-2">
                  <div className="w-auto rounded-full h-10 flex items-center bg-white text-black p-5">UI design</div>
                  <div className="w-auto rounded-full h-10 flex items-center bg-white text-black p-5">Branding</div>
                  <div className="w-auto rounded-full h-10 flex items-center bg-white text-black p-5">Web development</div>
                  <div className="w-auto rounded-full h-10 flex items-center bg-white text-black p-5">Logo design</div>
                </div>
              </div>
            </div>
          )}
          {isEarningDashboard && (
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 max-w-96 h-full flex flex-col items-center">
              <h2 className="text-2xl font-bold">Earning</h2>
              <div className="w-full mt-4 flex flex-col items-center">
                <Link href="#" className="border px-4 py-2 rounded text-white hover:bg-white hover:text-gray-800 transition-colors duration-300">
                  View All
                </Link>
                <div className="flex items-center justify-between mt-4 w-full px-10 pt-20">
                  <div className="flex flex-col items-center">
                    <h2 className="text-7xl">$0</h2>
                    <p className="text-gray-500 text-3xl">Your Earning</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {isProjectCard && <div>Project Card</div>}
      {isExperienceCard && <div>Experience Card</div>}
    </div>
  );
};

export default Card;
