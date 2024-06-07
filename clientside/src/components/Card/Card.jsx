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
            <div className="flex flex-col items-center p-6 text-white bg-gray-800 rounded-lg shadow-md max-w-96">
              <h2 className="text-2xl font-bold">Projects</h2>
              <div className="flex items-center justify-around w-full h-12 p-2 mt-4 bg-gray-900 rounded-lg">
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
                <div className="flex flex-col items-center w-full mt-4">
                  <Link href="#" className="px-4 py-2 text-white transition-colors duration-300 border rounded hover:bg-white hover:text-gray-800">
                    View All
                  </Link>
                  <div className="flex items-center justify-between w-full px-10 pt-20 mt-4">
                    <div className="flex flex-col items-center">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-3xl text-gray-500">Completed Projects</p>
                    </div>
                    <AiOutlineCheckCircle size={100} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center w-full mt-4">
                  <Link href="#" className="px-4 py-2 text-white transition-colors duration-300 border rounded hover:bg-white hover:text-gray-800">
                    View All
                  </Link>
                  <div className="flex items-center justify-between w-full px-10 pt-20 mt-4">
                    <div className="flex flex-col items-center">
                      <h2 className="text-7xl">1</h2>
                      <p className="text-3xl text-gray-500">Pending Projects</p>
                    </div>
                    <AiOutlineClockCircle size={100} />
                  </div>
                </div>
              )}
            </div>
          )}
          {isProfileDashboard && (
            <div className="flex flex-col items-center h-full p-6 text-white bg-gray-800 rounded-lg shadow-md max-w-96">
              <h2 className="text-2xl font-bold">Profile</h2>
              <h2>Ayush Badoria</h2>
              <Link href="#" className="px-4 py-2 text-white transition-colors duration-300 border rounded hover:bg-white hover:text-gray-800">
                Edit
              </Link>
              <div className="flex flex-col items-center gap-3 mt-4">
                <div className="flex items-center"><h2>Software Developer</h2></div>
                <div className="flex items-center"><h2>ayushbadoria@gmail.com</h2></div>
                <div className="flex items-center pt-10"><h2>Skills</h2></div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center w-auto h-10 p-5 text-black bg-white rounded-full">UI design</div>
                  <div className="flex items-center w-auto h-10 p-5 text-black bg-white rounded-full">Branding</div>
                  <div className="flex items-center w-auto h-10 p-5 text-black bg-white rounded-full">Web development</div>
                  <div className="flex items-center w-auto h-10 p-5 text-black bg-white rounded-full">Logo design</div>
                </div>
              </div>
            </div>
          )}
          {isEarningDashboard && (
            <div className="flex flex-col items-center h-full p-6 text-white bg-gray-800 rounded-lg shadow-md max-w-96">
              <h2 className="text-2xl font-bold">Earning</h2>
              <div className="flex flex-col items-center w-full mt-4">
                <Link href="#" className="px-4 py-2 text-white transition-colors duration-300 border rounded hover:bg-white hover:text-gray-800">
                  View All
                </Link>
                <div className="flex items-center justify-between w-full px-10 pt-20 mt-4">
                  <div className="flex flex-col items-center">
                    <h2 className="text-7xl">$0</h2>
                    <p className="text-3xl text-gray-500">Your Earning</p>
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
