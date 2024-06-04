'use client'
import Link from 'next/link';
import { useState } from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from "@/components/Header/Header";

function Page() {
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      dueDate: '2024-06-15',
      client: 'ABC Corp',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      dueDate: '2024-07-10',
      client: 'XYZ Corp',
      status: 'ongoing'
    },
    {
      id: 3,
      name: 'Logo Design',
      dueDate: '2024-06-30',
      client: '123 Inc',
      status: 'Complete'
    }
  ];

  const filterProjectsByStatus = (status) => {
    const filtered = projects.filter(project => project.status === status);
    setFilteredProjects(filtered);
  };

  function getStatusColor(status) {
    switch (status) {
      case 'complete':
        return 'bg-green-500 text-white';
      case 'pending':
        return 'bg-yellow-500 text-black';
      case 'ongoing':
        return 'bg-gray-500 text-white';
      case 'rejected':
        return 'bg-red-500 text-white';
      default:
        return '';
    }
  }

  return (
    <>
    <div className="flex w-full h-screen ">
  <VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isProduct={true}   filterProjectsByStatus={filterProjectsByStatus}  userName={"ayush badoria"} userProfession={"Software Developer"}/>
      <div className="flex flex-col w-full">
      <Header 
        companyName="Company XYZ"
        pageName="Your Projects"
        isCompanydashboard={true} 
        toggleMenu={toggleMenu}
      />
        <main className="container md:pl-64 lg:pl-72 grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {((filteredProjects || projects)).map(project => (
            <div key={project.id} className="relative overflow-hidden max-h-72 bg-white border rounded-lg shadow-sm group">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col p-6 space-y-4">
                  <h3 className="text-lg font-bold text-center ">{project.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-center text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-500">Due Date:</span>
                      <span>{project.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-100 border-t">
                  <Link href={"companydashboard/projects/viewdetails"} >
                    <p className="inline-flex items-center justify-center text-sm font-medium text-blue-500 rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 transition-opacity bg-white rounded-lg opacity-0 group-hover:opacity-20"></div>
            </div>
          ))}
        </main>
     
      </div>
    </div></>









     

  );
}

export default Page;
