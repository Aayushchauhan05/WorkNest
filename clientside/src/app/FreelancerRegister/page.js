"use client"

import React, { useState } from 'react';
import { useFormik, FieldArray } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const FreelancerForm = () => {
  const router = useRouter();
const [values,setuser]=useState( {
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
  isfreelancer: true,
  consultant: false,
})

  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setuser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
    const handleSubmit= async ()=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/FreelancerRegister`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success('Freelancer created successfully!');
        setTimeout(() => {
          router.push('/otp');
        }, 3000);
      } else {
        toast.error('Error creating freelancer!');
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-cyan-500">
      <form onSubmit={handleSubmit} className="max-w-lg p-6 mx-auto bg-black rounded-lg text-cyan-500">
        <ToastContainer />
        <div className="mb-4">
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={ handleChange}
             
            value={ values.firstName}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={ handleChange}
             
            value={ values.lastName}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">User Name</label>
          <input
            type="text"
            name="userName"
            onChange={ handleChange}
             
            value={ values.userName}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={ handleChange}
             
            value={ values.password}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="Email"
            onChange={ handleChange}
             
            value={ values.Email}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={ handleChange}
             
            value={ values.phone}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date of Birth</label>
          <input
            type="date"
            name="Dob"
            onChange={ handleChange}
             
            value={ values.Dob}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <input
            type="text"
            name="Role"
            onChange={ handleChange}
             
            value={ values.Role}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Per Hour Price</label>
          <input
            type="number"
            name="perHourPrice"
            onChange={ handleChange}
             
            value={ values.perHourPrice}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Work Experience</label>
          <input
            type="text"
            name="workExperience"
            onChange={ handleChange}
             
            value={ values.workExperience}
            className="w-full p-2 bg-black border rounded border-cyan-500"
          />
        </div>
        <FieldArray
          name="Skills"
          render={arrayHelpers => (
            <div>
              { values.Skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <label className="block mb-2">Skill {index + 1}</label>
                  <input
                    type="text"
                    name={`Skills.${index}.name`}
                    onChange={ handleChange}
                     
                    value={ values.Skills[index].name}
                    placeholder="Skill Name"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="text"
                    name={`Skills.${index}.level`}
                    onChange={ handleChange}
                     
                    value={ values.Skills[index].level}
                    placeholder="Skill Level"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="text"
                    name={`Skills.${index}.experience`}
                    onChange={ handleChange}
                     
                    value={ values.Skills[index].experience}
                    placeholder="Skill Experience"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                    className="p-2 text-black bg-red-500 rounded hover:bg-red-700"
                  >
                    Remove Skill
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => arrayHelpers.push({ name: '', level: '', experience: '' })}
                className="p-2 text-black rounded bg-cyan-500 hover:bg-cyan-700"
              >
                Add Skill
              </button>
            </div>
          )}
        />
        <FieldArray
          name="Education"
          render={arrayHelpers => (
            <div>
              { values.Education.map((education, index) => (
                <div key={index} className="mb-4">
                  <label className="block mb-2">Education {index + 1}</label>
                  <input
                    type="text"
                    name={`Education.${index}.degree`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].degree}
                    placeholder="Degree"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="text"
                    name={`Education.${index}.universityName`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].universityName}
                    placeholder="University Name"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="text"
                    name={`Education.${index}.fieldOfStudy`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].fieldOfStudy}
                    placeholder="Field of Study"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="date"
                    name={`Education.${index}.startDate`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].startDate}
                    placeholder="Start Date"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="date"
                    name={`Education.${index}.endDate`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].endDate}
                    placeholder="End Date"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <input
                    type="text"
                    name={`Education.${index}.grade`}
                    onChange={ handleChange}
                     
                    value={ values.Education[index].grade}
                    placeholder="Grade"
                    className="w-full p-2 mb-2 bg-black border rounded border-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                    className="p-2 text-black bg-red-500 rounded hover:bg-red-700"
                  >
                    Remove Education
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => arrayHelpers.push({
                  degree: '',
                  universityName: '',
                  fieldOfStudy: '',
                  startDate: '',
                  endDate: '',
                  grade: '',
                })}
                className="p-2 text-black rounded bg-cyan-500 hover:bg-cyan-700"
              >
                Add Education
              </button>
            </div>
          )}
        />
        <button type="submit" className="w-full p-3 mt-4 text-black rounded bg-cyan-500 hover:bg-cyan-700">Submit</button>
      </form>
    </div>
  );
};

export default FreelancerForm;
