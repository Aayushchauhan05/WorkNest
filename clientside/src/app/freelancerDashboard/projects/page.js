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
import { ProgressBar } from 'react-loader-spinner'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Page() {
  const router = useRouter(); 
  const [filteredProjects, setFilteredProjects] = useState(null);
 
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userinfo, setUserinfo] = useState({});
  const { token } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchUserInfo = async () => {
    try {
      const token=localStorage.getItem("token")
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json();
      setLoading(false)
        console.log(data.Data.acceptedProject)
        setUserinfo(data.Data);
        
    } catch (error) {
      console.log("Error fetching user info:", error);
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchUserInfo();

  }, []);

  

  const filterProjectsByStatus = (status) => {
    if (status === 'view all') {
      setFilteredProjects(null);
    } else {
      const filtered = projects.filter((project) => project.status === status);
      setFilteredProjects(filtered);
    }
  };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

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
          isfreelance={true}
          isProject={true}
          filterProjectsByStatus={filterProjectsByStatus}
          userName={`${userinfo?.firstName} ${userinfo?.lastName}`}
          userProfession={'Software Developer'}
        />
        <div className="flex flex-col w-full">
          <Header
            companyName={`${userinfo?.firstName} ${userinfo?.lastName}`}
            pageName="Your Projects"
            isCompanydashboard={true}
            toggleMenu={toggleMenu}
          />
          <main className="container flex items-center justify-center w-screen md:pl-72">
            {loading ? (
              <div className='flex items-center justify-center h-full'>
                <ProgressBar
              visible={true}
              height="80"
              width="50vw"
              color="#4fa94d"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              /></div>
            ) : userinfo.acceptedProject.length ? (
              <section className="flex flex-col items-center justify-center w-full p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
                {(userinfo.acceptedProject).map((project, index) => (
                  <div
                    key={project._id}
                    className={`text-white w-full flex gap-5 flex-col ${index === (filteredProjects || projects).length - 1 ? '' : 'border-b'
                      } p-6 mb-4`}
                  >
                    <GoProjectRoadmap />
                    <div className="flex items-center justify-between ">
                      <h3 className="text-lg font-bold">{project.projectName}</h3>
                      <div className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                        {project.status === 'complete' && <FiCheckSquare size={22} />}
                        {project.status === 'ongoing' && <IoMdCodeWorking size={22} />}
                        {project.status === 'Pending' && <FiXSquare size={22} />}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col ">
                        <span>{project.companyName}</span>
                        <span>{project.End}</span>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 item-end">
                      <Link href={`/freelancerDashboard/projects/${project._id}`} passHref>
                        <button
                          className="px-3 py-2 text-white rounded bg-cyan-700 hover:underline"
                          onClick={() => {
                            router.push(`/freelancerDashboard/projects/${project._id}`); 
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
                <FiAlertCircle className="w-16 h-16 mb-4 text-red-500" />
                <h1 className="mb-2 text-2xl font-semibold text-white">Oops! Data not available</h1>
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

