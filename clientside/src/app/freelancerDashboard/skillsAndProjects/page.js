'use client'
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import InputField from "../../../components/Input/InputField";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
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
      <div className="flex w-auto overflow-x-hidden h-screen">
        <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"skillsandprojects"} isCompanyDashboard={false} userName={"ayush badoria"} userProfession={"Software Developer"} />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Skills And Projects"
            isCompanydashboard={false}
            toggleMenu={toggleMenu}
          />
          <main className="container md:ml-80">
            <div className="mx-auto mt-8 text-white">
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
                {projects.length > 0 && (
                  <div className="mt-4">
                    <h3 className="mb-2 text-lg font-bold">Projects Added:</h3>
                    <section className="flex flex-col items-center justify-center w-[70vw] p-6 space-y-4 bg-gray-800 text-white rounded-lg shadow-lg">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-col items-center space-y-4">
                          {projects.map((project, index) => (
                            <div
                              key={index}
                              className={`relative flex flex-col items-start space-y-2 w-full border-gray-600 p-4 ${index === projects.length - 1 ? "" : "border-b"}`}
                            >
                              <div>
                                <HiOutlineBuildingOffice2 size={22} />
                              </div>
                              <div>
                                <h2 className="text-lg font-semibold">{project.projectName}</h2>
                                <p className="text-sm">{project.techStack}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                  <p>{project.duration}</p>
                                </div>
                                {project.description && <p>{project.description}</p>}
                                {project.deployedLink && (
                                  <p className="text-sm text-blue-500">
                                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                                  </p>
                                )}
                                {project.githubLink && (
                                  <p className="text-sm text-blue-500">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={() => handleDeleteProject(index)}
                                className="absolute top-2 right-2 px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                              >
                                Delete
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                )}
              </div>
              {isProjectModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsProjectModalOpen(false)}
                  ></div>
                  <div className="z-10 w-full max-w-lg p-6 bg-white text-black rounded-lg mx-2 md:h-[70%] overflow-scroll">
                    <h2 className="mb-4 text-lg font-semibold">Add Project</h2>
                    <form>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <InputField
                            label="Project Name"
                            name="projectName"
                            type="text"
                            value={projectFormData.projectName}
                            onChange={handleProjectInputChange}
                            placeholder="Enter project name"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <InputField
                            label="Tech Stack"
                            name="techStack"
                            type="text"
                            value={projectFormData.techStack}
                            onChange={handleProjectInputChange}
                            placeholder="Enter tech stack"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <InputField
                            label="Duration"
                            name="duration"
                            type="text"
                            value={projectFormData.duration}
                            onChange={handleProjectInputChange}
                            placeholder="Enter duration"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <InputField
                            label="Description"
                            name="description"
                            type="textarea"
                            value={projectFormData.description}
                            onChange={handleProjectInputChange}
                            placeholder="Enter description"
                            required
                            rows="3"
                          />
                        </div>
                        <div className="grid gap-2">
                          <InputField
                            label="Deployed Link"
                            name="deployedLink"
                            type="text"
                            value={projectFormData.deployedLink}
                            onChange={handleProjectInputChange}
                            placeholder="Enter deployed link"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <InputField
                            label="GitHub Link"
                            name="githubLink"
                            type="text"
                            value={projectFormData.githubLink}
                            onChange={handleProjectInputChange}
                            placeholder="Enter GitHub link"
                            required
                          />
                        </div>
                        <div className="flex justify-end mt-4">
                          <button
                            type="button"
                            onClick={() => setIsProjectModalOpen(false)}
                            className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={handleAddProject}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-cyan-600 hover:bg-cyan-700"
                          >
                            Add Project
                          </button>
                        </div>
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
  );
}

export default Page;
