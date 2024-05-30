'use client'
import { useState } from "react";
import Link from "next/link";

function Page() {

  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      companyName: "Company A",
      position: "Frontend Developer",
      skills: "HTML, CSS, JavaScript",
      description: "Lorem ipsum dolor sit amet",
      startDate: "2022-01-01",
      endDate: "2022-12-31",
    },
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
    const formData = new FormData();
    const form = document.getElementById('workExperienceForm');
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData.append(element.name, element.value);
      }
    }
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
          <h1 className="text-3xl font-bold text-cyan-700 dark:text-gray-50 mt-2">
            Professional Info
          </h1>
          <div className="flex justify-between items-start px-10 pt-5">
            <h2>Work Experience</h2>
            <button
              onClick={openModal}
              className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap justify-center mt-4 gap-6">
            {workExperiences.map((experience) => (
              <div
                key={experience.id}
                className="border rounded-lg shadow-sm bg-card text-card-foreground w-64 h-56"
              >
                <div className="flex flex-col justify-end h-full p-4">
                  <h2 className="text-xl font-bold">
                    {experience.companyName}
                  </h2>
                  <p className="text-sm">{experience.position}</p>
                  <p className="text-sm">{experience.skills}</p>
                  <p className="text-sm">
                    Description: {experience.description}
                  </p>
                  <div className="flex mt-auto">
                    <p className="text-sm">Starting Date: {experience.startDate}</p>
                    <p className="text-sm ml-4">Ending Date: {experience.endDate}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(experience.id)}
                    className="mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center text-black justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg w-96">
      <h2 className="text-xl font-bold mb-4">Add Work Experience</h2>
      <form onSubmit={handleSubmit} id="workExperienceForm">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            placeholder="Enter your role designation"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800"
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
