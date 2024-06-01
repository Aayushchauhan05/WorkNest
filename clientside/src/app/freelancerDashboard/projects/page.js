'use client'
import Link from 'next/link'
import { useState } from 'react';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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






      <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
        <div className="flex flex-col gap-6">
          <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50 ">X</button>

          {/* leftside Navbar */}

          <nav className="flex flex-col w-auto h-screen gap-2 top-10  relative">
            <div class="flex items-center  top-20 gap-4 mb-8">
              <div class="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center text-2xl font-bold">JD</div>
              <h1 class="text-xl font-bold">John Doe</h1>
            </div>
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
      </div>
      <div class="flex-1  bg-gray-900 p-6 md:p-8">
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
             <h1 className="mt-2 text-3xl font-bold text-white dark:text-gray-50">Your Projects</h1>
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