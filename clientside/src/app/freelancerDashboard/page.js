'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/context';
import VerticalNav from '@/components/VerticalNav/VerticalNav';

import Header from "@/components/Header/Header";

import isAuth from '@/components/ClientsideProtectedRoutes/isAuth';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userinfo, setUserinfo] = useState([]);
  const { token } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo  = async () => {
      try {
        const token=localStorage.getItem("token") 
        console.log(token);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log(data);
        if (isMounted) {
          setUserinfo(data.Data);
        }
      } catch (error) {
        console.log('Error fetching user info:', error);
      }
    };

    if (token) {
      fetchUserInfo();
    }

    return () => {
      isMounted = false;
    };
  }, [token]);
  
  return (
    <>

<div className="flex w-full h-screen ">

<VerticalNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={"dashboard"} isCompanyDashboard={false} userName={`${userinfo?.firstName} ${userinfo?.lastName}`} userProfession={"Software Developer"}/>
    <div className="flex flex-col w-full">
    <Header 
      companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
      pageName="Dashboard"
      isCompanydashboard={true} 
      toggleMenu={toggleMenu}
    />
          <main className="container grid gap-8 px-6 py-8 mx-auto md:pl-72 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg shadow-sm min-h-72 min-w-72 bg-card text-card-foreground h-72" data-v0-t="card">
              <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Profile</h3>
                <Link className="p-1 text-sm text-gray-500 border rounded hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/">
                  Edit
                </Link>
              </div>
              <div className="grid gap-3 p-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">{`${userinfo?.firstName} ${userinfo?.lastName}`}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{`${userinfo?.Email}`}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      UI Design
                    </div>
                    <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      Branding
                    </div>
                    <div className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm bg-card min-h-72 min-w-72 text-card-foreground max-h-72" data-v0-t="card">
              <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Pending Projects</h3>
                <Link className="p-1 text-sm text-gray-500 border rounded hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/freelancerDashboard/projects">
                  View All
                </Link>
              </div>
              <div className="grid gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{userinfo.acceptedProject?.length}</h3>
                    <p className="text-gray-500 dark:text-gray-400">Pending Projects</p>
                  </div>
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
                    className="w-10 h-10 text-gray-500 dark:text-gray-400"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm bg-card text-card-foreground max-h-72" data-v0-t="card">
              <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Completed Projects</h3>
                <Link className="p-1 text-sm text-gray-500 border rounded hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/freelancerDashboard/projects">
                  View All
                </Link>
              </div>
              <div className="grid gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">0</h3>
                    <p className="text-gray-500 dark:text-gray-400">Completed Projects</p>
                  </div>
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
                    className="w-10 h-10 text-gray-500 dark:text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow-sm bg-card text-card-foreground min-h-72 min-w-72" data-v0-t="card">
              <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Earnings</h3>
                <a className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/">
                  View All
                </a>
              </div>
              <div className="grid gap-4 p-6 ">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">0</h3>
                    <p className="text-gray-500 dark:text-gray-400">Total Earnings</p>
                  </div>
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
                    className="w-10 h-10 text-gray-500 dark:text-gray-400"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </main>
         
        </div>
      </div></>
  )
}

export default isAuth(page);