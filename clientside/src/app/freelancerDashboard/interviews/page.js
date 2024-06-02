'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Page() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Dummy user data
    const dummyUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        github: 'https://github.com/johndoe',
        location: 'New York, USA',
        profileImage: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+0987654321',
        github: 'https://github.com/janesmith',
        location: 'Los Angeles, USA',
        profileImage: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phone: '+1122334455',
        github: 'https://github.com/alicejohnson',
        location: 'Chicago, USA',
        profileImage: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        phone: '+5566778899',
        github: 'https://github.com/bobbrown',
        location: 'Houston, USA',
        profileImage: 'https://via.placeholder.com/150'
      },
      {
        id: 5,
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        phone: '+6677889900',
        github: 'https://github.com/charliedavis',
        location: 'Phoenix, USA',
        profileImage: 'https://via.placeholder.com/150'
      }
    ];

    setUsers(dummyUsers);
  }, []);

  const toggleShowUsers = () => {
    setShowUsers(prevState => !prevState);
  };

  return (
    <div className="flex w-full h-screen">
       <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50 ">X</button>

         {/* leftside Navbar */}
         <nav className="flex flex-col w-auto h-screen gap-2 top-10  relative">
         <Link href={"/freelancerDashboard"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
            
            Dashboard
           </Link>
           <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
      
             Personal Info
           </Link>

           <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Profectional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Skills And Projects
           </Link>
           
           <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Freelance Projects
           </Link>
           <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800" href={"/freelancerDashboard/interviews"}>
           
            Interview
           </Link>

           <Link href={"/freelancerDashboard/oracleVerify"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Oracle 
           </Link>
         
         </nav>

        
       </div>
     </div>
      {/* rightSide Main Container */}
     <div className="flex flex-col w-full">
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
               <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">John Doe</h1>
               <p className="text-cyan-500 dark:text-gray-400">Freelance Designer</p>
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

      {/* Right side Main Container */}
      <main className="flex-grow container bg-gray-950 p-6  w-[100%] text-white">
        <h1 className="text-3xl font-bold text-cyan-700 dark:text-gray-50 mt-2">Interviews</h1>
        <button
          onClick={toggleShowUsers}
          className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800"
        >
          {showUsers ? "Hide Users" : "Show Users"}
        </button>
        {showUsers && (
          <div>
            <h1 className="text-2xl font-semibold my-4">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map(user => (
                <div key={user.id} className="bg-white rounded-lg shadow-md text-black p-4 flex flex-col items-center w-full">
                  <img className="w-24 h-24 rounded-full mb-4" src={user.profileImage} alt={`${user.name}'s profile`} />
                  <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                  <p className="text-gray-600 mb-2">{user.email}</p>
                  <p className="text-gray-600 mb-2">{user.phone}</p>
                  <a className="text-blue-500 mb-2" href={user.github} target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                  <p className="text-gray-600">{user.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
    </div>
  );
}

export default Page;
