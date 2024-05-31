'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Page() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

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
      {/* Left side Navbar */}
      <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
        <div className="flex flex-col gap-6">
          <nav className="flex flex-col gap-2 fixed top-20 w-auto h-screen">
            <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
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
  );
}

export default Page;
