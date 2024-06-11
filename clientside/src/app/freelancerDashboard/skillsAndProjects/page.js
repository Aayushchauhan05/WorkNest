'use client'
import Link from "next/link";
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectFormData, setProjectFormData] = useState({
    projectName: '',
    techStack: '',
    duration: '',
    description: '',
    deployedLink: '',
    githubLink: '',
  });
  const [userinfo, setUserinfo] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (isMounted) {
          console.log(data.Data)
          setUserinfo(data.Data);
          setSkills(data.Data.Skills.split(','));
          setProjects(data.Data.project || []);
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

  const handleSkillInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData({
      ...projectFormData,
      [name]: value,
    });
  };

  const handleAddProject = () => {
    setProjects([...projects, projectFormData]);
    setProjectFormData({
      projectName: '',
      techStack: '',
      duration: '',
      description: '',
      deployedLink: '',
      githubLink: '',
    });
    setIsProjectModalOpen(false);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  return (
    <>
     
<div className="flex w-screen h-screen ">

<VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"skillsandprojects"} isCompanyDashboard={false} userName={"ayush badoria"} userProfession={"Software Developer"}/>
    <div className="flex flex-col w-full">
    <Header 
      companyName="Company XYZ"
      pageName="Skills And Projects"
      isCompanydashboard={true} 
      toggleMenu={toggleMenu}
    />

        {/* Right side Main Container */}
        <main className="container md:ml-72">
       

          <div className=" md:mx-auto md:mt-8 text-white">
            <h1 className="mb-4 text-3xl text-white font-bold">Add Skills and Projects</h1>
            <div className="mb-8">
              <h2 className="mb-2 text-xl font-bold">Add Skills:</h2>
              <div className="flex text-black">
                <input
                  type="text"
                  className="px-4 py-2 mr-4 border border-gray-300 rounded-md"
                  placeholder="Enter skill"
                  value={newSkill}
                  onChange={handleSkillInputChange}
                />
                <button
                  className="px-4 py-2 text-white rounded-md bg-cyan-800"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-bold">Skills Added:</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between px-4 py-2 mb-2 text-gray-800 bg-gray-100 rounded-full">
                      <h2 className="text-sm">{skill}</h2>
                      <button onClick={() => handleDeleteSkill(index)} className="ml-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold">Add Projects:</h2>
              <button
                className="px-4 py-2 text-white rounded-md bg-cyan-800"
                onClick={() => setIsProjectModalOpen(true)}
              >
                Add Project
              </button>
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-bold">Projects Added:</h3>
                <div className="flex flex-wrap gap-2">
                  {projects.map((project, index) => (
                    <div key={index} className="relative w-64 h-56 p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
                      <h2 className="mb-2 text-lg font-semibold">{project.projectName}</h2>
                      <p className="mb-1 text-sm">{project.techStack}</p>
                      <p className="mb-1 text-sm">Duration: {project.duration}</p>
                      <p className="mb-1 text-sm">Description: {project.description}</p>
                      <p className="mb-1 text-sm">Deployed Link: {project.deployedLink}</p>
                      <p className="mb-1 text-sm">GitHub Link: {project.githubLink}</p>
                      <button
                        onClick={() => handleDeleteProject(index)}
                        className="w-full px-2 py-1 text-white bg-red-500 rounded-md top-2 right-2 hover:bg-red-600 focus:outline-none"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Modal */}
            {isProjectModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-gray-900 bg-opacity-50">
                <div className="p-8 bg-white rounded-lg">
                  <h2 className="mb-4 text-xl font-bold">Add Project</h2>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={projectFormData.projectName}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter project name"
                        required
                      />
                    </div>
                    {/* Add other input fields for project details */}
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <label htmlFor="techStack" className="block text-sm font-medium text-gray-700">
                        Tech Stack
                      </label>
                      <input
                        type="text"
                        id="techStack"
                        name="techStack"
                        value={projectFormData.techStack}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter tech stack"
                        required
                      />
                    </div>
                    {/* Duration */}
                    <div className="mb-4">
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={projectFormData.duration}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter duration"
                        required
                      />
                    </div>
                    {/* Description */}
                    <div className="mb-4">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={projectFormData.description}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        rows="3"
                        placeholder="Enter description"
                        required
                      ></textarea>
                    </div>
                    {/* Deployed Link */}
                    <div className="mb-4">
                      <label htmlFor="deployedLink" className="block text-sm font-medium text-gray-700">
                        Deployed Link
                      </label>
                      <input
                        type="text"
                        id="deployedLink"
                        name="deployedLink"
                        value={projectFormData.deployedLink}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter deployed link"
                        required
                      />
                    </div>
                    {/* GitHub Link */}
                    <div className="mb-4">
                      <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
                        GitHub Link
                      </label>
                      <input
                        type="text"
                        id="githubLink"
                        name="githubLink"
                        value={projectFormData.githubLink}
                        onChange={handleProjectInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter GitHub link"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsProjectModalOpen(false)}
                        className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleAddProject}
                        className="px-4 py-2 text-white rounded-md bg-cyan-800"
                      >
                        Add Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      </div>
    </>
  )
}

export default Page