'use client';
import Link from "next/link";
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';

function Page() {
  const [workExperiences, setWorkExperiences] = useState([
    // {
    //   id: 1,
    //   companyName: "Company A",
    //   position: "Frontend Developer",
    //   skills: "HTML, CSS, JavaScript",
    //   description: "Lorem ipsum dolor sit amet",
    //   startDate: "2022-01-01",
    //   endDate: "2022-12-31",
    // },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setWorkExperiences(workExperiences.filter((exp) => exp.id !== id));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExperience = {
      id: Date.now(),
      companyName: formData.get("companyName"),
      position: formData.get("position"),
      skills: formData.get("skills"),
      description: formData.get("description"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
    };
    setWorkExperiences([...workExperiences, newExperience]);
    closeModal();
  };

  const [userinfo, setUserinfo] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelancerprofile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (isMounted) {
          console.log(data.Data.professionalInfo)
          setUserinfo(data.Data);
          setWorkExperiences(data.Data.professionalInfo || []);
        }
      } catch (error) {
        console.log("Error fetching user info:", error);
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <>
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
          <div className="flex flex-col gap-6">
            <nav className="fixed flex flex-col w-auto h-screen gap-2 top-20">
              <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Personal Info
              </Link>

              <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Professional Info
              </Link>

              <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Skills And Projects
              </Link>

              <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Projects
              </Link>

              <Link href={"/freelancerDashboard/interviews"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Interview
              </Link>

              <Link href={"/freelancerDashboard/oracleVerify"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Oracle Verify
              </Link>
            </nav>
          </div>
        </div>

        {/* Right side Main Container */}
        <main className="container flex-grow p-6 text-white bg-gray-950">
          <h1 className="mt-2 text-3xl font-bold text-cyan-700 dark:text-gray-50">
            Professional Info
          </h1>
          <div className="flex items-start justify-between px-10 pt-5">
            <h2>Work Experience</h2>
            <button
              onClick={openModal}
              className="px-4 py-2 text-white rounded-md bg-cyan-700 hover:bg-cyan-800"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {workExperiences.map((experience) => (
              <div
                key={experience.id}
                className="w-64 h-56 border rounded-lg shadow-sm bg-card text-card-foreground"
              >
                <div className="flex flex-col justify-end h-full p-4">
                  <h2 className="text-xl font-bold">
                    {experience.previousCompany}
                  </h2>
                  <p className="text-sm text-cyan-700">Role:  {experience.Role}</p>
                  <p className="text-sm">{experience.skills}</p>
                  <p className="text-sm">
                    Description: {experience.description}
                  </p>
                  <div className="flex mt-auto">
                    <p className="text-sm">Starting Date: {experience.start}</p>
                    <p className="ml-4 text-sm">Ending Date: {experience.end}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(experience.id)}
                    className="px-4 py-1 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(experience.id)}
                    className="px-4 py-1 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-gray-900 bg-opacity-50">
              <div className="p-8 bg-white rounded-lg w-96">
                <h2 className="mb-4 text-xl font-bold">Add Work Experience</h2>
                <form onSubmit={handleSubmit} id="workExperienceForm">
                  <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                      Role Designation
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      placeholder="Enter your role designation"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      placeholder="Enter skills"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      rows="3"
                      placeholder="Enter description"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                      Starting Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                      Ending Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-white rounded-md bg-cyan-700 hover:bg-cyan-800"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Page;
