'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

function Page() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    // Dummy user data
    const dummyUsers = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
      { id: 3, name: 'User 3', email: 'user3@example.com' }
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
      <main className="flex-grow container bg-gray-950 p-6 text-white">
        <h1 className="text-3xl font-bold text-cyan-700 dark:text-gray-50 mt-2">Oracle verify</h1>
        <button
             onClick={toggleShowUsers}
              className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800"
            >
            {showUsers ? "Hide Users" : "Show Users"}
            </button>
        {showUsers && (
          <div>
            <h1>Users</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map(user => (
                <div key={user.id} className='bg-white rounded-lg text-black  h-auto flex items-center justify-center flex-col' >
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
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
