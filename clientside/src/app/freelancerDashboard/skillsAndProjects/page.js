'use client'
import Link from "next/link";
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';

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
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50 ">X</button>

         {/* leftside Navbar */}
         <nav className="flex flex-col w-auto h-screen gap-2 top-10  relative">
         <Link href={"/freelancerDashboard"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
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
            Dashboard
           </Link>
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

           <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Profectional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800">
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
        <main className="container flex-grow p-6 text-white bg-gray-950">
        <header className="bg-gray-900 shadow-sm dark:bg-gray-900">
         <div className="container flex items-center justify-between px-6 py-4 mx-auto">
           <div className="flex items-center gap-4">
             <button onClick={toggleMenu} className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground md:hidden">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 className="w-6 h-6 text-gray-500 dark:text-gray-400"
               >
                 <line x1="4" x2="20" y1="12" y2="12"></line>
                 <line x1="4" x2="20" y1="6" y2="6"></line>
                 <line x1="4" x2="20" y1="18" y2="18"></line>
               </svg>
             </button>
             {/* <span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
               <img className="w-full h-full aspect-square" src="/placeholder-user.jpg" />
             </span> */}
             <div>
             <h1 className="mt-2 text-3xl font-bold text-white dark:text-gray-50">Skill And Projects</h1>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 className="w-6 h-6 text-white dark:text-gray-400"
               >
                 <path d="M2 20h.01"></path>
                 <path d="M7 20v-4"></path>
                 <path d="M12 20v-8"></path>
                 <path d="M17 20V8"></path>
                 <path d="M22 4v16"></path>
               </svg>
             </button>
             <button className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-red-700">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 className="w-6 h-6 text-white dark:text-gray-400"
               >
                 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                 <circle cx="12" cy="12" r="3"></circle>
               </svg>
             </button>
           </div>
         </div>
       </header>

          <div className="container mx-auto mt-8">
            <h1 className="mb-4 text-3xl font-bold">Add Skills and Projects</h1>
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
    </>
  )
}

export default Page