"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    Email: '',
    phone: '',
    Dob: '',
    professionalInfo: {
      company: '',
      jobTitle: '',
      workDescription: '',
      workFrom: '',
      workTo: '',
      referencePersonName: '',
      referencePersonContact: '',
      githubRepoLink: '',
    },
    Skills: [
      {
        name: '',
        level: '',
        experience: '',
      },
    ],
    Education: [
      {
        degree: '',
        universityName: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        grade: '',
      },
    ],
    Role: '',
    githubLink: '',
    Linkdin: '',
    personalWebsite: '',
    perHourPrice: '',
    workExperience: '',
  });
const[loading,setloading]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');

    setValues((prevValues) => {
      let newValues = { ...prevValues };
      let current = newValues;

      for (let i = 0; i < nameParts.length - 1; i++) {
        if (!current[nameParts[i]]) {
          current[nameParts[i]] = {};
        }
        current = current[nameParts[i]];
      }

      current[nameParts[nameParts.length - 1]] = value;
      return newValues;
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
app.use("/api/freelacer",freelancerroute)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/freelacer/FreelancerRegister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      
      const data = await response.json();
console.log(data)
      if (response.ok) {
        toast.success("Registration successful");
        localStorage.setItem("email", data.user.Email);
        router.push("/otp");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // toast.error("Internal server error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='flex items-center justify-center w-[95vw] h-full  '>  <form onSubmit={handleSubmit} className="p-6 bg-black rounded-lg text-cyan-500 w-[60vw]">
    <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#00b8d4]">Register As Freelancer</h2>
          <p className="mt-2 text-sm text-center text-gray-400">Join our platform and start showcasing your skills</p>
        </div>
   <div className="mb-4">
     <label className="block mb-2">First Name</label>
     <input type="text" name="firstName" value={values.firstName} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Last Name</label>
     <input type="text" name="lastName" value={values.lastName} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Username</label>
     <input type="text" name="userName" value={values.userName} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Password</label>
     <input type="password" name="password" value={values.password} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Email</label>
     <input type="email" name="Email" value={values.Email} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Phone</label>
     <input type="text" name="phone" value={values.phone} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Date of Birth</label>
     <input type="date" name="Dob" value={values.Dob} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Company</label>
     <input type="text" name="professionalInfo.company" value={values.professionalInfo.company} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Job Title</label>
     <input type="text" name="professionalInfo.jobTitle" value={values.professionalInfo.jobTitle} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Work Description</label>
     <input type="text" name="professionalInfo.workDescription" value={values.professionalInfo.workDescription} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Work From</label>
     <input type="date" name="professionalInfo.workFrom" value={values.professionalInfo.workFrom} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Work To</label>
     <input type="date" name="professionalInfo.workTo" value={values.professionalInfo.workTo} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Reference Person Name</label>
     <input type="text" name="professionalInfo.referencePersonName" value={values.professionalInfo.referencePersonName} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Reference Person Contact</label>
     <input type="text" name="professionalInfo.referencePersonContact" value={values.professionalInfo.referencePersonContact} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">GitHub Repo Link</label>
     <input type="url" name="professionalInfo.githubRepoLink" value={values.professionalInfo.githubRepoLink} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   {/* <div className="mb-4">
     <label className="block mb-2">Skills</label>
     {values.Skills.map((skill, index) => (
       <div key={index} className="mb-2">
         <input type="text" name={`Skills[${index}].name`} value={skill.name} onChange={handleChange} placeholder="Skill Name" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="text" name={`Skills[${index}].level`} value={skill.level} onChange={handleChange} placeholder="Skill Level" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="text" name={`Skills[${index}].experience`} value={skill.experience} onChange={handleChange} placeholder="Experience" className="w-full p-2 border rounded border-cyan-500" />
       </div>
     ))}
   </div>
   <div className="mb-4">
     <label className="block mb-2">Education</label>
  
       <div  className="mb-2">
         <input type="text" name={`values.Education[0].degree`} value={values.Education[0].degree} onChange={handleChange} placeholder="Degree" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="text" name={`Evalues.Education[0].universityName`} value={values.Education[0].universityName} onChange={handleChange} placeholder="University Name" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="text" name={`values.Education[0].fieldOfStudy`} value={values.Education[0].fieldOfStudy} onChange={handleChange} placeholder="Field of Study" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="date" name={`values.Education[0].startDate`} value={values.Education[0].startDate} onChange={handleChange} placeholder="Start Date" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="date" name={`values.Education[0].endDate`} value={values.Education[0].endDate} onChange={handleChange} placeholder="End Date" className="w-full p-2 mb-2 border rounded border-cyan-500" />
         <input type="text" name={`values.Education[0].grade`} value={values.Education[0].grade} onChange={handleChange} placeholder="Grade" className="w-full p-2 border rounded border-cyan-500" />
       </div>
     
   </div> */}
   <div className="mb-4">
     <label className="block mb-2">Role</label>
     <input type="text" name="Role" value={values.Role} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">GitHub Link</label>
     <input type="url" name="githubLink" value={values.githubLink} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">LinkedIn</label>
     <input type="url" name="Linkdin" value={values.Linkdin} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Personal Website</label>
     <input type="url" name="personalWebsite" value={values.personalWebsite} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Per Hour Price</label>
     <input type="number" name="perHourPrice" value={values.perHourPrice} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500" />
   </div>
   <div className="mb-4">
     <label className="block mb-2">Work Experience</label>
     <textarea name="workExperience" value={values.workExperience} onChange={handleChange} className="w-full p-2 border rounded border-cyan-500"></textarea>
   </div>
   <button type="submit" className="p-2 text-black rounded bg-cyan-500">Submit</button>
 </form>
    <ToastContainer />
    </div>
  );
};

export default Form;
