'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/context';

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userinfo, setUserinfo] = useState([]);
  const { token } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
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
  // onst pendingProjectCount = userinfo[0]?.pendingProject?.length || 0
  return (
   <>
   
   <div className="flex w-full h-screen ">
   <div className={`  fixed md:relative p-6 bg-cyan-800 transition-transform transform z-10 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex text-gray-50 w-[70%] md:w-[20%]`}>
       <div className="flex flex-col gap-6">
       <button onClick={toggleMenu} className="absolute top-0 right-0 z-50 p-5 text-xl md:hidden ">X</button>

         {/* leftside Navbar */}
         <nav className="relative flex flex-col w-auto h-screen gap-2 top-10">
         <Link href={"/freelancerDashboard"} className="flex items-center gap-3 px-3 py-2 transition-colors bg-gray-800 rounded-md ">
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
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg> */}
            Dashboard
           </Link>
           <Link href={"/freelancerDashboard/personalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
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
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg> */}
             Personal Info
           </Link>

           <Link href={"/freelancerDashboard/professionalInfo"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Professional Info
           </Link>

           <Link href={"/freelancerDashboard/skillsAndProjects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
             Skills And Projects
           </Link>
           
           <Link href={"/freelancerDashboard/projects"} className="flex items-center gap-3 px-3 py-2 transition-colors rounded-md hover:bg-gray-800">
            Freelance Projects
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
               <h1 className="text-xl font-bold text-cyan-700 dark:text-gray-50">{`${userinfo?.firstName}`}</h1>
               <p className="text-cyan-500 dark:text-gray-400">{`${userinfo?.Role}`}</p>
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
       <main className="container grid gap-8 px-6 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
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
                 <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">1</h3>
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
       {/* <section className="shadow-sm bg-gray-950 dark:bg-gray-900">
         <div className="container px-6 py-8 mx-auto">
           <h1 className="mb-6 text-2xl font-bold text-cyan-500 dark:text-gray-50">Pending Projects</h1>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
               <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project A</h3>
                 <a
                   className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="/"
                 >
                   View
                 </a>
               </div>
               <div className="grid gap-4 p-6">
                 <div>
                   <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                   <p className="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
               <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project B</h3>
                 <a
                   className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="/"
                 >
                   View
                 </a>
               </div>
               <div className="grid gap-4 p-6">
                 <div>
                   <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                   <p className="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p className="text-gray-500 dark:text-gray-400">June 15, 2023</p>
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
               <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project C</h3>
                 <a
                   className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="/"
                 >
                   View
                 </a>
               </div>
               <div className="grid gap-4 p-6">
                 <div>
                   <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Branding Campaign</h3>
                   <p className="text-gray-500 dark:text-gray-400">Client: DEF Ltd.</p>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Due Date</h3>
                     <p className="text-gray-500 dark:text-gray-400">July 1, 2023</p>
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p className="text-yellow-500 dark:text-yellow-400">Pending</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section> */}
       {/* <section className="shadow-sm dark:bg-gray-900 bg-gray-950">
         <div className="container px-6 py-8 mx-auto">
           <h2 className="mb-6 text-2xl font-bold text-cyan-500 dark:text-gray-50">Completed Projects</h2>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
               <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project X</h3>
                 <a
                   className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="/"
                 >
                   View
                 </a>
               </div>
               <div className="grid gap-4 p-6">
                 <div>
                   <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Design Website</h3>
                   <p className="text-gray-500 dark:text-gray-400">Client: ABC Inc.</p>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                     <p className="text-gray-500 dark:text-gray-400">April 15, 2023</p>
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Status</h3>
                     <p className="text-green-500 dark:text-green-400">Completed</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="border rounded-lg shadow-sm bg-card text-card-foreground" data-v0-t="card">
               <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
                 <h3 className="text-2xl font-semibold leading-none tracking-tight whitespace-nowrap">Project Y</h3>
                 <a
                   className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                   href="/"
                 >
                   View
                 </a>
               </div>
               <div className="grid gap-4 p-6">
                 <div>
                   <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Develop Mobile App</h3>
                   <p className="text-gray-500 dark:text-gray-400">Client: XYZ Corp.</p>
                 </div>
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Completed Date</h3>
                     <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section> */}
     </div>
   </div></>
  )
}

export default page