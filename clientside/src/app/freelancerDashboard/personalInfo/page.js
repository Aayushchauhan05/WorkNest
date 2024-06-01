'use client';
import Link from 'next/link';
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';

function Page() {
  const [editable, setEditable] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    github: false,
    instagram: false,
    linkedin: false,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    github: '',
    instagram: '',
    linkedin: '',
  });

  const [userinfo, setUserinfo] = useState([]);
  const { token } = useAuth();

  // const router = useRouter();

  useEffect(() => {
    let isMounted = true; 

    const fetchUserInfo = async () => {
      try {
        console.log(token);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelancerprofile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();
        console.log(data);
        if (isMounted) {
          setUserinfo([data.Data]);
          setFormData({
            firstName: data.Data.firstName,
            lastName: data.Data.lastName,
            email: data.Data.Email,
            password: 'XXXXXXXXX',
            github: data.Data.githubLink || '',
            instagram: '', 
            linkedin: data.Data.Linkdin || '',
          });
        }
      } catch (error) {
        console.log("Error fetching user info:", error);
      }
    };

    fetchUserInfo();

    return () => {
      isMounted = false;
    }
  }, [token]); 

  const handleEditClick = (field) => {
    setEditable((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = (field) => {
    if (formData[field].trim() === '') {
      alert(`Please provide a ${field}`);
      return;
    }
    console.log(`${field} saved: ${formData[field]}`);
    handleEditClick(field);
  };

  return (
    <>
      <div className="flex w-full h-screen">
        {/* Left side Navbar */}
        <div className="hidden p-6 bg-cyan-800 text-gray-50 w-[20%] md:block">
          <div className="flex flex-col gap-6">
            <nav className="fixed flex flex-col w-auto h-screen gap-2 top-20">
              <Link href="/freelancerDashboard" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Dashboard
              </Link>
              <Link href="/freelancerDashboard/professionalInfo" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Professional Info
              </Link>
              <Link href="/freelancerDashboard/skillsAndProjects" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Skills And Projects
              </Link>
              <Link href="/freelancerDashboard/projects" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Projects
              </Link>
              <Link href="/freelancerDashboard/interviews" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Interview
              </Link>
              <Link href="/freelancerDashboard/oracleVerify" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
                Oracle Verify
              </Link>
            </nav>
          </div>
        </div>

        {/* Right side Main Container */}
        <main className="container flex-grow p-6 bg-gray-950">
          <h1 className="mt-2 text-3xl font-bold text-cyan-700 dark:text-gray-50">Personal Info</h1>
          <form className="mt-4 text-white">
            <div className="flex flex-col items-center userInfo">
              {/* <img
                src="/default-profile.png"
                alt="Profile Picture"
                className="object-cover w-32 h-32 mb-4 border rounded-full"
              /> */}
              <div className="flex flex-col items-center justify-center w-full gap-4">
                {Object.entries(formData).map(([field, value]) => (
                  <div key={field} className="bg-gray-800 px-4 py-2 flex justify-between w-[70%] md:w-[40%] items-center rounded-md">
                    <div>
                      {field}:
                      <input
                        type="text"
                        className={`bg-gray-800 px-4 py-2 rounded-md focus:outline-none ${editable[field] ? 'text-gray-400' : ''}`}
                        readOnly={!editable[field]}
                        value={value}
                        onChange={(e) => handleChange(e, field)}
                      />
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 ml-2 rounded-md text-gray-50"
                      onClick={() => {
                        if (editable[field]) {
                          handleSave(field);
                        } else {
                          handleEditClick(field);
                        }
                      }}
                    >
                      {editable[field] ? 'Save' : 'Edit'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Page;
