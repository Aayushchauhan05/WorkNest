'use client'
import Link from "next/link"
import React, { useState } from 'react';


function Page() {

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
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
          <div className="flex flex-col gap-6">
          <nav className="flex flex-col gap-2 fixed top-20 w-auto h-screen">
           <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             {/* <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               className="w-5 h-5"
             >
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg> */}
             Personal Info
           </Link>

           <Link href={"/freelancerDashboard/profectionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Profectional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Skills And Projects
           </Link>
           
           <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Projects
           </Link>
           <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href={"/freelancerDashboard/interviews"}>
             {/* <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               className="w-5 h-5"
             >
               <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
               <rect width="20" height="14" x="2" y="6" rx="2"></rect>
             </svg> */}
            Interview
           </Link>

           <Link href={"/freelancerDashboard/oracleVerify"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Oracle Verify
           </Link>
         
         </nav>
          </div>
        </div>

        {/* Right side Main Container */}
        <main className="flex-grow container bg-gray-950 p-6 text-white">
          <h1 className="text-3xl font-bold text-cyan-700 dark:text-gray-50 mt-2">Skill And Projects</h1>


          <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Add Skills and Projects</h1>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Add Skills:</h2>
              <div className="flex text-black">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 mr-4"
                  placeholder="Enter skill"
                  value={newSkill}
                  onChange={handleSkillInputChange}
                />
                <button
                  className="px-4 py-2 bg-cyan-800 text-white rounded-md"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Skills Added:</h3>
                <div className="flex gap-4 flex-wrap">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-2 rounded-full px-4 py-2 bg-gray-100 text-gray-800 flex items-center justify-between">
                      <h2 className="text-sm">{skill}</h2>
                      <button onClick={() => handleDeleteSkill(index)} className="ml-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Add Projects:</h2>
              <button
                className="px-4 py-2 bg-cyan-800 text-white rounded-md"
                onClick={() => setIsProjectModalOpen(true)}
              >
                Add Project
              </button>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Projects Added:</h3>
                <div className="flex gap-2 flex-wrap" >
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground w-64 h-56 relative">
                      <h2 className="text-lg font-semibold mb-2">{project.projectName}</h2>
                      <p className="text-sm mb-1">{project.techStack}</p>
                      <p className="text-sm mb-1">Duration: {project.duration}</p>
                      <p className="text-sm mb-1">Description: {project.description}</p>
                      <p className="text-sm mb-1">Deployed Link: {project.deployedLink}</p>
                      <p className="text-sm mb-1">GitHub Link: {project.githubLink}</p>
                      <button
                        onClick={() => handleDeleteProject(index)}
                        className="w-full top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
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
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Add Project</h2>
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm  sm:text-sm"
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
                        className="mt-1 block w-fullrounded-md shadow-sm  sm " placeholder=" Enter tech stack"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm  sm:text-sm"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        placeholder="Enter GitHub link"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsProjectModalOpen(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleAddProject}
                        className="px-4 py-2 bg-cyan-800 text-white rounded-md"
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
    </>
  )
}

export default Page
