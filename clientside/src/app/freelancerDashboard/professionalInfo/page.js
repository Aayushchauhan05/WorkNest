'use client';
import Link from "next/link";
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (isMounted) {
          console.log(data.Data.professionalInfo)
          setUserinfo(data.Data.professionalInfo);
          setWorkExperiences([data.Data.professionalInfo]);
        
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
useEffect(()=>{
console.log(workExperiences)
},[userinfo])
  return (
    <>
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="absolute top-0 right-0 z-50 p-5 text-xl md:hidden ">X</button>

         {/* leftside Navbar */}
         <nav className="relative flex flex-col w-auto h-screen gap-2 top-10">
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

           <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors bg-gray-800 rounded-md">
             Profectional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Skills And Projects
           </Link>
           
           <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
            Freelance Projects
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
             Oracle
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
             <h1 className="mt-2 text-3xl font-bold text-white dark:text-gray-50">Professional Info</h1>
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
                key={experience?.id}
                className="w-64 h-full border rounded-lg shadow-sm bg-card text-card-foreground"
              >
                <div className="flex flex-col justify-end h-full p-4">
                  <h2 className="text-xl font-bold">
                    {experience?.company}
                  </h2>
                  <p className="text-sm text-cyan-700">Role:  {experience?.jobTitle}</p>
                  <p className="text-sm">{experience?.skills}</p>
                  <p className="text-sm">
                    Description: {experience?.workDescription}
                  </p>
                  <div className="flex mt-auto">
                    <p className="text-sm">Starting Date: {experience?.workFrom}</p>
                    <p className="ml-4 text-sm">Ending Date: {experience?.workTo}</p>
                  </div>
                  <button
                    onClick={openModal}
                    className="px-4 py-1 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(experience?.id)}
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
