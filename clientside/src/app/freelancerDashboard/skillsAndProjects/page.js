'use client'
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import InputField from "../../../components/Input/InputField";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Header from "@/components/Header/Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
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

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const validateProjectForm = (values) => {
    const errors = {};
    if (!values.projectName) {
      errors.projectName = 'Project Name is required';
    }
    if (!values.techStack) {
      errors.techStack = 'Tech Stack is required';
    }
    if (!values.duration) {
      errors.duration = 'Duration is required';
    }
    if (!values.description) {
      errors.description = 'Description is required';
    }
    if (!values.deployedLink) {
      errors.deployedLink = 'Deployed Link is required';
    } else if (!/^https?:\/\/.+$/.test(values.deployedLink)) {
      errors.deployedLink = 'Invalid URL';
    }
    if (!values.githubLink) {
      errors.githubLink = 'GitHub Link is required';
    } else if (!/^https?:\/\/.+$/.test(values.githubLink)) {
      errors.githubLink = 'Invalid URL';
    }
    return errors;
  };

  const handleAddProject = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
        resetForm();
        setIsProjectModalOpen(false);
      } else {
        console.error('Failed to add project');
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex w-auto h-screen overflow-x-hidden">
        <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"skillsandprojects"} isCompanyDashboard={false} userName={"ayush badoria"} userProfession={"Software Developer"} />
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
                                className="absolute px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md top-2 right-2 hover:bg-red-600 focus:outline-none"
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
                    <Formik
                      initialValues={{
                        projectName: '',
                        techStack: '',
                        duration: '',
                        description: '',
                        deployedLink: '',
                        githubLink: '',
                      }}
                      validate={validateProjectForm}
                      onSubmit={handleAddProject}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="projectName">Project Name</label>
                            <Field
                              type="text"
                              name="projectName"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="projectName" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="techStack">Tech Stack</label>
                            <Field
                              type="text"
                              name="techStack"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="techStack" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="duration">Duration</label>
                            <Field
                              type="text"
                              name="duration"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="duration" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="description">Description</label>
                            <Field
                              as="textarea"
                              name="description"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="description" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="deployedLink">Deployed Link</label>
                            <Field
                              type="text"
                              name="deployedLink"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="deployedLink" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="githubLink">GitHub Link</label>
                            <Field
                              type="text"
                              name="githubLink"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="githubLink" component="div" className="mt-1 text-sm text-red-600" />
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="px-4 py-2 mr-4 text-white bg-gray-600 rounded-md"
                              onClick={() => setIsProjectModalOpen(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="px-4 py-2 text-white rounded-md bg-cyan-800"
                            >
                              {isSubmitting ? 'Adding...' : 'Add Project'}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
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
