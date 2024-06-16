"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/context';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from '@/components/Header/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [userinfo, setUserinfo] = useState([]);
  const { token } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const fetchUserInfo = async () => {
    try {
      const token= localStorage.getItem("token")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.Data.project)
        setUserinfo(data.Data);
        setSkills((data.Data.skills||[]).split(','));
        setProjects(data.Data.project || []);
        // setSkills()
      }
    } catch (error) {
      console.log("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSkillInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelancer/Listproject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const newProject = await response.json();
        toast.success("Project added successfully");
        setProjects([...projects, newProject]);
        e.target.reset();
        setIsProjectModalOpen(false);
      } else {
        toast.error('Failed to add project');
      }
    } catch (error) {
      toast.error('Failed to add project');
    }
  };

  // const fetchProfileData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/profile`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setUserinfo(data.Data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(()=>{
  //   fetchProfileData
  // },[])
  return (
    <>
      <div className="flex w-auto h-screen overflow-x-hidden">
        <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"skillsandprojects"} isCompanyDashboard={false} userName={`${userinfo?.firstName}`} userProfession={``} />
        <div className="flex flex-col w-full">
          <Header
            companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
            pageName="Your Professional Info"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <main className="container md:ml-80">
            <div className="mx-auto mt-8 text-white">
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
                          {userinfo.project.map((project, index) => (
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
                              {/* <button
                                onClick={() => handleDeleteProject(index)}
                                className="absolute px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md top-2 right-2 hover:bg-red-600 focus:outline-none"
                              >
                                Delete
                              </button> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      {isProjectModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 pt-32 bg-white rounded-lg shadow-lg w-[50vw] h-full overflow-y-auto">
            <h2 className="mb-4 text-2xl font-bold">Add Project</h2>
            <form onSubmit={handleAddProject}>
              <div className="mb-4">
                <label className="block mb-2">Project Name:</label>
                <input
                  type="text"
                  name="projectName"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description:</label>
                <textarea
                  name="Description"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">GitHub Link:</label>
                <input
                  type="text"
                  name="githubLink"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Start Date:</label>
                <input
                  type="date"
                  name="Start"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">End Date:</label>
                <input
                  type="date"
                  name="End"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Reference:</label>
                <input
                  type="text"
                  name="Refer"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Role:</label>
                <input
                  type="text"
                  name="Role"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Project Type:</label>
                <input
                  type="text"
                  name="projectType"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Tech Used:</label>
                <input
                  type="text"
                  name="TechUsed"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md"
                  onClick={() => setIsProjectModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-md bg-cyan-800"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Page;