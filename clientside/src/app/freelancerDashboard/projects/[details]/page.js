"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import VerticalNav from "@/components/VerticalNav/VerticalNav";
import Header from "@/components/Header/Header";
import { FaArrowLeft } from "react-icons/fa";
export default function Component({ params }) {
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
  const { details } = params;

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projectinfo/${details}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProjectDetails(data.data);
      setActionDetails((prev) => ({
        ...prev,
        projectId: data.data._id,
      }));
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [details]);

  return (
    <div className="flex w-full h-screen text-white">
      {/* <VerticalNav
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isCompanyDashboard={true}
        userName={'ayush badoria'}
        userProfession={'Software Developer'}
      /> */}
      <div className="flex flex-col w-full">
        {/* <Header
          companyName="Company XYZ"
          pageName="Your Projects"
          isCompanydashboard={true}
          toggleMenu={toggleMenu}
        /> */}
        <main className="container flex items-center justify-center w-screen md:pl-72">
          <div className="container flex flex-col md:flex-row">
          <Link href={"/freelancerDashboard/projects"} className="text-2xl"><FaArrowLeft />Go Back</Link>
            <section className="flex flex-col items-center justify-center p-6 mt-5 space-y-4 text-white bg-gray-800 rounded-lg shadow-lg md:ml-5">
              <div className="col-span-2 space-y-8">
                <div>
                  <h2 className="mb-4 text-xl font-bold">Project Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-400">Start Date</p>
                      <p>{projectDetails?.Start || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">End Date</p>
                      <p>{projectDetails?.End || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">Status</p>
                      <p className="font-medium text-green-500">{projectDetails?.status || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-400">Budget</p>
                      <p>{projectDetails?.Budget || 0}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-bold">Project Description</h2>
                  <p className="text-gray-400 dark:text-gray-400">
                    {projectDetails?.Description || "No description available"}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
