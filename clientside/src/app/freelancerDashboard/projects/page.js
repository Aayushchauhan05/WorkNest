'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiCheckSquare, FiXSquare, FiAlertCircle } from 'react-icons/fi';
import { IoMdCodeWorking } from 'react-icons/io';
import { GoProjectRoadmap } from 'react-icons/go';
import VerticalNav from '@/components/VerticalNav/VerticalNav';
import Header from '@/components/Header/Header';
import { useAuth } from '@/context/context';

function Page() {
  const router = useRouter(); 
  const [filteredProjects, setFilteredProjects] = useState(null);
 
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const dummyProject = {
  
  };

  const fetchProjects = async () => {
    try {
      const token=localStorage.getItem("token")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Getprojectdata`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.data.ProjectList)
        setProjects(data.data.ProjectList);
      } else {
        throw new Error(data.error || 'Failed to fetch project data');
      }
    } catch (error) {
      console.error(error);
      // Set dummy project data if there's an error fetching from API
      setProjects([dummyProject]);
    } finally {
      setLoading(false);
    }
  };

  const filterProjectsByStatus = (status) => {
    if (status === 'view all') {
      setFilteredProjects(null);
    } else {
      const filtered = projects.filter((project) => project.status === status);
      setFilteredProjects(filtered);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <VerticalNav
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isProject={true}
          filterProjectsByStatus={filterProjectsByStatus}
          userName={'ayush badoria'}
          userProfession={'Software Developer'}
        />
        <div className="flex flex-col w-full">
          <Header
            companyName="Company XYZ"
            pageName="Your Projects"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <main className="container md:pl-72 flex items-center justify-center w-screen">
            {loading ? (
              <div className='text-white'>Loading...</div>
            ) : projects.length ? (
              <section className="flex flex-col items-center md:ml-5 mt-5 justify-center w-full p-6 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
                {(filteredProjects || projects).map((project, index) => (
                  <div
                    key={project.id}
                    className={`text-white w-full flex gap-5 flex-col ${index === (filteredProjects || projects).length - 1 ? '' : 'border-b'
                      } p-6 mb-4`}
                  >
                    <GoProjectRoadmap />
                    <div className="flex justify-between items-center ">
                      <h3 className="text-lg font-bold">{project.name}</h3>
                      <div className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                        {project.status === 'complete' && <FiCheckSquare size={22} />}
                        {project.status === 'ongoing' && <IoMdCodeWorking size={22} />}
                        {project.status === 'pending' && <FiXSquare size={22} />}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col ">
                        <span>{project.client}</span>
                        <span>{project.dueDate}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex item-end justify-end">
                      <Link href={`/companydashboard/projects/${project.id}`} passHref>
                        <button
                          className="bg-cyan-700 px-3 py-2 text-white rounded hover:underline"
                          onClick={() => {
                            router.push(`/companydashboard/projects/${project.id}`); 
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <div className="flex flex-col items-center justify-center h-[30rem] ">
                <FiAlertCircle className="text-red-500 w-16 h-16 mb-4" />
                <h1 className="text-2xl text-white font-semibold mb-2">Oops! Data not available</h1>
                <p className="text-gray-600">There are currently no projects available to display.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Page;

