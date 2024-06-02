'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Page() {
  const [userExp, setUserExp] = useState(5);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [applyMessage, setApplyMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);

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
        profileImage: 'https://via.placeholder.com/150',
        experience: 6
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+0987654321',
        github: 'https://github.com/janesmith',
        location: 'Los Angeles, USA',
        profileImage: 'https://via.placeholder.com/150',
        experience: 3
      },
      {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phone: '+1122334455',
        github: 'https://github.com/alicejohnson',
        location: 'Chicago, USA',
        profileImage: 'https://via.placeholder.com/150',
        experience: 8
      },
      {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        phone: '+5566778899',
        github: 'https://github.com/bobbrown',
        location: 'Houston, USA',
        profileImage: 'https://via.placeholder.com/150',
        experience: 2
      },
      {
        id: 5,
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        phone: '+6677889900',
        github: 'https://github.com/charliedavis',
        location: 'Phoenix, USA',
        profileImage: 'https://via.placeholder.com/150',
        experience: 10
      }
    ];

    setUsers(dummyUsers);
  }, []);




  const handleApplyClick = () => {
    const eligibleUser = users.find(user => user.experience > 5);
    setTimeout(() => {
      setIsVerified(true);
    }, 5000);
    if (eligibleUser) {
      setIsApplying(true);
      setApplyMessage('Your verification is under process.');
    } else {
      setApplyMessage('You do not have the required experience.');
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left side Navbar */}
      <div className={`fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
        <div className="flex flex-col gap-6">
          <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50">X</button>
          <nav className="flex flex-col w-auto h-screen gap-2 top-10 relative">
            <Link href={"/freelancerDashboard"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Dashboard
            </Link>
            <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Personal Info
            </Link>
            <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Professional Info
            </Link>
            <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Skills And Projects
            </Link>
            <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Projects
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800" href={"/freelancerDashboard/interviews"}>
              Interview
            </Link>
            <Link href={"/freelancerDashboard/oracleVerify"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
              Oracle Verify
            </Link>
          </nav>
        </div>
      </div>
      {/* Right side Main Container */}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
              <div>
              <h1 className="text-3xl font-bold text-white dark:text-gray-50 mt-2">Interviews</h1>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white dark:text-gray-400"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43-.25a2 2 0 0 1 1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Right side Main Container */}
        <main className="flex-grow container bg-gray-950 p-6  w-[100%] text-white">
      
        {userExp>=5? <div className='w-full flex flex-col items-center'>
         {!isVerified ? (
            <>
            <button
              onClick={handleApplyClick}
              className={`px-4 py-2 ${isApplying ? 'bg-gray-400' : 'bg-cyan-700'} text-white rounded-md hover:bg-cyan-800`}
              disabled={isApplying}
            >
              {isApplying ? "Applied" : "Apply"}
            </button>
           {isApplying && <h2>Your request has been sent for verification.</h2>}
            </>
          ) : (
            <>
              <button
                onClick={handleApplyClick}
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-cyan-800"
                disabled={isApplying}
              >
                verified
              </button>
              <h2>You are verified now you can take interviews now</h2>
            </>
          )}


          {isVerified && (
            <div className='w-full h-96 bg-gray-500 flex rounded-2xl items-center justify-center '>
           
            <h2>"You will receive interview schedules whenever you are selected."</h2>
            </div>
          )}
         </div>:<div>You Are not Eligible to apply</div>}
        </main>
      </div>
    </div>
  );
}

export default Page;

