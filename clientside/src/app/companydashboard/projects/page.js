'use client'

import Link from 'next/link';
import { useState,useEffect} from 'react';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from "@/components/Header/Header";
import { useAuth } from '@/context/context';


function Page() {
  const [filteredProjects, setFilteredProjects] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
 

  const{token}=useAuth()
  const [projects,setprojects] = useState([]);


  const filterProjectsByStatus = (status) => {
    const filtered = projects.filter(project => project.status === status);
    setFilteredProjects(filtered);
  };

  function getStatusColor(status) {
    switch (status) {
      case 'complete':
        return 'bg-green-500 text-white';
      case 'pending':
        return 'bg-yellow-500 text-black';
      case 'ongoing':
        return 'bg-gray-500 text-white';
      case 'rejected':
        return 'bg-red-500 text-white';
      default:
        return '';
    }
  }
  const fetchdata= async ()=>{
    try {
      const token=localStorage.getItem("token")
      const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Getprojectdata`,{
        method:"GET",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const data=await response.json();
      console.log(data);
      if(response.ok){
setprojects(data.data.ProjectList)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
  fetchdata()
  },[])
  return (
    <>

      <div className="flex w-full h-screen">
        <VerticalNav 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          isProduct={true}   
          filterProjectsByStatus={filterProjectsByStatus}  
          userName={"ayush badoria"} 
          userProfession={"Software Developer"}
        />
        <div className="flex flex-col w-full">
          <Header 
            companyName="Company XYZ"
            pageName="Your Projects"
            isCompanydashboard={true} 
            toggleMenu={toggleMenu}
          />
          <main className="container md:pl-64 lg:pl-72 grid flex-1 grid-cols-1 gap-8 px-6 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          <section  className="flex flex-col items-center justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
            {(filteredProjects || projects).map(project => (
            
               <div key={project.id}>
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-bold text-center">{project.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-center text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  <div className="flex flex-col space-y-2 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-500">Due Date:</span>
                      <span>{project.dueDate}</span>

                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <Link href={`companydashboard/projects/viewdetails`} className="inline-flex items-center justify-center w-full text-sm font-medium text-blue-500 rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    View Details
                  </Link>
                </div>
               </div>
              
            ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Page;
