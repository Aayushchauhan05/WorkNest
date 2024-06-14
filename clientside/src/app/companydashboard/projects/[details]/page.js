"use client"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useParams, useRouter } from 'next/navigation';
import VerticalNav from "@/components/VerticalNav/VerticalNav"
import Header from "@/components/Header/Header"

export default function Component({params}) {
  const [projectDetails, setProjectDetails] = useState();
  const [freelancers, setFreelancers] = useState([]);
  const [actionDetails, setActionDetails] = useState({
    status: "",
    Email: "",
    projectId: "",
  });
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const { details } = useParams();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projectinfo/${details}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      setProjectDetails(data.data);
      setActionDetails(prev => ({
        ...prev,
        projectId: data.data._id
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFreelancerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/appliedFreelancerData/${details}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data.data)
      setFreelancers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFreelancerData();
  }, [loading]);

  const handleAction = async () => {
    try {
      setLoading(true);
      const update = {
        status: actionDetails.status,
        Email: actionDetails.Email,
        projectId: actionDetails.projectId,
      };
      console.log(update)
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/Action`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(update)
      });
    const data=  await response.json();
    console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (actionDetails.status && actionDetails.Email) {
      handleAction();
    }
  }, [actionDetails]);

  const handleClick = (e) => {
    const action = e.target.getAttribute("data-action");
    const Email = e.target.getAttribute("data-email");
    setActionDetails({
      status: action,
      Email: Email,
      projectId: actionDetails.projectId
    });
  };

  return (
    <div className="flex w-full h-screen text-white">
      <VerticalNav
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isCompanyDashboard={true}
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
        <main className="container flex items-center justify-center w-screen md:pl-72">
          <div className="container flex flex-col md:flex-row">
            <section className="flex flex-col items-center justify-center p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
              <div className="col-span-2 space-y-8">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Project Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-400">Start Date</p>
                      <p>{`${projectDetails?.Start}`}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">End Date</p>
                      <p>{`${projectDetails?.End}`}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">Status</p>
                      <p className="font-medium text-green-500">{`${projectDetails?.status}`}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">Budget</p>
                      <p>{`${projectDetails?.Budget || 0}`}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-bold">Project Description</h2>
                  <p className="text-gray-400 dark:text-gray-400 ">
                    {`${projectDetails?.Description}`}
                  </p>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-bold">Project Team</h2>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {(projectDetails?.team || []).map((elem, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt={`${elem?.firstName} ${elem?.lastName}`} />
                          <AvatarFallback>{`${elem?.firstName[0]}${elem?.lastName[0]}`}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{`${elem?.firstName} ${elem?.lastName}`}</p>
                          <p className="text-sm text-gray-500">{elem?.Role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col items-start justify-start w-full p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Freelancer Applied</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {freelancers.map((elem, index) => (
                      <div key={index} className="flex flex-col items-center justify-between p-4 bg-gray-900 rounded-lg dark:bg-gray-800">
                        <div className="flex items-center gap-2">
                          <div className="w-full">
                            <p className="font-medium">Email: {elem.Email}</p>
                            <p className="text-sm text-gray-500">Salary: ${elem.desiredSalary}/hr</p>
                            <p className="text-sm text-gray-500">Role: {elem.role}</p>
                          </div>
                        </div>
                        <button
                          className={`px-3 py-2 mt-3 ${loading?`bg-green-400`:`bg-green-600`} rounded  `}
                          data-action="approved"
                          data-email={elem.Email}
                          onClick={handleClick}
                          disabled={loading}
                        >
                          Accept
                        </button>
                        <button
                          className={`px-3 py-2 mt-3 ${loading?`bg-red-400`:`bg-red-600`} rounded  `}
                          data-action="rejected"
                          data-email={elem.Email}
                          onClick={handleClick}
                          disabled={loading}
                        >
                          Reject
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
