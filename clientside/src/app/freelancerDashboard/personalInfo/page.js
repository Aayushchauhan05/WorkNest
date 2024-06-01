'use client';
import Link from 'next/link';
import { useAuth } from '@/context/context';
import React, { useEffect, useState } from 'react';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
        <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="md:hidden p-5 absolute text-xl top-0 right-0 z-50 ">X</button>

         {/* leftside Navbar */}
         <nav className="flex flex-col w-auto h-screen gap-2 top-10  relative">
         <Link href={"/freelancerDashboard"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800 ">
          
            Dashboard
           </Link>
           <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md bg-gray-800">
          
             Personal Info
           </Link>

           <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Profectional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Skills And Projects
           </Link>
           
           <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Projects
           </Link>
           <Link className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800" href={"/freelancerDashboard/interviews"}>
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
               <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
               <rect width="20" height="14" x="2" y="6" rx="2"></rect>
             </svg> */}
            Interview
           </Link>

           <Link href={"/freelancerDashboard/oracleVerify"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Oracle Verify
           </Link>
         
         </nav>

        
       </div>
     </div>

        {/* Right side Main Container */}
        <main className="container flex-grow p-6 bg-gray-950">
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
             <h1 className="mt-2 text-3xl font-bold text-white dark:text-gray-50">Personal Info</h1>
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
      
          <form className="mt-4 text-white">
            <div className="flex flex-col items-center userInfo">
              <img
                src="/default-profile.png"
                alt="Profile Picture"
                className="object-cover w-32 h-32 mb-4 border rounded-full"
              />
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
