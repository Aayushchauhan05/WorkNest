"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Component() {
    const{info}=useParams()
    const [loading,setloading]=useState(false)
  const [freelancer,setfreelancer] = useState()
  const fetchdata= async ()=>{

        try {
            const response= await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/Api/freelancerinfo/${info}`)
            
            setfreelancer(response.data.user)
        } catch (error) {
            console.log("error")
        }
  }
  useEffect(()=>{
fetchdata()
  },[])
  const hire= async ()=>{
    try {
        setloading(true)
        const token= localStorage.getItem("token")
        console.log(token)
        // const response= await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/hirefreelancer/${info}`,{
        //     header:{
        //         Authorization:`Bearer ${token}`,
        //         "Content-Type":"application/json"            }
        // })
        // toast.success(`${response.data.message}`)
        const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/business/hirefreelancer/${info}`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })
        const data= await response.json()
        if(response.ok){
            toast.success(`${data.message}`)
        }
        setloading(false)
        console.log(response.data)
    } catch (error) {
        console.log(error)
        toast.error("error in sending mail")
    }
    finally{
        setloading(false)
    }
  }
  return (
    <div className="container px-4 py-12 mx-auto bg-white md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center">
          {/* <img
            src="/placeholder.svg"
            alt={freelancer.name}
            width={200}
            height={200}
            className="object-cover w-40 h-40 rounded-full"
          /> */}
          <h1 className="mt-4 text-2xl font-bold">{freelancer?.firstName}</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{freelancer?.Role}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(freelancer?.skills || []).map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <DollarSignIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-lg font-semibold">${freelancer?.hourlyRate}/hr</span>
          </div>
         { loading?<Button className="mt-6">Loading...</Button>:<Button className="mt-6" onClick={hire}>Hire</Button>}
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Previous Projects</h2>
          {(freelancer?.projects || []).map((project, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
              <h3 className="text-lg font-semibold">{project?.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{project?.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {(project?.technologies || []).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CalendarDaysIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{project?.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}