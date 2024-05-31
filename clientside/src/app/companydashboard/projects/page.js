'use client'
import Link from 'next/link'
import { useState } from 'react';

function page() {
  const [filteredProjects, setFilteredProjects] = useState(null);
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
      case 'Complete':
        return 'bg-green-500 text-white';
      case 'Pending':
        return 'bg-yellow-500 text-black';
      case 'ongoing':
        return 'bg-gray-500 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return '';
    }
  }

  return (
    <>
      <div class="flex flex-col md:flex-row min-h-screen">
        <div class="bg-cyan-700 text-white p-6 flex flex-col md:w-64">
          <div class="flex items-center fixed top-20 gap-4 mb-8">
            <div class="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center text-2xl font-bold">JD</div>
            <h1 class="text-xl font-bold">John Doe</h1>
          </div>


          <nav className="fixed flex flex-col w-auto h-screen gap-2 top-36">
            <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="/freelancerDashboard">

              Dashboard
            </Link>

            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" onClick={() => filterProjectsByStatus("ongoing")}>
              Ongoing
            </a>
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" onClick={() => filterProjectsByStatus("Pending")}>
              Pending
            </a>
            <a className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" onClick={() => filterProjectsByStatus("Complete")}>
              Completed
            </a>

          </nav>
        </div>
        <div class="flex-1  bg-gray-900 p-6 md:p-8">
          <h2 class="text-2xl font-bold mb-6 text-cyan-600">Your Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {((filteredProjects || projects)).map(project => (
              <div key={project.id} className="relative overflow-hidden bg-white border rounded-lg shadow-sm group">
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
                    <Link className="inline-flex items-center justify-center text-sm font-medium text-blue-500 rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 transition-opacity bg-white rounded-lg opacity-0 group-hover:opacity-20"></div>
              </div>

            ))}



          </div>
        </div>
      </div>
    </>
  )
}

export default page