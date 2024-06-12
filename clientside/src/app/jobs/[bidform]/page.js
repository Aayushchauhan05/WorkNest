"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const JobApplicationForm = () => {
  const { bidform } = useParams();
const router=useRouter()
  const initialValues = {
    desiredSalary: "",
    role: "",
    projectId: "",
  };

  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    CompanyName: "",
    duration: "",
    SkillsRequired: [],
    Description: "",
    Email: "",
  });

  const [formData, setFormData] = useState(initialValues);
  const [projectId, setProjectId] = useState(bidform);

  useEffect(() => {
    if (bidform) {
      setProjectId(bidform);
    }
  }, [bidform]);

  useEffect(() => {
    const fetchProjectInfo = async () => {
      console.log("Project ID:", projectId);
      if (projectId) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projectinfo/${projectId}`
          );
          const data = await response.json();
          if (response.ok) {
            console.log("Fetched project details:", data.data);
            setProjectDetails({
              ...data.data,
              Email: data.data.Email,
            });
          } else {
            console.log("Error fetching project details");
          }
        } catch (error) {
          console.error("Error fetching project details:", error);
        }
      }
    };

    fetchProjectInfo();
  }, [projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelancer/Applyforwork`,
        {
          ...formData,
          projectId,
          companyemail: projectDetails.Email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
        console.log("Success:", response.data);
      
      // Reset form after successful submission
      setProjectId("");
      setFormData(initialValues);
        toast.success("bid successfull")
setTimeout(()=>{
  router.push("/jobs")
},1000)
      
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   <div className="w-[100vw] flex items-center flex-col "> 
   <Link href={"/jobs"} className="text-white  m-10 flex items-center"> <FiArrowLeft /> Go back</Link>
    <section className=" flex flex-col md:flex-row items-center w-[60vw] space-y-4 text-white bg-gray-800 rounded-lg shadow-lg">
   
      <div className="w-1/2 h-full p-8 border-r">
        <h2 className="mb-4 text-2xl font-semibold">
          {projectDetails?.projectName}
        </h2>
        <p className="mb-2">
          <strong>Company Name:</strong> {projectDetails?.CompanyName}
        </p>
        <p className="mb-2">
          <strong>Duration:</strong> {projectDetails?.duration}
        </p>
        <p className="mb-2 min-h-28 w-28 text-ellipsis whitespace-nowrap">
          <strong>Description:</strong> {`${projectDetails?.Description}`}
        </p>
        <p className="mb-2">
          <strong>Company Email:</strong> {projectDetails?.Email}
        </p>
        <p className="mb-2">
          <strong>Skills Required:</strong>
        </p>
        <ul className="list-disc list-inside">
          {(projectDetails?.SkillsRequired || []).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 p-8 text-white">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block ">Company Email</label>
            <input
              name="companyemail"
              type="email"
              className="w-full p-2 border text-black rounded"
              value={projectDetails.Email}
              readOnly 
            />
          </div>
          <div className="mb-4">
            <label className="block ">Desired Salary</label>
            <input
              name="desiredSalary"
              type="text"
              className="w-full p-2 border text-black rounded"
              value={formData.desiredSalary}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block ">Role</label>
            <input
              name="role"
              type="text"
              className="w-full p-2 border text-black rounded"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block ">Project ID</label>
            <input
              name="projectId"
              type="text"
              className="w-full p-2 border text-black rounded"
              value={projectId}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
    </div>
  );
};

export default JobApplicationForm;
