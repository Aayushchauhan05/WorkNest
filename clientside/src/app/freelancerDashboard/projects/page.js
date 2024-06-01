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
      status: 'Applied'
    },
    {
      id: 3,
      name: 'Logo Design',
      dueDate: '2024-06-30',
      client: '123 Inc',
      status: 'Complete'
    },
    {
      id: 4,
      name: 'Social Media Marketing',
      dueDate: '2024-06-25',
      client: 'LMN Co',
      status: 'Rejected'
    },
    {
      id: 5,
      name: 'Content Writing',
      dueDate: '2024-07-05',
      client: 'PQR Ltd',
      status: 'Pending'
    },
    {
      id: 6,
      name: 'Graphic Design',
      dueDate: '2024-07-20',
      client: 'EFG LLC',
      status: 'Applied'
    },
    {
      id: 7,
      name: 'SEO Optimization',
      dueDate: '2024-07-12',
      client: 'GHI Corp',
      status: 'Complete'
    },
    {
      id: 8,
      name: 'Video Production',
      dueDate: '2024-07-08',
      client: 'UVW Inc',
      status: 'Rejected'
    },
    {
      id: 9,
      name: 'Email Marketing Campaign',
      dueDate: '2024-07-30',
      client: 'MNO Co',
      status: 'Pending'
    },
    {
      id: 10,
      name: 'UI/UX Design',
      dueDate: '2024-07-25',
      client: 'RST Ltd',
      status: 'Applied'
    },
    {
      id: 11,
      name: 'Brand Strategy',
      dueDate: '2024-07-18',
      client: 'IJK Inc',
      status: 'Complete'
    },
    {
      id: 12,
      name: 'Print Advertising',
      dueDate: '2024-08-05',
      client: 'OPQ Corp',
      status: 'Rejected'
    },
    {
      id: 13,
      name: 'E-commerce Website Development',
      dueDate: '2024-08-10',
      client: 'JKL Ltd',
      status: 'Pending'
    },
    {
      id: 14,
      name: 'Social Media Management',
      dueDate: '2024-08-15',
      client: 'TUV Co',
      status: 'Applied'
    },
    {
      id: 15,
      name: 'Content Marketing Strategy',
      dueDate: '2024-08-20',
      client: 'WXY Inc',
      status: 'Complete'
    },
    {
      id: 16,
      name: 'Photography Services',
      dueDate: '2024-08-25',
      client: 'ABD Corp',
      status: 'Rejected'
    },
    {
      id: 17,
      name: 'Software Development',
      dueDate: '2024-09-05',
      client: 'CDE LLC',
      status: 'Pending'
    },
    {
      id: 18,
      name: 'Digital Advertising Campaign',
      dueDate: '2024-09-10',
      client: 'EHI Ltd',
      status: 'Applied'
    },
    {
      id: 19,
      name: 'UI Design Consultation',
      dueDate: '2024-09-15',
      client: 'FGH Inc',
      status: 'Complete'
    },
    {
      id: 20,
      name: 'Market Research',
      dueDate: '2024-09-20',
      client: 'IJK Co',
      status: 'Rejected'
    },
    {
      id: 21,
      name: 'Video Editing Services',
      dueDate: '2024-09-25',
      client: 'LMN Corp',
      status: 'Pending'
    },
    {
      id: 22,
      name: 'Copywriting for Website',
      dueDate: '2024-10-05',
      client: 'OPQ Ltd',
      status: 'Applied'
    },
    {
      id: 23,
      name: 'Product Packaging Design',
      dueDate: '2024-10-10',
      client: 'RST Inc',
      status: 'Complete'
    },
    {
      id: 24,
      name: 'Event Planning',
      dueDate: '2024-10-15',
      client: 'UVW Corp',
      status: 'Rejected'
    },
    {
      id: 25,
      name: 'SEO Audit',
      dueDate: '2024-10-20',
      client: 'XYZ Ltd',
      status: 'Pending'
    },
    {
      id: 26,
      name: 'Public Relations Campaign',
      dueDate: '2024-10-25',
      client: '123 Inc',
      status: 'Applied'
    },
    {
      id: 27,
      name: 'Technical Support Services',
      dueDate: '2024-11-05',
      client: '456 Co',
      status: 'Complete'
    },
    {
      id: 28,
      name: 'Illustration Design',
      dueDate: '2024-11-10',
      client: '789 Corp',
      status: 'Rejected'
    },
    {
      id: 29,
      name: 'User Testing',
      dueDate: '2024-11-15',
      client: '012 Ltd',
      status: 'Pending'
    },
    {
      id: 30,
      name: 'Mobile App UI Design',
      dueDate: '2024-11-20',
      client: '345 Inc',
      status: 'Applied'
    },
    {
      id: 31,
      name: 'Printed Brochure Design',
      dueDate: '2024-11-25',
      client: '678 Co',
      status: 'Complete'
    },
    {
      id: 32,
      name: 'Content Localization',
      dueDate: '2024-12-05',
      client: '901 Corp',
      status: 'Rejected'
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
      case 'Applied':
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


          <nav className="flex flex-col gap-2 fixed top-36 w-auto h-screen">
  <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href="/freelancerDashboard">
    Dashboard
  </Link>

  <a className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer`} onClick={() => filterProjectsByStatus("Applied")}>
    Applied
  </a>
  <a className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer `} onClick={() => filterProjectsByStatus("Rejected")}>
    Rejected
  </a>
  <a className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer `} onClick={() => filterProjectsByStatus("Pending")}>
    Ongoing
  </a>
  <a className={`flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer `} onClick={() => filterProjectsByStatus("Complete")}>
    Completed
  </a>
</nav>

        </div>
        <div class="flex-1  bg-gray-900 p-6 md:p-8">
          <h2 class="text-2xl font-bold mb-6 text-cyan-600">Your Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {((filteredProjects || projects)).map(project => (
              <div key={project.id} className="rounded-lg overflow-hidden border bg-white shadow-sm relative group">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col space-y-4 p-6">
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
                        <span className="text-gray-500 font-medium">Due Date:</span>
                        <span>{project.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-100 border-t">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity group-hover:opacity-20"></div>
              </div>

            ))}



          </div>
        </div>
      </div>
    </>
  )
}

export default page